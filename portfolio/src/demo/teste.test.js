import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { MENSAGEM_DEMO, whatsapp } from '../shared/contato.js'
import * as teste from './teste.js'

const { TESTE_DIAS, GUARDA_DIAS, ABERTURA, PASSOS, FAZER, SIMULACAO, DEPOIS, FECHAMENTO } = teste

// Todo texto da página, achatado: a copy mora toda em teste.js.
const textos = (x) => (typeof x === 'string' ? [x] : x && typeof x === 'object' ? Object.values(x).flatMap(textos) : [])
const pagina = textos({ ABERTURA, PASSOS, FAZER, SIMULACAO, DEPOIS, FECHAMENTO }).join('\n')

test('todo prazo em dias que a página cita é o do teste ou o da guarda (nada de "7 dias" esquecido)', () => {
  const dias = [...pagina.matchAll(/(\d+) dias/g)].map((m) => Number(m[1]))
  assert.ok(dias.length >= 4)
  for (const n of dias) assert.ok(n === TESTE_DIAS || n === GUARDA_DIAS, `${n} dias não vem de teste.js`)
  assert.ok(DEPOIS.caminhos[0].d.includes(`${GUARDA_DIAS} dias`))
  assert.equal(ABERTURA.titulo.join('').startsWith(`Teste o HOB Oficina por ${TESTE_DIAS} dias`), true)
})

test('a mensagem do WhatsApp, o título e a descrição do HTML dizem o mesmo prazo', () => {
  assert.ok(MENSAGEM_DEMO.includes(`por ${TESTE_DIAS} dias`))
  assert.ok(whatsapp(MENSAGEM_DEMO).length < 2000)
  const html = readFileSync(new URL('../../oficina/demo/index.html', import.meta.url), 'utf8')
  assert.ok(html.includes(`<title>Teste o HOB Oficina por ${TESTE_DIAS} dias</title>`))
  assert.equal([...html.matchAll(/(\d+) dias/g)].every((m) => Number(m[1]) === TESTE_DIAS), true)
})

test('sem preço, sem IA como adjetivo e sem o que a HOB não diz (HOB-Tech/docs/00)', () => {
  assert.doesNotMatch(pagina, /R\$|\bIA\b/)
  assert.doesNotMatch(pagina, /inteligen|implanta|sem internet|offline|suporte humano/i)
})

test('o endereço do teste é o combinado e a simulação usa o selo do app', () => {
  assert.equal(teste.ENDERECO_TESTE, '<nome-da-oficina>.henriquebap.com')
  assert.equal(teste.SELO, 'Simulação: na demo nada é enviado')
  assert.equal(SIMULACAO.itens.length, 3)
  assert.equal(FAZER.itens.length, 7)
  assert.equal(PASSOS.itens.length, 3)
})
