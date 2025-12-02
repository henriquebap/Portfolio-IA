# 🚀 Deploy no Railway

## Passos para Deploy

### 1. Conectar com Railway

1. Acesse [Railway.app](https://railway.app/)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Selecione **"Deploy from GitHub repo"**
5. Escolha o repositório: `henriquebap/Portfolio-IA`
6. Railway irá detectar automaticamente a configuração

### 2. Configurar o Root Directory

1. No Railway, vá em **Settings**
2. Em **"Root Directory"**, defina: `portfolio`
3. Salve as mudanças

### 3. Configurar Variáveis de Ambiente (se necessário)

No Railway, em **Variables**, adicione:
- `NODE_ENV=production`

### 4. Deploy Automático

O Railway irá:
- Instalar dependências (`npm install`)
- Fazer build do projeto (`npm run build`)
- Iniciar o servidor (`npm run start`)

### 5. Configurar Domínio Personalizado

1. No Railway, vá em **Settings** → **Domains**
2. Clique em **"Custom Domain"**
3. Adicione: `henriquebap.com` e `www.henriquebap.com`
4. Configure os registros DNS no seu provedor de domínio:

   ```
   Tipo: CNAME
   Nome: @
   Valor: [seu-dominio].up.railway.app
   
   Tipo: CNAME
   Nome: www
   Valor: [seu-dominio].up.railway.app
   ```

### 6. SSL/HTTPS

O Railway configura SSL automaticamente via Let's Encrypt.

---

## 📦 Estrutura do Projeto

```
portfolio/
├── src/              # Código fonte
├── public/           # Arquivos estáticos
├── dist/             # Build (gerado)
├── package.json      # Dependências
├── vite.config.js    # Config do Vite
├── railway.toml      # Config do Railway
└── DEPLOY.md         # Este arquivo
```

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Rodar em produção
npm run start
```

---

## 📊 Monitoramento

No Railway Dashboard você pode:
- Ver logs em tempo real
- Monitorar uso de recursos
- Ver métricas de deploy
- Configurar alertas

---

## 🐛 Troubleshooting

### Build falha
- Verifique se o **Root Directory** está configurado como `portfolio`
- Confirme que `NODE_ENV=production` está nas variáveis

### Site não carrega
- Verifique os logs no Railway
- Confirme que a porta está configurada corretamente (`$PORT`)

### Domínio não funciona
- Aguarde propagação DNS (pode levar até 48h)
- Verifique os registros CNAME no seu provedor

---

## 🎉 Pronto!

Seu portfolio estará disponível em:
- **Railway URL**: `https://[seu-projeto].up.railway.app`
- **Domínio personalizado**: `https://henriquebap.com`

---

**Repositório GitHub**: https://github.com/henriquebap/Portfolio-IA

