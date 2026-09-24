import { Cartao, Pilula, Tela } from './ui'

const MINHAS = [
  { os: '5698', carro: 'Corolla 2.0 · 2020', servico: 'Óleo do câmbio automático', pilula: ['veio de ontem', 'ambar'] },
  { os: '5712', carro: 'Onix 1.4 · 2019', servico: 'Freios dianteiros', pilula: ['em andamento', 'azul'] },
  { os: '5715', carro: 'Gol 1.0 · 2018', servico: 'Revisão dos 20 mil', pilula: ['aberta', 'cinza'], kit: 'Kit Revisão 20 mil: 6 itens já na OS' },
]

// O que o mecânico vê ao entrar: só as OS dele, com o que ficou de ontem no topo.
export default function TelaEquipe() {
  return (
    <Tela>
      <div>
        <p className="text-[16px] font-bold">Olá, Marcos</p>
        <p className="text-slate-500">Suas OS de hoje</p>
      </div>
      {MINHAS.map((m) => (
        <Cartao key={m.os} borda={m.pilula[1] === 'ambar' ? 'bg-amber-500' : 'bg-azul'} className="grid gap-1 pl-3.5">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold">OS {m.os} · {m.carro}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-600">{m.servico}</span>
            <Pilula tom={m.pilula[1]}>{m.pilula[0]}</Pilula>
          </div>
          {m.kit && <p className="mt-1 rounded-md bg-slate-100 px-2 py-1 text-[10.5px] text-slate-600">{m.kit}</p>}
        </Cartao>
      ))}
      <Cartao className="grid gap-1.5">
        <p className="font-semibold">Semana da equipe</p>
        {[['Marcos', 3, 'w-3/5'], ['Diego', 4, 'w-4/5'], ['Léo', 2, 'w-2/5']].map(([nome, n, w]) => (
          <div key={nome} className="grid grid-cols-[48px_1fr_16px] items-center gap-2">
            <span className="text-slate-600">{nome}</span>
            <span className="h-2 rounded-full bg-slate-100"><span className={`block h-2 rounded-full bg-azul ${w}`} /></span>
            <span className="font-mono text-[10.5px]">{n}</span>
          </div>
        ))}
      </Cartao>
      <p className="px-1 text-[10px] text-slate-500">Cada mecânico vê só as OS dele. O dono vê a semana de todos.</p>
    </Tela>
  )
}
