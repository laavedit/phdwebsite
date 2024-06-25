import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phdwebsite/', // This should match your GitHub Pages repository name
  plugins: [react()],
});
