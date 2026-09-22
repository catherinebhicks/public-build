---
title: Confident isn't the same as good
summary: >-
  How sure you sound and how strong your evidence is are two different
  measurements. Keeping them apart turned out to be one of the more consequential
  decisions in the spec.
project: ux-interview-coach
tags: [rubric, evaluation, principles]
draft: true
---

There's a rule in the decision log that reads like a technical detail and
isn't: self-reported confidence is a separate signal from evidence quality,
and it may never raise or lower the other.

Put plainly: a candidate can give a strong answer while reporting low
confidence, or a weak answer while sounding completely sure. Both happen
constantly. A system that folds those together produces feedback that's
wrong in a specific and damaging direction.

## What bias does this prevent?

The rationale names it directly: charisma and presentation bias. Polished
delivery inflating a weak answer; tentative delivery deflating a strong one.

That's the thing human interviewers do badly and know they do badly. It's
also the thing a model will do by default if you let delivery into the
evaluation, because fluency is the easiest signal in the transcript and
substance is the hardest.

So evidence scoring is content-anchored. What did the answer actually
contain: the decision, the reasoning, the trade-off, the outcome. Not how
smoothly it arrived.

## Three tracks, not one

This ends up as 3 separate things the system keeps:

- **Evidence**: what the answer contained, extracted per dimension, tied to
  the words that produced it.
- **Delivery observations**: things directly observable in the interaction.
  Coachable on their own. Never evidence.
- **Confidence rating**: the candidate's own self-report, given by them,
  never inferred.

The confidence number comes from the user. The system doesn't guess it from
speech, pace, hedging, or pauses. That's an explicit prohibition, not an
omission: the spec says the system may record grounded delivery observations
but must not infer a psychological state from them.

The difference matters. "You paused for 11 seconds before answering" is
an observation. "You seemed nervous" is a diagnosis, and the product has no
business making it.

## So why track delivery at all?

Because it's coachable and people want it coached. Rambling is real.
Burying the answer three minutes in is real. Those are worth telling someone
about.

They're just not the same conversation as whether the answer had evidence in
it, and the spec keeps them in separate columns so the feedback can say both
without one contaminating the other.

## What does it cost?

More state. Progress views have to carry three tracks and compare them
independently instead of collapsing to one line that goes up. Longitudinal
views can show evidence improving while self-reported confidence stays flat,
which is a genuinely useful thing to be able to see, and would be invisible
in a single score.

It also means I can't build the satisfying version of the progress chart.
The satisfying version is one number. The honest version is 3 lines that
sometimes disagree.

## The reason it matters to me

Someone who has been interviewing badly for six months and knows it will come
to this tool already braced for a verdict. If the system tells them their
answer was weak because they sounded unsure, it has taught them the wrong
lesson, which is that the fix is performance.

Sometimes the fix *is* performance. But it should be said as a separate thing,
about a separate thing, and not smuggled into an assessment of whether they
had the goods.
