import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend/',
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps in production build
  },
});
