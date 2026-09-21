---
title: Probe or move on
date: 2026-10-07
summary: >-
  The one decision that makes this an agent rather than a chatbot, and why the
  follow-up limit is a guardrail rather than a quota.
project: ux-interview-coach
tags: [agents, decisions]
draft: true
---

Every turn, the agent makes one real decision: stay on this story, or move to
the next question.

That decision is the thing that makes this an agent rather than a chatbot with
a question list. Everything else — asking, transcribing, summarising — is
plumbing. Choosing whether to dig is judgment.

I was uneasy about it early on, for a specific reason:

> I want it to mimic what a job interview would be like to the best of the
> ability that we can make AI. So I would assume sometimes they would follow
> up and sometimes they wouldn't. I don't want it to be so rote that we put it
> in a lane where it always has to follow up. That's not the way it would be
> in an interview.

Real interviewers are inconsistent. They follow up when something catches
their attention and move on when it doesn't. A system that always probes
isn't more thorough — it's less realistic, and it's exhausting.

## When to probe

Probe only when the missing evidence is:

- **important** to the question,
- **relevant** to the candidate's level,
- **plausibly recoverable** with one follow-up, and
- **likely to improve** the answer.

All four. The explicit non-rule is that all expected evidence must be present
— that turns hostile fast, and it produces an interrogation rather than an
interview.

The spec puts it bluntly: *the goal is a human-feeling interview, not
exhaustive extraction.*

## The cap, and why it moved

The first proposal was a default of one follow-up, second only if the first
clearly surfaced new evidence. The reasoning was humaneness — more than one or
two quick follow-ups starts to feel like cross-examination, and we want
practice, not pressure.

I pushed back, because I wasn't sure one was enough to actually surface
anything useful, and I didn't want to find out by rebuilding.

So it's **configurable: default two, testable from one to four**, set per
session, with every probe logged so we can see what actually helps.

The part that matters more than the number: **the agent must never consume the
available probes simply because they exist.** The cap is a ceiling, not a
target. If the evidence is there after zero follow-ups, it moves on. A system
that always asks exactly two follow-ups has replaced judgment with a quota,
which is the failure mode the whole design is trying to avoid.

Mock mode stays realism-first even when the configured cap is higher.

## Stop probing when someone is stuck

This one came out of testing the loop on myself. I hit a question I couldn't
answer and said, plainly, "I'm not sure how to answer that."

The wrong response there is to rephrase and ask again. Rephrasing the same
question does not become coaching just because an AI is doing it — it's the
same pressure with different words, and the person already told you they're
stuck.

So Practice Mode recognises the stall and switches from probing into coaching.
The rule I settled on: **probe while they're discovering, coach when they're
stuck.** The tell is whether the last answer added anything. If each follow-up
is producing new material, keep going. If it's producing apology and
repetition, stop asking and start helping.

Mock Mode behaves differently, because realism takes priority. It banks the
gap and raises it at the end.

## The decision object

Deliberately tiny. It answers one question: *what should the interviewer do
next, and why?*

- **decision** — probe or move on
- **justification** — a short note tied to the evidence model
- **probe counter** — guard against exceeding the cap

Everything else lives in the evidence and state objects. Keeping this small is
what makes the agent's behaviour auditable — every choice to dig or not has a
recorded reason pointing at a specific gap, so when it feels wrong I can go
look at why rather than guessing at a prompt.
