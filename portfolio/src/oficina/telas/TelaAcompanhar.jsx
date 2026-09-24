import { motion } from 'framer-motion'
import { Bell, Download, Mail } from './icones'
import { Carimbo, Cartao, Linha, Pilula } from './ui'

const ITENS = [
  ['Pastilha de freio dianteira', '2 × R$ 50,00'],
  ['Filtro de óleo', 'R$ 38,00'],
  ['Troca do fluido de freio', 'R$ 160,00'],
  ['Mão de obra', 'R$ 280,00'],
]
const STATUS = [
  ['Em andamento', 'ambar'],
  ['Pronto para retirar', 'verde'],
  ['Entregue', 'azul'],
]
const AVISOS = [
  null,
  { icone: Mail, texto: 'Seu Onix está pronto para retirar.' },
  { icone: Mail, texto: 'Obrigado, Carla! Como foi? Avalie no Google ★★★★★' },
]

// A página pública da OS, no celular do cliente: status, itens e total. Nunca custo,
// fornecedor ou mecânico. etapa: 0 em andamento · 1 pronto · 2 entregue.
export default function TelaAcompanhar({ etapa = 0, onEntregar }) {
  const [status, tom] = STATUS[etapa]
  const aviso = AVISOS[etapa]
  return (
    <div className="relative flex h-full flex-col bg-white text-[12px] leading-snug text-slate-900">
      <div className="mx-3 mt-1 truncate rounded-full bg-slate-100 px-3 py-1.5 text-center font-mono text-[10px] text-slate-500">…/acompanhar/5712</div>
      {aviso && (
        <motion.div key={etapa} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute inset-x-2 bottom-3 z-10 flex gap-2 rounded-2xl bg-slate-900/92 p-2.5 text-white shadow-lg">
          <aviso.icone className="mt-0.5 size-4 shrink-0 text-azul-claro" />
          <span><b className="block text-[10px] uppercase tracking-wider text-white/60">E-mail · Sua Oficina</b>{aviso.texto}</span>
        </motion.div>
      )}
      <div className="flex min-h-0 flex-1 flex-col gap-2.5 p-3 pt-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-azul">Sua Oficina</p>
          <Pilula tom={tom}>{status}</Pilula>
        </div>
        <div>
          <p className="text-[16px] font-bold">Ordem de serviço 5712</p>
          <p className="text-slate-500">Chevrolet Onix 1.4 · 2019 · FGH2B41</p>
        </div>
        <Cartao className="grid gap-1.5">
          {ITENS.map(([nome, valor]) => (
            <div key={nome} className="flex justify-between gap-2"><span>{nome}</span><span className="font-mono text-[11px]">{valor}</span></div>
          ))}
          <Linha rotulo="Total" valor="R$ 578,00" className="mt-1 border-t border-slate-100 pt-2 text-[14px] font-bold" />
        </Cartao>
        <div className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 font-medium text-azul">
          <Download className="size-3.5" /> Baixar PDF da OS
        </div>
        {etapa === 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-1.5 rounded-lg bg-azul/8 p-2 text-slate-700">
            <Bell className="size-3.5 shrink-0 text-azul" /> Lembrete da revisão dos 60 mil marcado para perto de 15/11.
          </motion.p>
        )}
        <div className="relative mt-auto mb-20">
          {onEntregar && etapa < 2 && (
            <button type="button" onClick={onEntregar} className="flex h-10 w-full items-center justify-center rounded-lg bg-azul font-semibold text-white chama">
              Entregar o carro
            </button>
          )}
          {onEntregar && etapa === 2 && <Carimbo className="absolute -top-24 right-2 text-[17px]">Entregue</Carimbo>}
        </div>
      </div>
    </div>
  )
}
