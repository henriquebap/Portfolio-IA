// Fotografa uma página em Chrome headless, no desktop (1280×800) e no celular (390×844),
// uma foto por altura de tela, via CDP com o WebSocket nativo do Node 22.
// Por que não o painel do navegador do app: escondido, ele pausa o rAF e os whileInView do
// framer-motion ficam invisíveis na foto (falso "sumiu a seção").
// uso: node scripts/fotos.mjs <url> [pasta]   ex.: node scripts/fotos.mjs http://localhost:4173/oficina /tmp/fotos
// Sai com código 1 se a página jogou erro no console.
import { spawn } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const [url, saida = join(tmpdir(), 'fotos')] = process.argv.slice(2)
if (!url) {
  console.error('uso: node scripts/fotos.mjs <url> [pasta]')
  process.exit(2)
}
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PORTA = 9333
const TAMANHOS = [['desktop', 1280, 800, false], ['celular', 390, 844, true]]
const espera = (ms) => new Promise((r) => setTimeout(r, ms))

mkdirSync(saida, { recursive: true })
const perfil = mkdtempSync(join(tmpdir(), 'fotos-chrome-'))
const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORTA}`, `--user-data-dir=${perfil}`,
  '--no-first-run', '--hide-scrollbars', 'about:blank',
], { stdio: 'ignore' })

try {
  let alvo
  for (let i = 0; i < 50 && !alvo; i++) {
    try { alvo = (await (await fetch(`http://127.0.0.1:${PORTA}/json`)).json()).find((t) => t.type === 'page') } catch { await espera(200) }
  }
  if (!alvo) throw new Error(`Chrome não respondeu na porta ${PORTA} (${CHROME})`)

  const ws = new WebSocket(alvo.webSocketDebuggerUrl)
  await new Promise((r) => ws.addEventListener('open', r, { once: true }))
  let seq = 0
  const pend = new Map()
  const erros = []
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data)
    if (m.id) { pend.get(m.id)?.(m); pend.delete(m.id) }
    else if (m.method === 'Runtime.exceptionThrown') erros.push(m.params.exceptionDetails.exception?.description ?? m.params.exceptionDetails.text)
    else if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') erros.push(m.params.args.map((a) => a.value ?? a.description).join(' '))
  })
  const cdp = (method, params = {}) => new Promise((r, j) => {
    const id = ++seq
    pend.set(id, (m) => (m.error ? j(new Error(`${method}: ${m.error.message}`)) : r(m.result)))
    ws.send(JSON.stringify({ id, method, params }))
  })
  const js = async (expr) => (await cdp('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result.value
  const rola = (y) => js(`scrollTo({ top: ${y}, behavior: 'instant' })`)
  await cdp('Runtime.enable')

  const resumo = {}
  for (const [nome, w, h, mobile] of TAMANHOS) {
    await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: mobile ? 2 : 1, mobile })
    await cdp('Page.navigate', { url })
    await espera(2500)
    // Uma passada rápida monta o que depende de rolagem; a altura final só vale depois dela.
    for (let y = 0; y < await js('document.documentElement.scrollHeight'); y += h / 2) { await rola(y); await espera(60) }
    const total = await js('document.documentElement.scrollHeight')
    let n = 0
    for (let y = 0; y < total; y += h) {
      await rola(y)
      await espera(900)
      const { data } = await cdp('Page.captureScreenshot', { format: 'png' })
      writeFileSync(join(saida, `${nome}-${String(++n).padStart(2, '0')}.png`), Buffer.from(data, 'base64'))
    }
    resumo[nome] = { telas: Math.round((total / h) * 10) / 10, fotos: n }
  }
  ws.close()
  console.log(JSON.stringify({ saida, ...resumo, erros }, null, 1))
  if (erros.length) process.exitCode = 1
} finally {
  // O Chrome ainda grava no perfil depois do kill: esperar ele sair antes de apagar.
  if (chrome.exitCode === null) await new Promise((r) => { chrome.once('exit', r); chrome.kill() })
  rmSync(perfil, { recursive: true, force: true, maxRetries: 5 })
}
