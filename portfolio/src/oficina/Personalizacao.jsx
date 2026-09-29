import { AnimatePresence, cancelFrame, frame, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useTransform } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import { whatsapp } from '../shared/contato'
import { OFICINAS_POR_MES } from './oferta'
import PhoneFrame from './PhoneFrame'
import { CAPITULOS, DURACAO, FILME, GENERICO, MARCAS, PALETAS, quadroEm } from './roteiro'
import FolhaPdf from './telas/FolhaPdf'
import { Chave, Documento, Paleta, Pausa, Tocar } from './telas/icones'
import TelaMarca from './telas/TelaMarca'

// O que existe no hob-oficina desde 28/09/2026: cores do app (Configurações ›
// Geral, PR #44), aparência do PDF (PR #23) e o logo, que a HOB põe na instalação.
// Na Wil Mec a marca é fixa: a prova dela, logo depois, fala do "dia a dia", não de "tudo".
const PONTOS = [
  {
    icone: Paleta,
    titulo: 'O app nas cores de vocês.',
    texto: 'Uma das paletas prontas ou as cores da marca, do botão ao menu, para a equipe toda. Se a cor não dá leitura, o sistema ajusta e avisa.',
  },
  {
    icone: Documento,
    titulo: 'O PDF com o timbre de vocês.',
    texto: 'Logo, endereço, CNPJ, rodapé e condições do orçamento, em carta timbrada ou compacto.',
  },
  {
    icone: Chave,
    titulo: 'Do jeito que a oficina trabalha.',
    texto: 'Antes de instalar, eu conheço o dia a dia de vocês e configuro o sistema do jeito da oficina.',
  },
]

// Sem movimento, o filme fica parado no quadro do PDF, já com a marca.
const PARADO = FILME.findIndex((q) => q.pdf)

const coresDo = (q) => {
  const c = q.cores ? PALETAS[MARCAS[q.marca].paleta].cores : GENERICO
  return { '--marca-principal': c.principal, '--marca-secundaria': c.secundaria, '--marca-terciaria': c.terciaria, '--marca-fundo': c.fundo }
}

export default function Personalizacao() {
  const reduz = useReducedMotion()
  const palco = useRef(null)
  const naTela = useInView(palco, { amount: 0.5 })
  const [pausado, setPausado] = useState(false)
  const [i, setI] = useState(0)
  const t = useMotionValue(0)

  // O relógio do filme: só se inscreve no rAF na tela e sem pausa. O quadro sai do
  // tempo, e a barra lê o tempo direto, sem re-render a cada frame. O framer-motion
  // limita o delta a 40 ms: voltar de outra aba não pula o filme.
  useEffect(() => {
    if (reduz || !naTela || pausado) return
    const passo = ({ delta }) => t.set((t.get() + delta) % DURACAO)
    frame.update(passo, true)
    return () => cancelFrame(passo)
  }, [reduz, naTela, pausado, t])
  useMotionValueEvent(t, 'change', (v) => setI(quadroEm(v)))

  const q = FILME[reduz ? PARADO : i]
  return (
    <section id="sua-cara" aria-labelledby="sua-cara-titulo">
      {/* No celular o filme vem logo depois do título; no desktop, ao lado de tudo.
          Só este bloco veste a cor do filme: o convite embaixo fica no azul da HOB. */}
      <div style={coresDo(q)} className="marca mx-auto grid max-w-6xl gap-8 px-5 pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:grid-rows-[auto_1fr] md:gap-x-14 md:gap-y-8 md:pt-24">
        <div>
          <p className="rotulo text-grafite">Com a sua cara</p>
          <h2 id="sua-cara-titulo" className="titulo titulo-g mt-4">
            Na sua oficina, o sistema tem a <span className="text-azul">sua cara.</span>
          </h2>
          <p className="mt-5 max-w-[46ch] leading-relaxed text-grafite md:text-lg">
            Logo, cores e o PDF que chega ao cliente saem com a marca de vocês. Não é sistema de prateleira com o seu nome em
            cima.
          </p>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
          <Palco ref={palco} q={q} reduz={reduz} />
          {!reduz && <Controles t={t} q={q} pausado={pausado} alternar={() => setPausado((p) => !p)} />}
        </div>

        <ul className="grid content-start gap-5">
          {PONTOS.map((p) => (
            <li key={p.titulo} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-azul text-white">
                <p.icone className="size-5" />
              </span>
              <p className="leading-snug">
                <strong className="block text-lg">{p.titulo}</strong>
                <span className="text-grafite">{p.texto}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 md:py-20">
        <div className="grid items-center gap-6 rounded-3xl bg-white p-6 ring-1 ring-linha md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-10 md:p-10 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <p className="titulo text-[clamp(4.5rem,11vw,7.5rem)] text-azul">{OFICINAS_POR_MES}</p>
          <div>
            <p className="titulo titulo-m">oficinas por mês.</p>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-grafite md:text-lg">
              Personalizar assim leva o meu tempo, oficina por oficina: em cada uma, eu mesmo estou por trás. Por isso o número é
              pequeno.
            </p>
          </div>
          <a
            href={whatsapp('Oi, Henrique! Vi o HOB Oficina e quero o sistema com a cara da minha oficina.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-azul px-6 py-3 md:col-start-2 md:justify-self-start lg:col-start-auto text-center font-semibold leading-snug text-white transition-colors hover:bg-tinta md:rounded-full"
          >
            Quero com a cara da minha oficina&nbsp;→
          </a>
        </div>
      </div>
    </section>
  )
}

// O "vídeo": o celular com o app e a folha do PDF saindo dele, legenda embaixo.
// Decorativo para leitor de tela: a mensagem está no texto da seção. data-filme: o
// scripts/filme.mjs grava este palco em MP4.
function Palco({ ref, q, reduz }) {
  const marca = MARCAS[q.marca ?? 0]
  return (
    <div ref={ref} data-filme aria-hidden="true" className="relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-(--marca-fundo) ring-1 ring-linha sm:max-md:aspect-[6/5] lg:aspect-[6/5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgb(255_255_255/0.9),transparent_55%)]" />
      {/* O celular fica no centro e abre espaço quando a folha do PDF sai dele. */}
      <div className={`absolute inset-x-[7%] top-[4%] flex h-[74%] ${q.pdf ? 'justify-start' : 'justify-center'}`}>
        <motion.div layout transition={{ type: 'spring', stiffness: 140, damping: 20 }} className="h-full">
          <PhoneFrame className="h-full">
            <TelaMarca q={q} />
          </PhoneFrame>
        </motion.div>
      </div>
      <AnimatePresence initial={!reduz}>
        {q.pdf && (
          <motion.div
            key="pdf"
            initial={{ x: '-45%', y: '12%', rotate: -8, scale: 0.55, opacity: 0 }}
            animate={{ x: 0, y: 0, rotate: 3, scale: 1, opacity: 1 }}
            exit={{ y: '8%', opacity: 0, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.35 }}
            className="absolute right-[5%] top-[12%] w-[50%] sm:right-[7%] sm:top-[8%] sm:w-[42%]"
          >
            <FolhaPdf marca={marca} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-(--marca-fundo) from-45% to-transparent px-5 pb-4 pt-12 md:px-7 md:pb-6">
        <AnimatePresence mode="wait" initial={false}>
          <Legenda key={q.legenda} q={q} />
        </AnimatePresence>
      </div>
    </div>
  )
}

// A legenda entra palavra por palavra, subindo de uma máscara, como letreiro de
// vídeo: letra do título (Archivo expandido), sem tarja, e a chave na cor da marca.
function Legenda({ q }) {
  const n = CAPITULOS.findIndex((c) => c.id === q.cap)
  const [antes, depois] = q.chave ? q.legenda.split(q.chave) : [q.legenda, '']
  const palavras = [[antes, false], [q.chave ?? '', true], [depois, false]].flatMap(([texto, chave]) =>
    texto.split(' ').filter(Boolean).map((p) => [p, chave]),
  )
  return (
    <motion.div exit={{ opacity: 0, y: -10, transition: { duration: 0.18 } }}>
      <p className="rotulo text-[10px] text-azul md:text-xs">{String(n + 1).padStart(2, '0')} · {CAPITULOS[n].rotulo}</p>
      <p className="titulo mt-1.5 text-[1.15rem] leading-[1.05] md:text-[1.45rem]">
        {palavras.map(([p, chave], i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.045 * i, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                className={`inline-block ${chave ? 'text-azul' : ''}`}
              >
                {p}
              </motion.span>
            </span>
          </Fragment>
        ))}
      </p>
    </motion.div>
  )
}

// Pausa (WCAG 2.2.2: movimento de mais de 5 s) e os capítulos, que levam ao começo de cada um.
function Controles({ t, q, pausado, alternar }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <button
        type="button"
        onClick={alternar}
        aria-label={pausado ? 'Continuar o filme' : 'Pausar o filme'}
        className="grid size-10 shrink-0 place-items-center rounded-full bg-tinta text-papel transition-colors hover:bg-azul"
      >
        {pausado ? <Tocar className="size-4" /> : <Pausa className="size-4" />}
      </button>
      <ol className="grid flex-1 grid-cols-4 gap-1.5">
        {CAPITULOS.map((c) => <Capitulo key={c.id} c={c} t={t} atual={q.cap === c.id} />)}
      </ol>
    </div>
  )
}

function Capitulo({ c, t, atual }) {
  const scaleX = useTransform(t, [c.ini, c.fim], [0, 1])
  return (
    <li>
      <button type="button" onClick={() => t.set(c.ini)} aria-label={`Ir para: ${c.rotulo}`} aria-current={atual ? 'step' : undefined} className="block w-full py-1 text-left">
        <span className="block h-1 overflow-hidden rounded-full bg-tinta/15">
          <motion.span style={{ scaleX }} className="block h-full origin-left bg-azul" />
        </span>
        <span className={`rotulo mt-1.5 block text-[10px] tracking-normal ${atual ? 'font-bold text-tinta' : 'text-grafite'}`}>{c.rotulo}</span>
      </button>
    </li>
  )
}
