import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/',  // <-- Add this line
  plugins: [react()],
  server: {
    port: 3275,
    open: true
  }
})
