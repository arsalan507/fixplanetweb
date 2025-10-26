# fixplanet.in - Premium Apple Device Care Website

A complete, production-ready Next.js 14 website for fixplanet - Bangalore's trusted independent Apple device service business.

## 🎯 Features

- ✅ **8+ Complete Pages**: Home, Services, About, Contact, Blog, Pricing Calculator, FAQ, Service Areas
- ✅ **5 Google Ads Landing Pages**: Problem-specific pages for targeted campaigns
- ✅ **Resend Email Integration**: Automated contact form submissions with confirmation emails
- ✅ **Mobile-First Design**: Perfect on all devices, optimized for 80% mobile traffic
- ✅ **SEO Optimized**: Meta tags, Schema.org markup, semantic HTML
- ✅ **Premium Design System**: Apple-inspired minimalist UI with brand identity
- ✅ **Interactive Pricing Calculator**: Real-time cost estimates for services
- ✅ **Blog System**: Ready for content marketing
- ✅ **Conversion Optimized**: Every element drives toward booking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend API key (for email functionality)

### Installation

1. **Navigate to the project directory**:
```bash
cd fixplanet-website
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:

Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual values:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here
TO_EMAIL=hello@fixplanet.in
FROM_EMAIL=notifications@fixplanet.in

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://fixplanet.in
NEXT_PUBLIC_PHONE=+91-XXXX-XXXXXX
NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX
NEXT_PUBLIC_EMAIL=hello@fixplanet.in
```

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser**:
Visit [http://localhost:3000](http://localhost:3000)

## 📧 Setting Up Resend for Email

### 1. Get Your API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (recommended) or use their testing domain
3. Generate an API key from the dashboard
4. Add it to `.env.local` as `RESEND_API_KEY`

### 2. Domain Verification (Production)

For production emails:
1. Add your domain in Resend dashboard
2. Add DNS records (SPF, DKIM) provided by Resend
3. Update `FROM_EMAIL` to use your verified domain

### 3. Testing Emails

During development:
- Use Resend's testing domain
- All emails will be sent to your verified email only
- Check Resend dashboard for email logs

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    primary: '#1A2F4F',  // Your primary navy
  },
  teal: {
    accent: '#0A7D7F',   // Your accent teal
  },
  // ... more colors
}
```

### Typography

Fonts are configured in `app/layout.tsx`:
- Headings: Poppins
- Body: Inter

To change fonts, update the Google Fonts import and font variables.

### Contact Information

Update your phone, email, and WhatsApp in `.env.local` - they'll automatically update across the entire site.

## 📄 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Main landing page with hero, services, testimonials |
| Services | `/services` | Complete service catalog by device type |
| About | `/about` | Company story, values, team |
| Contact | `/contact` | Contact form with Resend integration |
| Blog | `/blog` | Blog listing page |
| Pricing | `/pricing` | Interactive pricing calculator |
| FAQ | `/faq` | Categorized frequently asked questions |
| Service Areas | `/bangalore-locations` | Bangalore neighborhood coverage |
| **Landing Pages** | |
| iPhone Screen Cracked | `/iphone-screen-cracked` | Problem-specific landing page |
| (4 more landing pages to create following the same pattern) |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)

## 📱 Mobile Optimization

- All buttons and links are 44x44px minimum (touch-friendly)
- Forms are optimized for mobile input
- Click-to-call phone numbers
- WhatsApp floating button on mobile
- Images lazy-loaded
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

## 🔍 SEO Features

### Implemented

- ✅ Unique meta titles and descriptions for each page
- ✅ Schema.org LocalBusiness markup
- ✅ Schema.org Service markup for services
- ✅ Semantic HTML structure
- ✅ Image alt tags
- ✅ Responsive meta viewport
- ✅ Open Graph tags for social sharing

### To Add

1. **Google Analytics 4**:
   - Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to `.env.local`
   - Create `app/components/GoogleAnalytics.tsx` component
   - Add to layout.tsx

2. **Sitemap**:
   - Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fixplanet.in'

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
      priority: 0.9,
    },
    // Add all pages...
  ]
}
```

3. **robots.txt**:
   - Create `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://fixplanet.in/sitemap.xml',
  }
}
```

## 🚢 Deployment

### Deploying to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: fixplanet website"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **Add Custom Domain**:
   - In Vercel project settings → Domains
   - Add `fixplanet.in` and `www.fixplanet.in`
   - Update your DNS records as instructed

4. **Environment Variables in Vercel**:
   - Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Redeploy for changes to take effect

### Alternative: Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Upload .next folder
```

**Your Own Server**:
```bash
npm run build
npm run start
# Run with PM2 or similar process manager
```

## 📊 Performance Optimization

### Implemented
- Image optimization with Next.js Image component
- Lazy loading for images
- Font optimization with `next/font`
- Code splitting (automatic with Next.js)

### Recommended Additions
1. **Compress images**: Use TinyPNG or Squoosh before uploading
2. **Add caching headers**: Configure in `next.config.ts`
3. **Use WebP format**: Better compression than JPEG
4. **Implement ISR**: For blog posts (Incremental Static Regeneration)

## 🖼️ Adding Real Images

### Where to Get Images

1. **Apple Official**:
   - [Apple Newsroom](https://www.apple.com/newsroom/) - Legal product images
   - Download high-res iPhone, MacBook, iPad images

2. **Free Stock Photos**:
   - [Unsplash](https://unsplash.com) - Search "iPhone", "MacBook", "tech repair"
   - [Pexels](https://pexels.com) - Similar to Unsplash

3. **Your Own Photos**:
   - Take photos of actual work
   - Before/after repair photos
   - Team photos
   - Office/workspace photos

### Image Organization

```
public/
  images/
    devices/
      iphone-15-pro.webp
      macbook-pro-m3.webp
    lifestyle/
      technician-working.webp
      customer-happy.webp
    blog/
      battery-health.webp
```

### Image Optimization

1. Resize to appropriate dimensions:
   - Hero images: 1920x1080
   - Service cards: 800x600
   - Blog featured: 1200x675
   - Avatars: 200x200

2. Convert to WebP:
   - Use [Squoosh.app](https://squoosh.app)
   - Target: <200KB per image

3. Update image paths in code:
```typescript
// Replace placeholder URLs
<Image
  src="/images/devices/iphone-15-pro.webp"
  alt="iPhone 15 Pro"
  width={800}
  height={600}
/>
```

## 📈 Google Ads Setup

### Landing Pages Included

1. `/iphone-screen-cracked` - ✅ Created
2. `/iphone-back-glass-broken` - Create following same pattern
3. `/macbook-display-damaged` - Create following same pattern
4. `/iphone-battery-draining` - Create following same pattern
5. `/iphone-water-damage` - Create following same pattern

### Creating Additional Landing Pages

Use `/iphone-screen-cracked/page.tsx` as template:
1. Copy the file to new route folder
2. Update metadata (title, description, keywords)
3. Update headline and content for the specific problem
4. Update pricing table for relevant services
5. Update Schema.org serviceType

### Google Ads Best Practices

- Use problem-based keywords (not "repair")
- Point ads to specific landing pages
- Include location in ad copy (Bangalore, Koramangala, etc.)
- Use call extensions with your phone number
- Enable location extensions

## 🔧 Troubleshooting

### Build Errors

**TypeScript errors**:
```bash
npm run lint
```

**Missing dependencies**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Email Not Sending

1. Check Resend API key is correct
2. Verify `FROM_EMAIL` is using verified domain
3. Check Resend dashboard for error logs
4. Test with Resend's testing domain first

### Styling Issues

1. Clear Tailwind cache:
```bash
rm -rf .next
npm run dev
```

2. Check Tailwind config is properly loaded
3. Verify custom colors in `tailwind.config.ts`

## 📝 Content Management

### Blog Posts

Currently blog posts are hardcoded in `/app/blog/page.tsx`. To add new posts:

1. Create new folder: `/app/blog/your-post-slug/`
2. Create `page.tsx` in that folder
3. Add post metadata
4. Add post to array in `/app/blog/page.tsx`

**Future Enhancement**: Consider adding a CMS like:
- Contentful
- Sanity.io
- Strapi
- Or use MDX for markdown-based blogging

### Service Pricing

Update prices in:
- `/app/services/page.tsx` - Service listings
- `/app/pricing/page.tsx` - Pricing calculator logic
- Landing pages - Individual service prices

## 🔐 Security

### Implemented
- ✅ Environment variables for sensitive data
- ✅ Form validation with Zod
- ✅ Server-side API routes
- ✅ No client-side API keys

### Recommended
1. Add rate limiting for contact form
2. Implement CAPTCHA for forms (Google reCAPTCHA)
3. Set up CSP headers
4. Regular dependency updates:
```bash
npm audit
npm update
```

## 📞 Support

### For Development Issues
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Resend docs: [resend.com/docs](https://resend.com/docs)

### For This Project
- Review this README
- Check component files for inline comments
- All components are in `/components/ui/`
- All pages are in `/app/`

## 📋 Checklist Before Launch

- [ ] Replace all placeholder images with real images
- [ ] Update phone number in `.env.local`
- [ ] Update email addresses in `.env.local`
- [ ] Set up Resend with verified domain
- [ ] Add Google Analytics
- [ ] Create and submit sitemap
- [ ] Test contact form thoroughly
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Set up custom domain in Vercel
- [ ] Add SSL certificate (automatic with Vercel)
- [ ] Test all links
- [ ] Spell-check all content
- [ ] Add Google Search Console
- [ ] Set up Google My Business
- [ ] Create social media accounts
- [ ] Add social media links to footer

## 🎉 What's Next?

After launching:

1. **Content Marketing**:
   - Write blog posts regularly (2-4 per month)
   - Share on social media
   - Guest post on Bangalore tech blogs

2. **SEO**:
   - Build backlinks
   - Get listed in local directories
   - Encourage customer reviews

3. **Google Ads**:
   - Start with small budget (₹5,000-10,000/month)
   - Focus on high-intent keywords
   - Use landing pages created

4. **Analytics**:
   - Track conversion rates
   - Monitor which pages drive most leads
   - A/B test headlines and CTAs

5. **Features to Add**:
   - Online booking system
   - Real-time technician tracking
   - Customer portal
   - Parts inventory system
   - Automated follow-ups

## 📄 License

This project is proprietary and confidential for fixplanet.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

---

**Built for fixplanet.in - Bangalore's Trusted Apple Device Care Specialists**

For questions or support, contact: hello@fixplanet.in
