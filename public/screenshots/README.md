# Your app screenshots go here

Drop your real Photrail screenshots into this folder to replace the built-in
SVG mockups across the site. **No code changes needed** — each screen picks up
its image automatically, and any screen without a file keeps using the mockup.

## Expected files

| File name          | Used for                          |
| ------------------ | --------------------------------- |
| `dashboard.png`    | Hero (main phone), download CTA   |
| `recap.png`        | Hero (back phone), Year in Travel |
| `personality.png`  | Download CTA, carousel            |
| `map.png`          | Download CTA, carousel            |
| `country.png`      | Carousel                          |
| `share.png`        | Carousel                          |

## Tips

- **Aspect ratio:** use a tall iPhone capture (9:19.5, e.g. 1290 × 2796 from a
  modern iPhone). The frame crops with `object-cover`, so matching this ratio
  avoids any cropping.
- **Status bar:** keep it in the capture — the frame's Dynamic Island sits right
  over it. (To hide the island for a screen, pass `:island="false"` to
  `<PhoneMockup>`.)
- **File type / names:** PNG or JPG both work. To use different names or types,
  edit the `image` paths in [`src/data/screens.ts`](../../src/data/screens.ts).
- **Optimize** large PNGs (e.g. with ImageOptim or `pngquant`) to keep the page
  fast.

This `README.md` is ignored by the app — only image files are loaded.
