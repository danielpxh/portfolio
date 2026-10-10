# DPTF Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Getting started

Install dependencies with pnpm, then start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Responsive hero check

The Playwright test checks that the hero name stays on one line and fits at
viewport widths from 280px through 1440px. It starts the Vite development
server automatically (or reuses one already running).

Install the Playwright Chromium browser once:

```bash
pnpm exec playwright install chromium
```

Run the focused responsive hero check:

```bash
pnpm test:hero
```

To run the check with the Playwright UI:

```bash
pnpm test:hero --ui
```

## Production build

```bash
pnpm build
```

## Portfolio links

- https://danielpohtingfong.vercel.app/
- https://danielpxh.github.io/portfolio/
