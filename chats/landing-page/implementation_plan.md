# Choice Web Solutions - Landing Page Implementation Plan

## Overview
Develop a premium, high-converting portfolio landing page for "Choice Web Solutions", based on the provided Capabilities Profile PDF and the bento-box design inspirations provided by the user.

## Tech Stack & Rules Addressed
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4, utility-first approach
- **Icons:** Lucide React
- **Animations:** Framer Motion (subtle micro-animations, glassmorphism)
- **UI System:** "Tactical Workstation" geometry (Forms/Inputs at 34px height, 8px padding, 12px font)
- **Architecture:** Client components only when necessary for interactivity (`"use client"`).

## Site Structure (Single Page flow)
1. **Hero Section:** Large headline, clean typography, engaging background or gradient, primary CTA.
2. **Metrics / "Bento Box" Highlights:** Key numbers (5+ Years, 85+ Builds, 99.4% Uptime, 100% Code Ownership) in rounded cards.
3. **Core Engineering Pillars & Services:** Grid layout showcasing the 3 pillars and full-cycle capabilities.
4. **Featured Case Studies:** 3 key projects with metrics.
5. **Agile Delivery Framework:** 5-step process timeline.
6. **Contact / Consultation:** Lead capture form adhering to tactical workstation specs.

## Current Status
- [x] Initialized Next.js project with Tailwind.
- [x] Installed `framer-motion`, `lucide-react`, `zod`.
- [ ] Update global layout metadata and basic styles.
- [ ] Build Hero & Navbar components.
- [ ] Build Metrics/Bento components.
- [ ] Build Services & Case Studies components.
- [ ] Build Footer & Contact components.
