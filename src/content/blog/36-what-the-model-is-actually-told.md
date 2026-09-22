---
title: What the model is actually told
summary: >-
  Output schemas are specified in detail. The prompts that produce those
  outputs don't exist yet.
project: ux-interview-coach
tags: [placeholder, prompts, architecture]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

Output schemas are specified in detail. The prompts that produce those outputs
don't exist yet.

## Waiting on

- Tech §66 — Prompt library and prompt versioning (TBD)

## What the source sections say so far

Covers the actual prompt text: interviewer persona, evidence extraction, the
probe/coach decision, synthesis, and safety.

§41 defines the structured output schemas; nothing yet defines what the model
is told in order to fill them.

Also covers few-shot examples of good and bad probes, and how prompt_version
is stored and referenced by Feedback and Evidence Items.

## Questions this post would have to answer

- Is the probe decision one prompt or several?
- What does a bad probe look like as a worked example — the thing the prompt
  has to steer away from?
- How does a prompt change get versioned so an old evaluation stays
  reproducible?
