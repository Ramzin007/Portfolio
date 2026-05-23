# Muhammed Ramzin P Portfolio

A production-grade personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Radix/shadcn-style UI primitives, Lucide Icons, SEO metadata, structured data, and a CMS-ready data architecture.

## Highlights

- Responsive recruiter/client-focused portfolio sections: hero, about, skills, projects, experience, education, certifications, GitHub stats, contact, and footer.
- Premium interactive UI with sticky scrollspy navigation, command palette, theme persistence, scroll progress, subtle cursor interaction, animated reveals, project case-study modals, filters, search, toast states, and accessible controls.
- SEO and platform readiness: Open Graph image, Twitter metadata, sitemap, robots.txt, manifest, favicon, semantic layout, optimized local SVG assets, and structured person data in the page.
- API-ready contact form with Zod validation and a Next.js route prepared for Resend, Postmark, SendGrid, or webhook delivery.
- Scalable source organization under `src/app`, `src/components`, `src/sections`, `src/data`, `src/hooks`, `src/lib`, and `src/types`.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI primitives
- Lucide Icons
- React Hook Form + Zod
- next-themes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

Both commands should pass before deployment.

## Customize Portfolio Data

Most content lives in:

```txt
src/data/portfolio.ts
```

Update the profile, projects, skills, certifications, and GitHub statistics there. Replace project screenshots in `public/images/projects` when available.

## Contact Email Integration

The form posts to:

```txt
src/app/api/contact/route.ts
```

To send real email, add your provider SDK and environment variables, then replace the placeholder success response with the provider call.

Example environment variables:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Add email provider environment variables if you wire real contact delivery.
5. Deploy.

Vercel will run `next build` automatically.

## Notes

- The resume download points to `public/resume.pdf`; replace that file to update the downloadable resume.
- The GitHub graph uses live fetches with portfolio-friendly fallbacks.
