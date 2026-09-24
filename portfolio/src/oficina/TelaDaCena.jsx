import { ROTEIRO } from './telas/regioes'
import TelaAcompanhar from './telas/TelaAcompanhar'
import TelaEquipe from './telas/TelaEquipe'
import TelaGestao from './telas/TelaGestao'
import TelaNota from './telas/TelaNota'
import TelaOportunidades from './telas/TelaOportunidades'
import TelaPainel from './telas/TelaPainel'
import TelaVistoria from './telas/TelaVistoria'
import TelaVoz from './telas/TelaVoz'

// passo (0..3) avança conforme o visitante rola dentro da cena.
const AREAS_POR_PASSO = [1, 2, 5, 8]

export default function TelaDaCena({ id, passo }) {
  switch (id) {
    case 'painel': return <TelaPainel />
    case 'voz': return <TelaVoz passo={passo} />
    case 'oportunidades': return <TelaOportunidades mostrar={Math.min(3, passo + 1)} />
    case 'vistoria': return <TelaVistoria niveis={Object.fromEntries(ROTEIRO.slice(0, AREAS_POR_PASSO[passo]))} />
    case 'acompanhar': return <TelaAcompanhar etapa={Math.min(2, passo)} />
    case 'equipe': return <TelaEquipe />
    case 'gestao': return <TelaGestao />
    case 'nota': return <TelaNota />
    default: return null
  }
}
