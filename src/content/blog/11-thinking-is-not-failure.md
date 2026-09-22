---
title: Thinking is not failure
summary: >-
  How long the coach waits before it says anything, and why that one question
  about silence ended up choosing a vendor.
project: ux-interview-coach
tags: [voice, accessibility, product-decisions]
draft: true
---

We were walking through the interview states, ask the question, listen,
capture, when I stopped on something that seemed small:

> I don't want to be spoken over in a long pause. I may just be thinking, but
> I need to have some level of timeout.

It turned out not to be small at all. It selected a vendor!

## Why is silence so hard to get right?

A voice system has to decide, continuously, whether you've finished talking
or are just between words. Get it wrong one way and it interrupts you
mid-thought. Get it wrong the other and it sits there while you wait,
wondering if it's broken.

For most voice products this is a minor annoyance. For this one it's close to
the whole experience. An interview is *made of* pauses. You're retrieving a
project from three years ago and assembling a narrative live. Being cut off
mid-retrieval is both infuriating and a bad rehearsal for the real thing.

That requirement is why the speech-to-text choice landed on **AssemblyAI**:
it does end-of-turn detection rather than naive silence thresholds, telling
the difference between a pause and a finished answer. It sits behind an
adapter like every other provider, so it's replaceable, but it was picked for
this reason specifically.

A product decision about respect chose an infrastructure component. That
happens more than I expected ..

## The actual numbers

- **6 to 8 seconds** of silence before any gentle check-in. Long enough
  to think; short enough not to feel abandoned.
- **1 prompt**, not repeated nagging.
- **90 seconds** and no answer started: move on.
- **2 minutes** if they're mid-answer and working through it.

The distinction in those last two is the point. Someone who hasn't started is
in a different situation from someone who's stammering through it. The first
may need rescuing. The second is *doing the thing* and should be left alone.

Mock mode stays quieter longer and offers no hints, because that's the
realistic behaviour.

## Repeated stalls are not a signal

An early suggestion was to treat repeated stalls as a reason to intervene. I
didn't agree. Repeated stalls are just someone working through it.

This became a principle in the spec: thinking, stammering, processing time,
disability, anxiety, and conversational pacing must not be interpreted as
failure. A system that reads hesitation as weakness is going to systematically
misread neurodivergent candidates, non-native speakers, people with speech
disabilities, and anyone who is simply nervous, which is nearly everyone
doing interview practice.

It also connects to a decision made elsewhere: **confidence is self-reported,
never inferred.** The system does not guess how you felt from your speech
patterns, pauses, vocabulary, accent, or communication style. It asks you.

## No per-answer countdown

Related, and decided on the same principle: there's a **session** timer, not a
per-answer one.

You should be able to see where you are in a 30-minute interview, since
that's real pressure worth rehearsing. But a countdown ticking down inside a single
answer is artificial pressure that doesn't resemble an interview. Nobody puts
a visible clock on your STAR story.

If session time runs out mid-answer, you finish. The system records the
overrun and mentions it in the pacing feedback afterwards, which is the
useful version of that information, *you gave yourself two minutes on the last
question*, delivered when you can do something with it rather than while
you're still talking.
