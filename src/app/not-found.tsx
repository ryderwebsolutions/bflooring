import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist. Head back to Philip B Flooring for a free flooring quote.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <div>
          <p className="font-heading text-6xl font-bold text-brand">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            That page has gone missing
          </h1>
          <p className="mt-3 text-base text-charcoal/70">
            The floor&apos;s still solid, this page just isn&apos;t. Head back
            and get your free quote instead.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-cream transition-colors hover:bg-brand-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
