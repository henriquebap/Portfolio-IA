import { motion } from 'framer-motion'
import HobSymbol from '../shared/HobSymbol'
import { MENSAGEM_OFICINA, whatsapp } from '../shared/contato'
import PhoneFrame from './PhoneFrame'
import TelaNovaOS from './telas/TelaNovaOS'

const entra = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
}

export default function Hero() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/" className="flex items-center gap-2.5 text-tinta" aria-label="Início">
          <HobSymbol className="size-8 text-azul" />
          <span className="titulo text-[1.05rem]">HOB Oficina</span>
        </a>
        <a href="#conversa" className="rotulo rounded-full px-4 py-2.5 text-tinta ring-1 ring-tinta/25 transition-colors hover:bg-tinta hover:text-papel">
          Conversar
        </a>
      </header>

      <section className="mx-auto grid min-h-[calc(100svh-84px)] max-w-6xl items-center gap-12 px-5 pb-16 pt-4 md:grid-cols-[minmax(0,1.15fr)_auto] md:gap-16">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={entra} className="rotulo text-grafite">Sistema de gestão para oficinas mecânicas</motion.p>
          <motion.h1 variants={entra} className="titulo mt-5 text-[clamp(2.6rem,7vw,5.6rem)]">
            O sistema que nasceu dentro de uma <span className="text-azul">oficina.</span>
          </motion.h1>
          <motion.p variants={entra} className="mt-7 max-w-[50ch] text-lg leading-relaxed text-grafite">
            Foi feito sob medida para a Wil Mec, oficina de câmbio automático em São Miguel Paulista, que usa o sistema todo
            dia. Role a página e veja funcionando.
          </motion.p>
          <motion.div variants={entra} className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp(MENSAGEM_OFICINA)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-azul px-6 font-semibold text-white transition-colors hover:bg-tinta"
            >
              Conversar 20 minutos
            </a>
            <a href="#pilares" className="inline-flex min-h-12 items-center rounded-full px-6 font-semibold text-tinta ring-1 ring-tinta/25 transition-colors hover:ring-tinta">
              Ver funcionando ↓
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="mx-auto"
        >
          <PhoneFrame className="h-[min(620px,78svh)]">
            <TelaNovaOS aberta atraso={2.3} />
          </PhoneFrame>
        </motion.div>
      </section>
    </>
  )
}
