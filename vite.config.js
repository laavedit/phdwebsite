import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/phdwebsite/", // Adjust this base path according to your deployment setup
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory where Vite will generate the build
    assetsDir: 'assets', // Directory for static assets like your auto-generated script
    sourcemap: false,
  },
});
