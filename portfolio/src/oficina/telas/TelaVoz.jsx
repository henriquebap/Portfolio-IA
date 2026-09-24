import { motion } from 'framer-motion'
import { Mic } from './icones'
import { CabecalhoOS, Cartao, Pilula, Tela } from './ui'

const FRASE = '“troquei o filtro de óleo, duas pastilhas a cinquenta”'
const ITENS = [
  ['Filtro de óleo', '1 × R$ 38,00'],
  ['Pastilha de freio dianteira', '2 × R$ 50,00'],
]

const surge = { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 } }

// passo: 0 microfone parado · 1 frase transcrita · 2 primeiro item · 3 tudo + diagnóstico.
export default function TelaVoz({ passo = 3, onFalar }) {
  const ouvindo = passo === 0 && onFalar
  return (
    <Tela>
      <CabecalhoOS />
      <Cartao>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Serviços e peças</p>
          <button
            type="button"
            onClick={onFalar}
            disabled={!onFalar || passo > 0}
            aria-label="Falar os itens"
            className={`grid size-9 place-items-center rounded-full text-white ${passo === 1 ? 'bg-red-500' : 'bg-azul'} ${ouvindo ? 'chama' : ''}`}
          >
            <Mic />
          </button>
        </div>
        {passo >= 1 && (
          <motion.p {...surge} className="mt-2 rounded-lg bg-azul/8 p-2 italic text-slate-700">
            {FRASE}
          </motion.p>
        )}
        <ul className="mt-2 divide-y divide-slate-100">
          {ITENS.slice(0, Math.max(0, passo - 1)).map(([nome, valor], i) => (
            <motion.li key={nome} {...surge} transition={{ delay: onFalar ? 0.5 + i * 0.4 : 0 }} className="flex items-center justify-between gap-2 py-2">
              <span>
                <span className="font-medium">{nome}</span> <Pilula>peça</Pilula>
              </span>
              <span className="whitespace-nowrap font-mono text-[11px]">{valor}</span>
            </motion.li>
          ))}
        </ul>
      </Cartao>
      {passo >= 3 && (
        <motion.div {...surge} transition={{ delay: onFalar ? 1.4 : 0 }}>
          <Cartao>
            <p className="font-semibold">Diagnóstico</p>
            <p className="mt-1.5 font-mono text-[10px] text-slate-400 line-through">barul freio diant, pastilha no fim</p>
            <p className="mt-1">Ruído na frenagem dianteira. Pastilhas no limite de desgaste; troca recomendada.</p>
            <p className="mt-2 text-[10px] text-slate-500">Reescrito pela IA, conferido pelo mecânico.</p>
          </Cartao>
        </motion.div>
      )}
    </Tela>
  )
}
