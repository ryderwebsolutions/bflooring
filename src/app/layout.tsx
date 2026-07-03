import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { business, heroImage } from "@/lib/content";
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
  title: {
    default:
      "Philip B Flooring | Timber, Laminate & Vinyl Flooring — Dublin, Meath & Louth",
    template: "%s | Philip B Flooring",
  },
  description:
    "Timber, laminate and vinyl flooring fitted for homes and businesses across Dublin, Meath and Louth. Get a free quote from Philip B Flooring.",
  alternates: {
    canonical: "/",
  },
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
        url: heroImage.src,
        width: 1200,
        height: 630,
        alt: heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip B Flooring | Timber, Laminate & Vinyl Flooring",
    description:
      "Timber, laminate and vinyl flooring fitted for homes and businesses across Dublin, Meath and Louth.",
    images: [heroImage.src],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  description: business.tagline,
  url: siteUrl,
  image: heroImage.src,
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to main content
        </a>
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
