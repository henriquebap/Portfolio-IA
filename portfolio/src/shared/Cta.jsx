import { EMAIL, WHATSAPP_EXIBICAO, whatsapp } from './contato'

// Fechamento das páginas da HOB: a menor ação possível é uma conversa de 20 min.
export default function Cta({ titulo, texto, mensagem }) {
  return (
    <section id="conversa" className="bg-noite text-papel">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <p className="rotulo text-azul-claro">Conversa de 20 minutos, por vídeo</p>
        <h2 className="titulo mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.75rem)]">{titulo}</h2>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-papel/80">{texto}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsapp(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-azul-claro px-6 font-semibold text-noite transition-colors hover:bg-white"
          >
            Chamar no WhatsApp <span className="font-mono text-sm">{WHATSAPP_EXIBICAO}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-12 items-center rounded-full px-6 font-semibold text-papel ring-1 ring-papel/30 transition-colors hover:ring-papel"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}
