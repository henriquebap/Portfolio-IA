// Teste de 30 dias do HOB Oficina (decisões de 29/09/2026; HOB-Tech/docs/10, nota de 29/09).
// Prazo, endereço e toda a copy da página ficam aqui, como oferta.js faz com a oferta:
// o JSX só desenha, e teste.test.js confere que nenhum prazo escrito à mão destoa.
// Preço não aparece nesta página: só em oferta.js, e só em /oficina e /oficina/planos.
// Só o que existe hoje (HOB-Tech/oficina/01, coluna "Existe"). O que é simulado diz que é.

export const TESTE_DIAS = 30
// Depois do teste sem contrato: o acesso fecha e os dados ficam guardados mais este tanto.
export const GUARDA_DIAS = 30

// Endereço do TESTE, na plataforma própria. Não é promessa de endereço para a oficina
// que contratar: o domínio dela é outra decisão (oferta.js, DOMINIO; HOB-Tech/docs/10).
export const ENDERECO_TESTE = '<nome-da-oficina>.henriquebap.com'

// O mesmo texto do selo que o app mostra nas telas simuladas (hob-oficina, SimulacaoBadge).
export const SELO = 'Simulação: na demo nada é enviado'

export const ABERTURA = {
  rotulo: `Teste de ${TESTE_DIAS} dias · sem custo`,
  titulo: ['Teste o HOB Oficina por ', `${TESTE_DIAS} dias`, ', com a sua oficina, os seus clientes e a sua marca.'],
  texto: 'Eu crio a sua oficina no sistema e você usa com os seus dados de verdade. Sem custo e sem compromisso.',
  botao: `Quero testar por ${TESTE_DIAS} dias`,
  ancora: 'Como funciona ↓',
  ficha: [
    ['Prazo', `${TESTE_DIAS} dias, sem custo`],
    ['Endereço', ENDERECO_TESTE, 'dado'],
    ['Acesso', 'login de dono, com todas as funções'],
    ['Seus dados', 'clientes, carros, logo e cores, só da sua oficina'],
  ],
  // Não é "ninguém mais vê": quem cuida da plataforma (o Henrique) consegue entrar.
  privacidade: 'Nenhuma outra oficina vê o que você cadastra, apaga ou personaliza. Só eu, que cuido da plataforma, entro para dar suporte.',
}

export const PASSOS = {
  rotulo: 'Como funciona',
  itens: [
    { t: 'Você me manda uma mensagem', d: 'Pelo WhatsApp, com o nome da sua oficina.' },
    { t: 'Eu crio a sua oficina', d: 'Em seguida mando o link e o login de dono.' },
    { t: `Você usa por ${TESTE_DIAS} dias`, d: 'Com os seus clientes, os seus carros e a sua marca. Se quiser, a equipe também entra.' },
  ],
}

export const FAZER = {
  rotulo: 'O que você vai poder fazer',
  titulo: 'Você entra como dono, com todas as funções.',
  itens: [
    { t: 'OS e orçamento', d: 'Cliente, carro e OS numa tela. O orçamento é aprovado item a item.' },
    { t: 'Vistoria com fotos', d: 'O carro em 8 áreas e 57 itens, com gravidade e foto.' },
    { t: 'PDF com a sua logo', d: 'A OS e o orçamento saem com a logo e as cores da oficina.' },
    { t: 'Agenda', d: 'O horário marcado vira OS.' },
    { t: 'Estoque', d: 'Peças com foto e lugar certo, e aviso quando o estoque baixa.' },
    { t: 'Financeiro', d: 'Recebimentos e contas a pagar. Quem levou o carro sem pagar fica na tela até pagar.' },
    { t: 'Cadastro pelo QR', d: 'O cliente preenche os dados no celular antes de chegar.' },
  ],
  whatsapp: {
    t: 'O WhatsApp é o da sua oficina',
    d: 'Você conecta lendo um QR Code dentro do app, com o número da oficina, não o seu pessoal. Os avisos automáticos ao cliente começam desligados: você liga um a um o que quiser, e o que ligar sai de verdade desse número.',
  },
}

export const SIMULACAO = {
  rotulo: 'Serviços pagos',
  titulo: 'Três coisas aparecem só como simulação.',
  texto: 'Assim você vê o que o sistema captura, sem que nada saia de verdade. As telas avisam com este selo:',
  itens: [
    { t: 'Nota fiscal', d: 'Monta a nota como a de verdade, com o serviço e as peças cada um no seu lugar. Nada vai à prefeitura nem à SEFAZ.' },
    { t: 'Consulta de placa', d: 'Você digita a placa e aparece um carro de exemplo, para ver onde ela entra no cadastro.' },
    { t: 'Avaliação no Google', d: 'O QR de avaliação abre uma página de exemplo, e nenhuma avaliação vai ao Google.' },
  ],
}

export const DEPOIS = {
  rotulo: `Depois dos ${TESTE_DIAS} dias`,
  titulo: 'Você decide o que vem depois.',
  caminhos: [
    { t: 'Sem contrato', d: `O acesso é encerrado e os seus dados ficam guardados por mais ${GUARDA_DIAS} dias. Se você fechar nesse prazo, continua de onde parou.` },
    { t: 'Com contrato', d: 'A sua oficina segue como está, com os mesmos dados. Você não refaz nada.' },
  ],
  planos: 'Ver os planos e quanto fica por mês →',
}

export const FECHAMENTO = {
  rotulo: `Teste de ${TESTE_DIAS} dias, sem custo`,
  titulo: 'Quer testar a sua oficina?',
  texto: 'Me manda uma mensagem com o nome dela. Eu crio o acesso e mando o link e o login de dono.',
}
