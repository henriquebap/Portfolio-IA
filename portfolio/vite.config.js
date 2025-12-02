import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
