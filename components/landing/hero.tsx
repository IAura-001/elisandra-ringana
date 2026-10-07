import { CtaLink } from "@/components/ui/cta-link";
import { landing } from "@/content/landing";
import { site } from "@/content/site";
import { PresentationImage } from "@/components/ui/presentation-image";

export function Hero() {
  const content = landing.hero;
  return <div id="inicio" className="site-container hero">
    <section className="hero-panel" aria-labelledby="hero-title">
      <PresentationImage src={site.heroImage.src} alt={site.heroImage.alt} kind="hero"
        sizes="(min-width: 1304px) 682px, (min-width: 1024px) calc((100vw - 64px) * .55), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)">
        <div className="portrait-art">
          <div className="portrait-light" />
          <div className="portrait-arch" />
          <div className="portrait-drape" />
          <div className="portrait-foreground" />
        </div>
      </PresentationImage>
      <div className="hero-content">
        <div className="hero-identity">
          <p className="eyebrow">{site.name}</p>
          <p className="hero-role"><span className="accent-dot" aria-hidden="true" />{site.role}</p>
        </div>
        <h1 id="hero-title">{content.headline}</h1>
        <p className="hero-copy">{content.copy}</p>
        <div className="hero-actions">
          <CtaLink href={site.registrationUrl} newTab>{content.registration}</CtaLink>
          <CtaLink href={site.whatsappUrl} variant="secondary" newTab>{content.contact}</CtaLink>
        </div>
        <p className="hero-note">{content.note}</p>
      </div>
    </section>
  </div>;
}
