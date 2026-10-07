# Product references and asset history

Mission 5.17: active wellness assets are `/images/products/dea-hq.png`, `/images/products/bty-hq.png`, `/images/products/chi-hq.png`, and `/images/products/isi-hq.png`. Visual inspection confirmed all four packaging labels and expected colors. The supplied uploads were copied unchanged from uploads now archived in `public/images/references/source-uploads/`: DEA `03_09_40 PM-1`, BTY `03_09_42 PM-2`, CHI `03_09_46 PM-3`, ISI `03_09_47 PM-4` (all dated Oct 7, 2026). Previous crop mappings below are historical reference only.

Mission 5.16: active starter assets are now `/images/starter-options/light-hq.png`, `medium-hq.png`, `rich-hq.png`, and `supplements-hq.png` (all 768 x 512). Starter screenshot crops below are retained only for historical reference. Wellness mappings are unchanged.

Mission 5.15 delivery update: the active wellness assets now use `*-official.png`, regenerated losslessly from the original supplied screenshot with the same crop boundaries. Active starter assets use `*-products.png`, retaining the approved product-only crops. Historical JPEG mappings below document earlier preparation steps. See the root `IMAGE-QUALITY.md` for the current dimension audit, delivery settings, and high-resolution replacement plan.

The four `*-reference.jpg` files are cropped from the supplied `cada producto.jpeg` screenshot in `public/images/precios de productos ringana`:

- DEA: upper-left product tile.
- BTY: upper-right product tile.
- CHI: lower-left product tile.
- ISI: lower-right product tile.

Phone controls, search copy, and search-result captions are excluded. These are supplied visual references, not a verification of official current US product wording or prices. Mission 4.2 uses tighter crops as the active wellness assets. Visual inspection confirmed DEA blue with a dark bottle, BTY yellow/orange with a bottle, CHI coral/orange with a bottle, and ISI pink/red with a dark bottle. The DEA reference replaces the previous editorial illustration so all four cards show the supplied packaging and bottles. The original DEA image is retained on disk.

| Reference | Active asset | Crop (left, top, width, height) |
| --- | --- | --- |
| dea-reference.jpg | /images/products/dea-official.jpg | (20, 20, 250, 252) |
| bty-reference.jpg | /images/products/bty-official.jpg | (20, 15, 265, 251) |
| chi-reference.jpg | /images/products/chi-official.jpg | (35, 22, 255, 256) |
| isi-reference.jpg | /images/products/isi-official.jpg | (30, 17, 245, 260) |

The crops remove tile edges and footer badges while retaining full packaging, bottles, and neutral backgrounds. No upscaling or stretching is applied. Conservative product copy and hidden pricing are preserved.

# Official kit screenshot mappings

All kit sources are in `public/images/precios de productos ringana`. Crops use pixel coordinates `(left, top, width, height)` and retain products, kit title, pricing, and points:

| Kit | Source | Public asset | Crop |
| --- | --- | --- | --- |
| LIGHT | WhatsApp Image 2026-10-07 at 11.23.20 AM (2).jpeg | /images/starter-options/light-official.jpg | (24, 155, 424, 670) |
| MEDIUM | WhatsApp Image 2026-10-07 at 11.23.20 AM (1).jpeg | /images/starter-options/medium-official.jpg | (24, 185, 424, 660) |
| RICH | WhatsApp Image 2026-10-07 at 11.23.20 AM (3).jpeg | /images/starter-options/rich-official.jpg | (24, 195, 424, 620) |
| SUPPLEMENTS | WhatsApp Image 2026-10-07 at 11.23.20 AM.jpeg | /images/starter-options/supplements-official.jpg | (24, 225, 424, 565) |

The original source screenshots and previous generated kit assets are retained. The public kit crops are optimized JPEGs and use `next/image` with contain fitting within the existing rounded 4:3 visual areas.
