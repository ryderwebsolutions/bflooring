import { testimonials } from "@/lib/content";
import Reveal from "@/components/Reveal";

const hasRealReviews = testimonials.some((t) => !t.id.startsWith("placeholder"));

export default function Testimonials() {
  if (!hasRealReviews) {
    // No verified Google reviews yet. Show an honest, on-brand placeholder
    // instead of inventing a testimonial. Once real reviews are added to
    // `testimonials` in content.ts (with name, quote and rating), this
    // component will render them as cards automatically.
    return (
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-xl font-bold text-charcoal sm:text-2xl">
              Reviews coming soon
            </h2>
            <p className="mt-3 text-sm text-charcoal/70 sm:text-base">
              We&apos;re building up a page of real client reviews — check back
              soon, or ask Philip directly when you get in touch.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            What Clients Say
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.id}>
              <figure className="h-full rounded-2xl border border-taupe/20 bg-white/50 p-6">
                {t.rating && (
                  <div className="mb-3 text-brand" aria-label={`${t.rating} out of 5 stars`}>
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                )}
                <blockquote className="text-sm text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-charcoal">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
