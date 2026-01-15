# Bo's Auto Detail Frontend

## Project Overview
Luxury auto detailing website for Bo's Auto Detail. Lead generation focused with premium/luxury branding.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **React:** 19.x
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion 11
- **Icons:** Lucide React
- **Validation:** Zod

## Key Features
- Luxury/premium dark theme with gold accents
- Animated hero and service sections
- Service showcase with pricing
- Image gallery with lightbox
- Lead capture contact form

## Important: No Database
Frontend-only marketing site. Contact form is client-side only (needs backend integration for production).

## Brand Colors
- **Gold:** #d4af37 (primary accent)
- **Dark:** #0f172a to #1e293b (backgrounds)
- **Text:** #f8fafc (light) to #64748b (muted)

## Fonts
- **Display:** Playfair Display (headings)
- **Body:** Inter (text)

## Pages
- `/` - Home (Hero, Services Preview, Why Choose Us, CTA)
- `/services` - Full service listings with pricing
- `/gallery` - Work portfolio with filtering
- `/about` - Company story and values
- `/contact` - Contact form and business info

## Animation Patterns
Uses Framer Motion for scroll-triggered animations:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
```

## Commands
```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Environment Variables
No environment variables needed for basic setup.

For contact form integration, add:
- `RESEND_API_KEY` - For email notifications
- `CONTACT_EMAIL` - Recipient email address

## Deployment
- **Hosting:** Vercel
- **Domain:** TBD

## TODO
- [ ] Add real images to gallery
- [ ] Integrate contact form with email service (Resend)
- [ ] Add Google Maps embed
- [ ] Add Google Analytics
- [ ] SEO optimization with real meta tags
- [ ] Add favicon and social images

## Notes
- Business type: Shop-based detailing
- Target: Premium/luxury vehicle owners
- Goal: Lead generation (not online booking)
