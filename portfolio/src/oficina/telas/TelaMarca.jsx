import { AnimatePresence, motion } from 'framer-motion'
import { MARCAS, PALETAS } from '../roteiro'
import { Carteira, Celular, Chave, Download, Prancheta } from './icones'
import { Cartao, Pilula } from './ui'

const FORMAS = {
  escudo: 'M12 1.5 21 5v6.2c0 5.4-3.8 9.9-9 11.3-5.2-1.4-9-5.9-9-11.3V5z',
  circulo: 'M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 1 0 0-21z',
  hexagono: 'M12 1.5 21.2 6.8v10.4L12 22.5l-9.2-5.3V6.8z',
}

// O logo de uma oficina fictícia: monograma nas cores da paleta dela, que é de
// onde o app tira as cores no filme. props extras vão para o <svg> (x, y, width…).
export function Logo({ marca, ...props }) {
  const { principal, terciaria } = PALETAS[marca.paleta].cores
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d={FORMAS[marca.forma]} fill={principal} stroke={terciaria} strokeWidth="1.6" />
      <text x="12" y="15.4" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" fontFamily="Archivo, sans-serif">{marca.sigla}</text>
    </svg>
  )
}

const MENU = [Prancheta, Chave, Celular, Carteira]

// As cores de estado não mudam com a marca: dizem estado, não marca (como no PDF).
const PATIO = [
  ['#5710', 'HB20 · 2021', 'verde', 'Pronto'],
  ['#5709', 'Corolla · 2018', 'ambar', 'Aguardando peça'],
]

// O app em ilhas (hob-oficina, shell de 26/09): as 4 cores vêm das variáveis
// --marca-* da seção, e o azul das peças de ui.jsx já é a principal (oficina.css).
// q: o quadro do filme (roteiro.js, FILME).
export default function TelaMarca({ q }) {
  const marca = q.logo ? MARCAS[q.marca] : null
  return (
    <div className="relative flex h-full flex-col gap-2.5 bg-(--marca-fundo) p-2.5 text-[12px] leading-snug text-slate-900">
      <div className="flex h-11 items-center justify-between rounded-full bg-white px-3 shadow-sm">
        <AnimatePresence mode="popLayout" initial={false}>
          {marca ? (
            <motion.span
              key={marca.sigla}
              initial={{ opacity: 0, y: 26, scale: 1.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex items-center gap-2 font-bold"
            >
              <Logo marca={marca} className="size-7" />
              {marca.nome}
            </motion.span>
          ) : (
            <motion.span key="generico" exit={{ opacity: 0 }} className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Sua Oficina
            </motion.span>
          )}
        </AnimatePresence>
        <span className="grid size-7 place-items-center rounded-full bg-azul text-[11px] font-semibold text-white">B</span>
      </div>

      <div className="flex gap-1.5 text-[11px] font-semibold">
        <span className="rounded-full bg-(--marca-secundaria) px-3 py-1 text-white">Ordens</span>
        <span className="rounded-full bg-white px-3 py-1 text-slate-500">Agenda</span>
        <span className="rounded-full bg-white px-3 py-1 text-slate-500">Clientes</span>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-[16px] font-bold">Hoje, 3 no pátio</p>
        <span className="rounded-lg bg-(--marca-terciaria) px-3 py-1.5 font-bold text-(--marca-secundaria)">+ Nova OS</span>
      </div>

      <Cartao className="grid gap-2">
        <div className="flex items-center justify-between">
          <p className="font-bold">OS #5712</p>
          <Pilula tom="azul">Em andamento</Pilula>
        </div>
        <p className="text-slate-500">Chevrolet Onix 1.4 · 2019 · FGH2B41</p>
        <span className="h-1.5 overflow-hidden rounded-full bg-slate-100"><span className="block h-full w-2/3 rounded-full bg-azul" /></span>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-azul">Ver detalhes</span>
          <AnimatePresence>
            {q.pdf && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="chama flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 font-semibold text-azul"
              >
                <Download className="size-3.5" /> PDF da OS
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </Cartao>

      {PATIO.map(([os, carro, tom, status]) => (
        <Cartao key={os} className="flex items-center justify-between py-2">
          <span><b>{os}</b> <span className="text-slate-500">{carro}</span></span>
          <Pilula tom={tom}>{status}</Pilula>
        </Cartao>
      ))}

      <AnimatePresence>
        {q.paletas && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.35 }}>
            <Cartao className="grid gap-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Configurações · Paletas prontas</p>
              <div className="grid grid-cols-2 gap-1.5">
                {PALETAS.map((p, i) => (
                  <Amostra key={p.nome} paleta={p} alvo={i === MARCAS[q.marca].paleta} escolhida={q.cores} />
                ))}
              </div>
            </Cartao>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-x-8 bottom-3 flex justify-around rounded-full bg-(--marca-secundaria) px-2 py-2">
        {MENU.map((Icone, i) => (
          <span key={i} className={`grid size-8 place-items-center rounded-full ${i === 0 ? 'bg-(--marca-terciaria) text-(--marca-secundaria)' : 'text-white/60'}`}>
            <Icone className="size-4" />
          </span>
        ))}
      </div>
    </div>
  )
}

// Uma paleta pronta: as 3 cores e o nome. A da oficina pulsa até ser escolhida.
function Amostra({ paleta, alvo, escolhida }) {
  const { principal, secundaria, terciaria } = paleta.cores
  return (
    <span className={`flex items-center gap-1.5 rounded-lg border px-1.5 py-1 ${alvo && escolhida ? 'border-azul ring-2 ring-azul/30' : 'border-slate-200'} ${alvo && !escolhida ? 'chama' : ''}`}>
      <span className="flex -space-x-1">
        {[principal, secundaria, terciaria].map((c) => <span key={c} className="size-3 rounded-full ring-1 ring-white" style={{ background: c }} />)}
      </span>
      <span className="truncate text-[10px] font-medium">{paleta.nome}</span>
    </span>
  )
}
