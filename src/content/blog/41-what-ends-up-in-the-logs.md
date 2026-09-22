---
title: What ends up in the logs
summary: >-
  Two sections say not to log sensitive content unnecessarily without
  defining what that means. The likely accidental leak is already identified
  and not yet closed.
project: ux-interview-coach
tags: [placeholder, privacy, observability]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

Two sections say not to log sensitive content unnecessarily without defining
what that means. The likely accidental leak is already identified and not yet
closed.

## Waiting on

- Tech §77 — Logging and PII redaction rules (TBD)

## What the source sections say so far

§20 and §23 both say not to log sensitive content unnecessarily, without
defining what that means in practice.

§77 has to produce concrete redaction rules and a field allowlist.

§54 already flags request-body logging at the hosting layer as the likely
accidental leak — a known hole, named, not yet closed.

## Questions this post would have to answer

- Is the rule an allowlist or a denylist? Only one of those fails safe.
- How do you debug a bad probe decision without the answer text that produced
  it?
- Does the admin and observability surface see redacted content, or no content
  — §21 and §32 say content-minimised, which isn't the same thing.
