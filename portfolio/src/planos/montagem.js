// A montagem do /oficina/planos, sem tela: que passo aparece, quanto dá por mês e o
// texto que vai para o WhatsApp. Puro e testado (montagem.test.js); preço e
// benefício vêm só de oferta.js.
import { ADICIONAIS, INSTALACAO, METADE_INSTALACAO, PLANOS, TREINO_DEDICADO, USUARIO_EXTRA, fundadoraAberta } from '../oficina/oferta.js'

// A IA é um adicional (Pacote IA), mas a tela dela fica junto do plano: é ali que
// a oficina decide entre o Inteligente, a IA no plano dela ou nenhum dos dois.
const EXTRAS = ADICIONAIS.map((a) => a.id).filter((id) => id !== 'ia')

// Ordem fixa de todos os passos. O próximo e o anterior andam por ela, pulando o que
// não se aplica: guardar o passo por posição na lista visível quebra quando uma
// escolha faz o passo atual sumir (aceitar o Inteligente some com a tela da IA).
export const ORDEM = ['inicio', 'voce', 'equipe', 'dores', 'plano', 'usuarios', 'ia', ...EXTRAS, 'instalacao', 'treino', 'falta', 'resumo']

// Cinco etapas fixas para a barra de progresso: marcar uma dor que abre um passo a
// mais não pode fazer a barra andar para trás.
export const ETAPAS = [
  { nome: 'Você', passos: ['inicio', 'voce', 'equipe'] },
  { nome: 'Dores', passos: ['dores'] },
  { nome: 'Plano', passos: ['plano', 'usuarios', 'ia'] },
  { nome: 'Adicionais', passos: [...EXTRAS, 'instalacao', 'treino'] },
  { nome: 'Resumo', passos: ['falta', 'resumo'] },
]
// Rótulo do botão da barra de baixo; passo sem rótulo avança pelos botões da própria tela.
export const CONTINUAR = { inicio: 'Começar', voce: 'Continuar', equipe: 'Continuar', dores: 'Continuar', plano: 'Continuar', falta: 'Ver o resumo' }

export const etapa = (passo) => ETAPAS.findIndex((e) => e.passos.includes(passo))

// Cada dor aponta para o que resolve: um plano ou um adicional (ou nada, quando já
// vem em todo plano). O id vai para o painel; o texto, para a tela e o WhatsApp.
export const DORES = [
  { id: 'sumiu', texto: 'Cliente some depois da entrega', puxa: 'whatsapp' },
  { id: 'orcamento', texto: 'Orçamento que o cliente não responde', puxa: 'whatsapp' },
  { id: 'devendo', texto: 'Carro entregue e não pago', puxa: 'whatsapp' },
  { id: 'sobra', texto: 'Não sei quanto sobra no fim do mês', puxa: 'profissional' },
  { id: 'equipe', texto: 'Mecânico sem saber o que fazer hoje', puxa: 'profissional' },
  { id: 'estoque', texto: 'Não sei direito o que tem no estoque', puxa: null },
  { id: 'parada', texto: 'Peça parada na prateleira', puxa: 'mercadolivre' },
  { id: 'nota', texto: 'Nota fiscal feita na mão', puxa: 'nota' },
  { id: 'google', texto: 'Quem procura oficina na região não me acha', puxa: 'site' },
  { id: 'digitar', texto: 'Muito tempo digitando OS e diagnóstico', puxa: 'inteligente' },
  { id: 'oferecer', texto: 'Serviço que o carro precisava e ninguém ofereceu', puxa: 'inteligente' },
]
export const MAX_DORES = 3

export const ANOTA = [
  { id: 'papel', texto: 'Papel ou caderno' },
  { id: 'planilha', texto: 'Planilha' },
  { id: 'antigo', texto: 'Sistema antigo, no computador' },
  { id: 'outro', texto: 'Outro sistema' },
]

export const VAZIA = { nome: '', oficina: '', cidade: '', equipe: null, anota: '', dores: [], plano: '', extras: false, adicionais: [], remota: false, treino: false, falta: '' }

const plano = (r) => PLANOS.find((p) => p.id === r.plano)

export const qtdExtras = (r) => {
  const p = plano(r)
  return p?.usuarios && r.extras ? Math.max(0, (r.equipe ?? 0) - p.usuarios) : 0
}

const CONDICAO = {
  usuarios: (r) => Boolean(plano(r)?.usuarios) && (r.equipe ?? 0) > plano(r).usuarios,
  ia: (r) => Boolean(r.plano),
  mercadolivre: (r) => r.dores.includes('parada'),
  // Instalação remota só no Essencial: é a porta de entrada barata (28/09/2026).
  instalacao: (r) => r.plano === PLANOS[0].id,
  treino: (r) => Boolean(r.plano) && (r.equipe ?? 0) >= TREINO_DEDICADO.aPartirDe,
}

// Adicional que já vem no plano não tem tela nem soma no mês (WhatsApp no
// Profissional e no Inteligente, IA no Inteligente).
export function visivel(passo, r) {
  const a = ADICIONAIS.find((x) => x.id === passo)
  if (a && (!a.publicado || plano(r)?.incluidos.includes(a.id))) return false
  return CONDICAO[passo] ? CONDICAO[passo](r) : true
}

export const proximo = (passo, r) => ORDEM.slice(ORDEM.indexOf(passo) + 1).find((p) => visivel(p, r)) ?? 'resumo'
export const anterior = (passo, r) => ORDEM.slice(0, ORDEM.indexOf(passo)).reverse().find((p) => visivel(p, r)) ?? 'inicio'

// Escolhido e ainda valendo: trocar de plano ou desmarcar a dor não apaga a escolha,
// só tira da conta (voltar atrás devolve).
export const adicionaisValidos = (r) => ADICIONAIS.filter((a) => r.adicionais.includes(a.id) && visivel(a.id, r))

// O que está ligado na oficina: o que o plano já traz mais o que ela escolheu.
const ativos = (r) => ADICIONAIS.filter((a) => plano(r)?.incluidos.includes(a.id) || adicionaisValidos(r).includes(a))

// O total do mês só aparece depois que a oficina escolheu o plano, e some no resumo
// (lá ele é o bloco principal). Valor antes da escolha assusta; depois, somando o que
// ela liga, ajuda (decisão de 28/09/2026). Rascunho salvo não antecipa nada.
export const mostraTotal = (passo, r) => Boolean(r.plano) && ORDEM.indexOf(passo) > ORDEM.indexOf('plano') && passo !== 'resumo'

export function podeAvancar(passo, r) {
  if (passo === 'voce') return r.oficina.trim().length > 1
  if (passo === 'equipe') return Number.isInteger(r.equipe) && r.equipe >= 1
  if (passo === 'dores') return r.dores.length >= 1
  if (passo === 'plano') return Boolean(plano(r))
  return true
}

// Selo "recomendado" na tela do plano. Só um selo: nunca muda o que ele escolheu.
// Regra do Henrique (28/09/2026): duas dores de IA já justificam o Inteligente;
// oficina pequena (cabe nos usuários do Essencial) fica no básico, que dá conta.
export function planoRecomendado(r) {
  const puxam = (alvo) => r.dores.filter((id) => DORES.find((d) => d.id === id)?.puxa === alvo).length
  if (puxam('inteligente') >= 2) return 'inteligente'
  if ((r.equipe ?? 0) <= PLANOS[0].usuarios) return 'essencial'
  return 'profissional'
}

// Preço de fundadora: 10% a menos (docs/02). Um lugar só para a mensalidade, o site
// e os cartões mostrarem a mesma conta.
export const comFundadora = (centavos) => Math.round(centavos * 0.9)

// Tudo em centavos. Fundadora (docs/02): 10% na mensalidade por 6 meses e 10% nos
// adicionais enquanto for cliente; o usuário extra é adicional. Sob consulta fica fora.
export function totais(r, hoje = new Date()) {
  const base = (plano(r)?.mensal ?? 0) * 100
  const adicionais = qtdExtras(r) * USUARIO_EXTRA * 100 + adicionaisValidos(r).reduce((s, a) => s + (a.mensal ?? 0) * 100, 0)
  const mensal = base + adicionais
  return {
    mensal,
    sobConsulta: adicionaisValidos(r).filter((a) => a.mensal === null),
    fundadora: fundadoraAberta(hoje) ? { seisMeses: comFundadora(mensal), depois: base + comFundadora(adicionais) } : null,
  }
}

// O que se paga uma vez, pelo valor de tabela: é o teto (o desconto combinado na
// conversa só baixa). A instalação é pelo trabalho, igual para todo plano: base (ou
// remota, no Essencial) + a instalação de cada adicional ligado + o treino dedicado,
// se a equipe grande pediu. As 2
// primeiras do mês pagam metade da instalação e da criação do site; a fundadora tem
// 10% nos serviços, e o site entra; a instalação não (HOB-Tech/oficina/02). Os
// descontos não se somam: vale o maior.
export function umaVez(r, hoje = new Date()) {
  const remota = Boolean(r.remota) && visivel('instalacao', r)
  const base = plano(r) ? (remota ? INSTALACAO.remota : INSTALACAO.base) * 100 : 0
  const extras = !plano(r) ? [] : [
    ...ativos(r).filter((a) => a.instalacao).map((a) => ({ nome: a.nome, valor: a.instalacao * 100 })),
    ...(r.treino && visivel('treino', r) ? [{ nome: `Treino dedicado (${TREINO_DEDICADO.horas} h)`, valor: TREINO_DEDICADO.valor * 100, opcional: true }] : []),
  ]
  const instalacao = base + extras.reduce((s, x) => s + x.valor, 0)
  // A metade das 2 primeiras é da instalação; o treino dedicado é serviço opcional e fica fora.
  const semOpcional = instalacao - extras.filter((x) => x.opcional).reduce((s, x) => s + x.valor, 0)
  const site = adicionaisValidos(r).find((a) => a.criacao)
  const criacao = site ? site.criacao * 100 : 0
  const metade = METADE_INSTALACAO ? { instalacao: Math.round(semOpcional / 2), criacao: Math.round(criacao / 2) } : null
  const criacaoFundadora = criacao && fundadoraAberta(hoje) ? comFundadora(criacao) : null
  return {
    remota,
    base,
    extras,
    instalacao,
    criacao,
    metade,
    criacaoFundadora,
    // O que se paga uma vez, somado: cheio, e com cada desconto (que não se somam).
    total: instalacao + criacao,
    totalMetade: metade ? metade.instalacao + (instalacao - semOpcional) + metade.criacao : null,
    totalFundadora: criacaoFundadora ? instalacao + criacaoFundadora : null,
  }
}

export const brl = (centavos) => (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// A marca que o robô da prospecção reconhece (whatsapp_frio.py): mensagem com ela
// vai sempre para o Henrique responder, nunca para a triagem automática.
export const MARCA = 'Montei o meu HOB Oficina'
export const LIMITE_FALTA_WHATSAPP = 240
const LIMITE_CAMPO_WHATSAPP = 60

const corta = (t, n) => (t.length > n ? `${t.slice(0, n - 1)}…` : t)

export function textoWhatsApp(r, hoje = new Date()) {
  const t = totais(r, hoje)
  const u = umaVez(r, hoje)
  const p = plano(r)
  const extras = qtdExtras(r)
  const adicionais = [
    ...(extras ? [`${extras} usuário${extras > 1 ? 's' : ''} extra${extras > 1 ? 's' : ''} (${brl(extras * USUARIO_EXTRA * 100)})`] : []),
    ...adicionaisValidos(r).map((a) => `${a.nome} (${a.mensal === null ? 'sob consulta' : brl(a.mensal * 100)})`),
  ]
  const dores = DORES.filter((d) => r.dores.includes(d.id)).map((d) => d.texto)
  const linhas = [
    `Oi, Henrique! ${MARCA}.`,
    '',
    [r.nome, r.oficina, r.cidade].map((c) => corta(c.trim(), LIMITE_CAMPO_WHATSAPP)).filter(Boolean).join(' · '),
    r.equipe ? `Equipe: ${r.equipe} ${r.equipe > 1 ? 'pessoas' : 'pessoa'}` : null,
    dores.length ? `O que mais pesa: ${dores.join('; ')}` : null,
    p ? `Plano: ${p.nome} (${brl(p.mensal * 100)}${p.incluidos.includes('whatsapp') ? ', com WhatsApp' : ''})` : null,
    adicionais.length ? `Adicionais: ${adicionais.join(', ')}` : null,
    `Total: ${brl(t.mensal)} por mês`,
    p ? `Instalação${u.remota ? ' remota' : ''}: ${brl(u.instalacao)}, uma vez` : null,
    r.falta.trim() ? `O que faltou: ${corta(r.falta.trim(), LIMITE_FALTA_WHATSAPP)}` : null,
  ]
  return linhas.filter((l) => l !== null).join('\n')
}
