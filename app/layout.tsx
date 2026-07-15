import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://galaxy-aqua.vercel.app"),
  title: {
    default: "Galaxy Aqua Solutions | Water Treatment Services in Chennai",
    template: "%s | Galaxy Aqua Solutions"
  },
  description:
    "Galaxy Aqua Solutions provides RO plants, water treatment, filtration, STP, ETP, softening, recycling, and maintenance support in Chennai.",
  keywords: [
    "Galaxy Aqua Solutions",
    "water treatment Chennai",
    "RO plant Chennai",
    "STP Chennai",
    "ETP Chennai",
    "water softener Tambaram"
  ],
  openGraph: {
    title: "Galaxy Aqua Solutions",
    description:
      "Clean, practical water-treatment support for homes, apartments, commercial sites, and industries in Chennai.",
    type: "website",
    locale: "en_IN",
    images: ["/images/products/a134e12e-9807-47fb-abf5-60576c6e1564.JPG"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter businessName={business.name} />
      </body>
    </html>
  );
}
