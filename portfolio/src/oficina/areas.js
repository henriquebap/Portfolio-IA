import { ADICIONAIS, MOSTRAR_NOTA_FISCAL, PLANOS } from './oferta'
import { Brilho, Caixa, Carteira, Celular, Chave, Prancheta } from './telas/icones'

// O que tem no sistema, por área. Só o que existe hoje (HOB-Tech/oficina/01,
// coluna "Existe", conferido no código do hob-oficina em 28/09/2026); placa
// automática fica de fora. destaque e resumo: o cartão do /oficina; amostra: um
// pedaço da tela do app, com dado fictício; itens: a lista completa do "ver tudo".
// Item em texto vem em todo plano; { t, plano } só a partir daquele plano e
// { t, adicional } só com o adicional (HOB-Tech/oficina/02, tabela de planos).
// ia: true = vem no Inteligente ou no Pacote IA, somado a qualquer plano.
export const AREAS = [
  {
    titulo: 'Balcão e OS',
    icone: Prancheta,
    destaque: 'Cliente, carro e OS numa tela só.',
    resumo: 'Orçamento aprovado item a item e PDF com a sua marca.',
    amostra: ['verde', 'OS #5712 · orçamento aprovado'],
    itens: [
      'No celular e no computador, com painéis do dia e do mês',
      'Cadastro rápido: cliente, carro e OS numa tela',
      'OS com status do começo à entrega',
      'Orçamento aprovado item a item',
      'Agenda de horários que vira OS',
      'PDF da OS e do orçamento com a sua marca: logo, cores e modelo',
      // hob-oficina PR #44 (28/09/2026): Configurações › Geral, só o dono.
      'Cores do app escolhidas pelo dono, para a equipe toda',
    ],
  },
  {
    titulo: 'Pátio e equipe',
    icone: Chave,
    destaque: 'Cada mecânico sabe o que fazer hoje.',
    resumo: 'Vê só as OS dele, e o que ficou de ontem já aparece.',
    amostra: ['ambar', 'Hoje: 3 OS · 1 ficou de ontem'],
    itens: [
      'Vistoria pelas 8 áreas do carro, 57 itens, com fotos e gravidade',
      'Cada mecânico vê só as OS dele',
      // Roda na Wil Mec (Wilmec-system e1b67b5); entra no produto pela issue #38 do hob-oficina.
      'Comissão de cada mecânico sobre a mão de obra, fechada no mês',
      { t: 'Planejamento da semana: o que ficou de ontem aparece hoje', plano: 'profissional' },
      { t: 'Kits de serviço prontos', plano: 'profissional' },
    ],
  },
  {
    titulo: 'Cliente',
    icone: Celular,
    destaque: 'O cliente acompanha pelo celular.',
    resumo: 'E recebe o lembrete da próxima revisão por KM ou tempo.',
    amostra: ['azul', 'Pronto para retirar · e-mail enviado'],
    itens: [
      'Página para acompanhar a OS pelo celular',
      'E-mail de pronto e de entrega, com pedido de avaliação no Google',
      { t: 'Lembrete da próxima revisão por KM ou tempo', plano: 'profissional' },
      { t: 'QR de avaliação e de autocadastro', plano: 'profissional' },
    ],
  },
  {
    titulo: 'Estoque',
    icone: Caixa,
    destaque: 'Cada peça com foto e lugar certo.',
    resumo: 'Estoque baixo avisa, e a compra vem sugerida pelo giro.',
    amostra: ['azul', 'Pastilha dianteira · A3 · 4 un'],
    itens: [
      'Peças com foto, localização e mínimo',
      'Entradas e saídas registradas; correção por estorno',
      'Estoque baixo e sugestão de compra pelo giro',
      { t: 'Assistente de estoque por chat: texto, áudio e foto', plano: 'inteligente', ia: true },
    ],
  },
  {
    titulo: 'Dinheiro',
    icone: Carteira,
    destaque: 'Quem não pagou não some da tela.',
    resumo: 'Fatura do cartão conferida e o mês fechado com DRE.',
    amostra: ['vermelho', 'Entregue e não pago · R$ 640,00'],
    itens: [
      'Recebimentos em várias formas, com parcelas',
      'Quem levou o carro sem pagar fica na tela até pagar',
      'Contas a pagar e previsão de caixa',
      'Fechamento do mês com DRE e CSV para o contador',
      { t: 'Fatura do cartão lida e conferida', plano: 'profissional' },
      { t: 'Relatórios do dono', plano: 'profissional' },
      ...(MOSTRAR_NOTA_FISCAL ? [{ t: 'Nota fiscal pronta quando a OS é paga', adicional: 'nota' }] : []),
    ],
  },
  {
    titulo: 'IA por trás',
    icone: Brilho,
    escuro: true,
    destaque: 'A IA faz o trabalho chato.',
    resumo: 'Sugere o que oferecer, escreve no tom da oficina e arruma o histórico. Quem decide é a equipe.',
    amostra: ['ambar', 'Sugestão: fluido de freio · segurança'],
    itens: [
      // destaque: o diferencial que puxa o ticket, em evidência na tela da IA (decisão de 28/09/2026).
      { t: 'Em cada carro, o que vale oferecer, com o motivo e a urgência', plano: 'inteligente', ia: true, destaque: true },
      { t: 'O mecânico fala e os itens entram na OS; o diagnóstico sai em português de relatório', plano: 'inteligente', ia: true },
      { t: 'Histórico arrumado: serviços classificados e cadastros duplicados encontrados', plano: 'inteligente', ia: true },
      { t: 'Mensagens ao cliente no tom da oficina, com as respostas lidas e organizadas', plano: 'profissional', adicional: 'whatsapp' },
      { t: 'Você liga, desliga e confere cada mensagem automática que saiu', plano: 'profissional', adicional: 'whatsapp' },
    ],
  },
]

export const texto = (item) => (typeof item === 'string' ? item : item.t)

// Nome do plano ou do adicional de que o item depende; null = todo plano.
const NOME = Object.fromEntries([...PLANOS, ...ADICIONAIS].map((x) => [x.id, x.nome]))
export const selo = (item) => {
  if (typeof item === 'string') return null
  if (item.ia) return 'Inteligente ou Pacote IA'
  return item.plano && item.adicional ? `${NOME[item.plano]} ou ${NOME[item.adicional]}` : NOME[item.plano ?? item.adicional]
}
