import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react')) return 'vendor';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('lucide-react')) return 'lucide';
            if (id.includes('swiper')) return 'swiper';
            if (id.includes('leaflet')) return 'leaflet';
            return 'vendor-other';
          }
        }
      }
    }
  }
})
