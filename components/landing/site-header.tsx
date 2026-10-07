import { CtaLink } from "@/components/ui/cta-link";
import { landing } from "@/content/landing";
import { site } from "@/content/site";

export function SiteHeader() {
  return <header className="site-header"><div className="site-container flex items-center justify-between gap-4">
    <a href="#inicio" aria-label={landing.header.home} className="brand-link"><span className="brand-name">{site.brand}</span><span className="brand-role">{site.role}</span></a>
    <CtaLink href={site.registrationUrl} className="header-cta" newTab>{landing.header.registration}</CtaLink>
  </div></header>;
}
