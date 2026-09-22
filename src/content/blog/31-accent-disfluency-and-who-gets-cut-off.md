---
title: Accent, disfluency, and who gets cut off
summary: >-
  Transcription accuracy varies by speaker, and those errors flow straight
  into evidence extraction. A candidate can be marked down for words the
  system didn't hear.
project: ux-interview-coach
tags: [placeholder, accessibility, evaluation, bias]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

Transcription accuracy varies by speaker, and those errors flow straight into
evidence extraction. A candidate can be marked down for words the system
didn't hear.

## Waiting on

- PRD §46 — Disfluency, pacing, and turn-detection accommodation (TBD)
- PRD §47 — Bias and fairness in evaluation (TBD)

## What the source sections say so far

The risk register already names this: word error rates vary by accent, dialect
and disfluency, and the errors don't stop at the transcript.

§12 already treats stammering as normal. §46 has to define how end-of-turn
detection avoids cutting those users off, and what the manual override is.

§47 covers evidence judged on substance rather than fluency, accent and
dialect coverage in the evaluation set, and how transcription confidence
affects evaluation.

## Questions this post would have to answer

- What is the manual 'I'm not finished' control, and is it available without a
  mouse?
- Does low transcript confidence suppress an evidence gap, or flag it
  differently?
- How do you build an evaluation set that actually contains the speakers most
  likely to be mis-served?
