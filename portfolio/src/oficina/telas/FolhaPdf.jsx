import { Logo } from './TelaMarca'

const ITENS = [
  ['Pastilha de freio dianteira', '2', 'R$ 100,00'],
  ['Filtro de óleo', '1', 'R$ 38,00'],
  ['Troca do fluido de freio', '1', 'R$ 160,00'],
  ['Mão de obra', '1', 'R$ 280,00'],
]

const INFO = [
  ['Cliente', 'Carla M.', 15],
  ['Veículo', 'Chevrolet Onix 1.4 · 2019', 75],
  ['Placa', 'FGH2B41', 150],
]

const P = { fill: 'var(--marca-principal)' }
const D = { fill: 'var(--marca-terciaria)' }

// A OS em PDF, no desenho do hob-oficina/src/lib/generate-pdf.ts e nas mesmas
// coordenadas (mm de uma A4): faixa na cor principal, filete na de destaque,
// timbre, tabela e rodapé escrito pelo dono. Dados fictícios.
export default function FolhaPdf({ marca }) {
  return (
    <svg viewBox="0 0 210 297" className="block h-auto w-full rounded-[3px] bg-white shadow-[0_30px_60px_-20px_rgba(17,25,33,0.55)]" fontFamily="Helvetica, Arial, sans-serif" aria-hidden="true">
      <rect width="210" height="42" style={P} />
      <rect y="42" width="210" height="2.5" style={D} />
      <circle cx="180" cy="-10" r="50" fill="#fff" fillOpacity="0.08" />
      <circle cx="200" cy="30" r="25" fill="#fff" fillOpacity="0.08" />
      <rect x="13" y="9" width="24" height="24" rx="4" fill="#fff" />
      <Logo marca={marca} x="15" y="11" width="20" height="20" />
      <text x="42" y="19" fontSize="7" fontWeight="700" fill="#fff">{marca.nome}</text>
      <text x="42" y="26" fontSize="3.6" fill="#fff" fillOpacity="0.75">OFICINA MECÂNICA · CNPJ 00.000.000/0001-00</text>
      <text x="42" y="31" fontSize="3.6" fill="#fff" fillOpacity="0.75">(11) 0000-0000 · WhatsApp (11) 90000-0000</text>
      <text x="195" y="18" fontSize="6.5" fontWeight="700" fill="#fff" textAnchor="end">ORDEM DE SERVIÇO</text>
      <text x="195" y="26" fontSize="4" fill="#fff" textAnchor="end">Nº 0005712 · 29/09/2026</text>

      <rect x="15" y="54" width="3" height="11" rx="1.5" style={P} />
      <text x="22" y="62" fontSize="5" fontWeight="700" style={P}>CLIENTE E VEÍCULO</text>
      {INFO.map(([rotulo, valor, x]) => (
        <g key={rotulo}>
          <text x={x} y="74" fontSize="3.2" fontWeight="700" fill="#64748b">{rotulo.toUpperCase()}</text>
          <text x={x} y="80" fontSize="4.2" fill="#0f172a">{valor}</text>
        </g>
      ))}

      <rect x="15" y="92" width="3" height="11" rx="1.5" style={P} />
      <text x="22" y="100" fontSize="5" fontWeight="700" style={P}>SERVIÇOS E PEÇAS</text>
      <rect x="15" y="108" width="180" height="9" rx="1" style={P} />
      <text x="19" y="113.8" fontSize="3.6" fontWeight="700" fill="#fff">DESCRIÇÃO</text>
      <text x="150" y="113.8" fontSize="3.6" fontWeight="700" fill="#fff" textAnchor="middle">QTD</text>
      <text x="191" y="113.8" fontSize="3.6" fontWeight="700" fill="#fff" textAnchor="end">VALOR</text>
      {ITENS.map(([nome, qtd, valor], i) => (
        <g key={nome} transform={`translate(0 ${126 + i * 10})`}>
          <text x="19" fontSize="4" fill="#0f172a">{nome}</text>
          <text x="150" fontSize="4" fill="#0f172a" textAnchor="middle">{qtd}</text>
          <text x="191" fontSize="4" fill="#0f172a" textAnchor="end">{valor}</text>
          <rect x="15" y="4" width="180" height="0.3" fill="#e2e8f0" />
        </g>
      ))}
      <rect x="15" y="170" width="180" height="13" rx="1.5" style={P} fillOpacity="0.1" />
      <text x="20" y="178.6" fontSize="4.4" fontWeight="700" style={P}>TOTAL A PAGAR</text>
      <text x="190" y="178.8" fontSize="6" fontWeight="700" style={P} textAnchor="end">R$ 578,00</text>

      <rect x="15" y="196" width="180" height="32" rx="2" fill="#f8fafc" />
      <text x="20" y="206" fontSize="3.2" fontWeight="700" fill="#64748b">OBSERVAÇÕES DO FECHAMENTO</text>
      <text x="20" y="213" fontSize="3.8" fill="#334155">Pastilhas trocadas nas duas rodas. Fluido no nível.</text>
      <text x="20" y="219" fontSize="3.8" fill="#334155">Próxima revisão perto dos 60 mil km.</text>

      <rect y="278" width="210" height="19" fill="#f1f5f9" />
      <rect x="15" y="278" width="180" height="0.5" style={D} />
      <text x="15" y="286" fontSize="3.6" fill="#475569">{marca.rodape}</text>
      <text x="195" y="286" fontSize="3.6" fontWeight="700" style={P} textAnchor="end">Página 1/1</text>
    </svg>
  )
}
