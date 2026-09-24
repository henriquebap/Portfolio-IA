// Oferta fixa do HOB Oficina. Fonte única: HOB-Tech/docs/00 (Escassez) e docs/02
// (preço e fundadora), com o escopo dos planos do docs/modelos/one-pager-oficina.md.
// Mudou lá, muda aqui. Nada de desconto fora desta lista.

export const OFICINAS_POR_MES = 5

// Desligar à mão quando as 2 primeiras do mês fecharem; religar quando o mês virar.
export const METADE_INSTALACAO = true

// Parceira fundadora: o bloco some sozinho depois desta data (pode ir até '2026-11-30').
export const FUNDADORA_ATE = '2026-10-31'

export const BENEFICIOS_FUNDADORA = [
  '10% na mensalidade por 6 meses',
  '10% em pacotes e serviços adicionais enquanto for cliente',
  'acesso antecipado às novidades, testadas antes na Wil Mec',
  '60 dias com a IA do plano Inteligente liberada',
  'voto no que entra primeiro',
  '30 dias de garantia',
]

// Data local em 'YYYY-MM-DD' comparada como texto: sem fuso nem new Date(string).
export function fundadoraAberta(hoje = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${hoje.getFullYear()}-${p(hoje.getMonth() + 1)}-${p(hoje.getDate())}` <= FUNDADORA_ATE
}

export const PLANOS = [
  {
    nome: 'Essencial',
    preco: 249,
    inclui: 'OS, orçamento item a item, agenda, vistoria com fotos, página de acompanhar e e-mails ao cliente, estoque e financeiro completo.',
  },
  {
    nome: 'Profissional',
    preco: 449,
    destaque: 'o mais comum',
    inclui: 'Tudo do Essencial, mais fatura do cartão, relatórios, planejamento semanal, QR de avaliação, lembretes de revisão, kits de serviço e usuários ilimitados.',
  },
  {
    nome: 'Inteligente',
    preco: 699,
    inclui: 'Tudo do Profissional, mais IA na OS (voz para itens, diagnóstico, preventiva), assistente de estoque por chat e migração do histórico.',
  },
]

export const GARANTIAS = [
  'Seus dados num ambiente só da sua oficina, exportáveis a qualquer momento.',
  'Licença, se um dia quiser o sistema só seu.',
  'Suporte direto com quem construiu.',
]
