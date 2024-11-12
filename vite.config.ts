import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ITrips_front/',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
  },
});