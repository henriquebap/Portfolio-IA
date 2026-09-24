import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EMAIL, WHATSAPP_EXIBICAO, whatsapp } from './contato'

// Aparece depois do hero e some quando o bloco final de contato (#conversa) entra
// na tela, para não repetir o mesmo convite duas vezes.
function deveMostrar() {
  const fim = document.getElementById('conversa')
  const chegouNoFim = fim && fim.getBoundingClientRect().top < window.innerHeight
  return window.scrollY > window.innerHeight * 0.6 && !chegouNoFim
}

export default function ContatoFlutuante({ mensagem }) {
  const [visivel, setVisivel] = useState(() => deveMostrar())
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => {
      const v = deveMostrar()
      setVisivel(v)
      if (!v) setAberto(false)
    }
    const aoTeclar = (e) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('keydown', aoTeclar)
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [])

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6"
        >
          <AnimatePresence>
            {aberto && (
              <motion.div
                id="contato-flutuante"
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="w-[min(320px,calc(100vw-2rem))] rounded-2xl bg-white p-5 text-tinta shadow-[0_24px_50px_-20px_rgba(17,25,33,0.55)] ring-1 ring-linha"
              >
                <p className="rotulo text-azul">Conversa de 20 minutos</p>
                <p className="mt-2 font-semibold leading-snug">Me chama por onde preferir.</p>
                <div className="mt-4 grid gap-2">
                  <a
                    href={whatsapp(mensagem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between rounded-xl bg-azul px-4 font-semibold text-white transition-colors hover:bg-tinta"
                  >
                    WhatsApp <span className="font-mono text-sm font-normal">{WHATSAPP_EXIBICAO}</span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex min-h-11 items-center justify-center truncate rounded-xl px-4 text-sm font-semibold ring-1 ring-linha transition-colors hover:ring-tinta"
                  >
                    {EMAIL}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            type="button"
            onClick={() => setAberto((a) => !a)}
            aria-expanded={aberto}
            aria-controls="contato-flutuante"
            className="flex min-h-12 items-center gap-2 rounded-full bg-tinta px-5 font-semibold text-papel shadow-[0_14px_30px_-12px_rgba(17,25,33,0.6)] transition-colors hover:bg-azul"
          >
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {aberto ? 'Fechar' : 'Conversar'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
