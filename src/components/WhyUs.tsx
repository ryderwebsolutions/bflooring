import Image from "next/image";
import { whyUsImage, whyUsPoints } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              The Person Quoting Is the Person Fitting
            </h2>
            <p className="mt-4 max-w-lg text-base text-charcoal/70 sm:text-lg">
              No call centre, no sales team, no subcontractors passing the job
              along. Philip quotes it, Philip fits it.
            </p>

            <dl className="mt-8 space-y-6">
              {whyUsPoints.map((point) => (
                <div key={point.title}>
                  <dt className="font-heading text-base font-semibold text-charcoal">
                    {point.title}
                  </dt>
                  <dd className="mt-1 text-sm text-charcoal/70">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4]">
              <Image
                src={whyUsImage.src}
                alt={whyUsImage.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
