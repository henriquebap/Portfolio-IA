import { motion } from 'framer-motion'
import { Carimbo, Cartao, Pilula, Tela } from './ui'

const CAMPOS = [
  ['Placa', 'FGH2B41'],
  ['Veículo', 'Chevrolet Onix 1.4 · 2019'],
  ['Cliente', 'Carla M.'],
  ['KM na entrada', '58.400'],
  ['Reclamação', 'Barulho ao frear'],
]

// Cadastro rápido: cliente, carro e OS numa tela só. No hero os campos se
// preenchem sozinhos; na demo o visitante toca em "Abrir OS".
export default function TelaNovaOS({ aberta = false, onAbrir, atrasoCarimbo = 0 }) {
  return (
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
      <div className="relative mt-auto">
        {onAbrir && !aberta ? (
          <button type="button" onClick={onAbrir} className="flex h-10 w-full items-center justify-center rounded-lg bg-azul font-semibold text-white chama">
            Abrir OS
          </button>
        ) : (
          <div className="flex h-10 items-center justify-center rounded-lg bg-azul font-semibold text-white">Abrir OS</div>
        )}
        {aberta && (
          <Carimbo atraso={atrasoCarimbo} className="absolute -top-28 right-1 text-[17px]">
            OS 5712 · aberta
          </Carimbo>
        )}
      </div>
    </Tela>
  )
}
