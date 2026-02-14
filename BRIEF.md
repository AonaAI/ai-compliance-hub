# AIComplianceHub.com — Project Brief

## What
An AI regulation tracker — covering EU AI Act, ISO 42001, NIST AI RMF, state-level US laws, AU AI Ethics Framework. Timeline, requirements breakdown, readiness checklists. Go-to reference for compliance teams. Funnels to Aona AI.

## Tech Stack
- **Next.js 14** (App Router, static export), **Tailwind CSS**, **TypeScript**
- Firebase Hosting (`output: "export"`, `distDir: "out"`)

## Brand
- Dark purple `#11021d` / `#1a0533` / `#2d1054`, accent `#6412A6`, Manrope font
- "Powered by Aona AI"

## Pages

### 1. Landing Page (`/`)
- Hero: "AI Compliance Hub — Track Every AI Regulation That Matters"
- Visual timeline of major AI regulations
- Quick links to each regulation
- Stats: "12+ active regulations", "50+ countries with AI policy"
- CTA: "Check Your Compliance Readiness"

### 2. Regulations Directory (`/regulations`)
- Card grid of all tracked regulations
- Filter by: Region (EU, US, UK, AU, Global), Status (Active, Upcoming, Draft), Type (Law, Standard, Framework)
- Each card: name, region, status badge, effective date, brief summary

### 3. Individual Regulation Pages (`/regulations/[slug]`)
- Detailed pages for 10+ major regulations:
  1. **EU AI Act** — full breakdown, risk categories, timelines, requirements
  2. **ISO 42001** — AI management system standard
  3. **NIST AI RMF** — risk management framework
  4. **GDPR (AI provisions)** — data protection for AI
  5. **UK AI Safety Framework**
  6. **Australia AI Ethics Framework**
  7. **Canada AIDA** — Artificial Intelligence and Data Act
  8. **US Executive Order on AI Safety**
  9. **Colorado AI Act**
  10. **SEC AI Disclosure Requirements**
- Each page includes: Overview, Key Requirements, Timeline/Dates, Who It Affects, Readiness Checklist, Resources

### 4. Compliance Readiness Assessment (`/assess`)
- Quick 5-question assessment
- Which regulations apply to your org?
- Shows readiness score + gaps
- Email capture for detailed report
- "Get help from Aona AI" CTA

### 5. About (`/about`)
- Mission, methodology, update frequency
- Aona AI sponsor

## Content
Write authoritative, detailed content for each regulation (800+ words each). Include real dates, real requirements. Make it genuinely useful for compliance professionals.

## SEO
- Meta: "AI Compliance Hub — Track AI Regulations Worldwide"
- Each regulation page targets: "[regulation name] requirements", "[regulation name] compliance checklist"
- Schema.org: WebSite + Article + FAQPage markup

## Firebase
- `firebase.json` → `out/`
- `.firebaserc` → project: `aona-ai-compliance-hub`
