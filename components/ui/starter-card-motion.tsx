"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function StarterCardMotion({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!card || preference.matches || !("IntersectionObserver" in window)) return;

    // Leave SSR content and cards already on screen visible. Only prepare
    // offscreen cards for a single reveal, without affecting their dimensions.
    if (card.getBoundingClientRect().top < window.innerHeight) return;
    card.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.dataset.reveal = "visible";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(card);

    const handlePreference = () => {
      if (preference.matches) {
        delete card.dataset.reveal;
        observer.disconnect();
      }
    };
    preference.addEventListener("change", handlePreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", handlePreference);
      delete card.dataset.reveal;
    };
  }, []);

  return <article ref={ref} className={`starter-option ${className}`}>{children}</article>;
}
