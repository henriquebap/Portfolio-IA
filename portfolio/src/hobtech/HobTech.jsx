import ContatoFlutuante from '../shared/ContatoFlutuante'
import Cta from '../shared/Cta'
import HobSymbol from '../shared/HobSymbol'
import { agentWork, caseStudies, productEngineering } from '../data/projects'

// Título e link vêm do portfólio (src/data/projects.js); o resumo é em português,
// sem stack: aqui fala-se do que o sistema faz na operação, não de como é feito.
const todos = [...caseStudies, ...agentWork, ...productEngineering]
const doPortfolio = (id) => todos.find((p) => p.id === id) ?? {}

const CASOS = [
  {
    id: 'wilmec',
    titulo: 'Wil Mec',
    tipo: 'Sistema de gestão · oficina',
    resumo: 'O sistema inteiro de uma oficina de câmbio automático: OS, vistoria, estoque, financeiro e pós-venda, usado todo dia pela equipe. Virou o HOB Oficina.',
    link: { href: '/oficina', texto: 'Ver o HOB Oficina' },
    destaque: true,
  },
  {
    id: 'vinibap',
    tipo: 'Site, painel e documentos',
    resumo: 'Site com painel administrativo e um sistema que gera documentos personalizados a partir do que a equipe cadastra.',
  },
  {
    id: 'wordin',
    tipo: 'Plataforma no ar',
    resumo: 'Transforma gravações longas em documentos organizados, com cada afirmação ligada ao trecho de onde saiu.',
  },
  {
    id: 'datathon-passos-magicos',
    titulo: 'Passos Mágicos',
    tipo: 'IA para uma ONG',
    resumo: 'Modelo que aponta os alunos em risco de defasagem escolar, com um painel para a equipe decidir onde agir primeiro.',
    textoLink: 'Ver o painel',
  },
  {
    id: 'mission-philippines',
    titulo: 'Missão Filipinas',
    tipo: 'Site com painel',
    resumo: 'Campanha bilíngue com métricas ao vivo, captação de contatos e painel administrativo para a equipe.',
  },
]

const MENSAGEM = 'Oi, Henrique! Vi a HOB Tech e quero conversar sobre um projeto.'

export default function HobTech() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/" className="flex items-center gap-2.5 text-tinta" aria-label="Início">
          <HobSymbol className="size-8 text-azul" />
          <span className="titulo text-[1.05rem]">HOB Tech</span>
        </a>
        <a href="#conversa" className="rotulo rounded-full px-4 py-2.5 text-tinta ring-1 ring-tinta/25 transition-colors hover:bg-tinta hover:text-papel">
          Conversar
        </a>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:pb-28 md:pt-20">
          <p className="rotulo text-grafite">Projetos sob medida</p>
          <h1 className="titulo mt-5 max-w-[20ch] text-[clamp(2.3rem,6vw,4.8rem)]">
            Sistemas de gestão construídos dentro da operação, com IA onde ela faz diferença.
          </h1>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-grafite">
            Sou o Henrique Baptista, fundador da HOB Tech, especialista em desenvolvimento de sistemas e IA e pós-graduado em
            Machine Learning Engineering. Antes de escrever o sistema, eu entendo como o trabalho acontece de verdade.
          </p>
        </section>

        <section className="border-t border-linha bg-papel-2">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <p className="rotulo text-grafite">O que já está rodando</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {CASOS.map((c) => {
                const p = doPortfolio(c.id)
                const link = c.link ?? (p.liveUrl && { href: p.liveUrl, texto: c.textoLink ?? new URL(p.liveUrl).hostname.replace('www.', '') })
                return (
                  <article key={c.id} className={`flex flex-col rounded-2xl bg-white p-7 ring-1 ring-linha ${c.destaque ? 'md:col-span-2' : ''}`}>
                    <p className="rotulo text-azul">{c.tipo}</p>
                    <h2 className="titulo mt-3 text-[1.7rem]">{c.titulo ?? p.title}</h2>
                    <p className="mt-3 leading-relaxed text-grafite">{c.resumo}</p>
                    {link && (
                      <a
                        href={link.href}
                        {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="rotulo mt-auto inline-flex min-h-11 items-end pt-5 text-tinta hover:text-azul"
                      >
                        {link.texto} →
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <Cta
          titulo="Tem uma operação que merece um sistema de verdade?"
          texto="Me conta como o trabalho acontece hoje. Em 20 minutos por vídeo eu digo se dá para ajudar e por onde começaria."
          mensagem={MENSAGEM}
        />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 py-10 text-sm text-grafite">
        <p><span className="font-semibold text-tinta">HOB Tech</span> · Henrique Baptista · São Paulo</p>
        <nav className="rotulo flex gap-5" aria-label="Outras páginas">
          <a href="/" className="hover:text-azul">Início</a>
          <a href="/sobre" className="hover:text-azul">Sobre mim</a>
          <a href="/oficina" className="hover:text-azul">HOB Oficina</a>
        </nav>
      </footer>
      <ContatoFlutuante mensagem={MENSAGEM} />
    </>
  )
}
