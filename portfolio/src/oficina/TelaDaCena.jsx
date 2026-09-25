import { ROTEIRO } from './telas/regioes'
import TelaAcompanhar from './telas/TelaAcompanhar'
import TelaGestao from './telas/TelaGestao'
import TelaOportunidades from './telas/TelaOportunidades'
import TelaVistoria from './telas/TelaVistoria'
import TelaVoz from './telas/TelaVoz'

// passo (0..3) avança conforme o visitante rola dentro da cena.
const AREAS_POR_PASSO = [1, 2, 5, 8]

export default function TelaDaCena({ id, passo }) {
  switch (id) {
    case 'voz': return <TelaVoz passo={passo} />
    case 'oportunidades': return <TelaOportunidades mostrar={Math.min(3, passo + 1)} />
    case 'vistoria': return <TelaVistoria niveis={Object.fromEntries(ROTEIRO.slice(0, AREAS_POR_PASSO[passo]))} />
    case 'acompanhar': return <TelaAcompanhar etapa={Math.min(2, passo)} />
    case 'gestao': return <TelaGestao />
    default: return null
  }
}
