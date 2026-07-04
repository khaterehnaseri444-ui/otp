import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),    
    tailwindcss(),  
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'robots.txt'],
      manifest: {
        name: 'نام برنامه شما',
        short_name: 'نام کوتاه',
        description: 'توضیحات برنامه',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/api\.your-domain\.com\/.*/i,
      //       handler: 'NetworkFirst',
      //       options: {
      //         cacheName: 'api-cache',
      //         expiration: {
      //           maxEntries: 50,
      //           maxAgeSeconds: 60 * 60 * 24
      //         }
      //       }
      //     }
      //   ]
      // }
    })
  ]
})