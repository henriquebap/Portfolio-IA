import { motion } from 'framer-motion'
import { whatsapp } from '../shared/contato'
import { MOSTRAR_NOTA_FISCAL, MOSTRAR_SITE } from './oferta'
import { Balao, Check, Globo, Recibo } from './telas/icones'

// Os adicionais numa tela só, cada um abrindo por uma dor que a oficina
// reconhece. Só o que roda na Wil Mec (Wilmec-system PRs #57, #63, #70/#72 e
// #82; HOB-Tech/oficina/01). Fora até existir: aviso automático de OS pronta,
// anúncio no Google, agendamento online. Nota: "se monta sozinha", nunca
// "emite sozinha" (a emissão automática foi retirada de propósito).
const PACOTES = [
  {
    id: 'site',
    publicado: MOSTRAR_SITE,
    icone: Globo,
    nome: 'Site da oficina',
    gancho: 'Ainda não tem site?',
    promessa: 'Quem procura oficina na sua região encontra a sua.',
    itens: ['Com a marca, as fotos e os serviços', 'WhatsApp e mapa a um toque', 'Pedido de orçamento cai direto no sistema'],
    botao: 'Quero o site',
  },
  {
    id: 'whatsapp',
    publicado: true,
    icone: Balao,
    nome: 'WhatsApp dedicado',
    gancho: 'Cliente sumiu depois da entrega?',
    promessa: 'Cuida do antes e do depois, com a IA escrevendo no tom de vocês.',
    itens: ['Pré-venda: proposta com a resposta na OS', 'Pós-venda: pesquisa depois da entrega', 'Preventiva: lembrete da próxima revisão'],
    botao: 'Quero o WhatsApp',
  },
  {
    id: 'nota',
    publicado: MOSTRAR_NOTA_FISCAL,
    icone: Recibo,
    nome: 'Nota fiscal',
    gancho: 'Ainda faz nota na mão?',
    promessa: 'Quando a OS é paga ou entregue, a nota se monta sozinha. Você confere e emite com um clique.',
    itens: ['Serviço e peças, cada um na nota certa', 'Código fiscal das peças pelas suas compras', 'PDF da nota por e-mail para o cliente'],
    botao: 'Quero a nota fiscal',
  },
]

const SITE_DE_EXEMPLO = 'https://wil-mec.com'

const surge = (atraso) => ({
  antes: { opacity: 0, y: 6 },
  depois: { opacity: 1, y: 0, transition: { delay: atraso } },
})

// Miniaturas do que cada adicional faz, com dados fictícios.
const VISUAL = {
  site: (
    <div className="grid gap-1.5 bg-white p-3 text-[12px] text-tinta">
      <motion.p variants={surge(0.1)} className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">oficina de câmbio perto de mim</motion.p>
      <motion.div variants={surge(0.4)} className="rounded-xl px-2.5 py-2 ring-1 ring-linha">
        <p className="font-semibold text-azul">Sua Oficina · Mecânica e câmbio</p>
        <p className="text-slate-500">4,8 ★ · Aberto agora · 1,2 km</p>
        <span className="mt-1 inline-block rounded-md bg-azul px-2 py-0.5 font-semibold text-white">Pedir orçamento</span>
      </motion.div>
    </div>
  ),
  whatsapp: (
    <div className="grid gap-1.5 bg-[#e9e3d8] p-3.5 text-[12px] text-tinta">
      <motion.p variants={surge(0.1)} className="max-w-[88%] justify-self-start rounded-xl rounded-tl-sm bg-white px-2.5 py-1.5 leading-snug shadow-sm">
        Oi, Carla! A revisão dos 60 mil do seu Onix chega perto de 15/11. Reservo um horário?
      </motion.p>
      <motion.p variants={surge(0.7)} className="justify-self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">
        Pode ser sábado de manhã ✓✓
      </motion.p>
    </div>
  ),
  nota: (
    <div className="grid gap-1 bg-white p-3 text-[12px] text-tinta">
      <div className="flex items-center justify-between">
        <p className="font-bold">Prévia da nota · OS 5712</p>
        <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 font-semibold text-emerald-700">OS paga</span>
      </div>
      <motion.p variants={surge(0.2)} className="flex justify-between border-b border-linha pb-1"><span>Serviço</span><span className="font-mono">R$ 440,00</span></motion.p>
      <motion.p variants={surge(0.4)} className="flex justify-between"><span>Peças</span><span className="font-mono">R$ 138,00</span></motion.p>
      <motion.span variants={surge(0.8)} className="rounded-lg bg-azul py-1 text-center font-semibold text-white">Conferi, emitir</motion.span>
    </div>
  ),
}

export default function Pacotes() {
  const pacotes = PACOTES.filter((p) => p.publicado)
  return (
    <section id="pacotes" className="bg-noite text-papel">
      <div className="mx-auto max-w-6xl px-5 py-9 md:py-10">
        <p className="rotulo text-azul-claro">Adicionais · cada um liga à parte</p>
        <h2 className="titulo titulo-g mt-3">O sistema também trabalha fora do <span className="text-azul-claro">balcão.</span></h2>
        <motion.div
          initial="antes"
          whileInView="depois"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-6 grid gap-2.5 md:grid-cols-3 md:gap-4"
        >
          {pacotes.map((p) => (
            <article
              key={p.id}
              className="flex overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-papel/15 transition hover:-translate-y-1 hover:ring-azul-claro/60 md:flex-col"
            >
              <div className="hidden h-[128px] md:grid [&>*]:content-center" aria-hidden="true">{VISUAL[p.id]}</div>
              <div className="flex flex-1 gap-3.5 p-4 md:flex-col md:gap-0 md:p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-azul-claro/15 text-azul-claro md:hidden">
                  <p.icone className="size-5" />
                </span>
                <div className="flex flex-1 flex-col">
                  <p className="rotulo flex items-center gap-2 text-azul-claro"><p.icone className="hidden size-4 md:block" />{p.nome}</p>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug md:mt-2 md:text-xl">{p.gancho}</h3>
                  <p className="mt-1 text-sm leading-snug text-papel/70 md:text-base">{p.promessa}</p>
                  <ul className="mt-3 hidden gap-1.5 text-[15px] text-papel/85 md:grid">
                    {p.itens.map((i) => (
                      <li key={i} className="flex gap-2 leading-snug"><Check className="mt-0.5 size-4 shrink-0 text-azul-claro" />{i}</li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 md:mt-auto md:pt-4">
                    <a
                      href={whatsapp(`Oi, Henrique! Vi o HOB Oficina e tenho interesse no adicional: ${p.nome}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-azul-claro transition-colors hover:text-white md:min-h-10 md:rounded-full md:px-4 md:ring-1 md:ring-azul-claro/60 md:hover:bg-azul-claro md:hover:text-noite"
                    >
                      {p.botao} →
                    </a>
                    {p.id === 'site' && (
                      <a href={SITE_DE_EXEMPLO} target="_blank" rel="noopener noreferrer" className="text-sm text-papel/60 underline-offset-4 hover:text-papel hover:underline">
                        ver um no ar ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
