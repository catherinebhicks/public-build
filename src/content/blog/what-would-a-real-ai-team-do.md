---
title: Treat it like production
date: 2026-09-20
summary: >-
  Deciding the QA bar for a portfolio project, and the two qualities that can
  block a release.
project: ux-interview-coach
tags: [quality, evaluation, planning]
draft: true
---

Asked what level of QA I wanted — a formal sign-off with test cases, or a
looser spot check before pushing changes — my answer was:

> I'm building this with the idea that this is going to eventually become a
> product, even though it's probably not and it's gonna be a portfolio piece.
> I wanna mimic whatever level we would be doing if we were building this
> product for launch.

So: production rigour, on a project with one user who is also the developer.

That sounds like overkill. I think it's the opposite, for a reason specific to
how AI products fail.

## They fail silently

Traditional software fails loudly. There's a stack trace, a red test, a page
that won't load.

This doesn't. Someone rewords a prompt to fix one annoying behaviour, and
feedback quality drops a few percent across every session. Nothing errors.
Nobody notices for a month, by which point there have been thirty more changes
and no way to bisect — because there's no record of what "good" looked like
before.

The only defence is having measured the previous state. So the standard is
that a model, prompt, calibration, or orchestration change does **not** ship
because a few examples look good.

## What that requires

- **A golden test dataset.** The expensive part and the foundation. It
  deliberately includes strong, weak, incomplete, rambling, contradictory,
  highly polished, and stuck answers — plus cases designed to *tempt* the
  model into inventing evidence, over-coaching, giving generic feedback, or
  mistaking seniority for management.
- **A human review rubric with scores**, so two reviewers can disagree
  legibly. Reviewers use the documented rubric, not an informal "sounds good."
- **A regression suite.** Every prompt or model change runs against the
  benchmark set.
- **Per-case scores and reviewer notes preserved**, so a regression can be
  diagnosed rather than hidden inside one aggregate number.
- **Acceptance thresholds** — set *after* a baseline run, not invented before
  real examples exist. A blocking regression can't be waived ad hoc; it's
  fixed, or reclassified through a documented rubric change.

## Two qualities that block a release

Most evaluation dimensions are quality bars. Two are gates.

**Grounding.** The coach must not invent candidate evidence. A coach giving
mediocre wording advice is annoying. A coach confidently praising or
criticising something you never said destroys trust in everything else it
says — and you can't scope that damage, because once you've caught it lying
once you have to re-examine every assessment it gave you.

**Actionability.** Feedback has to give you something you can do. "Be more
specific," "show more impact," "use STAR" are failures unless the system says
what was missing and what to do next. The product exists for improvement
through practice; feedback that sounds intelligent and changes nothing fails
the entire value proposition.

Everything else can be a bit worse and the product still works. These two
can't.

## The real test, which I can't measure yet

> The goal isn't "did the AI produce impressive feedback?" The goal is "did
> the person get better at interviewing?"

Practice improvement is the ultimate product test, and it's the hardest to
measure. Candidate signals: stronger evidence across retries, clearer
reasoning, fewer recurring gaps, better structure, rising self-reported
confidence.

If someone runs five sessions and gets no better, every other dimension can be
scoring perfectly and the product has failed. I don't fully know how to
measure it yet. It's in the spec anyway, because leaving out the thing that
actually matters because it's hard to measure is how you end up optimising a
proxy.

## One more reason, said plainly

Most AI portfolio projects are a demo. They show the happy path and stop
exactly where the hard questions start: how do you know it works, how would
you know if it broke, what stops it degrading.

Having real answers is the difference between a prototype and something that
looks maintained. That's a second motive and I'd rather name it than pretend
this is purely engineering discipline.

None of it is built yet. Writing the plan publicly means that if I cut it
later, the cut is visible instead of quiet.
