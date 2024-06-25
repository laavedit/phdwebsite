import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phdwebsite/', // Update this to match your GitHub Pages repository name
  plugins: [react()],
});
