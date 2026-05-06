# UK Sovereign AI Product Validation Network

A Vite + React + Tailwind landing site for a proposed UK-facing sovereign AI product validation network.

## Local development

This project now uses pnpm for deterministic deployment.

```bash
pnpm install
pnpm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
pnpm run build
pnpm run preview
```

## Deploy to Vercel

Import the GitHub repository into Vercel and use these settings:

- Framework: Vite
- Install command: `pnpm install --no-frozen-lockfile`
- Build command: `pnpm run build`
- Output directory: `dist`

If Vercel still runs `npm install`, check Project Settings > Build & Development Settings and override the install command manually.

## PDF concept note

The website links to:

```txt
/public/UK-Sovereign-AI-Validation-Concept-Note.pdf
```

A placeholder PDF is included at that path. Replace it with your final partner-ready PDF before launch.

## Main files

```txt
src/App.jsx        Main website component
src/main.jsx       React entry point
src/index.css      Tailwind CSS entry
public/            Static assets, including the concept note PDF
```

## Deployment fix note

The project uses Tailwind CSS v3.4.17 with the standard PostCSS plugin configuration. It intentionally does not use `@tailwindcss/postcss`, which is for Tailwind v4.

The package manager is pinned to `pnpm@9.15.4` in `package.json`. Vercel should install with pnpm when building the latest commit.
