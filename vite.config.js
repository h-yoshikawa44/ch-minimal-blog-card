import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-minimal-blog-card/' : './',
  server: {
    open: true,
  },
});
