---
title: Getting it right once isn't learning it
summary: >-
  Why a question you answered well and a skill you're still weak at are two
  different things to track, and what breaks if you treat them as one.
project: ux-interview-coach
tags: [product-decisions, evaluation, learning]
draft: true
---

You bomb a question about handling disagreement with a PM. You get feedback.
You retry it. This time it's good.

What just happened? Either you learned something about articulating conflict,
or you learned how to answer that specific question. Those look identical
from the outside and they are not the same event.

So the system tracks both, separately.

## Two kinds of priority

A **question-level priority** targets a specific question. You flagged it, or
you answered it badly, and you want another go.

A **competency-level priority** targets the underlying capability. The system
creates these from evidence gaps, a pattern of missing decision ownership,
say, across several answers that had nothing else in common.

The rule that matters: completing a question retry may close the
question-level priority without automatically closing the competency
priority.

Answering it well the second time is evidence about the question. It isn't
yet evidence about the skill.

## Why does competency practice use a different question?

When a competency priority feeds into a future session, it's allowed to
select a *fresh* question rather than repeating the same wording.

This is the whole point. Repeating the exact question tests recall of the
answer you worked out last time. A different question testing the same
competency is the only version that tells you anything.

It's also the version that's uncomfortable, because you can't prepare for it,
which is the same reason real interviews work that way.

## A third thing: what the candidate chooses to keep

The responsibility work added another layer that isn't the same as either priority above. A candidate can explicitly say **“practice this”** or **“remember this.”** That is user-curated context.

The AI can recommend that something may be worth practising or remembering, but it cannot silently promote its own judgment into a candidate-designated takeaway. A system-created competency priority means “the evidence suggests this needs work.” A user-curated practice item means “I want to come back to this.” Those can overlap, but they are not interchangeable.

That distinction matters because a learning system shouldn't quietly turn every diagnosis it makes into the user's personal to-do list.

## Not a remediation queue

Priorities persist into future session planning, and they can either be woven
into a normal session or assembled into a focused practice set.

There's a constraint on this that reads like a small thing and isn't:
repetition avoidance and prior low-confidence signals may influence selection
"without turning the interview into a rigid remediation sequence."

A tool that only ever asks you about your weaknesses is exhausting and stops
resembling an interview. Real interviews contain questions you're good at.
Some of the value of practice is finding out that a thing you were dreading
is actually fine now.

The risk on the other side is named too: if evaluation shows priority
persistence makes sessions too repetitive, the fix is to adjust the weighting,
not to collapse the two target types back into one.

## The unresolved part

The spec admits the results experience doesn't yet distinguish, in
user-facing language, between "this question is okay, no retry needed" and
"keep practising this topic."

Those are different messages and I don't have the words for them yet. The
data model supports the distinction. The interface currently doesn't express
it, and it's marked as still to be designed rather than quietly rounded off
to whichever one is easier to render.
