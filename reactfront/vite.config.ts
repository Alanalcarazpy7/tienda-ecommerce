import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*Server para conectarme a mi Celular y ver el Proyecto*/
  server: {
    host: '0.0.0.0',
  },
})
