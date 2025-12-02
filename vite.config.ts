import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/ed221562-53c1-48e7-8013-a85d414417bf/preview',
  plugins: [react()],
  server: {
    port: 5215,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5215,
    },
  },
})
