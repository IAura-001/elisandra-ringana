import { CtaLink } from "@/components/ui/cta-link";
import { landing } from "@/content/landing";
import { site } from "@/content/site";
import Image from "next/image";
import { StarterCardMotion } from "@/components/ui/starter-card-motion";

export function StarterOptions() {
  const content = landing.starterOptions;
  return <section id="opciones" className="site-container starter-section" aria-labelledby="starter-title">
    <div className="section-intro">
      <p className="eyebrow section-eyebrow">{content.eyebrow}</p>
      <h2 id="starter-title" className="section-title">{content.headline}</h2>
      <p className="section-copy">{content.intro}</p>
    </div>
    <div className="starter-grid">
      {content.options.map((option) => <StarterCardMotion key={option.name} className="starter-kit-card">
        <div className="option-visual official-kit-visual">
          <Image src={option.image.src} alt={option.image.alt} width={option.image.width} height={option.image.height}
            quality={90}
            sizes="(min-width: 1304px) 556px, (min-width: 1024px) calc((100vw - 192px) / 2), (min-width: 640px) calc(100vw - 114px), calc(100vw - 66px)"
            className="option-image" />
        </div>
        <div className="option-content">
          <h3>{option.name}</h3>
          {"audience" in option && <p className="kit-audience">{option.audience}</p>}
          <p className="section-copy">{option.copy}</p>
          <div className="kit-pricing">
            <p className="kit-price">{new Intl.NumberFormat("en-US", { style: "currency", currency: option.currency, currencyDisplay: "code" }).format(option.price)}</p>
            <p className="kit-points">{option.points.toFixed(option.pointsDecimals)} Points</p>
          </div>
        </div>
      </StarterCardMotion>)}
    </div>
    <p className="starter-note">{content.note}</p>
    <div className="starter-actions"><CtaLink href={site.whatsappUrl} newTab>{content.contact}</CtaLink><CtaLink href={site.registrationUrl} variant="secondary" newTab>{content.registration}</CtaLink></div>
  </section>;
}
