import { business } from "@/lib/content";
import Reveal from "@/components/Reveal";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?ll=53.66,-6.45&z=9&output=embed";
const MAP_LINK_URL = "https://www.google.com/maps/@53.66,-6.45,9z";

export default function ServiceAreas({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id="areas" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Heading className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Areas We Cover
          </Heading>
          <p className="mx-auto mt-4 max-w-md text-base text-charcoal/70 sm:text-lg">
            Based in Dublin, fitting flooring across Dublin, Meath and Louth.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {business.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-brand/40 bg-brand/10 px-6 py-2 text-sm font-semibold text-brand-dark"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="relative mx-auto mt-10 aspect-[4/3] max-w-3xl overflow-hidden rounded-2xl border border-charcoal/10 bg-taupe/10 sm:aspect-[16/9]">
            <iframe
              title="Map of Dublin, Meath and Louth — Philip B Flooring service area"
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full pointer-events-none grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-3 top-3 flex h-10 items-center gap-2 rounded-full bg-charcoal/90 px-4 text-xs font-semibold text-cream backdrop-blur transition-colors hover:bg-charcoal sm:text-sm"
            >
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
