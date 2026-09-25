---
title: The portfolio goal changed the architecture
summary: >-
  One question, what does a real AI workflow look like in a portfolio, moved
  the whole system toward visible orchestration. A non-engineering reason
  driving an engineering decision, recorded rather than hidden.
project: ux-interview-coach
tags: [architecture, portfolio, n8n]
draft: true
---

The architecture conversation started conventionally. Web app front end,
normal backend calling the AI, n8n for background automation but not the live
interview flow.

I asked why not the live flow. The concern was fragility: turning every live
turn into a workflow run adds latency and failure modes to the path that most
needs to be fast and reliable. Fair.

Then I asked a question that wasn't about engineering at all:

> What shows a typical AI workflow if I want to put this in my portfolio?

That changed the answer!

## Shipping fast, or showing the work

If the goal is only to ship, the pragmatic architecture is code: one service,
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

So that was the decision at this point in the build: **n8n-heavy orchestration, with a thin coded application layer.**

It didn't survive contact with the live-loop requirements.

## What changed later

Once I worked through checkpointing, voice recovery, cross-device takeover, model fallback, and the latency budget turn by turn, the seam moved. The live interview loop now belongs to the Next.js/application backend: question retrieval, evidence extraction, Story State, probe/coach/move-on decisions, persistence, and STT/TTS coordination all stay on the latency-sensitive path.

n8n still matters, but **only asynchronously**: report synthesis, story/context processing, question-bank enrichment, exports, evaluation runs, notifications, and maintenance. The browser still never calls it directly, and Supabase remains the durable source of truth.

I kept the original reasoning here because this is exactly the kind of architecture decision I wanted the project to expose. The portfolio goal pushed me toward visible orchestration. The operational requirements then forced me to decide which visibility was worth keeping and which work had to move into code.

## The seam

The thin layer is what keeps this from being a trap.

At this stage I described the coded layer as handling the real-time UX, authentication, security boundaries, and session state, while n8n orchestrated the AI work. That was the seam I expected to preserve. The later live-loop work above narrowed n8n's role further: asynchronous orchestration stays there; latency-sensitive interview decisions do not.

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

The modularity principle survived even though the runtime boundary changed. Question selection, evidence extraction, decision policy, coaching, and synthesis still have defined inputs and outputs; they simply do not all execute in n8n. The architecture stays inspectable without making the visual workflow tool responsible for the live interview.

## A non-engineering reason, named

A non-engineering goal influenced a technical decision.

That's usually either hidden or dressed up after the fact in purely technical
language. Said plainly: I chose the more visible architecture partly because I
need to be able to show it, and I verified that choice wouldn't cost me
anything structural before making it.

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
- **Structured outputs, not prose.** Core AI operations return defined
  schemas: live turn decision, story state, question selection, coaching,
  evidence, feedback. Free-form text is hard to validate, persist, test, or orchestrate.
  Schemas turn probabilistic behaviour into something the application can
  reason about.

The common thread: assume every piece will be replaced, and put the seams in
while it's cheap.

If you've run a live agent loop through n8n and hit the latency wall, holler!
Finding out where it breaks from you beats finding out from my own users.
