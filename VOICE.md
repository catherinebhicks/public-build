# Voice checklist for the drafts

Standard: **"How AI Writes: Common Text Patterns and How to Edit Them Out"**
(Drive, 2026-09-21). Audited 2026-09-22 across the 27 written posts —
15,813 words. Placeholders 28–45 aren't audited; they're notes, not prose.

The drafts are clean on four of the twelve patterns. The work is
concentrated in five.

## Clean — don't spend time here

- **Vocabulary tells** (#11). One hit in 15,813 words. No *delve, leverage,
  robust, seamless, crucial, pivotal, landscape, realm, testament*.
- **Rule-of-three parallelism** (#7). 0.7 tricolons per 1,000 words. Normal.
- **Imposed structure** (#5). No Act I/II/III, no numbered phases, no
  Problem/Solution/Outcome framing.
- **Subject-dropping** (#8). Prose keeps its subjects throughout.

## 1. Negation-reversal — the flagship tell (#1)

**12 instances of the strict "X isn't Y — it's Z" form**, plus 99 softer
negations. The doc's budget is one or two per document; this is a recurring
signature across the set.

Worst offenders, all load-bearing sentences:

| Post | Line |
|---|---|
| 01 | "The distinguishing feature isn't intelligence, it's *persistence*" |
| 04 | "The rubric isn't documentation written after the fact. It's the thing the model is held to" |
| 05 | "calibration isn't scoring. It's the thing that decides where the agent's attention goes" |
| 08 | "A system that always probes isn't more thorough — it's less realistic" |
| 09 | "the escape hatch isn't an edge case. It's the main road" |
| 13 | "accessibility here isn't contrast ratios" |
| 16 | "The thin layer isn't decoration — it's the thing that keeps this from being a trap" |
| 17 | "Consent isn't a boolean — it's an append-only event log" |
| 21 | "the interesting part isn't the list — it's why none of it had surfaced" |

**Fix:** keep at most two across the whole set. For the rest, delete the
negated half and state the positive claim. Post 17 survives the cut ("Consent
is an append-only event log") — most of the others collapse, which tells you
they weren't carrying information.

## 2. Em-dash density (#6)

**161 em dashes, 10.2 per 1,000 words** — roughly three times the doc's
"once or twice a page." Concentrated in posts 09 (11), 08 (10), 11 (10),
17 (10), 05 (9), 19 (9).

**Fix:** target ~4 per 1,000 words, which is about 60 across the set. Paired
dashes around an appositive become commas; a dash where the second half is a
new thought becomes a period.

## 3. Manufactured epigrams (#2)

**Nearly every post and most sections close on a short punchy line.** The
uniformity is the tell, not any single line.

Cut these — they're maxims with no specifics and would work in someone
else's document:

- 06: "Narrow on purpose."
- 02: "Starting beats waiting for the clean URL."
- 15: "Better to ship one language honestly than to half-support several."
- 21: "I'd rather the resolution be a decision than a coincidence."
- 25: "The minimum that trust requires is that the assessment stays put."
- 25: "It's also the only version where the improvement claim means anything."
- 04: "That's why the rubric comes first."

Keep these — they end on a fact or an event, which is what human writers do:

- 10: "Keeping it in anyway."
- 11: "It selected a vendor."
- 13: "It's what happened in the next sixty seconds."
- 27: "It's the most obviously true one."
- 22: "There's a section for the baseline defence and it's currently empty."

**Fix:** let a third of the posts end on the factual sentence before the
closer, mid-thought and unresolved.

## 4. Uniform header shape (#4)

103 H2s. **Zero are questions.** Two templates dominate:

- **19 headers begin "Why …"** — Why it had to go, Why silence is hard, Why
  write this down, Why bother, Why keep delivery at all, Why I'd defend this…
- **Duplicates across posts:** "The part I want to be honest about" appears
  verbatim in 01 and 16. "What it costs" in 20 and 25, "What this costs" in
  04. "The rule" / "The rule now" / "The rule that came out of it."

**Fix:** rewrite roughly a third. Add questions. Add at least one header
that runs long enough to be a full sentence, and a couple of blunt two-word
labels. Kill both verbatim duplicates.

## 5. Editorializing on the author's behalf (#9)

The recurring move is narrating her own candour rather than just being
candid: "The part I want to be honest about" (×2), "The part I actually care
about", "Why I care about this one more than most", "said out loud", "said
plainly", "Why this is a post".

**"I'd rather …" appears in 8 of the 27 posts.** That's a verbal tic, and
it's always doing the same job — signalling integrity about a choice.

**Fix:** report the decision and let it stand. Cut the frame announcing that
what follows is honest. Reduce "I'd rather" to two or three uses.

## 6. Rhythmic evenness (#12)

Paragraphs run to similar lengths and most posts follow one architecture:
setup → "## Why X" → "## What it costs" → short closing line. Four posts
open with "There's a…".

**Fix:** read aloud. Let one post be much shorter, one much longer, and let
at least one skip the costs section entirely.

## A caveat on this audit

This is measured against the rules in the "How AI Writes" doc, which was
itself distilled from a copy audit of the healthcare portfolio against her
2024 case-study PDFs. **I did not find those original PDFs**, so nothing
here is calibrated against a fresh sample of her actual writing — only
against the distilled rules. A sample-based pass would catch positive voice
traits (the things she does that a model wouldn't) that a rules-based pass
structurally cannot.
