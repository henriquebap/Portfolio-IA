import { motion } from 'framer-motion'
import { Check } from './telas/icones'
import { MOSTRAR_NOTA_FISCAL, NOTA_FISCAL_NO_AR } from './oferta'

// Pacote nota fiscal, como o PR #82 do Wilmec-system faz: a nota se monta sozinha
// quando a OS é paga ou entregue, e o dono confere e emite com um clique. Não
// dizer "emite sozinha": a emissão automática foi retirada de propósito.
const PONTOS = [
  ['Serviço e peças, cada um na nota certa', 'O serviço vai para a nota da prefeitura e as peças para a nota de produto, sem digitar nada.'],
  ['Códigos das peças pelas suas compras', 'O código fiscal de cada peça vem das notas de compra da própria oficina. Nada de procurar NCM.'],
  ['Só o dono emite e cancela', 'A equipe trabalha na OS; a nota fica com quem responde por ela.'],
  ['O cliente recebe o PDF', 'Emitida a nota, o PDF vai por e-mail para o cliente.'],
]

const LINHAS = [
  ['Nota de serviço', 'Troca do fluido e mão de obra', 'R$ 440,00'],
  ['Nota de peças', 'Pastilhas e filtro de óleo', 'R$ 138,00'],
]

export default function NotaFiscal() {
  if (!MOSTRAR_NOTA_FISCAL) return null
  return (
    <section className="border-b border-linha bg-papel-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:py-28">
        <div>
          {!NOTA_FISCAL_NO_AR && (
            <p className="mb-6 inline-block rounded-md bg-amber-500/15 px-3 py-1.5 text-sm font-semibold text-amber-800">
              Só no localhost: some do site publicado até a primeira nota real (oferta.js).
            </p>
          )}
          <p className="rotulo text-azul">Pacote nota fiscal</p>
          <h2 className="titulo mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">A nota se monta sozinha. Você só confere.</h2>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-grafite">
            Quando a OS é paga ou entregue, o que vier primeiro, a nota já está pronta. Você confere a prévia e emite com um
            clique.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {PONTOS.map(([titulo, texto]) => (
              <li key={titulo} className="border-l-2 border-azul/50 pl-4">
                <p className="font-semibold">{titulo}</p>
                <p className="mt-1 leading-relaxed text-grafite">{texto}</p>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial="antes"
          whileInView="depois"
          viewport={{ once: true, margin: '-80px' }}
          className="self-center rounded-3xl bg-white p-6 text-[15px] ring-1 ring-linha shadow-[0_30px_60px_-35px_rgba(17,25,33,0.45)]"
          aria-label="Exemplo de prévia de nota fiscal"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold">Prévia da nota · OS 5712</p>
            <span className="rotulo rounded-full bg-emerald-500/12 px-2.5 py-1 text-emerald-700">OS paga</span>
          </div>
          <div className="mt-5 grid gap-3">
            {LINHAS.map(([doc, desc, valor], i) => (
              <motion.div
                key={doc}
                variants={{ antes: { opacity: 0, y: 8 }, depois: { opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.25 } } }}
                className="flex items-center justify-between gap-3 rounded-xl border border-linha p-3.5"
              >
                <span>
                  <span className="rotulo block text-grafite">{doc}</span>
                  <span className="mt-1 block">{desc}</span>
                </span>
                <span className="whitespace-nowrap font-mono">{valor}</span>
              </motion.div>
            ))}
          </div>
          <div className="relative mt-5 h-12">
            <motion.span
              variants={{ antes: { opacity: 1 }, depois: { opacity: 0, transition: { delay: 1.8 } } }}
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-azul font-semibold text-white"
            >
              Conferi, emitir
            </motion.span>
            <motion.span
              variants={{ antes: { opacity: 0, scale: 0.96 }, depois: { opacity: 1, scale: 1, transition: { delay: 2 } } }}
              className="absolute inset-0 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/12 font-semibold text-emerald-700"
            >
              <Check /> Notas autorizadas · PDF enviado
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
