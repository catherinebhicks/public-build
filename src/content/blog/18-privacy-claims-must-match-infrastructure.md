---
title: Designed to support GDPR, not "GDPR compliant"
summary: >-
  Reviewing every vendor that would touch user data, and the rule that stops a
  product promising something its infrastructure can't deliver.
project: ux-interview-coach
tags: [privacy, vendors, compliance]
draft: true
---

Once retention periods were on the table — raw audio deleted after
transcription, telemetry ninety days, backups aging out at thirty — I asked
the obvious question. Does that meet GDPR?

The answer was more useful than a yes:

> Broadly, that kind of retention model is compatible with GDPR, but the exact
> numbers aren't dictated by the law. The key is that we define and justify
> our periods, minimise data, and honour deletion and access rights. I'd
> phrase it as **designed to support GDPR compliance**, not *it's GDPR
> compliant*.

Those numbers are logged as a proposed schedule pending legal review. Not
decided. Proposed.

That distinction became a general rule.

## The rule

> **Do not market the product as zero-retention, GDPR compliant, or similarly
> protected merely because a vendor offers those capabilities.**

A vendor's capability is irrelevant if your production account isn't
configured to use it. "AssemblyAI supports zero data retention" and "our
AssemblyAI account has zero data retention enabled on the plan we're actually
paying for" are different sentences, and only the second one is a promise you
can keep.

The corresponding line in the PRD: **the product must not make promises that
the underlying technical stack cannot guarantee.**

This is easy to get wrong sincerely. You read the vendor's privacy page, you
believe it, you write the reassuring sentence. The gap opens because the
capability exists on an enterprise tier and you're on the free one.

## The processor review

So every vendor that touches user data got reviewed — what it receives, for
what purpose, for how long. None came back as an automatic no. None came back
as approved either. They came back **conditional**:

| Processor | Gets | Condition |
|---|---|---|
| **AssemblyAI** | Raw audio, for transcription | Paid account, training opt-out confirmed, streaming zero-retention actually enabled |
| **OpenAI** | Transcript text + interview context | Likely approvable if zero data retention is contractually enabled |
| **ElevenLabs** | Generated coach text only — never candidate audio | Only with zero-retention on an enterprise plan. **Otherwise blocked** — pick another TTS |
| **n8n** | Minimal payloads, orchestration only | Strict retention and feature limits. No durable storage |
| **Supabase** | System of record | Region pinning, DPA, no content logging |
| **Vercel** | Hosts the app | No intentional transcript storage |

The ElevenLabs row is the one that matters most, because it's the one where
the answer might be no. Having a named alternative path — block it, choose a
different TTS — is what stops the decision being made later under deadline
pressure, when the honest answer is inconvenient.

Note what ElevenLabs *doesn't* get: the candidate's voice. Only the coach's
generated text. There's no reason to send someone's recorded speech to a
text-to-speech provider, so it isn't.

## Deletion is a workflow, not a row

Two decisions here that I hadn't thought about before this pass.

**Deleting a database row is not deleting someone's data.** Copies live in
processors, logs, derived records, and backups. So deletion is modelled
explicitly, cascading across derived artifacts, with tombstones and downstream
reconciliation.

**Don't resurrect deleted users from backups.** This is the one that genuinely
surprised me. Restore a thirty-day-old backup after an incident and you can
silently reinstate records a user deliberately deleted three weeks ago. They
asked you to forget them; your disaster recovery remembered.

So deletion tombstones have to survive a restore, or be reapplied after one.
It's an operational procedure, not a feature — and it's exactly the kind of
thing that gets discovered during an incident rather than during design, which
is why it's written down now.

## Why bother, on a portfolio project

Because privacy promises are the part of a product where the gap between
*what we said* and *what the system does* causes real harm to real people, and
because a case study that includes a conditional vendor register is a more
honest artifact than one that says "we take privacy seriously."

Also: nobody is going to make me do this. That's the argument for doing it
now, while it costs nothing.
