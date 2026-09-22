---
title: Latency, silence, and interrupting the interviewer
summary: >-
  An earlier post covered how long the coach waits before speaking. This is
  the other direction: how long you wait for it, and whether you can talk
  over it.
project: ux-interview-coach
tags: [placeholder, voice, architecture, accessibility]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

An earlier post covered how long the coach waits before speaking. This is the
other direction: how long you wait for it, and whether you can talk over it.

## Waiting on

- Tech §68 — Performance, latency budget, and non-functional requirements (TBD)
- Tech §73 — Audio pipeline details (TBD)

## What the source sections say so far

§68 covers time-to-first-audio and the per-turn budget broken across
transcription, inference and synthesis, plus acceptable p95s, concurrency and
uptime. The spec says this is the difference between an interview and a
chatbot, and nothing currently constrains it.

§73 covers audio format and streaming, chunk sizing, end-of-turn thresholds
and how they accommodate disfluency, microphone permission flow, noise
handling, and barge-in — whether a candidate may interrupt the interviewer
mid-question, as they could in a real interview.

## Questions this post would have to answer

- What is the actual time-to-first-audio target, and what gets cut if it can't
  be met?
- Should barge-in exist, given that interrupting is normal in real interviews
  and catastrophic for turn detection?
- How does the latency budget interact with the deliberately long silence
  allowance from the pause behaviour?
