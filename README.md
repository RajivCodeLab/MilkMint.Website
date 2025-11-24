# MilkMint Website (Next.js + Tailwind)

This scaffold provides a minimal Next.js 14 + Tailwind CSS + TypeScript project for the MilkMint public website.

Quick start

1. Install dependencies:

```pwsh
npm install
```

2. (Already included) Framer Motion is listed as a dependency. If you need to add or update it:

```pwsh
npm install framer-motion
```

3. Run the dev server:

```pwsh
npm run dev
```

Notes
- Branding colors, fonts (Poppins for headings, Inter for body), rounded corners and animations are configured in `tailwind.config.cjs` and `src/app/styles/globals.css`.
- Replace `public/images/milkmint_logo.png` with your provided PNG asset. A placeholder `public/images/logo.svg` is included and will be used as fallback.
- Pages created: `/`, `/plans`, `/download`, `/privacy`, `/terms`.
- Sections are located in `src/app/sections` and are built as reusable components.

Next steps you might want me to do:
- Wire CMS/content for plans and features
- Add accessibility improvements and SEO metadata
- Connect to analytics or CI