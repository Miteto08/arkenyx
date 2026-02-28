# Arkenyx – Website

Static marketing site for **Arkenyx**, a French micro-enterprise offering IT services (PC repair, custom builds, data recovery, networking, web design, etc.).

- **Stack:** Next.js 14 (App Router), React, TypeScript, SASS
- **Output:** Static export (SPA) → deployable to any static host
- **Structure:** MVC-inspired (`models`, `views`, `app` pages)
- **UI:** Responsive, mobile-first

---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (or yarn / pnpm)

---

## Getting Started

### Install dependencies

From the project root:

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Or with Turbopack for faster rebuilds:

```bash
npm run dev:turbo
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production (static export)

```bash
npm run build
```

Static files are generated in **`out/`**. This folder can be deployed to GitHub Pages, Netlify, Vercel, or any static hosting provider.

---

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site (e.g. `https://www.arkenyx.fr`). Used for sitemap, metadata, and canonical URLs. Default: `https://www.arkenyx.fr`. |

Create a `.env.local` file at the root if needed. Do not commit it if it contains secrets.

---

## Project structure

| Path | Role |
|------|------|
| **`src/app/`** | Next.js App Router: pages, `layout.tsx`, `globals.scss` |
| **`src/views/`** | React components and `.module.scss` (presentation) |
| **`src/models/`** | Data and types (services, copy, constants) |

- **Home:** Main landing content lives in `src/app/page.tsx` (hero, services, pricing, FAQ, contact, etc.).
- **Legal pages:** CGV, CGU, Mentions légales, Politique de confidentialité under `src/app/` (e.g. `cgv/`, `cgu/`, `mentions-legales/`, `politique-confidentialite/`).
- **SASS:** Global variables and mixins in `src/app/globals.scss`; per-component styles in `src/views/**/*.module.scss`.
- **Responsive:** Breakpoints are defined in `globals.scss` (`$breakpoint-mobile`, `$breakpoint-tablet`, etc.).

---

## Deployment

1. Connect your Git repository to your host (Vercel, Netlify, etc.).
2. Set **build command:** `npm run build`
3. Set **output directory:** `out`
4. Optionally set `NEXT_PUBLIC_SITE_URL` in the host’s environment variables to match your production domain.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (default port 3000) |
| `npm run dev:turbo` | Start dev server with Turbopack |
| `npm run build` | Static export → `out/` |
| `npm run start` | Serve production build (after `build`) |
| `npm run lint` | Run ESLint |

---

## License

Private project. All rights reserved.
