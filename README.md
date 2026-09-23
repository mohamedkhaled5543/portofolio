# Mohamed Khaled — Portfolio

AI Automation Engineer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS 4.

## Stack

- Next.js 16 (App Router, static generation)
- TypeScript
- Tailwind CSS v4
- Self-hosted fonts via `@fontsource` (Sora, Manrope, JetBrains Mono)
- Netlify Forms for the `/inquiry` project-intake form

## Structure

```
src/
  app/
    page.tsx                  → homepage (assembles section components)
    projects/[slug]/page.tsx  → dynamic project case-study pages
    inquiry/page.tsx          → project intake form
    sitemap.ts / robots.ts    → SEO
    icon.tsx / opengraph-image.tsx → generated favicon + OG image
  components/                 → Nav, Footer, Hero, sections, ProjectCard, WorkflowDiagram, InquiryForm...
  data/
    site.ts                   → personal info, services, tech stack, process
    projects.ts                → the three case studies (single source of truth)
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, connect the repo.
3. Netlify auto-detects Next.js. Build command: `npm run build`. The `netlify.toml`
   in this repo already sets that and enables `@netlify/plugin-nextjs`.
4. Deploy. No environment variables are required.
5. The `/inquiry` form is a static HTML form (server-rendered) with
   `data-netlify="true"`, so Netlify will detect and register it automatically
   on the first deploy. Submissions appear under **Site → Forms** in the
   Netlify dashboard, and you can turn on email notifications there.

## Content

All personal info, links, services, and the three project case studies live in
`src/data/site.ts` and `src/data/projects.ts` — edit those files to update copy
without touching components.
