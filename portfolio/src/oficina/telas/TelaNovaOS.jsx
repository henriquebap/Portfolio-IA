import { motion } from 'framer-motion'
import { Check } from './icones'
import { CabecalhoOS, Cartao, Linha, Pilula, Tela } from './ui'

const CAMPOS = [
  ['Placa', 'FGH2B41'],
  ['Veículo', 'Chevrolet Onix 1.4 · 2019'],
  ['Cliente', 'Carla M.'],
  ['KM na entrada', '58.400'],
  ['Reclamação', 'Barulho ao frear'],
]

// Cadastro rápido: cliente, carro e OS numa tela só. Quando `aberta`, a tela da
// OS entra por cima depois de `atraso` segundos, como no app (sem carimbo).
export default function TelaNovaOS({ aberta = false, onAbrir, atraso = 0.2 }) {
  return (
    <div className="relative size-full overflow-hidden">
      <Tela>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-bold">Nova OS</p>
          <Pilula tom="azul">cadastro rápido</Pilula>
        </div>
        <Cartao className="grid gap-2.5">
          {CAMPOS.map(([rotulo, valor], i) => (
            <div key={rotulo} className="grid gap-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{rotulo}</span>
              <span className="flex h-8 items-center overflow-hidden rounded-md border border-slate-200 bg-slate-50 px-2 font-medium">
                <motion.span initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.25 }}>
                  {valor}
                </motion.span>
              </span>
            </div>
          ))}
        </Cartao>
        {onAbrir && !aberta ? (
          <button type="button" onClick={onAbrir} className="chama mt-auto flex h-10 items-center justify-center rounded-lg bg-azul font-semibold text-white">
            Abrir OS
          </button>
        ) : (
          <motion.div
            animate={aberta ? { scale: [1, 0.95, 1] } : {}}
            transition={{ delay: Math.max(0, atraso - 0.35), duration: 0.3 }}
            className="mt-auto flex h-10 items-center justify-center rounded-lg bg-azul font-semibold text-white"
          >
            Abrir OS
          </motion.div>
        )}
      </Tela>

      {aberta && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ delay: atraso, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute inset-0"
        >
          <OSAberta atraso={atraso} />
        </motion.div>
      )}
    </div>
  )
}

function OSAberta({ atraso }) {
  return (
    <Tela>
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: atraso + 0.45 }}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-500/12 px-2.5 py-2 font-semibold text-emerald-700"
      >
        <Check className="size-3.5" /> OS aberta. O link do cliente já está pronto.
      </motion.p>
      <CabecalhoOS status="Aberta" tom="azul" />
      <Cartao className="grid gap-1.5">
        <Linha rotulo="Cliente" valor="Carla M." />
        <Linha rotulo="Reclamação" valor="Barulho ao frear" />
        <Linha rotulo="Mecânico" valor="Marcos" />
      </Cartao>
      <Cartao className="grid gap-2">
        <p className="font-semibold">Acompanhamento da cliente</p>
        <p className="truncate rounded-md bg-slate-100 px-2 py-1.5 font-mono text-[10.5px] text-slate-600">…/acompanhar/5712</p>
        <span className="rounded-lg border border-slate-200 py-1.5 text-center font-semibold text-azul">Enviar link no WhatsApp</span>
      </Cartao>
      <span className="mt-auto flex h-10 items-center justify-center rounded-lg bg-azul font-semibold text-white">Fazer a vistoria</span>
    </Tela>
  )
}
