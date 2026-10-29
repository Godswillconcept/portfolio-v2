# Image Optimization Walkthrough

## Goal

Reduce the portfolio's download size and image decode cost without changing its visual design, then keep image loading behavior appropriate for above- and below-the-fold content.

## What changed

### 1. PNG assets were converted to WebP

All 22 PNG assets in `src/assets` now have optimized WebP replacements. Source imports were updated in:

- `src/content/profile.js`
- `src/components/portfolio/HeroSection.jsx`
- `src/components/portfolio/CapabilityGroups.jsx`
- `src/components/Home.jsx`
- `src/components/Skills.jsx`

The original PNG files were removed after verifying that no source file still referenced them.

### 2. Oversized technology logos were resized

Logos whose source dimensions were much larger than their rendered size were capped at 512 pixels wide while preserving their aspect ratio and transparency. Examples include:

- `jwt.png`: 3000 x 3000 to `jwt.webp`: 512 x 512
- `laravel.png`: 2418 x 2500 to `laravel.webp`: 512 x 530
- `tailwindcss.png`: 2500 x 1504 to `tailwindcss.webp`: 512 x 309
- `bootstrap.png`: 2500 x 1992 to `bootstrap.webp`: 512 x 408

The portrait kept its original 880 x 1040 dimensions so it remains sharp on high-density screens, but WebP compression reduced it from 1,046,753 bytes to 78,098 bytes.

### 3. Loading behavior was improved

- The hero portrait remains eager because it is above the fold and now has `fetchPriority="high"`.
- Images use asynchronous decoding to reduce main-thread blocking.
- Below-the-fold technology icons use native lazy loading.
- Explicit image dimensions were added to key image elements to reduce layout shifts while assets load.

## Size results

| Scope | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| Images used by the current production page | 2,388,393 bytes | 250,720 bytes | 89.5% |
| All PNG assets in `src/assets` | 3,582,357 bytes | 327,010 bytes | 90.9% |
| `myself` portrait | 1,046,753 bytes | 78,098 bytes | 92.5% |

Vite may inline very small assets into the JavaScript bundle. The remaining production images are emitted with content hashes for long-lived immutable caching on Vercel.

## Verification performed

```bash
npm run lint
npm run build
```

Both commands pass. The production build was also inspected to confirm that active image assets resolve to WebP and the page renders without missing images.

## Adding images later

1. Resize the source close to the largest size it will actually render.
2. Encode it as WebP (or AVIF when adding a `<picture>` fallback strategy).
3. Add `width` and `height` attributes to the image element.
4. Use `loading="lazy"` and `decoding="async"` for below-the-fold images.
5. Keep only critical above-the-fold imagery eager; use `fetchPriority="high"` sparingly.
6. Run lint and the production build before deployment.
