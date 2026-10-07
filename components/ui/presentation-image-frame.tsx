"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = { images: { src: string; alt: string; variant: string }[]; sizes: string; kind: "hero" | "portrait"; children: ReactNode };

export function PresentationImageFrame({ images, sizes, kind, children }: Props) {
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const image = images.find((candidate) => !failedSources.includes(candidate.src));

  useEffect(() => {
    const frame = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!frame || preference.matches || !("IntersectionObserver" in window)) return;
    if (frame.getBoundingClientRect().top < window.innerHeight) return;
    // Match the existing one-time reveal behavior and shared animation.
    frame.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        frame.dataset.reveal = "visible";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(frame);
    const handlePreference = () => {
      if (preference.matches) {
        delete frame.dataset.reveal;
        observer.disconnect();
      }
    };
    preference.addEventListener("change", handlePreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", handlePreference);
      delete frame.dataset.reveal;
    };
  }, []);

  return <div ref={ref} className={`${kind === "hero" ? "portrait-frame" : "about-portrait"} presentation-frame`} aria-hidden={image ? undefined : true}>
    <div className="presentation-media">
      {image ? <Image key={image.src} src={image.src} alt={image.alt} fill sizes={sizes} className={`presentation-image presentation-image-${image.variant}`} preload={kind === "hero"} onError={() => setFailedSources((sources) => [...sources, image.src])} /> : children}
    </div>
  </div>;
}
