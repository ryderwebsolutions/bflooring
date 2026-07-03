import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <div>
          <p className="font-heading text-6xl font-bold text-oak">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            That page has gone missing
          </h1>
          <p className="mt-3 text-base text-charcoal/70">
            The floor&apos;s still solid, this page just isn&apos;t. Head back
            and get your free quote instead.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-oak px-8 text-base font-semibold text-cream transition-colors hover:bg-oak-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
