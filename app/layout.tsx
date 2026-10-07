import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang={site.language} className={`${geistSans.variable} h-full antialiased`}>
    <body className="min-h-full flex flex-col">{children}</body>
  </html>;
}
