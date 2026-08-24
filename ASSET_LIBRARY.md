# Nocturne Ink — Asset Library

Purpose: keep every approved visual traceable, reusable and easy to replace for future client builds.

## Approved demo sources

| Asset | Use | Source | Status |
|---|---|---|---|
| artist-arjun | Arjun artist card/profile | Unsplash photo by Bradley Andrews | Approved demo |
| blackwork-backpiece | Blackwork style + gallery | Unsplash photo by Eugene Chystiakov | Approved demo |
| geometric-arm | Geometric style + gallery | Unsplash photo by Sandro Gonzalez | Approved demo |
| fineline-botanical | Fine-line style + gallery | Unsplash photo by Graham Mansfield | Approved demo |
| japanese-sleeve | Japanese style + gallery | Unsplash photo by Tai To | Approved demo |
| traditional-process | Traditional gallery study | Unsplash photo by BLOG REGION | Approved demo |
| tattoo-process | Fine-line/process gallery study | Unsplash / Certified Tattoo Academy | Approved demo |
| dark-realism-study | Realism gallery study | Unsplash photo by Bruno Guerrero | Approved demo |

## Source pages

- https://unsplash.com/photos/tattoo-artist-working-on-a-clients-arm-QPP5b_25Huk
- https://unsplash.com/photos/black-backpiece-tattoo-w8fulqCkj8w
- https://unsplash.com/photos/black-tattoo-art-Ysu6dwtFR9Y
- https://unsplash.com/photos/a-person-with-tattoos-on-their-arm-w-yKyCMPw-I
- https://unsplash.com/photos/a-person-with-tattoos-d17r1EB5mkI
- https://unsplash.com/photos/person-applying-temporary-tattoo-with-stencil-and-brush-yhKBDmFG9Cg
- https://unsplash.com/photos/a-person-is-getting-tattooed-ptFoxxlk3Vs
- https://unsplash.com/photos/a-persons-hand-with-a-tattoo-on-it-HPlqagSJtXY

All listed selections were chosen from pages marked free to use under the Unsplash License at audit time.

## Future asset rule

1. Search this registry before creating or sourcing a new visual.
2. If a new asset is needed, save the source/rights information immediately.
3. Mark each asset as `draft`, `approved demo`, `approved client`, or `discard`.
4. Never reuse one client's tattoo photography for another client without explicit permission.
5. Production builds should copy approved client-owned files into local WebP/AVIF assets and update the registry.

## Naming convention

`category-subject-purpose-v01.ext`

Examples:
- `gallery-blackwork-backpiece-v01.webp`
- `artist-arjun-portrait-v01.webp`
- `hero-studio-interior-v02.avif`

## Current implementation

`asset-library.css` is the single visual mapping layer for demo replacements. This keeps asset changes isolated from the base layout CSS and makes future client swaps safer.
