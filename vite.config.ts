import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { reactRouter } from '@react-router/dev/vite';
import netlifyPlugin from '@netlify/vite-plugin-react-router';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRouter(),
    netlifyPlugin(),
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
  assetsInclude: [`**/*.svg`],
});
