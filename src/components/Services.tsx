"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeIndex = services.findIndex((s) => s.id === activeId);

  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Flooring Fitted Right, First Time
          </h2>
          <p className="mt-4 max-w-xl text-base text-charcoal/70 sm:text-lg">
            Supply and fitting for every stage of the job, from prepping the
            subfloor to the last skirting board.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <ul className="border-t border-charcoal/10">
              {services.map((service, i) => {
                const active = service.id === activeId;
                return (
                  <li key={service.id} className="border-b border-charcoal/10">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(service.id)}
                      onFocus={() => setActiveId(service.id)}
                      onClick={() => setActiveId(service.id)}
                      aria-pressed={active}
                      className="group flex w-full items-start gap-4 py-5 text-left transition-colors"
                    >
                      <span
                        className={`font-heading text-2xl font-bold tabular-nums text-brand transition-colors ${
                          active ? "lg:text-brand" : "lg:text-charcoal/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-heading text-lg font-bold text-charcoal transition-colors sm:text-xl ${
                            active ? "lg:text-charcoal" : "lg:text-charcoal/60"
                          }`}
                        >
                          {service.title}
                        </span>
                        <span
                          className={`mt-1 hidden text-sm leading-relaxed transition-opacity lg:block ${
                            active ? "text-charcoal/70 opacity-100" : "opacity-0"
                          }`}
                        >
                          {service.description}
                        </span>
                        <span className="mt-3 flex items-center gap-3 lg:hidden">
                          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={service.image}
                              alt={service.alt}
                              fill
                              loading="lazy"
                              sizes="64px"
                              className="object-cover"
                            />
                          </span>
                          <span className="text-sm leading-relaxed text-charcoal/70">
                            {service.description}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden lg:col-span-6 lg:block xl:col-span-7">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-2xl">
              {services.map((service, i) => (
                <Image
                  key={service.id}
                  src={service.image}
                  alt={service.alt}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 45vw, 0px"
                  className={`object-cover transition-opacity duration-500 ease-out ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
