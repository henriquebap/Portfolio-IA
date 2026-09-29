import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CAPITULOS, DURACAO, FILME, MARCAS, PALETAS, quadroEm } from './roteiro.js'

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
    // Exatamente uma vez: a legenda se parte em antes · chave · depois (Personalizacao.jsx).
    if (q.chave) assert.equal(q.legenda.split(q.chave).length, 2, `chave "${q.chave}" precisa aparecer uma vez na legenda`)
  }
  // O quadro parado do reduced-motion (Personalizacao.jsx) é o primeiro com o PDF.
  assert.notEqual(FILME.findIndex((q) => q.pdf), -1)
})

// A legenda do filme é tinta escura sobre o fundo da paleta: fundo escuro (a Noite) não
// serve para uma oficina do filme sem mudar a legenda.
test('toda paleta usada pelas oficinas do filme tem fundo claro', () => {
  const luz = (hex) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  for (const m of MARCAS) assert.ok(luz(PALETAS[m.paleta].cores.fundo) > 0.7, `${m.nome}: fundo escuro demais para a legenda`)
})
