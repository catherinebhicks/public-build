---
title: Seven things good feedback has to do
summary: >-
  The evaluation matrix that went into the spec — the dimensions the agent's
  own output gets judged on, and where they came from.
project: ux-interview-coach
tags: [rubric, evaluation, spec]
draft: true
---

Deciding that [the rubric comes first](/public-build/posts/04-the-rubric-comes-first/)
raises an immediate second question: who grades the grader?

The rubric judges the candidate's answer. But the agent's *feedback* is also
a thing that can be good or bad, and "the model said it" is not a quality
bar. So this went into the spec as its own evaluation matrix — seven
dimensions the agent's output is held to.

| Dimension | Focus |
|---|---|
| **Grounding** | Every critique must be supported by what the candidate actually said. |
| **Actionability** | Feedback must contain concrete, usable next steps — not generic advice. |
| **Impact / Usefulness** | Focus on the changes that will materially improve interview performance. |
| **Directness + Respect** | Honest critique without being rude or discouraging. |
| **Balanced Feedback** | Strength → critique → actionable improvement → encouraging close. |
| **Probe Quality** | Follow-up questions must be justified by meaningful evidence gaps. |
| **Practice Improvement** | The candidate should measurably improve over retries and sessions. |

A few of these deserve explaining, because they're not obvious and a couple
of them are there to prevent a specific failure I've watched happen.

**Grounding** is the load-bearing one. It means the agent cannot critique
something the candidate didn't say. This sounds trivial and isn't — the
natural behaviour of a language model asked for feedback is to produce
feedback-shaped text, including plausible criticisms of things that were
never in the answer. Being told you were vague about a metric you actually
stated clearly is worse than no feedback, because now you don't trust any of
it.

**Directness + Respect** is one axis, not two, deliberately. Splitting them
lets a system be maximally kind by being useless, and score well. Pairing
them forces the trade-off into the open: say the true thing, say it in a way
someone can hear.

**Balanced Feedback** is lifted straight out of how I teach. Strength,
critique, actionable improvement, encouraging close. That's the sequence I
use with students, and it's in the spec because a rubric written from scratch
would have been a worse version of something I already know works.

**Probe Quality** governs follow-ups. The agent should push when there's a
real, recoverable gap in the evidence — not to seem thorough. A follow-up
that exists to look rigorous trains you for an interviewer who doesn't
exist.

**Practice Improvement** is the only one that can't be judged from a single
session, and it's the one that matters most. If someone runs five sessions
and gets no better, every other dimension can be scoring perfectly and the
product has failed. It's the hardest to measure and I don't fully know how
yet.

## Why this is in the spec and not in a prompt

Writing these down converts a vague standard into something testable. Each
dimension is a question you can ask of a real transcript and get a defensible
answer to. Which means it can be reviewed by a human, and eventually
regression-tested.

The line I keep coming back to, from the conversation where this got written:

> The goal isn't to sound like a smart AI — the goal is to help people become
> better interviewers.

Seven dimensions are how I intend to tell the difference.
