---
title: The contradiction in my own spec
date: 2026-09-20
summary: >-
  A consistency pass found my PRD arguing with itself: a stated principle
  against scripting, and a clause permitting exactly that. Resolving it
  meant refusing users something they will explicitly ask for.
project: ux-interview-coach
tags: [prd, principles, reversals]
draft: true
---

A consistency pass through the PRD turned up the product arguing with
itself.

The principles at the top are unambiguous. Coaching over answer generation.
Authenticity over scripting. Feedback should help candidates sound more like
themselves, not like AI. The agent surfaces gaps and asks focused questions;
it does not rewrite your answer for you.

And then, further down in Section 26 — User-Controlled Help — a clause
permitting the coach to provide **a generic example answer if explicitly
requested**.

Both of those were written by me, in the same document, and I hadn't noticed
they couldn't both be true.

## Why the clause was there

I know exactly why I wrote it, because I'd make the same argument again.

Someone is stuck. They've been staring at "tell me about a time you
disagreed with a stakeholder" for four minutes and produced nothing. They ask
for an example — not to memorise, just to see the shape of the thing. Refusing
feels pedantic. Worse, it feels like the tool is withholding help to satisfy
a principle the user never agreed to.

The clause was an escape hatch for the moment the coaching stance becomes
unhelpful. It was written out of sympathy, which is the most dangerous reason
to write anything into a spec.

## Why it had to go

Because the escape hatch isn't an edge case. It's the main road.

If a generic example answer is available on request, the fastest path through
any hard question is to request it. The hard questions are precisely the ones
worth practising, so the feature routes users around the only part of the
product that works. Not as an abuse — as the rational response to being stuck.

And you can't use the output. You cannot take a generic answer about
disagreeing with a stakeholder into an interview, because you didn't disagree
with that stakeholder. The interviewer's first follow-up lands on a story
that isn't yours, and now you're worse off than if you'd stumbled through
something true.

The clause offered relief from the discomfort of being stuck. But being stuck
in practice *is the practice*. That's the rep. Removing it feels like help and
isn't.

## The rule now

> Do not provide a canned or example answer for memorisation, even when
> explicitly requested. Instead, guide the user toward their own answer by
> focusing them on the relevant evidence, key points, context, memory-jogging
> questions, and an appropriate structure such as STAR when useful.

Note what that isn't. It isn't refusal. The user asks for help and gets help
— just not the kind that does the work for them. Memory-jogging questions are
the mechanism: *what was the project, who disagreed, what did you actually
say, what happened afterwards.* Most people who are stuck aren't missing an
answer. They're missing a way back into their own experience.

STAR is offered as a **structure to pour their material into**, never as a
template with the content pre-filled.

The distinction is narrow and it's the whole product. Give someone a
scaffold, and they build something that's theirs. Give them a finished
answer, and they have a script they'll deliver badly under pressure.

## What I'm taking from this

The contradiction survived several passes because both halves read as
reasonable in isolation. Principles at the top of a document are cheap —
everyone writes "authenticity over scripting." What tests them is the clause
three sections down where honouring the principle means telling a user no.

I'm logging this one because the version of me that wrote the escape hatch
had the better intentions and the worse product.
