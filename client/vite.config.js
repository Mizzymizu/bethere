import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://127.0.0.1:3001', // Updated target to use IPv4 loopback address
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
