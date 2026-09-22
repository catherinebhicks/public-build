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

**Status (2026-09-22):** site is live and deployed. 39 post files, all
still drafts and none dated — a backlog, not a schedule. Nothing has
published yet. 27 are written; 12 are placeholders waiting on open spec
sections.

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
| UX Interview Coach source docs | Google Drive folder `1KS3MYGSPqF1YLW7MtKVA3iQYF4PpUkSX` — one copy each of the [PRD](https://docs.google.com/document/d/1rwbe4rhssLFB0Hsirhp-Wdbl4AQ04QhOqIQutHX3Dz8/edit), [Technical Spec](https://docs.google.com/document/d/1X7240cd060De5qQJPHISRtFb3nvMxZ0lfKsNo488Ot4/edit) and [Decision Rationale](https://docs.google.com/document/d/1loujwhL4OZHohbcFD4eFwuwy3w216JEu9Vv25bIJQVk/edit), carrying **39 unresolved review comments** (see #13) |

## Credentials & Access Needed

Nothing beyond **GitHub** (already authed via `gh` as `catherinebhicks`). No
env vars, no API keys, no CMS login — that's the point of the architecture.

DNS for `catherinehicks.com` is at **GoDaddy**. Needed only at cutover.

## Current Status

**Done:** Astro scaffold, content collections with schema-validated
frontmatter, MDX, RSS, sitemap, `projects` as a first-class dimension,
WCAG 2.2 AA groundwork (skip link, landmarks, focus states, AA contrast in
both themes), GitHub Pages deploy, Figma-derived design system (Space Grotesk
+ Inter, self-hosted), 27 drafts written and numbered, 12 placeholders
stubbed.

**In progress:** Catherine editing the drafts. They are in Claude's voice,
not hers — editing is the gate.

**Next:** publish posts one at a time as each is edited. **No cadence is
committed to.** Posts carry no date at all — the `date` field was removed
from the schema on 2026-09-21. Order comes from the `NN-` filename prefix,
which is the order they were written.

## Immediate Next Steps

1. **Edit and publish post 01** (`01-i-didnt-know-what-an-agent-was.md`) —
   edit it, change `draft: true` to `draft: false`, commit, push. That is
   the whole publish step; there is no date to add.
2. **Post 09 is unblocked** (#12 can close). It claimed the example-answer
   contradiction was caught and fixed; as of the 21 September revision that
   is now true — PRD §8, §26, §32 and §41 all agree. Verified 2026-09-22.
3. **Work the 39 review comments** on the three Drive docs (#13) — PRD 20,
   Technical Spec 17, Decision Rationale 2, all unresolved. Several are
   strong material for build-phase posts.
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
summary: One or two sentences — shows on the index and in RSS.
project: ux-interview-coach
tags: [tooling]
draft: true
---
```

**There is no `date` field.** Publishing is one change: `draft: false`.

`npm run dev` → http://localhost:4321/public-build/ (drafts visible locally
only, and they sort to the top since they're the work in progress).

Frontmatter is schema-checked in `src/content.config.ts`; a malformed post
fails the build with a message naming the file. Posts have no date, so the
index sorts on the `NN-` prefix and the RSS feed carries no `pubDate` —
readers fall back to feed order.

**Placeholder posts** (`28`–`39`) are tagged `placeholder` and open with a
blockquote saying so. Each names the spec sections it's waiting on and the
questions it would have to answer. They exist so the content has somewhere
to land — fill one in when its source section is decided, and drop the
blockquote and the `placeholder` tag at that point.

## Where Tasks Are Tracked

GitHub issues + milestones on `catherinebhicks/public-build`, mirrored to
Linear (team FOC) and Todoist.
