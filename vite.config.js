import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "https://laavedit.github.io/phdwebsite/", // Adjust base path as per your GitHub Pages setup
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
