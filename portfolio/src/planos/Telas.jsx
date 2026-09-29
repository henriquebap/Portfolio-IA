import { useEffect, useRef } from 'react'
import { AREAS, texto } from '../oficina/areas'
import { ADICIONAIS, BENEFICIOS_FUNDADORA, DOMINIO, FUNDADORA_ATE, GARANTIAS, PARCELAS, PLANOS, TREINO_DEDICADO, USUARIO_EXTRA, fundadoraAberta } from '../oficina/oferta'
import { Check } from '../oficina/telas/icones'
import { EMAIL, whatsapp } from '../shared/contato'
import {
  ANOTA, DORES, MARCA, MAX_DORES, ORDEM, adicionaisValidos, brl, comFundadora, planoRecomendado, qtdExtras, textoWhatsApp, totais, umaVez, visivel,
} from './montagem'

// Uma função por passo da montagem. A casca (Planos.jsx) cuida do estado, da barra
// de progresso e do envio; aqui é só o que a oficina vê em cada tela.

const plano = (id) => PLANOS.find((p) => p.id === id)
// Itens que o plano soma; os do WhatsApp entram numa linha só ("WhatsApp dedicado incluso").
const itensDo = (id) => AREAS.flatMap((a) => a.itens).filter((i) => typeof i !== 'string' && i.plano === id && !i.adicional).map(texto)
const deTodoPlano = AREAS.map((a) => ({ titulo: a.titulo, itens: a.itens.filter((i) => typeof i === 'string') })).filter((a) => a.itens.length)

const dataPorExtenso = (iso) => {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(a, m - 1, d).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })
}

// O foco vai para o título quando a tela monta (leitor de tela anuncia o passo novo).
// Tem que ser aqui e não na casca: com a animação de saída, a tela nova só monta
// depois que a antiga some.
function Titulo({ rotulo, children }) {
  const ref = useRef(null)
  useEffect(() => ref.current?.focus({ preventScroll: true }), [])
  return (
    <>
      {rotulo && <p className="rotulo text-grafite">{rotulo}</p>}
      <h1 ref={ref} tabIndex={-1} className="titulo mt-3 text-[clamp(1.9rem,6vw,2.8rem)] outline-none">{children}</h1>
    </>
  )
}

const Lista = ({ itens, className = '' }) => (
  <ul className={`grid gap-2 ${className}`}>
    {itens.map((i) => (
      <li key={i} className="flex gap-2.5 leading-snug"><Check className="mt-0.5 size-4 shrink-0 text-azul" />{i}</li>
    ))}
  </ul>
)

const Campo = ({ rotulo, ...props }) => (
  <label className="grid gap-1.5">
    <span className="font-semibold">{rotulo}</span>
    <input maxLength={80} className="min-h-12 rounded-xl bg-white px-4 text-lg ring-1 ring-linha focus:outline-none focus:ring-2 focus:ring-azul" {...props} />
  </label>
)

// Botão de escolha que parece cartão: marcado fica azul (aria-pressed para leitor de tela).
const Opcao = ({ marcado, children, className = '', ...props }) => (
  <button
    type="button"
    aria-pressed={marcado}
    className={`min-h-12 rounded-2xl px-4 py-3 text-left font-semibold ring-1 transition disabled:opacity-40 ${marcado ? 'bg-azul text-white ring-azul' : 'bg-white ring-linha hover:ring-azul/50'} ${className}`}
    {...props}
  >
    {children}
  </button>
)

// O desconto fica colado ao preço que ele baixa, não numa frase no fim da página.
const Desconto = ({ escuro, children }) => (
  <span className={`mt-1 block w-fit rounded-md px-2 py-0.5 text-[13px] font-semibold ${escuro ? 'bg-white/15 text-white' : 'bg-azul-claro/20 text-azul'}`}>
    {children}
  </span>
)

// "R$ 250,00 da instalação + R$ 100,00 do WhatsApp dedicado": de onde vem o total.
const composicao = (u) => [`${brl(u.base)} da instalação`, ...u.extras.map((x) => `${brl(x.valor)} do ${x.nome}`)].join(' + ')

const Primario = ({ children, ...props }) => (
  <button type="button" className="inline-flex min-h-12 items-center justify-center rounded-full bg-azul px-6 font-semibold text-white transition-colors hover:bg-tinta" {...props}>
    {children}
  </button>
)
const Secundario = ({ children, ...props }) => (
  <button type="button" className="inline-flex min-h-12 items-center justify-center rounded-full px-6 font-semibold text-tinta ring-1 ring-tinta/25 transition-colors hover:ring-tinta" {...props}>
    {children}
  </button>
)

function Inicio() {
  return (
    <div className="grid gap-6">
      <Titulo rotulo="HOB Oficina · monte o seu">Monte o sistema da sua <span className="text-azul">oficina.</span></Titulo>
      <p className="max-w-[48ch] text-lg leading-relaxed text-grafite">
        Uma pergunta por vez: a oficina, o que mais pesa no dia a dia, a base e o que você quer junto. No fim, você vê quanto fica por
        mês e me manda com um toque. Leva uns 3 minutos.
      </p>
      <button type="submit" className="inline-flex min-h-12 w-fit items-center rounded-full bg-azul px-7 font-semibold text-white transition-colors hover:bg-tinta">
        Começar →
      </button>
      <p className="max-w-[56ch] text-sm leading-relaxed text-grafite/80">
        O que você responder fica salvo, mesmo se parar no meio, só para eu preparar a sua proposta. Não passo para ninguém. Para
        apagar, é só pedir no WhatsApp.
      </p>
    </div>
  )
}

function Voce({ r, mudar }) {
  return (
    <div className="grid gap-5">
      <Titulo>Pra começar: quem é você?</Titulo>
      <Campo rotulo="Seu nome" autoComplete="name" value={r.nome} onChange={(ev) => mudar({ nome: ev.target.value })} />
      <Campo rotulo="Nome da oficina" autoComplete="organization" required value={r.oficina} onChange={(ev) => mudar({ oficina: ev.target.value })} />
      <Campo rotulo="Bairro e cidade" placeholder="Ex.: São Miguel Paulista, São Paulo" value={r.cidade} onChange={(ev) => mudar({ cidade: ev.target.value })} />
    </div>
  )
}

function Equipe({ r, mudar }) {
  const n = r.equipe ?? 0
  const pôr = (v) => mudar({ equipe: Number.isFinite(v) && v > 0 ? Math.min(99, Math.round(v)) : null })
  return (
    <div className="grid gap-6">
      <Titulo>Quantas pessoas trabalham na oficina, contando você?</Titulo>
      <div className="flex items-center gap-3">
        <button type="button" aria-label="Menos uma" onClick={() => pôr(n - 1)} className="size-12 rounded-full bg-white text-2xl ring-1 ring-linha">−</button>
        <input
          type="number" inputMode="numeric" min={1} max={99} aria-label="Pessoas na oficina"
          value={r.equipe ?? ''} onChange={(ev) => pôr(parseInt(ev.target.value, 10))}
          className="min-h-12 w-24 rounded-xl bg-white text-center font-mono text-2xl ring-1 ring-linha focus:outline-none focus:ring-2 focus:ring-azul"
        />
        <button type="button" aria-label="Mais uma" onClick={() => pôr(n + 1)} className="size-12 rounded-full bg-white text-2xl ring-1 ring-linha">+</button>
      </div>
      <fieldset className="grid gap-2.5">
        <legend className="mb-2.5 font-semibold">Onde vocês anotam as OS hoje?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {ANOTA.map((a) => (
            <Opcao key={a.id} marcado={r.anota === a.id} onClick={() => mudar({ anota: r.anota === a.id ? '' : a.id })}>{a.texto}</Opcao>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

function Dores({ r, mudar }) {
  const cheio = r.dores.length >= MAX_DORES
  const alterna = (id) => mudar({ dores: r.dores.includes(id) ? r.dores.filter((d) => d !== id) : [...r.dores, id] })
  return (
    <div className="grid gap-5">
      <Titulo>O que mais pesa no dia a dia?</Titulo>
      <p className="text-grafite">Escolha até {MAX_DORES}. É por aqui que eu sei o que mais importa para vocês.</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {DORES.map((d) => (
          <Opcao key={d.id} marcado={r.dores.includes(d.id)} disabled={cheio && !r.dores.includes(d.id)} onClick={() => alterna(d.id)}>
            {d.texto}
          </Opcao>
        ))}
      </div>
    </div>
  )
}

const SOMA = {
  essencial: (p) => [`Até ${p.usuarios} usuários`, 'Tudo o que vem em todo plano'],
  profissional: () => ['Usuários ilimitados', 'WhatsApp dedicado incluso: o cliente cuidado antes e depois da entrega', ...itensDo('profissional')],
  inteligente: () => ['Tudo do Profissional', ...itensDo('inteligente')],
}

function Plano({ r, avancar }) {
  const recomendado = planoRecomendado(r)
  return (
    <div className="grid gap-6">
      <Titulo rotulo="A base">Escolha o plano.</Titulo>
      <details className="group rounded-2xl bg-white px-4 ring-1 ring-linha">
        <summary className="flex min-h-12 cursor-pointer items-center justify-between font-semibold">
          O que já vem em todo plano <span className="text-azul transition-transform group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <div className="grid gap-5 border-t border-linha py-4 sm:grid-cols-2">
          {deTodoPlano.map((a) => (
            <div key={a.titulo}>
              <p className="rotulo text-azul">{a.titulo}</p>
              <Lista className="mt-2 text-[15px]" itens={a.itens} />
            </div>
          ))}
        </div>
      </details>
      <div className="grid gap-3">
        {PLANOS.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={r.plano === p.id}
            onClick={() => avancar({ ...r, plano: p.id })}
            className={`rounded-2xl p-5 text-left ring-1 transition hover:-translate-y-0.5 ${r.plano === p.id ? 'bg-noite text-papel ring-noite' : 'bg-white ring-linha hover:ring-azul/50'}`}
          >
            <span className="titulo block text-2xl">{p.nome}</span>
            <span className="mt-1.5 block font-mono text-lg font-bold">{brl(p.mensal * 100)}<span className="text-sm font-normal opacity-70">/mês</span></span>
            {fundadoraAberta() && (
              <Desconto escuro={r.plano === p.id}>Fundadora: {brl(comFundadora(p.mensal * 100))}/mês por 6 meses</Desconto>
            )}
            <span className="mt-2 block text-sm opacity-70">Instalação {brl(umaVez({ ...r, plano: p.id }).instalacao)}, uma vez, com o treino da equipe</span>
            {umaVez({ ...r, plano: p.id }).metade && (
              <Desconto escuro={r.plano === p.id}>2 primeiras do mês: instalação por {brl(umaVez({ ...r, plano: p.id }).metade.instalacao)}</Desconto>
            )}
            {p.id === recomendado && <span className="rotulo mt-2 inline-block rounded-full bg-azul-claro/25 px-2.5 py-1 text-[11px]">Recomendado para vocês</span>}
            <span className={`mt-2 block leading-snug ${r.plano === p.id ? 'text-papel/75' : 'text-grafite'}`}>{p.para}</span>
            <span className="mt-3 grid gap-1.5 text-[15px]">
              {SOMA[p.id](p).map((i) => (
                <span key={i} className="flex gap-2 leading-snug"><span className="text-azul-claro" aria-hidden="true">+</span>{i}</span>
              ))}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Usuarios({ r, avancar }) {
  const base = plano('essencial')
  const n = Math.max(0, r.equipe - base.usuarios)
  const comExtras = (base.mensal + n * USUARIO_EXTRA) * 100
  const profissional = plano('profissional').mensal * 100
  return (
    <div className="grid gap-5">
      <Titulo>O Essencial vem com {base.usuarios} usuários. A equipe de vocês tem {r.equipe}.</Titulo>
      <div className="grid gap-2.5">
        <Opcao onClick={() => avancar({ ...r, plano: 'profissional', extras: false })}>
          Profissional, com usuários ilimitados e WhatsApp · {brl(profissional)}/mês
          {comExtras >= profissional && <span className="rotulo mt-1 block text-[11px] text-azul">sai mais em conta</span>}
        </Opcao>
        <Opcao marcado={r.extras} onClick={() => avancar({ ...r, extras: true })}>
          Essencial com mais {n} {n > 1 ? 'usuários' : 'usuário'} · {brl(comExtras)}/mês
          <span className="mt-1 block text-sm font-normal opacity-75">{brl(USUARIO_EXTRA * 100)} por usuário a mais</span>
        </Opcao>
        <Opcao onClick={() => avancar({ ...r, extras: false })}>
          {base.usuarios} usuários bastam · {brl(base.mensal * 100)}/mês
          <span className="mt-1 block text-sm font-normal opacity-75">nem todo mundo precisa mexer no sistema</span>
        </Opcao>
      </div>
    </div>
  )
}

// A IA vem no Inteligente ou como Pacote IA em qualquer plano (decisão de 28/09/2026).
// A conta fica à vista: no Profissional, a IA avulsa custa o mesmo que o Inteligente.
function Ia({ r, avancar }) {
  const atual = plano(r.plano)
  const pacote = ADICIONAIS.find((a) => a.id === 'ia')
  const itens = AREAS.flatMap((a) => a.itens).filter((i) => i.ia)
  const destaque = texto(itens.find((i) => i.destaque))
  const resto = itens.filter((i) => !i.destaque).map(texto)
  const semIa = { ...r, adicionais: r.adicionais.filter((x) => x !== 'ia') }
  const agora = totais(semIa).mensal
  // Pelo total, não pelo preço do plano: os usuários extras do Essencial somem no Inteligente.
  const inteligente = totais({ ...semIa, plano: 'inteligente' }).mensal - agora
  const avulsa = totais({ ...semIa, adicionais: [...semIa.adicionais, 'ia'] }).mensal - agora
  return (
    <div className="grid gap-5">
      <Titulo rotulo="IA · no Inteligente ou somada ao seu plano">Quer a IA trabalhando em cada OS?</Titulo>
      <div className="rounded-2xl bg-noite p-5 text-papel">
        <p className="rotulo text-azul-claro">O destaque</p>
        <p className="mt-2 text-lg font-semibold leading-snug">{destaque}.</p>
        <p className="mt-1.5 text-papel/75">É serviço a mais em cada OS, e quem decide oferecer é a equipe.</p>
      </div>
      <Lista className="text-[15px]" itens={resto} />
      {fundadoraAberta() && (
        <p className="rounded-xl bg-azul-claro/15 px-4 py-3 font-semibold text-azul">
          Fechando até {dataPorExtenso(FUNDADORA_ATE)}, você tem 60 dias da IA liberada, em qualquer plano.
        </p>
      )}
      <div className="grid gap-2.5">
        <Opcao onClick={() => avancar({ ...semIa, plano: 'inteligente' })}>
          Quero o Inteligente · + {brl(inteligente)}/mês
          <span className="mt-1 block text-sm font-normal opacity-75">
            {inteligente < avulsa ? 'a IA inteira por menos que o pacote' : inteligente === avulsa ? 'a IA inteira pelo mesmo valor do pacote' : 'a IA inteira, usuários ilimitados, WhatsApp e tudo do Profissional'}
          </span>
        </Opcao>
        <Opcao marcado={r.adicionais.includes('ia')} onClick={() => avancar({ ...semIa, adicionais: [...semIa.adicionais, 'ia'] })}>
          Quero a IA no {atual.nome} · + {brl(avulsa)}/mês
          <span className="mt-1 block text-sm font-normal opacity-75">{pacote.nome}, {brl(pacote.mensal * 100)} por mês</span>
        </Opcao>
        <Opcao onClick={() => avancar(semIa)}>Agora não, fico no {atual.nome} sem IA</Opcao>
      </div>
    </div>
  )
}

function Adicional({ r, avancar, id }) {
  const a = ADICIONAIS.find((x) => x.id === id)
  const dor = DORES.find((d) => d.puxa === id && r.dores.includes(d.id))
  const tem = r.adicionais.includes(id)
  return (
    <div className="grid gap-5">
      <Titulo rotulo={dor ? `Você marcou: ${dor.texto}` : `Adicional · ${a.nome}`}>{a.gancho}</Titulo>
      <p className="text-lg leading-relaxed text-grafite">{a.promessa}</p>
      <Lista className="text-[15px]" itens={[...a.itens, ...(a.mais ?? [])]} />
      <p className="leading-snug">
        <span className="font-mono text-lg font-bold">{a.mensal === null ? 'Valor na conversa' : `+ ${brl(a.mensal * 100)}/mês`}</span>
        {a.criacao && <span className="block font-mono">+ criação {brl(a.criacao * 100)}, uma vez</span>}
        <span className="mt-0.5 block text-sm text-grafite">{a.nome} · {a.obs}</span>
      </p>
      <div className="grid gap-2.5 sm:flex sm:flex-wrap">
        <Primario onClick={() => avancar({ ...r, adicionais: tem ? r.adicionais : [...r.adicionais, id] })}>{tem ? 'Incluído ✓ · continuar' : 'Quero incluir'}</Primario>
        <Secundario onClick={() => avancar({ ...r, adicionais: r.adicionais.filter((x) => x !== id) })}>Agora não</Secundario>
      </div>
    </div>
  )
}

// Só no Essencial: a remota corta a visita (deslocamento e transporte) e baixa a
// entrada para perto de uma mensalidade (decisão de 28/09/2026).
function Instalacao({ r, avancar }) {
  const presencial = umaVez({ ...r, remota: false })
  const remota = umaVez({ ...r, remota: true })
  return (
    <div className="grid gap-5">
      <Titulo rotulo="Uma vez só">Como prefere a instalação?</Titulo>
      <p className="text-lg leading-relaxed text-grafite">
        Nas duas, eu deixo o sistema no ar com a marca de vocês, treino a equipe toda e acompanho a primeira semana.
      </p>
      <div className="grid gap-2.5">
        {[
          { u: presencial, nome: 'Presencial', como: 'eu vou até a oficina e treino a equipe no balcão', marcado: !r.remota, remota: false },
          { u: remota, nome: 'Remota', como: 'treino por vídeo, sem visita', marcado: r.remota, remota: true },
        ].map((o) => (
          <Opcao key={o.nome} marcado={o.marcado} onClick={() => avancar({ ...r, remota: o.remota })}>
            {o.nome} · {brl(o.u.instalacao)}
            <span className="mt-1 block text-sm font-normal opacity-75">{o.como}</span>
            {o.u.extras.length > 0 && <span className="mt-0.5 block text-sm font-normal opacity-75">{composicao(o.u)}</span>}
            {o.remota && <Desconto escuro={o.marcado}>{brl(presencial.instalacao - remota.instalacao)} a menos que a presencial</Desconto>}
            {o.u.metade && <Desconto escuro={o.marcado}>2 primeiras do mês: {brl(o.u.metade.instalacao)}</Desconto>}
          </Opcao>
        ))}
      </div>
    </div>
  )
}

// Só para equipe grande: o treino da instalação continua incluso; a sessão dedicada
// é para quem quer mais tempo com a equipe (decisão de 28/09/2026).
function Treino({ r, avancar }) {
  return (
    <div className="grid gap-5">
      <Titulo rotulo="Opcional · uma vez só">Quer um treino dedicado para a equipe?</Titulo>
      <p className="text-lg leading-relaxed text-grafite">
        O treino da equipe toda já vem na instalação. Com {r.equipe} pessoas, dá para somar uma sessão dedicada de {TREINO_DEDICADO.horas} horas,
        presencial ou por vídeo, no horário que for melhor para vocês.
      </p>
      <div className="grid gap-2.5">
        <Opcao marcado={r.treino} onClick={() => avancar({ ...r, treino: true })}>
          Quero o treino dedicado · + {brl(TREINO_DEDICADO.valor * 100)}
        </Opcao>
        <Opcao marcado={!r.treino} onClick={() => avancar({ ...r, treino: false })}>O treino da instalação basta</Opcao>
      </div>
    </div>
  )
}

function Falta({ r, mudar }) {
  return (
    <div className="grid gap-5">
      <Titulo>O que a sua oficina precisa e você não viu aqui?</Titulo>
      <p className="text-grafite">
        Opcional. É daqui que sai o que eu construo a seguir. Se for algo só da sua oficina, dá para fazer sob medida, com o preço
        fechado antes de começar.
      </p>
      <textarea
        maxLength={2000} rows={6} value={r.falta} onChange={(ev) => mudar({ falta: ev.target.value })} aria-label="O que falta"
        placeholder="Ex.: agendamento pelo site, um relatório que vocês usam hoje…"
        className="rounded-xl bg-white p-4 text-lg ring-1 ring-linha focus:outline-none focus:ring-2 focus:ring-azul"
      />
    </div>
  )
}

const Linha = ({ nome, valor }) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-linha py-2.5">
    <dt>{nome}</dt>
    <dd className="whitespace-nowrap font-mono">{valor}</dd>
  </div>
)

function Resumo({ r, ir, aoEnviar, recomecar }) {
  const p = plano(r.plano)
  const t = totais(r)
  const u = umaVez(r)
  const extras = qtdExtras(r)
  const corpo = textoWhatsApp(r)
  const primeiroAdicional = ORDEM.find((id) => ADICIONAIS.some((a) => a.id === id) && visivel(id, r))
  return (
    <div className="grid gap-6">
      <Titulo rotulo="Seu HOB Oficina">{r.oficina.trim() || 'A sua oficina'}, está montado.</Titulo>
      <dl className="rounded-2xl bg-white px-5 py-2 ring-1 ring-linha">
        <Linha nome={`Plano ${p.nome}`} valor={brl(p.mensal * 100)} />
        {extras > 0 && <Linha nome={`${extras} ${extras > 1 ? 'usuários extras' : 'usuário extra'}`} valor={brl(extras * USUARIO_EXTRA * 100)} />}
        {adicionaisValidos(r).map((a) => <Linha key={a.id} nome={a.nome} valor={a.mensal === null ? 'na conversa' : brl(a.mensal * 100)} />)}
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="font-bold">Por mês</dt>
          <dd className="font-mono text-2xl font-bold">{brl(t.mensal)}</dd>
        </div>
      </dl>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-azul">
        <button type="button" className="underline-offset-4 hover:underline" onClick={() => ir('plano')}>Trocar o plano</button>
        {primeiroAdicional && <button type="button" className="underline-offset-4 hover:underline" onClick={() => ir(primeiroAdicional)}>Rever os adicionais</button>}
      </div>

      {t.fundadora && (
        <div className="rounded-2xl bg-noite p-5 text-papel">
          <p className="rotulo text-azul-claro">Parceira fundadora · até {dataPorExtenso(FUNDADORA_ATE)}</p>
          <p className="mt-3">6 primeiros meses: <strong className="font-mono">{brl(t.fundadora.seisMeses)}</strong> por mês</p>
          <p className="mt-1">Depois: <strong className="font-mono">{brl(t.fundadora.depois)}</strong> por mês</p>
          <Lista className="mt-4 text-sm text-papel/80 [&_svg]:text-azul-claro" itens={BENEFICIOS_FUNDADORA.slice(1, 3)} />
        </div>
      )}

      <div>
        <p className="rotulo text-grafite">Uma vez só</p>
        <dl className="mt-2 rounded-2xl bg-white px-5 py-2 ring-1 ring-linha [&>div:last-child]:border-0">
          <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-linha py-2.5">
            <dt>Instalação {u.remota ? 'remota' : 'presencial'}</dt>
            <dd className="whitespace-nowrap font-mono">{brl(u.instalacao)}</dd>
            <dd className="col-span-2 mt-1 grid gap-0.5 pl-3 text-sm text-grafite">
              <span className="flex justify-between gap-4">
                <span>{u.remota ? 'sistema no ar e treino por vídeo da equipe' : 'sistema no ar, visita e treino da equipe'}</span>
                <span className="font-mono">{brl(u.base)}</span>
              </span>
              {u.extras.map((x) => (
                <span key={x.nome} className="flex justify-between gap-4"><span>{x.nome}</span><span className="font-mono">{brl(x.valor)}</span></span>
              ))}
            </dd>
          </div>
          {u.criacao > 0 && <Linha nome="Criação do site" valor={brl(u.criacao)} />}
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="font-bold">Total, uma vez</dt>
            <dd className="font-mono text-xl font-bold">{brl(u.total)}</dd>
          </div>
        </dl>
        {(u.totalMetade !== null || u.totalFundadora) && (
          <div className="mt-3 grid gap-2 rounded-2xl bg-azul-claro/15 px-5 py-4 text-azul">
            <p className="rotulo">Com desconto</p>
            {u.totalMetade !== null && (
              <p className="leading-snug">
                <strong className="block">2 primeiras oficinas do mês</strong>
                <s className="opacity-60">{brl(u.total)}</s>{' '}
                <strong className="font-mono">{brl(u.totalMetade)}</strong>
                <span className="block text-sm">
                  metade da instalação{u.criacao > 0 && ' e do site'}{u.extras.some((e) => e.opcional) && '; o treino dedicado entra cheio'}
                </span>
              </p>
            )}
            {u.totalFundadora && (
              <p className="leading-snug">
                <strong className="block">Fundadora até {dataPorExtenso(FUNDADORA_ATE)}</strong>
                <s className="opacity-60">{brl(u.total)}</s>{' '}
                <strong className="font-mono">{brl(u.totalFundadora)}</strong>
                <span className="block text-sm">10% na criação do site</span>
              </p>
            )}
            {u.totalMetade !== null && u.totalFundadora && <p className="text-sm">Os descontos não se somam: vale o maior.</p>}
          </div>
        )}
        <p className="mt-3 rounded-xl bg-azul-claro/15 px-4 py-3 font-semibold text-azul">
          Dá para parcelar sem juros: em até {PARCELAS.boletoPix}x no boleto ou Pix, ou em até {PARCELAS.cartao}x no cartão
          ({PARCELAS.cartao} × {brl(Math.round(u.total / PARCELAS.cartao))}).
        </p>
        <p className="mt-3 text-sm leading-relaxed text-grafite">
          Estes são os valores de tabela: o final fecha na conversa e nunca passa do que está aqui.
          {t.sobConsulta.length > 0 && ` ${t.sobConsulta.map((a) => a.nome).join(' e ')}: valor na conversa.`}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-grafite">{DOMINIO}</p>
      </div>

      <div className="grid gap-2.5 sm:flex sm:flex-wrap">
        <a href={whatsapp(corpo)} target="_blank" rel="noopener noreferrer" onClick={aoEnviar}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-azul px-6 font-semibold text-white transition-colors hover:bg-tinta">
          Mandar para o Henrique no WhatsApp
        </a>
        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(MARCA)}&body=${encodeURIComponent(corpo)}`} onClick={aoEnviar}
          className="inline-flex min-h-12 items-center justify-center rounded-full px-6 font-semibold text-tinta ring-1 ring-tinta/25 transition-colors hover:ring-tinta">
          Prefiro por e-mail
        </a>
      </div>
      <ul className="grid gap-1.5 border-t border-linha pt-4 text-sm text-grafite">
        {GARANTIAS.map((g) => <li key={g}>{g}</li>)}
      </ul>
      <button type="button" onClick={recomecar} className="w-fit text-sm text-grafite underline-offset-4 hover:underline">Montar de novo</button>
    </div>
  )
}

const TELAS = { inicio: Inicio, voce: Voce, equipe: Equipe, dores: Dores, plano: Plano, usuarios: Usuarios, ia: Ia, instalacao: Instalacao, treino: Treino, falta: Falta, resumo: Resumo }

export default function Tela({ passo, ...props }) {
  const Componente = TELAS[passo] ?? Adicional
  return <Componente id={passo} {...props} />
}
