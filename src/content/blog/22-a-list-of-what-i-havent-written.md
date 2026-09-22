---
title: A list of what I haven't written
summary: >-
  38 sections of the spec are empty. Each one has a paragraph saying
  precisely what belongs there and why it's missing, which turned out to be
  more useful than leaving them out.
project: ux-interview-coach
tags: [spec, process, planning]
draft: true
---

The PRD has 66 sections. 17 of them contain nothing but a
scoping paragraph and the word TBD. The technical specification has
86 sections and 21 of those are the same.

That's not a document in progress in the usual sense, where the missing parts
are missing because nobody got to them. It's deliberate. Each empty section
says what belongs in it, why it's needed, and which existing section it
relates to.

For example, the section on data export exists only as: machine-readable
export of a user's own data; deletion is specified in two other sections;
portability is a separate right and a PDF does not satisfy it. Then TBD.

Nothing is decided. But the shape of the decision is fixed, the reason it
can't be skipped is recorded, and the trap, assuming a PDF download counts as
portability, is named before anyone falls into it.

## An outline is just a list of headings

An outline is a list of headings. You can look at one and feel organised
without having done any thinking.

Writing the scoping paragraph forces the actual thinking. It makes you say
what question the section answers, and that's where you find out whether the
section is real. Several of these started as a heading I assumed was obvious
and turned out, once I tried to write the paragraph, to be two different
sections or none.

It also fixes the failure mode where a gap is invisible. A specification with
no section on "when the coach is wrong" reads as complete. A specification
with a section that says *this covers inaccurate or unfair feedback, the
common failure as distinct from the safety cases, the dispute path, and how
that signal reaches the evaluation set*, followed by TBD, reads as exactly
what it is.

## What the gaps turned out to be

Grouping them, they fall into three kinds.

**Things I've been avoiding because they're hard.** Bias and fairness in
evaluation. What happens when the coach gives bad feedback. How the coach
actually sounds. Each of these is a genuine product problem with no
comfortable answer, and each had quietly not been written for weeks.

**Things I assumed were implied.** Account lifecycle. Browser support. Secrets
management. Nobody forgets these on purpose; you just never think about
password reset while you're designing an interview agent, and then it's
launch week.

**Things that only became visible once something else was written.** The
evaluation section specifies a rigorous programme, a rubric, and a release
gate, all around a test set that does not yet exist. That's now its own section.
Writing the rigour first made the absence of the material obvious.

## The one I keep looking at

The question bank. The source material is a workbook that lacks most of the
fields the agent needs: competencies, expected evidence, seniority modifiers,
follow-up triggers. The risk register lists "question bank too
thin to sustain a session" first, with the trigger being that a full session
can't be assembled at one level without repetition.

Its mitigation says to treat this as the critical path, ahead of agent work.

That's a sentence I wrote and have not yet acted on, which is roughly the
point of writing it where other people can read it.

## What it looks like from outside

This makes the document look worse. A reader flipping through sees TBD
38 times and concludes the project is nowhere.

I think that's an accurate impression and worth having. The alternative is a
document that looks finished, which would be a lie told mostly to myself.
