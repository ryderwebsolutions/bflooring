"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/lib/content";

const AUTO_ADVANCE_MS = 5000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/10 blur-2xl"
      />
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-charcoal/10">
        {heroSlides.map((slide, i) => {
          const isActive = i === active;
          return (
            <Link
              key={slide.id}
              href={slide.href}
              aria-label={slide.cta}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              className={`absolute inset-0 block transition-opacity duration-700 ease-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <span className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 font-heading text-base font-bold text-cream sm:text-lg">
                {slide.cta}
                <ArrowIcon />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}: ${slide.cta}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active
                ? "w-6 bg-brand"
                : "w-2 bg-charcoal/20 hover:bg-charcoal/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
