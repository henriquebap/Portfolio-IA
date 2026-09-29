import { test } from 'node:test'
import assert from 'node:assert/strict'
import { whatsapp } from '../shared/contato.js'
import { FUNDADORA_ATE, METADE_INSTALACAO } from '../oficina/oferta.js'
import { ETAPAS, ORDEM, VAZIA, anterior, etapa, mostraTotal, planoRecomendado, proximo, textoWhatsApp, totais, umaVez, visivel, MARCA } from './montagem.js'

const r = (extra) => ({ ...VAZIA, oficina: 'Oficina Teste', equipe: 2, ...extra })
const [a, m, d] = FUNDADORA_ATE.split('-').map(Number)
const ANTES = new Date(a, m - 1, d, 12)
const DEPOIS = new Date(a, m - 1, d + 1, 12)

test('aceitar o Inteligente na tela da IA segue para os adicionais, não volta ao começo', () => {
  const inteligente = r({ plano: 'inteligente' })
  assert.equal(visivel('ia', inteligente), false)
  assert.equal(proximo('ia', inteligente), 'site')
  assert.equal(anterior('site', inteligente), 'plano')
})

test('usuário extra só conta no Essencial com equipe maior que 3', () => {
  const grande = r({ equipe: 6, plano: 'essencial', extras: true })
  assert.equal(proximo('plano', grande), 'usuarios')
  assert.equal(totais(grande, DEPOIS).mensal, (249 + 3 * 29) * 100)
  const profissional = { ...grande, plano: 'profissional' }
  assert.equal(visivel('usuarios', profissional), false)
  assert.equal(totais(profissional, DEPOIS).mensal, 499 * 100, 'trocar de plano tira o extra da conta')
})

test('adicional escolhido volta quando a condição volta; Mercado Livre fica fora da soma', () => {
  const com = r({ plano: 'essencial', dores: ['parada'], adicionais: ['whatsapp', 'mercadolivre'] })
  const t = totais(com, DEPOIS)
  assert.equal(t.mensal, (249 + 99) * 100)
  assert.deepEqual(t.sobConsulta.map((x) => x.id), ['mercadolivre'])
  const sem = { ...com, dores: [] }
  assert.equal(visivel('mercadolivre', sem), false)
  assert.equal(totais(sem, DEPOIS).sobConsulta.length, 0)
  assert.equal(totais({ ...sem, dores: ['parada'] }, DEPOIS).sobConsulta.length, 1)
})

test('marcar uma dor que abre passo não faz a barra andar para trás', () => {
  assert.ok(etapa('mercadolivre') > etapa('ia'))
  assert.equal(etapa('falta'), ETAPAS.length - 1)
  assert.ok(ETAPAS.flatMap((e) => e.passos).every((p) => etapa(p) >= 0))
})

test('fundadora: 10% por 6 meses no total, depois 10% só nos adicionais; some depois da data', () => {
  const x = r({ plano: 'essencial', adicionais: ['whatsapp'] })
  assert.deepEqual(totais(x, ANTES).fundadora, { seisMeses: 31320, depois: 24900 + 8910 })
  assert.equal(totais(x, DEPOIS).fundadora, null)
})

test('texto do WhatsApp leva a marca e o link cabe com tudo no máximo', () => {
  // Português de verdade no limite de cada campo (acento e espaço viram 3 a 6 caracteres na URL).
  const frase = (n) => 'Queria a comissão de cada mecânico e a margem por serviço, separada por mês. '.repeat(40).slice(0, n)
  const cheio = r({
    nome: frase(200), oficina: frase(200), cidade: frase(200), equipe: 12, plano: 'essencial', extras: true,
    dores: ['sumiu', 'orcamento', 'parada'], adicionais: ['site', 'whatsapp', 'nota', 'mercadolivre'], falta: frase(2000),
  })
  const texto = textoWhatsApp(cheio, ANTES)
  assert.ok(texto.includes(MARCA))
  assert.ok(texto.includes('sob consulta') && texto.includes('Instalação: R$'))
  assert.ok(whatsapp(texto).length < 2000, `URL com ${whatsapp(texto).length} caracteres`)
})

test('WhatsApp vem no Profissional e no Inteligente: sem tela e sem soma; no Essencial é adicional', () => {
  const pro = r({ plano: 'profissional', adicionais: ['whatsapp'] })
  assert.equal(visivel('whatsapp', pro), false)
  assert.equal(totais(pro, DEPOIS).mensal, 499 * 100)
  assert.equal(totais({ ...pro, plano: 'essencial' }, DEPOIS).mensal, (249 + 99) * 100)
  assert.match(textoWhatsApp(pro, DEPOIS), /Profissional \(R\$\s499,00, com WhatsApp\)/)
})

test('Pacote IA soma no plano menor e sai da conta ao virar Inteligente', () => {
  const pro = r({ plano: 'profissional', adicionais: ['ia'] })
  assert.equal(totais(pro, DEPOIS).mensal, (499 + 250) * 100)
  assert.ok(totais({ ...pro, plano: 'inteligente' }, DEPOIS).mensal < totais(pro, DEPOIS).mensal, 'pelas contas vale o Inteligente')
  assert.equal(visivel('ia', { ...pro, plano: 'inteligente' }), false)
  assert.equal(new Set(ORDEM).size, ORDEM.length, 'a IA não aparece duas vezes no caminho')
  assert.equal(etapa('ia'), etapa('plano'))
})

test('recomendação: duas dores de IA puxam o Inteligente; oficina pequena fica no Essencial', () => {
  assert.equal(planoRecomendado(r({ equipe: 2, dores: ['digitar', 'oferecer'] })), 'inteligente')
  assert.equal(planoRecomendado(r({ equipe: 2, dores: ['sobra', 'digitar'] })), 'essencial')
  assert.equal(planoRecomendado(r({ equipe: 3, dores: [] })), 'essencial')
  assert.equal(planoRecomendado(r({ equipe: 6, dores: ['digitar'] })), 'profissional')
})

test('o total nunca aparece antes da escolha do plano, nem com rascunho salvo', () => {
  const salvo = r({ plano: 'essencial' })
  for (const passo of ['inicio', 'voce', 'equipe', 'dores', 'plano']) assert.equal(mostraTotal(passo, salvo), false, passo)
  assert.equal(mostraTotal('ia', salvo), true)
  assert.equal(mostraTotal('ia', r()), false, 'sem plano, sem total')
  assert.equal(mostraTotal('resumo', salvo), false)
})

test('instalação pelo trabalho: base + adicionais ligados, igual em todo plano e em qualquer equipe', () => {
  const x = r({ plano: 'profissional', equipe: 6, adicionais: ['site'] })
  assert.deepEqual(umaVez(x, ANTES), {
    remota: false, base: 39000, extras: [{ nome: 'WhatsApp dedicado', valor: 10000 }], instalacao: 49000, criacao: 290000,
    metade: METADE_INSTALACAO ? { instalacao: 24500, criacao: 145000 } : null, criacaoFundadora: 261000,
    total: 49000 + 290000, totalMetade: METADE_INSTALACAO ? 24500 + 145000 : null, totalFundadora: 49000 + 261000,
  })
  assert.equal(umaVez(x, DEPOIS).criacaoFundadora, null)
  assert.equal(umaVez(r({ plano: 'essencial', equipe: 3 }), DEPOIS).instalacao, 39000, 'Essencial de 3 pessoas')
  assert.equal(umaVez(r({ plano: 'essencial', equipe: 12 }), DEPOIS).instalacao, 39000, 'o treino da equipe toda está incluso')
  assert.equal(umaVez(r({ plano: 'inteligente', equipe: 3 }), DEPOIS).instalacao, 49000, 'o WhatsApp incluso soma a instalação dele')
  assert.equal(umaVez(r({ plano: 'essencial', equipe: 3, adicionais: ['nota'] }), DEPOIS).instalacao, 39000 + 20000)
  assert.equal(umaVez(r(), DEPOIS).instalacao, 0)
})

test('treino dedicado: opcional, só para equipe a partir de 6', () => {
  const grande = r({ plano: 'profissional', equipe: 6, treino: true })
  assert.equal(visivel('treino', grande), true)
  assert.equal(umaVez(grande, DEPOIS).instalacao, 39000 + 10000 + 14000)
  if (METADE_INSTALACAO) assert.equal(umaVez(grande, DEPOIS).metade.instalacao, (39000 + 10000) / 2, 'a metade das 2 primeiras não cobre o treino dedicado')
  if (METADE_INSTALACAO) assert.equal(umaVez(grande, DEPOIS).totalMetade, (39000 + 10000) / 2 + 14000, 'no total com desconto, o treino entra cheio')
  assert.equal(visivel('treino', { ...grande, equipe: 5 }), false)
  assert.equal(umaVez({ ...grande, equipe: 5 }, DEPOIS).instalacao, 49000, 'equipe menor não paga o treino dedicado')
})

test('instalação remota só no Essencial', () => {
  const remota = r({ plano: 'essencial', equipe: 3, remota: true })
  assert.equal(visivel('instalacao', remota), true)
  assert.equal(umaVez(remota, DEPOIS).instalacao, 25000)
  assert.equal(umaVez({ ...remota, plano: 'profissional' }, DEPOIS).remota, false, 'trocar de plano volta para a presencial')
  assert.equal(visivel('instalacao', { ...remota, plano: 'profissional' }), false)
})
