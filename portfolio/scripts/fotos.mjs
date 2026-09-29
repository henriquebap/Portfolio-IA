// Fotografa uma página em Chrome headless, no desktop (1280×800) e no celular (390×844),
// uma foto por altura de tela (Chrome e CDP em chrome.mjs).
// Por que não o painel do navegador do app: escondido, ele pausa o rAF e os whileInView do
// framer-motion ficam invisíveis na foto (falso "sumiu a seção").
// uso: node scripts/fotos.mjs <url> [pasta]   ex.: node scripts/fotos.mjs http://localhost:4173/oficina /tmp/fotos
// Sai com código 1 se a página jogou erro no console.
import { mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { comChrome, espera } from './chrome.mjs'

const [url, saida = join(tmpdir(), 'fotos')] = process.argv.slice(2)
if (!url) {
  console.error('uso: node scripts/fotos.mjs <url> [pasta]')
  process.exit(2)
}
const TAMANHOS = [['desktop', 1280, 800, false], ['celular', 390, 844, true]]

mkdirSync(saida, { recursive: true })
await comChrome(async ({ cdp, js, erros }) => {
  const rola = (y) => js(`scrollTo({ top: ${y}, behavior: 'instant' })`)
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
  console.log(JSON.stringify({ saida, ...resumo, erros }, null, 1))
  if (erros.length) process.exitCode = 1
})
