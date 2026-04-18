import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'hero-preview.png'],
      manifest: {
        name: 'DataCamp AI/ML Tracker',
        short_name: 'AI Tracker',
        description: '6-month day-by-day AI/ML learning tracker for DataCamp Classroom',
        theme_color: '#05c3de',
        background_color: '#090d18',
        icons: [
          {
            src: 'hero-preview.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'hero-preview.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
