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
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "supply" | "timber" | "laminate" | "vinyl" | "prep" | "repair" | "building";
};

export const services: Service[] = [
  {
    id: "supply-fitting",
    title: "Flooring Supply & Fitting",
    description:
      "Supply and fitting handled as one job, so what you're quoted is what gets fitted.",
    icon: "supply",
  },
  {
    id: "timber",
    title: "Timber Flooring",
    description:
      "Solid and engineered timber floors fitted with an eye for grain, joins and finish.",
    icon: "timber",
  },
  {
    id: "laminate",
    title: "Laminate Flooring",
    description:
      "Durable, low-maintenance laminate fitted tight and level, room to room.",
    icon: "laminate",
  },
  {
    id: "vinyl",
    title: "Vinyl Flooring",
    description:
      "Water-resistant vinyl fitted for kitchens, bathrooms and busy family rooms.",
    icon: "vinyl",
  },
  {
    id: "prep",
    title: "Floor Preparation",
    description:
      "Subfloors levelled and prepped properly before a single board goes down.",
    icon: "prep",
  },
  {
    id: "repairs",
    title: "Repairs & Finishing",
    description:
      "Damaged boards, worn finishes and uneven patches repaired and refinished.",
    icon: "repair",
  },
  {
    id: "commercial",
    title: "Domestic & Commercial Flooring",
    description:
      "Homes and business premises both fitted to the same professional standard.",
    icon: "building",
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

// Stock interior photography used as placeholders until Philip supplies real project photos.
// Each entry is a single named slot (image/alt/description) — swap the `image` and `alt`
// fields for a real project photo and this component needs no other changes.
// Source: Unsplash (royalty-free, licensed for commercial use).
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "[STOCK PHOTO — replace with real project] Living room timber floor",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a bright living room with wide-plank timber flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Example of the timber flooring look and finish we fit.",
  },
  {
    id: "gallery-2",
    title: "[STOCK PHOTO — replace with real project] Herringbone timber floor",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a living room with a herringbone pattern timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Herringbone-style timber laid room to room.",
  },
  {
    id: "gallery-3",
    title: "[STOCK PHOTO — replace with real project] Laminate flooring, bright interior",
    category: "Laminate Flooring",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a bright room with light laminate flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Light laminate fitted for a bright, low-maintenance finish.",
  },
  {
    id: "gallery-4",
    title: "[STOCK PHOTO — replace with real project] Vinyl flooring, bathroom",
    category: "Vinyl Flooring",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a bathroom with water-resistant vinyl flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Water-resistant vinyl fitted for a busy family bathroom.",
  },
  {
    id: "gallery-5",
    title: "[STOCK PHOTO — replace with real project] Commercial floor, office space",
    category: "Domestic & Commercial",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a commercial office space with patterned flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Commercial premises fitted to the same standard as a home.",
  },
  {
    id: "gallery-6",
    title: "[STOCK PHOTO — replace with real project] Floor preparation & refinishing",
    category: "Repairs & Finishing",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a light oak floor in a living space, used as a placeholder for a real Philip B Flooring project",
    description: "Existing floors levelled, repaired and refinished.",
  },
  {
    id: "gallery-7",
    title: "[STOCK PHOTO — replace with real project] Timber floor, bedroom",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of a bedroom with light timber flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Timber flooring fitted through a bedroom.",
  },
  {
    id: "gallery-8",
    title: "[STOCK PHOTO — replace with real project] Open-plan kitchen & living floor",
    category: "Domestic & Commercial",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an open-plan kitchen and living area with timber flooring, used as a placeholder for a real Philip B Flooring project",
    description: "One continuous floor run through an open-plan space.",
  },
  {
    id: "gallery-9",
    title: "[STOCK PHOTO — replace with real project] Apartment timber floor",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1449247613801-ab06418e2861?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an apartment living space with timber flooring, used as a placeholder for a real Philip B Flooring project",
    description: "Timber flooring fitted in an apartment living space.",
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

export const trustBadges = [
  "Domestic & Commercial",
  "[CONFIRM: Fully Insured?]",
  "Dublin, Meath & Louth",
];

export const heroImage = {
  src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop",
  alt: "Stock photo of a bright, high-ceilinged living room with warm wide-plank timber flooring, used as a placeholder hero image",
};

export const whyUsImage = {
  src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1800&auto=format&fit=crop",
  alt: "Stock photo of a bright living room with timber flooring and houseplants, used as a placeholder image",
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
