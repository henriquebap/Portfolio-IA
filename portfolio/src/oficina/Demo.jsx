import { useState } from 'react'
import PhoneFrame from './PhoneFrame'
import { AREAS, NIVEIS } from './telas/regioes'
import TelaAcompanhar from './telas/TelaAcompanhar'
import TelaNovaOS from './telas/TelaNovaOS'
import TelaOportunidades from './telas/TelaOportunidades'
import TelaVistoria from './telas/TelaVistoria'
import TelaVoz from './telas/TelaVoz'

const PASSOS = [
  { id: 'abrir', rotulo: 'Abrir a OS', dica: 'Toque em Abrir OS.' },
  { id: 'vistoria', rotulo: 'Fazer a vistoria', dica: 'Toque nas áreas do carro: cada toque troca entre OK, atenção e crítico.' },
  { id: 'voz', rotulo: 'Falar os itens', dica: 'Toque no microfone.' },
  { id: 'oportunidade', rotulo: 'Oferecer o que vale', dica: 'Toque em Oferecer e depois em Aceitou.' },
  { id: 'entregar', rotulo: 'Entregar o carro', dica: 'Toque em Entregar o carro.' },
]

const CICLO = { undefined: 'BOM', BOM: 'ATENCAO', ATENCAO: 'CRITICO', CRITICO: 'BOM' }

const INICIO = { aberta: false, niveis: {}, falou: false, oferta: 'nada', entregue: false }

// Demo roteirizada, só no navegador: nada é salvo e nada sai daqui.
export default function Demo() {
  const [atual, setAtual] = useState(0)
  const [s, setS] = useState(INICIO)
  const [aviso, setAviso] = useState('')

  const faz = (mudanca, texto) => {
    setS((v) => ({ ...v, ...mudanca }))
    setAviso(texto)
  }

  const telas = {
    abrir: <TelaNovaOS aberta={s.aberta} onAbrir={() => faz({ aberta: true }, 'OS 5712 aberta.')} />,
    vistoria: (
      <TelaVistoria
        niveis={s.niveis}
        onArea={(area) => {
          const nivel = CICLO[s.niveis[area]]
          faz({ niveis: { ...s.niveis, [area]: nivel } }, `${AREAS[area]}: ${NIVEIS[nivel].rotulo}.`)
        }}
      />
    ),
    voz: <TelaVoz passo={s.falou ? 3 : 0} onFalar={() => faz({ falou: true }, 'Dois itens entraram na OS e o diagnóstico foi reescrito.')} />,
    oportunidade: (
      <TelaOportunidades
        estado={s.oferta}
        onOferecer={() => faz({ oferta: 'enviada' }, 'Proposta enviada à cliente.')}
        onAceitou={() => faz({ oferta: 'aceita' }, 'Fluido de freio adicionado à OS.')}
      />
    ),
    entregar: <TelaAcompanhar etapa={s.entregue ? 2 : 1} onEntregar={() => faz({ entregue: true }, 'Carro entregue. Foi o e-mail com o pedido de avaliação.')} />,
  }

  const ultimo = atual === PASSOS.length - 1
  const recomecar = () => {
    setS(INICIO)
    setAtual(0)
    setAviso('')
  }

  return (
    <section id="experimente" className="border-y border-linha bg-papel-2">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:py-28">
        <div>
          <p className="rotulo text-azul">Experimente</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,5vw,3.5rem)]">Passe um carro pela oficina.</h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-grafite">
            Do balcão à entrega, em cinco passos. É de exemplo: nada é salvo e nenhuma mensagem sai daqui.
          </p>
          <ol className="mt-9 grid max-w-lg gap-1.5">
            {PASSOS.map((p, i) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setAtual(i)}
                  aria-current={i === atual ? 'step' : undefined}
                  className={`flex w-full items-baseline gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${i === atual ? 'bg-white shadow-sm ring-1 ring-linha' : 'hover:bg-white/60'}`}
                >
                  <span className={`font-mono text-sm ${i < atual ? 'text-azul' : 'text-grafite'}`}>{i < atual ? '✓' : `${i + 1}.`}</span>
                  <span>
                    <span className={`block font-semibold ${i === atual ? 'text-tinta' : 'text-grafite'}`}>{p.rotulo}</span>
                    {i === atual && <span className="mt-0.5 block text-sm text-grafite">{p.dica}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={ultimo ? recomecar : () => setAtual(atual + 1)}
              className="inline-flex min-h-12 items-center rounded-full bg-tinta px-6 font-semibold text-papel transition-colors hover:bg-azul"
            >
              {ultimo ? 'Recomeçar' : `Próximo: ${PASSOS[atual + 1].rotulo.toLowerCase()}`}
            </button>
            <p className="text-sm text-grafite" aria-live="polite">{aviso}</p>
          </div>
        </div>
        <PhoneFrame className="mx-auto h-[min(620px,82svh)]">{telas[PASSOS[atual].id]}</PhoneFrame>
      </div>
    </section>
  )
}
