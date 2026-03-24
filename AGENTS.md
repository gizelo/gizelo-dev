# Repository Guidelines

## Project Overview

Gizelo is a React 18 + TypeScript + Vite single-page marketing website for a web development studio. Deployed via Vercel with `@vercel/analytics` integrated.

## Project Structure & Module Organization

```
src/
  components/       # Page sections (Hero, Services, Cases, Contact, etc.)
    animations/     # Reusable animation components
    ui/             # Generic UI primitives
  hooks/            # Custom React hooks (useMousePosition, use-mobile)
  lib/utils.ts      # Shared utilities (cn helper using clsx + tailwind-merge)
  pages/            # Route-level components (Index, NotFound)
  constants.ts      # Site-wide constants
  types.ts          # Shared TypeScript types
public/
  cases/            # Case study images grouped by project slug
  icons/            # Tech stack SVG icons
```

Import alias `@/*` maps to `./src/*`. Use it for all non-relative imports.

## Build, Test, and Development Commands

```bash
pnpm dev            # Dev server at http://localhost:8080
pnpm build          # Production build (outputs to dist/)
pnpm build:dev      # Dev-mode build
pnpm preview        # Preview production build locally
pnpm lint           # Run ESLint
pnpm lint:fix       # Run ESLint with auto-fix
pnpm format         # Format all files with Prettier
pnpm format:check   # Check formatting without writing
```

No test suite is configured.

## Coding Style & Naming Conventions

**Prettier** (`.prettierrc.json`): double quotes, semicolons, trailing commas everywhere, 100-char print width, 2-space indent.

**ESLint** (`eslint.config.js`): TypeScript ESLint + `eslint-config-prettier` (disables conflicting rules). `react-refresh/only-export-components` is warned on. `@typescript-eslint/no-unused-vars` is disabled.

**TypeScript**: strict mode is **off** for app code (`tsconfig.app.json`). Strict mode is on only in `tsconfig.node.json` (Vite config). `noImplicitAny` is off.

**Tailwind**: custom brand tokens — `accent` (`#B3F753`), `darkGray` (`#0c0c0c`). Font family is Space Grotesk. Use `cn()` from `@/lib/utils` to compose class names.

## Commit Guidelines

All commits follow the conventional format `type: description` (lowercase description):

- `feat:` — new feature or visible change
- `fix:` — bug fix or correction
- `refactor:` — code restructure without behavior change
- `style:` — layout/styling-only tweaks
- `chore:` — config, tooling, assets, cleanup

No PR template is configured. No pre-commit hooks are enforced.
