# Mohamed Khaled — AI Engineer Portfolio

A cinematic, responsive portfolio showcasing Mohamed's work across Machine Learning, Generative AI, LLM applications, RAG, NLP, and AI automation.

## Built with
- Next.js App Router
- TypeScript
- Tailwind CSS
- Sora, Manrope, and JetBrains Mono self-hosted fonts

## Features
- Responsive layout and mobile navigation
- Animated hero and section transitions
- Searchable project gallery with category filters
- Individual project case studies with problem, approach, technologies, and workflow
- Direct GitHub links and a live demo link where one is available
- Contact dialog for email, LinkedIn, and GitHub
- SEO metadata, sitemap, and robots configuration

## Featured work
1. CampaignForge AI — LLM-powered marketing campaign generation with RAG.
2. Smart Hotel Operations Automation — reservation, housekeeping, checkout, and payment workflows.
3. AI Customer Support Automation — LLM classification and workflow routing.
4. AI Order Cancellation Agent — eligibility checks and confirmation before execution.
5. Bilingual PDF RAG Q&A — Arabic/English document question answering.
6. Network Attack Detector — UNSW-NB15 classification with a Streamlit demo.
7. EduPilot AI — graduation project in planning and initial setup; planned functionality is labelled as such.

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

## Deployment
The app is configured as a static Next.js export (`out/`), so it can be hosted on free static-site tiers. Recommended options are Render Static Sites or Netlify. On Render, connect this repository, use `npm run build` as the build command, and `out` as the publish directory. On Netlify, the included `netlify.toml` sets the same build and publish settings. No application API keys are required. The contact form prepares an email in the visitor's email app; it does not require a backend.

## Content updates
- Personal information and skills: `src/data/site.ts`
- Project case studies: `src/data/projects.ts`
- Main sections and UI: `src/components/`

## Contact
- GitHub: https://github.com/mohamedkhaled5543
- LinkedIn: https://www.linkedin.com/in/mkhaled-ai
- Email: mohamedeissa651@gmail.com
