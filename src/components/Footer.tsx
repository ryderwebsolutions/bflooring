import Link from "next/link";
import { business, services } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pb-28 pt-16 text-cream/80 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-bold text-cream">
              {business.name}
            </p>
            <p className="mt-2 text-sm">{business.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/50">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={business.phoneTel} className="hover:text-brand">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={business.emailUrl} className="hover:text-brand">
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/50">
              Services
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/#services" className="hover:text-brand">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/50">
              Site
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-brand">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-cream/50">
              Areas Covered
            </h3>
            <p className="mt-3 text-sm">{business.areas.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
