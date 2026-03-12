import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://RadNotRed.github.io',
  base: '/AlphaKappaChi-HS-FSC-Web',
  integrations: [tailwind()],
});
