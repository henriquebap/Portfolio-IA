// Grava o filme de "Com a sua cara" (/oficina) em MP4, uma volta inteira, sem a página
// em volta: o palco ([data-filme]) vira a tela, o filme volta ao começo e o Chrome
// headless manda cada frame com o horário (Page.startScreencast); o ffmpeg monta a 30 fps.
// uso: node scripts/filme.mjs <url> [pasta]   ex.: node scripts/filme.mjs http://localhost:4173/oficina /tmp/filme
// Saem com-a-sua-cara-horizontal.mp4 (1200×1000) e com-a-sua-cara-vertical.mp4 (1080×1350).
// Precisa do ffmpeg no PATH. Sai com código 1 se a página jogou erro ou o filme atrasou.
// A 1ª legenda já aparece montada (no site também: AnimatePresence com initial={false}).
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { CAPITULOS, DURACAO } from '../src/oficina/roteiro.js'
import { comChrome, espera } from './chrome.mjs'

const [url, saida = join(tmpdir(), 'filme')] = process.argv.slice(2)
if (!url) {
  console.error('uso: node scripts/filme.mjs <url> [pasta]')
  process.exit(2)
}
try {
  execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' })
} catch {
  console.error('filme.mjs precisa do ffmpeg no PATH (brew install ffmpeg)')
  process.exit(2)
}

// nome, largura × altura do palco em px de CSS, escala do vídeo. A largura escolhe o
// layout do palco (sm/md), como no site: 800 é o do desktop, 432 o do celular.
const FORMATOS = [['horizontal', 800, 667, 1.5], ['vertical', 432, 540, 2.5]]

const PALCO_NA_TELA = `[data-filme] { position: fixed !important; inset: 0 !important; z-index: 2147483647;
  aspect-ratio: auto !important; border-radius: 0 !important; box-shadow: none !important; }`

// Sem o controle (reduced-motion some com eles), o erro sobe em vez de gravar nada.
const clica = (rotulo) => `(() => { const b = document.querySelector('[aria-label="${rotulo}"]'); if (!b) throw new Error('sem o controle "${rotulo}"'); b.click() })()`

// Grava uma volta do filme e devolve os frames [horário em s, jpeg em base64] e o atraso
// do filme em relação ao relógio de parede.
async function grava({ cdp, js, ao }, w, h, escala) {
  await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: escala, mobile: false })
  // Com "reduzir movimento" ligado no sistema, o filme fica parado e sem controles.
  await cdp('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] })
  await cdp('Page.navigate', { url })
  await espera(2500)
  await js(`document.fonts.ready.then(() => { const s = document.createElement('style'); s.textContent = ${JSON.stringify(PALCO_NA_TELA)}; document.head.append(s); return true })`)
  // Pausa, volta ao começo e espera o cinza voltar (a cor leva 0,7 s).
  await js(clica('Pausar o filme'))
  await js(clica('Ir para: Logo'))
  await espera(1500)

  // O screencast só manda frame quando a tela muda, e o começo do filme fica parado: o
  // último frame antes do play entra como o primeiro, no horário do clique.
  const frames = []
  let gravando = false
  let parado = null
  ao('Page.screencastFrame', ({ data, metadata, sessionId }) => {
    if (gravando) frames.push([metadata.timestamp, data])
    else parado = data
    cdp('Page.screencastFrameAck', { sessionId }).catch(() => {}) // manda e esquece: no fim, o Chrome fecha com ack pendente
  })
  await cdp('Page.startScreencast', { format: 'jpeg', quality: 95 })
  await espera(400)
  gravando = true
  const clique = await js(`(() => { ${clica('Continuar o filme')}; return (performance.timeOrigin + performance.now()) / 1000 })()`)
  if (!parado) throw new Error('o screencast não mandou o quadro parado do começo')
  frames.unshift([clique, parado])
  // 300 ms antes do fim, a barra do último capítulo diz em que ponto o filme está. Se
  // ficou para trás do relógio de parede, o Chrome não deu conta dos frames e o filme
  // correu devagar no vídeo.
  const medida = DURACAO - 300
  await espera(medida)
  const { ini, fim } = CAPITULOS.at(-1)
  const barra = await js(`new DOMMatrix(getComputedStyle([...document.querySelectorAll('[aria-label^="Ir para"] span > span')].at(-1)).transform).a`)
  await espera(550)
  gravando = false
  await cdp('Page.stopScreencast')
  // O horário do clique (relógio da página) e o dos frames (screencast) precisam bater:
  // a primeira mudança vem com o logo, no fim do 1º quadro.
  const primeiraMudancaMs = Math.round((frames[1][0] - clique) * 1000)
  return { frames, atraso: Math.round(medida - (ini + barra * (fim - ini))), primeiraMudancaMs }
}

// Cada frame dura até o próximo chegar (o screencast só manda quando a tela muda).
function monta(frames, mp4) {
  const pasta = mkdtempSync(join(tmpdir(), 'filme-'))
  try {
    const t0 = frames[0][0]
    let lista = ''
    frames.forEach(([ts, data], i) => {
      const arq = join(pasta, `${String(i).padStart(5, '0')}.jpg`)
      writeFileSync(arq, Buffer.from(data, 'base64'))
      const proximo = i + 1 < frames.length ? frames[i + 1][0] : t0 + DURACAO / 1000
      lista += `file '${arq}'\nduration ${Math.max(0.001, proximo - ts).toFixed(4)}\n`
    })
    writeFileSync(join(pasta, 'lista.txt'), lista)
    execFileSync('ffmpeg', [
      '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', join(pasta, 'lista.txt'),
      '-t', (DURACAO / 1000).toFixed(3), '-vf', 'fps=30,scale=trunc(iw/2)*2:trunc(ih/2)*2:out_range=tv,format=yuv420p',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4,
    ])
    return { janelaMs: Math.round((frames.at(-1)[0] - t0) * 1000), ...(process.env.FILME_DEBUG && { pasta }) }
  } finally {
    if (!process.env.FILME_DEBUG) rmSync(pasta, { recursive: true, force: true })
  }
}

// O screencast sai no tamanho de CSS mesmo com a escala emulada: a escala vem na flag
// do Chrome, então um Chrome por formato.
mkdirSync(saida, { recursive: true })
const resumo = {}
for (const [nome, w, h, escala] of FORMATOS) {
  await comChrome(async (chrome) => {
    const { frames, atraso, primeiraMudancaMs } = await grava(chrome, w, h, escala)
    const mp4 = join(saida, `com-a-sua-cara-${nome}.mp4`)
    const buracos = frames.slice(1).map(([ts], i) => ts - frames[i][0])
    resumo[nome] = {
      mp4,
      frames: frames.length,
      maiorBuracoMs: Math.round(Math.max(...buracos) * 1000),
      atrasoMs: atraso,
      primeiraMudancaMs,
      ...monta(frames, mp4),
      erros: chrome.erros,
    }
    if (atraso > 300 || chrome.erros.length) process.exitCode = 1
  }, [`--force-device-scale-factor=${escala}`])
}
console.log(JSON.stringify({ duracaoMs: DURACAO, ...resumo }, null, 1))
