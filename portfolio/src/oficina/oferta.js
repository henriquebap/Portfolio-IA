// Oferta fixa do HOB Oficina. Fonte única: HOB-Tech/docs/00 (Escassez) e docs/02
// (preço e fundadora). Mudou lá, muda aqui. Nada de desconto fora desta lista.
// A página mostra só a faixa da mensalidade; instalação e hora de desenvolvimento
// ficam para a conversa (decisão de 23/09/2026).

export const OFICINAS_POR_MES = 5

// Teste gratuito (Portfolio-IA#13, 01/10/2026): 7 dias é a regra geral; o Henrique
// estende caso a caso, na conversa, e a página não diz isso nem promete prazo de
// liberação. Só o que vale nos dois docs (HOB-Tech/docs/02 e docs/10): dados fictícios,
// os da oficina só na instalação de verdade. Não citar WhatsApp, nota nem usuários.
export const TESTE_DIAS = 7
export const TESTE_PROMESSA =
  'Uma instalação própria, com dados fictícios e sem compromisso. Os dados da sua oficina só entram na instalação de verdade.'

// Nota fiscal (PR #82 do Wilmec-system): liberada ao público em 23/09/2026, com os
// testes reais começando na Wil Mec. Com false, a seção, a cena e a menção ao
// pacote aparecem só no `npm run dev` e somem do build publicado.
export const NOTA_FISCAL_NO_AR = true
export const MOSTRAR_NOTA_FISCAL = NOTA_FISCAL_NO_AR || import.meta.env?.DEV === true

// Pacote site da oficina (molde do site da Wil Mec, HOB-Tech/oficina/01 "Site
// institucional"). Mesmo esquema da nota: com false, aparece só no `npm run dev`.
export const SITE_NO_AR = true
export const MOSTRAR_SITE = SITE_NO_AR || import.meta.env?.DEV === true

// As 2 primeiras do mês pagam metade da instalação e da criação do site (o site entrou
// em 28/09/2026). Desligar à mão quando as 2 fecharem; religar quando o mês virar.
export const METADE_INSTALACAO = true

// Parceira fundadora: o bloco some sozinho depois desta data (pode ir até '2026-11-30').
export const FUNDADORA_ATE = '2026-10-31'

// Os 3 primeiros aparecem na caixa da oferta; o resto fica no "ver todos".
export const BENEFICIOS_FUNDADORA = [
  '10% na mensalidade por 6 meses',
  '60 dias com a IA do plano Inteligente liberada',
  '30 dias de garantia',
  '10% em pacotes e serviços adicionais enquanto for cliente',
  'acesso antecipado às novidades',
  'voto no que entra primeiro',
]

// Data local em 'YYYY-MM-DD' comparada como texto: sem fuso nem new Date(string).
export function fundadoraAberta(hoje = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${hoje.getFullYear()}-${p(hoje.getMonth() + 1)}-${p(hoje.getDate())}` <= FUNDADORA_ATE
}

// Planos e adicionais (HOB-Tech/docs/02 e oficina/02). O /oficina mostra só a faixa
// da mensalidade; o /oficina/planos mostra cada mensalidade e, como teto, o que se
// paga uma vez: instalação e criação do site pelo valor de tabela (decisão de
// 28/09/2026: nada escondido; desconto combinado na conversa só baixa). Hora de
// desenvolvimento continua fora da página. incluidos: adicionais que já vêm no plano
// (o WhatsApp entrou no Profissional e no Inteligente em 28/09/2026).
export const PLANOS = [
  { id: 'essencial', nome: 'Essencial', mensal: 249, usuarios: 3, incluidos: [], para: 'Balcão, pátio, estoque e dinheiro organizados, para até 3 pessoas.' },
  { id: 'profissional', nome: 'Profissional', mensal: 499, usuarios: null, incluidos: ['whatsapp'], para: 'A equipe toda no sistema, o WhatsApp cuidando do cliente e o dono vendo o mês com calma.' },
  { id: 'inteligente', nome: 'Inteligente', mensal: 699, usuarios: null, incluidos: ['whatsapp', 'ia'], para: 'A IA por trás de cada OS, fazendo o trabalho chato.' },
]

// Instalação pelo trabalho, igual para qualquer plano (decisão de 28/09/2026): hora de
// pacote (R$ 70) × horas estimadas, mais o transporte da visita (HOB-Tech/docs/02).
// base: sistema no ar com a marca, configuração, 1 visita, treino da equipe toda e a
// 1ª semana. O treino não se cobra à parte, seja qual for a equipe (ensinar a usar é
// parte da instalação). remota: sem a visita, treino por vídeo, só no Essencial. Os
// adicionais somam a instalação deles (campo instalacao em ADICIONAIS). Migração do
// sistema antigo fica na conversa.
export const INSTALACAO = { base: 390, remota: 250 }

// Opcional para equipe grande: uma sessão dedicada, presencial ou por vídeo, além do
// treino da instalação (2 h × R$ 70). Vídeo-aula gravada ainda não existe: fora.
export const TREINO_DEDICADO = { horas: 2, valor: 140, aPartirDe: 6 }

// Domínio (HOB-Tech/docs/10): tudo que a oficina e os clientes dela veem fica no
// domínio da oficina, no CNPJ dela; nunca num domínio da HOB ou do Henrique.
export const DOMINIO =
  'O sistema e o site ficam no domínio da sua oficina, registrado no CNPJ de vocês (cerca de R$ 40 por ano, no registro.br). ' +
  'Não tem? Eu registro na instalação. Até lá, o sistema funciona num endereço provisório, e o site só vai ao ar no domínio de vocês.'

// Só no Essencial, por usuário além dos 3.
export const USUARIO_EXTRA = 29

// Parcelamento sem juros do que se paga uma vez (instalação e criação do site), pelo
// Asaas: carnê no boleto ou Pix, ou cartão, em que a HOB absorve a taxa (decisão de 28/09/2026).
export const PARCELAS = { boletoPix: 3, cartao: 12 }

export const MENSALIDADE = { de: PLANOS[0].mensal, ate: PLANOS.at(-1).mensal }

// Os adicionais, cada um abrindo por uma dor que a oficina reconhece. Só o que roda
// na Wil Mec (Wilmec-system PRs #57, #63, #70/#72 e #82; HOB-Tech/oficina/01). Fora
// até existir: anúncio no Google, agendamento online, consulta de placa (sem
// provedor). Nota: "se monta sozinha", nunca "emite sozinha" (a emissão automática
// foi retirada de propósito). mensal null = sob consulta; soNaMontagem = fica fora
// do /oficina (o Mercado Livre é sob demanda desde 16/09/2026, docs/02).
export const ADICIONAIS = [
  // Pacote IA (decisão de 28/09/2026): toda a IA num plano menor. Profissional + IA
  // empata com o Inteligente, que já vem com ela; os itens estão em areas.js (ia: true).
  {
    id: 'ia',
    publicado: true,
    soNaMontagem: true,
    mensal: 250,
    obs: 'no Inteligente ela já vem junto',
    nome: 'Pacote IA',
  },
  {
    id: 'site',
    publicado: MOSTRAR_SITE,
    mensal: 49,
    criacao: 2900,
    obs: 'no domínio da oficina, registrado no CNPJ de vocês',
    nome: 'Site da oficina',
    gancho: 'Ainda não tem site?',
    promessa: 'Quem procura oficina na sua região encontra a sua.',
    itens: ['Com a marca, as fotos e os serviços', 'WhatsApp e mapa a um toque', 'Pedido de orçamento cai direto no sistema'],
    botao: 'Quero o site',
  },
  {
    id: 'whatsapp',
    publicado: true,
    mensal: 99,
    instalacao: 100,
    obs: 'o número é um chip só da oficina, nunca o seu pessoal',
    nome: 'WhatsApp dedicado',
    gancho: 'Cliente sumiu depois da entrega?',
    promessa: 'Cuida do antes e do depois, com a IA escrevendo no tom de vocês.',
    itens: ['Pré-venda: proposta com a resposta na OS', 'Pós-venda: pesquisa depois da entrega', 'Preventiva: lembrete da próxima revisão'],
    // O resto do que roda na Wil Mec (confirmado em 28/09/2026; interruptores em
    // hob-oficina/src/lib/bot/capacidades.ts). Aparece só na montagem.
    mais: [
      'Carro pronto e entregue: o cliente fica sabendo pelo WhatsApp',
      'Orçamento parado: o cliente recebe um lembrete',
      'OS e orçamento saem direto do número da oficina',
      'Quem ficou devendo recebe a cobrança com a chave PIX no dia, em 7 e em 30 dias',
      'Bom dia do mecânico, com as OS de cada um',
      'Você liga, desliga e confere cada mensagem que saiu',
    ],
    botao: 'Quero o WhatsApp',
  },
  {
    id: 'nota',
    publicado: MOSTRAR_NOTA_FISCAL,
    mensal: 149,
    instalacao: 200,
    obs: 'precisa do certificado digital da oficina e dos dados do contador',
    nome: 'Nota fiscal',
    gancho: 'Ainda faz nota na mão?',
    promessa: 'Quando a OS é paga ou entregue, a nota se monta sozinha. Você confere e emite com um clique.',
    itens: ['Serviço e peças, cada um na nota certa', 'Código fiscal das peças pelas suas compras', 'PDF da nota por e-mail para o cliente'],
    botao: 'Quero a nota fiscal',
  },
  {
    id: 'mercadolivre',
    publicado: true,
    soNaMontagem: true,
    mensal: null,
    obs: 'a tarifa do anúncio é do Mercado Livre, na conta da oficina',
    nome: 'Mercado Livre',
    gancho: 'Peça parada na prateleira?',
    promessa: 'A peça vira anúncio no Mercado Livre, e a venda baixa o estoque.',
    itens: ['Anúncio montado pelo chat ou por um botão; você confere antes de publicar', 'Pergunta de fato é respondida com o cadastro; o resto chega para você com um rascunho', 'Vendeu: baixa o estoque e avisa'],
    botao: 'Quero o Mercado Livre',
  },
]

export const GARANTIAS = [
  'Seus dados num ambiente só da sua oficina, exportáveis a qualquer momento.',
  'Se um dia quiser deixar de assinar, existe a licença: o sistema passa para uma conta da sua oficina.',
  'Suporte direto com quem construiu.',
]
