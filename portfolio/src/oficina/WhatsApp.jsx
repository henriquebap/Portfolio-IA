import { motion } from 'framer-motion'

// Pacote WhatsApp dedicado. Só o que roda na Wil Mec (PRs #57, #63, #70/#72 do
// Wilmec-system e oficina/01). Aviso automático de OS pronta fica de fora até
// entrar na lista do que se promete (HOB-Tech/docs/00, "Não dizer").
const AUTOMACOES = [
  ['Cobrança de quem ficou devendo', 'Lembretes no dia, em 7 e em 30 dias. No último, quem recebe o aviso é o dono.'],
  ['Pós-venda', 'Pesquisa de satisfação depois da entrega e lembrete da próxima revisão, calculado pelo uso de cada carro.'],
  ['Proposta de serviço adicional', 'A mensagem sai no tom da oficina e a resposta do cliente volta para a OS.'],
  ['Fora do horário', 'O cliente recebe resposta com os dados da oficina, em vez de uma mensagem de ausência genérica.'],
  ['Estoque pela equipe', 'O funcionário pergunta, dá baixa ou cadastra peça por texto, áudio ou foto.'],
]

const CONVERSA = [
  ['oficina', 'Oi, Carla! Aqui é da oficina. De 1 a 10, quanto você indicaria a gente?'],
  ['cliente', '10'],
  ['oficina', 'Obrigado! Pelo uso do seu Onix, a revisão dos 60 mil deve chegar perto de 15/11. Quer que eu reserve um horário?'],
  ['cliente', 'Pode ser no sábado de manhã'],
]

export default function WhatsApp() {
  return (
    <section className="bg-noite text-papel">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:py-28">
        <div>
          <p className="rotulo text-azul-claro">Pacote WhatsApp dedicado</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">O WhatsApp da oficina trabalhando por você.</h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-papel/80">
            Fluxo completo e automações diretas com agentes de IA dentro do WhatsApp, num número só da oficina. Cada
            automação liga separada, quando você quiser.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {AUTOMACOES.map(([titulo, texto]) => (
              <li key={titulo} className="border-l-2 border-azul-claro/60 pl-4">
                <p className="font-semibold">{titulo}</p>
                <p className="mt-1 leading-relaxed text-papel/70">{texto}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="self-center rounded-3xl bg-[#e9e3d8] p-4 text-[14px] text-tinta shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]" aria-label="Exemplo de conversa de pós-venda">
          <p className="rotulo mb-3 text-center text-grafite">WhatsApp da oficina · exemplo</p>
          <div className="grid gap-2">
            {CONVERSA.map(([quem, texto], i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.5 }}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2 leading-snug shadow-sm ${quem === 'oficina' ? 'justify-self-start rounded-tl-sm bg-white' : 'justify-self-end rounded-tr-sm bg-[#d9fdd3]'}`}
              >
                {texto}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
