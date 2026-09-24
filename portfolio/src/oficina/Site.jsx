import { motion } from 'framer-motion'
import { Check } from './telas/icones'
import { MOSTRAR_SITE } from './oferta'

// Pacote site da oficina: só o que o molde do site da Wil Mec já faz
// (HOB-Tech/oficina/01, "Site institucional"). Não prometer anúncio no Google (o
// site ainda não mede conversão) nem agendamento online (não existe).
const PONTOS = [
  ['Com a cara da oficina', 'Marca, fotos reais e os serviços que vocês fazem, com uma página só para a especialidade da casa.'],
  ['Aparece nas buscas da região', 'Preparado para o Google entender onde a oficina fica e o que ela faz.'],
  ['WhatsApp e mapa', 'Botão de WhatsApp sempre à mão e o mapa para o cliente chegar.'],
  ['Avaliação no Google', 'Botão para o cliente avaliar a oficina direto do site.'],
  ['Orçamento direto no sistema', 'O pedido do formulário cai no sistema como contato novo, para a equipe responder.'],
]

const SITE_DE_EXEMPLO = 'https://wil-mec.com'

const surge = (atraso) => ({
  antes: { opacity: 0, y: 8 },
  depois: { opacity: 1, y: 0, transition: { delay: atraso } },
})

export default function Site() {
  if (!MOSTRAR_SITE) return null
  return (
    <section className="border-b border-linha">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:py-28">
        <div>
          <p className="rotulo text-azul">Pacote site da oficina</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">Quem procura oficina na sua região encontra a sua.</h2>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-grafite">
            Um site da oficina ligado ao sistema: quem chega pelo Google pede orçamento e já vira contato para a equipe. O valor
            fecha na conversa, como a instalação.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {PONTOS.map(([titulo, texto]) => (
              <li key={titulo} className="border-l-2 border-azul/50 pl-4">
                <p className="font-semibold">{titulo}</p>
                <p className="mt-1 leading-relaxed text-grafite">{texto}</p>
              </li>
            ))}
          </ul>
          <a
            href={SITE_DE_EXEMPLO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full px-6 font-semibold text-tinta ring-1 ring-tinta/25 transition-colors hover:ring-tinta"
          >
            Ver um site no ar <span className="font-mono text-sm font-normal text-grafite">wil-mec.com ↗</span>
          </a>
        </div>

        <motion.div
          initial="antes"
          whileInView="depois"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-3 self-center text-[14px]"
          aria-label="Exemplo: da busca no Google ao contato no sistema"
        >
          <motion.div variants={surge(0.1)} className="rounded-2xl bg-white p-4 ring-1 ring-linha">
            <p className="rounded-full bg-slate-100 px-3.5 py-2 text-slate-600">oficina de câmbio automático perto de mim</p>
            <div className="mt-3 border-l-2 border-azul pl-3">
              <p className="font-semibold text-azul">Sua Oficina · Mecânica e câmbio automático</p>
              <p className="text-slate-500">4,8 ★ · Aberto agora · 1,2 km</p>
            </div>
          </motion.div>

          <motion.div variants={surge(0.5)} className="overflow-hidden rounded-2xl bg-white ring-1 ring-linha shadow-[0_30px_60px_-35px_rgba(17,25,33,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-linha bg-papel-2 px-3 py-2">
              <span className="size-2 rounded-full bg-slate-300" />
              <span className="size-2 rounded-full bg-slate-300" />
              <span className="ml-2 font-mono text-[11px] text-slate-500">suaoficina.com.br</span>
            </div>
            <div className="bg-tinta px-4 py-5 text-papel">
              <p className="titulo text-[1.2rem]">Câmbio automático sem mistério.</p>
              <p className="mt-1 text-papel/70">Diagnóstico com fotos e orçamento item a item.</p>
            </div>
            <div className="grid gap-2 p-4">
              <div className="grid grid-cols-3 gap-2">
                <span className="rounded-lg bg-slate-100 px-2 py-1.5 text-slate-500">Nome</span>
                <span className="rounded-lg bg-slate-100 px-2 py-1.5 text-slate-500">Telefone</span>
                <span className="rounded-lg bg-azul px-2 py-1.5 text-center font-semibold text-white">Pedir orçamento</span>
              </div>
              <div className="flex gap-2 text-[12px]">
                <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 font-semibold text-emerald-700">WhatsApp</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">Como chegar</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">Avaliar no Google</span>
              </div>
            </div>
          </motion.div>

          <motion.p variants={surge(1.3)} className="flex items-center gap-2 rounded-2xl bg-emerald-500/12 px-4 py-3 font-semibold text-emerald-800">
            <Check /> No sistema: contato novo, Rafael pediu orçamento de câmbio
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
