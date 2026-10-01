import { useState } from 'react'
import { whatsapp } from '../shared/contato'
import { TESTE_DIAS, TESTE_PROMESSA } from './oferta'
import { LIMITE_CAMPO, mensagemTeste, pedidoPronto } from './teste'

const VAZIO = { nome: '', oficina: '', cidade: '' }

const Campo = ({ rotulo, ...props }) => (
  <label className="grid gap-1.5 text-sm text-papel/70">
    {rotulo}
    <input
      maxLength={LIMITE_CAMPO}
      enterKeyHint="next"
      className="min-h-12 rounded-xl bg-papel/10 px-4 text-base text-papel ring-1 ring-papel/25 focus:outline-none focus:ring-2 focus:ring-azul-claro"
      {...props}
    />
  </label>
)

// O pedido vira uma mensagem pronta no WhatsApp do Henrique, como o /oficina/planos:
// sem backend, e quem pede cai no mesmo número da prospecção. A página não promete
// prazo de liberação (Portfolio-IA#13). Dias e texto da oferta vêm de oferta.js.
export default function PedidoTeste() {
  const [d, setD] = useState(VAZIO)
  const muda = (campo) => (e) => setD((p) => ({ ...p, [campo]: e.target.value }))
  const pronto = pedidoPronto(d)
  const botao = 'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-2 font-semibold transition-colors'

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid gap-5 border-t border-papel/15 pt-6 md:col-span-2 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14 md:pt-8"
      aria-labelledby="teste-titulo"
    >
      <div>
        <p className="rotulo text-azul-claro">Teste gratuito · {TESTE_DIAS} dias</p>
        <h3 id="teste-titulo" className="mt-3 text-xl font-semibold md:text-2xl">Prefere ver funcionando antes?</h3>
        <p className="mt-2 max-w-[46ch] leading-relaxed text-papel/75">
          {TESTE_PROMESSA}
        </p>
      </div>
      <div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Campo rotulo="Seu nome" name="nome" autoComplete="name" required value={d.nome} onChange={muda('nome')} />
          <Campo rotulo="Nome da oficina" name="oficina" autoComplete="organization" required value={d.oficina} onChange={muda('oficina')} />
          <div className="sm:col-span-2">
            <Campo rotulo="Cidade (opcional)" name="cidade" autoComplete="address-level2" value={d.cidade} onChange={muda('cidade')} />
          </div>
        </div>
        {pronto ? (
          <a
            href={whatsapp(mensagemTeste(d))}
            target="_blank"
            rel="noopener noreferrer"
            className={`${botao} mt-4 w-full bg-azul-claro text-noite hover:bg-white sm:w-auto`}
          >
            Pedir o teste pelo WhatsApp
          </a>
        ) : (
          <button type="button" disabled className={`${botao} mt-4 w-full cursor-not-allowed bg-papel/15 text-papel/50 sm:w-auto`}>
            Pedir o teste pelo WhatsApp
          </button>
        )}
        <p className="mt-3 text-xs leading-relaxed text-papel/60">Abre o WhatsApp com a mensagem pronta, e eu respondo por lá.</p>
      </div>
    </form>
  )
}
