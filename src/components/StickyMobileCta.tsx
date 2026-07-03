"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/content";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex gap-px bg-taupe/20 pb-[env(safe-area-inset-bottom)] transition-transform duration-200 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={business.phoneTel}
        className="flex h-14 flex-1 items-center justify-center gap-2 bg-brand text-sm font-semibold text-cream"
        tabIndex={visible ? 0 : -1}
      >
        <PhoneIcon /> Call Philip
      </a>
      <a
        href={business.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 flex-1 items-center justify-center gap-2 bg-whatsapp text-sm font-semibold text-white"
        tabIndex={visible ? 0 : -1}
      >
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
  );
}
