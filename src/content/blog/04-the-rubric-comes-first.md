---
title: The rubric comes first
summary: >-
  The temptation is to hand an answer to a model and ask what it thinks. The
  first real decision was to refuse to do that.
project: ux-interview-coach
tags: [rubric, evaluation]
draft: true
---

There's an obvious way to build an interview feedback tool, and it takes
about an hour. You take the candidate's answer, you hand it to a model, and
you ask: how was that?

You will get feedback. It will be fluent, it will be plausible, and you will
have no idea whether it's right.

The first real decision on this project was not to do that.

## Rubric, then scoring, then examples

The approach I'm taking instead: define a clear rubric before anything else —
criteria, scoring, and worked examples — then have the system map each answer
onto that rubric, and generate feedback from the mapping. Strengths, gaps,
next steps.

The order matters. The rubric isn't documentation written after the fact to
explain what the model does. It's the thing the model is *held to*.

Two properties come out of this that I care about more than fluency:

**It's reliable.** The same answer gets assessed against the same criteria
every time. Without a rubric, feedback quality drifts with phrasing, with
model version, with how the prompt happened to be worded that week — and
drift is invisible. Nothing errors. The advice just gets quietly worse.

**It's explainable.** When the system says an answer was weak on impact, it
can point at the criterion and at the part of the answer that triggered it. I
can show a user why. I can show *myself* why, which is how I find out the
rubric is wrong.

## What this costs

It's slower. The fast version exists and I'm not building it.

It also front-loads the hard thinking. Writing the rubric means committing to
what a good answer to a UX interview question actually contains — at junior
versus senior, for behavioural versus hiring-manager questions. That's a
teaching problem, not an engineering one, and it's the part of this project
where my actual expertise lives. I suspect it's also where most of the
project's value will end up.

The model is the easy part. Everybody has the same models. What's mine is the
question bank and the standard I hold answers to.

## The thing I'm guarding against

The failure mode I keep coming back to is a tool that gives people polished
answers instead of better ones. It would be easy to build. It would even feel
helpful — you'd read the output and think, that's better than what I said.

But you can't take a generated answer into an interview. You have to say
something that's actually yours, under pressure, out loud. A tool that hands
you a script has made you worse at the thing you came to practise, while
feeling like it helped.

Grounding every critique in the rubric, and in what the candidate actually
said, is the mechanism that stops it. That's why the rubric comes first.
