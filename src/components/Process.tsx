import { processSteps } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-charcoal py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            From Quote to Finished Floor
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delayMs={i * 70}>
              <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-3">
                <span className="font-heading text-3xl font-semibold text-oak">
                  {String(step.step).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
