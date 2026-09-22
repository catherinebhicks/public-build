---
title: The connector that wouldn't read
summary: >-
  An afternoon lost to a tool that kept failing, and a fix that had nothing to
  do with the tool.
project: ux-interview-coach
tags: [tooling, dead-ends]
draft: true
---

This one is here because the log would be dishonest without it. Most of a
session went to a problem that produced no feature.

The spec and the rubric live in Google Docs. I was working through the
Google Drive connector to read and update them, and the reads started
failing. Not on anything exotic, just a basic document read, returning
nothing.

The first useful thing that happened was a refusal. Rather than retry the
write and hope, the work stopped:

> I won't touch the document until the read succeeds, because we've already
> done a lot of formatting work in there and I don't want to corrupt it.

That's the right call and it's worth naming as a principle. A failing read
before a write is not a reason to push harder. It means you don't know the
current state of the thing you're about to overwrite, and a blind write into
an unknown state is how you lose an afternoon of formatting instead of ten
minutes of debugging.

## What I thought was wrong

My assumption was that the document was the problem. Something about that
table, some formatting that had got into a bad state, maybe the edits we'd
already made.

It wasn't. Every attempt to work around it *at the document level*, different
edits and different approaches to the same table, failed the same way, which
should have been the clue earlier than it was. When every variant
of an operation fails identically, the variable you're changing isn't the
one that matters.

## The fix

Stop reading the whole document. Read the table cells directly.

That worked immediately! I'll admit to being fairly pleased about that after
an afternoon of the other thing. The failure was the *full document read*, not Google
Docs and not the table. Narrowing the operation to just the cells I needed
sidestepped whatever was choking on the whole file, and the empty table got
found and populated safely.

## What I took from it

**Narrow the operation before you widen the investigation.** I spent the time
asking "what's wrong with this document?" when the productive question was
"what's the smallest read that would get me what I need?" The smaller
operation both worked *and* would have diagnosed the problem faster, because
its success immediately located the fault in the full-read path.

**A tool failing on its default path doesn't mean the tool is unusable.**
Connectors have several routes to the same data and they don't fail together.

**Refusing to write is a feature.** The instinct under friction is to force
the thing through. Everything downstream of this project depends on documents
I can't easily reconstruct, and "don't write into a state you can't read"
is a rule worth holding rather than relearning.

No feature shipped. Keeping it in anyway.

If you're hitting the same thing with a document connector, holler. The fix
took 2 minutes once I stopped asking the wrong question.
