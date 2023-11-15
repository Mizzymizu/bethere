import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: 'index.html',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://127.0.0.1:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
