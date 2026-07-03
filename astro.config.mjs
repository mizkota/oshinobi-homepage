// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oshinobitennis.com',
  base: '/',
  integrations: [sitemap()],
  // 旧WordPress時代のインデックス残存URL対策（meta refresh + canonicalページを生成）
  redirects: {
    '/228': '/blog/',
    '/293': '/blog/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
