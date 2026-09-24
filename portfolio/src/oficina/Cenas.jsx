import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { CENAS, PILARES } from './roteiro'
import PhoneFrame from './PhoneFrame'
import TelaDaCena from './TelaDaCena'

const N = CENAS.length
const PASSOS = 4

// Cada cena ocupa 1/N do scroll: entra em escala 1, aproxima no foco, segura e
// volta a 1 antes de trocar de tela (a troca acontece sem salto de escala).
const MARCOS = CENAS.flatMap((_, i) => [i + 0.04, i + 0.3, i + 0.72, i + 0.96].map((t) => t / N))
const ESCALAS = CENAS.flatMap((c) => [1, c.zoom, c.zoom, 1])
const ORIGEM_X = CENAS.flatMap((c) => Array(4).fill(c.foco[0]))
const ORIGEM_Y = CENAS.flatMap((c) => Array(4).fill(c.foco[1]))

export default function Cenas() {
  return useReducedMotion() ? <CenasParadas /> : <CenasRolando />
}

function CenasRolando() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const scale = useTransform(scrollYProgress, MARCOS, ESCALAS)
  const originX = useTransform(scrollYProgress, MARCOS, ORIGEM_X)
  const originY = useTransform(scrollYProgress, MARCOS, ORIGEM_Y)
  const [pos, setPos] = useState({ i: 0, passo: 0 })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const x = Math.min(N - 1e-6, Math.max(0, v * N))
    const i = Math.floor(x)
    // A tela completa o roteiro na primeira metade da cena e fica parada no zoom.
    const passo = Math.min(PASSOS - 1, Math.floor((x - i) * PASSOS * 1.6))
    setPos((p) => (p.i === i && p.passo === passo ? p : { i, passo }))
  })

  const cena = CENAS[pos.i]
  return (
    <section id="pilares" ref={ref} aria-label="O sistema funcionando" style={{ height: `${N * 115}svh` }} className="relative">
      <div className="sticky top-0 mx-auto grid h-svh max-w-6xl grid-rows-[minmax(0,1fr)_auto] items-center gap-4 px-5 pb-20 pt-4 md:grid-cols-[minmax(0,1fr)_auto] md:grid-rows-1 md:gap-16 md:py-10">
        <div className="relative z-10 order-2 md:order-1">
          <Trilho ativo={cena.pilar} />
          <AnimatePresence mode="wait">
            <motion.div
              key={cena.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="rounded-2xl bg-papel/95 md:bg-transparent"
            >
              <p className="rotulo text-azul md:hidden">A oficina que {PILARES.find((p) => p.id === cena.pilar).texto}</p>
              <h3 className="titulo mt-2 text-[clamp(1.35rem,3.4vw,2.9rem)] md:mt-8">{cena.titulo}</h3>
              <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-grafite md:mt-5 md:text-lg">{cena.texto}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* O zoom é no celular inteiro, como uma câmera: a tela nunca é cortada por dentro. */}
        <motion.div style={{ scale, originX, originY }} className="order-1 mx-auto h-full max-h-[min(640px,56svh)] md:order-2 md:h-[min(640px,80svh)] md:max-h-none">
          <PhoneFrame className="h-full">
            <motion.div key={cena.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="size-full">
              <TelaDaCena id={cena.id} passo={pos.passo} />
            </motion.div>
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  )
}

// O visitante vê em qual dos 5 perfis a tela da vez se encaixa.
function Trilho({ ativo }) {
  return (
    <ol className="hidden gap-2 md:grid" aria-label="A oficina que…">
      <li className="rotulo mb-1 text-grafite">A oficina que…</li>
      {PILARES.map((p) => (
        <li
          key={p.id}
          aria-current={p.id === ativo ? 'step' : undefined}
          className={`border-l-2 pl-3 text-[15px] transition-colors ${p.id === ativo ? 'border-azul font-semibold text-tinta' : 'border-linha text-grafite/70'}`}
        >
          {p.texto}
        </li>
      ))}
    </ol>
  )
}

// prefers-reduced-motion: as mesmas telas, uma embaixo da outra, sem zoom.
function CenasParadas() {
  return (
    <section id="pilares" aria-label="O sistema funcionando" className="mx-auto grid max-w-6xl gap-20 px-5 py-16">
      {CENAS.map((c) => (
        <div key={c.id} className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="rotulo text-azul">A oficina que {PILARES.find((p) => p.id === c.pilar).texto}</p>
            <h3 className="titulo mt-3 text-[clamp(1.35rem,3.4vw,2.6rem)]">{c.titulo}</h3>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-grafite">{c.texto}</p>
          </div>
          <PhoneFrame className="mx-auto h-[min(600px,80svh)]">
            <TelaDaCena id={c.id} passo={PASSOS - 1} />
          </PhoneFrame>
        </div>
      ))}
    </section>
  )
}
