import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Certifique-se de que só esta importação está presente

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Resolvendo o caminho da pasta src
    },
  },
})
