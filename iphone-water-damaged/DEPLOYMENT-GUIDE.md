# 🚀 Complete Deployment & Google Ads Setup Guide

## ✅ What You Have Now

A Google Ads-compliant landing page specifically designed for "iPhone Screen Cracked" searches with:

✅ Problem-focused messaging (not service-focused)
✅ Simple 3-field form (Name, Phone, Device)
✅ Privacy Policy & Terms pages (required for Google Ads)
✅ Mobile-optimized & fast-loading
✅ WhatsApp integration
✅ Click-to-call functionality

---

## 📦 Step 1: Deploy to Vercel (5 minutes)

### Option A: Deploy via Vercel CLI (Recommended)

```bash
# 1. Install Vercel globally
npm install -g vercel

# 2. Navigate to landing page folder
cd /Users/arsalan/Documents/kineticxhub/website/FIXplanetwebsite/landing-page

# 3. Deploy
vercel

# Follow prompts:
# - Set up and deploy: YES
# - Which scope: [Your account]
# - Link to existing project: NO
# - Project name: fixplanet-iphone-screen
# - Directory: ./
# - Override settings: NO

# 4. You'll get a URL like: https://fixplanet-iphone-screen.vercel.app
```

### Option B: Deploy via Vercel Dashboard

1. Push your landing-page folder to GitHub:
```bash
cd landing-page
git init
git add .
git commit -m "Initial Google Ads landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com/new)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js → Click "Deploy"
6. Done! Your site is live

---

## 🌐 Step 2: Add Custom Domain (Optional but Recommended)

After deployment on Vercel:

1. Go to your project → Settings → Domains
2. Add custom domain: `iphone-screen.fixplanet.in` (subdomain recommended)
3. Update DNS records at your domain provider:
   ```
   Type: CNAME
   Name: iphone-screen
   Value: cname.vercel-dns.com
   ```
4. Wait 5-30 minutes for DNS propagation
5. SSL certificate auto-configured by Vercel

**Alternative domains you can use:**
- `screen.fixplanet.in`
- `cracked-screen.fixplanet.in`
- `iphone.fixplanet.in`

---

## 📱 Step 3: Set Up Google Ads Campaign

### A. Create Google Ads Account

1. Go to [ads.google.com](https://ads.google.com)
2. Sign in with Google account
3. Click "Start Now"
4. Set billing method (Rupay/Credit Card)

### B. Create Search Campaign

**Campaign Settings:**
```
Campaign Type: Search
Goal: Leads
Campaign Name: iPhone Screen Cracked - Bangalore
Networks: Google Search ONLY (uncheck Display)
Locations: Bangalore, Karnataka (15km radius)
  - Target: "People in or regularly in your targeted locations"
Languages: English, Hindi
Budget: ₹2,000/day (start small, scale up)
Bidding: Target CPA at ₹700
```

**IMPORTANT Geographic Settings:**
- Include: Koramangala, Indiranagar, Whitefield, HSR Layout, Marathahalli
- Exclude: Rest of India

### C. Create Ad Group

```
Ad Group Name: iPhone Screen Cracked
Default Bid: ₹40-60 per click
```

**Keywords (Exact Match - highest quality):**
```
[iphone screen cracked]
[iphone screen broken]
[iphone display cracked]
[cracked iphone screen]
[iphone screen shattered]
[iphone glass broken]
[iphone screen damaged]
```

**Negative Keywords (Add immediately):**
```
-repair
-diy
-how to
-tutorial
-free
-cheap
-jobs
-delhi
-mumbai
-pune
-wholesale
-software
```

### D. Create Responsive Search Ad

**Ad Copy (Google Ads Compliant):**

**Headlines (Add 10-15, Google will test combinations):**
1. iPhone Screen Cracked?
2. Same-Day Screen Replacement
3. Doorstep Service in 2 Hours
4. Premium OEM Screens
5. 12-Month Warranty
6. Serving All Bangalore
7. Free Diagnosis Worth ₹500
8. 1,000+ Satisfied Customers
9. Call +91 8105955009 Now
10. Get iPhone Working Today
11. Koramangala | Indiranagar
12. Pay After You're Satisfied
13. Watch Replacement Live
14. Professional Service
15. Same Location Visit

**Descriptions (Add 3-4):**
1. Professional iPhone screen replacement at your doorstep in Bangalore. Premium OEM-quality screens with 12-month warranty. Serving Koramangala, Indiranagar, Whitefield areas.
2. Same-day service available. Watch the replacement happen at your location. Pay only after complete satisfaction. Free diagnosis included. Call now for instant quote.
3. Trusted by 1,000+ customers. 4.9★ rating. 12-month warranty on all screen replacements. Transparent pricing. No hidden charges. Emergency service available.

**Final URL:** https://your-vercel-url.vercel.app

**Display Path:** `fixplanet.in/iPhone-Screen-Cracked`

### E. Add Ad Extensions (Increases click-through rate)

**Call Extension:**
```
Phone Number: +91 8105955009
Call Reporting: ON (track calls as conversions)
```

**Sitelink Extensions:**
```
1. Get Instant Quote → /
2. Privacy Policy → /privacy
3. Terms of Service → /terms
```

**Callout Extensions:**
```
- Same Day Service Available
- 12 Month Warranty Included
- Doorstep Service in Bangalore
- 15 Minute Response Time
- Premium OEM Parts Used
- Free Diagnosis
- 4.9★ Customer Rating
- No Hidden Charges
```

**Structured Snippets:**
```
Device Types: iPhone 15, iPhone 14, iPhone 13, iPhone 12, iPhone 11
Services: Screen Replacement, Display Restoration, Component Replacement
Areas: Koramangala, Indiranagar, Whitefield, HSR Layout, Marathahalli
```

---

## 📊 Step 4: Set Up Conversion Tracking

### Track Phone Calls:

1. In Google Ads → Tools → Conversions
2. Click "+" → Phone calls
3. Select "Calls from ads using call extensions"
4. Set minimum call length: 60 seconds
5. Count: One (unique conversions only)
6. Conversion value: ₹1,000 (estimated lead value)

Google will provide a forwarding number that tracks calls.

### Track Form Submissions (If you add backend):

1. Add conversion tracking code to thank you page
2. Trigger on form submit success
3. Value: ₹1,200 per form submission

---

## 💰 Budget & Bid Strategy

### Month 1 (Testing Phase):
```
Daily Budget: ₹2,000 (₹60,000/month)
Expected Leads: 50-80
Cost Per Lead: ₹600-800
Focus: 2-3 highest volume keywords
```

### Month 2 (Optimization Phase):
```
Daily Budget: ₹3,000-₹4,000 (₹90,000-₹1,20,000/month)
Expected Leads: 100-150
Cost Per Lead: ₹500-700
Focus: Scale winning keywords, add more ad variations
```

### Month 3+ (Scaling Phase):
```
Daily Budget: ₹4,000-₹5,000 (₹1,20,000-₹1,50,000/month)
Expected Leads: 150-200+
Cost Per Lead: ₹400-600
Focus: Expand to more problem types (battery, back glass)
```

### Bid Adjustments:
```
Mobile Devices: +20% (most searches on mobile)
Koramangala/Indiranagar: +30% (premium areas)
Evening (6 PM - 10 PM): +15% (high search time)
Weekends: +10% (more free time)
```

---

## 🎯 Week 1 Checklist After Launch

### Day 1:
- [ ] Verify landing page is live
- [ ] Test form submission
- [ ] Test click-to-call button
- [ ] Test WhatsApp button
- [ ] Check mobile responsiveness
- [ ] Verify Privacy & Terms pages load

### Day 2-3:
- [ ] Monitor ad approval status
- [ ] Check if any ads got disapproved
- [ ] If disapproved, edit and resubmit
- [ ] Monitor first impressions and clicks

### Day 4-7:
- [ ] Review search terms report
- [ ] Add negative keywords for irrelevant searches
- [ ] Check Quality Score (aim for 7+)
- [ ] Monitor cost per click
- [ ] Track phone call volume
- [ ] Calculate initial cost per lead

---

## 🔍 Daily Monitoring Tasks

**Check every morning:**
1. **Ad Status** - Any disapprovals?
2. **Budget** - Is it being spent?
3. **Phone Calls** - How many came in?
4. **Form Submissions** - Any leads?
5. **Cost Per Lead** - Within ₹400-800 range?

**Google Ads Dashboard:**
- Impressions (how many people saw your ad)
- Clicks (how many clicked)
- CTR (Click-Through Rate - aim for 3-5%)
- Avg. CPC (Cost Per Click - expect ₹30-70)
- Conversions (phone calls + forms)

---

## 🚨 Common Issues & Solutions

### Issue 1: Ads Disapproved
**Reason:** Used "repair" in headline or landing page
**Solution:**
- Edit ad copy to use "replacement" or "restoration"
- Click "Request Review"
- Usually approved in 1-2 days

### Issue 2: Low Quality Score (<5)
**Solution:**
- Make ad headlines match keywords exactly
- Improve landing page speed
- Increase relevance of ad copy

### Issue 3: High Cost Per Lead (>₹1,000)
**Solution:**
- Pause low-performing keywords
- Tighten geographic targeting
- Improve ad copy to increase CTR
- Add more negative keywords

### Issue 4: Low Impressions
**Solution:**
- Increase budget
- Broaden keyword match types (careful with this)
- Check if location targeting is too narrow
- Ensure ads are approved

### Issue 5: High Clicks But No Conversions
**Solution:**
- Test landing page with friends/family
- Ensure phone number is prominent
- Make form shorter/simpler
- Add trust signals (reviews, warranty info)

---

## 📈 Week-by-Week Optimization

### Week 1: Learning
- Let Google algorithm learn
- Don't make major changes
- Collect data on what's working
- Add negative keywords only

### Week 2-3: Initial Optimization
- Pause keywords with 0 conversions and 20+ clicks
- Increase bids on converting keywords by 15-20%
- Test new ad copy variations
- Add more callout extensions

### Week 4: Scaling
- Increase budget by 30-50% if CPL is good
- Add similar keywords
- Expand to adjacent problems (back glass, battery)
- Start remarketing campaign

---

## 🎓 Key Metrics to Track (Weekly)

**Primary Metrics:**
| Metric | Target | Formula |
|--------|--------|---------|
| Cost Per Lead (CPL) | ₹400-700 | Total Spend ÷ Leads |
| Conversion Rate | 5-8% | (Conversions ÷ Clicks) × 100 |
| Click-Through Rate (CTR) | 3-5% | (Clicks ÷ Impressions) × 100 |
| Quality Score | 7-10 | Google's rating (see keywords tab) |

**Secondary Metrics:**
- Average Position: Top 3
- Impression Share: >60%
- Average CPC: ₹30-70
- Cost Per Click (CPC)

---

## 🔐 Important Compliance Reminders

**NEVER use in ads:**
- ❌ "repair" in main headline
- ❌ "technician"
- ❌ "Apple Authorized"
- ❌ "Apple Certified"
- ❌ "fix" as main verb
- ❌ "service center"

**ALWAYS use instead:**
- ✅ "replacement"
- ✅ "restoration"
- ✅ "device care specialist"
- ✅ "screen replacement service"
- ✅ "hardware restoration"

---

## 🌟 Next Steps After Success

Once iPhone Screen campaign is profitable:

### Create Additional Landing Pages:

1. **iPhone Back Glass** (`/iphone-back-glass-broken`)
   - Keyword: "iPhone back glass broken"
   - Separate campaign

2. **iPhone Battery** (`/iphone-battery-draining`)
   - Keyword: "iPhone battery draining fast"
   - High volume

3. **MacBook Screen** (`/macbook-screen-cracked`)
   - Keyword: "MacBook screen cracked"
   - Higher ticket value

4. **Water Damage** (`/iphone-water-damage`)
   - Keyword: "iPhone dropped in water"
   - Emergency service angle

Each gets its own dedicated campaign with specific targeting.

---

## 📞 Need Help?

**Landing Page Issues:**
- Check Vercel deployment logs
- Ensure domain is properly configured
- Test on mobile device

**Google Ads Issues:**
- Review disapproval reasons
- Check search terms report daily
- Monitor Quality Score

**Contact:**
- Email: hello@fixplanet.in
- Phone: +91 8105955009

---

## ✅ Pre-Launch Final Checklist

Before running ads, verify:

- [ ] Landing page live and loading fast (<2 seconds)
- [ ] Form submits successfully
- [ ] Phone number clickable on mobile
- [ ] WhatsApp button works
- [ ] Privacy Policy page accessible
- [ ] Terms page accessible
- [ ] SSL certificate active (HTTPS)
- [ ] Mobile fully responsive
- [ ] Google Ads account set up
- [ ] Billing method added
- [ ] Conversion tracking installed

---

**🎯 Expected Timeline:**

- **Day 1-3:** Ad approval, initial traffic, learning phase
- **Week 1:** First leads start coming, ₹700-900 CPL
- **Week 2-3:** Optimization phase, CPL drops to ₹600-800
- **Week 4+:** Stable performance, 20-30 leads/week, ₹500-700 CPL

**🔥 Remember:** You're targeting the PROBLEM (cracked screen) not the SERVICE (screen repair). This is what makes Google Ads work for your business!

**Good luck! Your Google Ads-compliant landing page is ready to drive leads! 🚀**
