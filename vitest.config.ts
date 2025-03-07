import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
    },
  },
});