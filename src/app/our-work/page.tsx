import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems, business } from "@/lib/content";

const title = "Our Work";
const description =
  "A look at timber, laminate and vinyl flooring projects from Philip B Flooring, serving Dublin, Meath and Louth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: `${title} | Philip B Flooring`,
    description,
    url: "/our-work",
  },
  twitter: {
    title: `${title} | Philip B Flooring`,
    description,
  },
};

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Our Work
            </p>
            <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Flooring Projects Across Dublin, Meath &amp; Louth
            </h1>
            <p className="mt-4 max-w-xl text-base text-charcoal/70 sm:text-lg">
              A look at the kind of finish we aim for. Real project photos
              will replace these as jobs are completed — follow{" "}
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                {business.instagramHandle}
              </a>{" "}
              for the latest work.
            </p>

            <div className="mt-10">
              <GalleryGrid items={galleryItems} showFilter />
            </div>

            <div className="mt-12">
              <Link
                href="/#contact"
                className="flex h-14 w-full items-center justify-center rounded-full bg-brand text-base font-semibold text-cream transition-colors hover:bg-brand-dark sm:w-auto sm:px-10"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
