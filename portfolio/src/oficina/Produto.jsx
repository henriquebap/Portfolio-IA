import { AREAS, selo, texto } from './areas'
import { Check, X } from './telas/icones'

const PONTO = { verde: 'bg-emerald-500', ambar: 'bg-amber-500', azul: 'bg-azul-claro', vermelho: 'bg-red-500' }

function Area({ a }) {
  const [tom, texto] = a.amostra
  return (
    <article
      className={`flex w-[80%] shrink-0 snap-start flex-col rounded-2xl p-5 transition hover:-translate-y-1 md:w-auto ${a.escuro ? 'bg-noite text-papel' : 'bg-white ring-1 ring-linha hover:ring-azul/40'} shadow-[0_18px_40px_-28px_rgba(17,25,33,0.45)]`}
    >
      <span className={`grid size-11 place-items-center rounded-xl ${a.escuro ? 'bg-azul-claro text-noite' : 'bg-azul text-white'}`}>
        <a.icone className="size-5" />
      </span>
      <p className={`rotulo mt-4 ${a.escuro ? 'text-azul-claro' : 'text-grafite'}`}>{a.titulo}</p>
      <h3 className="mt-1 text-lg font-bold leading-snug">{a.destaque}</h3>
      <p className={`mt-1.5 text-[15px] leading-snug ${a.escuro ? 'text-papel/70' : 'text-grafite'}`}>{a.resumo}</p>
      <div className="mt-auto pt-4">
        <span className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-mono text-[12px] ${a.escuro ? 'bg-white/10 text-papel' : 'bg-papel-2 text-tinta'}`}>
          <span className={`size-2 shrink-0 rounded-full ${PONTO[tom]}`} aria-hidden="true" />
          {texto}
        </span>
      </div>
    </article>
  )
}

export function Recursos() {
  return (
    <section id="recursos" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="px-5">
          <p className="rotulo text-grafite">O que tem dentro</p>
          <h2 className="titulo titulo-m mt-3">Do balcão ao <span className="text-azul">fechamento</span> do mês.</h2>
          <p className="rotulo mt-3 text-grafite/70 md:hidden">Arraste para o lado →</p>
        </div>
        {/* ponytail: no celular, carrossel nativo (scroll-snap) em vez de 6 cartões empilhados. */}
        <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-4 md:mt-8 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0">
          {AREAS.map((a) => <Area key={a.titulo} a={a} />)}
        </div>
        <details className="group mx-5 mt-3 rounded-2xl border border-linha md:mt-4">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between px-5 font-semibold">
            Ver tudo o que tem dentro <span className="text-azul transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <div className="grid gap-8 border-t border-linha p-5 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => (
              <div key={a.titulo}>
                <p className="rotulo text-azul">{a.titulo}</p>
                <ul className="mt-3 grid gap-2 text-[15px]">
                  {a.itens.map((i) => (
                    <li key={texto(i)} className="flex gap-2.5 leading-snug">
                      <span className="text-azul" aria-hidden="true">·</span>
                      <span>
                        {texto(i)}
                        {selo(i) && <span className="rotulo ml-2 whitespace-nowrap text-[10px] text-azul">{selo(i)}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}

// O que a HOB tem e a maioria não tem ou só promete. Comparação honesta, sem
// citar concorrente: diferenciais de HOB-Tech/docs/00. maioria: o que é comum
// no mercado; sem ela, o ✗ fala sozinho.
const PROMETE = [
  { tem: 'Nasceu dentro de uma oficina e roda nela todo dia', maioria: 'feito para qualquer negócio' },
  { tem: 'Instalação presencial, com a equipe treinada no balcão', maioria: 'cadastro online e vídeo tutorial' },
  { tem: 'IA por trás de cada OS: sugere, escreve e organiza. Quem decide é a equipe', maioria: 'um chat na propaganda', soPromete: true },
  { tem: 'Cliente vê as fotos, aprova item a item e acompanha pelo celular', maioria: 'o cliente recebe um PDF' },
  { tem: 'Quem levou o carro sem pagar fica na tela até pagar' },
  { tem: 'Fatura do cartão lida e conferida' },
  { tem: 'O que a sua oficina precisa vira funcionalidade só de vocês', maioria: 'pedido vira chamado' },
]

export function PorQue() {
  return (
    <section id="por-que" className="bg-noite text-papel">
      <div className="mx-auto max-w-4xl px-5 py-12 md:py-20">
        <p className="rotulo text-azul-claro">Por que a HOB</p>
        <h2 className="titulo titulo-m mt-3">Muito sistema promete. Tudo o que você viu aqui <span className="text-azul-claro">já funciona.</span></h2>
        <table className="mt-7 w-full border-separate border-spacing-0 text-left md:mt-9">
          <thead>
            <tr className="rotulo text-[11px] md:text-xs">
              <th className="pb-3 font-medium text-papel/50"><span className="sr-only">O que conta</span></th>
              <th className="w-20 whitespace-nowrap pb-3 text-center font-medium text-papel/50 md:w-28">A maioria</th>
              <th className="w-14 pb-3 text-center font-medium text-azul-claro md:w-28">HOB</th>
            </tr>
          </thead>
          <tbody>
            {PROMETE.map((l) => (
              <tr key={l.tem}>
                <td className="border-t border-papel/12 py-3.5 pr-3">
                  <p className="font-semibold leading-snug md:text-lg">{l.tem}</p>
                  {l.maioria && <p className="mt-0.5 hidden text-sm text-papel/45 sm:block">Na maioria: {l.maioria}.</p>}
                </td>
                <td className="border-t border-papel/12 py-3.5 text-center">
                  <span className="inline-grid size-8 place-items-center rounded-full bg-red-500/20 text-red-400 ring-1 ring-red-400/30">
                    <X className="size-4" />
                  </span>
                  <span className={l.soPromete ? 'mt-1 block text-[11px] text-red-300/80' : 'sr-only'}>{l.soPromete ? 'só promete' : 'não tem'}</span>
                </td>
                <td className="border-t border-papel/12 py-3.5 text-center">
                  <span className="inline-grid size-8 place-items-center rounded-full bg-azul-claro text-noite">
                    <Check className="size-4" />
                  </span>
                  <span className="sr-only">tem</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-7 max-w-[60ch] leading-relaxed text-papel/85 md:text-lg">
          Comece pelo plano que cabe no seu dia e ligue os adicionais quando fizer sentido.
        </p>
        <p className="mt-2 text-sm text-papel/55 md:text-base">Não é para quem busca o sistema mais barato nem para quem não quer mudar o jeito de trabalhar.</p>
      </div>
    </section>
  )
}
