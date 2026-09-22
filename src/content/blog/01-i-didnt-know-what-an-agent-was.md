---
title: I didn't know what an agent was
summary: >-
  Starting a build from genuine ignorance. What an agent actually is, and why
  that shape turned out to fit the thing I wanted to make.
project: ux-interview-coach
tags: [agents, beginnings]
draft: true
---

The first thing I said out loud about this project was:

> I think I want to create an agent. But I'm not 100% sure what an agent is
> or how it's built.

I'm putting that at the top on purpose. "Agent" has been doing a lot of work
in people's sentences for a while now, usually without being defined, and I'd
absorbed enough of it to want one without being able to say what one was.

Here's the definition I got, and it's the one I've been using since.

An agent is a system that takes a goal, breaks it into steps, uses tools when
it needs them, and keeps track of context well enough to finish something
over time. Structurally that's a planner, some memory, and connectors out to
tools or APIs, wrapped in guardrails, behind an interface.

What struck me is how unglamorous that is, and I liked it better for that!
4 parts, none of them exotic. What makes it an agent is *persistence*: the
thing holds a goal across turns instead of answering one question and
forgetting you existed.

## The problem turned out to be agent-shaped

I have a large spreadsheet of UX interview questions and answers, built up
over years of teaching. The questions are the kind Google and Amazon and
companies like that actually ask.

For a long time I thought of that spreadsheet as a content problem, get it
into a nicer format, publish it, done. But a question bank is only half of
interview practice. The other half is the part a book can't do: someone
listening to your answer, noticing what you left out, and asking the
follow-up that exposes it.

That's the part that needs to hold context. It has to remember what you said
three questions ago, notice that you still haven't mentioned a single
outcome, and decide whether now is the moment to push. A single prompt can't
do that. It needs a goal, memory, and the judgment to decide what happens
next.

Which is to say: I wanted an agent before I could define one, because the
problem is agent-shaped. Practising for an interview is a conversation that
accumulates.

## Why am I building this?

I'm building this as a portfolio piece. That is the actual reason the project
exists, and saying so up front matters, because a portfolio motive hidden
inside an engineering rationale quietly bends the engineering. I want to have
built a real agent, end to end, rather than have opinions about agents.

The risk in building for a portfolio is that you optimise for how the work
*looks* rather than whether it works. I'd rather come out of this with
something a nervous designer actually uses the night before an interview than
something that demos well.

So the log starts here, at not knowing what the word meant.

If you've been
nodding along in agent conversations without being able to define one either,
holler! I'd genuinely like to know I'm not the only one.
