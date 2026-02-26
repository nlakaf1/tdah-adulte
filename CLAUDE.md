# TDAH ADULTE - Landing Page Project

## Project Overview

Landing page en francais pour un e-book sur le TDAH adulte. Accessible via QR code dans le livre. Collecte les emails et envoie automatiquement 2 ressources gratuites via Resend.

## Free Offer (Two Resources)

1. **Excel spreadsheet** - Calculate fixed expenses (`public/downloads/calculateur-depenses-fixes.xlsx`)
2. **Practical starter kit** - PDF guide (`public/downloads/kit-demarrage-tdah.pdf`)

## Sections

1. **Hero** - Headline, value proposition, CTA scroll to email form
2. **Email Capture** - Form connected to Resend API route
3. **FAQ** - Accordion with 6 common questions
4. **About Us** - Mission, story, values in 3 cards
5. **Contact** - Form (name, email, message) sending notification via Resend
6. **Footer** - Copyright, legal links

## Email System (Resend)

- **API Route** `/api/send-resources` : validates email, sends confirmation with download links
- **API Route** `/api/contact` : validates form, sends notification to site owner
- **Template** `src/components/emails/ResourceEmail.tsx` : React Email template
- **Dev mode** : uses `onboarding@resend.dev` as sender (no verified domain yet)
- **Env vars** : `RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL`, `CONTACT_EMAIL`, `RESEND_FROM_EMAIL`

## Design Requirements

### Visual Style
- Modern, clean, minimal design
- Conversion-oriented layout
- **Color palette: blue tones** (oklch-based in globals.css)

### Responsiveness
- **Mobile-first approach** mandatory
- Fully responsive for all screen sizes (mobile, tablet, desktop)

### Tone & Copy
- Professional, accessible, reassuring
- Focused on user benefits and practical value
- All content in French
- Target audience: e-book readers looking for practical, immediately usable tools

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (button, input, card, accordion, textarea, label)
- **Icons**: Heroicons (`@heroicons/react/24/outline`)
- **Email**: Resend + @react-email/components
- **HTTP**: Axios
- **Notifications**: react-hot-toast
- **Language**: TypeScript
- **Images**: Next.js `<Image />` component for optimization

## Development Rules

### Code Quality
- Maximum comments for beginner-friendly understanding
- Console logs included (never commented out, never with `// Debug log`)
- Clean, efficient code - no repetition, reusable code in separate files

### SEO
- All images must have descriptive, SEO-optimized alt attributes
- Use Next.js `<Image />` component for all images
- Descriptive, SEO-optimized URLs
- Every page must have a fully completed Next.js metadata object

### UI/UX
- Use shadcn UI components for all UI elements
- Tailwind CSS for all styling
- Smooth transitions for animations
- `truncate` class on any displayed URLs
- Toast notifications via react-hot-toast (never alert())
- Optimistic updates on form submissions

### File Organization
- Explicit folder and file names
- One file per independent component
- Reusable components in `src/components/shared/`
- Constants centralized in `src/lib/constants.ts`
- Types in `src/types/index.ts`
- Validators in `src/lib/validators.ts`
