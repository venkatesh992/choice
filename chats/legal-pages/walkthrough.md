# Walkthrough - Privacy Policy & Terms of Service Pages

## Summary of Changes
Created comprehensive, professional legal pages specifically tailored to **Choice Web Solutions** as an engineering agency.

### 1. Privacy Policy (`src/app/privacy/page.tsx`)
- Detailed data collection policy (Direct inquiries, technical telemetry).
- Strict non-disclosure & anti-monetization guarantees (no selling or trading of client data).
- Multi-tenant ERP data isolation clauses (Radora ERP zero cross-tenant leakage).
- Infrastructure & security transparency (Google Workspace, edge networks, PCI-DSS payment gateways).
- Official office address and contact communication details.

### 2. Terms of Service (`src/app/terms/page.tsx`)
- Defined scope of services (Enterprise web, mobile, SaaS, WooCommerce, marketing).
- Concrete Intellectual Property terms: 100% Client ownership of custom domain logic and schemas, royalty-free perpetual license for underlying framework/open-source utilities, and zero technical lock-in.
- Milestone review workflows (10-day review window, staging verification).
- 30-day post-launch code warranty and bug fix policy.
- Commercials, milestone invoicing, and legal jurisdiction (Courts of Guntur, Andhra Pradesh, India).

### 3. Navigation Links (`src/components/Footer.tsx`)
- Connected `Privacy Policy` to `/privacy`.
- Connected `Terms of Service` to `/terms`.

## Verification
- Verified production build via `npm run build` with Turbopack and TypeScript.
