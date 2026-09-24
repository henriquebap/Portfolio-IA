// Oferta fixa do HOB Oficina. Fonte única: HOB-Tech/docs/00 (Escassez) e docs/02
// (preço e fundadora). Mudou lá, muda aqui. Nada de desconto fora desta lista.
// A página mostra só a faixa da mensalidade; instalação e hora de desenvolvimento
// ficam para a conversa (decisão de 23/09/2026).

export const OFICINAS_POR_MES = 5

// Nota fiscal (PR #82 do Wilmec-system): liberada ao público em 23/09/2026, com os
// testes reais começando na Wil Mec. Com false, a seção, a cena e a menção ao
// pacote aparecem só no `npm run dev` e somem do build publicado.
export const NOTA_FISCAL_NO_AR = true
export const MOSTRAR_NOTA_FISCAL = NOTA_FISCAL_NO_AR || import.meta.env?.DEV === true

// Pacote site da oficina (molde do site da Wil Mec, HOB-Tech/oficina/01 "Site
// institucional"). Mesmo esquema da nota: com false, aparece só no `npm run dev`.
export const SITE_NO_AR = true
export const MOSTRAR_SITE = SITE_NO_AR || import.meta.env?.DEV === true

// Desligar à mão quando as 2 primeiras do mês fecharem; religar quando o mês virar.
export const METADE_INSTALACAO = true

// Parceira fundadora: o bloco some sozinho depois desta data (pode ir até '2026-11-30').
export const FUNDADORA_ATE = '2026-10-31'

export const BENEFICIOS_FUNDADORA = [
  '10% na mensalidade por 6 meses',
  '10% em pacotes e serviços adicionais enquanto for cliente',
  'acesso antecipado às novidades',
  '60 dias com a IA do plano Inteligente liberada',
  'voto no que entra primeiro',
  '30 dias de garantia',
]

// Data local em 'YYYY-MM-DD' comparada como texto: sem fuso nem new Date(string).
export function fundadoraAberta(hoje = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${hoje.getFullYear()}-${p(hoje.getMonth() + 1)}-${p(hoje.getDate())}` <= FUNDADORA_ATE
}

// Mensalidade dos planos Essencial, Profissional e Inteligente.
export const MENSALIDADE = { de: 249, ate: 699 }

export const GARANTIAS = [
  'Seus dados num ambiente só da sua oficina, exportáveis a qualquer momento.',
  'Se um dia quiser deixar de assinar, existe a licença: o sistema passa para uma conta da sua oficina.',
  'Suporte direto com quem construiu.',
]
