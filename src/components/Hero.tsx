import Image from "next/image";
import Link from "next/link";
import { business, heroImage, trustBadges } from "@/lib/content";
import { WhatsAppIcon } from "@/components/Header";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden sm:min-h-[85vh]">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/10" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80 sm:text-sm">
          Dublin &middot; Meath &middot; Louth
        </p>
        <h1 className="max-w-2xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl">
          Quality Flooring. Expert Finish.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/90 sm:text-lg">
          Timber, laminate and vinyl flooring fitted for homes and businesses
          across Dublin, Meath and Louth.
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
            <WhatsAppIcon /> WhatsApp Philip
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium tracking-wide text-cream/80 sm:text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
