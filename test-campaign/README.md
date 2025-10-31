# FIXplanet Landing Page - Google Ads Optimized

A high-converting landing page for Google Ads campaigns targeting "iPhone screen cracked" searches in Bangalore.

## ✅ Google Ads Compliance Features

This landing page is specifically designed to comply with Google's advertising policies:

- ✅ **Problem-focused headline** ("iPhone Screen Cracked?" not "iPhone Screen Repair")
- ✅ **Compliant language** (uses "replacement" instead of "repair")
- ✅ **No banned keywords** in prominent positions
- ✅ **Privacy Policy & Terms** pages included
- ✅ **Fast loading** (<2 seconds)
- ✅ **Mobile-optimized** (80% of traffic)
- ✅ **Clear call-to-action**
- ✅ **Transparent pricing mentioned**

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd landing-page
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment to Vercel (Recommended)

### Option 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd landing-page
vercel
```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: `fixplanet-landing` (or your choice)
   - Directory: `./`
   - Override settings: No

4. Your landing page will be live at: `https://fixplanet-landing.vercel.app`

### Option 2: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (push landing-page folder to GitHub first)
4. Vercel will auto-detect Next.js
5. Click "Deploy"
6. Done! Your site is live

### Option 3: Custom Domain

After deployment on Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `iphone-screen.fixplanet.in`)
3. Update DNS records as shown
4. SSL certificate auto-configured

## 🔧 Configuration

### Environment Variables

Create `.env.local` file (copy from `.env.local.example`):

```env
NEXT_PUBLIC_PHONE=+91 8105955009
NEXT_PUBLIC_WHATSAPP=918105955009
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important:** Update `NEXT_PUBLIC_SITE_URL` with your actual domain after deployment.

### Google Analytics Setup (Optional)

1. Create Google Analytics 4 property
2. Get Measurement ID (starts with `G-`)
3. Add to `.env.local`
4. Deploy

## 📱 Google Ads Setup Guide

### 1. Create Google Ads Account

1. Go to [ads.google.com](https://ads.google.com)
2. Create account or sign in
3. Set billing information

### 2. Create Search Campaign

**Campaign Settings:**
- Campaign type: **Search**
- Campaign goal: **Leads**
- Campaign name: "iPhone Screen Cracked - Bangalore"
- Networks: **Google Search only** (uncheck Display Network)
- Locations: **Bangalore, Karnataka** (15km radius)
- Location options: "People in or regularly in your targeted locations"
- Languages: English, Hindi, Kannada
- Budget: Start with ₹2,000/day
- Bidding: Target CPA (₹500-800)

### 3. Create Ad Group

**Ad Group Name:** "iPhone Screen Cracked"

**Keywords (Exact Match Recommended):**
```
[iphone screen cracked]
[iphone screen broken]
[iphone display cracked]
[cracked iphone screen]
[iphone screen shattered]
[iphone glass broken]
```

**Negative Keywords:**
```
-repair
-diy
-how to
-free
-cheap
-jobs
-delhi
-mumbai
```

### 4. Create Responsive Search Ad

**Headlines (use 10-15):**
1. iPhone Screen Cracked?
2. Same-Day Screen Replacement
3. Doorstep Service in 2 Hours
4. Premium OEM Screens Used
5. 12-Month Warranty Included
6. Serving All Bangalore
7. Free Diagnosis Worth ₹500
8. 1,000+ Happy Customers
9. Call +91 8105955009
10. Get Your iPhone Working Today

**Descriptions (use 3-4):**
1. Professional iPhone screen replacement at your doorstep. Premium OEM-quality screens with 12-month warranty. Serving Koramangala, Indiranagar, Whitefield.
2. Same-day service available. Watch the replacement happen. Pay only after you're satisfied. Free diagnosis included. Call now for instant quote.

**Final URL:** `https://your-domain.vercel.app`

**Display Path:** `fixplanet.in/iPhone-Screen`

### 5. Add Extensions

**Call Extension:**
- Phone: +91 8105955009
- Call reporting: On

**Sitelink Extensions:**
1. Get Instant Quote → /
2. Privacy Policy → /privacy
3. Terms of Service → /terms

**Callout Extensions:**
- Same Day Service
- 12 Month Warranty
- Doorstep Service
- Free Diagnosis
- Premium OEM Parts

**Structured Snippets:**
- Device Types: iPhone 15, iPhone 14, iPhone 13, iPhone 12
- Services: Screen Replacement, Display Restoration
- Areas: Koramangala, Indiranagar, Whitefield

### 6. Set Up Conversion Tracking

1. Go to Tools → Conversions
2. Click "+" to add conversion action
3. Select "Website"
4. Choose "Phone calls" or "Submit lead form"
5. Install conversion tracking code (if using form submissions)

**For Phone Calls:**
- Google will provide click-to-call forwarding number
- Calls >60 seconds = conversion

**For Form Submissions:**
- Track form submit button click as conversion
- Value: ₹1,000 per lead

### 7. Geographic Targeting

**Include:**
- Koramangala (560034, 560095)
- Indiranagar (560038)
- Whitefield (560066, 560067)
- HSR Layout (560102)
- Marathahalli (560037)

**Exclude:**
- Rest of Karnataka
- All other states

### 8. Ad Schedule

**High Bids:** 9 AM - 10 PM daily
**Reduced Bids:** 10 PM - 9 AM

**Bid Adjustments:**
- Mobile: +20%
- Koramangala/Indiranagar: +30%
- Evening (6 PM - 10 PM): +15%

## 📊 Expected Results

### Month 1:
- 50-80 leads
- ₹600-800 cost per lead
- Some ad disapprovals (normal, resubmit with fixes)

### Month 2:
- 100-150 leads
- ₹500-700 cost per lead
- Better quality score

### Month 3+:
- 150-200+ leads
- ₹400-600 cost per lead
- Consistent performance

## 🔍 Monitoring & Optimization

### Daily Checks:
- [ ] Ad approval status
- [ ] Phone call volume
- [ ] Form submissions
- [ ] Cost per lead

### Weekly Tasks:
- [ ] Review search terms report
- [ ] Add negative keywords
- [ ] Pause low-performing keywords
- [ ] Test new ad variations
- [ ] Check Quality Score

### Monthly Review:
- [ ] Overall ROI analysis
- [ ] Geographic performance
- [ ] Device performance (mobile vs desktop)
- [ ] Time-of-day analysis
- [ ] Budget adjustments

## 🛡️ Compliance Checklist

Before launching ads:
- [ ] Privacy Policy page live
- [ ] Terms of Service page live
- [ ] No "repair" in main headline
- [ ] Phone number visible
- [ ] Form works properly
- [ ] WhatsApp button functional
- [ ] Page loads in <2 seconds
- [ ] Mobile-responsive
- [ ] SSL certificate active (HTTPS)

## 📈 Alternative Landing Pages to Create

Once this is working, create more pages:

1. **iphone-back-glass-broken** - For back glass issues
2. **iphone-battery-draining** - For battery problems
3. **macbook-screen-cracked** - For MacBook displays
4. **iphone-water-damage** - For water damage recovery

Each gets its own Google Ads campaign.

## 🚨 Troubleshooting

### Ads Disapproved?

**Common reasons:**
1. Used "repair" in headline → Replace with "replacement" or "restoration"
2. Landing page not loading → Check Vercel deployment
3. Missing privacy policy → Ensure /privacy is accessible
4. Trademark issues → Never use "Apple Authorized" or "Apple Certified"

**Solution:**
1. Edit ad copy to be compliant
2. Click "Request Review" in Google Ads
3. Usually approved within 1-2 days

### Low Quality Score?

**Improve by:**
1. Make ad copy match keywords exactly
2. Include keyword in headline
3. Improve landing page speed
4. Add more relevant content
5. Increase click-through rate

## 💰 Budget Recommendations

**Starting Budget (Month 1):** ₹60,000-₹80,000
- ₹2,000/day for testing
- Focus on 2-3 highest-volume keywords
- Test multiple ad variations

**Scaling Budget (Month 2-3):** ₹1,00,000-₹1,50,000
- Increase on winning campaigns
- Expand to more keywords
- Add remarketing

## 📞 Support

For issues or questions:
- Email: hello@fixplanet.in
- Phone: +91 8105955009

## 🎯 Success Metrics

**Primary KPIs:**
- Cost Per Lead: Target ₹400-700
- Conversion Rate: Target 5-8%
- Call Volume: Target 100+/month by Month 2
- Lead Quality: 40%+ book service

**Track Weekly:**
- Total impressions
- Click-through rate (CTR)
- Average cost per click (CPC)
- Conversion rate
- Quality Score

---

**🔥 Key Insight:** This landing page targets the PROBLEM customers search for ("iPhone screen cracked") rather than advertising your SERVICE ("screen repair"). This is the workaround that makes Google Ads work for device care businesses.

**Good luck with your Google Ads campaign! 🚀**
