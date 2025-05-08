import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ReactPortfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components' // Alias for your components directory
    }
  },
})
