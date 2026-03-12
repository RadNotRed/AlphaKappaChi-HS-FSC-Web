import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://RadNotRed.github.io',
  base: process.env.GITHUB_ACTIONS ? '/AlphaKappaChi-HS-FSC-Web' : '/',
  integrations: [tailwind()],
});
