import { CtaLink } from "@/components/ui/cta-link";
import { landing } from "@/content/landing";
import { site } from "@/content/site";

export function FinalCta() {
  const content = landing.finalCta;
  return <section className="site-container final-cta-section" aria-labelledby="final-cta-title">
    <div className="final-cta-panel">
      <div className="final-cta-content">
        <p className="eyebrow section-eyebrow">{content.eyebrow}</p>
        <h2 id="final-cta-title" className="section-title">{content.headline}</h2>
        <p className="section-copy">{content.copy}</p>
      </div>
      <div className="final-cta-conversion">
        <div className="final-cta-actions">
          <CtaLink href={site.registrationUrl} newTab>{content.registration}</CtaLink>
          <CtaLink href={site.whatsappUrl} variant="secondary" newTab>{content.contact}</CtaLink>
        </div>
        <p className="final-cta-member"><span>{site.name}</span><span>{content.memberLabel}: <span className="final-cta-number">{site.memberNumber}</span></span></p>
      </div>
    </div>
  </section>;
}
