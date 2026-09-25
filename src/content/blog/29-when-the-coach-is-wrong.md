---
title: When the coach is wrong
summary: >-
  A wrong fact and a disputed judgment are not the same failure. Designing the
  correction path meant deciding what the candidate owns and what the coach
  still has to own.
project: ux-interview-coach
tags: [evaluation, trust, human-agent]
draft: true
---

The easy version of “the AI is wrong” is a transcription error.

The harder version is: *I heard your feedback and I think your judgment is wrong.*

I had been treating those as one problem. They aren't.

## If the source is wrong, fix the source

If the transcript says you managed 3 people and you actually managed 13, or the resume extraction assigns you the wrong role, the candidate is authoritative about that factual correction.

Once the correction is confirmed, subsequent feedback and re-evaluation use the corrected source. The original evaluation is not silently overwritten; a new traceable version is created from the corrected evidence.

That distinction matters. “Immutable history” cannot mean “we know this input is wrong but we're going to keep grading you against it.”

The history stays. The error does not remain authoritative.

## If the interpretation is disputed, don't fake agreement

The other case is different.

The transcript is accurate. The evidence is accurate. The coach says the answer did not demonstrate enough influence for the target level, and the candidate disagrees.

The candidate does **not** directly edit the rubric result.

That felt important once I wrote the responsibility boundary down. The candidate owns their experience and factual corrections. The evaluator owns the evidence-grounded assessment. Letting someone simply change the assessment would make the report meaningless.

But “the AI owns the assessment” can't mean “the AI gets the last word because it is the AI,” either.

The product has to make the assessment inspectable: what evidence it used, what it considered missing, and how that maps to the rubric. If the dispute exposes a factual problem, correct the source and re-evaluate. If it is genuinely a disagreement about interpretation, preserve that disagreement rather than manufacturing a different judgment.

## Feedback is derived, not source of truth

This gave me a cleaner hierarchy than I had before.

The candidate's experience, corrected transcript, and explicit factual statements are source material. Evidence extraction and rubric assessment are derived from that material. Feedback is another derived layer on top.

So you don't edit feedback until it says what you want. You correct the thing it was derived from when that thing is wrong, then regenerate the dependent output.

And every version remains traceable.

## The failure becomes an evaluation case

A dispute is also product data.

Not training data. Not a silent signal that changes the model. An **evaluation case**.

If a candidate flags feedback as inaccurate or unfair, that case should be reviewable against the rubric and the source evidence. If the system made the wrong call, it belongs in the regression set so the same failure can be tested after a prompt, model, rubric, or orchestration change.

That closes a loop I had left as “TBD”: the candidate gets a correction/dispute path, the historical record stays intact, and a bad coaching decision has somewhere useful to go besides a support inbox.

The important part is that none of those require pretending the human or the AI is automatically right about everything.

They are authoritative about different things.
