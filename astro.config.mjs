// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhiyu344.com',

  integrations: [react()],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },
});