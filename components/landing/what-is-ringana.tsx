import { landing } from "@/content/landing";

export function WhatIsRingana() {
  const content = landing.ringana;
  return (
    <section id="ringana" className="ringana-section" aria-labelledby="ringana-title">
      <div className="site-container">
        <p className="eyebrow section-eyebrow">{content.eyebrow}</p>
        <div className="ringana-editorial">
          <h2 id="ringana-title" className="section-title">{content.headline}</h2>
          <p className="section-copy">{content.copy}</p>
        </div>
        <ul className="concept-list">
          {content.concepts.map((concept) => (
            <li key={concept}><span className="accent-dot" aria-hidden="true" />{concept}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
