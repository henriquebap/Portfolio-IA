import { CabecalhoOS, Cartao, Linha, Pilula, Tela } from './ui'

// Escondida enquanto NOTA_FISCAL_NO_AR (oferta.js) estiver desligada.
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
    </Tela>
  )
}
