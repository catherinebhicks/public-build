---
title: I changed my mind mid-sentence
summary: >-
  I said yes to giving people example answers, then reversed myself two turns
  later. The stale yes survived in the PRD for days and contradicted the
  product's own stated principle.
project: ux-interview-coach
tags: [prd, principles, reversals]
draft: true
---

We were deep in edge cases. The question was what happens if someone asks for
an example answer, and my first response was immediate:

> If they ask for answers like, how would I answer that? Absolutely give them
> an answer.

Two turns later, asked whether that meant a full draft or an outline, I
reversed myself in real time, and you can watch me get there:

> Outline. I think in this case, what should I say? You should say What— Oh.
> **Ooh, this is a good one. My brain. Okay.** Tell them we won't tell them
> what to say but we will guide them into key points that they can make. Does
> that make sense?

And later, sharper:

> I don't want to give them something they can just memorize rote.

The second answer is right. The first one made it into the PRD anyway, as a
clause in Section 26, User-Controlled Help, permitting *a generic example
answer if explicitly requested*. It sat there contradicting the document's own
first principles for days before a consistency review caught it.

## Why did I say yes the first time?

I'd make the same mistake again, because the sympathetic case is vivid.

Someone is stuck. They've been staring at "tell me about a time you disagreed
with a stakeholder" for 4 minutes and produced nothing. They ask for an
example, not to memorise, they say, just to see the shape. Saying no feels
pedantic, like withholding help to satisfy a principle they never agreed to.

That's a real moment and the instinct to help is correct. The clause was
written out of sympathy, which is the most dangerous reason to write anything
into a spec, because it feels like kindness right up until you look at what it
does.

## Taking it back out

Because the escape hatch turns out to be the main road.

If a generic example is available on request, the fastest route through any
hard question is to request it. The hard questions are the ones worth
practising. So the feature routes users around the only part of the product
that works, not through abuse, but as the rational response to being stuck.

And the output is unusable. You can't take a generic answer about disagreeing
with a stakeholder into an interview, because you didn't disagree with that
stakeholder. The interviewer's first follow-up lands on a story that isn't
yours and you're worse off than if you'd stumbled through something true.

Underneath all of it: interviewing is a performance skill, and improvement
requires practice, feedback, reflection, repetition. The discomfort of being
stuck in practice *is the practice*. That's the rep. Removing it feels like
help and isn't.

## The rule now

> Do not provide a canned or generic example answer for memorisation, even
> when explicitly requested. Instead, guide the user toward their own answer
> using relevant focus areas, evidence from their own experience, key points,
> memory-jogging questions, and an appropriate structure such as STAR when
> useful.

Note what that is. You ask for help, you get help, just not the kind that does
the work for you.

Memory-jogging questions are the mechanism: *what was the project, who
disagreed, what did you actually say, what happened afterwards.* Most people
who are stuck aren't missing an answer. They're missing a way back into their
own experience.

STAR is offered as a **scaffold to pour your own material into**, never a
template with the content pre-filled, and the system doesn't grade answers
against it either. A senior designer explaining a systems trade-off can give
an excellent answer that follows no STAR sequence at all.

## What did the reversal cost?

The stale clause survived several passes because both halves read as
reasonable in isolation. Principles at the top of a document are cheap, and
everybody writes "authenticity over scripting." What tests them is the clause
three sections down where honouring the principle means telling a user no.

The technical spec now carries the paper trail explicitly: *current decision
supersedes earlier exploratory discussion that considered example answers.*
That line exists so nobody, including me in three months, re-litigates a
settled question by finding the older text.

The version of me that wrote the escape hatch had the better intentions and
the worse product. Worth keeping the record of that.

**Revisit if:** user research shows a genuine need for examples as a teaching
aid. Even then they'd have to be clearly separated from the candidate's own
answer, not offered as a substitute for it.

If you've caught a contradiction like this in your own spec, I'd love to know
how long it sat there before anyone spotted it! I suspect days is on the
short side.
