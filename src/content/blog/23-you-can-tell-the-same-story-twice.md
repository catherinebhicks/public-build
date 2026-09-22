---
title: You can tell the same story twice
summary: >-
  Separating the projects you worked on from the stories you tell about them,
  and the rule that stops the system penalising someone for having one very
  good experience.
project: ux-interview-coach
tags: [product-decisions, principles, data-model]
draft: true
---

Two objects that sound like one thing and aren't.

A **project** is a factual container: work you actually did. A **story** is a
reusable interview narrative drawn from it. The relationship is many-to-many,
with an optional primary project, because one project can support several
different stories and one generalised story can span several related projects.

That's the data model. The reason it's in the decision log rather than buried
in a schema is the rule attached to it.

## Is reusing a story a weakness?

The spec says story reuse is allowed and is not inherently penalised. Breadth
is contextual to the candidate's experience and seniority, and junior
candidates must not be penalised simply for drawing multiple answers from one
strong experience.

This is the kind of thing that only becomes a product decision once you have
the data to enforce the opposite. The moment a system can see that you've
used the same project for four answers, someone will want to flag it. It
looks like a signal. It's trivially computable. It would feel rigorous.

It's also mostly wrong. A designer two years in has had one or two
substantial projects. Telling them their range is narrow is telling them they
haven't worked for long enough, which they know, and which isn't coachable.

So breadth is stored as contextual metadata and explicitly excluded from
answer-quality scoring.

## Canonical facts, session-specific telling

The story model is deliberately hybrid. The canonical story keeps a stable
core, what happened, versioned and editable. Each answer attempt separately
records how the story was told *that time*: what evidence appeared, what was
missing, how it was delivered.

So the facts don't drift, and you can still see that the third time you told
it you finally mentioned the trade-off.

Explicit user edits update the canonical story through a new version rather
than rewriting what's already there.

## Discovered quietly, surfaced later

Stories get auto-detected during an interview. When one is found, it's added
silently, nothing interrupts the conversation, and surfaced afterwards in the
session report.

Matching uses multiple signals, not embeddings alone, and preserves a match
confidence. An uncertain match is left unlinked rather than forced together.
Merging and splitting happen after the session, never during it, and preserve
the history of what was merged.

That last constraint is the one I'd defend hardest. There is no version of
"actually, I think this is the same story as the one you told last Tuesday,
is that right?" that belongs inside a mock interview.

## What this is really for

Eventually: noticing that you claim a capability on your resume and have never
once demonstrated it in practice. Or the reverse, something you demonstrate
repeatedly and have never put on paper.

That comparison needs claimed capability and demonstrated evidence modelled
separately, each traceable to where it came from. The spec is explicit that
the data model has to support it without prescribing how it's shown yet,
because I don't know how to show it without it landing as an accusation.

That's a real unsolved problem and it's filed as one.
