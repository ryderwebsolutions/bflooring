// Central content file for Philip B Flooring.
// Edit copy, services, gallery items, and business details here.
// Search for [CONFIRM to find every claim that still needs sign-off from Philip before launch.

export const business = {
  name: "Philip B Flooring",
  tagline: "Quality flooring. Expert finish.",
  phoneDisplay: "086 075 6083",
  phoneTel: "tel:0860756083",
  whatsappNumber: "353860756083",
  whatsappUrl:
    "https://wa.me/353860756083?text=Hi%20Philip%2C%20I%27d%20like%20a%20flooring%20quote",
  email: "philipbflooring@gmail.com",
  emailUrl: "mailto:philipbflooring@gmail.com",
  instagramHandle: "@philipbflooring",
  instagramUrl: "https://www.instagram.com/philipbflooring",
  areas: ["Dublin", "Meath", "Louth"],
  addressLocality: "Dublin",
  addressCountry: "IE",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#gallery" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Process", href: "/#process" },
  { label: "Areas We Cover", href: "/#areas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

// Each service links to a stock placeholder photo (see the note above
// galleryItems) so the services list can show a real floor instead of a
// generic icon. Swap `image`/`alt` for real project photos when available.
export const services: Service[] = [
  {
    id: "supply-fitting",
    title: "Flooring Supply & Fitting",
    description:
      "Supply and fitting handled as one job, so what you're quoted is what gets fitted.",
    image:
      "https://images.unsplash.com/photo-1646592491741-e79ae5953486?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of an empty open-plan room with a timber floor and staircase, used as a placeholder image",
  },
  {
    id: "timber",
    title: "Timber Flooring",
    description:
      "Solid and engineered timber floors fitted with an eye for grain, joins and finish.",
    image:
      "https://images.unsplash.com/photo-1722650363568-9f250806ec58?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of an empty bedroom with a checkerboard parquet timber floor, used as a placeholder image",
  },
  {
    id: "laminate",
    title: "Laminate Flooring",
    description:
      "Durable, low-maintenance laminate fitted tight and level, room to room.",
    image:
      "https://images.unsplash.com/photo-1722650273431-9aefddd19151?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of an empty bedroom with light laminate flooring, used as a placeholder image",
  },
  {
    id: "vinyl",
    title: "Vinyl Flooring",
    description:
      "Water-resistant vinyl fitted for kitchens, bathrooms and busy family rooms.",
    image:
      "https://images.unsplash.com/photo-1722348675233-e3af1abd4023?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of a small empty room with a grey tiled-effect floor, used as a placeholder image",
  },
  {
    id: "prep",
    title: "Floor Preparation",
    description:
      "Subfloors levelled and prepped properly before a single board goes down.",
    image:
      "https://images.unsplash.com/photo-1727872496300-57e476478a54?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of an empty hallway leading into a bright room with a timber floor, used as a placeholder image",
  },
  {
    id: "repairs",
    title: "Repairs & Finishing",
    description:
      "Damaged boards, worn finishes and uneven patches repaired and refinished.",
    image:
      "https://images.unsplash.com/photo-1722603929404-b29f53884a35?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of an empty entrance hallway with a honey-toned timber floor, used as a placeholder image",
  },
  {
    id: "commercial",
    title: "Domestic & Commercial Flooring",
    description:
      "Homes and business premises both fitted to the same professional standard.",
    image:
      "https://images.unsplash.com/photo-1722650363577-b1f6e1c191e3?q=80&w=1600&auto=format&fit=crop",
    alt: "Stock photo of an empty room with a built-in wardrobe and honey-toned timber floor, used as a placeholder image",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  beforeImage?: string;
  beforeAlt?: string;
};

// Stock photography used as placeholders until Philip supplies real project photos.
// Deliberately unstaged, empty-room shots (no styled furniture/props) so the
// gallery reads as "finished floor" documentation rather than a lifestyle
// catalogue. Each entry is a single named slot (image/alt/description) — swap
// the `image` and `alt` fields for a real project photo and this component
// needs no other changes. Source: Unsplash (royalty-free, commercial use).
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "[STOCK PHOTO — replace with real project] Parquet floor, bedroom",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1722650363568-9f250806ec58?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty bedroom with a checkerboard parquet timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Example of the timber flooring look and finish we fit.",
  },
  {
    id: "gallery-2",
    title: "[STOCK PHOTO — replace with real project] Open-plan floor with staircase",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1646592491741-e79ae5953486?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty open-plan room with an engineered wood floor and staircase, used as a placeholder for a real Philip B Flooring project",
    description: "One continuous timber floor run through an open-plan space.",
  },
  {
    id: "gallery-3",
    title: "[STOCK PHOTO — replace with real project] Laminate flooring, bedroom",
    category: "Laminate Flooring",
    image:
      "https://images.unsplash.com/photo-1722650273431-9aefddd19151?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty bedroom with light laminate flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Light laminate fitted for a bright, low-maintenance finish.",
  },
  {
    id: "gallery-4",
    title: "[STOCK PHOTO — replace with real project] Laminate flooring, bedroom with door",
    category: "Laminate Flooring",
    image:
      "https://images.unsplash.com/photo-1721901948510-e69c0eb88156?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty bedroom with light laminate flooring and a single door, used as a placeholder for a real Philip B Flooring project",
    description: "Laminate fitted tight and level, room to room.",
  },
  {
    id: "gallery-5",
    title: "[STOCK PHOTO — replace with real project] Tiled-effect flooring",
    category: "Vinyl Flooring",
    image:
      "https://images.unsplash.com/photo-1722348675233-e3af1abd4023?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a small empty room with a grey tiled-effect floor, used as a placeholder for a real Philip B Flooring vinyl project",
    description: "The kind of clean, water-resistant finish vinyl gives a busy room.",
  },
  {
    id: "gallery-6",
    title: "[STOCK PHOTO — replace with real project] Hallway floor, transition detail",
    category: "Floor Preparation",
    image:
      "https://images.unsplash.com/photo-1727872496300-57e476478a54?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty hallway with a light timber floor leading into a bright room, used as a placeholder for a real Philip B Flooring project",
    description: "Subfloors levelled and prepped before a board goes down.",
  },
  {
    id: "gallery-7",
    title: "[STOCK PHOTO — replace with real project] Entrance hall floor",
    category: "Repairs & Finishing",
    image:
      "https://images.unsplash.com/photo-1722603929404-b29f53884a35?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty entrance hallway with a honey-toned timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Worn entrance floors repaired and refinished.",
  },
  {
    id: "gallery-8",
    title: "[STOCK PHOTO — replace with real project] Bedroom floor, built-in wardrobe",
    category: "Domestic & Commercial",
    image:
      "https://images.unsplash.com/photo-1722650363577-b1f6e1c191e3?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty room with a built-in wardrobe and honey-toned timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Homes and business premises fitted to the same standard.",
  },
  {
    id: "gallery-9",
    title: "[STOCK PHOTO — replace with real project] Apartment floor, closet nook",
    category: "Domestic & Commercial",
    image:
      "https://images.unsplash.com/photo-1721901950690-90d2df5385bd?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty apartment room with a closet nook and light timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Fitted to the same finish whether it's a home or a unit.",
  },
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating?: number;
};

// No verified reviews yet. Keep this array empty (or with clearly marked
// placeholders only) until Philip supplies real Google reviews with names,
// quotes and star ratings. Never invent a testimonial.
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    name: "[PLACEHOLDER — insert real client name]",
    quote: "[PLACEHOLDER — insert real client review]",
    rating: undefined,
  },
];

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Get in touch",
    description: "Call, WhatsApp, or send the quote form.",
  },
  {
    step: 2,
    title: "Discuss your space",
    description: "Talk through the flooring, the room and what you need.",
  },
  {
    step: 3,
    title: "Get your quote",
    description: "A straight quote for the job, no pressure.",
  },
  {
    step: 4,
    title: "Floor fitted",
    description: "Fitted to a professional finish, on time.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

// Only questions answerable from the verified facts in this file. No
// invented policies on turnaround time, deposits, or guarantees.
export const faqs: Faq[] = [
  {
    question: "Do you supply the flooring, or do I need to buy it myself?",
    answer:
      "Either way works. Philip can supply the flooring as part of the job, or fit flooring you've already bought.",
  },
  {
    question: "What types of flooring do you fit?",
    answer:
      "Timber, laminate and vinyl, along with floor preparation and repairs on existing floors.",
  },
  {
    question: "What areas do you cover?",
    answer: "Dublin, Meath and Louth.",
  },
  {
    question: "Do you only do homes, or businesses too?",
    answer:
      "Both. Homes and business premises are fitted to the same professional standard.",
  },
  {
    question: "What happens after I get in touch?",
    answer:
      "Philip talks through the room and the flooring you have in mind, then gives you a straight quote. If you're happy to go ahead, the floor gets fitted.",
  },
  {
    question: "Can you fix an existing floor instead of replacing it?",
    answer:
      "Often, yes. Damaged boards, worn finishes and uneven patches can usually be repaired and refinished rather than ripped out.",
  },
];

export const trustBadges = [
  "Domestic & Commercial",
  "[CONFIRM: Fully Insured?]",
  "Dublin, Meath & Louth",
];

export const heroImage = {
  src: "https://images.unsplash.com/photo-1722650362348-ef3034f6b864?q=80&w=2400&auto=format&fit=crop",
  alt: "Stock photo of a bright, empty room with a warm parquet timber floor, used as a placeholder hero image",
};

export const whyUsImage = {
  src: "https://images.unsplash.com/photo-1646592492046-da1c3765f74a?q=80&w=1800&auto=format&fit=crop",
  alt: "Stock photo of an empty hallway with a wide-plank walnut-toned timber floor, used as a placeholder image",
};

export const whyUsPoints = [
  {
    title: "Professional workmanship",
    description: "Every floor fitted with the same care, start to finish.",
  },
  {
    title: "Reliable and friendly service",
    description: "Straight answers, turns up when he says he will.",
  },
  {
    title: "Quality finish",
    description: "The finish is the job — not an afterthought.",
  },
  {
    title: "Attention to detail",
    description: "Joins, edges and transitions done properly, not rushed.",
  },
  {
    title: "Homes and businesses",
    description: "Comfortable fitting a family home or a commercial unit.",
  },
];
