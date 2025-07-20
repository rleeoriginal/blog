// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rleeoriginal.github.io',
  base: 'personal-website',
  vite: {
    plugins: [tailwindcss()]
  }
});