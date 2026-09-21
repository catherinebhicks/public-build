# Start Here — Public Build

## What This Is

A permanent public build log at **"Building in Public"** — a working record of
projects built in the open. Static Astro site, markdown files in git, no CMS,
no database, no auth. Publishing is a commit.

It is deliberately **generic**: it covers all passion projects, not one
product. Nothing in the site's name, copy, navigation, or design may assume a
single project. Adding project #2 must require only a new content file.

First project documented: the **UX Interview Coach Agent** — an agentic
interview-practice product for UX/product designers. "A coach, not an answer
bank."

**Status (2026-09-21):** site is live and deployed. 19 posts written and
scheduled, all still drafts. Nothing has published yet.

## Where Things Live

| | |
|---|---|
| Repo | `catherinebhicks/public-build` — **public** (deliberate exception to private-by-default) |
| Local | `~/dev/public-build` |
| Live | https://catherinebhicks.github.io/public-build/ |
| Deploy | GitHub Actions on push to `main` (`.github/workflows/deploy.yml`) |
| Posts | `src/content/blog/NN-<slug>.md` |
| Projects | `src/content/projects/<slug>.md` |
| Cutover plan | `docs/CUTOVER.md` |
| UX Interview Coach PRD + spec | Google Drive folder `1KS3MYGSPqF1YLW7MtKVA3iQYF4PpUkSX` |

## Credentials & Access Needed

Nothing beyond **GitHub** (already authed via `gh` as `catherinebhicks`). No
env vars, no API keys, no CMS login — that's the point of the architecture.

DNS for `catherinehicks.com` is at **GoDaddy**. Needed only at cutover.

## Current Status

**Done:** Astro scaffold, content collections with schema-validated
frontmatter, MDX, RSS, sitemap, `projects` as a first-class dimension,
WCAG 2.2 AA groundwork (skip link, landmarks, focus states, AA contrast in
both themes), GitHub Pages deploy, Figma-derived design system (Space Grotesk
+ Inter, self-hosted), 19 drafts written/numbered/scheduled.

**In progress:** Catherine editing the drafts. They are in Claude's voice,
not hers — editing is the gate.

**Next:** post 01 publishes Mon 2026-09-21. Cadence **Mon/Wed/Fri**, running
through Mon 2026-11-02, then build-phase posts take over.

## Immediate Next Steps

1. **Edit and publish post 01** (`01-i-didnt-know-what-an-agent-was.md`) —
   change `draft: true` to `draft: false`, commit, push.
2. **Run `fix-prd.gs`** against the UX Interview Coach PRD (Extensions → Apps
   Script → paste → `checkPRD()` then `fixPRD()`). Fixes three defects. A
   backup doc already exists in the same Drive folder.
3. **Install a Markdown editor** — Setapp has iA Writer / Ulysses. No code
   editor is currently installed; `github.dev` (press `.` on the repo) works
   with zero setup in the meantime.

## Open Questions / Blockers

- **Publish the rationale document?** The "Product & Technical Decision
  Rationale" doc was deliberately kept OUT of this public repo. Catherine's
  call whether it becomes a post, an appendix, or stays private.
- **Cutover timing** depends on `catherinehicks.com` landing on Vercel.
  Until then the canonical URL is the GitHub Pages one.
- **Stale DNS:** `catherinehicks.com` still has 4 Squarespace A records and a
  `www` CNAME pointing at a host that no longer serves the site. Clear at
  cutover.

## Gotchas

- **Internal links must go through `url()` in `src/lib/url.ts`.** The site is
  served from a base path; Astro does not rewrite hardcoded hrefs, so a bare
  `/posts/x` works in dev and 404s in production.
- **Renaming a post file** requires clearing BOTH `.astro/` and
  `node_modules/.astro/` — the content data store persists in node_modules and
  the build fails resolving the old path otherwise.
- **`--measure` must not use `ch` units** — `ch` resolves against each
  element's own font, so header/main/footer computed three different column
  widths and the page misaligned.
- **The Pages workflow pins Node 22.** The runner defaults to 20; Astro 7
  requires >=22.12.
- **The Drive MCP cannot edit document content** — only metadata (title,
  parent). Use Apps Script for in-place Google Doc edits.

## Writing a Post

`src/content/blog/NN-<slug>.md`, where `NN` is the next sequence number:

```yaml
---
title: A post title
date: 2026-09-23
summary: One or two sentences — shows on the index and in RSS.
project: ux-interview-coach
tags: [tooling]
draft: true
---
```

`npm run dev` → http://localhost:4321/public-build/ (drafts visible locally
only). Frontmatter is schema-checked; a bad date fails the build.

## Where Tasks Are Tracked

GitHub issues + milestones on `catherinebhicks/public-build`, mirrored to
Linear (team FOC) and Todoist.
