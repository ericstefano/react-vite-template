import UnoCSS from '@unocss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
