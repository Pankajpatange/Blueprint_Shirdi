# Blueprint Shirdi — Next.js Landing Page & Editorial Portal

A responsive Next.js (App Router) recreation and UX-enhanced implementation inspired by [blueprintshirdi.com](https://www.blueprintshirdi.com/) — private Balinese villas with land-linked ownership in Shirdi Central by Spectacle Realty.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI & Language:** React 19, TypeScript
- **Styling:** Tailwind CSS v4 with custom obsidian/gold architectural design tokens (`#121212` background, `#CC9F66` antique gold, `0px` sharp corners)
- **Typography:** `Cormorant Garamond` (display), `EB Garamond` (body), `Inter` (UI/eyebrows), `Allison` (script accents) via `next/font/google`
- **Icons:** `lucide-react`

## Requirements

- Node.js `>= 18.18` (tested on Node.js `v22.14.0`)
- npm `>= 9`

## Installation & Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
blueprint-shirdi/
├── app/
│   ├── blog/
│   │   ├── [slug]/page.tsx    # Dynamic article route
│   │   └── page.tsx           # Blog index route
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── globals.css            # Architectural tokens & subtle grain overlay
│   ├── layout.tsx             # Root layout, Google fonts & metadata
│   └── page.tsx               # Landing page composition
├── components/
│   ├── BrandMark.tsx          # Custom geometric SVG marks
│   ├── FilmAndShirdi.tsx      # Interactive 4-chapter film preview, Why Shirdi, Ownership
│   ├── FloatingUtilities.tsx  # Desktop WhatsApp/Top & Mobile sticky 4-action bar
│   ├── Footer.tsx             # Legal notices, navigation, mobile bottom clearance
│   ├── GalleryCarousel.tsx    # Filterable carousel, thumbnail strip & lightbox
│   ├── Header.tsx             # Sticky glass header, reading progress & slide-out drawer
│   ├── Hero.tsx               # Resilient full-bleed twilight villa hero
│   ├── HospitalityAndCompare.tsx # Hospitality checklist, comparison table & yield estimator
│   ├── InquiryContext.tsx     # Accessible modal dialog state provider
│   ├── InquiryForm.tsx        # Reusable validated form component
│   ├── IntroAndTypologies.tsx # Collection metrics, aerial view & villa typology tabs
│   ├── InvitationFaqBlogContact.tsx # Invitation, FAQ accordion, blog cards & contact
│   ├── JourneyAndAmenities.tsx # 8-step ownership timeline, legacy & wellness grid
│   └── TrustAndLocation.tsx   # Commitments, developer, testimonials & maps fallback
├── lib/
│   └── data.ts                # Structured content, specs, FAQs & articles
├── public/
│   └── images/                # Local optimized architectural renders
├── next.config.ts
├── package.json
└── report.pdf                 # Project UX & engineering report
```

## Environment Variables

No environment variables are required to run this project locally or deploy to Vercel.

## Key UX & Engineering Improvements

1. **Resilient Hero & Map Fallbacks + Villa Typology Explorer:** Replaced iframe-only hero dependencies with optimized local twilight imagery and added interactive `3 BHK Courtyard Villa` / `4 BHK Forest Sanctuary Villa` specification tabs.
2. **Interactive Hospitality Yield Estimator:** Added a transparent occupancy & ADR slider inside `#compare` alongside non-guaranteed financial disclosures.
3. **Enhanced Visual Gallery:** Added category filter tabs, preloaded thumbnail strip, keyboard arrow navigation, and a full-screen lightbox modal.
4. **Unified Validated Inquiry Form:** Extracted a reusable `InquiryForm` component shared between the modal and `#contact` with live validation, `aria-invalid`/`role="alert"` accessibility, and clean confirmation feedback.
5. **Mobile Navigation & Sticky Bar Ergonomics:** Added reading progress indicator, dedicated `/blog` and legal App Router pages, and integrated a 4-button mobile bottom bar (`WhatsApp | Call | Inquire | Top`) with footer clearance.
