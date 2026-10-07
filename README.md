# Elisandra Barzaga landing page

Spanish informational presentation for Elisandra Barzaga as a RINGANA Ambassador. This is a personal presentation, not the official RINGANA corporate website.

## Local development

- `npm run dev`: start the development server.
- `npm run lint`: run ESLint.
- `npm run build`: create the production build.
- `npm start`: serve the production build.

## Centralized configuration

`content/site.ts` contains identity, metadata, member number, contact URLs, and presentation image paths. `content/landing.ts` contains section copy, footer links, starter-kit prices and points, and wellness product configuration.

## Production data and remaining inputs

- Registration and WhatsApp URLs are confirmed in `content/site.ts`. All registration and contact CTAs use that configuration and open safely in a new tab. The member number also has one centralized source.
- The personal portrait asset is not supplied. The approved lifestyle image is displayed through the existing safe fallback mechanism.
- Wellness prices remain null and hidden. Display requires a verified current US price and `confirmed-current-us` status.

## Assets and navigation

HQ kit and wellness product images are active. Original uploads are organized in `public/images/references/source-uploads/`; earlier references and crops are retained for traceability and are not rendered as alternative product art. Crop mappings are documented in `public/images/products/references/README.md`.

Footer links resolve to `inicio`, `ringana`, `elisandra`, `como-empezar`, `opciones`, and `productos`. Native anchor scrolling respects the existing reduced-motion preference. The final member reminder reads the same centralized member number as the registration instructions.
