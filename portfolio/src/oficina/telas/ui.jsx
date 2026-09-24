// Peças das telas de exemplo. Imitam o app (fundo cinza-claro, cartões brancos,
// azul primário) com dados fictícios; nada aqui fala com servidor.

export function AppBar({ titulo = 'Sua Oficina' }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2.5">
      <span className="text-[15px] leading-none text-slate-500">☰</span>
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-azul">{titulo}</span>
      <span className="grid size-6 place-items-center rounded-full bg-azul text-[10px] font-semibold text-white">S</span>
    </div>
  )
}

export function Tela({ children, barra }) {
  return (
    <div className="flex h-full flex-col bg-slate-100 text-[12px] leading-snug text-slate-900">
      {barra ?? <AppBar />}
      <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden p-3">{children}</div>
    </div>
  )
}

export function Cartao({ children, className = '', borda }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 ${className}`}>
      {borda && <span className={`absolute inset-y-0 left-0 w-1 ${borda}`} />}
      {children}
    </div>
  )
}

const TONS = {
  azul: 'bg-azul/10 text-azul',
  verde: 'bg-emerald-500/12 text-emerald-700',
  ambar: 'bg-amber-500/15 text-amber-700',
  vermelho: 'bg-red-500/12 text-red-700',
  cinza: 'bg-slate-500/10 text-slate-600',
}

export function Pilula({ tom = 'cinza', children }) {
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${TONS[tom]}`}>{children}</span>
}

export function Linha({ rotulo, valor, className = '' }) {
  return (
    <div className={`flex items-baseline justify-between gap-3 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{rotulo}</span>
      <span className="text-right font-medium">{valor}</span>
    </div>
  )
}

export function CabecalhoOS({ status = 'Em andamento', tom = 'ambar' }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="text-[16px] font-bold">OS #5712</p>
        <Pilula tom={tom}>{status}</Pilula>
      </div>
      <p className="text-slate-500">Onix 1.4 · 2019 · FGH2B41 · 58.400 km</p>
    </div>
  )
}
