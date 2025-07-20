import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // 👈 binds to 0.0.0.0
    port: 5173,      // optional, just to be sure
    strictPort: true // avoid port auto-switching
  }
})
