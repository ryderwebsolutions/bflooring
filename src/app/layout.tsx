import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/content";
import StickyMobileCta from "@/components/StickyMobileCta";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.philipbflooring.ie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Philip B Flooring | Timber, Laminate & Vinyl Flooring — Dublin, Meath & Louth",
  description:
    "Timber, laminate and vinyl flooring fitted for homes and businesses across Dublin, Meath and Louth. Get a free quote from Philip B Flooring.",
  openGraph: {
    title: "Philip B Flooring | Timber, Laminate & Vinyl Flooring",
    description:
      "Timber, laminate and vinyl flooring fitted for homes and businesses across Dublin, Meath and Louth.",
    url: siteUrl,
    siteName: business.name,
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "A bright living room with warm timber flooring",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.tagline,
  telephone: business.phoneDisplay,
  email: business.email,
  areaServed: business.areas,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.addressLocality,
    addressCountry: business.addressCountry,
  },
  sameAs: [business.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <StickyMobileCta />
      </body>
    </html>
  );
}
