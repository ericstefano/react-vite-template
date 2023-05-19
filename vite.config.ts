/// <reference types="vitest" />
import { resolve } from 'path';
import UnoCSS from '@unocss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), UnoCSS()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~mocks': resolve(__dirname, './mocks'),
    },
  },
});
