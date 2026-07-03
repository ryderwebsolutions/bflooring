import Link from "next/link";
import { business, galleryItems } from "@/lib/content";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  const featured = galleryItems.slice(0, 6);

  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 max-w-xl text-base text-charcoal/70 sm:text-lg">
            A look at the kind of finish we aim for. Real project photos will
            replace these as jobs are completed.
          </p>
        </Reveal>

        <div className="mt-10">
          <GalleryGrid items={featured} />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/our-work"
            className="flex h-12 items-center justify-center rounded-full border border-charcoal/20 px-6 text-sm font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand"
          >
            See Full Gallery
          </Link>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full bg-charcoal px-6 text-sm font-semibold text-cream transition-colors hover:bg-charcoal/85"
          >
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
