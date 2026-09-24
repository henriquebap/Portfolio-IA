import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import process from 'node:process'

// Uma entrada HTML por página: o robô de preview do WhatsApp não roda JS,
// então cada link precisa do próprio <title>/OG no HTML servido.
const PAGINAS = ['sobre', 'oficina', 'hobtech']

// ponytail: o sirv do dev/preview só resolve /x/ → /x/index.html; /x sem barra
// caía no fallback SPA e mostrava o hub. Reescreve antes do sirv.
const semBarra = (req, _res, next) => {
  const [p, qs] = req.url.split('?')
  if (PAGINAS.includes(p.slice(1))) req.url = `${p}/index.html${qs ? `?${qs}` : ''}`
  next()
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'mpa-sem-barra',
      configureServer: (s) => { s.middlewares.use(semBarra) },
      configurePreviewServer: (s) => { s.middlewares.use(semBarra) },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        ...Object.fromEntries(
          PAGINAS.map((p) => [p, path.resolve(import.meta.dirname, `${p}/index.html`)]),
        ),
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 5000,
    strictPort: false,
    allowedHosts: [
      'henriquebap.com',
      'www.henriquebap.com',
      '.railway.app',
      'localhost'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
