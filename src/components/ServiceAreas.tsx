import { business } from "@/lib/content";
import Reveal from "@/components/Reveal";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?ll=53.62,-6.55&z=8&output=embed";
const MAP_LINK_URL = "https://www.google.com/maps/@53.62,-6.55,8z";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Areas We Cover
          </h2>
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

            {/* Approximate service-area highlight over Dublin, Meath & Louth.
                Decorative only — not a precise county boundary trace, since
                that needs the paid Maps JS API with GeoJSON boundary data.
                The map itself is real; this overlay just can't be panned or
                zoomed, so "Open in Google Maps" below covers that. */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 205 60
                   C 175 55, 150 70, 145 100
                   C 140 125, 150 145, 148 170
                   C 146 195, 165 215, 195 225
                   C 220 233, 245 225, 258 205
                   C 270 187, 262 170, 268 150
                   C 274 128, 268 105, 250 88
                   C 235 73, 222 63, 205 60 Z"
                fill="var(--color-brand)"
                fillOpacity="0.16"
                stroke="var(--color-brand)"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeDasharray="6 5"
              />
            </svg>

            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 flex h-10 items-center gap-2 rounded-full bg-charcoal/90 px-4 text-xs font-semibold text-cream backdrop-blur transition-colors hover:bg-charcoal sm:text-sm"
            >
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
