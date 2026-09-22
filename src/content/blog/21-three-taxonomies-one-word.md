---
title: Three taxonomies and one overloaded word
summary: >-
  A consistency review across the PRD and the technical spec found three
  different evidence models coexisting, and two unrelated concepts sharing a
  name. Neither had been noticed because nothing forced them into the same
  sentence.
project: ux-interview-coach
tags: [spec, process, reversals]
draft: true
---

I did a full consistency pass across the PRD and the technical specification
this weekend. It found more than I expected, and the interesting part isn't
the list. It's why none of it had surfaced on its own.

## Three evidence models

The evidence taxonomy, the 10 dimensions an answer gets read against, existed
in 3 different versions across the two documents. Not contradictory in
any obvious way. Just written three times by someone who had the concept
firmly in mind and didn't check the previous version before writing the next.

It's now normative in 1 place, matched in the schema, and the 10 dimensions
are stated once and referenced everywhere else.

The technical spec is blunt about how this survived: every layer of the
system is described separately and never demonstrated together. Nothing in
either document made a single answer travel through question selection,
evidence extraction, the probe decision, and coaching output with real
values at each step. So no sentence ever had to hold two of the taxonomies at
once, and the disagreement stayed invisible.

That's now its own TBD section: one worked end-to-end example, one thin
answer and one strong answer at the same seniority, with actual content at
every stage. I expect writing it to surface more of these.

## One word, two concepts

"Story so far" is the running structured representation of what a candidate
has said *within a session*.

"Story" is a reusable interview narrative that spans sessions and links to
projects.

These are unrelated. They share a word because I named them months apart and
both times "story" was the obvious word. The glossary now flags it as a
naming collision and recommends renaming the per-session object before any
code adopts the ambiguous name, because once it's in a schema, it's in
every query, every log line, and every conversation about the system forever.

Catching it in a document is a footnote. Catching it after the table exists
is a migration ..

## What rule came out of it?

Most of what the review found existed for the same reason: a later section
re-decided something a previous section had already decided, and both stayed
in the document.

Nobody writes a contradiction on purpose. What happens is that you resolve
something in a conversation, write it down where you're currently working,
and never go back to retire the earlier text, which still reads as current,
because it's stated just as confidently as the new version.

So there's now a governance section, and the operative sentence is: when a
decision changes, **edit the original statement**. Don't append a section
that disagrees with an earlier one and leave both standing.

Alongside that, an ownership split across the three documents. The PRD owns
what the user sees and what the product promises, the technical spec owns how
it's built, and the decision log owns why, plus what the decision replaced. A thing gets stated once, in the
document that owns it, and referenced by number elsewhere.

## An unflattering sentence, published anyway

Because "my spec contradicted itself" is not a flattering sentence and it is
an extremely common one. Every specification of any size has this problem.
Most of them never get the pass that finds it, and the contradictions get
resolved much later by whoever is implementing, silently, in whichever
direction is easier to build.
