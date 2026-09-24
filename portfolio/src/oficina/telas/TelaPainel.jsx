import { Download } from './icones'
import { Cartao, Pilula, Tela } from './ui'

const QUADROS = [
  ['No pátio agora', '7', '3 em andamento', 'bg-azul'],
  ['Aguardando peça', '2', 'paradas esperando', 'bg-amber-500'],
  ['Prontas p/ entrega', '3', 'avisar o cliente', 'bg-emerald-500'],
  ['Orçamentos', '4', 'esperando resposta', 'bg-slate-400'],
]

// Semanas do mês: recebido × pago, em % da maior barra.
const SEMANAS = [[62, 40], [80, 52], [55, 47], [92, 38]]

export default function TelaPainel() {
  return (
    <Tela>
      <div>
        <p className="text-[16px] font-bold">Painel</p>
        <p className="text-slate-500">quarta-feira, 23 de setembro</p>
      </div>
      <div className="flex gap-1.5">
        <span className="rounded-lg bg-azul px-2.5 py-1.5 font-semibold text-white">+ Nova OS</span>
        <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-medium">Novo orçamento</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {QUADROS.map(([rotulo, n, sub, cor]) => (
          <Cartao key={rotulo} borda={cor} className="pl-3.5">
            <p className="font-medium">{rotulo}</p>
            <p className="mt-1 text-[22px] font-bold leading-none">{n}</p>
            <p className="mt-1 text-[10px] text-slate-500">{sub}</p>
          </Cartao>
        ))}
      </div>
      <Cartao>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Financeiro do mês</p>
          <Pilula>só o dono vê</Pilula>
        </div>
        <div className="mt-3 flex h-16 items-end gap-3">
          {SEMANAS.map(([rec, pago], i) => (
            <div key={i} className="flex h-full flex-1 items-end gap-1">
              <span className="w-full rounded-t bg-azul" style={{ height: `${rec}%` }} />
              <span className="w-full rounded-t bg-slate-300" style={{ height: `${pago}%` }} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-[10px] text-slate-500">recebido × pago, por semana</p>
      </Cartao>
      <Cartao className="flex items-center gap-3">
        <div className="grid h-16 w-12 shrink-0 content-start gap-1 rounded-sm border border-slate-200 bg-white p-1 shadow-sm">
          <span className="h-2.5 rounded-[2px] bg-azul" />
          <span className="h-1 w-3/4 rounded bg-slate-200" />
          <span className="h-1 rounded bg-slate-200" />
          <span className="h-1 w-2/3 rounded bg-slate-200" />
          <span className="h-1 rounded bg-slate-200" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold">OS-5712.pdf</p>
          <p className="text-[10px] text-slate-500">com o logo e as cores da sua oficina</p>
        </div>
        <Download className="size-4 text-azul" />
      </Cartao>
    </Tela>
  )
}
