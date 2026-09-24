import { Check } from './icones'
import { Cartao, Pilula, Tela } from './ui'

const DEVENDO = [
  ['Gol · FKT3C19', 'há 12 dias', 'R$ 640,00'],
  ['Civic · EZB8D52', 'há 4 dias', 'R$ 1.120,00'],
]

export default function TelaGestao() {
  return (
    <Tela>
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-bold">Financeiro · setembro</p>
        <Pilula>só o dono</Pilula>
      </div>
      <Cartao borda="bg-red-500" className="grid gap-2 pl-3.5">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Entregue e não pago</p>
          <Pilula tom="vermelho">{DEVENDO.length}</Pilula>
        </div>
        {DEVENDO.map(([carro, quando, valor]) => (
          <div key={carro} className="flex items-center justify-between gap-2">
            <span className="grid"><span className="font-medium">{carro}</span><span className="text-[10.5px] text-slate-500">{quando}</span></span>
            <span className="flex items-center gap-1.5">
              <span className="whitespace-nowrap font-mono text-[11px]">{valor}</span>
              <span className="rounded-md bg-azul px-2 py-0.5 text-[10.5px] font-semibold text-white">Cobrar</span>
            </span>
          </div>
        ))}
        <p className="text-[10px] text-slate-500">Fica aqui até pagar.</p>
      </Cartao>
      <Cartao className="grid gap-1">
        <p className="font-semibold">Fatura do cartão importada</p>
        <p className="text-slate-600">23 despesas lidas e separadas por categoria</p>
        <p className="flex items-center gap-1 font-medium text-emerald-700"><Check className="size-3.5" /> Soma confere com a fatura: R$ 4.812,36</p>
      </Cartao>
      <Cartao className="grid gap-2">
        <p className="font-semibold">Fechar setembro</p>
        <div className="grid grid-cols-3 gap-1 text-center text-[10.5px]">
          {['Recebido', 'Despesas', 'Resultado'].map((r) => (
            <span key={r} className="rounded-md bg-slate-100 px-1 py-1.5 text-slate-600">{r}</span>
          ))}
        </div>
        <span className="rounded-lg bg-azul py-2 text-center font-semibold text-white">Gerar DRE e CSV para o contador</span>
      </Cartao>
    </Tela>
  )
}
