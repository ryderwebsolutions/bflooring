"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryItem } from "@/lib/content";

export default function GalleryGrid({
  items,
  showFilter = false,
}: {
  items: GalleryItem[];
  showFilter?: boolean;
}) {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    category === "All" ? items : items.filter((item) => item.category === category);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : Math.min(i + 1, filtered.length - 1)));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? null : Math.max(i - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, filtered.length]);

  return (
    <div>
      {showFilter && (
        <div className="mb-8 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`min-h-[44px] rounded-full border px-4 text-sm font-medium transition-colors ${
                category === cat
                  ? "border-brand bg-brand text-cream"
                  : "border-taupe/30 bg-transparent text-charcoal/70 hover:border-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-taupe/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label={`View larger photo: ${item.alt}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 ease-out sm:group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-3 py-2 text-left text-xs font-medium text-cream opacity-0 transition-opacity sm:group-hover:opacity-100">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-charcoal/70">
          No projects in this category yet.
        </p>
      )}

      {activeIndex !== null && filtered[activeIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={filtered[activeIndex].image}
                alt={filtered[activeIndex].alt}
                fill
                sizes="(min-width: 768px) 700px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm text-cream/80">
              {filtered[activeIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
