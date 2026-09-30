import { Balao, Check } from '../oficina/telas/icones'
import ContatoFlutuante from '../shared/ContatoFlutuante'
import Cta from '../shared/Cta'
import HobSymbol from '../shared/HobSymbol'
import { MENSAGEM_DEMO, whatsapp } from '../shared/contato'
import { ABERTURA, DEPOIS, FAZER, FECHAMENTO, PASSOS, SELO, SIMULACAO } from './teste'

// A entrada do teste de 30 dias: a oficina manda mensagem e o Henrique cria a oficina
// dela. Curta de propósito; o texto e o prazo moram em teste.js, aqui só se desenha.
// Só vai ao público depois que a plataforma de oficinas por subdomínio estiver no ar.
const BOTAO = 'inline-flex min-h-12 items-center rounded-full px-6 font-semibold transition-colors'

function Abertura() {
  const [antes, dias, depois] = ABERTURA.titulo
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-6 md:pb-20 md:pt-12">
      <p className="rotulo text-grafite">{ABERTURA.rotulo}</p>
      <h1 className="titulo mt-5 text-[clamp(1.9rem,5vw,3.4rem)]">
        {antes}<span className="text-azul">{dias}</span>{depois}
      </h1>
      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-16">
        <div>
          <p className="max-w-[50ch] text-lg leading-relaxed text-grafite">{ABERTURA.texto}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={whatsapp(MENSAGEM_DEMO)} target="_blank" rel="noopener noreferrer" className={`${BOTAO} bg-azul text-white hover:bg-tinta`}>
              {ABERTURA.botao}
            </a>
            <a href="#como" className={`${BOTAO} text-tinta ring-1 ring-tinta/25 hover:ring-tinta`}>{ABERTURA.ancora}</a>
          </div>
        </div>
        <div>
          <dl className="rounded-2xl bg-white px-5 py-2 ring-1 ring-linha">
            {ABERTURA.ficha.map(([rotulo, valor, dado]) => (
              <div key={rotulo} className="grid gap-0.5 border-b border-linha py-3 last:border-0 sm:grid-cols-[110px_1fr]">
                <dt className="rotulo text-grafite">{rotulo}</dt>
                <dd className={`break-words font-medium ${dado ? 'font-mono text-[13px] sm:text-sm' : ''}`}>{valor}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-grafite">{ABERTURA.privacidade}</p>
        </div>
      </div>
    </section>
  )
}

function Passos() {
  return (
    <section id="como" className="bg-papel-2" aria-labelledby="como-titulo">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-20">
        <h2 id="como-titulo" className="rotulo text-grafite">{PASSOS.rotulo}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3 md:gap-6">
          {PASSOS.itens.map((p, i) => (
            <li key={p.t} className="rounded-2xl bg-white p-4 ring-1 ring-linha md:p-6">
              <span className="font-mono text-sm font-bold text-azul">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug">{p.t}</h3>
              <p className="mt-1.5 leading-snug text-grafite">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function OQueFazer() {
  const { whatsapp: zap } = FAZER
  return (
    <section aria-labelledby="fazer-titulo">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-20">
        <p className="rotulo text-grafite">{FAZER.rotulo}</p>
        <h2 id="fazer-titulo" className="titulo titulo-m mt-3 max-w-[32ch]">{FAZER.titulo}</h2>
        <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
          {FAZER.itens.map((i) => (
            <li key={i.t} className="flex gap-3 border-t border-linha py-4">
              <Check className="mt-1 size-4 shrink-0 text-azul" />
              <div>
                <h3 className="font-bold">{i.t}</h3>
                <p className="mt-0.5 leading-snug text-grafite">{i.d}</p>
              </div>
            </li>
          ))}
          <li className="mt-4 flex gap-3 rounded-2xl bg-azul/8 p-5 ring-1 ring-azul/20 md:mt-4">
            <Balao className="mt-1 size-4 shrink-0 text-azul" />
            <div>
              <h3 className="font-bold">{zap.t}</h3>
              <p className="mt-0.5 leading-snug text-grafite">{zap.d}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

function Simulacao() {
  return (
    <section className="bg-noite text-papel" aria-labelledby="sim-titulo">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-24">
        <p className="rotulo text-azul-claro">{SIMULACAO.rotulo}</p>
        <h2 id="sim-titulo" className="titulo titulo-g mt-4 max-w-[22ch]">{SIMULACAO.titulo}</h2>
        <p className="mt-5 max-w-[56ch] leading-relaxed text-papel/80 md:text-lg">{SIMULACAO.texto}</p>
        {/* O mesmo selo âmbar do app (hob-oficina, SimulacaoBadge). */}
        <p className="mt-4">
          <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-sm font-medium text-amber-300">{SELO}</span>
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {SIMULACAO.itens.map((i) => (
            <li key={i.t} className="rounded-2xl p-5 ring-1 ring-papel/20 md:p-6">
              <h3 className="text-lg font-bold leading-snug">{i.t}</h3>
              <p className="mt-2 leading-snug text-papel/75">{i.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Depois() {
  return (
    <section aria-labelledby="depois-titulo">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-24">
        <p className="rotulo text-grafite">{DEPOIS.rotulo}</p>
        <h2 id="depois-titulo" className="titulo titulo-g mt-4">{DEPOIS.titulo}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          {DEPOIS.caminhos.map((c) => (
            <article key={c.t} className="rounded-2xl bg-white p-5 ring-1 ring-linha md:p-6">
              <h3 className="text-lg font-bold leading-snug">{c.t}</h3>
              <p className="mt-2 leading-snug text-grafite">{c.d}</p>
            </article>
          ))}
        </div>
        <a href="/oficina/planos" className="mt-6 inline-flex min-h-11 items-center font-semibold text-azul underline-offset-4 hover:text-tinta hover:underline">
          {DEPOIS.planos}
        </a>
      </div>
    </section>
  )
}

export default function Demo() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/oficina" className="flex items-center gap-2.5 text-tinta" aria-label="HOB Oficina, voltar para a página">
          <HobSymbol className="size-8 text-azul" />
          <span className="titulo text-[1.05rem]">HOB Oficina</span>
        </a>
        <a href="#conversa" className="rotulo rounded-full px-4 py-2.5 text-tinta ring-1 ring-tinta/25 transition-colors hover:bg-tinta hover:text-papel">
          Conversar
        </a>
      </header>
      <main>
        <Abertura />
        <Passos />
        <OQueFazer />
        <Simulacao />
        <Depois />
        <Cta rotulo={FECHAMENTO.rotulo} titulo={FECHAMENTO.titulo} texto={FECHAMENTO.texto} mensagem={MENSAGEM_DEMO} />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 py-8 text-sm text-grafite">
        <p className="font-semibold text-tinta">Henrique Baptista · fundador da HOB Tech</p>
        <nav className="rotulo flex gap-5" aria-label="Outras páginas">
          <a href="/oficina" className="hover:text-azul">HOB Oficina</a>
          <a href="/oficina/planos" className="hover:text-azul">Planos</a>
          <a href="/" className="hover:text-azul">Início</a>
        </nav>
      </footer>
      <ContatoFlutuante mensagem={MENSAGEM_DEMO} rotulo={FECHAMENTO.rotulo} />
    </>
  )
}
