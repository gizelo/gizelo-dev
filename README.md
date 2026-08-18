# gizelo.dev

Robert Gizelo's personal product-builder portfolio. The site presents selected case studies and
product experience across SaaS, fintech and crypto.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Vercel Analytics

All public pages are statically prerendered. Client-side JavaScript is limited to navigation,
analytics and the contact form.

## Development

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:3000` by default.

## Verification

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

## Routes

- `/`
- `/work/girex`
- `/work/house-of-smile`
- `/work/chocolatin-labs`

The project deploys to Vercel. Production is released only from `main`.
