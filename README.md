# gizelo.dev

Robert Gizelo's personal website: a full-stack developer showing the products he has built, for
recruiters, founders and small businesses. Agent and contributor guide: [AGENTS.md](./AGENTS.md).

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
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
- `/work/gimecs`
- `/work/house-of-smile`
- `/work/chocolatin-labs`

The project deploys to Vercel. Production is released only from `main`.
