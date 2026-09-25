import { useState } from 'react'
import { MENSAGEM_OFICINA, whatsapp } from '../shared/contato'
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
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 md:py-24">
        <div>
          <p className="rotulo text-azul">Experimente</p>
          <h2 className="titulo titulo-m mt-3">Passe um <span className="text-azul">carro</span> pela oficina.</h2>
          <a
            href={whatsapp(MENSAGEM_OFICINA)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-azul px-6 font-semibold text-white transition-colors hover:bg-tinta"
          >
            Quero ver na minha oficina
          </a>

          <div className="mt-8 max-w-md rounded-2xl bg-white p-5 ring-1 ring-linha md:mt-10">
            {/* ponytail: números em vez da lista dos 5 passos; o nome aparece só no passo da vez. */}
            <div className="flex gap-1.5" role="group" aria-label="Passos da demonstração">
              {PASSOS.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setAtual(i)}
                  aria-current={i === atual ? 'step' : undefined}
                  aria-label={`Passo ${i + 1}: ${p.rotulo}`}
                  className={`grid size-9 place-items-center rounded-full font-mono text-sm transition-colors ${i === atual ? 'bg-tinta text-papel' : i < atual ? 'bg-azul/10 text-azul' : 'bg-papel-2 text-grafite hover:bg-linha'}`}
                >
                  {i < atual ? '✓' : i + 1}
                </button>
              ))}
            </div>
            <p className="mt-4 font-semibold">{PASSOS[atual].rotulo}</p>
            <p className="mt-1 text-sm text-grafite">{PASSOS[atual].dica}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={ultimo ? recomecar : () => setAtual(atual + 1)}
                className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold text-tinta ring-1 ring-tinta/25 transition-colors hover:ring-tinta"
              >
                {ultimo ? 'Recomeçar' : `Próximo: ${PASSOS[atual + 1].rotulo.toLowerCase()}`}
              </button>
              <p className="text-sm text-grafite" aria-live="polite">{aviso}</p>
            </div>
            <p className="mt-4 text-xs text-grafite">É de exemplo: nada é salvo e nenhuma mensagem sai daqui.</p>
          </div>
        </div>
        <PhoneFrame className="mx-auto h-[min(600px,72svh)] md:h-[min(600px,76svh)]">{telas[PASSOS[atual].id]}</PhoneFrame>
      </div>
    </section>
  )
}
