import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import HobSymbol from '../shared/HobSymbol'
import { MONTAGEM_URL } from '../shared/contato'
import { CONTINUAR, ETAPAS, ORDEM, VAZIA, adicionaisValidos, anterior, brl, etapa, mostraTotal, podeAvancar, proximo, qtdExtras, totais, umaVez } from './montagem'
import Tela from './Telas'

// O follow-up da prospecção (HOB-Tech/docs/04): a oficina monta o plano uma coisa
// por tela e, no fim, manda a montagem no WhatsApp. Cada avanço também vai para o
// painel da prospecção, para o Henrique ver até quem parou no meio.

const CHAVE = 'hob-montagem'
const novaSessao = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

// Rascunho no aparelho: o iOS recarrega a aba ao voltar do WhatsApp. Pode faltar
// (aba anônima, dado bloqueado), e aí a página começa do zero.
function lerRascunho() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE))
    if (salvo && ORDEM.includes(salvo.passo)) return { ...salvo, r: { ...VAZIA, ...salvo.r } }
  } catch {
    // sem rascunho
  }
  return { passo: 'inicio', r: VAZIA, sessao: novaSessao(), seq: 0 }
}

function salvar(estado) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(estado))
  } catch {
    // sem armazenamento: segue sem rascunho
  }
}

// ponytail: sendBeacon com string vai como text/plain, uma requisição "simples",
// sem preflight de CORS, e a resposta não é lida. Cada envio leva a montagem
// inteira, então um que se perca é coberto pelo próximo. Só o build publicado envia.
function enviar(sessao, seq, passo, r, enviado = false) {
  if (!import.meta.env.PROD || !navigator.sendBeacon) return
  const { extras: _extras, ...resto } = r
  const respostas = { ...resto, usuarios_extras: qtdExtras(r), adicionais: adicionaisValidos(r).map((a) => a.id) }
  navigator.sendBeacon(MONTAGEM_URL, JSON.stringify({ sessao, seq, passo, enviado, total: totais(r).mensal, instalacao: umaVez(r).instalacao, respostas }))
}

export default function Planos() {
  const [estado, setEstado] = useState(lerRascunho)
  const { passo, r } = estado
  const primeira = useRef(true)

  useEffect(() => salvar(estado), [estado])

  useEffect(() => {
    if (primeira.current) {
      primeira.current = false
      return
    }
    window.scrollTo(0, 0)
  }, [passo])

  const ir = (novoPasso, novoR = r) => {
    const seq = estado.seq + 1
    setEstado({ ...estado, passo: novoPasso, r: novoR, seq })
    enviar(estado.sessao, seq, novoPasso, novoR)
  }
  const avancar = (novoR = r) => ir(proximo(passo, novoR), novoR)
  const mudar = (campos) => setEstado({ ...estado, r: { ...r, ...campos } })
  const aoEnviar = () => {
    const seq = estado.seq + 1
    setEstado({ ...estado, seq })
    enviar(estado.sessao, seq, passo, r, true)
  }
  const recomecar = () => setEstado({ passo: 'inicio', r: VAZIA, sessao: novaSessao(), seq: 0 })

  const e = etapa(passo)
  const mensal = totais(r).mensal
  const continuar = CONTINUAR[passo]

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="mx-auto w-full max-w-2xl px-5 pt-5">
        <div className="flex items-center justify-between">
          <a href="/oficina" className="flex items-center gap-2.5 text-tinta" aria-label="HOB Oficina, voltar para a página">
            <HobSymbol className="size-7 text-azul" />
            <span className="titulo text-[1rem]">HOB Oficina</span>
          </a>
          {passo !== 'inicio' && <span className="rotulo text-grafite">{e + 1} de {ETAPAS.length} · {ETAPAS[e].nome}</span>}
        </div>
        {passo !== 'inicio' && (
          <div className="mt-4 grid grid-cols-5 gap-1.5" role="progressbar" aria-valuemin={1} aria-valuemax={ETAPAS.length} aria-valuenow={e + 1} aria-label="Progresso da montagem">
            {ETAPAS.map((x, i) => (
              <span key={x.nome} className={`h-1.5 rounded-full transition-colors duration-500 ${i <= e ? 'bg-azul' : 'bg-linha'}`} />
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pb-8 pt-8 md:pt-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.form
            key={passo}
            id="passo"
            noValidate
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            onSubmit={(ev) => {
              ev.preventDefault()
              if (podeAvancar(passo, r)) avancar()
            }}
          >
            <Tela passo={passo} r={r} mudar={mudar} avancar={avancar} ir={ir} aoEnviar={aoEnviar} recomecar={recomecar} />
          </motion.form>
        </AnimatePresence>
      </main>

      {passo !== 'inicio' && (
        <footer className="sticky bottom-0 border-t border-linha bg-papel/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
          <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-5 py-3">
            <button type="button" onClick={() => ir(anterior(passo, r))} className="inline-flex min-h-12 items-center rounded-full px-4 font-semibold text-grafite ring-1 ring-tinta/20 transition-colors hover:text-tinta hover:ring-tinta/50">
              ← Voltar
            </button>
            <p className="flex-1 text-right text-sm leading-tight text-grafite" aria-live="polite">
              {mostraTotal(passo, r) && (
                <><span className="block font-mono text-base font-bold text-tinta">{brl(mensal)}</span>por mês</>
              )}
            </p>
            {continuar && (
              <button type="submit" form="passo" disabled={!podeAvancar(passo, r)} className="inline-flex min-h-12 items-center rounded-full bg-azul px-6 font-semibold text-white transition-colors hover:bg-tinta disabled:cursor-not-allowed disabled:bg-linha disabled:text-grafite">
                {continuar} →
              </button>
            )}
          </div>
        </footer>
      )}
    </div>
  )
}
