import { existsSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import { PresentationImageFrame } from "./presentation-image-frame";

type Props = { src: string; alt: string; sizes: string; kind: "hero" | "portrait"; fallbackImage?: { src: string; alt: string }; children: ReactNode };

export function PresentationImage({ src, alt, sizes, kind, fallbackImage, children }: Props) {
  // Check local public assets during rendering/build so missing files never
  // produce image requests. Rebuild after adding assets in production.
  const images = [{ src, alt, variant: kind }, ...(fallbackImage ? [{ ...fallbackImage, variant: "lifestyle" as const }] : [])]
    .filter((image) => existsSync(join(process.cwd(), "public", image.src)));
  return <PresentationImageFrame images={images} sizes={sizes} kind={kind}>
    {children}
  </PresentationImageFrame>;
}
