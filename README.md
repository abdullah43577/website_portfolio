# Portfolio — Abdullah Ayoola

Personal site of a fullstack engineer working across web, mobile and backend.
Next.js App Router, TypeScript, Tailwind — fully static, no CMS.

**[CLAUDE.md](./CLAUDE.md) is the working agreement for this repo.** It carries the design
system, the content model, the file-size rules and the gotchas. Read it before changing
anything.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run format   # prettier
```

## Environment

Copy `.env.example` to `.env` and fill in:

| Variable                   | Purpose                                                            |
| -------------------------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_LIVE_URL`     | Deployed base URL — metadata, sitemap, robots                      |
| `NEXT_PUBLIC_API_ENDPOINT` | External mail service the contact form POSTs to (`POST /sendMail`) |

Both are optional in development; the base URL falls back to the production domain.

## Editing content

There is no CMS. Everything the site says lives in `src/content/` as typed TypeScript:

| File              | Holds                                         |
| ----------------- | --------------------------------------------- |
| `site.ts`         | Name, role, email, socials, nav, availability |
| `profile.ts`      | About narrative, working principles, stats    |
| `projects.ts`     | Every project and case study                  |
| `capabilities.ts` | Services offered                              |
| `stack.ts`        | Tech, grouped by layer                        |
| `experience.ts`   | Roles and education                           |
| `open-source.ts`  | Published npm packages                        |
| `testimonials.ts` | Quotes                                        |
| `faq.ts`          | Questions                                     |

Adding a project means appending one object to `projects.ts`. The route, the case-study
page and the sitemap entry all follow automatically — set `featured: true` to surface it
on the home page.

## Structure

```
src/
  app/          routes: /, /projects, /projects/[slug], /contact
  components/
    layout/     header, mobile nav, theme toggle, footer
    home/       home page sections
    projects/   cards, index, case-study parts
    contact/    form and channels
    ui/         shared primitives
    icons/      brand SVGs
  content/      the entire content layer
  hooks/        use-theme, use-scroll-lock
  lib/          utils, theme script
```

## Theme

Light and dark, `class` strategy on `<html>`, persisted to `localStorage`, defaulting to
the system preference. Colours are CSS custom properties defined once in `globals.css` and
consumed through Tailwind — never hardcode a hex in a component.
