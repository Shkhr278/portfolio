import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    tailwindcss(),
    react(),
    // Generate .gz and .br assets during build for servers that support pre-compressed files
    compression(), // Gzip
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/] }), // Brotli
  ],
  build: {
    target: 'esnext',
    minify: 'terser', // Terser provides better compression than esbuild
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-animation';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor';
          }
        },
      },
    },
    // Keep heavy assets small to ensure they don't block main thread
    chunkSizeWarningLimit: 500,
  },
})
