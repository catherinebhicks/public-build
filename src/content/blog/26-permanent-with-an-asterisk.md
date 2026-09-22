---
title: Permanent, with an eight-hour asterisk
summary: >-
  Deletion is immediate and irreversible from the user's side, and there is a
  short operational window where the data still exists. Both things are true,
  and the interface has to not lie about either.
project: ux-interview-coach
tags: [privacy, principles, product-decisions]
draft: true
---

When you delete your account, the spec says your access ends immediately and
the deletion is permanent.

It also says the content may sit in an inaccessible eight-hour recovery
quarantine before the purge begins.

Both of those are in the same decision, and reconciling them honestly is the
whole problem.

## Why does the window exist at all?

Catastrophic accidental deletion. Someone confirms a dialog they didn't read
and destroys a year of practice history. Every system that has ever offered
permanent deletion has fielded that email.

8 hours is a safety buffer for exactly that case. After it, the purge
starts and there is no application-level recovery.

## So why isn't it an undo?

The constraint attached to the decision: the UI must not imply a normal undo
after calling deletion permanent, and quarantined content cannot remain
normally accessible.

So there's no "restore" button. No greyed-out account waiting to come back.
No banner counting down. From inside the product, the account is gone,
because presenting it as recoverable would make the word permanent false.

The window is an operational capability, not a product feature. If you need
it, you're having a conversation with a human, and that conversation is the
exception rather than the flow.

That distinction is doing real work. The moment a recovery window becomes a
visible feature, it stops being a safety net and becomes a retention
mechanic, the thing where cancelling takes 4 screens and your data hangs
around for 30 days in case you reconsider.

## What survives

After the purge: a minimal, content-free tombstone. Enough to prove the
deletion happened, and nothing else. No ghost copies of transcripts sitting
in a table nobody remembers.

Deleting a single session cascades too, across questions, attempts,
transcripts, evidence, conversation context, decision events, confidence
records and report versions. The cascade is specified rather than assumed, because the thing
that goes wrong here is never the main table.

Backups age out under the retention policy, and there's a separate rule that
deleted content must not be restored into active state by a backup restore.
That's the bug nobody catches until it happens: the data was deleted
correctly, and then a restore brought it back.

## Why write this one down?

Because "permanently deleted" is one of the most routinely dishonest phrases
in software, and the honest version is slightly less impressive.

Better to write down the eight hours where anyone can read it than to ship a
sentence that's cleaner than the system.
