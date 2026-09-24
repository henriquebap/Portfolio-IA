import { motion } from 'framer-motion'
import { Check } from './icones'
import { CabecalhoOS, Cartao, Pilula, Tela } from './ui'

const OPORTUNIDADES = [
  { servico: 'Troca do fluido de freio', urgencia: 'Segurança', tom: 'vermelho', motivo: 'Vistoria desta OS: fluido em atenção', valor: 'R$ 160' },
  { servico: 'Óleo do câmbio automático', urgencia: 'Preventivo', tom: 'ambar', motivo: 'No Onix 2019, indicada aos 60 mil km; este está com 58.400', valor: 'R$ 690' },
  { servico: 'Higienização do ar-condicionado', urgencia: 'Conforto', tom: 'azul', motivo: 'Última feita aqui há 14 meses', valor: 'R$ 180' },
]

// mostrar: quantas sugestões aparecem (o scroll revela uma a uma).
// Na demo: oferecer → proposta enviada → aceitou → entra na OS (sempre por clique).
export default function TelaOportunidades({ mostrar = 3, estado = 'nada', onOferecer, onAceitou }) {
  return (
    <Tela>
      <CabecalhoOS />
      <Cartao>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Oportunidades neste carro</p>
          <Pilula tom="azul">{OPORTUNIDADES.length}</Pilula>
        </div>
        <ul className="mt-2 grid gap-2">
          {OPORTUNIDADES.slice(0, mostrar).map((o, i) => (
            <motion.li key={o.servico} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-slate-200 p-2.5">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold">{o.servico}</p>
                <Pilula tom={o.tom}>{o.urgencia}</Pilula>
              </div>
              <p className="mt-1 text-[10.5px] text-slate-600">{o.motivo}</p>
              {i === 0 ? <Acao estado={estado} valor={o.valor} onOferecer={onOferecer} onAceitou={onAceitou} /> : <Botoes valor={o.valor} />}
            </motion.li>
          ))}
        </ul>
      </Cartao>
      <p className="px-1 text-[10px] text-slate-500">A equipe decide o que oferecer. Tudo fica registrado na Central de IA.</p>
    </Tela>
  )
}

function Botoes({ valor, onOferecer }) {
  const Oferecer = onOferecer ? 'button' : 'span'
  return (
    <div className="mt-2 flex items-center gap-1.5">
      <Oferecer
        {...(onOferecer ? { type: 'button', onClick: onOferecer } : {})}
        className={`rounded-md bg-azul px-2.5 py-1 font-semibold text-white ${onOferecer ? 'chama' : ''}`}
      >
        Oferecer
      </Oferecer>
      <span className="rounded-md border border-slate-200 px-2.5 py-1 font-medium text-slate-600">Agora não</span>
      <span className="ml-auto font-mono text-[10.5px] text-slate-500">{valor}</span>
    </div>
  )
}

function Acao({ estado, valor, onOferecer, onAceitou }) {
  if (estado === 'nada') return <Botoes valor={valor} onOferecer={onOferecer} />
  if (estado === 'enviada') {
    return (
      <div className="mt-2 flex items-center gap-1.5">
        <Pilula tom="azul">Proposta enviada à Carla</Pilula>
        {onAceitou && (
          <button type="button" onClick={onAceitou} className="ml-auto rounded-md bg-emerald-600 px-2.5 py-1 font-semibold text-white chama">
            Aceitou: adicionar
          </button>
        )}
      </div>
    )
  }
  return (
    <p className="mt-2 flex items-center gap-1 font-semibold text-emerald-700">
      <Check className="size-3.5" /> Adicionado à OS por você
    </p>
  )
}
