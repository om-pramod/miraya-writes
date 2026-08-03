# Phase C: site copy alignment log

**Date:** 2026-07-25  
**Canon:** MIRAYA_CANON.md  

## Files updated

| File | Change |
|------|--------|
| `components/hero-section.tsx` | Tagline-led H1, Miraya positioning, CTAs: strategy session + work samples |
| `components/services-section.tsx` | Six Miraya services + strategy CTA card; links to `/contact` |
| `components/portfolio-section.tsx` | Replaced lorem UI/UX portfolio with EchoBench + runbooks + brand OS |
| `components/about-section.tsx` | Real bio framing; removed fake 15yr / 100 projects lorem |
| `components/contact-section.tsx` | Strategy session form; removed wrong third-party email |

## Pass 2 (template cleanup)

| File | Change |
|------|--------|
| `experience-section.tsx` | Practice areas instead of fake design-job timeline |
| `testimonials-section.tsx` | Proof cards instead of invented client quotes |
| `gen-ai-mindset-section.tsx` | Miraya AI practice copy; CTA → `/contact`; removed debug log |
| `clarity-gap-section.tsx` | Em dash cleanup; CTA → docs audit |
| `logo-marquee.tsx` | Capability labels (no fake client logos) |
| `footer.tsx` | Miraya branding; removed third-party email/credit |
| `app/layout.tsx` | Miraya metadata |

## Pass 3 (public profile wiring)

| File | Change |
|------|--------|
| `lib/social-links.ts` | Single source of truth for all public URLs |
| `brand/PUBLIC_PROFILE.md` | Sourced bio, research, publication, link table |
| Footer / contact / about / hero / work | Real LinkedIn, GitHub, Medium, Substack, Scholar, Pune |
| Home + About | Social connect section included |
| Contact form | Continues to LinkedIn until commercial email exists |

## Still open

- Commercial Miraya inbox + form backend (Formspree etc.) when you publish one  
- Optional home Services teaser  
- Real testimonials only with client permission  
- Push remaining untracked brand markdown sources if desired

## Reader action

Open `/`, `/services`, `/work`, `/about`, `/contact` locally and read aloud against the Responsible AI checklist and banned-word list.
