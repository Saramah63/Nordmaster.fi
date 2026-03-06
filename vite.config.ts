import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    __dirname: JSON.stringify('/'),
    __filename: JSON.stringify('/index.html'),
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
