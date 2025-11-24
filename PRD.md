# MilkMint Public Website PRD (v1)

## 1. Overview
MilkMint.app is the official public-facing website for the MilkMint mobile application—an app that helps users subscribe to daily milk delivery and manage their vendor relationship. This PRD defines the structure, content, design guidelines, user flows, and feature set for a professional, animated, modern website matching the brand identity and logo theme.

Primary goals:
- Build trust with customers and vendors
- Explain MilkMint subscription features clearly
- Provide mobile app download links
- Present pricing/subscription plans
- Create a beautiful, modern, animated landing page with MilkMint’s color palette
- Keep the site lightweight, fast, and mobile-first


## 2. Target Audience
- Milk consumers looking for reliable daily milk delivery
- Milk vendors wanting digital tools to manage customers and collections
- Families exploring simple subscription-based household apps
- Local businesses searching for a transparent delivery experience


## 3. Brand & Design Guidelines
### Colors
Use tones inspired by the logo:
- **Primary:** #2FBFA4 (Mint Green)
- **Accent:** #1D7F6B (Dark Mint)
- **Background Light:** #E6F7F4
- **Neutral Dark Text:** #0F2E2A
- **White:** #FFFFFF

### Typography
- **Headings:** Rounded, friendly typeface (e.g., Poppins / Nunito)
- **Body:** Clean sans-serif (Inter / Roboto)

### Style
- Friendly, clean, minimal
- Rounded corners, soft shadows
- Subtle animations (fade-in, slide-up, micro-interactions)

### Graphic Elements
- Curved shapes / liquid blobs
- Checkmark + drop shape to echo the MilkMint logo identity


## 4. Website Structure
The website will include the following pages/sections:

### 4.1 HOME (Landing Page)
**Sections:**
1. **Hero Section**
   - Large MilkMint icon animation
   - Tagline: "Milk Delivery, Reimagined."
   - Sub tagline: "Simple Subscriptions. Easy Payments. Daily Freshness."
   - CTA Buttons:
     - Download App
     - View Subscription Plans
   - Floating drop-shaped animations

2. **How MilkMint Works** (3-step animated)
   - Step 1: Choose your vendor
   - Step 2: Select subscription
   - Step 3: Track delivery daily

3. **Features Section (Split Grid)**
   - Daily subscription tracking
   - Wallet & payments
   - Vendor discovery
   - Complaints & support
   - Animated icons

4. **Subscription Plans Preview**
   - Basic, Standard, Plus
   - CTA: View Full Pricing

5. **App Download Section**
   - QR Code + buttons for Android
   - Internal testing link button for now

6. **Vendor Section (Optional)**
   - For milk vendors looking to join
   - Vendor Management App features

7. **Testimonials** (optional for V2)
   - Auto-scrolling slider

8. **Footer**
   - Navigation
   - Support mail
   - Privacy Policy, Terms, Refund Policy


### 4.2 SUBSCRIPTION PLANS PAGE
**Plan cards:**
- Plan name
- Price range
- Benefits
- “Subscribe Now” CTA

**Plans:**
- **Basic:** Daily tracking, delivery updates
- **Standard:** Wallet + usage insights
- **Plus:** Priority support + analytics (future)


### 4.3 APP DOWNLOAD PAGE
**Purpose:** Provide a simple, professional page with:
- App mockup animation
- Link to Internal Testing / APK download
- QR Code
- Auto-detect device message


### 4.4 TERMS, PRIVACY, REFUNDS
Clear, legally safe pages for payment onboarding.


## 5. Animations Requirements
- Hero icon: gentle bounce / rotation
- Scroll-triggered fade-ins
- Drop-shaped floating assets moving slowly
- Hover animations for buttons and plan cards
- App mockup slide-in

Framework suggestion: **GSAP** or **Framer Motion** (if Next.js)


## 6. Technology Stack
Recommended:
- **Next.js / React** for SEO + fast load
- **TailwindCSS** for styling
- **GSAP** / **Framer Motion** for animation
- **Vercel** hosting

Optional:
- SanityCMS for editable content (future)


## 7. Mobile-First Design Requirements
- Single-column layout for phones
- Sticky bottom download button
- Reduced animation intensity


## 8. Functionality Checklist
- [ ] App download buttons with working links
- [ ] Responsive tablet + mobile layouts
- [ ] SEO optimized titles & meta
- [ ] Analytics (GA4)
- [ ] Contact form (optional)
- [ ] Subscription plan detail links
- [ ] Floating animation elements
- [ ] Fast LCP (<2 sec)


## 9. Copywriting (Draft)
### Hero
**Your Milk. Your Way. Every Day.**
"MilkMint helps you manage subscriptions, track deliveries, and pay vendors—all in one simple app."

### Features
"Beautifully simple milk delivery management. Built for families and local vendors."

### CTA
"Download MilkMint and start fresh today."


## 10. Delivery Timeline
**Phase 1 — 3 Days**
- Hero page + download page
- Subscription plan page

**Phase 2 — 4 Days**
- Animations + vendor section
- Footer + policies

**Total:** 7 Days


## 11. Hosting Requirements
- Domain: https://milkmint.app
- HTTPS enabled
- CDN caching
- Automatic deployments


## 12. Future Expansion (Optional)
- Login portal for vendors
- Blog section
- Marketing automation
- Multi-language support


---
**End of PRD — MilkMint Public Website**

