---
title: Personalising your interview isn't consent to train on it
summary: >-
  I asked what we'd actually give up by not training on user data. The answer
  made the decision easy, and separated two things that look like one.
project: ux-interview-coach
tags: [privacy, consent, product-decisions]
draft: true
---

When privacy came up, my first instinct was simple:

> I just want users to know we're not training on their data. That's the only
> thing I want to make sure they know.

Then I asked the more useful question. What do we actually *get* from
training on their data, and what do we miss out on by not?

## So what would we actually give up?

Almost nothing, for this product.

Not training on user data doesn't prevent personalising within a user's own
experience. You can still save their stories, track what they struggle with,
notice recurring gaps, and tailor follow-ups. All of that is reading their
data *for them*, during their session. None of it requires their transcripts
to end up in a training corpus.

What you give up is the "thousands of real interviews make our model smarter"
story, which for V1 is a story rather than a capability. There's no model being
trained here. There's a general-purpose model being prompted with a rubric and
a question bank.

So the trade was: give up a marketing narrative, keep an unambiguous privacy
promise. Easy.

Default off. Explicit opt-in if we ever want it, revocable at any time.

## The distinction that came out of it

This produced a rule I think is the most important privacy decision in the
project, because it separates two things that look identical from the outside.

> **Using someone's information to personalise their own interview is not
> permission to use their data to improve the product.**

Both involve uploading a resume. Both involve the system reading it. From the
user's side, the same action. But they're different purposes with different
beneficiaries, and collapsing them is how consent gets manufactured. You
accept "help me practise" and unknowingly also accept "and become training
data."

So the UI has to clearly distinguish *use this as context for my interview*
from any optional data-contribution consent, and the first never implies the
second.

## What that means for uploads

Personalisation is progressive and entirely optional, and generic questions
are always available. Nothing is required. 5 inputs, and you can skip all of
them.

- **Job description**: optional. Used to *weight* question selection, never
  to hard-filter it. Real interviews contain unexpected questions; a system
  that only asks JD-derived questions builds false confidence.
- **Resume**: optional, and **session-only by default**. It persists only if
  you explicitly choose to save it, because a resume carries far more personal
  information than the system needs to keep just because it was useful once.
- **LinkedIn URL**: optional, and reasonably storable, since it's a
  public-facing page rather than a private document. Still user-controlled.
- **Company info**: looked up, then **confirmed by you** before use.
- **Portfolio**: cut. Discussing a project and evaluating a visual portfolio
  are different tasks needing different inputs. That's a different tool.

The company-confirmation step exists because an incorrect assumption at setup
distorts the entire interview. If the system guesses wrong about which
company you mean, every question is tuned to the wrong context and you won't
necessarily notice. So it shows what it inferred, and your edit is
authoritative.

Same pattern with focus: before starting, it shows what it plans to focus on,
and you can edit it directly. The edited version wins.

## Consent as history

One structural decision that follows. Consent is an **append-only event
log** rather than a boolean.

A single true/false can't answer the questions that matter if anyone ever
asks: what did they agree to, what policy language did they see, where were
they when they chose, when did they grant it, did they later revoke it. Each
consent event records all of that and links to the one it supersedes. Sessions
carry a snapshot ID, so any session can say which consent state was live when
it ran.

The companion rule: **required processing is never dressed up as optional
consent.** Some processing is necessary to provide the service at all.
Presenting that as a choice you could decline while still using the feature is
a lie with a checkbox on it. Consent is reserved for genuinely optional
persistence and secondary use.
