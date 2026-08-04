import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
  site: 'https://www.trevorpricesom.co.uk',
  outDir: '../output',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
});
