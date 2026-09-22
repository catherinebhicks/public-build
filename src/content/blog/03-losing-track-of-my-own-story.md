---
title: I lost track of my own story
summary: >-
  I tested the interview loop on a project I know inside out, and couldn't
  remember what I'd already said. That produced a feature, and then a second
  mode, because the feature would have ruined a mock interview.
project: ux-interview-coach
tags: [modes, product-decisions]
draft: true
---

I was testing the interview loop on myself. The question was "tell me about a
project you're proud of," and I picked my eBay work, the first senior-level
project I did, back when I was still a mid-level designer doing senior-level
work. I know it inside out and upside down!

4 or 5 follow-ups in, I'd lost track of what I'd already told it.

Not the project. The *telling* of it. I couldn't remember whether I'd
mentioned the outcome, whether I'd explained why we moved to new patterns,
what I'd already covered and what I was repeating. I was spending attention
on recall instead of on answering.

That's a real failure, and it wasn't the AI's. It's what interviews do to
people. You're constructing a narrative live, under pressure, with no way to
see what you've built so far.

## The feature

So the agent maintains a **running story**, a structured record of the
candidate's emerging answer. Not a transcript. A model of the evidence across
10 dimensions: context, ownership, decisions, reasoning, trade-offs,
collaboration, influence, execution, outcomes and reflection, plus what's
still missing from each.

It's built from what the candidate actually said, with every item traceable
back to the turn it came from. It reflects; it does not rewrite. The moment
it starts polishing your story into a better-worded version of your story,
it's doing the thing this product exists not to do.

The reason it has to be a model and not a log is that interview answers
develop out of order. Someone gives you the outcome four questions later.
Context for question one shows up in the middle of question three. A system
that treats each answer as isolated text can't notice that the gap it was
about to probe got filled three questions back.

## So why not just show it to them?

Showing someone their running story mid-interview is enormously helpful. It's
also completely unrealistic.

No interviewer hands you a live summary of how your answer is landing. A
product that did that in a mock interview would be training you for a
situation that will never happen, and the whole point of a mock is to
rehearse the real conditions, including the discomfort of not knowing how
you're doing.

So the honest answer was that I'd found a feature that made one thing much
better and another thing worse. Those pull in opposite directions and there's
no setting that splits the difference well. Trying to compromise gets you a
mediocre learning tool *and* an unconvincing simulation.

## Two modes

**Practice Mode** exposes the process. It probes, it surfaces the running
story, it stops when you're stuck and switches to coaching, it lets you retry.

**Mock Mode** prioritises realism. Follow-ups look like an interviewer's
follow-ups. The story model keeps building silently, and is revealed with
the feedback at the end. No hints, no scaffolding, no visible machinery.

The thing I want to flag, because it's the part that's easy to get wrong: **mode
is not a UI setting.** It changes the agent's decision policy. Same evidence
model underneath, different rules about when to intervene. If it were just a
toggle that hid a panel, mock mode would still be a coach wearing a costume.

## Switching mid-session

You can move from Mock into Practice between questions.

Because the realistic thing that happens is you start a mock interview,
discover two questions in that you're nowhere near ready for simulation, and
need coaching instead. Making you throw away the session and start over
punishes you for noticing. The switch happens *between* questions rather than
mid-answer, so the interviewer doesn't lurch character in the middle of your
sentence.

The general principle I keep landing on: when a user realises they need
something different, the product's job is to adapt, not to make them pay for
the realisation.
