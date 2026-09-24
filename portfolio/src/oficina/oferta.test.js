import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fundadoraAberta, FUNDADORA_ATE } from './oferta.js'

test('fundadora vale até o último dia, inclusive, e some no dia seguinte', () => {
  const [a, m, d] = FUNDADORA_ATE.split('-').map(Number)
  assert.equal(fundadoraAberta(new Date(a, m - 1, d, 23, 59)), true)
  assert.equal(fundadoraAberta(new Date(a, m - 1, d + 1, 0, 1)), false)
  assert.equal(fundadoraAberta(new Date(2026, 8, 23)), true)
})
