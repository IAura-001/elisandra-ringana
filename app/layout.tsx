import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    images: [{ url: site.socialImage, alt: site.title }],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.socialImage, alt: site.title }],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang={site.language} className={`${geistSans.variable} h-full antialiased`}>
    <body className="min-h-full flex flex-col">{children}</body>
  </html>;
}
