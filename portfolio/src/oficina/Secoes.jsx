import { Carimbo } from './telas/ui'
import {
  BENEFICIOS_FUNDADORA, FUNDADORA_ATE, GARANTIAS, METADE_INSTALACAO, OFICINAS_POR_MES, PLANOS, fundadoraAberta,
} from './oferta'

// Números autorizados pelo Wilson (HOB-Tech/docs/00, "A história"; oficina/01, "Números do produto").
const FICHA_WILMEC = [
  ['Oficina', 'câmbio automático, São Miguel Paulista (SP)'],
  ['Desde', '2010 · 4,8★ em 160 avaliações no Google'],
  ['Histórico trazido', 'mais de 8 anos: 2.078 clientes e 5.527 OS'],
  ['No sistema', 'todo dia, desde agosto de 2026'],
]

export function WilMec() {
  return (
    <section className="bg-azul text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="rotulo text-white/70">A oficina de referência</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,5vw,3.5rem)]">Tudo o que você viu roda hoje na Wil Mec.</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-white/85">
            Ao trazer os dados do sistema antigo, recuperamos informações que ninguém via e enxergamos problemas que antes não
            apareciam.
          </p>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-white/85">
            A Wil Mec também é a oficina experimental: toda novidade roda lá antes de chegar à sua.
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
  'quem procura o sistema mais barato',
  'oficina de uma pessoa só',
  'rede ou franquia',
  'quem não quer mudar o jeito de trabalhar',
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
          <ul className="mt-3 grid gap-2.5">
            {NAO_E_PARA.map((t) => (
              <li key={t} className="flex gap-3 text-lg"><span className="text-grafite" aria-hidden="true">—</span>{t}</li>
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
            <div className="relative rounded-2xl border-2 border-azul bg-white p-7">
              <Carimbo className="absolute -top-5 right-5 bg-white text-[15px]">Parceira fundadora</Carimbo>
              <p className="rotulo text-azul">Até {dataPorExtenso(FUNDADORA_ATE)}</p>
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

const reais = (n) => `R$ ${n}`

export function Planos() {
  return (
    <section className="bg-papel-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="rotulo text-grafite">Planos</p>
        <h2 className="titulo mt-4 text-[clamp(2rem,5vw,3.5rem)]">Por mês, sem fidelidade.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PLANOS.map((p) => (
            <div key={p.nome} className={`relative flex flex-col rounded-2xl bg-white p-7 ${p.destaque ? 'ring-2 ring-azul' : 'ring-1 ring-linha'}`}>
              {p.destaque && <span className="rotulo absolute -top-3 left-7 rounded-full bg-azul px-3 py-1 text-white">{p.destaque}</span>}
              <p className="text-lg font-semibold">{p.nome}</p>
              <p className="mt-3">
                <span className="titulo text-[2.6rem]">{reais(p.preco)}</span>
                <span className="text-grafite"> /mês</span>
              </p>
              <p className="mt-5 leading-relaxed text-grafite">{p.inclui}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[70ch] leading-relaxed text-grafite">
          Mais a instalação presencial, com treinamento da equipe. Pacotes à parte: nota fiscal e WhatsApp dedicado, com
          cobrança automática de quem ficou devendo. Os dados do sistema antigo vêm junto quando dá para exportar.
        </p>
        <div className="mt-12 border-t border-linha pt-8">
          <p className="rotulo text-grafite">Garantias</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {GARANTIAS.map((g) => <li key={g} className="leading-relaxed">{g}</li>)}
          </ul>
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
        <p className="mt-3 text-xs">Telas com dados fictícios. Os números da Wil Mec são reais e foram autorizados.</p>
      </div>
      <nav className="rotulo flex gap-5" aria-label="Outras páginas">
        <a href="/" className="hover:text-azul">Início</a>
        <a href="/sobre" className="hover:text-azul">Sobre mim</a>
        <a href="/hobtech" className="hover:text-azul">HOB Tech</a>
      </nav>
    </footer>
  )
}
