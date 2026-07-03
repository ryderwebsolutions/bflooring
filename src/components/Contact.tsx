import { business } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mt-4 max-w-lg text-base text-charcoal/70 sm:text-lg">
            Send over a few details and Philip will get back to you, or skip
            the form and get in touch directly.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal delayMs={80} className="lg:col-span-2">
            <div className="flex flex-col gap-3 rounded-2xl border border-taupe/20 bg-white/50 p-6">
              <h3 className="font-heading text-lg font-bold text-charcoal">
                Prefer to skip the form?
              </h3>
              <a
                href={business.phoneTel}
                className="flex h-14 items-center gap-3 rounded-full bg-brand px-6 text-base font-semibold text-cream transition-colors hover:bg-brand-dark"
              >
                <PhoneIcon /> Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center gap-3 rounded-full bg-whatsapp px-6 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon /> WhatsApp Philip
              </a>
              <a
                href={business.emailUrl}
                className="flex h-14 items-center gap-3 rounded-full border border-charcoal/20 px-6 text-base font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand"
              >
                <EmailIcon /> {business.email}
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center gap-3 rounded-full border border-charcoal/20 px-6 text-base font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand"
              >
                <InstagramIcon /> {business.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
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
