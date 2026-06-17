# Refined PoC Prompt — SVETA Russia Tours (India-Focused)

## Context
This is a **frontend-only Proof of Concept** for a premium Russian tourism agency targeting **high-net-worth Indian travelers**. The PoC exists solely to win the proposal — it must impress, load fast, and feel strategically tailored to the Indian audience.

---

## DESIGN DNA

### Visual Direction (inspired by discover.moscow, discoverrussia.travel, russia.tours)
- **Typography**: Bold, clean, sans-serif (Inter or similar). Extreme contrast. Apple-level polish meets luxury editorial.
- **Color Palette**: 
  - Backgrounds: `#0a0a0a` (deep charcoal/black)
  - Text: White (`#ffffff`)
  - Accents: Gold (`#d4af37`) for primary CTAs, deep crimson (`#8b0000`) for secondary accents
  - Trust elements: subtle green (`#00a86b`) for WhatsApp/trust badges
- **Vibe**: Exclusive, safe, culturally immersive, high-end — with an Indian warmth.

### India-Specific Design Considerations
- INR currency indicators on pricing
- WhatsApp as primary CTA (not email)
- Mobile-first layout (India is mobile-dominant)
- Trust badges prominently visible (govt registered, years in business, happy travelers count)

---

## TECH STACK (Simplified & Performant)

- **Framework**: Next.js App Router (`app/page.tsx`)
- **Styling**: Tailwind CSS (mobile-first, responsive)
- **Animations**: Framer Motion (scroll reveals, fade-ins, micro-interactions)
- **3D/Visual flair**: CSS parallax + Framer Motion variants — NO Three.js (overkill for PoC, hurts load performance)
- **Icons**: Lucide React or Heroicons (lightweight)
- **Demo images**: `/public/moscow-hero.jpg`, `/public/stpetersburg-card.jpg`, `/public/kazan-card.jpg`, `/public/indian-tourist-group.jpg`

---

## PAGE STRUCTURE (Top to Bottom)

### 1. Sticky Transparent Navbar
- **Left**: Text logo — "SVETA | Signature Russia"
- **Right**: WhatsApp CTA button (icon + "Chat on WhatsApp") + "Plan Your Tour" secondary link
- On scroll, navbar gets a backdrop blur (`bg-black/80 backdrop-blur-md`)

### 2. Hero Section (The Hook)
- Full screen (`h-screen`)
- Dark gradient overlay on hero image (`bg-gradient-to-b from-black/60 via-black/40 to-black`)
- **Headline**: "Experience Russia. The Indian Way." (massive, bold)
- **Subheadline**: "Curated small-group signature tours to Moscow, St. Petersburg & Kazan. Designed exclusively for Indian travelers — by Indians who know Russia."
- **Primary CTA**: "Request Custom Itinerary" (gold button)
- **Secondary CTA**: "View Signature Tours" (outline button)
- **Subtle animated element**: Gentle floating particles or parallax depth on the hero image (Framer Motion, not Three.js)

### 3. Trust Bar (NEW — India-specific)
- Horizontal strip just below hero (or pinned to hero bottom)
- Icons + text: "🇮🇳 Indian-Owned & Operated" | "🎯 10+ Years Experience" | "🛂 Visa Assistance Included" | "👨‍👩‍👧‍👦 Family-Friendly Tours"
- Smooth horizontal scroll on mobile

### 4. Cultural Immersion Section (The Story)
- Asymmetrical layout (image left, text right on desktop; stacked on mobile)
- **Headline**: "Beyond the Guidebook. Closer to Home."
- **Copy**: "We don't just show you buildings — we unlock Russia through an Indian lens. From private Red Square access to halal-friendly dining in St. Petersburg, every detail is curated with your comfort in mind. Verified local experts, Hindi-speaking guides available, and absolute peace of mind."
- Inclusion of a small "What's included" checklist: Visa guidance, Indian meals available, Hindi guides, 24/7 WhatsApp support

### 5. Destinations Grid (The Value Proposition)
- 3-column CSS grid (→ 2-col tablet → 1-col mobile)
- Each card: full-bleed image with dark gradient overlay

  **Card 1 — Moscow: The Imperial Pulse**
  - "Explore Red Square, Kremlin, Indian restaurants in Moscow, halal dining"
  - CTA: "Explore Moscow Tours"

  **Card 2 — St. Petersburg: The Cultural Soul**
  - "Hermitage, canals, Bolshoi ballet — with Indian-friendly amenities"
  - CTA: "Explore St. Petersburg Tours"

  **Card 3 — Kazan: The Crossroad of Worlds**
  - "Russia's Muslim heritage, Kul Sharif Mosque, halal food paradise"
  - CTA: "Explore Kazan Tours"

- Hover: subtle image scale + gold border accent
- Each card includes a small badge: "Avg. ₹XX,XXX per person"

### 6. Signature vs Custom (Business Model Section — NEW)
- Split layout or tabbed view
- **Left / Tab 1**: "Signature Group Tours"
  - Fixed itinerary, small groups (4-8 people), fixed pricing
  - "Next Departure: [Date]" badge for urgency
- **Right / Tab 2**: "Custom Itineraries"
  - "Tell us your dream. We'll build it."
  - CTA: "Build Your Custom Tour"
- This directly addresses the client's business model

### 7. Social Proof / Testimonials (NEW — critical for Indian trust)
- Carousel or grid of testimonial cards
- **Headline**: "Trusted by Indian Travelers"
- Example testimonial (dummy):
  > "SVETA made our family trip to Moscow effortless. Hindi guide, Indian food arrangements, visa support — everything was handled. Felt like home away from home."
  > — Priya S., New Delhi
- Trust badges row: "Registered Tour Operator | Ministry of Tourism, Russia" + "Google Rating: 4.9★"

### 8. The Conversion Footer
- **Headline**: "Ready for your Russian journey?"
- **Subheadline**: "Tell us about your dream trip. We'll curate it in 24 hours."
- **Form fields** (richer than original):
  - Full Name
  - WhatsApp Number (with country code prefix)
  - Email (optional)
  - Preferred City (Moscow / St. Petersburg / Kazan / Multi-City)
  - Group Size (dropdown: 1, 2, 3-4, 5-8, 8+)
  - Travel Dates (approximate month/year)
  - Budget Range (₹50K-1L / ₹1L-2L / ₹2L+ / Not Sure)
  - Special Requirements (text area: dietary, accessibility, etc.)
- **CTA**: "Send via WhatsApp" (gold button, dummy action)
- Next to form: Floating WhatsApp button that follows scroll

---

## EXECUTION RULES
- **NO backend** — frontend PoC only. Dummy form submission.
- **NO Lorem Ipsum** — use the copy provided above.
- **NO Three.js** — use Framer Motion + CSS for all animations.
- **Mobile-first** — every section must work perfectly on mobile (375px) first, then scale up.
- **Performance** — target < 2s First Contentful Paint. Lazy-load below-fold images.
- **All images** assume: `/public/moscow-hero.jpg`, `/public/stpetersburg-card.jpg`, `/public/kazan-card.jpg`, `/public/group-tour.jpg`
- Code must be clean, modular, and production-quality React with proper TypeScript types.

---

## DIFFERENCES FROM ORIGINAL PROMPT

| Original Prompt | Refined Version |
|----------------|-----------------|
| Three.js + @react-three/fiber | Dropped — Framer Motion + CSS only |
| Generic luxury copy | India-specific messaging throughout |
| Basic form (3 fields) | Rich form (7 fields + text area) |
| No business model section | Signature vs Custom tours tab |
| No social proof | Testimonials + trust badges |
| Desktop-first vibe | Mobile-first, India-focused |
| No trust bar | Trust bar with key selling points |
| Single CTA channel | WhatsApp as primary + form backup |
| No India-specific features | Visa help, Hindi guides, halal/Indian food, INR |
