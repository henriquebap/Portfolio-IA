import { GARANTIAS, MENSALIDADE, MOSTRAR_NOTA_FISCAL, MOSTRAR_SITE } from './oferta'

// O que tem no sistema, por área. Só o que existe hoje (HOB-Tech/oficina/01,
// coluna "Existe"); placa automática e aviso automático de OS ficam de fora.
const AREAS = [
  {
    titulo: 'Balcão e OS',
    itens: [
      'Cadastro rápido: cliente, carro e OS numa tela',
      'OS com status do começo à entrega',
      'Orçamento aprovado item a item',
      'Agenda de horários que vira OS',
      'PDF da OS e do orçamento com a sua marca',
    ],
  },
  {
    titulo: 'Pátio e equipe',
    itens: [
      'Vistoria pelas áreas do carro, com fotos',
      'Cada mecânico vê só as OS dele',
      'Planejamento da semana: o que ficou de ontem aparece hoje',
      'Kits de serviço prontos',
    ],
  },
  {
    titulo: 'Cliente',
    itens: [
      'Página para acompanhar a OS pelo celular',
      'E-mail de pronto e de entrega, com pedido de avaliação no Google',
      'Lembrete da próxima revisão por KM ou tempo',
      'QR de avaliação e de autocadastro',
    ],
  },
  {
    titulo: 'Estoque',
    itens: [
      'Peças com foto, localização e mínimo',
      'Entradas e saídas registradas; correção por estorno',
      'Estoque baixo e sugestão de compra pelo giro',
      'Assistente de estoque por chat: texto, áudio e foto',
    ],
  },
  {
    titulo: 'Dinheiro',
    itens: [
      'Recebimentos em várias formas, com parcelas',
      'Quem levou o carro sem pagar fica na tela até pagar',
      'Contas a pagar e previsão de caixa',
      'Fatura do cartão lida e conferida',
      'Fechamento do mês com DRE e CSV para o contador',
      ...(MOSTRAR_NOTA_FISCAL ? ['Nota fiscal pronta quando a OS é paga (pacote)'] : []),
    ],
  },
  {
    titulo: 'IA no dia a dia',
    itens: [
      'O mecânico fala e os itens entram na OS; o diagnóstico sai em português de relatório',
      'Em cada carro, o que vale oferecer, com o motivo e a urgência',
      'Mensagens ao cliente no tom da oficina, com as respostas lidas e organizadas',
      'Histórico arrumado: serviços classificados e cadastros duplicados encontrados',
      'Central de IA para ver, ligar, desligar e testar cada automação',
    ],
  },
]

export function Recursos() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="rotulo text-grafite">O que tem dentro</p>
      <h2 className="titulo mt-4 max-w-[20ch] text-[clamp(2rem,5vw,3.5rem)]">Do balcão ao fechamento do mês.</h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a) => (
          <div key={a.titulo} className="rounded-2xl border border-linha bg-white/70 p-6">
            <p className="rotulo text-azul">{a.titulo}</p>
            <ul className="mt-4 grid gap-2.5">
              {a.itens.map((i) => (
                <li key={i} className="flex gap-2.5 leading-snug"><span className="text-azul" aria-hidden="true">·</span>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

const JEITO = [
  {
    titulo: 'Você escolhe o que liga',
    texto: 'Comece pelo plano que cabe no seu dia e suba de plano ou ligue pacotes quando fizer sentido. Não paga pelo que não usa.',
  },
  {
    titulo: 'Eu configuro na instalação',
    texto: 'Conheço o dia a dia de vocês e deixo o sistema com a sua marca no PDF, os seus serviços, kits e usuários. O treinamento da equipe é no balcão.',
  },
  {
    titulo: 'O que não existe, a gente constrói',
    texto: 'Se a oficina precisa de algo que o sistema ainda não faz, vira uma funcionalidade construída para vocês, orçada à parte.',
  },
]

export function DoSeuJeito() {
  return (
    <section className="border-y border-linha bg-papel-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="rotulo text-grafite">Personalizado</p>
        <h2 className="titulo mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)]">Do jeito que a sua oficina trabalha.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {JEITO.map((j) => (
            <div key={j.titulo} className="border-t-2 border-tinta pt-5">
              <h3 className="text-xl font-bold">{j.titulo}</h3>
              <p className="mt-3 leading-relaxed text-grafite">{j.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparação honesta: fala do que é comum no mercado, sem citar concorrente.
const COMPARA = [
  ['Origem', 'Feito para qualquer negócio e adaptado para oficina', 'Nasceu dentro de uma oficina e é usado nela todo dia'],
  ['Instalação', 'Cadastro online e vídeo tutorial', 'Presencial: eu configuro e treino a equipe no balcão'],
  ['IA', 'Um chat na propaganda', 'Trabalha por trás de cada OS: aponta o que vale oferecer, escreve ao cliente no tom da oficina, lê as respostas e organiza o histórico. Quem decide é a equipe'],
  ['Cliente', 'Recebe um PDF', 'Acompanha a OS pelo celular e recebe o lembrete da revisão'],
  ['Evolução', 'Atualização igual para todo mundo; pedido vira chamado', 'O que a sua oficina precisa entra no sistema e liga só para vocês'],
]

export function Diferente() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="rotulo text-grafite">O diferencial</p>
      <h2 className="titulo mt-4 text-[clamp(1.9rem,4.2vw,3rem)]">
        <span className="block md:whitespace-nowrap">Muito sistema promete.</span>
        <span className="block text-azul md:whitespace-nowrap">Tudo o que você viu aqui já funciona.</span>
      </h2>
      <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-grafite">Roda hoje, todo dia, numa oficina de verdade.</p>
      <div className="mt-12 overflow-hidden rounded-2xl border border-linha bg-white" role="table" aria-label="Sistema comum comparado ao HOB Oficina">
        <div className="hidden grid-cols-[140px_1fr_1fr] border-b border-linha bg-papel-2 md:grid" role="row">
          <span className="rotulo p-4 text-grafite" role="columnheader" />
          <span className="rotulo p-4 text-grafite" role="columnheader">O que é comum</span>
          <span className="rotulo p-4 text-azul" role="columnheader">HOB Oficina</span>
        </div>
        {COMPARA.map(([tema, comum, hob]) => (
          <div key={tema} className="grid gap-1 border-b border-linha p-4 last:border-0 md:grid-cols-[140px_1fr_1fr] md:gap-0 md:p-0" role="row">
            <span className="rotulo text-grafite md:p-4" role="rowheader">{tema}</span>
            <span className="text-grafite md:p-4" role="cell"><span className="md:hidden">Comum: </span>{comum}</span>
            <span className="font-semibold md:p-4" role="cell"><span className="text-azul md:hidden">HOB Oficina: </span>{hob}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Preco() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
      <div className="rounded-3xl bg-white p-8 ring-1 ring-linha md:p-12">
        <p className="rotulo text-grafite">Investimento</p>
        <p className="titulo mt-4 text-[clamp(2rem,5.5vw,3.75rem)]">
          De R$ {MENSALIDADE.de} a R$ {MENSALIDADE.ate} <span className="text-grafite">por mês</span>
        </p>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-grafite">
          O valor depende do que a sua oficina liga. A instalação é presencial, com treinamento da equipe, e fecha na conversa
          {MOSTRAR_SITE && ', assim como o site da oficina'}.
          Sem fidelidade. Os dados do sistema antigo vêm junto quando dá para exportar.
        </p>
        <ul className="mt-8 grid gap-3 border-t border-linha pt-6 text-sm leading-relaxed text-grafite md:grid-cols-3">
          {GARANTIAS.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </section>
  )
}
