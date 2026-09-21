// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is the one line that changes at cutover, when
// catherinehicks.com lands on Vercel and this moves to /public-build.
// See docs/CUTOVER.md.
export default defineConfig({
  site: 'https://public-build.catherinehicks.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
