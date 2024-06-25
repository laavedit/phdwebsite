import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phdwebsite/', // Adjust base path as per your GitHub Pages setup
  plugins: [react()],
  build: {
    sourcemap: false, // Enable source maps in development (default)
    rollupOptions: {
      output: {
        manualChunks: undefined, // Clear any manualChunks setting
      },
    },
  },
});
