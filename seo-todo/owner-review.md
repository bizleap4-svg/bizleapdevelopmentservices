# Bizleap Development Services — Owner Review Items (SEO & Content TODOs)

This document lists all content claims, client case study metrics, and external production domain requirements that require confirmation or approval from the business owner of **Bizleap Development Services** (BizLeap India Pvt. Ltd., Nagpur).

---

## 1. Portfolio Staging URLs (Outbound Links Removed)
The following 3 projects previously linked to temporary `.vercel.app` preview/staging domains. Per technical SEO best practices, direct outbound links to staging environments have been removed from the public site, while preserving the dedicated case study pages:

| Project | Previous Staging URL | Action Needed from Owner |
| :--- | :--- | :--- |
| **Miles Along Smiles** | `https://mas-livid.vercel.app/` | Provide live production domain (or confirm if client operates under private deployment). |
| **Form 6** | `https://form-6-new.vercel.app/` | Provide official corporate domain for Form 6. |
| **Genekon** | `https://genekon-pharma.vercel.app/` | Provide official healthcare domain for Genekon. |

---

## 2. Branded Company Email & Communication
- Current site email: `bizleapinc@gmail.com`
- **Owner Action**: Confirm whether a branded email domain (such as `contact@bizdevelopment.in` or `hello@bizdevelopment.in`) should replace or complement `bizleapinc@gmail.com` in sitewide JSON-LD schemas, headers, and footer contact details.

---

## 3. Case Studies: Specific Metrics, Challenges & Results
To avoid fabricating business facts, all 17 portfolio case studies at `/work/[slug]` present factual architecture overviews while holding explicit placeholders for proprietary metrics:

- **MIRAYA (`/work/miraya`)**: Awaiting verified sales figures, conversion uplift, and specific client background.
- **SUKO (`/work/suko`)**: Awaiting B2B wholesale transaction numbers and user engagement data.
- **Rajwadi (`/work/rajwadi`)**: Awaiting order volume growth and mobile conversion stats.
- **ASMA (`/work/asma`)**: Awaiting student admission inquiry numbers and traffic statistics.
- **BINOUS (`/work/binous`)**: Awaiting international subscriber retention and payment processing volumes.
- **Shutter School (`/work/shutter-school`)**: Awaiting course completion percentages and active user milestones.
- **Miles Along Smiles (`/work/miles-along-smiles`)**: Awaiting patient booking volumes and clinic workflow metrics.
- **Form 6 (`/work/form-6`)**: Awaiting B2B partnership conversions and partner portal engagement.
- **Genekon (`/work/genekon`)**: Awaiting practitioner engagement numbers and diagnostic inquiries.
- **Chemora (`/work/chemora`)**: Awaiting chemical export inquiry volumes and distributor reach.
- **URBAN TAXI (`/work/urban-taxi`)**: Awaiting daily trip inquiries and dispatch efficiency gains.
- **Art Interiorz (`/work/art-interiorz`)**: Awaiting design consultation booking numbers and high-ticket project values.
- **MYSA (`/work/mysa`)**: Awaiting luxury apparel engagement rates and sales metrics.
- **Wealth Acumen (`/work/wealth-acumen`)**: Awaiting advisory inquiry volume and client assets under consultation.
- **Oswal Jewellers (`/work/oswal-jewellers`)**: Awaiting luxury catalogue conversion rates and showroom visits.
- **Taubys (`/work/taubys`)**: Awaiting online food ordering metrics and daily order volumes.
- **MMM Hotels (`/work/mmm-hotels`)**: Awaiting direct room reservation share and OTA savings percentages.

---

## 4. Service Page Pricing & Timeline Claims
- **Website Development Nagpur (`/services/website-development-nagpur`)**: References indicative starter ranges (₹15,000 to ₹1,50,000+). Owner should review and adjust standard rate card.
- **Ecommerce Website Development Nagpur (`/services/ecommerce-website-development-nagpur`)**: References standard 2–4 week turnaround benchmarks. Owner should confirm standard SLA.
- **Mobile App Development Nagpur (`/services/mobile-app-development-nagpur`)**: Mentions cross-platform React Native and Flutter stacks. Owner should confirm team capacity and preferred stack.
- **UI/UX Design Nagpur (`/services/ui-ux-design-nagpur`)**: Mentions Figma and design system handoff deliverables.
- **Next.js Development (`/services/nextjs-development`)**: Highlights enterprise Next.js App Router performance and cloud hosting deployments.

---

## 5. Contact Form Email Delivery Integration (`bizleapinc@gmail.com`)
- The `/contact` form executes server action `submitContactForm` with `nodemailer` configured to deliver lead notifications directly to `bizleapinc@gmail.com`.
- **Owner Action to Activate Real-Time In-Box Delivery**:
  1. Go to Google Account Security for `bizleapinc@gmail.com`: `https://myaccount.google.com/apppasswords`
  2. Create a new App Password named "Bizleap Website".
  3. Copy the 16-character code and set it as `GMAIL_APP_PASSWORD` in `.env.local` (and in Vercel Project Settings > Environment Variables).
  4. Once added, every client submission is automatically delivered to `bizleapinc@gmail.com` with formatted client details, direct mailto reply link, and phone call link.
