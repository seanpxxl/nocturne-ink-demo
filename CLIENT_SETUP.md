# Client Setup — Nocturne Ink Template

Use this checklist whenever the demo is duplicated for a real tattoo studio.

## 1. Duplicate the project

Create a new repository from this project or copy the files into a fresh client repository. Keep the original demo untouched as the master template.

## 2. Edit `site-config.js`

Change these values first:

- `brandName`
- `city`
- `country`
- `email`
- `whatsappNumber` — digits only, including country code
- `whatsappMessage`
- `instagramUrl`
- `mapsUrl`
- `studioAddress`
- `bookingDepositNote`
- `siteUrl`

The JavaScript automatically applies the configured email and WhatsApp details to supported links and the floating WhatsApp CTA.

## 3. Replace demo content

Replace all fictional/demo information before client delivery:

- Studio name and logo
- Artist names and biographies
- Studio location and opening hours
- Email and WhatsApp number
- Instagram / social links
- Testimonials with verified client reviews
- Tattoo gallery photography with client-owned or properly licensed images
- Deposit and cancellation policy
- FAQ answers specific to the studio

## 4. Replace photography

The current build uses remote placeholder images. For production, create an `/assets/images/` folder and host optimized client images locally.

Recommended outputs:

- Hero: 1800–2200 px wide WebP
- Artist portraits: 900–1200 px tall WebP
- Gallery: 900–1400 px WebP
- Keep most images below 300–450 KB where practical

## 5. Booking setup

The demo booking form currently uses `mailto:`. Before selling the site as a production booking experience, replace it with one of these:

- Formspree / Basin / Getform
- A custom serverless endpoint
- Client CRM
- Calendly or another appointment platform
- A custom booking API

Never put private API keys directly into front-end HTML or JavaScript.

## 6. Domain and deployment

The demo deploys through GitHub Pages. For a real client you can either:

- connect a custom domain to GitHub Pages, or
- deploy to Cloudflare Pages, Netlify, Vercel, or the client's preferred host.

Before domain launch, update `siteUrl`, Open Graph URLs, `sitemap.xml`, and any canonical metadata.

## 7. Final QA

Test all of these before handoff:

- Desktop navigation
- Mobile menu
- Gallery lightbox
- WhatsApp button
- Booking form
- Email links
- Artist links
- Contact information
- Mobile bottom booking bar
- 404/broken links
- Images on slow mobile data
- Chrome, Edge, Safari/mobile Safari when possible

## 8. Client handoff

Deliver:

- Live website URL
- Domain/hosting ownership details
- Repository ownership/access
- Contact form destination
- Image/source asset folder
- Short instructions for future text/image edits

Keep a separate backup/template repository for your own future projects.
