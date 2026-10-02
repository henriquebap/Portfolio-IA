// Contato comercial da HOB Tech: o mesmo número da prospecção. Nunca o e-mail pessoal.
export const EMAIL = 'henrique.obap@gmail.com'
export const WHATSAPP_EXIBICAO = '(11) 94282-1734'
const WHATSAPP_NUMERO = '5511942821734'

export const whatsapp = (texto) => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`

export const MENSAGEM_OFICINA = 'Oi, Henrique! Vi o HOB Oficina e quero conversar 20 minutos.'

// O prazo "30" vem de src/demo/teste.js (TESTE_DIAS); teste.test.js confere que os dois batem.
// Termina em "é " de propósito: a oficina completa com o nome dela antes de enviar.
export const MENSAGEM_DEMO = 'Oi, Henrique! Quero testar o HOB Oficina por 30 dias na minha oficina. O nome dela é '

// Onde o /oficina/planos grava cada passo da montagem (painel da prospecção,
// hob-oficina/scripts/prospeccao/admin.py, rota /publico/montagem). Só o build de
// produção envia; o painel recusa origem que não seja henriquebap.com.
export const MONTAGEM_URL = 'https://prospeccao-production-abb9.up.railway.app/publico/montagem'
