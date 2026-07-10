import Link from "next/link";
import { business } from "@/lib/content";
import { WhatsAppIcon } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sand">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark sm:text-sm">
              Dublin &middot; Meath &middot; Louth
            </p>
            <h1 className="max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
              Quality Flooring. Expert Finish.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Timber, laminate and vinyl flooring fitted for homes and
              businesses across Dublin, Meath and Louth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="flex h-14 items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-cream transition-colors hover:bg-brand-dark"
              >
                Get a Free Quote
              </Link>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-8 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
