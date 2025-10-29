# VERCEL ENVIRONMENT VARIABLES SETUP

## 🎯 Quick Setup Guide

After getting your Google Analytics Measurement ID, add it to Vercel:

---

## 📋 STEP-BY-STEP INSTRUCTIONS:

### 1. Go to Vercel Dashboard

Visit: https://vercel.com/

### 2. Select Your Project

Click on: **fixplanet-website**

### 3. Go to Settings

Click: **Settings** tab (top navigation)

### 4. Click Environment Variables

In the left sidebar: **Environment Variables**

### 5. Add Google Analytics ID

Click **"Add New"** button

**Variable Details:**
```
Key: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: (Your GA Measurement ID that starts with G-)
Environment: ✅ Production ✅ Preview ✅ Development (select all three)
```

Click **"Save"**

### 6. Add Other Required Variables

Add these one by one:

**Site URL:**
```
Key: NEXT_PUBLIC_SITE_URL
Value: https://www.fixplanet.in
Environment: All three ✅
```

**Phone Number:**
```
Key: NEXT_PUBLIC_PHONE
Value: +91 9880740443
Environment: All three ✅
```

**WhatsApp Number:**
```
Key: NEXT_PUBLIC_WHATSAPP
Value: 919880740443
Environment: All three ✅
```

**Email:**
```
Key: NEXT_PUBLIC_EMAIL
Value: hello@fixplanet.in
Environment: All three ✅
```

### 7. Redeploy Your Website

**IMPORTANT:** After adding environment variables, you MUST redeploy!

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **three dots (...)** next to it
4. Click **"Redeploy"**
5. **UNCHECK** "Use existing Build Cache"
6. Click **"Redeploy"** button

Wait 2-3 minutes for deployment to complete.

---

## ✅ VERIFY IT'S WORKING:

### Test Google Analytics:

1. Visit your website: https://www.fixplanet.in
2. Open Google Analytics: https://analytics.google.com/
3. Go to **Reports** → **Realtime**
4. You should see **"1 user"** (yourself!)

### Check Browser Console (Developer Mode):

1. Visit: https://www.fixplanet.in
2. Press **F12** (opens Developer Tools)
3. Go to **Console** tab
4. Look for: No GA errors (should be clean)
5. Go to **Network** tab → Filter "gtag"
6. You should see requests to `gtag/js`

---

## 🔧 OPTIONAL: Add Google Tag Manager

If you want to use GTM (recommended for easier tracking management):

**Add GTM ID:**
```
Key: NEXT_PUBLIC_GTM_ID
Value: (Your GTM-XXXXXXX ID)
Environment: All three ✅
```

Then redeploy again.

---

## 📊 ALL ENVIRONMENT VARIABLES:

Here's the complete list you should have:

### Required:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics tracking
- `NEXT_PUBLIC_SITE_URL` - Your website URL
- `NEXT_PUBLIC_PHONE` - Contact phone number
- `NEXT_PUBLIC_WHATSAPP` - WhatsApp number
- `NEXT_PUBLIC_EMAIL` - Contact email

### Optional:
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager (if using)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Search Console verification
- `RESEND_API_KEY` - Email service (if using)
- `TO_EMAIL` - Form submission recipient
- `FROM_EMAIL` - Form submission sender

---

## ⚠️ IMPORTANT NOTES:

1. **Always select all 3 environments** (Production, Preview, Development)
2. **Always redeploy after adding variables** (they don't apply automatically)
3. **Uncheck "Use existing Build Cache"** when redeploying (ensures fresh build)
4. **Variables starting with NEXT_PUBLIC_** are visible in browser (okay for these)
5. **Never commit actual values to Git** (only examples)

---

## 🚨 TROUBLESHOOTING:

### Google Analytics not tracking:

**Check:**
1. ✅ Variable name is exactly: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. ✅ Value starts with `G-` (not GTM-)
3. ✅ All 3 environments selected
4. ✅ Website redeployed after adding variable
5. ✅ Wait 24-48 hours for data to appear in reports

**Test in Realtime:**
- Realtime reports work immediately (within 30 seconds)
- Standard reports take 24-48 hours to populate

### Website shows old version:

**Solution:**
1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Try incognito/private window
4. Check Vercel deployment status (should show "Ready")

---

## 🎉 DONE!

Once you've added the variables and redeployed, your website will have:

✅ Google Analytics tracking every visitor
✅ Proper site configuration
✅ Working contact information
✅ All features enabled

Test by visiting your site and checking Google Analytics Realtime report!
