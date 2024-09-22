import { defineConfig } from "vite";
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [handlebars()],
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'index.html'),
          },
        },
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    base: '/'
})