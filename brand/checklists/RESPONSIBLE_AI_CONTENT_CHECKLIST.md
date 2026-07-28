# Responsible AI content checklist

**Owner:** Miraya Intelligenza  
**Use:** Every client deliverable and every public Miraya article before publish  
**Rule:** Demonstrate practice. Do not moralize at the reader.

---

## 1. Provenance and disclosure

| Check | Pass criteria | Notes |
|-------|---------------|-------|
| Tool use named when material | If AI assisted drafting, review, or research, disclosure matches client policy or Miraya default | Default: human-authored final; AI may assist research/outline |
| Human review ownership | Named reviewer accountable for accuracy | |
| Sources cited | Claims that need evidence have links or SME attribution | |
| No fabricated citations | Every URL/title checked or removed | |

## 2. Accuracy and technical honesty

| Check | Pass criteria | Notes |
|-------|---------------|-------|
| SME or primary source | Product behavior verified against build, ticket, or brief | |
| Uncertainty labeled | Probabilistic systems (LLM judges, eval scores) stated without false certainty | |
| Limits stated | Non-goals and failure modes not hidden | |
| Version pinned | Product/docs version and date present where relevant | |

## 3. Bias, harm, and representation

| Check | Pass criteria | Notes |
|-------|---------------|-------|
| Inclusive language | No gendered defaults for roles; no slang that excludes | |
| Stereotype scan | Examples do not encode unfair assumptions about users | |
| Sensitive domains | Health, legal, finance, biometric claims escalated or declined | |
| Dual-use caution | Exploitation/abuse instructions not published | |

## 4. Privacy and data

| Check | Pass criteria | Notes |
|-------|---------------|-------|
| No raw PII in samples | Redact emails, phones, customer IDs | |
| Client confidentiality | No unpublished client IP in public posts | |
| Training-data claims | Do not invent how a vendor model was trained | |

## 5. Audience and accessibility

| Check | Pass criteria | Notes |
|-------|---------------|-------|
| Audience named | Engineer / PM / founder / end user clear | |
| Stranger test | Specialist terms defined on first use | |
| Actionable close | Reader knows next step | |
| Multi-audience consistency | If T/S/N variants exist, shared facts match | |

## 6. Brand standards pass

| Check | Pass criteria |
|-------|---------------|
| No em dashes | |
| Sentence case headings | |
| Oxford comma + US English | |
| No banned filler openers or hype list | |
| Active voice dominant | |

## Sign-off

| Field | Value |
|-------|-------|
| Document / URL | |
| Date | |
| Author | |
| Reviewer | |
| Result | Pass / Pass with residual / Fail |
| Residuals (owner + date) | |

---

## How this shows up in practice (not slogans)

- Scorecards and gates talk about variance and flake, not “guaranteed quality.”  
- Release notes list breaking changes and required actions.  
- Eval docs tell readers to classify failures before re-running.  
- Public posts cite tools and sources the same way client docs do.
