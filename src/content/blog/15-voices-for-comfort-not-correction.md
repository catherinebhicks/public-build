---
title: Voices for comfort, not correction
summary: >-
  Offering an Indian English interviewer voice, and the line that had to be
  drawn around it before it was safe to build.
project: ux-interview-coach
tags: [voice, principles]
draft: true
---

We were working through voice options when I raised something:

> I like the idea of giving them someone with a heavy English accent because
> you might get that in an interview.

And then, more specifically, an Indian English option, because in tech hiring
that's frequently who you'll be talking to.

The feature is straightforward: a small curated set of interviewer voices
varying by gender presentation and English accent. 4 to start. A name, a
short tonal description, a play-sample button. Chosen during onboarding,
changeable between sessions.

The reason it needed care is that this feature sits about one degree away from
something genuinely harmful, and the difference is entirely in the framing.

## The line

**The product does not judge, correct, or rank the candidate's accent.**

Here's the adjacent product nobody should build. You offer accent options.
Then you notice you're processing the candidate's speech too. Then someone
suggests feedback on *their* clarity. And now you've built an accent-reduction
tool wearing an interview coach's clothes, a product that tells people their
way of speaking is a defect to be corrected.

There is a real market for that, and it does real damage. It takes a form of
prejudice the candidate will encounter and relocates it inside the tool that
was supposed to help, with the authority of software.

So the boundary is explicit in the spec, in both directions:

- **Interviewer** voice variety is offered, for listening familiarity
- **Candidate** speech is never assessed for accent, pronunciation, or
  "clarity"

Same audio pipeline, completely different stance toward the person using it.

## So what is the feature actually for?

Listening comprehension is a real interview skill, and it's invisible until it
bites you.

If you've mostly heard one kind of English, a first-round call with an
interviewer whose accent is unfamiliar costs you attention. Not because
anything's wrong with either of you, but because comprehension takes a little
more processing, and that processing competes with the part of your brain
assembling an answer about a project from three years ago.

That's a rehearsable skill. Hearing a question in an unfamiliar accent for the
10th time is easier than the first. The practice environment is exactly where
that cost should be paid.

The framing in the spec:

> Voice/accent options are for listening comfort and interview preparation,
> never accent correction.

Same words, different direction. One prepares you for a person you'll meet.
The other tells you you're the problem.

## Two products, one design principle apart

Because from the outside these two products look nearly identical. Both offer
accent options in a voice picker, and the difference is a design principle
that lives in a document.

Principles that exist only in someone's head get eroded by reasonable-sounding
feature requests. "Could we flag when the candidate is hard to understand?"
sounds helpful. Having the boundary written where someone can point at it is
what makes it answerable with a no that doesn't need re-litigating.

A related one from the same session, on multilingual support: English only in
V1, but architected so other languages can be added.
