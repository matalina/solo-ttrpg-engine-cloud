import { defineConfig } from 'vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js';
import path from 'path';
//import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    vitePreprocess(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    //   },
    //   manifest: {
    //     name: 'Solo TTRPG Engine',
    //     short_name: 'Solo Engine',
    //     description: 'Solo TTRPG Engine',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ],
    //   }
    // }),
  ]
})
