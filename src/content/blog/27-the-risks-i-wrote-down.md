---
title: The risks I wrote down
summary: >-
  A register of the ways this could fail, each with the signal that would tell
  me it's happening. Including the one that says the project is bigger than one
  person.
project: ux-interview-coach
tags: [planning, process, honesty]
draft: true
---

There's now a risks section. 8 entries, each with a trigger, the thing
that would tell me the risk has arrived, and a mitigation.

The trigger is the part that makes it more than a worry list. A risk without
one is just anxiety in a bulleted format; you can hold it indefinitely
without it ever becoming actionable. A risk with a trigger has a moment where
you have to do something.

Some of them are uncomfortable to have written down.

## The question bank is too thin

First on the list. The source workbook lacks all 4 of the fields the agent
needs: competencies, expected evidence, seniority modifiers, follow-up
triggers.

Trigger: a full session can't be assembled at one seniority level without
repetition.

Mitigation: define the enrichment method and a minimum viable count early,
and treat it as the critical path ahead of agent work.

This is the one I'm most likely to get wrong, because enriching a question
bank is tedious and building the agent is interesting.

## The coaching isn't good enough to be worth using

The product can work mechanically and still produce feedback nobody benefits
from. Everything routes correctly, the state machine is clean, the feedback is
fluent and useless.

Trigger: evaluation scores below the release bar on usefulness or specificity.

Mitigation: run the evaluation programme on real transcripts early rather than
at the end, which is when it would actually tell me something I could still
act on.

## Voice feels wrong because it's slow

Every turn goes through an orchestration round trip plus transcription plus
inference plus speech synthesis. Trigger: time-to-first-audio beyond the
budget. Mitigation: set the budget before building, and keep the option of
moving the live loop into application code, which the architecture already
anticipates, because I expected this one.

## People get evaluated worse for their accent

Transcription accuracy varies by accent, dialect, and disfluency. Those errors
don't stop at the transcript. They flow into evidence extraction, which means
a candidate can be assessed as having said less than they said.

Trigger: measurable accuracy differences across speaker groups in the
evaluation set. Which requires an evaluation set that contains those speakers,
which is itself a thing I have to deliberately build.

## Prompt injection through the things users upload

Resumes, job descriptions, LinkedIn content, and fetched company pages all
flow into a live agent. Trigger: any evaluation case where supplied content
changes agent behaviour. There's a section for the baseline defence and it's
currently empty.

## Privacy promises outrunning the configuration

Several user-facing commitments depend on provider settings and contracts
that aren't confirmed. Trigger: launch approaching with any processor still
conditional. Mitigation: reconcile each promise against the actual
configuration, and change the promise or change the provider.

That's the same rule as an earlier post, written as a risk instead of a
principle, which is a useful test of whether a principle is real.

## The scope is bigger than one person

The specified system is substantially larger than what one person ships
quickly. Trigger: no working end-to-end interview after the appetite I set.

Mitigation: vertical slices, and explicit deferral with the reasoning
recorded rather than things being silently dropped.

That's the entry I'd most like to have left out. It's the most obviously true
one.

## What am I assuming?

There's a shorter list of 6 things currently taken as true and worth
revisiting if any turns out false: that the workbook is usable as V1 content and its
provenance permits it, that the orchestration round trip is tolerable inside a
live turn, that English-first is acceptable for V1, that typed input fully
satisfies the accessibility requirement so voice can stay optional, and that
the model tier stays available and priced as assumed.

Any one of those going wrong changes the shape of the product rather than the
schedule. Which is why they're listed separately from the risks. A risk is
something that might happen to the plan, and an assumption is something the
plan is standing on.
