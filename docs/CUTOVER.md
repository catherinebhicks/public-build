# Cutover: subdomain → subdirectory

This site currently lives at
`https://catherinebhicks.github.io/public-build/` (GitHub Pages). That is
**temporary**. The canonical home is `catherinehicks.com/public-build`, per the
URL architecture in `~/dev/personal-positioning/site-architecture-and-decisions.md`
(subdirectories pool authority into one entity; subdomains fragment it and are
reserved for noindex utility).

Do this once catherinehicks.com is live on Vercel.

## 1. This repo

In `astro.config.mjs`, only `site` changes — `base` already matches the
destination, which is why Pages was set up at this path:

```js
site: 'https://catherinehicks.com',
base: '/public-build',   // unchanged
```

Because every internal link goes through `src/lib/url.ts`, nothing else in
the source needs touching.

Then rebuild and confirm `dist/sitemap-0.xml` and `dist/rss.xml` carry
`catherinehicks.com/public-build/...` URLs.

Update the `Sitemap:` line in `public/robots.txt` to match.

## 2. Main site

Add to the main site's `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/public-build/:path*",
      "destination": "https://<this-deployment>.vercel.app/:path*" }
  ]
}
```

## 3. Redirect the old host

Paths are identical on both sides (`/public-build/posts/<slug>/`), so this is
a one-to-one map. Do not change post slugs before or during the move.

GitHub Pages cannot issue 301s on its own. Either point the Pages custom
domain at the new host, or leave the Pages site up serving a
`<meta http-equiv="refresh">` plus `<link rel="canonical">` per page. If the
site has moved to Vercel by then, a `vercel.json` redirect is cleaner:

```json
{
  "redirects": [
    { "source": "/public-build/:path*",
      "destination": "https://catherinehicks.com/public-build/:path*",
      "permanent": true }
  ]
}
```

## 4. Clean up stale DNS

As of 2026-09-20, `catherinehicks.com` still has four Squarespace A records
(`198.185.159.144/145`, `198.49.23.144/145`) and a `www` CNAME to
`ext-sq.squarespace.com` — pointing at a host that no longer serves the site.
Clear them at GoDaddy when the apex moves to Vercel.

## Optional, before then: custom subdomain on Pages

To serve this at `public-build.catherinehicks.com` while still on Pages:
add a `public/CNAME` file containing that hostname, set `site` to
`https://public-build.catherinehicks.com`, **remove `base`**, and add a
GoDaddy CNAME `public-build` → `catherinebhicks.github.io`. Note this gives
up the matching base path, so the eventual move costs more, not less.

## 5. Verify

- A known post URL on the subdomain returns 301 to the subdirectory.
- The subdirectory serves the post, with `<link rel="canonical">` on
  `catherinehicks.com`.
- `/public-build/rss.xml` resolves and carries absolute canonical URLs.
