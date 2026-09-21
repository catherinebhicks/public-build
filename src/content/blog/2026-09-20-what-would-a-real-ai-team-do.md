---
title: What would a real AI team do
date: 2026-09-20
summary: >-
  Planning the QA framework before there's anything to QA — golden datasets,
  regression suites, and release gates for a product whose output is prose.
project: ux-interview-coach
tags: [quality, evaluation, planning]
draft: true
---

Once the evaluation matrix existed, the obvious next question was how you'd
actually *enforce* it. Seven dimensions written in a doc are an intention.
What makes them real is machinery.

So the plan is to build the QA framework a mature AI product team would
have — before there's much product to apply it to.

## What that means concretely

**Release gates.** An explicit line between what blocks a release and what is
acceptable debt. Written down in advance, because the moment you're deciding
under pressure whether to ship, every problem starts looking acceptable.

**A human review rubric, with scoring.** A person reads real sessions and
scores them against the seven dimensions. Not vibes — a number, so two
reviewers can disagree in a way that's legible.

**A golden test dataset.** 100–200 benchmark interviews with known-good
assessments. This is the expensive part and the whole foundation. Without it
you cannot answer the only question that matters after a change: is it better
or worse than before?

**A regression suite.** Every prompt or model change runs against the
benchmark set before it ships.

**A prompt evaluation workflow**, so a change is approved or rejected on
evidence rather than on whether it looked better in the one example someone
tried.

**Acceptance thresholds.** No prompt, calibration, or model update ships
without clearing them.

## Why this early

Because of how this kind of product fails. It doesn't crash. There's no stack
trace and no red test.

Someone rewords a prompt to fix one annoying behaviour, and feedback quality
drops four percent across every session. Nobody notices for a month. By then
there have been thirty more changes and no way to bisect, because there's no
record of what "good" looked like before.

Traditional software fails loudly. This fails silently and gradually, and the
only defence is having measured the previous state. A golden dataset is
version control for quality.

There's also a discipline argument. Deciding the acceptance thresholds now,
while nothing is at stake, is much easier than deciding them the week I want
to ship something. Future me will be motivated to lower the bar. Present me
isn't.

## The portfolio argument, said plainly

I'll be honest that there's a second reason, and it's not purely engineering.

Most AI portfolio projects are a demo. They show the happy path, and they
stop exactly where the hard questions start — how do you know it works, how
would you know if it broke, what stops it degrading. Having real answers is
the difference between a project that looks like a prototype and one that
looks like a product someone maintains.

That's the intent, anyway. This one is a plan, not a finished thing — none of
it is built yet. Writing the plan down publicly is partly so that if I cut it
later, the cut is visible instead of quiet.
