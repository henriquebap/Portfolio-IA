import { TESTE_DIAS } from './oferta.js'

// O pedido vira uma mensagem pronta no WhatsApp do Henrique, sem backend. A oferta
// (dias e promessa) mora em oferta.js.
export const LIMITE_CAMPO = 60
// Array.from corta por caractere: um emoji no limite não vira par substituto solto
// (que faria encodeURIComponent lançar URIError no render).
const limpa = (t) => Array.from(t.trim()).slice(0, LIMITE_CAMPO).join('')

export const pedidoPronto = ({ nome, oficina }) => Boolean(limpa(nome) && limpa(oficina))

export function mensagemTeste({ nome, oficina, cidade }) {
  const quem = [nome, oficina, cidade].map(limpa).filter(Boolean).join(' · ')
  return `Oi, Henrique! Quero o teste gratuito de ${TESTE_DIAS} dias do HOB Oficina.\n\n${quem}`
}

// Para o /oficina/planos: o texto da montagem, com a linha do teste depois da abertura.
export function comTeste(corpo) {
  const [abertura, ...resto] = corpo.split('\n')
  return [abertura, '', `Quero começar pelo teste gratuito de ${TESTE_DIAS} dias.`, ...resto].join('\n')
}
