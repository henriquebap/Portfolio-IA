import { useId } from 'react'

// Símbolo "HB no O" (HOB-Tech/marca/hob-simbolo.svg) em currentColor.
export default function HobSymbol({ className }) {
  const mask = useId()
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <mask id={mask}>
        <rect x="54" y="0" width="46" height="100" fill="#fff" />
        <path d="M54 14H62A11 15.25 0 0 1 62 44.5H54Z" fill="#000" />
        <path d="M54 55.5H64A14 15.25 0 0 1 64 86H54Z" fill="#000" />
        <path d="M90 38C85 43 81 46 81 50C81 54 85 57 90 62Z" fill="#000" />
      </mask>
      <g fill="currentColor">
        <circle cx="50" cy="50" r="50" mask={`url(#${mask})`} />
        <rect x="21" y="10" width="10" height="80" />
        <rect x="31" y="44.5" width="11" height="11" />
        <rect x="42" y="2" width="12" height="96" />
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="12" />
    </svg>
  )
}
