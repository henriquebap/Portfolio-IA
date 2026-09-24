import { Carimbo, CabecalhoOS, Cartao, Linha, Pilula, Tela } from './ui'

// Escondida (roteiro.js: publicado false) até a primeira nota real sair na Wil Mec.
export default function TelaNota() {
  return (
    <Tela>
      <CabecalhoOS status="Paga" tom="verde" />
      <Cartao className="grid gap-1.5">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Nota fiscal</p>
          <Pilula tom="azul">prévia pronta</Pilula>
        </div>
        <Linha rotulo="Serviço" valor="R$ 440,00" />
        <Linha rotulo="Peças" valor="R$ 138,00" />
        <span className="mt-1 rounded-lg bg-azul py-2 text-center font-semibold text-white">Conferi, emitir</span>
      </Cartao>
      <div className="relative h-16"><Carimbo className="absolute right-4 top-2 text-[17px]">Nota emitida</Carimbo></div>
    </Tela>
  )
}
