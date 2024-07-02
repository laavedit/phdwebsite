import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    headers: {
      'Content-Security-Policy': `style-src 'nonce-random' 'self'`,
    },
  },
  base: "/phdwebsite/dist/", // Adjust base path as per your GitHub Pages setup
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
