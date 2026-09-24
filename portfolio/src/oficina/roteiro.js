// As cenas do /oficina, organizadas pelos 5 pilares do cliente ideal
// (HOB-Tech/docs/00, "A oficina que…"). Só entra o que existe hoje na Wil Mec
// (HOB-Tech/oficina/01, coluna "Existe"). foco: ponto da tela onde o zoom entra.

import { NOTA_FISCAL_NO_AR } from './oferta'

export const PILARES = [
  { id: 'tecnologia', texto: 'acredita em tecnologia' },
  { id: 'ia', texto: 'quer usar IA no dia a dia' },
  { id: 'cuidado', texto: 'quer que o cliente veja o cuidado' },
  { id: 'equipe', texto: 'quer facilitar o trabalho da equipe' },
  { id: 'gestao', texto: 'quer melhorar o serviço começando pela gestão' },
]

const TODAS = [
  {
    id: 'painel',
    pilar: 'tecnologia',
    titulo: 'No celular e no computador, com a sua marca.',
    texto: 'Painéis para ver o dia e o mês. O PDF da OS e do orçamento sai com o logo e as cores da sua oficina.',
    zoom: 1.18,
    foco: ['50%', '36%'],
  },
  {
    id: 'voz',
    pilar: 'ia',
    titulo: 'O mecânico fala. Os itens entram na OS.',
    texto: '“Troquei o filtro de óleo, duas pastilhas a cinquenta” vira item com quantidade e preço. O diagnóstico rabiscado sai em português de relatório.',
    zoom: 1.2,
    foco: ['50%', '40%'],
  },
  {
    id: 'oportunidades',
    pilar: 'ia',
    titulo: 'O histórico do carro vira sugestão de preventiva.',
    texto: 'O sistema mostra o que vale oferecer neste carro, com o motivo e a urgência. A IA sugere; quem decide é a equipe. Tudo fica registrado.',
    zoom: 1.18,
    foco: ['50%', '42%'],
  },
  {
    id: 'vistoria',
    pilar: 'cuidado',
    titulo: 'Antes do serviço, o cliente vê o que você viu.',
    texto: 'Vistoria pelas áreas do carro, com fotos e o nível de cada item. O orçamento é aprovado item a item.',
    zoom: 1.22,
    foco: ['50%', '24%'],
  },
  {
    id: 'acompanhar',
    pilar: 'cuidado',
    titulo: 'Depois, ele acompanha pelo celular.',
    texto: 'Uma página só da OS dele, com status, itens e total. Na entrega vão o e-mail de pronto e o pedido de avaliação no Google, e na hora certa o lembrete da próxima revisão.',
    zoom: 1.15,
    foco: ['50%', '30%'],
  },
  {
    id: 'equipe',
    pilar: 'equipe',
    titulo: 'Cada um sabe o que fazer hoje.',
    texto: 'O mecânico vê só as OS dele. O que não terminou ontem aparece hoje sozinho, e os kits de serviço já vêm prontos.',
    zoom: 1.15,
    foco: ['50%', '30%'],
  },
  {
    id: 'gestao',
    pilar: 'gestao',
    titulo: 'Quem levou o carro sem pagar fica na tela até pagar.',
    texto: 'A fatura do cartão vira despesa conferida, e o mês fecha com DRE para o contador. Saldo e margem, só o dono vê.',
    zoom: 1.18,
    foco: ['50%', '26%'],
  },
  {
    id: 'nota',
    pilar: 'gestao',
    publicado: NOTA_FISCAL_NO_AR,
    titulo: 'OS paga, nota pronta para conferir.',
    texto: 'Quando a OS é paga ou entregue, a nota já está montada. Você confere e emite com um clique.',
    zoom: 1.2,
    foco: ['50%', '40%'],
  },
]

export const CENAS = TODAS.filter((c) => c.publicado !== false)
