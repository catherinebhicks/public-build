---
title: Rate the evidence, not the person
summary: >-
  One short sentence in the spec does more safety work than anything else in
  the document. The difference between "this answer didn't show influence"
  and "you aren't influential."
project: ux-interview-coach
tags: [rubric, principles, safety]
draft: true
---

There's a sentence in the technical spec that I think does more work than
anything else in it:

> **Rate the evidence, not the person.**

Here's the drift it exists to prevent. The agent observes that an answer
didn't demonstrate influence. That's a true, narrow, useful observation. One
short step away is:

> You aren't influential.

Those are completely different claims. The first is about four hundred words
someone said about one project. The second is about a person. A language model
asked to give feedback will slide from the first to the second without
anything in the machinery registering that something changed, because
grammatically it's a small edit and semantically it's an enormous one.

So the system evaluates evidence present in an answer. Not competence, not
employability, not intelligence, not personality, not potential.

## The dimensions

Ten of them, extracted per answer:

| Dimension | What it's looking for |
|---|---|
| Context | What situation were they operating within? |
| Ownership | What did they personally own or contribute? |
| Decision | What decisions did they make? |
| Reasoning | Why did they make them? |
| Trade-offs | What constraints or competing priorities existed? |
| Collaboration | How did they work with others? |
| Influence | How did they create alignment or affect decisions? |
| Execution | What did they actually do? |
| Outcomes | What happened as a result? |
| Reflection | What did they learn or understand afterward? |

Each gets a **status** — observed, partial, missing, or not applicable — and,
separately, a **strength** — low, medium, or high. Those answer two different
questions: is the evidence there at all, and how good is it? Collapsing them
into one score was tempting and would have been wrong, because "you didn't
mention the outcome" and "the outcome you mentioned was thin" call for
completely different coaching.

Both travel with the transcript snippet they came from. That last part is what
makes feedback defensible. The system can show you the words that produced the
assessment.

## Not every answer needs every dimension

This is the part that stops the rubric turning hostile.

A rigid version produces absurd feedback. A recruiter asking why you're
interested in the company does not require the same evidence as a hiring
manager asking about a major product decision. Demanding trade-off analysis
in a two-minute screener answer would be a bug, not rigour.

So evidence is evaluated relative to **question × interview type ×
seniority**, and a dimension can be critical, secondary, missing-but-not-
important, or not applicable.

The framing in the spec is that the model should understand the *purpose* of
the question, not check boxes. There's a related rule that follows from it:
the presence of remaining schema gaps is not, on its own, a reason to probe.
The schema exists to help the agent reason about what matters. The moment it
becomes a form to be filled, the conversation stops being an interview.

## Why I care about this one more than most

Partly it's better product design — narrow claims are more defensible and more
useful than broad ones. "This answer didn't say what you decided" is
actionable. "You lack decisiveness" is just something to feel bad about.

But mostly it's that the people using this are job hunting, which means
they're already anxious and already primed to read any critique as a verdict
on their worth. A tool that hands out character assessments dressed as
interview feedback would do real harm to people who came to it for help.

Ten dimensions, tied to snippets, scoped to the question. Narrow on purpose.
