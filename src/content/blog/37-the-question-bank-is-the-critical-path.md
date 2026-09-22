---
title: The question bank is the critical path
summary: >-
  The first risk in the register, and the least interesting work in the
  project. Nothing runs without it.
project: ux-interview-coach
tags: [placeholder, content, planning]
draft: true
---

> **Placeholder.** The decision behind this post hasn't been made yet. The
> source sections are still open, so there's nothing here to write up
> honestly. This file exists so the content has somewhere to land.

## The angle

The first risk in the register, and the least interesting work in the project.
Nothing runs without it.

## Waiting on

- Tech §71 — Question-bank ingestion and normalisation (TBD)
- Tech §72 — Question selection and ranking algorithm (TBD)

## What the source sections say so far

§71 covers the pipeline from source workbook to normalised records:
extraction, deduplication, how agent metadata layers on without overwriting
source content, re-import behaviour, and the enrichment method and its QA.

§72 covers the actual scoring — how interview type, seniority, job-description
relevance, prior low-confidence signals and repetition avoidance combine into
a ranked plan, plus weighting, tie-breaks, the repetition-avoidance window,
and what happens when the pool runs out.

§64 says to favour deterministic ranking without defining the ranking.

## Questions this post would have to answer

- What is the minimum viable enriched question count for one coherent session
  at one seniority?
- Who enriches the questions, and what stops the enrichment being as generic
  as the thing it's meant to prevent?
- What does the agent do when the pool is exhausted mid-session?
