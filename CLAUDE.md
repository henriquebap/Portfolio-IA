# Portfolio-IA: henriquebap.com

Site pessoal do Henrique e porta de entrada comercial da HOB Tech. Vite multi-página em `portfolio/` (React 19, Tailwind 4, framer-motion). Merge na `main` publica no Railway (`portfolio/DEPLOY.md`).

| Rota | Entrada | Código | Idioma | Para quê |
|---|---|---|---|---|
| `/` | `portfolio/index.html` | HTML + `src/hub/hub.css`, sem JS | pt-BR | hub de 3 cartões, sem rolagem |
| `/sobre` | `sobre/index.html` | `src/main.jsx` → `App.jsx`, `components/`, dados em `data/projects.js` | inglês | portfólio, a versão longa do CV |
| `/oficina` | `oficina/index.html` | `src/oficina/` | pt-BR | landing do HOB Oficina, apoio visual depois da mensagem de prospecção |
| `/oficina/planos` | `oficina/planos/index.html` | `src/planos/` (`Planos.jsx`, `Telas.jsx`; as contas e a ordem dos passos em `montagem.js`) | pt-BR | follow-up da prospecção: a oficina monta o plano uma pergunta por vez e manda pelo WhatsApp |
| `/hobtech` | `hobtech/index.html` | `src/hobtech/` | pt-BR | projetos sob medida |

Comum às páginas: `src/shared/` (marca, CTA, botão flutuante "Conversar", `contato.js` com o WhatsApp e o e-mail comerciais).

## Fontes da verdade

O repositório irmão **HOB-Tech** (privado, `~/Pessoal/Personal - Projects/HOB-Tech`, já liberado em `.claude/settings.json`) manda no conteúdo comercial. **Este repositório é público:** aponte para lá, não copie para cá a lista "Não dizer", custos nem estratégia de venda.

| Assunto | Fonte |
|---|---|
| O que a página pode e não pode dizer: quem fala, perfil do cliente ideal, lista "Não dizer" | `HOB-Tech/docs/00-visao-e-posicionamento.md` |
| Preço, planos, fundadora, as 2 primeiras do mês | `HOB-Tech/docs/02-precificacao.md` e `docs/00` (Escassez) → `src/oficina/oferta.js` |
| O que existe no produto (só isso vira cena ou tela) | `HOB-Tech/oficina/01`, coluna "Existe" |
| Papel do `/oficina` na prospecção | `HOB-Tech/docs/04-vendas.md`, checklist de liberação, item 1 |
| Domínio e ambientes | `HOB-Tech/docs/10-dominios-e-deploys.md` e `portfolio/DEPLOY.md` |
| Fatos de carreira do `/sobre` | CV vigente e `context/` na raiz do checkout principal (não versionados) |

Mudou lá, muda aqui no mesmo PR. Se o doc e o código divergem, o doc vence.

## /oficina

- **`oferta.js` é a única fonte da oferta na página.** Nada de preço ou benefício escrito direto num componente.
  - `METADE_INSTALACAO`: metade da instalação e da criação do site. Desligar à mão quando as 2 primeiras oficinas do mês fecharem; religar quando o mês virar.
  - `FUNDADORA_ATE`: o bloco some sozinho no dia seguinte (`oferta.test.js`). Mudar a data só se `docs/00` mudar.
  - `NOTA_FISCAL_NO_AR`, `SITE_NO_AR`: com `false`, o bloco aparece só no `npm run dev`. Use o mesmo esquema para qualquer adicional que ainda não pode ir ao público.
  - `PLANOS`, `INSTALACAO`, `PARCELAS`, `TREINO_DEDICADO`, `USUARIO_EXTRA` e `ADICIONAIS` (preço, dor, itens) alimentam `/oficina` e `/oficina/planos`. Mudou em `HOB-Tech/docs/02`, muda ali e rode `npm test`.
- Cena nova: `roteiro.js` + tela em `src/oficina/telas/`. As telas são mockups HTML com dados fictícios, nunca print do app. Em `Pacotes.jsx` ficam só o ícone e a miniatura de cada adicional; o resto está em `ADICIONAIS`. Os itens do "ver tudo" estão em `areas.js`.
- Ordem das seções (`Oficina.jsx`): hero → 5 cenas → demo → prova Wil Mec (azul) → adicionais (`Pacotes.jsx`) → o que tem dentro → por que a HOB (✗/✓) → oferta `#conversa`. Claro e escuro alternados, azul só na prova. Dois tamanhos de título, `titulo-g` e `titulo-m` (`oficina.css`).

### Decisões das revisões do Henrique (23 e 24/09/2026)

- Preço no `/oficina`: só a faixa (`MENSALIDADE`) e só como último bloco, depois de funcionalidades, personalização e comparação. Mudou em 28/09: o `/oficina/planos` mostra cada mensalidade e, como teto, a instalação e a criação do site pelo valor de tabela. Nada escondido; desconto combinado na conversa só baixa. Hora de desenvolvimento e migração de dados continuam fora da página.
- Só o que existe hoje. Nada planejado, nada que não foi entregue.
- Wil Mec aparece como oficina de referência, onde o sistema roda todo dia. Sem data de quando começou ("desde agosto") e sem os outros papéis dela.
- IA nunca é adjetivo do produto e não se resume a "voz vira item": oportunidades, mensagens no tom da oficina, respostas lidas, histórico arrumado, Central de IA. Sem expor o como (modelo, fornecedor, nome interno).
- O que vende não fica em linha pequena no rodapé de seção, porque ninguém lê. Ganha bloco próprio.
- Adicionais (WhatsApp, nota, site) cabem numa tela. Cada um abre por uma dor que a oficina reconhece ("Ainda não tem site?"), tem ícone, benefício e um pedaço da tela do app, e botão "Quero…" próprio.
- Comparação como lista chamativa ✗/✓ contra "a maioria". "Não é para" em tom leve.
- Nota fiscal: "se monta sozinha", você confere e emite. Nunca "emite sozinha": a emissão automática foi retirada de propósito.
- Domínio: sistema e site ficam no domínio da oficina, no CNPJ dela, nunca num domínio da HOB ou do Henrique (`DOMINIO` em `oferta.js`, `HOB-Tech/docs/10`).
- A OS abre como no app: nada de carimbo "OS aberta".
- CTA: WhatsApp com mensagem pronta (`contato.js`); botão flutuante "Conversar" em `/oficina` e `/hobtech`. Contato comercial nunca é o e-mail pessoal.

## /oficina/planos

Follow-up da prospecção (`HOB-Tech/docs/04`). Passos, conta do total, fundadora, instalação, parcelas e o link do WhatsApp (abaixo de 2.000 caracteres) ficam em `src/planos/montagem.js`, com testes: mexeu na conta, rode `npm test`. Preço e benefício continuam só em `oferta.js`. Cada avanço vai por `sendBeacon` a `MONTAGEM_URL` (`shared/contato.js`, painel da prospecção). O envio roda em qualquer build (inclusive `npm run preview`) e só o `npm run dev` fica mudo, mas o painel recusa origem que não seja `henriquebap.com`: teste local não polui a prospecção.

## /sobre

Em inglês. Conta a capacidade, não a porcentagem: métrica só de resultado próprio e verificável, atribuição exata (o que ele fez × onde auxiliou), nada que não foi entregue. Na dúvida sobre um fato, perguntar em vez de completar.

O `README.md` da raiz é a vitrine do GitHub e resume o `/sobre` (`data/projects.js`), que é a versão revisada. Mudou um, confira o outro no mesmo PR. O CV em `public/cv-henrique-baptista.pdf` é gerado fora do repo; a cópia vigente fica em `~/Pessoal/CV/Latest/` e o link de LinkedIn do CV é `linkedin.com/in/henriqueobaptista/`, o mesmo do site (`data/projects.js`, hub, JSON-LD do `/sobre` e README).

## Comandos

Em `portfolio/`: `npm run dev` (5173) · `npm run build` · `npm run preview` (o build servido como em produção) · `npm test` (`node --test`) · `npm run lint`. No painel de preview: `portfolio-dev` e `portfolio-preview` (`.claude/launch.json`).

Página nova: nome em `PAGINAS` (`vite.config.js`), `<pagina>/index.html` com `<title>` e OG próprios (o robô de preview do WhatsApp não roda JS), `public/og/<pagina>.jpg` (1200×630) e uma linha em `public/sitemap.xml`.

## Antes de dizer que está pronto

1. `npm test && npm run lint && npm run build` em `portfolio/`.
2. Visual: com o preview no ar (`portfolio-preview`, porta 4173), `node scripts/fotos.mjs http://localhost:4173/<rota> <pasta>` tira as fotos de desktop e celular em Chrome headless e falha se a página joga erro no console. Olhar as fotos. O script só rola a página: no `/oficina/planos` isso mostra o primeiro passo, os demais pedem clique. O painel do navegador do app, escondido, pausa o framer-motion e mostra seções vazias: não conclua nada por ele.
3. Depois do merge: `railway deployment list` até `SUCCESS` e abrir `https://henriquebap.com/<rota>`.

## Git

- Merge na `main` vai para produção. Sempre PR, branch `feat/…` ou `fix/…`, commits em português (`feat(oficina): …`).
- Trabalhe num worktree criado a partir de `origin/main`. O `main` local do checkout principal está atrasado e tem edições antigas soltas: não faça commit por ele.
- A raiz do checkout principal guarda material de carreira não versionado (CVs, entrevistas, documentos pessoais). Como o repositório é público, faça `git add` por caminho, nunca `git add -A` ou `git add .` na raiz.
- Código no estilo Ponytail, como nos repositórios da HOB. Um comentário `ponytail:` marca uma simplificação feita de propósito.
- Copy em português com acentuação correta.
