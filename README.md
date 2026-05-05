# UK Sovereign AI Product Validation Network

A Vite + React + Tailwind landing site for a proposed UK-facing sovereign AI product validation network.

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create a new GitHub repository.
2. Push this project to GitHub.
3. Go to Vercel and import the GitHub repository.
4. Vercel should auto-detect Vite. If not, use:
   - Framework: Vite
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`

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

This package pins `tailwindcss` to `3.4.17` so the existing PostCSS config can use `tailwindcss` directly as the PostCSS plugin. This avoids the Tailwind v4/Vercel error that asks for `@tailwindcss/postcss`.

Use Vercel defaults:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

