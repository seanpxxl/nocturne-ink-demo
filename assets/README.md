# Production asset structure

Use this folder when adapting the template for a real tattoo studio.

Recommended structure:

- `assets/logo/` — primary logo, alternate mark, social avatar
- `assets/hero/` — homepage and page hero images
- `assets/artists/` — artist portraits
- `assets/gallery/` — optimized tattoo portfolio images
- `assets/social/` — Open Graph / social preview image

## Image guidelines

- Use client-owned or properly licensed imagery only.
- Export photographs as WebP or AVIF where practical.
- Homepage hero: target roughly 1600–2200 px wide, ideally under 350 KB.
- Gallery images: target roughly 1000–1400 px on the long edge, ideally under 250 KB each.
- Artist portraits: target roughly 1000–1400 px tall.
- Keep originals outside the production repo when they are very large.
- Do not upload PSD, RAW, huge TIFF, or unnecessary source files to the deployed site.

## Naming convention

Use descriptive lowercase names with hyphens, for example:

- `hero-studio-blackwork.webp`
- `artist-arjun-vale.webp`
- `gallery-realism-tiger-01.webp`

When real assets are available, replace the current remote demo image URLs in the CSS with local paths from this folder.
