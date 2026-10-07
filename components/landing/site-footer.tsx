import { landing } from "@/content/landing";
import { site } from "@/content/site";

export function SiteFooter() {
  const content = landing.footer;
  return <footer className="site-footer">
    <div className="site-container">
      <div className="footer-top">
        <a href="#inicio" className="brand-link footer-brand"><span className="brand-name">{content.brand}</span><span className="brand-role">{site.role}</span></a>
        <nav aria-label={content.navigationLabel}>
          <ul className="footer-navigation">
            {content.navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
          </ul>
        </nav>
      </div>
      <div className="footer-notes"><p>{content.note}</p><p>{content.trademarkNote}</p></div>
    </div>
  </footer>;
}
