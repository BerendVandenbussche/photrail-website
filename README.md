# Photrail — Marketing Website

The marketing site for **Photrail**, the iOS app that turns the location data
already inside your photos into a beautiful, private travel history.

> Your travel history, automatically. 100% on-device · No account · Open source.

Built as a fast, fully-static, SEO-friendly single page with an **Apple-inspired,
dark-first** design language that mirrors the app.

## Tech stack

- **Vue 3** (Composition API, `<script setup>`)
- **TypeScript** (strict)
- **Vite** 5
- **Tailwind CSS** 3 (custom Photrail palette derived from the app)
- **exifr** — client-side EXIF parsing (the interactive demo)
- **Leaflet** + CARTO tiles — Apple-Maps-style map (no API key, no backend)

No backend. No tracking. Everything runs in the browser.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build
```

## The interactive EXIF demo

The site practices what it preaches. Drop a photo into the demo
(`src/components/ExifDemo.vue`) and its EXIF metadata — GPS, capture date,
camera, lens, altitude, orientation and exposure — is read **entirely in your
browser** with `exifr`. The image is loaded via an object URL and is **never
uploaded anywhere**. If the photo is geotagged, a map (`ExifMap.vue`) drops a
pin on the exact spot. Heavy libraries (`exifr`, `leaflet`) are lazy-loaded only
when the demo is used, so they never weigh down the initial page.

## Project structure

```
src/
├── App.vue                     Page composition (section order)
├── main.ts                     App bootstrap + v-reveal directive
├── style.css                   Tailwind layers, design tokens, glass utilities
├── composables/
│   ├── useTheme.ts             Follows prefers-color-scheme; persists overrides
│   └── useGitHubStars.ts       Best-effort public star count (no key)
├── directives/reveal.ts        IntersectionObserver scroll-reveal
├── data/
│   ├── site.ts                 Links (App Store, GitHub) + nav config
│   └── features.ts             Benefit-led feature copy
└── components/
    ├── NavBar.vue  HeroSection.vue  TrustSection.vue  FeatureGrid.vue
    ├── HowItWorks.vue  PrivacySection.vue  ExifEducation.vue
    ├── ExifDemo.vue  ExifMap.vue  YearInTravelSection.vue
    ├── ScreenshotCarousel.vue  OpenSourceSection.vue
    ├── AppStoreCTA.vue  SiteFooter.vue
    ├── PhoneMockup.vue  WorldMapArt.vue  AmbientBackground.vue
    ├── BrandLogo.vue  AppStoreBadge.vue  ThemeToggle.vue  AppIcon.vue
    └── screens/                CSS/SVG mockups of the app screens
```

## Design notes

- **Brand palette** (`tailwind.config.js`) is taken straight from the app:
  the indigo→violet tile gradient (`#12173d → #38216b`) and the `#4f45e6` /
  `#8c4dd9` accents. The logo is recreated as inline SVG from `LogoView.swift`.
- **Dark/light** follows `prefers-color-scheme` automatically; the toggle only
  overrides it on explicit user choice (persisted to `localStorage`). A tiny
  inline script in `index.html` prevents a flash of the wrong theme.
- **App screenshots** ship as hand-built CSS/SVG mockups (`components/screens/`)
  so the site is lightweight out of the box — but you can drop in your own real
  screenshots anytime (see below).
- **Accessibility**: semantic landmarks, skip link, focus-visible rings,
  `aria-label`s on icon buttons, and full `prefers-reduced-motion` support.

## Adding your own app screenshots

Drop image files into [`public/screenshots/`](public/screenshots/) and they
replace the mockups automatically — **no code changes required**. Use these names:
`dashboard.png`, `recap.png`, `personality.png`, `map.png`, `country.png`,
`share.png`. Any screen without a file keeps using its SVG mockup, so you can add
them one at a time. Use tall iPhone captures (9:19.5). To change file names/paths
or the carousel order, edit [`src/data/screens.ts`](src/data/screens.ts).

## Before launch

Swap the placeholders in `src/data/site.ts`:

- `APP_STORE_URL` — the real App Store product page
- `GITHUB_REPO` — already set to `BerendVandenbussche/Photrail`

And update the canonical/OG URLs in `index.html` + `public/sitemap.xml` to the
production domain.

## Deployment

`npm run build` outputs a static `dist/` you can host anywhere — Netlify,
Vercel, Cloudflare Pages, GitHub Pages, or any static host/CDN.

## License

MIT — same as the Photrail app.
