// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a project site, so it is served from a base
// path. That is deliberately the SAME path it will have after the move to
// catherinehicks.com/public-build — see docs/CUTOVER.md — so the base is
// exercised now rather than introduced later.
//
// At cutover only `site` changes; `base` stays.
export default defineConfig({
  site: 'https://catherinebhicks.github.io',
  base: '/public-build',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
