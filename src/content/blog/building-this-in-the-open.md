---
title: Building this one in the open
date: 2026-09-20
summary: >-
  Starting a new project, and starting the log at the same time. Why the log is
  a folder of text files instead of a blogging platform, and what the first
  project is.
project: ux-interview-coach
tags: [meta, tooling]
draft: true
---

I'm starting a new build, and this time I'm writing it down as it happens
instead of reconstructing it afterward.

The project is a **UX Interview Coach** — an agentic practice tool for
designers preparing for interviews. It runs a session from a curated question
bank, listens to the answer, decides whether to follow up, and gives feedback
calibrated to the level you're interviewing at. The principle it's built on is
that it's a coach, not an answer bank: it should help you articulate your own
experience more clearly, not hand you a polished script that sounds like
everyone else's.

More on the product itself in the next post. This one is about the log,
because setting up where to write turned out to involve more real decisions
than I expected.

## Why not a blogging platform

The obvious move is a hosted platform. I ruled them out for two reasons.

The first is friction. Every hosted tool is another login, another editor,
another context switch away from the work. A build log that requires a detour
to update is a build log that stops after three posts.

The second is surface area. A CMS means a database, an admin panel, sessions,
and a password that can leak — infrastructure for what is fundamentally a
folder of text files. That's a maintenance burden and a security liability in
exchange for a rich-text editor I don't need.

I did look at Medium, since syndicating there has been on my list. Its API
turns out to be effectively closed: Medium [stopped issuing new integration
tokens on January 1, 2025](https://github.com/Medium/medium-api-docs). Tokens
issued before then still work, but you can't create one now. There are several
community MCP servers that wrap that API, and none of them can authenticate a
new account. Medium stays a place to cross-post by hand, pointing back here.

## What I did instead

Markdown files in a git repo, built to static HTML.

There's nothing to log into. Publishing is a commit and a push — about thirty
seconds later it's live. The posts are versioned, diffable, and mine in a
format that will still open in twenty years. Every decision I revise leaves a
trail in the history instead of silently overwriting what I thought before,
which matters for a log whose whole premise is keeping the wrong turns in.

The frontmatter is schema-checked, so a malformed date fails the build rather
than shipping a broken page. That's the one piece of ceremony I kept, and it
earns its place: the failure mode it prevents is the kind you don't notice for
a month.

## A note on the URL

This is currently at a subdomain, and that's temporary.

My own site architecture says content should live in subdirectories, because a
subdomain reads to search engines and answer engines as a substantially
separate site — authority earned here doesn't reliably pool back to the main
domain. Subdomains are for utility things you don't want indexed. A build log
is the opposite of that.

The correct home is a subdirectory of my main site, but that site is
mid-migration and the path isn't available yet. Rather than let an unrelated
migration decide when I get to start writing, I'm publishing here now and will
move it, with redirects, once the migration lands. Every internal link is
root-relative specifically so that move is a config change instead of a
rebuild.

Starting beats waiting for the clean URL.
