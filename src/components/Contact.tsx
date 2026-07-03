import { business } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export default function Contact({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Heading className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Get Your Free Quote
          </Heading>
          <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
            Call, WhatsApp, email or find us on Instagram — whichever&apos;s
            easiest, Philip will get back to you.
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={business.phoneTel}
              className="flex h-14 items-center justify-center gap-3 rounded-full bg-brand px-6 text-base font-semibold text-cream transition-colors hover:bg-brand-dark"
            >
              <PhoneIcon /> Call {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-6 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon /> WhatsApp Philip
            </a>
            <a
              href={business.emailUrl}
              className="flex h-14 items-center justify-center gap-3 rounded-full border border-charcoal/20 px-6 text-base font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand"
            >
              <EmailIcon /> {business.email}
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-3 rounded-full border border-charcoal/20 px-6 text-base font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand"
            >
              <InstagramIcon /> {business.instagramHandle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}
