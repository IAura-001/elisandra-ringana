import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary"; newTab?: boolean; className?: string };

export function CtaLink({ href, children, variant = "primary", newTab = false, className = "" }: Props) {
  const classes = `cta cta-${variant} ${className}`;
  const label = <>{children}<span aria-hidden="true">↗</span></>;
  // Native disabled buttons prevent placeholder navigation without client JS.
  // A verified URL automatically switches this to a functioning anchor.
  if (!href || href === "#") return <button type="button" disabled className={classes}>{label}</button>;
  return <a href={href} className={classes} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
    {label}{newTab && <span className="sr-only"> (se abre en una nueva pestaña)</span>}
  </a>;
}
