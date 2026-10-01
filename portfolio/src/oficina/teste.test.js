import { test } from 'node:test'
import assert from 'node:assert/strict'
import { whatsapp } from '../shared/contato.js'
import { TESTE_DIAS } from './oferta.js'
import { MARCA, VAZIA, textoWhatsApp } from '../planos/montagem.js'
import { comTeste, mensagemTeste, pedidoPronto } from './teste.js'

test('a mensagem cita os 7 dias e leva nome, oficina e cidade', () => {
  const m = mensagemTeste({ nome: ' Sérgio ', oficina: 'Auto Center Sul', cidade: 'Santo André' })
  assert.equal(TESTE_DIAS, 7)
  assert.match(m, /teste gratuito de 7 dias/)
  assert.match(m, /Sérgio · Auto Center Sul · Santo André/)
})

test('sem cidade a linha não fica com separador sobrando', () => {
  const m = mensagemTeste({ nome: 'Sérgio', oficina: 'Auto Center Sul', cidade: '  ' })
  assert.match(m, /Sérgio · Auto Center Sul$/)
})

test('campos enormes são cortados para o link do WhatsApp não estourar', () => {
  // 'ã' vira 6 caracteres no link: é o pior caso do limite de 2.000 do WhatsApp
  const m = mensagemTeste({ nome: 'ã'.repeat(500), oficina: 'ã'.repeat(500), cidade: 'ã'.repeat(500) })
  assert.ok(whatsapp(m).length < 2000)
})

test('emoji no limite não deixa par substituto solto (encodeURIComponent lançaria)', () => {
  const m = mensagemTeste({ nome: '😀'.repeat(100), oficina: 'Auto Center', cidade: '' })
  assert.doesNotThrow(() => encodeURIComponent(m))
})

test('o pedido só está pronto com nome e oficina; a cidade é opcional', () => {
  assert.equal(pedidoPronto({ nome: 'Sérgio', oficina: 'Auto Center Sul', cidade: '' }), true)
  assert.equal(pedidoPronto({ nome: ' ', oficina: 'Auto Center Sul', cidade: '' }), false)
  assert.equal(pedidoPronto({ nome: 'Sérgio', oficina: '', cidade: 'SP' }), false)
})

// /oficina/planos: a pessoa já montou o plano, então o pedido reaproveita o texto inteiro
// da montagem (com a marca que a prospecção reconhece) e só acrescenta a linha do teste.
test('no planos, a linha do teste entra logo depois da abertura e a marca continua', () => {
  const corpo = textoWhatsApp({ ...VAZIA, nome: 'Sérgio', oficina: 'Auto Center Sul', plano: 'essencial', equipe: 3 })
  const m = comTeste(corpo)
  const linhas = m.split('\n')
  assert.ok(linhas[0].includes(MARCA))
  assert.equal(linhas[2], `Quero começar pelo teste gratuito de ${TESTE_DIAS} dias.`)
  assert.equal(m.replace(linhas[2], '').replace(/\n{3,}/g, '\n\n'), corpo, 'o resto do texto fica igual')
})

test('no planos, o pior caso da montagem com a linha do teste continua abaixo de 2.000 caracteres', () => {
  const frase = (n) => 'Queria a comissão de cada mecânico e a margem por serviço, separada por mês. '.repeat(40).slice(0, n)
  const cheio = {
    ...VAZIA, nome: frase(200), oficina: frase(200), cidade: frase(200), equipe: 12, plano: 'essencial', extras: true,
    dores: ['sumiu', 'orcamento', 'parada'], adicionais: ['site', 'whatsapp', 'nota', 'mercadolivre'], falta: frase(2000),
  }
  assert.ok(whatsapp(comTeste(textoWhatsApp(cheio))).length < 2000)
})
