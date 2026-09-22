---
title: Why did you ask me that?
summary: >-
  The agent already has to record why it chose every question and every
  probe. What the user gets to see of that is undecided — and it may be the
  most legible proof that this is an agent rather than a script.
project: ux-interview-coach
tags: [placeholder, agents, transparency]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

The agent already has to record why it chose every question and every probe.
What the user gets to see of that is undecided — and it may be the most
legible proof that this is an agent rather than a script.

## Waiting on

- PRD §51 — Agent transparency to the user (TBD)

## What the source sections say so far

§42 and Tech §64 already require the agent to explain selection *internally*,
and Agent Decision Events already log the decision, the reason, and the
inputs.

What's undecided is the user-facing half: whether a candidate can ask why a
question was chosen, what they're shown, and whether it appears during the
session or only in the report.

The spec's own note is that this is likely the most legible demonstration of
the agentic thesis in the product.

## Questions this post would have to answer

- Does the user ever see a decision reason mid-session, or only afterwards?
- Does exposing the reason damage Mock realism — would a real interviewer
  explain themselves?
- Is the reason shown the logged internal one, or a separate user-facing
  rendering of it?
