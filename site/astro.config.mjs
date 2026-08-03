import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
  site: 'https://dansmith-codes.github.io',
  base: '/trevorpricesom.co.uk',
  outDir: '../output',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
});
