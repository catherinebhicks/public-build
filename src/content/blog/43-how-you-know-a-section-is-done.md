---
title: How you know a section is done
summary: >-
  A spec full of good intentions still isn't a backlog. The acceptance layer
  turns human-agent behaviour into things the product can actually prove.
project: ux-interview-coach
tags: [spec, planning, evaluation]
draft: true
---

I had dozens of sections describing how the interview coach should behave and no consistent way to say when any one of them was actually done.

That's not a small documentation problem. It's the difference between a product requirement and a paragraph everyone can interpret differently.

So I added an acceptance layer.

## Behaviour first, implementation second

The convention is given / when / then, written against the behaviour rather than the implementation.

For example:

**Given** a candidate is in Practice and their answer contains a material, recoverable evidence gap, **when** the agent decides what to do next, **then** it may ask a bounded relevant probe or offer evidence-grounded coaching without writing the answer for them.

That doesn't say which function runs or which model gets called. It says what the system must prove.

The same pattern now covers the human-agent boundaries that were easiest to hand-wave:

- Mock withholds live coaching and scoring.
- Insufficient evidence stays insufficient instead of becoming invented evidence.
- A confirmed transcript or context correction drives subsequent re-evaluation while historical versions remain traceable.
- Voice, model, tool, or network failure preserves confirmed work and offers a safe recovery path.
- Consequential actions such as deletion and sharing require the confirmation defined by that flow.
- Material model, prompt, rubric, question-selection, or orchestration changes have to pass evaluation before production promotion.

## Some criteria cannot be unit-tested into truth

The awkward part is AI behaviour.

“Did the API return valid JSON?” is deterministic. “Was this probe warranted?” isn't.

So acceptance is layered. Deterministic checks handle things like schema validity, probe ceilings, mode restrictions, persistence, and state transitions. Representative human review handles relevance, grounding, usefulness, and whether the behaviour actually feels like an interview rather than an extraction script.

For the V1 gate, I also stopped leaving quality as “looks good.” The starting bar is roughly 20–30 representative end-to-end sessions, at least 90% reviewed question/probe relevance, at least 95% evidence traceability, zero critical integrity failures, and at least 95% intended terminal or recoverable completion without unrecoverable error or loss of captured answers. Those numbers are calibration starting points, not eternal truths.

## Done has more than one owner

This also exposed a documentation problem.

The PRD owns the user-facing behaviour. The responsibility model owns who decides what. The autonomy matrix owns what the AI can do independently, what requires the user, and what is prohibited. The technical spec owns implementation enforcement. The decision log owns why those choices were made.

A section isn't done because five documents each say something plausible. It's done when the authoritative document says the thing it owns, the supporting documents agree with it, and the behaviour has a way to be evaluated.

That sounds procedural. It turned out to be product design.

The hardest bugs I found in this project weren't code bugs. They were two reasonable sentences in two different documents describing two different products.
