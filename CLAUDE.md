# Bo's Auto Detail Frontend

## Project Overview
Luxury vehicle detailing platform for Bo's Auto Detail business. Marketing and booking frontend.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **React:** 18.x
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Forms:** React Hook Form
- **HTTP:** Axios

## Key Features
- Service showcase
- Booking system
- Photo gallery with animations
- Contact forms

## Important: No Database
Frontend-only application. May connect to external API.

## Animation Patterns
Uses Framer Motion for animations:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

## Commands
```bash
npm run dev     # Development
npm run build   # Build
npm run lint    # Linting
```

## Environment Variables
- API endpoints if connecting to backend

## Deployment
- **Hosting:** Vercel or Netlify

## Notes
- Older Next.js version (14)
- Older React version (18)
- Focus on visual appeal and animations
- Consider upgrading to Next.js 15 / React 19
