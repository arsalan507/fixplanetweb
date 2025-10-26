# FIXplanet Website - Complete Deployment & SEO Guide

This comprehensive guide will walk you through deploying your FIXplanet website to Vercel, setting up all necessary services, and optimizing for SEO.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [GitHub Setup](#github-setup)
3. [Environment Variables Setup](#environment-variables-setup)
4. [Vercel Deployment](#vercel-deployment)
5. [Google Services Setup](#google-services-setup)
6. [SEO Configuration](#seo-configuration)
7. [Post-Deployment Checklist](#post-deployment-checklist)

---

## 1. Prerequisites

### Install Required Tools
- [x] Vercel CLI (already installed)
- [ ] Git (check with `git --version`)
- [ ] Node.js v18+ (check with `node --version`)

---

## 2. GitHub Setup

### Step 2.1: Create GitHub Repository

If the repository doesn't exist yet:

1. Go to https://github.com/new
2. Repository name: `fixplanetweb`
3. Set to **Public** or **Private**
4. **DO NOT** initialize with README (we already have code)
5. Click "Create repository"

### Step 2.2: Push Code to GitHub

The code is already committed locally. Now push it:

```bash
# If you get authentication errors, you may need to use SSH or Personal Access Token

# Option A: Using Personal Access Token (Recommended)
git push -u origin main

# If prompted for credentials:
# Username: your_github_username
# Password: your_personal_access_token (NOT your GitHub password)
```

### Step 2.3: Create Personal Access Token (if needed)

If you don't have a Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: `vercel-deployment`
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing to GitHub

Alternatively, set up SSH:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: https://github.com/settings/ssh/new
# Then change remote to SSH
git remote set-url origin git@github.com:arsalan507/fixplanetweb.git
git push -u origin main
```

---

## 3. Environment Variables Setup

You need to obtain API keys and credentials for the following services:

### 3.1 Resend (Email Service)

**What it does**: Handles contact form submissions and email notifications

**How to get it**:
1. Go to https://resend.com/
2. Sign up for a free account
3. Verify your email
4. Go to "API Keys" section
5. Click "Create API Key"
6. Copy the key (starts with `re_`)

**Variables needed**:
- `RESEND_API_KEY=re_xxxxxxxxxxxxx`
- `TO_EMAIL=hello@fixplanet.in` (where you receive contact form emails)
- `FROM_EMAIL=notifications@fixplanet.in` (sender email - must be verified domain)

**Note**: Free plan allows 100 emails/day. You'll need to verify your domain to send from `@fixplanet.in`

### 3.2 Google Analytics 4 (GA4)

**What it does**: Tracks website visitors and user behavior

**How to get it**:
1. Go to https://analytics.google.com/
2. Sign in with your Google account
3. Click "Start measuring"
4. Set up your property:
   - Property name: "FIXplanet Website"
   - Timezone: Asia/Kolkata
   - Currency: Indian Rupee (INR)
5. Add a data stream:
   - Select "Web"
   - Website URL: `https://fixplanet.in` (or your Vercel URL initially)
   - Stream name: "FIXplanet Main Site"
6. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)

**Variable needed**:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### 3.3 Site Configuration

**Variables needed**:
- `NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app` (get this after first deployment)
- `NEXT_PUBLIC_PHONE=+91-XXXX-XXXXXX` (your business phone)
- `NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX` (WhatsApp number without + or -)
- `NEXT_PUBLIC_EMAIL=hello@fixplanet.in` (your business email)

---

## 4. Vercel Deployment

### Option A: Deploy via Vercel Dashboard (Recommended for first time)

1. **Login to Vercel**
   - Go to https://vercel.com/
   - Click "Sign Up" or "Login"
   - Use GitHub to sign in (easier integration)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your `fixplanetweb` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: **fixplanet-website** ⚠️ IMPORTANT
   - Build Command: `npm run build` (leave as default)
   - Output Directory: Leave empty (Next.js auto-detects)
   - Install Command: `npm install` (leave as default)

   **Note**: Do NOT create a vercel.json file at the root when using the dashboard - it will conflict with these settings!

4. **Add Environment Variables**
   Click "Environment Variables" and add ALL the variables from section 3:

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   TO_EMAIL=hello@fixplanet.in
   FROM_EMAIL=notifications@fixplanet.in
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
   NEXT_PUBLIC_PHONE=+91-XXXX-XXXXXX
   NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX
   NEXT_PUBLIC_EMAIL=hello@fixplanet.in
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - You'll get a URL like: `https://fixplanet-website-xxxxx.vercel.app`

6. **Update NEXT_PUBLIC_SITE_URL**
   - Go to Project Settings → Environment Variables
   - Update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL
   - Redeploy: Go to Deployments → Click "..." → "Redeploy"

### Option B: Deploy via Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Follow the prompts and set environment variables via dashboard.

---

## 5. Google Services Setup

### 5.1 Google Search Console

**What it does**: Monitors your site's presence in Google Search results

**Setup Steps**:
1. Go to https://search.google.com/search-console
2. Click "Start now" and sign in
3. Add property: Enter your Vercel URL or domain
4. Verify ownership:
   - **HTML tag method**: Copy meta tag and add to `app/layout.tsx` in `<head>`
   - **DNS method**: Add TXT record to your domain DNS
5. Submit your sitemap: `https://your-site.vercel.app/sitemap.xml`

### 5.2 Google Business Profile

**What it does**: Shows your business on Google Maps and local search

**Setup Steps**:
1. Go to https://business.google.com/
2. Sign in and click "Manage now"
3. Enter business information:
   - Business name: FIXplanet
   - Category: Electronics Repair Shop
   - Address: Your service locations in Bangalore
   - Phone: Your business phone
   - Website: Your Vercel/domain URL
4. Verify your business (via postcard, phone, or email)
5. Add photos, hours, services

### 5.3 Google My Business API (Optional)

For displaying reviews and business info dynamically:
1. Go to https://console.cloud.google.com/
2. Create new project: "FIXplanet"
3. Enable "Google My Business API"
4. Create credentials (API key)
5. Add to environment variables

---

## 6. SEO Configuration

### 6.1 Custom Domain Setup (Optional but Recommended)

1. **Purchase Domain** (if you own fixplanet.in):
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)

2. **Add Domain to Vercel**:
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add domain: `fixplanet.in`
   - Add domain: `www.fixplanet.in`

3. **Update DNS Records**:
   Vercel will show you DNS records to add. Typically:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS Propagation** (5 minutes to 48 hours)

5. **Update Environment Variables**:
   - Change `NEXT_PUBLIC_SITE_URL` to `https://fixplanet.in`
   - Redeploy

### 6.2 Sitemap

Your Next.js app should auto-generate a sitemap. Verify at:
`https://your-site.vercel.app/sitemap.xml`

If not, create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fixplanet.in'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

### 6.3 Robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fixplanet.in'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### 6.4 Meta Tags & OpenGraph

Verify your `app/layout.tsx` has proper metadata:

```typescript
export const metadata: Metadata = {
  title: 'FIXplanet - Premium Apple Device Repair in Bangalore',
  description: 'Professional iPhone, iPad, MacBook repair services in Bangalore. Expert technicians, genuine parts, warranty guaranteed.',
  keywords: ['iPhone repair Bangalore', 'MacBook repair', 'iPad repair', 'Apple service center'],
  authors: [{ name: 'FIXplanet' }],
  openGraph: {
    title: 'FIXplanet - Premium Apple Device Repair',
    description: 'Professional Apple device repair services in Bangalore',
    url: 'https://fixplanet.in',
    siteName: 'FIXplanet',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIXplanet - Premium Apple Device Repair',
    description: 'Professional Apple device repair services in Bangalore',
    images: ['/images/twitter-image.png'],
  },
}
```

### 6.5 Schema Markup (Structured Data)

Your app already has Schema.tsx component. Ensure it's used on key pages:

```typescript
// In app/page.tsx or app/layout.tsx
import Schema from '@/components/ui/Schema'

export default function Page() {
  return (
    <>
      <Schema />
      {/* rest of your page */}
    </>
  )
}
```

### 6.6 Performance Optimization

1. **Image Optimization**: Use Next.js `<Image>` component
   ```typescript
   import Image from 'next/image'

   <Image
     src="/images/logo.png"
     alt="FIXplanet Logo"
     width={200}
     height={50}
     priority
   />
   ```

2. **Lighthouse Audit**:
   - Open your site in Chrome
   - Press F12 → Lighthouse tab
   - Run audit for Performance, SEO, Accessibility
   - Fix issues highlighted

3. **Core Web Vitals**:
   - Monitor in Vercel Analytics (free)
   - Check Google Search Console → Core Web Vitals

---

## 7. Post-Deployment Checklist

### Essential Tasks

- [ ] Verify website is live at Vercel URL
- [ ] Test contact form (sends email via Resend)
- [ ] Verify Google Analytics is tracking (check Real-time reports)
- [ ] Submit sitemap to Google Search Console
- [ ] Test all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify WhatsApp click-to-chat works
- [ ] Check phone number links work
- [ ] Test all internal navigation

### SEO Tasks

- [ ] Google Search Console verified and sitemap submitted
- [ ] Google Analytics tracking verified
- [ ] Google Business Profile created and verified
- [ ] Meta descriptions on all pages (check page source)
- [ ] OpenGraph images working (test with https://www.opengraph.xyz/)
- [ ] Schema markup validated (https://validator.schema.org/)
- [ ] robots.txt accessible (`/robots.txt`)
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Lighthouse score > 90 for SEO
- [ ] Core Web Vitals in green zone

### Marketing Tasks

- [ ] Set up Google Ads (if planning paid advertising)
- [ ] Create Facebook Business Page
- [ ] Create Instagram Business Account
- [ ] Set up Facebook Pixel (for tracking conversions)
- [ ] Create WhatsApp Business Account
- [ ] List on Justdial, Sulekha, UrbanClap
- [ ] Add business to Apple Maps

### Monitoring

- [ ] Set up Vercel Analytics (free tier)
- [ ] Enable Google Analytics 4 events tracking
- [ ] Set up uptime monitoring (uptimerobot.com - free)
- [ ] Configure error tracking (Sentry - optional)

---

## 8. Continuous Deployment

Once connected to GitHub, Vercel will automatically deploy:
- **Every push to `main`** branch → Production deployment
- **Pull requests** → Preview deployments
- **Other branches** → Preview deployments

To deploy changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

Wait 2-3 minutes, and your changes will be live!

---

## 9. Troubleshooting

### Build Fails
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly
- Test build locally: `cd fixplanet-website && npm run build`

### Contact Form Not Sending Emails
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for delivery status
- Verify domain is verified in Resend (for custom FROM email)
- Check Vercel function logs

### Analytics Not Tracking
- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is correct
- Check browser console for errors
- Disable ad blockers when testing
- Wait 24-48 hours for data to appear in GA4

### Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct in domain registrar
- Check Vercel domain settings
- Try accessing with `www.` prefix

---

## 10. Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Google Analytics: https://support.google.com/analytics
- Resend: https://resend.com/docs

### Contact
- Email: hello@fixplanet.in
- Website: https://fixplanet.in

---

## Quick Reference: Environment Variables

Copy and fill this template:

```bash
# Resend Email Service
RESEND_API_KEY=re_xxxxxxxxxxxxx
TO_EMAIL=hello@fixplanet.in
FROM_EMAIL=notifications@fixplanet.in

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
NEXT_PUBLIC_PHONE=+91-XXXX-XXXXXX
NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX
NEXT_PUBLIC_EMAIL=hello@fixplanet.in
```

---

**Last Updated**: October 2024
**Version**: 1.0

Good luck with your deployment! 🚀
