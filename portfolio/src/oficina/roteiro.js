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

// O filme da seção "Com a sua cara" (Personalizacao.jsx). As paletas são as
// prontas do app (hob-oficina/src/lib/aparencia-app.ts, PALETAS); as oficinas
// são fictícias. O cinza do começo é o "sistema genérico" do filme, não o padrão
// do app.
export const GENERICO = { principal: '#64748B', secundaria: '#334155', terciaria: '#94A3B8', fundo: '#EEF0F2' }

export const PALETAS = [
  { nome: 'Vermelho oficina', cores: { principal: '#B91C1C', secundaria: '#2A1517', terciaria: '#D97706', fundo: '#F5EFEE' } },
  { nome: 'Verde', cores: { principal: '#15803D', secundaria: '#0F2A1D', terciaria: '#B7791F', fundo: '#EAF2EC' } },
  { nome: 'Azul petróleo', cores: { principal: '#0F766E', secundaria: '#0B2A33', terciaria: '#E0603A', fundo: '#E6EFF1' } },
  { nome: 'Grafite', cores: { principal: '#374151', secundaria: '#1F2937', terciaria: '#0284C7', fundo: '#EDEEF0' } },
  { nome: 'Noite', cores: { principal: '#4F46E5', secundaria: '#334155', terciaria: '#D97706', fundo: '#0B1220' } },
]

// paleta: índice em PALETAS. rodape: o texto que o dono escreve para o pé do PDF.
export const MARCAS = [
  { nome: 'Prado Auto Center', sigla: 'PA', forma: 'escudo', paleta: 0, rodape: 'Garantia de 90 dias em peças e mão de obra.' },
  { nome: 'Garagem Costa', sigla: 'GC', forma: 'circulo', paleta: 1, rodape: 'Peças originais. Aceitamos Pix e cartão.' },
  { nome: 'Torque Câmbios', sigla: 'TC', forma: 'hexagono', paleta: 2, rodape: 'Especialista em câmbio automático.' },
]

// Cada quadro é o estado inteiro da tela; a tela anima de um para o outro.
// marca: índice em MARCAS (null = genérico) · logo: o logo no topo do app ·
// paletas: o cartão das paletas prontas · cores: a paleta da marca aplicada ·
// pdf: a folha fora do celular · cap: o capítulo na barra do filme · chave: o
// trecho da legenda na cor da marca.
export const FILME = [
  { cap: 'logo', ms: 1500, marca: null, legenda: 'Todo sistema chega igual…', chave: 'igual…' },
  { cap: 'logo', ms: 1300, marca: 0, logo: true, legenda: '…até entrar o logo de vocês.', chave: 'logo' },
  { cap: 'cores', ms: 1000, marca: 0, logo: true, paletas: true, legenda: 'Depois, as cores da oficina.', chave: 'cores' },
  { cap: 'cores', ms: 1800, marca: 0, logo: true, paletas: true, cores: true, legenda: 'Do botão ao menu, para a equipe toda.', chave: 'equipe toda.' },
  { cap: 'pdf', ms: 3400, marca: 0, logo: true, cores: true, pdf: true, legenda: 'E o PDF que chega ao cliente sai com o seu timbre.', chave: 'seu timbre.' },
  { cap: 'cara', ms: 1000, marca: 1, logo: true, cores: true, pdf: true, legenda: 'Cada oficina…', chave: 'oficina…' },
  { cap: 'cara', ms: 1000, marca: 2, logo: true, cores: true, pdf: true, legenda: 'Cada oficina…', chave: 'oficina…' },
  { cap: 'cara', ms: 1800, marca: 2, logo: true, cores: true, pdf: true, legenda: '…com a sua cara.', chave: 'sua cara.' },
]

const inicio = (i) => FILME.slice(0, i).reduce((soma, q) => soma + q.ms, 0)

export const DURACAO = inicio(FILME.length)

// Onde cada capítulo começa e acaba no tempo do filme (ms).
export const CAPITULOS = [['logo', 'Logo'], ['cores', 'Cores'], ['pdf', 'PDF'], ['cara', 'Sua cara']].map(([id, rotulo]) => ({
  id,
  rotulo,
  ini: inicio(FILME.findIndex((q) => q.cap === id)),
  fim: inicio(FILME.findLastIndex((q) => q.cap === id) + 1),
}))

// O quadro no tempo t (ms, de 0 até DURACAO).
export function quadroEm(t) {
  let fim = 0
  for (let i = 0; i < FILME.length; i++) {
    fim += FILME[i].ms
    if (t < fim) return i
  }
  return FILME.length - 1
}
