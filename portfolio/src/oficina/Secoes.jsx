import { EMAIL, MENSAGEM_OFICINA, WHATSAPP_EXIBICAO, whatsapp } from '../shared/contato'
import { BENEFICIOS_FUNDADORA, FUNDADORA_ATE, GARANTIAS, MENSALIDADE, METADE_INSTALACAO, OFICINAS_POR_MES, fundadoraAberta } from './oferta'

// Números autorizados pelo Wilson (HOB-Tech/docs/00, "A história"; oficina/01, "Números do produto").
// Sem a data de início do uso (soa recente) e sem "oficina experimental" (decisão de 23/09/2026).
const FICHA_WILMEC = [
  ['Oficina', 'câmbio automático, São Miguel Paulista (SP)'],
  ['Na praça', 'desde 2010 · 4,8★ em 160 avaliações no Google'],
  ['Histórico trazido', 'mais de 8 anos: 2.078 clientes e 5.527 OS'],
  ['No sistema', 'balcão, pátio e financeiro, todo dia'],
]

export function WilMec() {
  return (
    <section id="prova" className="bg-azul text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:gap-12 md:py-24">
        <div>
          <p className="rotulo text-white/70">A oficina de referência</p>
          <h2 className="titulo titulo-g mt-4">Tudo o que você viu roda hoje na <span className="text-azul-claro">Wil Mec.</span></h2>
          <p className="mt-5 max-w-[44ch] leading-relaxed text-white/85 md:text-lg">
            Ao trazer os dados do sistema antigo, enxergamos problemas que antes ninguém via.
          </p>
        </div>
        <dl className="self-end rounded-2xl bg-white/8 px-5 py-2 ring-1 ring-white/20 md:p-6">
          {FICHA_WILMEC.map(([rotulo, valor]) => (
            <div key={rotulo} className="grid gap-0.5 border-b border-white/15 py-3 last:border-0 sm:grid-cols-[150px_1fr]">
              <dt className="rotulo text-white/60">{rotulo}</dt>
              <dd className="font-medium">{valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const dataPorExtenso = (iso) => {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(a, m - 1, d).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })
}

const Marcado = ({ children }) => (
  <li className="flex gap-2.5"><span className="text-azul-claro" aria-hidden="true">✓</span>{children}</li>
)

// Oferta, preço e convite numa caixa só. É o fim da página: o botão flutuante
// some quando #conversa entra na tela (src/shared/ContatoFlutuante.jsx).
export function Oferta() {
  const fundadora = fundadoraAberta()
  const [vista, resto] = [BENEFICIOS_FUNDADORA.slice(0, 3), BENEFICIOS_FUNDADORA.slice(3)]
  return (
    <section className="px-4 py-10 md:px-5 md:py-24">
      <div id="conversa" className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-noite p-6 text-papel md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14 md:p-12">
        <div>
          <p className="rotulo text-azul-claro">Investimento</p>
          <h2 className="titulo titulo-g mt-4">
            De R$&nbsp;{MENSALIDADE.de} a R$&nbsp;{MENSALIDADE.ate} <span className="text-azul-claro">por mês.</span>
          </h2>
          <p className="mt-5 max-w-[46ch] leading-relaxed text-papel/75 md:text-lg">
            O valor depende do que a oficina liga. A instalação é presencial, com treino da equipe, e fecha na conversa. Sem
            fidelidade.
          </p>
          <p className="mt-6 max-w-[46ch] leading-relaxed md:mt-8 md:text-lg">
            Em cada oficina eu mesmo estou por trás. Por isso atendo só <strong>{OFICINAS_POR_MES} por mês</strong>.
          </p>
          {METADE_INSTALACAO && (
            <p className="mt-4 rounded-xl bg-azul-claro/12 px-4 py-3 font-semibold text-azul-claro">
              As 2 primeiras de cada mês pagam metade da instalação.
            </p>
          )}
        </div>

        <div className="grid content-start gap-6">
          {fundadora && (
            <div className="rounded-2xl p-5 ring-1 ring-papel/20 md:p-6">
              <p className="rotulo text-azul-claro">Parceira fundadora · até {dataPorExtenso(FUNDADORA_ATE)}</p>
              <p className="mt-3 font-semibold">Quem fechar até lá ganha:</p>
              <ul className="mt-3 grid gap-2 text-papel/85">
                {vista.map((b) => <Marcado key={b}>{b}</Marcado>)}
              </ul>
              {resto.length > 0 && (
                <details className="mt-3 text-papel/85">
                  <summary className="cursor-pointer text-sm font-semibold text-azul-claro">Ver todos os benefícios</summary>
                  <ul className="mt-2 grid gap-2">
                    {resto.map((b) => <Marcado key={b}>{b}</Marcado>)}
                  </ul>
                </details>
              )}
            </div>
          )}
          <div>
            <p className="leading-relaxed text-papel/75">
              Em 20 minutos por vídeo eu mostro o sistema e entendo como vocês trabalham.
            </p>
            <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
              <a
                href={whatsapp(MENSAGEM_OFICINA)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-wrap items-center justify-center gap-x-2 rounded-full bg-azul-claro px-6 py-2 font-semibold text-noite transition-colors hover:bg-white"
              >
                Chamar no WhatsApp <span className="whitespace-nowrap font-mono text-sm">{WHATSAPP_EXIBICAO}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 items-center justify-center truncate rounded-full px-6 text-sm font-semibold ring-1 ring-papel/30 transition-colors hover:ring-papel"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <ul className="grid gap-2 border-t border-papel/15 pt-5 text-xs leading-relaxed text-papel/60 md:gap-3 md:pt-6 md:text-sm md:col-span-2 md:grid-cols-3">
          {GARANTIAS.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 pb-10 text-sm text-grafite">
      <div>
        <p className="font-semibold text-tinta">Henrique Baptista · fundador da HOB Tech</p>
        <p className="mt-1">Especialista em sistemas e IA, pós-graduado em Machine Learning Engineering.</p>
        <p className="mt-3 text-xs">Telas com dados fictícios. Os números da Wil Mec são reais e foram autorizados pela oficina.</p>
      </div>
      <nav className="rotulo flex gap-5" aria-label="Outras páginas">
        <a href="/" className="hover:text-azul">Início</a>
        <a href="/sobre" className="hover:text-azul">Sobre mim</a>
        <a href="/hobtech" className="hover:text-azul">HOB Tech</a>
      </nav>
    </footer>
  )
}
