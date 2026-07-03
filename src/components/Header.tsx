"use client";

import { useState } from "react";
import Link from "next/link";
import { business, nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-taupe/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight text-charcoal md:text-xl"
          >
            {business.name}
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-oak"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-5">
            <a
              href={business.phoneTel}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-oak"
            >
              {business.phoneDisplay}
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-oak px-6 text-sm font-semibold text-cream transition-colors hover:bg-oak-dark"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={business.phoneTel}
              aria-label={`Call Philip B Flooring on ${business.phoneDisplay}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-oak text-cream"
            >
              <PhoneIcon />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-cream md:top-20 lg:hidden">
          <nav className="flex flex-1 flex-col items-stretch gap-1 overflow-y-auto px-6 py-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center border-b border-taupe/15 py-4 text-lg font-medium text-charcoal"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 pb-8">
            <a
              href={business.phoneTel}
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-oak text-base font-semibold text-cream"
            >
              <PhoneIcon /> Call Philip
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-whatsapp text-base font-semibold text-white"
            >
              <WhatsAppIcon /> WhatsApp Philip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1.1.5 1.1 1.1v3.6c0 .6-.5 1.1-1.1 1.1C10.8 21.3 2.7 13.2 2.7 3.7c0-.6.5-1.1 1.1-1.1H7.4c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17 14.2c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"
        fill="currentColor"
      />
      <path
        d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.2-8.4 8.2z"
        fill="currentColor"
      />
    </svg>
  );
}
