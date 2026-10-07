# Product image quality audit — Mission 5.15

## Mission 5.17 update

All four wellness cards now use `/images/products/dea-hq.png`, `bty-hq.png`, `chi-hq.png`, and `isi-hq.png`. They are byte-identical copies of the supplied timestamped uploads now archived in `public/images/references/source-uploads/`, visually identified by packaging labels and colors before mapping: DEA turquoise/blue, BTY yellow/orange, CHI coral/orange, and ISI pink/red. All four sources are 1448 x 1086. Previous screenshot-derived wellness crops are archived only; their source limitations below describe the historical state.

Existing quality 90, responsive sizes, containment, centered fitting, layout, copy, hidden prices, CTAs, and motion are unchanged. No CSS or component changes were needed.

## Mission 5.16 update

The active starter images are now `light-hq.png`, `medium-hq.png`, `rich-hq.png`, and `supplements-hq.png` under `public/images/starter-options/`. Each is 768 ? 512, copied unchanged from the supplied files now archived in `public/images/references/source-uploads/`. The centralized intrinsic dimensions match these assets. They replace all four screenshot-derived starter paths; previous files are retained only as archived/reference assets.

The approved card layout, containment, padding, quality 90, responsive sizes, and motion are unchanged. These sources provide materially more detail than the 350?390-pixel screenshot crops. Their 768-pixel width still limits full 2?/3? coverage at large tablet sizes. At Mission 5.16, wellness images were unchanged; Mission 5.17 supersedes that historical state with HQ uploads.

The following audit records the historical Mission 5.15 state, not the current starter mappings.

## Mission 5.15 sources (historical)

| Asset | Actual dimensions | Limitation |
| --- | --- | --- |
| starter-options/light-products.png | 350 × 452 | Low-resolution screenshot; soft bottle labels |
| starter-options/medium-products.png | 350 × 462 | Low-resolution screenshot; soft bottle labels |
| starter-options/rich-products.png | 350 × 465 | Low-resolution screenshot; soft bottle labels |
| starter-options/supplements-products.png | 390 × 300 | Low-resolution screenshot; limited tin label detail |
| products/dea-official.png | 250 × 252 | Low-resolution search-result tile |
| products/bty-official.png | 265 × 251 | Low-resolution search-result tile |
| products/chi-official.png | 255 × 256 | Low-resolution search-result tile |
| products/isi-official.png | 245 × 260 | Low-resolution search-result tile |

The active PNGs are native-size, lossless crops directly from the supplied original JPEG screenshots. They bypass the previous chain of screenshot → intermediate JPEG → cropped JPEG. They preserve original decoded pixels without sharpening, synthetic detail, resizing, or new compression loss during asset preparation. The screenshots themselves remain compressed and low resolution. These assets are temporary until clean high-resolution originals are supplied.

## Display-size audit

At the maximum desktop grid width, a card is 606 CSS pixels wide. Its image content box is 556 pixels wide after borders and padding. Contain fitting makes portrait kit compositions narrower than that box: roughly 305–314 CSS pixels wide, with SUPPLEMENTS around 528 pixels. Thus the bottle kits are adequate around 1× desktop density but not at 2×; SUPPLEMENTS is enlarged even at 1×. Wellness compositions are roughly 365–406 pixels wide, exceeding their 245–265-pixel sources.

The widest single-column tablet cards approach 959 CSS pixels before padding. Both kit and wellness sources are undersized there. At 375–430px mobile widths, wellness compositions are approximately 209–253 CSS pixels wide; these are close to native at 1×, but inadequate for 2×/3× phone displays. Kit compositions also lack sufficient detail for high-density phones.

Preserving the approved large presentation necessarily retains enlargement in some viewports. Shrinking images to native pixels would undermine that approved presentation. No fabricated upscaled asset was introduced; CSS containment preserves proportions and the document records the source limitation explicitly.

## Delivery and styling

- Both product components use `quality={90}`. `next.config.ts` allows 75 and 90, so the requested quality is actually served rather than coerced to the default 75.
- Responsive `sizes` now accounts for card borders and image padding at each breakpoint. These describe the available image box conservatively; contain fitting may use less width for portrait compositions.
- The rest state has no product-image filters, blur, or permanent scaling. Existing one-time reveal and 1.02 desktop hover zoom are unchanged, as is reduced-motion handling.
- CSS, card ratios, padding, grid breakpoints, motion, and content remain unchanged. The current padding centers complete product compositions without clipping.
- The hero uses a 1448 × 1086 source with cover fitting. Its existing responsive size declarations and delivery remain unchanged; no equivalent product-quality bottleneck was found there.

## Existing alternatives inspected

The four previous starter PNGs and `products/dea.png` are all 1448 × 1086. Visual inspection shows generated/editorial compositions with embedded headings and differing product arrangements. They are not equivalent clean exports of the approved real kit and packaging images. None were switched in merely for their larger pixel count. Original assets and previous JPEG crops remain on disk for traceability, but are not active.

The previous kit screenshot crops are LIGHT 424 × 670, MEDIUM 424 × 660, RICH 424 × 620, and SUPPLEMENTS 424 × 565. Their extra pixels contain whitespace, titles, and pricing rather than additional product detail. The previous product-only JPEGs and wellness JPEGs have the same dimensions as the new PNGs; converting from those would not restore detail.

## Ideal replacement assets

Supply approved clean product exports for all eight products/sets, preferably PNG or lossless WebP, in sRGB, on white or transparent backgrounds, without headings, prices, points, phone controls, or search UI. Preserve all bottles/tins and correct current packaging.

Aim for at least 2000 pixels on the longest edge of each tightly composed export, ideally 2500–3000 pixels for high-density single-column tablet displays. Keep the existing crop proportions where practical. Replace centralized image paths and intrinsic kit dimensions, then rebuild and check desktop, tablet, 375px, and 430px at 1× and 2×/3× density. Higher optimizer quality cannot recover detail absent from the originals.
