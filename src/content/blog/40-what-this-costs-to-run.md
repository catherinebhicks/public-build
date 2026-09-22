---
title: What this costs to run
summary: >-
  Streaming transcription, per-turn inference and speech synthesis on a
  free, publicly reachable product. The ceilings and the circuit breakers
  aren't set yet.
project: ux-interview-coach
tags: [placeholder, architecture, cost]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

Streaming transcription, per-turn inference and speech synthesis on a free,
publicly reachable product. The ceilings and the circuit breakers aren't set
yet.

## Waiting on

- Tech §75 — Cost controls, quotas, and rate limiting (TBD)
- Tech §76 — Caching strategy (TBD)

## What the source sections say so far

The risk register names cost per session as a live risk: streaming
transcription, per-turn inference and speech synthesis, on a product that is
free and publicly reachable.

§75 covers per-session token and cost ceilings, maximum turns and session
length, per-account daily caps, and circuit breakers. The PRD lists cost
controls and rate limits as an open implementation question in §35; nothing
yet defines the mechanism.

§76 covers reuse of synthesised audio for repeated question text — the same
question is asked to many users, so this is named as a substantial saving —
plus question-bank caching and the caching and retention of fetched public
company context.

## Questions this post would have to answer

- What happens to a candidate who hits a cap mid-interview? An interview that
  stops at question four is worse than one that never started.
- Does caching question audio conflict with voice choice, if the same question
  has to exist in several voices?
- Is fetched company context cached per user or shared, and what does that
  imply for retention?
