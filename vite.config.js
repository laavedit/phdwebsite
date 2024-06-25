import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phdwebsite/', // Replace with your GitHub Pages repository name
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for easier debugging
  },
});
