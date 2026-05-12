# 🏗️ MYPLACEMENTGURU — Production Website Build Prompt
## One-Shot IDE Instruction Set · Next.js · Tailwind CSS · Framer Motion · GSAP · Lenis

---

> **HOW TO USE THIS PROMPT**
> Paste this entire document into your IDE AI (Cursor / Windsurf / Copilot Chat).
> The prompt is divided into **PHASES**. After each phase, the AI must output a
> **FEEDBACK CHECKPOINT** block before proceeding. Do not skip checkpoints.
> Each phase builds on the previous — never regenerate completed phases.

---

## ━━━ MASTER BRIEF ━━━

**Project:** MyPlacementGuru — Career Mastery Masterclass Website
**Client:** Sarang Divakar Thakre, Founder — NagpurHeights & BigTopSocial
**Target Audience:** Final-year students & freshers, Nagpur region, mobile-first
**Tone:** Semi-professional · Bold · Inspiring · Result-oriented · "Tech-Founder Mentor"
**Primary Goal:** Move a visitor from *Curious → Committed* within 2 minutes of landing.

---

## ━━━ DESIGN SYSTEM CONTRACT ━━━

The following design tokens are **non-negotiable** and must be applied globally.
Never deviate from this palette or typography without explicit instruction.

### Color Palette

```css
/* globals.css — CSS Custom Properties */
:root {
  /* Primary */
  --color-brand-blue:     #1A6BFF;   /* Electric action blue — CTAs, links, highlights */
  --color-brand-navy:     #0A1628;   /* Deep navy — primary backgrounds, hero sections */
  --color-brand-slate:    #1C2A3A;   /* Slate dark — card backgrounds, secondary surfaces */

  /* Neutral */
  --color-white:          #FFFFFF;
  --color-off-white:      #F4F6FA;   /* Page background for light sections */
  --color-grey-100:       #E8ECF2;   /* Borders, dividers */
  --color-grey-300:       #A0AABA;   /* Muted body text, captions */
  --color-grey-500:       #64748B;   /* Secondary text */
  --color-grey-900:       #0D1117;   /* Near-black text on light backgrounds */

  /* Accent */
  --color-accent-gold:    #F5A623;   /* Social proof badges, star ratings, "bonus" labels */
  --color-accent-green:   #22C55E;   /* Success states, "free" badges */
  --color-accent-red:     #EF4444;   /* Urgency / scarcity tags */

  /* Gradients */
  --gradient-hero:        linear-gradient(135deg, #0A1628 0%, #0D2044 60%, #1A3A6B 100%);
  --gradient-card:        linear-gradient(145deg, #1C2A3A, #0F1E30);
  --gradient-blue-glow:   radial-gradient(ellipse at center, rgba(26,107,255,0.25) 0%, transparent 70%);
  --gradient-cta:         linear-gradient(90deg, #1A6BFF, #0A4FCC);
}
```

### Typography

```
Display / Hero:   "Cal Sans" or "Clash Display" (Variable) — weight 600–700
Heading:          "Satoshi" (Variable) — weight 500–700
Body:             "Satoshi" — weight 400–500
Mono / Label:     "JetBrains Mono" — weight 400 (for stats, code-like callouts)
```

Load via `next/font/google` or self-hosted in `/public/fonts`. Do NOT use Inter, Roboto, or system-ui.

### Spacing Scale (Tailwind custom tokens — `tailwind.config.ts`)

```ts
spacing: {
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
  '34': '8.5rem',
  '100': '25rem',
  '120': '30rem',
}
```

### Animation Principles (MANDATORY)

- **NO generic fade-up.** Every animation must serve the content's meaning.
- Use **Framer Motion** for component-level transitions and micro-interactions.
- Use **GSAP + ScrollTrigger** for scroll-driven timeline animations and pinned sections.
- Use **Lenis** for smooth scroll — wrap the entire app.
- Preferred animation patterns:
  - Text: Character-by-character stagger (`split-text` pattern with GSAP)
  - Cards: Perspective tilt on hover (`rotateX`, `rotateY` with Framer Motion)
  - Counters: Number count-up on viewport entry (GSAP)
  - CTAs: Magnetic button effect on desktop hover
  - Section reveals: Clip-path wipe or mask reveals (not translateY fade)
  - Background: Subtle parallax depth layers (GSAP)

---

## ━━━ PHASE 0 — PROJECT SCAFFOLDING ━━━

> **BEFORE WRITING ANY PAGE CODE**, complete this phase entirely.
> Confirm each file exists with a checkbox comment in your response.

### 0.1 — Folder Structure

The project must follow this exact structure. Do not deviate.

```
/
├── app/
│   ├── layout.tsx                  # Root layout — Lenis, fonts, global meta
│   ├── page.tsx                    # → Landing Page (/)
│   ├── curriculum/
│   │   └── page.tsx                # → Curriculum Page (/curriculum)
│   ├── mission/
│   │   └── page.tsx                # → Mission Page (/mission)
│   ├── register/
│   │   └── page.tsx                # → Registration Page (/register)
│   └── globals.css                 # All CSS variables + base styles
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav with CTA
│   │   ├── Footer.tsx              # Footer with links & WhatsApp
│   │   └── SmoothScroll.tsx        # Lenis provider wrapper
│   │
│   ├── ui/
│   │   ├── Button.tsx              # Magnetic CTA button (primary/secondary/ghost)
│   │   ├── Badge.tsx               # Label badges (free, bonus, new)
│   │   ├── Card.tsx                # Base card with glass/tilt variant
│   │   ├── SectionLabel.tsx        # Eyebrow label above headings
│   │   ├── CounterStat.tsx         # Animated number counter
│   │   └── WhatsAppCTA.tsx         # Floating WhatsApp button
│   │
│   ├── sections/
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── RealityCheck.tsx
│   │   │   ├── AboutMentor.tsx
│   │   │   └── ThreePillars.tsx
│   │   ├── curriculum/
│   │   │   ├── CurriculumHero.tsx
│   │   │   ├── DayTimeline.tsx
│   │   │   └── BonusSection.tsx
│   │   ├── mission/
│   │   │   ├── MissionHero.tsx
│   │   │   ├── BeyondDegree.tsx
│   │   │   └── WhyListenSection.tsx
│   │   └── register/
│   │       ├── RegisterHero.tsx
│   │       ├── PricingTable.tsx
│   │       └── TrustSignals.tsx
│   │
│   └── animations/
│       ├── SplitText.tsx           # GSAP char-by-char text animation
│       ├── ScrollReveal.tsx        # Clip-path reveal wrapper
│       ├── MagneticButton.tsx      # Magnetic hover effect wrapper
│       └── ParallaxLayer.tsx       # GSAP parallax depth wrapper
│
├── lib/
│   ├── metadata.ts                 # Per-page metadata factory function
│   ├── gsap.ts                     # GSAP + ScrollTrigger init (lazy)
│   └── constants.ts                # Copy, nav links, pricing data
│
├── public/
│   ├── fonts/                      # Self-hosted font files
│   ├── images/
│   │   ├── og/
│   │   │   ├── og-home.jpg         # 1200×630 OG image — Landing
│   │   │   ├── og-curriculum.jpg   # 1200×630 OG image — Curriculum
│   │   │   ├── og-mission.jpg      # 1200×630 OG image — Mission
│   │   │   └── og-register.jpg     # 1200×630 OG image — Register
│   │   ├── sarang-hero.jpg         # Mentor photo (placeholder if unavailable)
│   │   └── company-logos/          # Offer letter company logo SVGs
│   └── favicon.ico
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### 0.2 — Install Dependencies

Add the following to `package.json` dependencies (do NOT remove existing ones):

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.5",
    "@studio-freight/lenis": "^1.0.42",
    "react-intersection-observer": "^9.10.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  }
}
```

Run: `npm install` — confirm all packages resolve without conflict.

### 0.3 — `tailwind.config.ts` (Complete)

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#1A6BFF',
          navy:   '#0A1628',
          slate:  '#1C2A3A',
        },
        accent: {
          gold:   '#F5A623',
          green:  '#22C55E',
          red:    '#EF4444',
        },
        grey: {
          100: '#E8ECF2',
          300: '#A0AABA',
          500: '#64748B',
          900: '#0D1117',
        },
      },
      fontFamily: {
        display: ['var(--font-clash)', 'sans-serif'],
        body:    ['var(--font-satoshi)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '100': '25rem',
        '120': '30rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #0D2044 60%, #1A3A6B 100%)',
        'gradient-card': 'linear-gradient(145deg, #1C2A3A, #0F1E30)',
        'gradient-cta':  'linear-gradient(90deg, #1A6BFF, #0A4FCC)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(26, 107, 255, 0.3)',
        'glow-sm':   '0 0 20px rgba(26, 107, 255, 0.15)',
        'card':      '0 20px 60px rgba(0,0,0,0.4)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### 0.4 — `lib/constants.ts` (All copy lives here)

```ts
export const SITE_NAME    = 'MyPlacementGuru'
export const MENTOR_NAME  = 'Sarang Divakar Thakre'
export const FREE_DATE    = 'May 24 & 31, 2025'
export const PAID_START   = 'June 1, 2025'
export const FREE_PRICE   = '₹0'
export const PAID_PRICE   = '₹999'
export const WHATSAPP_URL = 'https://wa.me/91XXXXXXXXXX' // replace with real number
export const FREE_SEATS   = 100

export const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Mission',    href: '/mission' },
  { label: 'Register',   href: '/register' },
]

export const MENTOR_STATS = [
  { value: '5+',   label: 'Years in IT',             suffix: '' },
  { value: '3',    label: 'Companies Founded/Exited', suffix: '+' },
  { value: '200+', label: 'Students Placed',          suffix: '' },
  { value: '100',  label: 'Free Seats Available',     suffix: '' },
]

export const THREE_PILLARS = [
  {
    number: '01',
    title:  'The Resume Architect',
    body:   'Build an ATS-friendly resume that survives the 6-second scan and passes AI filters before a human ever sees it.',
    icon:   'FileText',
  },
  {
    number: '02',
    title:  'LinkedIn SEO',
    body:   'Stop applying blindly. Engineer your profile so recruiters come to you — and actually message first.',
    icon:   'Linkedin',
  },
  {
    number: '03',
    title:  "The Founder's Interview Playbook",
    body:   'Answer "Tell me about yourself" the way a future leader does — not a nervous fresher.',
    icon:   'Mic',
  },
]

export const CURRICULUM_DAYS = [
  { days: '1–2', title: 'The Scientific Resume',               desc: 'Layout psychology, ATS keywords, and the visual hierarchy that makes hiring managers stop scrolling.' },
  { days: '3–4', title: 'LinkedIn Mastery & Personal Branding',desc: 'Profile optimisation, content strategy, and outreach frameworks that build inbound pipeline.' },
  { days: '5–6', title: 'Advanced Job Search Strategies',      desc: 'Crack the hidden job market — 70% of roles are never posted. Learn exactly how to access them.' },
  { days: '7–8', title: 'Live Mock Interviews & Body Language', desc: 'Real-time feedback, camera presence, and the body language signals that decide in the first 60 seconds.' },
  { days: '9',   title: 'Salary Negotiation',                  desc: 'Stop accepting the first offer. Use data-backed scripts to demand — and receive — what you deserve.' },
  { days: '10',  title: 'Graduation & Internship Selection',   desc: 'Top performers earn a direct internship opportunity at BigTopSocial or Matoshri Realestate.' },
]

export const BONUSES = [
  { label: 'Bonus 01', title: 'Premium Resume Templates', desc: 'The exact templates used across NagpurHeights & BigTopSocial — not generic Canva edits.' },
  { label: 'Bonus 02', title: 'Cold Email Scripts for HRs', desc: 'Copy-paste outreach sequences that get replies from recruiters who have never heard of you.' },
  { label: 'Bonus 03', title: 'The Internship Gateway', desc: 'Top performers get a direct opportunity to intern at BigTopSocial or Matoshri Realestate.' },
]

export const PRICING = [
  {
    tier:     'Free Session',
    price:    '₹0',
    date:     'May 24 & 31',
    seats:    '100 Students',
    features: ['Live 90-minute session', '3 Core frameworks', 'Q&A with Sarang', 'Community access'],
    cta:      'Reserve My Free Seat',
    highlight: false,
    badge:    'FREE',
  },
  {
    tier:     '10-Day Masterclass',
    price:    '₹999',
    date:     'Starts June 1',
    seats:    'Early Bird',
    features: ['All 10 curriculum modules', '3 premium bonuses', 'Mock interview sessions', 'Internship opportunity', 'Lifetime community access', '100% satisfaction guarantee'],
    cta:      'Enrol at Early Bird Price',
    highlight: true,
    badge:    'BEST VALUE',
  },
]
```

### 0.5 — `lib/metadata.ts`

```ts
import type { Metadata } from 'next'

interface PageMeta {
  title:       string
  description: string
  ogImage:     string
  path:        string
}

const BASE_URL = 'https://myplacementguru.in' // update to real domain

export function generateMeta({ title, description, ogImage, path }: PageMeta): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description,
      url,
      siteName:  'MyPlacementGuru',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale:    'en_IN',
      type:      'website',
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      images:      [ogImage],
    },
    alternates: { canonical: url },
    robots:     { index: true, follow: true },
    keywords:   ['placement', 'career', 'masterclass', 'Nagpur', 'IT jobs', 'resume', 'fresher', 'Sarang Thakre'],
  }
}

// Per-page metadata exports
export const homeMeta = generateMeta({
  title:       'Stop Applying. Start Getting Hired. | MyPlacementGuru',
  description: 'Free masterclass by Sarang Divakar Thakre — learn the hiring manager\'s secret to cracking top IT & Marketing roles. Nagpur students only. May 24 & 31.',
  ogImage:     '/images/og/og-home.jpg',
  path:        '/',
})

export const curriculumMeta = generateMeta({
  title:       '10-Day Career Masterclass Curriculum | MyPlacementGuru',
  description: 'From ATS resumes to salary negotiation — a structured 10-day journey to make you corporate-ready. See the full curriculum.',
  ogImage:     '/images/og/og-curriculum.jpg',
  path:        '/curriculum',
})

export const missionMeta = generateMeta({
  title:       'Why This Masterclass Exists | MyPlacementGuru',
  description: 'Sarang Divakar Thakre bridges the gap between campus and corporate. Read the mission behind MyPlacementGuru.',
  ogImage:     '/images/og/og-mission.jpg',
  path:        '/mission',
})

export const registerMeta = generateMeta({
  title:       'Register — Free & Paid Sessions | MyPlacementGuru',
  description: 'Reserve your free seat for May 24/31 or enrol in the 10-Day Masterclass at ₹999 early bird price. Limited to 100 students.',
  ogImage:     '/images/og/og-register.jpg',
  path:        '/register',
})
```

### 0.6 — Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next'
import { Clash_Display, Satoshi, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { WhatsAppCTA }  from '@/components/ui/WhatsAppCTA'

// Fonts — self-host Clash Display & Satoshi via /public/fonts if not available on Google Fonts
const clashDisplay = Clash_Display({
  subsets:  ['latin'],
  variable: '--font-clash',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
})

const satoshi = Satoshi({
  subsets:  ['latin'],
  variable: '--font-satoshi',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  variable: '--font-jetbrains',
  display:  'swap',
  weight:   ['400', '500'],
})

export const metadata: Metadata = {
  title:       { default: 'MyPlacementGuru', template: '%s | MyPlacementGuru' },
  description: 'Career Mastery Masterclass for Nagpur students by Sarang Divakar Thakre.',
  icons:       { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${clashDisplay.variable} ${satoshi.variable} ${jetbrainsMono.variable} font-body bg-brand-navy text-white antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppCTA />
        </SmoothScroll>
      </body>
    </html>
  )
}
```

### 0.7 — `components/layout/SmoothScroll.tsx`

```tsx
'use client'
import { useEffect, useRef }    from 'react'
import Lenis                    from '@studio-freight/lenis'
import { usePathname }          from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, duration: 1.2, smoothWheel: true })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // Scroll to top on route change
  const pathname = usePathname()
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
```

### 0.8 — `lib/gsap.ts` (GSAP Lazy Init)

```ts
import { gsap }          from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText }     from 'gsap/SplitText'  // requires GSAP Club / use free alternative if needed

let registered = false

export function initGSAP() {
  if (registered) return gsap
  gsap.registerPlugin(ScrollTrigger, SplitText)
  registered = true
  return gsap
}

export { gsap, ScrollTrigger }
```

> **NOTE:** If GSAP Club SplitText is unavailable, implement a manual character-split
> utility in `components/animations/SplitText.tsx` using vanilla JS DOM manipulation.

---

> ## 🔴 PHASE 0 CHECKPOINT
>
> Before proceeding, confirm the following checklist by listing each item:
>
> - [ ] `/app/layout.tsx` created with correct font variables
> - [ ] `/app/globals.css` created with all CSS custom properties from the Design System Contract
> - [ ] `/tailwind.config.ts` includes all custom tokens
> - [ ] `/lib/constants.ts` populated with all copy
> - [ ] `/lib/metadata.ts` has all 4 page metadata objects
> - [ ] `/components/layout/SmoothScroll.tsx` wraps Lenis correctly
> - [ ] `/lib/gsap.ts` registers ScrollTrigger
> - [ ] All folders exist even if files are empty stubs
>
> **Output:** A short confirmation message: "Phase 0 scaffolding complete ✅"
> followed by a list of any issues or deviations. Do NOT begin Phase 1 until confirmed.

---

## ━━━ PHASE 1 — SHARED COMPONENTS ━━━

> Build all reusable UI components before any page sections.
> These are depended upon by all 4 pages.

### 1.1 — `components/ui/Button.tsx`

Build a polymorphic `<Button>` component with:
- **Variants:** `primary` | `secondary` | `ghost`
- **Sizes:** `sm` | `md` | `lg`
- **Magnetic effect:** On desktop (`hover-hover` media query), the button physically
  follows the cursor up to ±12px using `useRef` + `mousemove` listener + Framer Motion
  `useMotionValue` + `useSpring`. On mobile, no magnetic effect.
- **Shimmer:** `primary` variant has an animated shimmer overlay on hover.
- **Ripple:** On click, spawn a scale+fade radial ripple from click coordinates.
- Renders as `<a>` when `href` prop is passed, otherwise `<button>`.
- Must be `'use client'`.

```tsx
// Variant styles reference:
// primary: bg-gradient-cta text-white shadow-glow-blue
// secondary: border border-brand-blue text-brand-blue hover:bg-brand-blue/10
// ghost: text-grey-300 hover:text-white underline-offset-4 hover:underline
```

### 1.2 — `components/ui/Badge.tsx`

```tsx
// Variants: 'free' (green), 'bonus' (gold), 'new' (blue), 'urgent' (red)
// Design: pill shape, uppercase tracking-widest, font-mono text-xs
// Optional animated dot for 'free' and 'urgent' variants (pulsing ring)
```

### 1.3 — `components/ui/Card.tsx`

Two variants:
- **`glass`:** `backdrop-blur-md bg-white/5 border border-white/10`
- **`solid`:** `bg-gradient-card border border-white/5`

On hover: 3D perspective tilt using Framer Motion (`rotateX`, `rotateY` from mouse position).
Max tilt: `±8deg`. Use `useMotionValue` + `useSpring` + `useTransform`.
Add subtle inner glow on hover: `box-shadow: inset 0 0 40px rgba(26,107,255,0.08)`.

### 1.4 — `components/ui/SectionLabel.tsx`

```tsx
// Eyebrow text above headings
// Design: font-mono text-brand-blue text-xs uppercase tracking-[0.2em]
// Has a short horizontal line (::before pseudo) on the left
// Framer Motion: slide in from left on viewport entry
```

### 1.5 — `components/ui/CounterStat.tsx`

```tsx
// Props: value: string, label: string, suffix?: string
// On viewport entry, animate the numeric portion from 0 to target using GSAP
// Non-numeric prefix/suffix ('+', '₹', '%') renders statically
// Font: font-display text-4xl md:text-5xl font-bold text-white
// Label: font-body text-sm text-grey-300 mt-1
```

### 1.6 — `components/ui/WhatsAppCTA.tsx`

```tsx
// Fixed bottom-right floating button (mobile: bottom-4 right-4, desktop: bottom-8 right-8)
// WhatsApp green (#25D366) circular button, 56px diameter
// On hover: scale(1.1) + tooltip slides in: "Join the Community"
// Framer Motion: entrance animation after 3s delay (slide up from bottom)
// Links to WHATSAPP_URL from constants.ts
// z-index: 9999 — always on top
```

### 1.7 — `components/layout/Navbar.tsx`

```tsx
// Sticky top-0 z-50
// Background: transparent on top, transitions to bg-brand-navy/90 backdrop-blur-md
//             when scrolled > 80px (use scrollY listener)
// Left: Logo — "MyPlacementGuru" in font-display, gradient text (blue→white)
// Center (desktop): Nav links from NAV_LINKS constant
// Right: <Button variant="primary" size="sm">Register Free →</Button>
// Mobile: hamburger menu — slides a full-screen drawer from right
//         Drawer: dark overlay + links stacked vertically
// Active link: underline with brand-blue color
// Framer Motion: nav items stagger in on mount (delay 0.1s each)
```

### 1.8 — `components/layout/Footer.tsx`

```tsx
// Background: bg-grey-900 (near-black)
// Three columns (desktop) / stacked (mobile):
//   Col 1: Logo + tagline "Bridging Campus to Corporate."
//   Col 2: Nav links
//   Col 3: "Join the Community" WhatsApp button + social links
// Bottom bar: "© 2025 MyPlacementGuru · Built by Sarang Divakar Thakre"
// Subtle top border: border-t border-white/5
```

### 1.9 — `components/animations/ScrollReveal.tsx`

```tsx
'use client'
// Wrapper that reveals children using a clip-path animation (not translateY)
// clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)
// Triggered by IntersectionObserver (threshold: 0.15)
// Props: delay?: number, duration?: number, direction?: 'up'|'left'|'right'
// Uses Framer Motion variants
```

### 1.10 — `components/animations/SplitText.tsx`

```tsx
'use client'
// Splits text into individual characters or words
// Wraps each in a <span> with Framer Motion stagger animation
// Props: text: string, as?: 'h1'|'h2'|'p', className?: string
//        by?: 'char'|'word', staggerDelay?: number
// Animation: characters slide up from y:20 + opacity:0 → y:0 + opacity:1
```

---

> ## 🔴 PHASE 1 CHECKPOINT
>
> Confirm each component file exists and compiles without TypeScript errors:
>
> - [ ] `Button.tsx` — magnetic + shimmer + ripple ✅
> - [ ] `Badge.tsx` — all 4 variants ✅
> - [ ] `Card.tsx` — glass + solid + tilt ✅
> - [ ] `SectionLabel.tsx` ✅
> - [ ] `CounterStat.tsx` — GSAP count-up ✅
> - [ ] `WhatsAppCTA.tsx` — fixed float ✅
> - [ ] `Navbar.tsx` — sticky + mobile drawer ✅
> - [ ] `Footer.tsx` ✅
> - [ ] `ScrollReveal.tsx` — clip-path ✅
> - [ ] `SplitText.tsx` — stagger chars ✅
>
> Run `npx tsc --noEmit` and report any type errors.
> **Output:** "Phase 1 complete ✅" + TypeScript error list (if any).
> Fix all errors before proceeding.

---

## ━━━ PHASE 2 — PAGE 1: LANDING PAGE (`/`) ━━━

### Page Metadata
```tsx
// app/page.tsx
export { homeMeta as metadata } from '@/lib/metadata'
```

### Section 2.1 — `Hero.tsx`

**Visual Design:**
- Full viewport height (`min-h-screen`)
- Background: `bg-gradient-hero` with a subtle animated radial glow behind the headline
  (CSS `@keyframes` pulse, `--gradient-blue-glow`)
- Floating geometric shapes in background: 3 blurred circles (`blur-3xl opacity-20`)
  in brand-blue, positioned absolutely, with slow GSAP float animation (`y: -20px` loop)
- Two-column layout on desktop: Left = copy, Right = mentor photo

**Copy & Elements (left column):**
```
[Badge: "FREE · MAY 24 & 31"]
[H1 SplitText by word, stagger 0.08s]:
  "Stop Applying.
   Start Getting Hired."
[Subheadline, ScrollReveal]:
  "Learn the Hiring Manager's Secret to cracking top IT & Marketing
   roles — from a Founder who's been on both sides of the table."
[CTA Row]:
  <Button variant="primary" size="lg" href="/register">
    Register for Free Masterclass →
  </Button>
  <span className="text-grey-300 text-sm">Limited to 100 students</span>
[Social proof strip]:
  "Trusted offers from:" + 4–5 company logo SVGs (greyscale, hover colorize)
```

**Right column:**
- Mentor photo in a clipped container (clip-path: polygon angled cut on left edge)
- Floating stat cards overlapping the photo (absolute positioned):
  - "5+ Years IT Experience" — top-left of image
  - "Founder · 3 Companies" — bottom-right of image
- Cards use `glass` variant

**Animation sequence (GSAP timeline, runs once on mount):**
1. Badge fades + slides in (t=0)
2. H1 words stagger (t=0.2)
3. Subheadline (t=0.6)
4. CTA row (t=0.9)
5. Social proof strip (t=1.1)
6. Photo clips in from right (t=0.4, clipPath wipe)
7. Stat cards pop in with spring (t=0.8, t=1.0)

**Sticky CTA (mobile):**
- Below the fold on mobile, a fixed bottom bar appears:
  `"Free Masterclass — May 24" | [Register Now]`
  Dismiss on register click. `z-index: 40` (below WhatsApp button).

---

### Section 2.2 — `RealityCheck.tsx`

**Design:**
- Background: `bg-off-white` (light section — intentional contrast break)
- Centered, max-width `prose-xl`
- Large dramatic quote layout

**Copy:**
```
[SectionLabel]: "THE HARD TRUTH"

[Large display text, ~text-4xl md:text-6xl font-display]:
  "Nagpur colleges teach you the syllabus.
   They don't teach you the Selection."

[Pull-stat row — 3 CounterStat components]:
  "90%"  · "of resumes rejected by AI before any human sees them"
  "6s"   · "average time a hiring manager spends on a resume"
  "70%"  · "of jobs are never publicly posted"

[Body paragraph]:
  "Are you part of that 90%? If your resume isn't built for the algorithm,
   you're invisible — no matter how good you actually are."
```

**Animation:** On scroll-entry, the "90%" statistic number counts up from 0. The
display text reveals line by line using `ScrollReveal` (clip-path, 0.15s stagger).
The stat cards slide up with spring easing.

**Color note:** This section uses `text-grey-900` on `bg-off-white`. The "90%"
stat uses `text-brand-blue font-display` to create maximum visual punch.

---

### Section 2.3 — `AboutMentor.tsx`

**Design:**
- Background: `bg-brand-navy` (return to dark)
- Asymmetric two-column: Left ~40% photo/visual, Right ~60% copy
- Photo treatment: dark-tinted with brand-blue overlay gradient at bottom

**Copy (right column):**
```
[SectionLabel]: "YOUR MENTOR"
[H2]: "Meet Sarang Divakar Thakre"

[Four data-point cards in a 2×2 grid]:
  — "5+ Years in IT"         / "Cracked multiple offers from top-tier firms."
  — "Serial Entrepreneur"    / "Founder: NagpurHeights & BigTopSocial"
  — "Successful Exit"        / "Exited a prominent digital agency."
  — "The Mission"            / "Build the next generation of Corporate Leaders."

[Quote block — styled with left border in brand-blue]:
  "I don't want to just teach. I want to build the next generation
   of Corporate Leaders from Nagpur."
  — Sarang Divakar Thakre
```

**Animation:** Cards use `ScrollReveal` with `direction="left"` (alternate left/right for
2×2). The quote block uses a GSAP reveal that draws the left border line first, then fades
in the text.

---

### Section 2.4 — `ThreePillars.tsx`

**Design:**
- Background: Very subtle `bg-brand-slate/30` (nearly same as navy, slight warmth)
- Heading centered, then 3 cards in a row (desktop) / stacked (mobile)
- Cards: `solid` variant with large number (`01`, `02`, `03`) in background (opacity 5%,
  `font-display text-9xl`)

**Copy:**
```
[SectionLabel]: "WHAT YOU WILL LEARN"
[H2]: "Three Pillars That Change Everything"

[Card 01]: The Resume Architect
[Card 02]: LinkedIn SEO
[Card 03]: The Founder's Interview Playbook
```
(Use `THREE_PILLARS` from constants.ts)

**Animation:** Cards enter with a GSAP `stagger` on ScrollTrigger. On hover, the background
number slides slightly upward (independent of card tilt). Include an icon (Lucide React
equivalent of each pillar topic).

**Final CTA within section:**
```tsx
<div className="text-center mt-16">
  <p className="text-grey-300 mb-4">Ready to master all three?</p>
  <Button variant="primary" size="lg" href="/register">
    Claim Your Free Seat →
  </Button>
</div>
```

---

> ## 🔴 PHASE 2 CHECKPOINT
>
> - [ ] `app/page.tsx` exports `homeMeta` and composes all 4 sections ✅
> - [ ] Hero: SplitText headline + photo column + floating stat cards ✅
> - [ ] Hero: Sticky mobile CTA bar ✅
> - [ ] RealityCheck: CounterStat count-up on scroll ✅
> - [ ] AboutMentor: 2×2 data card grid + animated quote border ✅
> - [ ] ThreePillars: GSAP stagger + hover number effect ✅
> - [ ] All sections are fully responsive (test 375px, 768px, 1280px) ✅
> - [ ] No console errors or hydration mismatches ✅
>
> Visually review on mobile (375px). Fix any overflow or spacing issues.
> **Output:** "Phase 2 complete ✅" + list of any layout deviations found and fixed.

---

## ━━━ PHASE 3 — PAGE 2: CURRICULUM (`/curriculum`) ━━━

### Page Metadata
```tsx
export { curriculumMeta as metadata } from '@/lib/metadata'
```

### Section 3.1 — `CurriculumHero.tsx`

```
[Background]: bg-gradient-hero (same as landing hero for brand continuity)
[H1, SplitText]: "10 Days to Corporate Ready"
[Subhead]: "A structured, outcome-first journey from raw resume
            to confident corporate professional."
[Two stats]: "10 Modules" · "3 Bonus Resources"
[CTA]: <Button variant="primary" href="/register">Enrol Now — ₹999 →</Button>
[Badge]: "Early Bird · Nagpur Students"
```

---

### Section 3.2 — `DayTimeline.tsx`

**Design:**
- **Desktop:** Vertical timeline — a central vertical line with alternating cards left/right.
  Even days go right, odd days go left. The line is brand-blue, drawn top-to-bottom with
  a GSAP `drawSVG` or `scaleY` ScrollTrigger animation as the user scrolls.
- **Mobile:** Single-column stacked cards with a left-side vertical line.

**Each card contains:**
- Day range badge: `font-mono text-brand-blue` (e.g., "DAY 01–02")
- Title: `font-display text-xl font-semibold`
- Description: `font-body text-grey-300 text-sm`
- Connecting dot on the timeline

**Animation:** Each card enters from its respective side (left cards from left, right cards
from right) using Framer Motion `AnimatePresence` + `useInView`. The timeline line grows
via GSAP `scaleY` from `transformOrigin: "top center"` on `ScrollTrigger`.

Use `CURRICULUM_DAYS` array from `constants.ts`.

---

### Section 3.3 — `BonusSection.tsx`

**Design:**
- Background: `bg-brand-slate`
- Heading: "The Extra Mile Bonuses"
- Horizontal scrolling card row on mobile (snap scroll), 3-column grid on desktop
- Each bonus card has:
  - Gold badge: `[Bonus 01]` etc.
  - Icon (gift / mail / building)
  - Title + description
  - `solid` Card variant with gold top-border accent

**Animation:** Cards slide in from bottom with GSAP stagger (0.15s apart) on ScrollTrigger.

---

> ## 🔴 PHASE 3 CHECKPOINT
>
> - [ ] `/curriculum/page.tsx` exports correct metadata ✅
> - [ ] CurriculumHero renders correctly ✅
> - [ ] DayTimeline: alternating left/right on desktop ✅
> - [ ] DayTimeline: vertical line grows on scroll (GSAP scaleY) ✅
> - [ ] Mobile timeline collapses to single column ✅
> - [ ] BonusSection: horizontal scroll snap on mobile ✅
> - [ ] No TypeScript errors ✅
>
> **Output:** "Phase 3 complete ✅"

---

## ━━━ PHASE 4 — PAGE 3: MISSION (`/mission`) ━━━

### Page Metadata
```tsx
export { missionMeta as metadata } from '@/lib/metadata'
```

### Section 4.1 — `MissionHero.tsx`

```
[Background]: Full-bleed dark — bg-brand-navy
[Layout]: Centered, max-w-4xl
[H1, SplitText by char]:
  "Bridging Campus
   to Corporate."
[Subhead]: "A platform built out of frustration, not ambition."
[Scroll indicator]: Animated chevron pointing down, subtle bounce
```

---

### Section 4.2 — `BeyondDegree.tsx`

**Storytelling layout — reads like a magazine article.**

```
[SectionLabel]: "BEYOND THE DEGREE"

[Pull quote — large, italic, brand-blue]:
  "I've seen students with 9.0 CGPA struggle to explain their value."

[Body copy — two columns on desktop, single on mobile]:
  "My goal is to bridge the gap between 'Campus' and 'Corporate'. I'm not
   here to give you a certificate; I'm here to give you a career."

[Divider]: Thin horizontal line, brand-blue, centered, 60px wide

[Continuation]:
  "Nagpur has extraordinary talent. What it lacks is a structured bridge
   to take that talent into the rooms where decisions are made."
```

**Animation:** Text appears word by word with a very subtle opacity stagger
(Framer Motion `staggerChildren: 0.03`). The pull quote has a clip-path wipe.

---

### Section 4.3 — `WhyListenSection.tsx`

**Design:**
- Split: left side dark (`bg-brand-slate`), right side slightly lighter
- Left: "The Candidate's Chair" — short copy about cracking offers
- Right: "The Founder's Chair" — short copy about hiring decisions
- Center dividing line: vertical, brand-blue

**Copy:**
```
LEFT SIDE:
[Icon: User]
[H3]: "The Candidate's Chair"
"I've sat where you are — crafting resumes at midnight, nervous before
 every call, unsure if I was good enough. I cracked multiple offers from
 top-tier firms. I know exactly what worked."

RIGHT SIDE:
[Icon: Briefcase]
[H3]: "The Founder's Chair"
"Now I'm on the other side — hiring for my ventures, reviewing profiles,
 conducting interviews. I see the same gaps in every fresher application.
 I know exactly what's missing."
```

**Bottom CTA:**
```tsx
<Button variant="primary" size="lg" href="/register">
  Be Part of the Change →
</Button>
```

**Animation:** Left panel slides from left, right panel from right, simultaneously
on scroll entry. GSAP `ScrollTrigger` with `from: { x: '-10%', opacity: 0 }`.

---

> ## 🔴 PHASE 4 CHECKPOINT
>
> - [ ] `/mission/page.tsx` exports correct metadata ✅
> - [ ] MissionHero: char-by-char SplitText ✅
> - [ ] BeyondDegree: two-column magazine layout on desktop ✅
> - [ ] WhyListenSection: dual-panel split with GSAP entrance ✅
> - [ ] All copy matches `constants.ts` (no inline hardcoded strings) ✅
>
> **Output:** "Phase 4 complete ✅"

---

## ━━━ PHASE 5 — PAGE 4: REGISTRATION (`/register`) ━━━

### Page Metadata
```tsx
export { registerMeta as metadata } from '@/lib/metadata'
```

### Section 5.1 — `RegisterHero.tsx`

```
[Background]: bg-gradient-hero
[H1]: "Choose Your Path to Corporate"
[Subhead]: "Start free. Upgrade when you're ready."
[Urgency chip]: "⚡ Only 100 free seats available — {seats remaining} left"
                (static count for now; wire to state if form backend added)
```

---

### Section 5.2 — `PricingTable.tsx`

**Design reference:** Razorpay Payment Pages aesthetic — clean, trust-focused, not salesy.

**Layout:** Two cards side by side on desktop. On mobile, the highlighted card (`BEST VALUE`)
appears first (order swap via CSS `order`).

**Free Card:**
```
[Badge: FREE · GREEN]
Tier:     "Free Session"
Price:    "₹0"
Date:     "May 24 & 31"
Seats:    "Limited to 100 students"
Features: [list with checkmarks]
CTA:      <Button variant="secondary" size="lg">Reserve My Free Seat</Button>
```

**Paid Card (highlighted):**
```
[Badge: BEST VALUE · GOLD]
[Top accent bar: brand-blue gradient, 3px height]
Tier:     "10-Day Masterclass"
Price:    "₹999"
          Strikethrough ₹1,999 (original price, smaller, grey-300)
Date:     "Starts June 1"
Seats:    "Early Bird Price"
Features: [list with checkmarks — longer list]
CTA:      <Button variant="primary" size="lg">Enrol at Early Bird Price</Button>
Note:     "100% Satisfaction Guarantee · Secure Payment"
```

**Card styling:**
- Free: `glass` variant, standard border
- Paid: `solid` variant with outer glow (`box-shadow: 0 0 60px rgba(26,107,255,0.2)`),
  slightly larger scale (`scale-[1.02]`), top accent bar

Use `PRICING` array from `constants.ts`.

**Animation:** Both cards animate in simultaneously with Framer Motion spring.
Paid card has a subtle continuous shimmer on its top border.

---

### Section 5.3 — `TrustSignals.tsx`

**Design:** Three horizontal trust badges + FAQ accordion below.

**Trust badges:**
```
🔒 Secure Payment (Razorpay)
✅ 100% Satisfaction Guarantee — get a full refund if not happy after Day 1
💬 WhatsApp Support — message us directly at any time
```

**FAQ Accordion (5 questions):**
```
Q: Who is this for?
A: Final-year students and freshers in the Nagpur region looking to enter IT or Marketing roles.

Q: Do I need prior experience?
A: No. This is designed specifically for students with zero corporate experience.

Q: What happens after the free session?
A: You can choose to upgrade to the 10-day masterclass at the early bird price of ₹999.

Q: Is the internship guaranteed?
A: The internship opportunity is offered to top performers at the discretion of the mentors. It is merit-based.

Q: How do I contact support?
A: Message us on WhatsApp — link available on every page.
```

Accordion uses Framer Motion `AnimateHeight` pattern (`overflow: hidden`, animate `height`
from `0` to `auto`). Only one item open at a time.

---

> ## 🔴 PHASE 5 CHECKPOINT
>
> - [ ] `/register/page.tsx` exports correct metadata ✅
> - [ ] Pricing cards: free vs. paid with correct visual hierarchy ✅
> - [ ] Mobile: paid card appears above free card ✅
> - [ ] TrustSignals: 3 badges + accordion ✅
> - [ ] Accordion: Framer Motion height animation ✅
> - [ ] All pricing data sourced from `constants.ts` ✅
>
> **Output:** "Phase 5 complete ✅"

---

## ━━━ PHASE 6 — SEO, PERFORMANCE & PRODUCTION HARDENING ━━━

### 6.1 — `next.config.ts`

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options',    value: 'nosniff' },
        { key: 'X-Frame-Options',           value: 'DENY' },
        { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
      ],
    },
    {
      source: '/fonts/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ],
}

export default nextConfig
```

### 6.2 — JSON-LD Structured Data

Add to `app/layout.tsx`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context':   'https://schema.org',
    '@type':      'Course',
    'name':       'Career Mastery Masterclass',
    'description':'10-day career readiness program for Nagpur students',
    'provider': {
      '@type': 'Person',
      'name':  'Sarang Divakar Thakre',
      'url':   'https://myplacementguru.in',
    },
    'offers': {
      '@type':       'Offer',
      'price':       '999',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/LimitedAvailability',
    },
    'hasCourseInstance': {
      '@type':         'CourseInstance',
      'courseMode':    'online',
      'startDate':     '2025-06-01',
      'inLanguage':    'en-IN',
      'location':      'Nagpur, Maharashtra, India',
    },
  })}}
/>
```

### 6.3 — `app/sitemap.ts`

```ts
import { MetadataRoute } from 'next'

const BASE_URL = 'https://myplacementguru.in'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                       lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/curriculum`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/mission`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/register`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
  ]
}
```

### 6.4 — `app/robots.ts`

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules:   { userAgent: '*', allow: '/' },
    sitemap: 'https://myplacementguru.in/sitemap.xml',
  }
}
```

### 6.5 — Image Optimisation Rules

- ALL `<img>` tags must be replaced with Next.js `<Image>` from `next/image`.
- Hero images: `priority={true}`, `sizes="(max-width: 768px) 100vw, 50vw"`
- Below-fold images: `loading="lazy"` (default)
- Company logos: serve as `<Image>` or inline SVG — never `<img>` with remote URLs.
- All images must have meaningful `alt` attributes.

### 6.6 — Accessibility Audit (Apply to every component)

- All interactive elements have `focus-visible` ring: `focus-visible:ring-2 focus-visible:ring-brand-blue`
- Colour contrast: `grey-300` on `brand-navy` must pass WCAG AA (4.5:1). Check and correct.
- ARIA: Navbar mobile drawer needs `aria-expanded`, `aria-label="Navigation menu"`
- Accordion: `aria-expanded`, `aria-controls`, `role="button"`
- Animated text: Wrap GSAP SplitText in `aria-label` on the parent to preserve screen reader output.
- Reduce motion: All Framer Motion animations must check `useReducedMotion()` and disable if `true`.

```tsx
// Pattern to use in every animated component:
import { useReducedMotion } from 'framer-motion'
const prefersReducedMotion = useReducedMotion()
// If true, render without animation (skip variants / set duration: 0)
```

### 6.7 — Performance Checklist

- [ ] All GSAP plugins imported only client-side (inside `useEffect`)
- [ ] `ScrollTrigger.refresh()` called after Lenis updates scroll position — connect:
  ```ts
  lenis.on('scroll', ScrollTrigger.update)
  ```
- [ ] No layout shift from fonts — use `display: 'swap'` and `size-adjust` CSS
- [ ] Framer Motion `LazyMotion` with `domAnimation` feature set for reduced bundle:
  ```tsx
  import { LazyMotion, domAnimation, m } from 'framer-motion'
  // Replace <motion.div> with <m.div> inside <LazyMotion features={domAnimation}>
  ```
- [ ] `dynamic(() => import(...), { ssr: false })` for any component using `window` directly

---

> ## 🔴 PHASE 6 CHECKPOINT
>
> - [ ] `next.config.ts` with image optimisation + headers ✅
> - [ ] JSON-LD structured data in root layout ✅
> - [ ] `sitemap.ts` and `robots.ts` created ✅
> - [ ] All images use `next/image` ✅
> - [ ] `useReducedMotion` added to all animated components ✅
> - [ ] `LazyMotion` wraps Framer Motion usage ✅
> - [ ] GSAP + Lenis connected via `lenis.on('scroll', ScrollTrigger.update)` ✅
> - [ ] ARIA attributes on nav, accordion, and split text ✅
>
> Run `npm run build` and report the build output:
> - Bundle sizes per page (First Load JS)
> - Any build errors or warnings
>
> **Target:** First Load JS < 120kB per page. If exceeded, identify and code-split the heavy module.
>
> **Output:** "Phase 6 complete ✅" + build output summary.

---

## ━━━ PHASE 7 — FINAL QA & SELF-REVIEW ━━━

> This is the final phase. The AI must now act as a senior frontend engineer
> doing a production code review. Work through this checklist systematically.

### 7.1 — Mobile Responsiveness Audit

Test every page at these breakpoints and fix any issue found:
- `375px` (iPhone SE) — hero text overflow, button padding, nav drawer
- `390px` (iPhone 14) — standard mobile
- `768px` (iPad mini) — transition point, 2-column vs 1-column
- `1024px` (iPad landscape / laptop) — desktop layout kicks in
- `1440px` (large desktop) — max-width containers centred

**Common issues to proactively fix:**
- Long words in headlines breaking on small screens — add `hyphens-auto` class
- Timeline cards overflowing horizontally on mobile
- Pricing cards stacking with wrong order (paid should appear first on mobile)
- Sticky nav overlapping content anchors — add `scroll-mt-20` to all section IDs

### 7.2 — Animation Regression Check

Confirm these animations work correctly end-to-end:
- [ ] SplitText fires only once (not re-fires on scroll up/down)
- [ ] GSAP ScrollTrigger does not conflict with Lenis (verify `lenis.on('scroll', ScrollTrigger.update)`)
- [ ] Card tilt resets to `rotateX(0) rotateY(0)` on mouse leave
- [ ] Magnetic button effect disabled below `(hover: hover)` media query
- [ ] WhatsApp CTA appears after 3s and doesn't flash during SSR

### 7.3 — Hydration Safety Audit

Mark every component that uses browser APIs (`window`, `document`, `localStorage`,
event listeners) with `'use client'`. Check:
- [ ] `SmoothScroll.tsx` — `'use client'` ✅
- [ ] `Navbar.tsx` — `'use client'` (uses scroll listener) ✅
- [ ] `MagneticButton.tsx` — `'use client'` ✅
- [ ] `CounterStat.tsx` — `'use client'` (GSAP on mount) ✅
- [ ] `SplitText.tsx` — `'use client'` ✅
- [ ] All page-level sections using GSAP/Lenis — wrapped in dynamic imports if needed

### 7.4 — Constant Audit

Verify: Zero hardcoded copy strings outside `lib/constants.ts`.
All pricing, dates, names, URLs, and copy must reference the constants file.
This ensures the client can update copy in a single file.

### 7.5 — TypeScript Strictness

Run `npx tsc --noEmit --strict`. Resolve every error. No `any` types unless absolutely
necessary (and must be commented explaining why).

### 7.6 — Final Build

```bash
npm run build && npm run start
```

Manually navigate all 4 pages. Confirm:
- [ ] `/` — Landing page loads, all 4 sections visible
- [ ] `/curriculum` — Timeline fully renders
- [ ] `/mission` — Split panel section works
- [ ] `/register` — Both pricing cards, trust section, FAQ accordion
- [ ] Navbar active state correct on each page
- [ ] Footer links navigate correctly
- [ ] WhatsApp button visible on all pages

---

> ## 🔴 PHASE 7 — FINAL CHECKPOINT
>
> This is the production gate. Do not deliver until ALL of the following pass:
>
> **Functionality:**
> - [ ] All 4 pages render without error on `npm run build`
> - [ ] No console errors on any page (including hydration warnings)
> - [ ] All CTAs link to correct routes/URLs
> - [ ] WhatsApp button links to `WHATSAPP_URL` constant
>
> **Design:**
> - [ ] Color palette 100% matches Design System Contract
> - [ ] Typography: Clash Display for display, Satoshi for body (zero Inter/Roboto)
> - [ ] No generic fade-up animations — all animations are purposeful
> - [ ] Mobile layout passes visual inspection at 375px
>
> **SEO:**
> - [ ] Each page has unique `<title>`, `<meta description>`, and OG tags
> - [ ] OG images are 1200×630 and referenced correctly
> - [ ] JSON-LD, sitemap.xml, robots.txt all respond correctly
>
> **Performance:**
> - [ ] First Load JS < 120kB per page
> - [ ] All images optimised via `next/image`
> - [ ] Fonts use `display: swap`
>
> **Accessibility:**
> - [ ] `useReducedMotion` respected across all animated components
> - [ ] Focus rings visible on all interactive elements
> - [ ] ARIA attributes on nav, accordion, animated text
>
> **Output:** Complete final summary:
> ```
> ✅ BUILD PASSED
> Page               First Load JS
> ─────────────────────────────────
> /                  XX kB
> /curriculum        XX kB
> /mission           XX kB
> /register          XX kB
>
> Issues found and resolved: [list]
> Known limitations: [list]
> Placeholder assets needed from client: [list]
> ```

---

## ━━━ PLACEHOLDER ASSETS (Client Action Required) ━━━

The following assets must be provided by the client before launch. The build
should use placeholder versions until then:

| Asset | Specification | Placeholder |
|-------|--------------|-------------|
| Mentor photo — `sarang-hero.jpg` | Min 800×1000px, professional, office setting | Use a solid colour block |
| Company logos (4–5 SVGs) | Companies where Sarang received offers | Use text-only placeholders |
| OG Images (4×) | 1200×630px JPG, one per page | Generate with `@vercel/og` or design in Figma |
| WhatsApp Group Link | Real WhatsApp group URL | Update `WHATSAPP_URL` in `constants.ts` |
| Domain | `myplacementguru.in` | Update `BASE_URL` in `metadata.ts` |
| Razorpay Payment Links | Actual payment URLs for paid plan | Update `PRICING` CTA `href` in `constants.ts` |

---

## ━━━ DELIVERY NOTES ━━━

1. **Single source of truth:** All content lives in `lib/constants.ts`.
   Client changes: update constants only — zero code changes needed.

2. **Scaling:** Add new sections by creating a new component in `components/sections/{page}/`
   and importing it into the page. The folder structure supports unlimited expansion.

3. **Analytics:** Add Vercel Analytics or Plausible by wrapping in `app/layout.tsx`.
   Do not add Google Analytics without client instruction (GDPR/privacy implications).

4. **Form backend:** The register page CTAs currently link to external Razorpay URLs.
   If a custom form is needed later, add a `/api/register` route and connect with
   server actions (Next.js `use server`).

5. **WhatsApp API:** If programmatic WhatsApp messaging is needed, integrate
   WhatsApp Business API — do not use unofficial libraries.

---

*End of MyPlacementGuru IDE Build Prompt · v1.0*
*Client: Sarang Divakar Thakre · Project: Career Mastery Masterclass Website*
