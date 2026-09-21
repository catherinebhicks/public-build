# Cutover: subdomain → subdirectory

This site currently lives at `public-build.catherinehicks.com`. That is
**temporary**. The canonical home is `catherinehicks.com/public-build`, per the
URL architecture in `~/dev/personal-positioning/site-architecture-and-decisions.md`
(subdirectories pool authority into one entity; subdomains fragment it and are
reserved for noindex utility).

Do this once catherinehicks.com is live on Vercel.

## 1. This repo

In `astro.config.mjs`:

```js
site: 'https://catherinehicks.com',
base: '/public-build',
```

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

## 3. Redirect the subdomain

Keep the subdomain resolving, serving nothing but 301s. In this project's
`vercel.json`:

```json
{
  "redirects": [
    { "source": "/:path*",
      "destination": "https://catherinehicks.com/public-build/:path*",
      "permanent": true }
  ]
}
```

Post paths are `/posts/<slug>/` on both sides, so this maps one-to-one. Do not
change post slugs before or during the move.

## 4. Clean up stale DNS

As of 2026-09-20, `catherinehicks.com` still has four Squarespace A records
(`198.185.159.144/145`, `198.49.23.144/145`) and a `www` CNAME to
`ext-sq.squarespace.com` — pointing at a host that no longer serves the site.
Clear them at GoDaddy when the apex moves to Vercel.

## 5. Verify

- A known post URL on the subdomain returns 301 to the subdirectory.
- The subdirectory serves the post, with `<link rel="canonical">` on
  `catherinehicks.com`.
- `/public-build/rss.xml` resolves and carries absolute canonical URLs.
