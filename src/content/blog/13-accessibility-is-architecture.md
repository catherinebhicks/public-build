---
title: Accessibility is architecture
summary: >-
  Committing to WCAG 2.2 AA before anything was built, and the feature that
  commitment immediately forced into V1 scope.
project: ux-interview-coach
tags: [accessibility, scope]
draft: true
---

Partway through scoping, I interrupted the flow of questions:

> And we have to have a level of AA accessibility in everything we build.

Later, asked to confirm it: **"That's a non-negotiable."**

The commitment itself isn't the interesting part. I'd have made it regardless.
What I want to record is what happened in the next 60 seconds.

## The question that followed

The very next question was whether voice was the only input, or whether typed
answers were needed in V1.

And the answer wasn't a preference. It was an inference:

> Well, I would assume if it's accessible, we need to have another input
> option, right?

That's the whole argument for deciding accessibility early, in one exchange. A
voice-only interview product is unusable for people who are Deaf or hard of
hearing, people with speech disabilities, people whose speech recognition
consistently fails them, and people who simply can't talk out loud right now.
There's no overlay that fixes that. The alternative input either exists or the
product excludes those users.

So typed answers went into V1 scope, with the ability to switch modality
mid-session, because the commitment made it structural rather than optional.

And having built it, it turns out to be for everyone! people on a train, in an
open-plan office, in a noisy room where transcription is going to be bad
anyway. The usual curb-cut result. It was decided for disabled users and
everyone gets it.

## So why isn't this polish?

The reason this can't be retrofitted is that accessibility here goes well past
contrast ratios and alt text. It's interaction architecture, and there are 8
pieces of it:

- **Timers** that announce themselves to screen readers without interrupting
  someone mid-answer
- **Focus management** across the 4 live interview states: asking,
  listening, evaluating, coaching
- **Live status announcements** that convey "the interviewer is thinking"
  without visual-only cues
- **Transcripts** and the interaction for correcting them
- **Modality switching** mid-session
- **Error and reconnect messaging** that's perceivable when you can't see a toast
- **Microphone permission** flows that work from the keyboard
- **Session pacing** that a screen reader user can follow

Every one of those is a decision about how the interview *behaves*. Retrofitting
means redesigning the core loop. That's why it's in the spec as a V1
requirement rather than a later pass.

## Accommodations mid-session

One more that follows from the same thinking: you can change pacing and
accessibility settings **during** a session, without restarting.

Because people don't always know what they need before they start. You
discover the interviewer is talking too fast in the middle of question two.
Forcing a restart to fix that means losing the session as the price of
noticing what you need, which punishes the exact self-knowledge the product
should be building.

It's also, not incidentally, how accommodations work in a real interview. You
can ask.

## Testing it

The commitment is only real if something checks. When testing strategy came
up, the initial plan had accessibility regression checks in the "later" pile.
I moved them into V1.

So: **automated WCAG 2.2 AA regression checks in CI, plus manual keyboard and
screen-reader passes**, and accessible PDF requirements for the exported
summary. Lightweight, but explicit and blocking.

A non-negotiable that nothing tests is an intention.

If you've retrofitted AA onto a live interview or voice product, I'd really
like to hear how it went. I'd rather learn the expensive parts from someone
else's build than my own.
