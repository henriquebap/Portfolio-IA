import ContatoFlutuante from '../shared/ContatoFlutuante'
import { MENSAGEM_OFICINA } from '../shared/contato'
import Cenas from './Cenas'
import Demo from './Demo'
import Hero from './Hero'
import Pacotes from './Pacotes'
import { PorQue, Recursos } from './Produto'
import { Oferta, Rodape, WilMec } from './Secoes'

// O "apoio visual pós-mensagem" (HOB-Tech/docs/04): a oficina já leu a história
// e o perfil na mensagem; aqui ela vê funcionando e chama no WhatsApp. Copy de
// HOB-Tech/docs/00. Claro e escuro alternados; azul só na prova.
export default function Oficina() {
  return (
    <>
      <Hero />
      <main>
        <Cenas />
        <Demo />
        <WilMec />
        <Pacotes />
        <Recursos />
        <PorQue />
        <Oferta />
      </main>
      <Rodape />
      <ContatoFlutuante mensagem={MENSAGEM_OFICINA} />
    </>
  )
}
