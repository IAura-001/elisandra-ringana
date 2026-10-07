import { CtaLink } from "@/components/ui/cta-link";
import { StarterCardMotion } from "@/components/ui/starter-card-motion";
import { WellnessProductImage } from "@/components/ui/wellness-product-image";
import { landing, type WellnessProduct } from "@/content/landing";
import { site } from "@/content/site";

export function WellnessProducts() {
  const content = landing.wellnessProducts;
  return <section id="productos" className="wellness-section" aria-labelledby="wellness-title">
    <div className="site-container">
      <div className="section-intro">
        <p className="eyebrow section-eyebrow">{content.eyebrow}</p>
        <h2 id="wellness-title" className="section-title">{content.headline}</h2>
        <p className="section-copy">{content.intro}</p>
      </div>
      <div className="wellness-grid">
        {content.products.map((product: WellnessProduct) => <StarterCardMotion key={product.name} className="wellness-card">
          <div className="option-visual wellness-visual">
            <WellnessProductImage image={product.image} />
          </div>
          <div className="option-content wellness-content">
            <h3>{product.name}</h3>
            <p className="section-copy">{product.shortDescription}</p>
            {product.priceStatus === "confirmed-current-us" && product.price !== null && Number.isFinite(product.price) && product.price > 0 && <p className="wellness-price">{new Intl.NumberFormat("es-US", { style: "currency", currency: product.currency }).format(product.price)}</p>}
            <CtaLink href={site.whatsappUrl} variant="secondary" className="wellness-cta" newTab>{content.contact}</CtaLink>
          </div>
        </StarterCardMotion>)}
      </div>
      <p className="starter-note">{content.note}</p>
    </div>
  </section>;
}
