# Building in Public

A working log of projects built in the open. Static site, no CMS, no database,
no admin panel — publishing is a commit.

Live: https://catherinebhicks.github.io/public-build/
(temporary — see [docs/CUTOVER.md](docs/CUTOVER.md))

Deployed by GitHub Actions on every push to `main`
(`.github/workflows/deploy.yml`).

**Internal links must go through `url()` in `src/lib/url.ts`.** The site is
served from a base path and Astro does not rewrite hardcoded hrefs — a bare
`/posts/x` silently 404s in production while working fine in dev.

## Writing a post

Create `src/content/blog/NN-<slug>.md` — a two-digit sequence number, then the
slug. The filename becomes the URL (`/public-build/posts/NN-<slug>/`); the
displayed date comes from the `date:` field, not the filename.

Publishing runs **Mon/Wed/Fri**. The sequence number is publication order, so
the next post takes the next number.

```yaml
---
title: A post title
date: 2026-09-20
summary: One or two sentences, used on the index and in the RSS feed.
project: ux-interview-coach   # optional, must match a file in src/content/projects/
tags: [tooling]               # optional
draft: true                   # optional; drafts show locally, never in the built site
---
```

Then write. Commit and push to `main` — GitHub Actions builds and deploys to
Pages (`.github/workflows/deploy.yml`). Live in about a minute.

Frontmatter is schema-checked in `src/content.config.ts`. A malformed date or a
missing summary **fails the build** rather than shipping a broken page.

## Adding a project

Create `src/content/projects/<slug>.md`:

```yaml
---
name: Project Name
blurb: One sentence on what it is.
status: active        # active | shipped | parked
url: https://…        # optional
startDate: 2026-09-19
---
```

It appears on `/projects` and gets its own page automatically. No code change
needed — that's deliberate, and there's a test for it in the plan.

## Local

```sh
npm install
npm run dev      # drafts visible
npm run build    # drafts excluded
npm run preview
```

## Structure

| Path | What |
|---|---|
| `src/content.config.ts` | Collection schemas — the guard rail |
| `src/lib/content.ts` | Shared queries, draft filtering, date formatting |
| `src/layouts/BaseLayout.astro` | Head, nav, footer, Person JSON-LD |
| `src/components/PostList.astro` | Post list, used by the index and project pages |
| `src/styles/global.css` | All styles. One file, no framework. |
| `docs/CUTOVER.md` | How to move to the canonical subdirectory |

Internal links are root-relative so the cutover is a config change, not a
rewrite.
