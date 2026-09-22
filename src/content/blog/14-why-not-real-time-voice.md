---
title: Why not real-time voice
summary: >-
  Voice-to-voice feels better and I didn't pick it. Trading polish for
  something I could open up and look inside.
project: ux-interview-coach
tags: [voice, architecture]
draft: true
---

Voice is in V1, and that was never really in question. Interviews are spoken.
Practising only by typing rehearses the wrong skill. You can write a clean
paragraph about a project and still fall apart saying it out loud, which is
the failure mode the product exists to fix.

The open question was *how*, and there are two ways.

**Real-time voice-to-voice.** One model takes audio in and puts audio out. It
feels like a phone call. It's smooth, it handles interruption naturally, the
latency is low enough to feel alive.

**Modular.** Break it into steps: speech to text, the agent reasons over the
text, text back to speech.

```
speech → STT → text → agent → text → TTS → audio
```

I went modular, and I want to be honest that it's the worse-feeling option.

## What did I trade away?

Real-time voice-to-voice is a better *experience*. Fewer moving parts in the
path, lower latency, more natural overlap. If the only goal were making the
mock interview feel like a real conversation, it's the right call.

What you give up is the ability to see inside. When audio goes in and audio
comes out, there's no inspectable middle. If the interviewer asks a bad
follow-up, you can't tell whether it misheard the answer, extracted the
evidence wrong, or made a bad decision from correct evidence. Those are 3 different
bugs with 3 different fixes, and the monolithic pipeline gives you one symptom
for all of them.

The modular version has a text transcript at every boundary. I can look at
what it heard, what evidence it extracted, what it decided, and why. Each
piece can be tested on its own, and each can be swapped, since every provider
sits behind an adapter, so replacing the STT vendor doesn't mean rebuilding the
product.

## The portfolio reason

There's a second reason and it isn't purely engineering.

This is a portfolio project. A pipeline I can open up and explain is worth
more to me than one that feels slightly smoother. I can show the decision
points, the structured outputs, the place where the agent decides to probe.
Voice-to-voice is a black box, and a black box makes a bad case study no
matter how well it performs.

Better to be straight about that than to pretend the architecture was chosen
on purely technical merit. It's a real input. It's also the kind of thing that
usually goes unrecorded, so the reader assumes the engineering was inevitable
when it wasn't.

The mitigation is that the modular route doesn't foreclose the other one.
Polish can come later, and the seams are where the upgrade would go.

## No voice cloning

Worth stating since it's the obvious next idea: **no voice cloning in V1.**

It adds consent, privacy, security, and abuse problems, since you're accepting
biometric data and taking on responsibility for what happens if it leaks or
gets misused, and it doesn't improve the core coaching proposition at all.
The candidate needs to practise *listening* to an interviewer. Whose voice
that is doesn't matter.

A curated voice library gets the same experience at a fraction of the risk.
