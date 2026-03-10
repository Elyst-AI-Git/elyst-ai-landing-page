import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  server: {
    host: '::',
    port: 5173,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api/beehiiv': {
        target: 'https://api.beehiiv.com/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/beehiiv/, ''),
        secure: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})