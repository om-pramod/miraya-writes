# Miraya canon — single instruction stack

**Brand:** Miraya Intelligenza · AI Technical Writer Hub  
**Tagline:** Connecting Deep Tech to Human Understanding.  
**Purpose of this file:** When instructions conflict, use this priority order. Do not load the full Writer's Voice Profile archive into routine prompts.

---

## Priority order (highest first)

1. **Accuracy and usefulness** — no invented product facts, credentials, or client results  
2. **Technical standards** — [`../miraya_intelligenza_business_brief.md`](../miraya_intelligenza_business_brief.md) § Technical standards + Editorial process  
3. **Operational voice** — [`../AI Writing Instructions.md`](../AI%20Writing%20Instructions.md)  
4. **Brand identity** — [`../brand_identity_profile.md`](../brand_identity_profile.md)  
5. **Prompt library by mode** — [`../Brand_voice_prompt_library.md`](../Brand_voice_prompt_library.md) (pick one mode; do not stack 01+04 blindly)  
6. **Voice archive (nuance only)** — [`../Writer's Voice Profile.md`](../Writer's%20Voice%20Profile.md)

Format-specific style never overrides accuracy, clarity, or usefulness.

---

## Canonical structure rule (resolves voice conflict)

| Source | Says | Canon decision |
|--------|------|----------------|
| Prompt 01 (scene before principle) | Open with scene | **Optional** — practitioner essay only when specified |
| Prompt 04 + AI Writing Instructions | Verdict first | **Default for all production** |

**Default pattern (every draft unless user picks essay mode):**

1. **Verdict** — central claim in sentence one (specific, arguable, under ~20 words when possible)  
2. **Concrete grounding** — scene, workflow, failure mode, or operational detail  
3. **Mechanism or tradeoff** — why it works this way  
4. **Practical implication** — why the reader cares  
5. **Reader action** — what to do, decide, check, or ask next  

This is “verdict first, then earn it.” Scene-only openings are not the default.

---

## Format modes (choose one before drafting)

| Mode | Use for | Voice file section |
|------|---------|-------------------|
| Practitioner essay | LinkedIn, opinion, thought leadership | AI Writing Instructions §5 |
| Technical explainer | Tutorials, concept articles | §5 |
| Service copy | Site, offers, proposals | §5 |
| Engineering blog | Architecture, tradeoffs, build notes | §5 |
| Product documentation | Manuals, TSGs, RN, UI copy | Google TW + portfolio templates; less first person |

---

## Hard technical standards (always on)

From the business brief — non-negotiable:

- **No em dashes.** Restructure the sentence.  
- **Sentence case headings.** First word + proper nouns only.  
- **Oxford comma** always.  
- **US English** spelling.  
- **No prohibited filler openers** (e.g. “It is worth noting that…”).  
- **No banned hype vocabulary** (delve, leverage, unlock, empower, robust, cutting-edge, seamless, transformative, etc.). Prefer specific descriptors.  
- Cross-check evolving AI-flag lists only when doing a final humanization pass.

---

## Editorial process (mandatory)

1. **Initial audit** — passive voice, zombie nouns, term drift, heading hierarchy  
2. **Refactor** — active voice, short sentences/paragraphs, answer-first paragraphs  
3. **Verification** — Stage 3 checklist in business brief  
4. **Humanization** — preserve facts, names, code, numbers; vary rhythm; remove AI-uniform cadence  

Full detail: business brief § Editorial process.

---

## Responsible AI

Every client or public deliverable runs [`checklists/RESPONSIBLE_AI_CONTENT_CHECKLIST.md`](checklists/RESPONSIBLE_AI_CONTENT_CHECKLIST.md) before handoff.

---

## Proof assets

Documentation-system proof (simulation product **EchoBench**):  
`C:\Users\ompra\tech-writer-workspace` — see `10-miraya-bridge/` for how samples map to Miraya claims.

---

## Pre-flight checklist (copy into PRs / sessions)

- [ ] Mode chosen  
- [ ] First sentence carries the central claim (docs: task/symptom title OK)  
- [ ] One central idea per piece  
- [ ] Concrete example or operational detail present  
- [ ] Terms defined on first use (stranger test)  
- [ ] Ends with action, decision, or next question  
- [ ] No em dashes, banned openers, or hype list terms  
- [ ] Responsible AI checklist done (if public/client)  
