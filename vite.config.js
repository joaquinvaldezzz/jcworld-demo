import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: { index: path.resolve(__dirname, 'index.html') },
    },
    emptyOutDir: true,
  },
})
