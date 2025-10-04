# RouteBuddy Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based Design inspired by successful ride-sharing platforms (Uber, Lyft, BlaBlaCar) and booking experiences (Airbnb)

**Key Design Principles:**
- Trust and safety as visual priorities through clean, professional aesthetics
- Clear role differentiation between Rider and Driver experiences
- Mobile-first responsive design with touch-friendly interactions
- Emphasis on speed and efficiency in user flows

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary Brand: `220 85% 48%` (Vibrant blue - trustworthy, reliable)
- Primary Hover: `220 85% 42%`
- Background: `0 0% 100%` (Pure white)
- Surface: `220 15% 97%` (Subtle gray for cards)
- Text Primary: `220 15% 15%`
- Text Secondary: `220 10% 45%`
- Accent (Success/Active): `142 70% 45%` (Green for available rides)
- Border: `220 15% 90%`

**Dark Mode:**
- Primary Brand: `220 75% 55%` (Brighter blue for dark backgrounds)
- Primary Hover: `220 75% 60%`
- Background: `220 15% 10%`
- Surface: `220 15% 14%`
- Text Primary: `220 15% 95%`
- Text Secondary: `220 10% 65%`
- Accent: `142 65% 50%`
- Border: `220 15% 20%`

### B. Typography

**Font Stack:** Inter (primary), system-ui fallback via Google Fonts CDN
- Hero Heading: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Heading: text-3xl md:text-4xl, font-bold
- Feature Title: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body: text-base, font-normal
- Small/Caption: text-sm, text-secondary

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, py-16, mb-24)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content sections: max-w-6xl for feature grids
- Text content: max-w-3xl for readability

**Vertical Rhythm:**
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: space-y-12 within sections
- Card padding: p-6 md:p-8

### D. Component Library

**Header (Fixed/Sticky):**
- Logo left, navigation center, "Get Started" CTA right
- Backdrop blur with subtle shadow on scroll
- Height: h-16 md:h-20

**Hero Section:**
- Height: min-h-[600px] md:min-h-[700px] (not forced 100vh)
- Large hero image: Dynamic ride-sharing scene (driver + passenger interaction, city backdrop, car interior view)
- Image treatment: Gradient overlay (from transparent to bg-black/30) for text legibility
- Content: Left-aligned on desktop (w-1/2), centered on mobile
- CTA: Primary button + secondary link below

**Feature Cards:**
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Card style: Rounded-2xl, p-6, bg-surface, hover:shadow-xl transition
- Icon: w-12 h-12, in accent color circle
- Icons: Use Heroicons (CDN) - CheckCircleIcon, ShieldCheckIcon, MapPinIcon, BoltIcon

**How It Works Section:**
- Two-column split: Rider flow (left) vs Driver flow (right)
- Step numbers in branded circles: w-10 h-10, bg-primary, text-white, rounded-full
- Connecting lines between steps (vertical border-l-2 on mobile, horizontal on desktop)

**Role Differentiation Panel:**
- Two prominent cards side-by-side: Rider benefits vs Driver benefits
- Contrasting icons and accent colors (blue for rider, green for driver)
- "Choose Your Role" CTAs below each

**Testimonials:**
- Horizontal scroll on mobile, grid-cols-3 on desktop
- Avatar images: rounded-full, w-12 h-12
- Quote marks as decorative element
- 5-star rating display with star icons

**Footer:**
- Three-column layout: Company links, Resources, Social media
- Newsletter signup form with email input + button
- Bottom bar with copyright and legal links

### E. Images

**Hero Image:** Full-width background image showing a modern ride-sharing scenario - friendly driver and passenger in a clean vehicle, urban setting visible through windows, natural lighting. Image should convey trust, safety, and community.

**Feature Section Icons:** Use Heroicons library, no custom images needed

**How It Works:** Consider simple illustrations or icons for each step (can use <!-- PLACEHOLDER: illustration description --> comments)

**Optional Section Images:** 
- Phone mockup showing the app interface
- Map visualization showing ride routes
- Happy riders/drivers in authentic scenarios

### F. Interactions & Motion

**Minimize animations** - use sparingly:
- Fade-in on scroll for feature cards (stagger by 100ms)
- Smooth scroll for anchor navigation
- Button hover scale (scale-105) and shadow changes
- Card hover lift (translateY(-2px))

---

## Landing Page Section Breakdown

1. **Header** - Fixed navigation with logo, links, Get Started CTA
2. **Hero** - Large background image, headline "Ride Smarter, Share Better", subheading, dual CTAs
3. **Stats Bar** - Quick trust indicators (e.g., "10,000+ rides completed", "500+ drivers", "4.8★ rating")
4. **Features Grid** - 4-column showcase of core features with icons
5. **Role Differentiation** - Side-by-side Rider vs Driver benefits
6. **How It Works** - Dual-column step-by-step for both user types
7. **Testimonials** - 3 customer reviews with photos and ratings
8. **Final CTA** - Bold call-to-action section with background pattern
9. **Footer** - Complete footer with links, newsletter, social icons

This creates a comprehensive, trust-focused landing experience that clearly communicates value to both riders and drivers while maintaining visual hierarchy and brand consistency.