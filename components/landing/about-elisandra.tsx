import { CtaLink } from "@/components/ui/cta-link";
import { landing } from "@/content/landing";
import { site } from "@/content/site";
import { PresentationImage } from "@/components/ui/presentation-image";

export function AboutElisandra() {
  const content = landing.about;
  return (
    <section id="elisandra" className="site-container about-section" aria-labelledby="about-title">
      <div className="about-content">
        <p className="eyebrow section-eyebrow">{content.eyebrow}</p>
        <h2 id="about-title" className="section-title">{content.headline}</h2>
        <div className="about-identity"><p>{site.name}</p><span>{site.role}</span></div>
        <p className="section-copy">{content.copy}</p>
        <p className="section-copy">{content.contactCopy}</p>
        <CtaLink href={site.whatsappUrl} variant="secondary" newTab>{content.contact}</CtaLink>
      </div>
      <PresentationImage src={site.portrait.src} alt={site.portrait.alt} kind="portrait" fallbackImage={site.lifestyleImage}
        sizes="(min-width: 1304px) 516px, (min-width: 1024px) 42vw, (min-width: 644px) 580px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)">
        <div className="about-portrait-light" />
        <div className="about-portrait-shape" />
        <div className="about-portrait-fold" />
      </PresentationImage>
    </section>
  );
}
