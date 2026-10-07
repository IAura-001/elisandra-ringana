import { CopyMemberNumber } from "@/components/ui/copy-member-number";
import { landing } from "@/content/landing";
import { site } from "@/content/site";

export function GettingStarted() {
  const content = landing.gettingStarted;
  return <section id="como-empezar" className="getting-started" aria-labelledby="getting-started-title">
    <div className="site-container">
      <div className="section-intro">
        <p className="eyebrow section-eyebrow">{content.eyebrow}</p>
        <h2 className="section-title" id="getting-started-title">{content.headline}</h2>
        <p className="section-copy">{content.intro}</p>
      </div>
      <ol className="registration-steps">
        {content.steps.map((step, index) => <li key={step.title} className={`registration-step${"showMemberNumber" in step && step.showMemberNumber ? " registration-step-member" : ""}`}>
          <span className="step-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="step-content">
            <h3>{step.title}</h3><p className="section-copy">{step.copy}</p>
            {"showMemberNumber" in step && step.showMemberNumber && <div className="member-block">
              <p className="member-name">{site.name}</p>
              <p className="member-label">{content.memberLabel}</p>
              <p className="member-number">{site.memberNumber}</p>
              <CopyMemberNumber number={site.memberNumber} copyLabel={content.copyLabel} copiedLabel={content.copiedLabel} errorLabel={content.copyError} />
            </div>}
          </div>
        </li>)}
      </ol>
    </div>
  </section>;
}
