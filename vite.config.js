import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      optipng: {
        optimizationLevel: 7
      },
      pngquant: {
        quality: [0.65, 0.8]
      },
      mozjpeg: {
        quality: 80
      },
    })
  ],
})
