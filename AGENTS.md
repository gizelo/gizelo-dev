# Agent guide — gizelo.dev

Robert Gizelo's personal website: a full-stack developer who builds products end to end and shows the products he has built. It speaks in one voice to three audiences: recruiters and engineering leads (linked from the CV and LinkedIn), founders and startups, and small businesses (linked from cold emails). It is open to new roles, projects and collaborations, and it is not a sales page.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3, Vercel Analytics.
- All public pages are statically prerendered (`generateStaticParams`, `dynamicParams = false`). Client-side JavaScript is limited to navigation, analytics and the contact form.
- Deployed on Vercel; production is released only from `main`.

## Commands

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build          # next build --webpack
```

There is no automated test suite. Before handing over a change run `format:check`, `lint`, `typecheck`, `build`, and check the affected pages in a browser at desktop (1440), tablet (768) and mobile (375) widths.

## Structure

```
src/app/                    routes: / , /work/[slug], robots.ts, sitemap.ts, not-found; icon.svg, apple-icon.png, favicon.ico
src/views/                  page-level views (HomePage, case study pages)
src/components/             shared components (SiteHeader, SiteFooter, ProductCard, RoleLabel, ContactForm, JsonLd, …)
src/constants.ts            site content: navigation, skills, services, process, products, case studies
src/assets/work/            product screenshots, imported statically (dimensions and hashed URLs come from the build)
src/lib/site.ts             site URL, name, description, social links and URL helpers
src/lib/structured-data.ts  JSON-LD for the home page and case studies
src/types.ts                shared types
src/lib/utils.ts            cn() helper (clsx + tailwind-merge)
public/                     files that need stable URLs: OG images, portrait, logo and brand icons
scripts/generate-images.mjs regenerates OG images and app icons (pnpm images); its copy mirrors constants.ts
```

Import alias `@/*` → `./src/*`. Most copy lives in `src/constants.ts`; change content there rather than in components.

## Design system

- Colors (Tailwind tokens): `ink` #141613, white, `electric` #123CFF, `electric-dark` #0A2ED4, `lime` #B3F753. Lime only for the brand star and rare accents, never for body text. No beige.
- Fonts: Inter (`font-sans`), Space Grotesk (`font-display`).
- Blue for actions, links and focus. Separators only between list items, never as outer borders.
- Photos keep their original aspect ratio (shown inside a light image well). Girex is the only dark product card.
- Product cards: the first three products are large (Girex flagship, then two primaries), the rest are compact. Every card shows a role label (Solo build, Lead developer, Team project) and a one-line "My part".
- The Girex brand palette is separate; do not mix it into this site.

## Content rules

- Personal, confident first-person voice ("I"), not an agency "we". No sales promises.
- Cards are named by product, not by company; the client company goes in the small line.
- State Robert's role honestly on every product: what he did alone, as lead, or as part of a team.
- No invented metrics, clients, launches or results. Facts come from `~/Documents/Career/profile.md`. Credit collaborators (e.g. the Chocolatin Labs designer).
- No location or geography on the site.

## Behaviour that must not regress

- Contact form: required Name/Email/Message, Web3Forms endpoint (key in `src/lib/site.ts`), loading/success/error states, `aria-busy`. Never send a real message during QA.
- Navigation: desktop menu from `lg` (1024px), hamburger below; mobile menu with focus trap, Escape, focus return, inert background.
- New routes open at the top; same-page anchors may scroll smoothly; Back/Forward restoration preserved.
- Metadata, canonical URLs (www), OG/Twitter images, JSON-LD, robots and sitemap stay consistent with the routes; site-wide values come from `src/lib/site.ts`.
- Only the page's LCP image gets `priority`; everything below the first screen loads lazily.
- Lighthouse stays at 100 for accessibility, best practices and SEO on every page.

## Conventions

- Prettier: double quotes, semicolons, trailing commas, 100-char width, 2-space indent.
- Commits: `type: description` with lowercase description (`feat`, `fix`, `refactor`, `style`, `chore`).
- Code, comments and commits in English.
