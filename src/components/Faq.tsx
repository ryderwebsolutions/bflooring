import { faqs } from "@/lib/content";
import Reveal from "@/components/Reveal";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Common Questions
          </h2>
        </Reveal>

        <div className="mt-8 border-t border-charcoal/10">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delayMs={Math.min(i, 4) * 40}>
              <details className="group border-b border-charcoal/10 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-heading text-base font-bold text-charcoal marker:content-none sm:text-lg">
                  {faq.question}
                  <ChevronIcon className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
