import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CAPITULOS, DURACAO, FILME, MARCAS, quadroEm } from './roteiro.js'

test('o filme anda quadro a quadro e os capítulos cobrem tudo, sem buraco', () => {
  assert.equal(quadroEm(0), 0)
  assert.equal(quadroEm(FILME[0].ms), 1)
  assert.equal(quadroEm(DURACAO - 1), FILME.length - 1)
  assert.equal(CAPITULOS[0].ini, 0)
  CAPITULOS.slice(1).forEach((c, i) => assert.equal(c.ini, CAPITULOS[i].fim))
  assert.equal(CAPITULOS.at(-1).fim, DURACAO)
})

test('todo quadro com logo, cores, paletas ou pdf tem marca, e todo cap existe', () => {
  const caps = new Set(CAPITULOS.map((c) => c.id))
  for (const q of FILME) {
    if (q.logo || q.cores || q.paletas || q.pdf) assert.ok(MARCAS[q.marca], `quadro "${q.legenda}" sem marca`)
    assert.ok(caps.has(q.cap), `cap "${q.cap}" fora de CAPITULOS`)
    if (q.chave) assert.ok(q.legenda.includes(q.chave), `chave "${q.chave}" fora da legenda`)
  }
  // O quadro parado do reduced-motion (Personalizacao.jsx) é o primeiro com o PDF.
  assert.notEqual(FILME.findIndex((q) => q.pdf), -1)
})
