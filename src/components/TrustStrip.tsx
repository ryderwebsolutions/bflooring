import { services, trustBadges } from "@/lib/content";

const items = [...trustBadges, ...services.map((s) => s.title)];

export default function TrustStrip() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-cream/10 bg-charcoal py-3.5"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-5 text-xs font-semibold uppercase tracking-wide text-cream/80 sm:text-sm"
          >
            <span className="h-1 w-1 rounded-full bg-brand" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
