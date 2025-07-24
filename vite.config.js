import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.0.101', // ✅ IP address goes here
    port: 5174,              // ✅ Port is a number, not a string
  },
});
