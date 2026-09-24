import Cta from '../shared/Cta'
import { MENSAGEM_OFICINA } from '../shared/contato'
import Cenas from './Cenas'
import Demo from './Demo'
import Hero from './Hero'
import { DoSeuJeito, Diferente, Preco, Recursos } from './Produto'
import { Oferta, ParaQuem, Rodape, WilMec } from './Secoes'

// O "apoio visual pós-mensagem" (HOB-Tech/docs/04): a oficina já leu a história
// e o perfil na mensagem; aqui ela vê funcionando. Copy de HOB-Tech/docs/00.
export default function Oficina() {
  return (
    <>
      <Hero />
      <main>
        <Cenas />
        <Demo />
        <WilMec />
        <Recursos />
        <DoSeuJeito />
        <Diferente />
        <ParaQuem />
        <Oferta />
        <Preco />
        <Cta
          titulo="Quer ver na realidade da sua oficina?"
          texto="Em 20 minutos por vídeo eu mostro o sistema funcionando e entendo como vocês trabalham. Se fizer sentido para os dois, a visita vem depois."
          mensagem={MENSAGEM_OFICINA}
        />
      </main>
      <Rodape />
    </>
  )
}
