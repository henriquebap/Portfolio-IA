import { BENEFICIOS_FUNDADORA, FUNDADORA_ATE, METADE_INSTALACAO, OFICINAS_POR_MES, fundadoraAberta } from './oferta'

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
    <section className="bg-azul text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="rotulo text-white/70">A oficina de referência</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,5vw,3.5rem)]">Tudo o que você viu roda hoje na Wil Mec.</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-white/85">
            A equipe usa o sistema no dia a dia, do balcão ao fechamento do mês. Ao trazer os dados do sistema antigo,
            recuperamos informações que ninguém via e enxergamos problemas que antes não apareciam.
          </p>
        </div>
        <dl className="self-end rounded-2xl bg-white/8 p-6 ring-1 ring-white/20">
          {FICHA_WILMEC.map(([rotulo, valor]) => (
            <div key={rotulo} className="grid gap-1 border-b border-white/15 py-3.5 last:border-0 sm:grid-cols-[150px_1fr]">
              <dt className="rotulo text-white/60">{rotulo}</dt>
              <dd className="font-medium">{valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const NAO_E_PARA = [
  'Quem procura um sistema simples e genérico',
  'Oficina que não quer crescer',
  'Quem acha que o cliente só importa até a entrega',
  'Quem não quer trocar por um sistema melhor',
]

export function ParaQuem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <p className="rotulo text-grafite">Para quem é</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,5vw,3.5rem)]">Não é para toda oficina.</h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-grafite">
            É para a oficina que acredita em tecnologia, quer usar IA no dia a dia, quer que o cliente veja o cuidado, quer
            facilitar o trabalho da equipe e quer melhorar o serviço começando pela gestão.
          </p>
        </div>
        <div className="self-end rounded-2xl border border-linha bg-white/60 p-6">
          <p className="rotulo text-grafite">Não é para</p>
          <ul className="mt-3 divide-y divide-linha">
            {NAO_E_PARA.map((t) => (
              <li key={t} className="py-3 text-lg first:pt-1 last:pb-0">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const dataPorExtenso = (iso) => {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(a, m - 1, d).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })
}

export function Oferta() {
  const fundadora = fundadoraAberta()
  return (
    <section className="border-t border-linha">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="rotulo text-grafite">Por que poucas</p>
        <blockquote className="titulo mt-4 max-w-[24ch] text-[clamp(1.6rem,3.8vw,2.8rem)]">
          “Em cada oficina eu mesmo estou por trás. Por isso atendo só {OFICINAS_POR_MES} por mês.”
        </blockquote>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-grafite">
          Conheço o dia a dia de vocês, configuro o sistema do jeito que a oficina trabalha e treino a equipe no balcão. É
          isso que tem vaga limitada, não o software.
        </p>

        <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
          {METADE_INSTALACAO && (
            <div className="rounded-2xl border border-linha bg-white p-7">
              <p className="rotulo text-azul">Todo mês</p>
              <p className="titulo mt-3 text-[clamp(1.4rem,2.6vw,2rem)]">As 2 primeiras de cada mês pagam metade da instalação.</p>
            </div>
          )}
          {fundadora && (
            <div className="rounded-2xl border-2 border-azul bg-white p-7">
              <p className="rotulo text-azul">Parceira fundadora · até {dataPorExtenso(FUNDADORA_ATE)}</p>
              <p className="titulo mt-3 text-[clamp(1.4rem,2.6vw,2rem)]">Quem fechar até lá entra como parceira fundadora.</p>
              <ul className="mt-5 grid gap-2">
                {BENEFICIOS_FUNDADORA.map((b) => (
                  <li key={b} className="flex gap-2.5"><span className="text-azul" aria-hidden="true">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 py-10 text-sm text-grafite">
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
