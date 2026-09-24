import { AREAS, IMAGEM, NIVEIS, REGIOES, VISTAS } from './regioes'
import { Cartao, Pilula, Tela } from './ui'

// Port do ViewFrame de hob-oficina/src/components/vehicle-map.tsx: a <img> é
// posicionada por porcentagem para mostrar só o recorte, e o <svg> usa as
// coordenadas da imagem original.
function Vista({ vista, niveis, selecionada, onArea }) {
  const { box, rotulo } = VISTAS[vista]
  const [x, y, w, h] = box
  return (
    <div className="relative overflow-hidden rounded-lg bg-white" style={{ aspectRatio: `${w} / ${h}` }}>
      <img
        src={IMAGEM.src}
        alt=""
        draggable={false}
        className="pointer-events-none absolute max-w-none select-none"
        style={{ left: `${(-x / w) * 100}%`, top: `${(-y / h) * 100}%`, width: `${(IMAGEM.largura / w) * 100}%`, height: `${(IMAGEM.altura / h) * 100}%` }}
      />
      <svg viewBox={`${x} ${y} ${w} ${h}`} className="absolute inset-0 size-full" role="group" aria-label={rotulo}>
        {REGIOES.filter((r) => r.vista === vista).map((r) => (
          <path
            key={r.id}
            d={r.d}
            className="vm-region"
            data-level={niveis[r.area]}
            data-selected={selecionada === r.area}
            {...(onArea
              ? {
                  role: 'button',
                  tabIndex: 0,
                  'aria-label': `${AREAS[r.area]}: ${niveis[r.area] ? NIVEIS[niveis[r.area]].rotulo : 'sem marcação'}`,
                  onClick: () => onArea(r.area),
                  onKeyDown: (e) => {
                    if (e.key !== 'Enter' && e.key !== ' ') return
                    e.preventDefault()
                    onArea(r.area)
                  },
                }
              : {})}
          />
        ))}
      </svg>
    </div>
  )
}

export default function TelaVistoria({ niveis = {}, onArea }) {
  const marcadas = Object.entries(niveis)
  const piores = marcadas.filter(([, n]) => n !== 'BOM')
  const selecionada = piores[0]?.[0] ?? null
  return (
    <Tela>
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-bold">Vistoria · OS 5712</p>
        <Pilula>{marcadas.length} de 8 áreas</Pilula>
      </div>
      <div className="grid gap-1.5">
        <Vista vista="top" niveis={niveis} selecionada={selecionada} onArea={onArea} />
        <Vista vista="side" niveis={niveis} selecionada={selecionada} onArea={onArea} />
      </div>
      <Cartao className="grid gap-1.5">
        {piores.length === 0 && <p className="text-slate-500">{onArea ? 'Toque numa área do carro para marcar.' : 'Nenhum problema marcado ainda.'}</p>}
        {piores.map(([area, nivel]) => (
          <div key={area} className="flex items-center justify-between gap-2">
            <span className="font-medium">{AREAS[area]}</span>
            <span className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-500">2 fotos</span>
              <Pilula tom={NIVEIS[nivel].tom}>{NIVEIS[nivel].rotulo}</Pilula>
            </span>
          </div>
        ))}
        {marcadas.length > piores.length && (
          <p className="text-[10.5px] text-slate-500">{marcadas.length - piores.length} áreas OK</p>
        )}
      </Cartao>
      <Cartao className="grid gap-1">
        <p className="font-semibold">Orçamento, item a item</p>
        <p className="flex justify-between"><span>Pastilhas dianteiras</span><Pilula tom="verde">aprovado</Pilula></p>
        <p className="flex justify-between"><span>Fluido de freio</span><Pilula tom="verde">aprovado</Pilula></p>
        <p className="flex justify-between"><span>Óleo do câmbio</span><Pilula>depois</Pilula></p>
      </Cartao>
    </Tela>
  )
}
