# CTD Entertainment Management — Speculative Pitch Site

---

**A note to the CTD team:**

I built this site entirely on spec to show you what your digital presence could become. No brief, no contract — just a genuine belief that a company with your vision and reach deserves a website that matches it.

What you're looking at is a fully functional, production-ready design: animated hero, full artist roster section, services breakdown, process timeline, testimonials, and a working contact form. Every section was built with your brand in mind — the gold palette, the editorial typography, the cinematic dark aesthetic.

If this resonates, I'd love the opportunity to build the real thing alongside your team — tailored to your actual roster, your brand voice, and whatever features matter most to your business. No templates, no shortcuts.

**— Kiran**

---

## Tech Stack

- **React 18** + **Vite** — fast dev + optimized builds
- **Tailwind CSS v3** — utility-first styling with a custom design system
- **Framer Motion** — scroll-triggered animations, parallax, counters, and hover states
- **Lucide React** — consistent icon set

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Sections

| Section | Description |
|---|---|
| **Navigation** | Sticky transparent → solid nav with mobile hamburger |
| **Hero** | Full-viewport with animated floating orbs, parallax scroll, CTD logo |
| **About** | Mission statement, company pillars, editorial layout |
| **Services** | 6 animated service cards with hover states |
| **Roster** | 6 artist placeholder cards with gradient backgrounds |
| **Stats** | Animated counters on scroll |
| **Process** | 5-step vertical timeline |
| **Testimonials** | 3 artist/partner quotes |
| **Contact** | Form + social links |
| **Footer** | Logo, nav, socials, copyright |

## Design System

- **Display font:** Cormorant Garamond (editorial, cinematic)
- **Body font:** DM Sans (clean, modern)
- **Gold:** `#C9A84C` — used sparingly as a signature accent
- **Warm:** `#D4722A` — gradient partner to gold
- **Background:** `#080808` near-black

## Notes

- All artist cards use placeholder data (gradient initials). Replace with real photos/bios.
- Contact form submission is simulated — wire up to a backend or form service (Formspree, Resend, etc.)
- Social links point to `#` — update with real handles.
- Logo is pulled from the public GitHub repo URL.
