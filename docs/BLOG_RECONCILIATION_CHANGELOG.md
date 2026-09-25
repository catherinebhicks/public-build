# Blog Reconciliation Changelog

Private working document. Not intended for publication.

Branch: `blog-reconciliation-edits`
Repository: `catherinebhicks/public-build`
Audit date: 2026-09-25

Purpose: track changes made to blog drafts as the public-build narrative is reconciled with the current UX Interview Coach source-of-truth documents. Historical design evolution is preserved where it is part of the story; only claims that incorrectly describe current product behavior are corrected.

## Changes

### 08 — Probe or move on
- Changed the probe limit from a user/session-configurable 1–4 range to the settled V1 behavior: default ceiling of 2, with 1–4 retained only for internal testing/calibration.
- Updated the simplified decision object from only `probe | move_on` to the canonical decision set: `move_on | probe | coach | end_question`.
- Why: align with the current probing contract and canonical agent-decision enum.

### 16 — The portfolio goal changed the architecture
- Preserved the original n8n-heavy decision as historical design evolution.
- Added the later architectural reversal: Next.js/application backend owns the latency-sensitive live loop; n8n is asynchronous/post-session only.
- Updated the modularity section so inspectable modules do not imply that every module executes in n8n.
- Why: the live-loop, recovery, checkpointing, voice, and fallback requirements changed the runtime boundary after the original post was written.

### 17 — Personalising your interview isn't consent to train on it
- Added a distinction between using context in a session, saving durable context, and user-curated takeaways.
- Added the settled `remember this` / `practice this` ownership rule.
- Clarified that AI inference remains identifiable/reviewable and cannot silently become a user-designated takeaway.
- Why: align privacy/persistence language with the Human–Agent Responsibility Model and Autonomy Matrix.

### 24 — Getting it right once isn't learning it
- Added user-curated memory/practice as a third concept separate from question-level and competency-level priorities.
- Why: a system-created learning priority and a user saying “I want to come back to this” are intentionally different ownership states.

### 25 — Don't rewrite history
- Replaced the old “corrections only go forward” framing.
- Factual/source corrections now drive subsequent re-evaluation and create a new traceable report/evaluation version without overwriting the historical original.
- Distinguished factual correction from disagreement with the AI's interpretation.
- Why: align with the settled report/versioning and human-authority rules.

### 28 — Why did you ask me that?
- Updated the placeholder to reflect that internal Agent Decision Event traceability is now settled.
- Left the user-facing transparency decision open, particularly the Mock-realism question.
- Why: avoid calling the whole area TBD when only the user-facing presentation remains undecided.

### 29 — When the coach is wrong
- Replaced the placeholder with a complete draft.
- Distinguished factual/source correction from an interpretation dispute.
- Defined re-evaluation/versioning behavior and the role of disputes as evaluation cases.
- Why: the responsibility, correction, and immutable-history decisions needed by this post are now settled.

### 36 — What the model is actually told
- Updated the placeholder to distinguish open prompt authoring from the settled normative prompt/versioning contract.
- Added the canonical reproducibility metadata expected around material model decisions/evaluations.
- Why: Tech §66 is now normative even though exact prompt/few-shot content remains implementation work.

### 43 — How you know a section is done
- Replaced the placeholder with a complete draft.
- Added behavioral acceptance criteria, deterministic-vs-human evaluation distinction, the initial V1 acceptance gate, and document-authority model.
- Why: acceptance criteria and the V1 evaluation gate are now settled.

## Intentionally not changed in this reconciliation batch

- 26 — Permanent, with an eight-hour asterisk: already matches the settled user-facing deletion vs operational quarantine model closely enough that a rewrite would erase useful design history.
- Other placeholder posts whose underlying product/implementation decision remains genuinely open were left as placeholders rather than filled with invented certainty.

## Source-of-truth hierarchy used for reconciliation

1. PRD — product behavior and user-facing requirements.
2. Human–Agent Responsibility Model — responsibility boundaries.
3. Autonomy & Approval Matrix — action/permission rules.
4. Technical Specification — implementation enforcement and normative technical contracts.
5. Decision Log — rationale and decision history.

Supporting blog posts document the build and may preserve superseded thinking when clearly framed as historical evolution; they do not redefine current product behavior.
