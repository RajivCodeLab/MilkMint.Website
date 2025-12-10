You are GitHub Copilot. Your job is to upgrade and improve the existing Next.js website at milkmint.app.

Context:
- The brand is MilkMint: a smart milk delivery & billing app for milk vendors, dairies, and societies.
- Improve visuals, layout, text, responsiveness, and components.
- You must not break the existing structure. Only enhance it.
- Use the content provided below to rewrite or expand sections.
- Use Tailwind CSS if the project already includes it. If not, generate clean CSS modules.
- Keep code clean, accessible, SEO-ready.

Branding Guidelines:
- Colors: Mint Green (#D1F5D3), Dark Green (#0B5326), White
- Tone: Clean, modern, minimal, startup-friendly
- Rounded corners, soft shadows
- Use Poppins or Inter font if available

Update or Create the Following Sections:

1. HERO SECTION
Headline: “Smart Milk Delivery & Billing App for Milk Vendors & Societies”
Subheadline: “No more registers. No more delivery mistakes. No more billing confusion.”
Buttons:
- Join Early Access (links to /early-access or WhatsApp)
- WhatsApp Us (+91 7899301122)

2. PROBLEM SECTION
Show the key pain points visually or as bullet points:
- Handwritten registers
- Missed deliveries
- Wrong quantities
- Confusing monthly bills
- Payment delays
- Customer disputes

3. SOLUTION SECTION
List core features:
- Track daily deliveries
- Auto-generate monthly bills
- PDF invoices
- Payment history
- Customer management
- Delivery history

4. HOW IT WORKS SECTION
Create a 4-step flow:
1. Add customers
2. Track daily delivery
3. Bill auto-generated
4. Download PDF & collect payments

5. BENEFITS SECTION
Vendor Benefits:
- Saves 6–8 hours/month
- Eliminates disputes
- Builds customer trust
- Simple payment tracking
Society Benefits:
- Transparent tracking
- No delivery complaints

6. EARLY ACCESS SECTION
Include:
- Free usage during testing
- Priority onboarding
- Lifetime discount for early users
- Earn ₹200 per vendor referral
Button: Join Early Access

7. TESTIMONIALS SECTION
Add placeholders:
- “I lose customers due to billing confusion—MilkMint solves it.”
- “Delivery tracking + billing in one app is a game changer.”

8. FAQ SECTION
Add 4–5 meaningful FAQs:
- Is MilkMint free for early users?
- Does it work on any Android phone?
- Do customers need the app?
- Can vendors add delivery boys?

9. CONTACT SECTION
Add:
- WhatsApp CTA
- Instagram link
- Email input or mailto
- CTA: “Talk to us on WhatsApp”

10. FOOTER
Add:
- Logo placeholder
- About link
- Privacy Policy
- Terms
- © MilkMint 2025

General Requirements:
- Write clean JSX components
- Use server components unless interactivity required
- Organize sections into separate components (Hero.tsx, Features.tsx, etc.)
- Use proper SEO tags with <Head> or metadata export
- Make layout responsive on mobile
- Add animations on scroll (optional with framer-motion)
- Optimize images via next/image

Task:
Refactor the existing page.tsx and components to integrate all sections above.
If components already exist, update their content and design.
If components do not exist, create them.

Output:
Return the updated or newly generated code for:
- page.tsx
- Any new component files
- Tailwind classes or CSS modules
- Updated metadata
- Optional: new folder structure suggestion
