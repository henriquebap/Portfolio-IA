// Chrome headless por CDP, com o WebSocket nativo do Node 22: sobe o Chrome num perfil
// temporário e numa porta livre, entrega cdp()/js(), junta os erros do console e fecha
// tudo no fim. Usado por fotos.mjs e filme.mjs.
import { spawn } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

export const espera = (ms) => new Promise((r) => setTimeout(r, ms))

// fn recebe { cdp, js, ao, erros }. ao(método, cb): ouve um evento do CDP (um por método).
// js() lança o erro da página em vez de devolver undefined. extras: flags a mais.
export async function comChrome(fn, extras = []) {
  const perfil = mkdtempSync(join(tmpdir(), 'chrome-'))
  // Porta 0: o Chrome escolhe uma livre e escreve em DevToolsActivePort. Porta fixa
  // deixaria o script falar com um Chrome velho que ficou aberto nela.
  const chrome = spawn(CHROME, [
    '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${perfil}`,
    '--no-first-run', '--hide-scrollbars', ...extras, 'about:blank',
  ], { stdio: 'ignore' })

  try {
    let alvo
    for (let i = 0; i < 50 && !alvo; i++) {
      try {
        const porta = readFileSync(join(perfil, 'DevToolsActivePort'), 'utf8').split('\n')[0]
        alvo = (await (await fetch(`http://127.0.0.1:${porta}/json`)).json()).find((t) => t.type === 'page')
      } catch { /* ainda subindo */ }
      if (!alvo) await espera(200)
    }
    if (!alvo) throw new Error(`Chrome não respondeu (${CHROME})`)

    const ws = new WebSocket(alvo.webSocketDebuggerUrl)
    await new Promise((r) => ws.addEventListener('open', r, { once: true }))
    let seq = 0
    const pend = new Map()
    const ouvintes = new Map()
    const erros = []
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data)
      if (m.id) { pend.get(m.id)?.(m); pend.delete(m.id) }
      else if (m.method === 'Runtime.exceptionThrown') erros.push(m.params.exceptionDetails.exception?.description ?? m.params.exceptionDetails.text)
      else if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') erros.push(m.params.args.map((a) => a.value ?? a.description).join(' '))
      else ouvintes.get(m.method)?.(m.params)
    })
    // Se o Chrome cai no meio, quem espera resposta recebe o erro em vez de travar.
    ws.addEventListener('close', () => pend.forEach((cb) => cb({ error: { message: 'o Chrome fechou' } })))
    const cdp = (method, params = {}) => new Promise((r, j) => {
      const id = ++seq
      pend.set(id, (m) => (m.error ? j(new Error(`${method}: ${m.error.message}`)) : r(m.result)))
      ws.send(JSON.stringify({ id, method, params }))
    })
    const js = async (expr) => {
      const r = await cdp('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description ?? r.exceptionDetails.text)
      return r.result.value
    }
    const ao = (metodo, cb) => ouvintes.set(metodo, cb)
    await cdp('Runtime.enable')

    const resultado = await fn({ cdp, js, ao, erros })
    ws.close()
    return resultado
  } finally {
    // O Chrome ainda grava no perfil depois do kill: esperar ele sair antes de apagar
    // (se já caiu por sinal, o exit já passou e não há o que esperar).
    if (chrome.exitCode === null && chrome.signalCode === null) await new Promise((r) => { chrome.once('exit', r); chrome.kill() })
    rmSync(perfil, { recursive: true, force: true, maxRetries: 5 })
  }
}
