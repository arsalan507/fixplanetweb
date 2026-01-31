# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FIXplanet.in is a doorstep Apple device repair service website for Bangalore. Next.js 16.1.1 (App Router), React 19, TypeScript 5.9.3, Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start dev server (Turbopack) on localhost:3000
npm run build    # Production build (used by Vercel)
npm run start    # Start production server
npm run lint     # ESLint
npx tsc --noEmit # Type-check without emitting
```

## Architecture

### Routing (App Router)

- **Main pages**: `app/about/`, `app/services/`, `app/pricing/`, `app/contact/`, `app/faq/`, `app/warranty/`
- **Blog**: `app/blog/page.tsx` (listing) + `app/blog/[slug]/page.tsx` (dynamic posts)
- **Area pages**: `app/areas/[area-name]/page.tsx` — 172+ **hardcoded** files (NOT dynamic `[slug]` routing). Each file has `const SLUG = 'koramangala'` and calls `getAreaBySlug(SLUG)`.
- **Landing pages**: `app/iphone-screen-cracked/` (Google Ads landing)
- **API**: Single endpoint `app/api/contact/route.ts` (POST — lead submission via Resend email + CRM webhook)
- **Sitemap**: `app/sitemap.ts` — dynamically generates XML from main pages + blog slugs + area slugs

### Data Layer (No CMS)

Blog posts and area data are stored as TypeScript arrays in `/data/`:

- **`data/blog-posts.ts`** — All blog posts as `BlogPost[]` with full markdown `content` field. Helper functions: `getBlogPostBySlug()`, `getAllBlogSlugs()`, `getFeaturedPost()`, `getRegularPosts()`.
- **`data/bangalore-areas.ts`** — 264 area entries as `BangaloreArea[]`. Helper functions: `getAreaBySlug()`, `getAllAreaSlugs()`, `getAreasByZone()`.

### Blog Content Rendering

Blog post `content` is markdown stored in template literals. The `formatContent()` function in `app/blog/[slug]/page.tsx` converts it to HTML. Supports: headings, bold, lists, images (`![alt](src)`), links (`[text](url)`), tables, horizontal rules, emojis. Blog posts get Article JSON-LD schema automatically.

### Lead Capture Flow

`BlogLeadForm` component (2-step wizard: device info → contact) and contact page both POST to `/api/contact`. The API: validates with Zod → sends business notification email via Resend → sends customer confirmation → syncs to CRM webhook (non-blocking).

### Components

- `components/ui/` — Button, Card, Input, TextArea, Select, Navigation, Footer, Schema (LocalBusiness JSON-LD)
- `components/blog/BlogLeadForm.tsx` — Multi-step lead form auto-rendered at top/bottom of every blog post

## Key Data Interfaces

```typescript
// data/blog-posts.ts
interface BlogPost {
  slug: string; title: string; excerpt: string; category: string;
  readTime: string; publishedDate: string; image: string;
  featured?: boolean; content: string; // markdown
  metaDescription: string; keywords: string[];
}

// data/bangalore-areas.ts
interface BangaloreArea {
  name: string; slug: string; zone: 'North'|'South'|'East'|'West'|'Central';
  responseTime: string; landmarks: string[]; nearbyAreas: string[];
  description: string; metaDescription: string;
}
```

## Styling

Tailwind CSS 4 with `@tailwindcss/postcss`. Brand colors defined in `app/globals.css` via `@theme`:
- Navy: `#0F1F35` (primary), Teal: `#0A7D7F` (accent), Gold: `#B8935E` (premium)
- Fonts: Poppins (headings), Inter (body)
- Use Tailwind classes like `text-navy-primary`, `bg-teal-accent`, `text-gold-premium`

CTA boxes in blog content use inline HTML with gradient styling: `background: linear-gradient(135deg, #0F1F35 0%, #0A7D7F 100%)`.

## Environment Variables

Required for full functionality (see `.env.local.example`):
- `RESEND_API_KEY` — Email service
- `TO_EMAIL`, `FROM_EMAIL` — Email addresses
- `CRM_API_URL`, `CRM_API_KEY` — CRM webhook
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics
- `NEXT_PUBLIC_SITE_URL` — `https://www.fixplanet.in`

## Business Details

- Phone: +91 8105955009
- WhatsApp: 918105955009
- Domain: fixplanet.in (www.fixplanet.in)
- 172+ service areas across Bangalore
- 12-month warranty on all repairs

## SEO Notes

- `app/sitemap.ts` generates sitemap from main pages + blog slugs + area slugs
- `public/robots.txt` allows all crawlers, blocks `/api/`, `/_next/`, `/admin/`
- Blog posts have Article JSON-LD structured data
- Service page has LocalBusiness schema
- Each page generates its own metadata via `generateMetadata()` or exported `metadata`
- Blog images go in `public/images/blog/`, referenced as `/images/blog/filename.png`
