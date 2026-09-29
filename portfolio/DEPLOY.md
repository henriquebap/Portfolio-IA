# Deploy: henriquebap.com

Merge na `main` publica sozinho. Não há passo manual.

- **Railway:** projeto `Portifolio-AI`, serviço `Portfolio-IA`, ambiente `production`.
- **Build:** Railpack a partir da **raiz do repositório** (não de `portfolio/`), Node 22. O `package.json` da raiz só repassa: o script `install` roda `cd portfolio && npm install`, depois vêm `npm run build` e `npm run start` (`vite preview --host 0.0.0.0 --port $PORT`). Não há `railway.toml` nem `nixpacks.toml`; o Railpack detecta tudo pelo `package.json`.
- **Domínio:** `henriquebap.com`, só o apex (`www` não tem DNS). O `vite preview` só responde aos hosts de `preview.allowedHosts` em `vite.config.js`: domínio novo entra lá também.
- **Rotas:** cada página é uma entrada HTML do Vite (`PAGINAS` em `vite.config.js`). O middleware `mpa-sem-barra` faz `/oficina` (sem barra) servir `/oficina/index.html` no dev e no preview de produção.

## Acompanhar um deploy

```bash
# uma vez por worktree
railway link --project Portifolio-AI --environment production --service Portfolio-IA
# até SUCCESS ou FAILED
railway deployment list
# se falhar
railway logs --build <id>
```

Depois, abrir `https://henriquebap.com/<rota>` e conferir.

Domínios e ambientes da HOB (o que fica ou não sob `henriquebap.com`): `HOB-Tech/docs/10-dominios-e-deploys.md`.
