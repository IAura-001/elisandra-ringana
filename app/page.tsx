import { WellnessProducts } from "@/components/landing/wellness-products";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";
import { WhatIsRingana } from "@/components/landing/what-is-ringana";
import { AboutElisandra } from "@/components/landing/about-elisandra";
import { GettingStarted } from "@/components/landing/getting-started";
import { StarterOptions } from "@/components/landing/starter-options";

export default function Home() {
  return <><SiteHeader /><main><Hero /><WhatIsRingana /><AboutElisandra /><GettingStarted /><StarterOptions /><WellnessProducts /><FinalCta /></main><SiteFooter /></>;
}
