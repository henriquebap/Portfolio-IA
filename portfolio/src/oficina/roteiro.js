// As cenas do /oficina, pelos pilares do cliente ideal (HOB-Tech/docs/00, "A
// oficina que…"). Só entra o que existe hoje na Wil Mec (HOB-Tech/oficina/01,
// coluna "Existe"). chave: o trecho do título em azul. foco: onde o zoom entra.

export const PILARES = [
  { id: 'ia', texto: 'quer usar IA no dia a dia' },
  { id: 'cuidado', texto: 'quer que o cliente veja o cuidado' },
  { id: 'gestao', texto: 'quer melhorar o serviço começando pela gestão' },
]

export const CENAS = [
  {
    id: 'voz',
    pilar: 'ia',
    titulo: 'O mecânico fala. Os itens entram na OS.',
    chave: 'fala.',
    texto: '“Troquei o filtro de óleo, duas pastilhas a cinquenta” vira item com quantidade e preço. O diagnóstico sai em português de relatório.',
    zoom: 1.2,
    foco: ['50%', '40%'],
  },
  {
    id: 'oportunidades',
    pilar: 'ia',
    titulo: 'O histórico do carro vira sugestão de preventiva.',
    chave: 'preventiva.',
    texto: 'A IA aponta o que vale oferecer, com o motivo e a urgência. Quem decide é a equipe.',
    zoom: 1.18,
    foco: ['50%', '42%'],
  },
  {
    id: 'vistoria',
    pilar: 'cuidado',
    titulo: 'Antes do serviço, o cliente vê o que você viu.',
    chave: 'vê',
    texto: 'Vistoria pelas áreas do carro, com fotos. O orçamento é aprovado item a item.',
    zoom: 1.22,
    foco: ['50%', '24%'],
  },
  {
    id: 'acompanhar',
    pilar: 'cuidado',
    titulo: 'Depois, ele acompanha pelo celular.',
    chave: 'celular.',
    texto: 'Status, itens e total numa página só dele. Na entrega vai o pedido de avaliação no Google; depois, o lembrete da revisão.',
    zoom: 1.15,
    foco: ['50%', '30%'],
  },
  {
    id: 'gestao',
    pilar: 'gestao',
    titulo: 'Quem levou o carro sem pagar fica na tela até pagar.',
    chave: 'até pagar.',
    texto: 'A fatura do cartão vira despesa conferida, e o mês fecha com DRE para o contador.',
    zoom: 1.18,
    foco: ['50%', '26%'],
  },
]
