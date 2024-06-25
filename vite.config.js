import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phdwebsite/', // Ensure this matches your GitHub Pages repository name
  plugins: [react()],
});
