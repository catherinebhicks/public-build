---
title: What the model is actually told
summary: >-
  The exact prompts are still an implementation artifact, but the contract
  around them is no longer open: prompts are versioned product configuration.
project: ux-interview-coach
tags: [placeholder, prompts, architecture]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

The exact prompt text and few-shot examples are still implementation work. But the architecture around them is no longer TBD: interviewer, evidence extraction, probe/coach, synthesis, and integrity prompts are versioned product configuration rather than ad hoc strings.

## Waiting on

- Tech §66 — Prompt library, versioning, and reproducibility (normative contract settled; exact prompt content still implementation work)

## What the source sections say so far

Covers the actual prompt text: interviewer persona, evidence extraction, the
probe/coach decision, synthesis, and safety.

The structured output schemas define what each model role must return. The normative versioning contract now defines how the prompt/configuration behind that output is identified and preserved, even though the exact wording is still to be authored and evaluated.

Every material evaluation or decision records the provider/model and role, prompt version, schema version, rubric/calibration version, question version or canonical ID, application/workflow configuration, relevant saved-context version, and source turn/attempt IDs. Historical outputs are immutable; a later run becomes a new versioned reinterpretation.

## Questions this post would have to answer

- Is the probe decision one prompt or several?
- What does a bad probe look like as a worked example — the thing the prompt
  has to steer away from?
- How does a prompt change get versioned so an old evaluation stays
  reproducible?
