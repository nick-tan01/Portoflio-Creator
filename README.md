# Tania Tan — Portfolio

A single-page Next.js 14 + Tailwind portfolio site for Tania Tan (Client Marketing & Events).

## Local development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option A — GitHub import (recommended)

1. Push this repo to GitHub.
2. Sign in at https://vercel.com and click **New Project**.
3. Import the GitHub repo. Vercel auto-detects Next.js — accept the defaults and click **Deploy**.

### Option B — Vercel CLI

```bash
npx vercel        # first-time: links + deploys a preview
npx vercel --prod # promotes to production
```

No environment variables are required.
