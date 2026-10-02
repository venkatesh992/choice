# Implementation Plan - Contact Us Page Redesign

## Goal
Redesign the Contact Us page (`src/app/contact/page.tsx`) to elevate it from a plain/generic form into a clean, modern, high-aesthetic executive inquiry card—without over-complicating it or adding too many complex selectors.

## Design Concept
- **Clean & High-End Aesthetic (Aether Design System)**:
  - Deep rich card container with subtle glassmorphism or olive-tinted warm background (`#757C54` palette, muted slate borders, refined rounded curves `rounded-[36px]`).
  - Tactile, well-proportioned inputs with smooth focus states (`ring-2 ring-[#757C54]/20 border-[#757C54]`).
  - Simple, elegant fields:
    1. Full Name
    2. Work Email
    3. Phone / WhatsApp (Optional)
    4. Service Interest (Simple pill selector: Web & Portfolio, E-Commerce, SaaS & Apps, Marketing)
    5. Project Overview / Message
  - Premium submit button with animated hover and micro-interaction.
  - Left column: Executive communication channels (Direct WhatsApp link, Email, Head Office) + 3 reassurance badges (NDA Protection, 24h Response SLA, Direct Engineer Access).

## User Review Required
> Simple form fields preserved, no tactical/enterprise bloat, pure visual and aesthetic elevation.

## Proposed Changes
### Frontend
- Create `src/components/ContactForm.tsx` (interactive client component for simple pill selection and smooth form submission states).
- Update `src/app/contact/page.tsx` with refreshed layout, responsive padding, and high-trust sidebar.

## Verification Plan
### Automated Tests
- Run `npm run build` to verify clean Next.js Turbopack compilation and zero TypeScript errors.
### Visual Polish
- Check desktop & mobile responsive layouts.
- Verify focus rings, hover states, and smooth Framer Motion entrance.
