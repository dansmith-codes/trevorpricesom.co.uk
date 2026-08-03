import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
  outDir: '../output',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
});
