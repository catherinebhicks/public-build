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

## Part two: measured against her actual writing

Voice baseline located 2026-09-22 — the two 2024 studio-pitch PDFs, her only
substantial non-AI prose in Drive. Both are now linked from the "How AI
Writes" doc itself.

- [NetBase Pro (2024)](https://drive.google.com/file/d/1xWcHjyZ9hdPoLf3V4xh_ImGeQH4UYl77/view)
- [Kelly Moore (2024)](https://drive.google.com/file/d/1wu7pZZnDcK27D_50Y4Xh4015foVQZyVv/view)

3,602 words of her prose against 15,813 words of blog:

| Measure (per 1,000 words) | Her writing | The drafts |
|---|---|---|
| Em dashes | **0.0** | 10.2 |
| Numbers and figures | **10.8** | 0.4 |
| "we" | 9.7 | 1.6 |
| Exclamation marks | 0.8 | 0.0 |
| Warmth words (privilege, love, excited, proud…) | 29 instances | 2 |
| Questions used as headings | several | **0** |

Part one said cut em dashes to ~4 per 1,000. Her own number is **zero across
3,602 words.** She does not use them. The comma, the period and the humble
hyphen do all that work. Target 1–2 per 1,000, not 4.

### The three things her writing does that the drafts don't

**1. It counts things.** Her case studies are dense with figures: *1,000s of
data filters reduced to 500, then 150, then 175. Timeline: 14 months.
Interviewed 30 people. Bi-weekly phone calls, 1:1 feedback sessions, monthly
virtual user testing, 3 multi-day site visits. About a week and a half to get
a concept to the client.* She narrates process by counting it.

The drafts are 25× less numerate. They argue about principles where she would
report quantities. **This is the biggest gap and the most fixable** — the
material exists: 66 PRD sections, 86 spec sections, 38 TBDs, 10 evidence
dimensions, a probe cap of 2 configurable 1–4, 39 review comments, an
eight-hour quarantine.

**2. It sounds glad to have done the work.** *"I had the privilege of being
the first internal design hire." "I had the incredible opportunity." "Being
the first UX hire at iTradeNetwork was both exciting and challenging." "I love
turning complex business objectives into engaging designs."*

Across 15,813 words the drafts contain two warmth words. The register is
uniformly wry, measured, faintly self-critical. That's a voice — it just
isn't hers. The identical finding came out of the healthcare copy audit:
2,019 text blocks, one line with any warmth in it.

**3. It asks questions out loud.** *"How do we build a platform that is easy
to use so more users can use it?" "Is Coke better than Pepsi?" "What is the
data? Who is saying it? What are they saying?" "How do I pick colors that go
well together?"*

Zero of the 103 headings in the drafts is a question. She uses questions as
structure constantly.

### Also true of her prose, and worth not sanding off

- **Loose, run-on sentences**, with comma splices and the occasional missing
  period. The drafts are uniformly tight and balanced, and that polish is
  itself a tell.
- **"We" for the team, "I" for her own work.** Six times more "we" than the
  drafts. Less applicable to a solo build log, but the collaborators — the
  engineers, the data scientists, the team from Taiwan — are named in her
  writing and absent from the drafts.
- **Real quotes from real people.** The drafts quote the spec and her own
  earlier sentences. Her case studies quote users verbatim.
- **Typos and inconsistent capitalisation survive to final PDF.** Not a thing
  to imitate, but a reminder that a spotless surface is not her surface.

## Part three: two registers, not one (added 2026-09-22)

~1,500 words of sent email sampled from late 2024 to mid 2025, sorted by
recipient. Rates per 1,000 words.

| | Professional email | Personal email | Studio pitches | **Cold outreach** | Drafts (now) |
|---|---|---|---|---|---|
| Words sampled | 826 | 714 | 3,602 | 173 | 15,725 |
| Em dashes | **0.0** | **0.0** | **0.0** | **11.6** | 0.25 |
| Digits | 6.1 | 9.8 | 10.8 | 17.3 | 3.6 |
| Exclamation marks | **9.7** | 5.6 | 0.8 | 0.0 | 0.0 |
| Questions punctuated as statements | 0 | **5** | 0 | 0 | 0 |

### Her job-application email is not hers

Cold outreach runs **11.6 em dashes per 1,000 words** against zero everywhere
else she writes. It also carries *game-changer*, *seasoned design leader*,
*well-equipped to contribute*, *I hope this message finds you well*.

One was sent with `---TWO OPTIONS---` still at the top and `---OR---` between
two complete drafts of the same message.

**Exclude job applications and cold outreach from the baseline.** The em-dash
rate is a sufficient test on its own: above ~1 per 1,000 words, she didn't
write it. (The AI-drafted blog copy measured 10.2.)

### Professional register

- **Opens "Hey [Name]" on its own line, no comma.** Including "hey Joe"
  lowercase. Never "Dear".
- **Warmest of the three registers** — exclamation marks ~10x the rate of her
  written case studies. *"Hope all is well in your neck of the woods!"*
  *"This role looks great! Go forth! :)"* Emoticons appear.
- **Offers help before being asked, with a named action.** *"holler at me if
  she runs up against any issues and I'll get in there and fix it for you real
  quick."*
- **Hedges before concluding.** *"Looks like…" "My guess is…"* Observation
  first, claim second.
- **Bad news plainly, then straight to logistics.** *"I dont think Im going to
  be able to make it - had something come up with my VISTA site."* No apology
  paragraph.

### Personal register

- **Blunt when wronged, opening on the judgement.** *"This is ridiculous."*
  *"What an absolute bummer for this to happen and not be notified."* The
  professional register never does this.
- **Questions punctuated as statements** — the sharpest marker between the
  two. 5 instances in 714 words, 0 in professional email. *"How would you like
  me to proceed."* *"Did you not get my previous email."*
- **More numbers than the professional voice**, not fewer. Under pressure she
  reaches for the count.
- **Self-deprecating about her own mistakes, briefly.** *"I have completely
  blanked on my volunteer portal login."*
- **Parenthetical dark humour.** *"(SSI intake - let the madness begin)..."*
- **Typos run highest here** and are never corrected.

### Which register the build log wants

**Professional, at the studio pitches' length.** Take the "Hey [Name]"
directness, the unprompted offers of help, the exclamation marks, the
hedge-before-claim order, the numerals.

From the personal register take **only the bluntness**, and only about
something that genuinely annoyed her. *"What an absolute bummer"* belongs in a
build log; *"This is ridiculous"* does not. The question-as-statement tic is
personal-only — it reads as impatience.

### Still outstanding on the drafts

1. **Digits 3.6, should be ~6** (professional-register rate).
2. **Zero exclamation marks in 15,725 words.** Professional register runs 9.7
   per 1,000. Even a tenth of that is ~15.
3. **No "Hey"-style direct address and no dotted trail-offs.**
4. **No unprompted offer of help** anywhere in the 27 posts.

## How to work the list

Per post, in order, roughly fifteen minutes each:

1. Search `—`. Convert nearly all of them.
2. Search `isn't`, `aren't`, `wasn't`, `not just`. Keep at most two across the
   whole set.
3. Read the last line of each section aloud. If it's a maxim, cut it and end
   on the fact before it.
4. Add a number. Anywhere the post says "several" or "a lot" or "most", say
   how many.
5. Turn at least one heading into a question.
6. Find one place to say you enjoyed something, if you did.
