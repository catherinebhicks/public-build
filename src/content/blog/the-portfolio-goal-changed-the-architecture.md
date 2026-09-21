---
title: The portfolio goal changed the architecture
date: 2026-09-20
summary: >-
  One question — what does a real AI workflow look like in a portfolio? —
  moved the whole system toward visible orchestration. A non-engineering
  reason driving an engineering decision, recorded rather than hidden.
project: ux-interview-coach
tags: [architecture, portfolio, n8n]
draft: true
---

The architecture conversation started conventionally. Web app front end,
normal backend calling the AI, n8n for background automation — not the live
interview flow.

I asked why not the live flow. The concern was fragility: turning every live
turn into a workflow run adds latency and failure modes to the path that most
needs to be fast and reliable. Fair.

Then I asked a question that wasn't about engineering at all:

> What shows a typical AI workflow if I want to put this in my portfolio?

That changed the answer.

## Why it changed it

If the goal is only to ship, the pragmatic architecture is code — one service,
conventional control flow, whatever's fastest to build and easiest to
maintain.

But part of the point of this build is to demonstrate an **end-to-end AI
product workflow**, not "designer prompts a model." Those are different
artifacts. The first shows orchestration, data flowing in and out, evaluation
loops, and explicit decision points. The second shows a clever prompt.

n8n makes that visible. The agent's workflow becomes a canvas you can look at:
ask question → extract evidence → enough evidence? → yes, move on / no,
generate follow-up. Each step inspectable, each run traceable. You can
screenshot it and explain it.

So: **n8n-heavy orchestration, with a thin coded application layer.**

## The seam

The thin layer isn't decoration — it's the thing that keeps this from being a
trap.

It handles the real-time UX, authentication, security boundaries, and session
state. n8n orchestrates the AI work. The separation means the product doesn't
become inseparable from n8n, and latency-sensitive or high-scale pieces can
move into code later without a rewrite.

I asked directly what I'd be giving up if I wanted to productise this later.
The answer was: not much, if the seam is designed now. Which is the only
reason I was comfortable optimising for visibility. Had the honest answer been
"you'll rebuild it," the portfolio argument wouldn't have been worth it.

Two supporting rules fell out:

- **The browser never calls n8n directly.** Everything goes through the app's
  server boundary. Direct browser-to-orchestration access exposes
  infrastructure and makes auth, secrets, rate limiting, and validation harder
  to control.
- **n8n is not the database.** It coordinates workflows; it does not become
  durable storage. Workflow execution history is not a system of record.
  Supabase owns durable state.

Also: n8n orchestrates **discrete, inspectable modules** rather than
containing one giant prompt. Question selection, evidence extraction,
follow-up decision, coaching, synthesis — each with defined inputs and
outputs. That's what makes the canvas legible instead of being a flowchart
with one enormous box in the middle.

## The part I want to be honest about

A non-engineering goal influenced a technical decision.

That's usually either hidden or dressed up after the fact in purely technical
language. I'd rather say it plainly: I chose the more visible architecture
partly because I need to be able to show it, and I verified that choice
wouldn't cost me anything structural before making it.

Optimising for explicability isn't automatically wrong, either. A system whose
decisions you can inspect is easier to debug, easier to evaluate, and easier
to hand to someone else. The portfolio requirement pushed toward a property
that's independently good. That's lucky, and I'd have wanted to know if it
hadn't.

It also isn't free. Orchestration in a visual tool means latency I wouldn't
have in-process, and a dependency on a platform. The mitigations are the thin
layer and the seam. If live workflows turn out too slow when there are real
users, they move into code, and the canvas keeps documenting what the system
does.

## Related calls from the same session

Since they came from the same "modular so it can change" instinct:

- **Model providers behind an adapter.** Models change fast in quality, cost,
  and latency. Swapping one shouldn't mean rewriting the interview system.
- **Different workloads, different models.** Live turn-by-turn prioritises
  latency and reliable structured decisions; end-of-session synthesis can
  trade latency for deeper reasoning. That's also an explicit cost control.
- **Structured outputs, not prose.** Core AI operations return defined schemas
  — live turn decision, story state, question selection, coaching, evidence,
  feedback. Free-form text is hard to validate, persist, test, or orchestrate.
  Schemas turn probabilistic behaviour into something the application can
  reason about.

The common thread: assume every piece will be replaced, and put the seams in
while it's cheap.
