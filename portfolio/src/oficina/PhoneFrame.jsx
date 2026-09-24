import { useLayoutEffect, useRef, useState } from 'react'

// Largura lógica da tela: as telas são desenhadas para 300 px e a moldura escala
// o conjunto, então o texto fica igual no celular e no desktop. A altura lógica
// acompanha a proporção real da moldura.
const LARGURA = 300

export default function PhoneFrame({ children, className = '' }) {
  const ref = useRef(null)
  const [tela, setTela] = useState({ escala: 1, altura: 634 })

  useLayoutEffect(() => {
    const el = ref.current
    const ro = new ResizeObserver(([e]) => {
      const escala = e.contentRect.width / LARGURA
      setTela({ escala, altura: e.contentRect.height / escala })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className={`relative aspect-[300/634] rounded-[2.4rem] bg-tinta p-[9px] shadow-[0_40px_70px_-35px_rgba(17,25,33,0.6)] ${className}`}>
      <div ref={ref} className="relative size-full overflow-hidden rounded-[1.95rem] bg-white">
        <div className="absolute left-0 top-0 origin-top-left" style={{ width: LARGURA, height: tela.altura, transform: `scale(${tela.escala})` }}>
          <div className="flex h-7 items-center justify-between bg-white px-6 pt-1 text-[11px] font-semibold text-slate-900">
            <span>9:41</span>
            <span className="h-4 w-16 rounded-full bg-tinta" />
            <span className="font-mono text-[10px]">4G</span>
          </div>
          <div className="h-[calc(100%-1.75rem)]">{children}</div>
        </div>
      </div>
    </div>
  )
}
