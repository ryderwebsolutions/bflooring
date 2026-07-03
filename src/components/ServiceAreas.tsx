import { business } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
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
                className="rounded-full border border-oak/40 bg-oak/10 px-6 py-2 text-sm font-semibold text-oak-dark"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
