import { services, type Service } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Flooring Fitted Right, First Time
          </h2>
          <p className="mt-4 max-w-xl text-base text-charcoal/70 sm:text-lg">
            Supply and fitting for every stage of the job, from prepping the
            subfloor to the last skirting board.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delayMs={(i % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-taupe/20 bg-white/50 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-oak/10 text-oak">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "supply":
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "timber":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="10.5" width="11" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="15.5" y="10.5" width="5.5" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="16" width="6" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="10" y="16" width="11" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "laminate":
      return (
        <svg {...common}>
          <path d="M3 4h18v16H3z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 10h18M9 4v16M15 4v6M15 14v6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "vinyl":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 3.5v3M12 17.5v3M20.5 12h-3M6.5 12h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "prep":
      return (
        <svg {...common}>
          <path d="M4 20l6.5-6.5M20 4l-6.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M13 8l3-3 3 3-3 3-3-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M4 20l3-1 1-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "repair":
      return (
        <svg {...common}>
          <path
            d="M14.7 6.3a3 3 0 0 0-4.2 4.2L4 17v3h3l6.5-6.5a3 3 0 0 0 4.2-4.2l-2.1 2.1-2-2 2.1-2.1z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 20V9l6-4 6 4v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M14 20v-7h6v7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 12h1M8 15h1M11 12h1M11 15h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
