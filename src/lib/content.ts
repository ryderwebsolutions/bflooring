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

// Most services now link to a real Philip B Flooring job photo, organised in
// /public/images/gallery. Timber and Floor Preparation still use a stock
// Unsplash placeholder (clearly noted below) because no real photo of that
// work exists yet — swap `image`/`alt` for a real project photo once Philip
// supplies one.
export const services: Service[] = [
  {
    id: "supply-fitting",
    title: "Flooring Supply & Fitting",
    description:
      "Supply and fitting handled as one job, so what you're quoted is what gets fitted.",
    image: "/images/gallery/laminate-living-room-garden.jpg",
    alt: "Bright open-plan room with laminate flooring fitted by Philip B Flooring, garden visible through patio doors",
  },
  {
    id: "timber",
    title: "Timber Flooring",
    description:
      "Solid and engineered timber floors fitted with an eye for grain, joins and finish.",
    image:
      "https://images.unsplash.com/photo-1722650363568-9f250806ec58?q=80&w=1600&auto=format&fit=crop",
    alt: "[STOCK PHOTO — replace with real project] Empty bedroom with a checkerboard parquet timber floor, used as a placeholder image",
  },
  {
    id: "laminate",
    title: "Laminate Flooring",
    description:
      "Durable, low-maintenance laminate fitted tight and level, room to room.",
    image: "/images/gallery/laminate-herringbone-hallway.jpg",
    alt: "Herringbone-pattern laminate flooring fitted through a hallway by Philip B Flooring",
  },
  {
    id: "carpet",
    title: "Carpet Flooring",
    description:
      "Carpet fitted and bordered clean on stairs, landings and bedrooms.",
    image: "/images/gallery/carpet-curved-staircase-herringbone.jpg",
    alt: "Herringbone-weave carpet with black border trim fitted on a curved staircase by Philip B Flooring",
  },
  {
    id: "vinyl",
    title: "Vinyl Flooring",
    description:
      "Water-resistant vinyl fitted for kitchens, bathrooms and busy family rooms.",
    image: "/images/gallery/vinyl-commercial-walkway.jpg",
    alt: "Wood-effect commercial vinyl flooring fitted by Philip B Flooring",
  },
  {
    id: "prep",
    title: "Floor Preparation",
    description:
      "Subfloors levelled and prepped before a single board goes down.",
    image:
      "https://images.unsplash.com/photo-1727872496300-57e476478a54?q=80&w=1600&auto=format&fit=crop",
    alt: "[STOCK PHOTO — replace with real project] Empty hallway leading into a bright room with a timber floor, used as a placeholder image",
  },
  {
    id: "repairs",
    title: "Repairs & Finishing",
    description:
      "Damaged boards, worn finishes and uneven patches repaired and refinished.",
    image:
      "https://images.unsplash.com/photo-1722603929404-b29f53884a35?q=80&w=1600&auto=format&fit=crop",
    alt: "[STOCK PHOTO — replace with real project] Empty entrance hallway with a honey-toned timber floor, used as a placeholder image",
  },
  {
    id: "commercial",
    title: "Domestic & Commercial Flooring",
    description:
      "Shops, offices and homes fitted to the same standard, no shortcuts.",
    image: "/images/gallery/vinyl-commercial-counter.jpg",
    alt: "Commercial vinyl flooring fitted in a betting shop reception by Philip B Flooring",
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

// Real Philip B Flooring job photos, organised in /public/images/gallery.
// Timber Flooring and Floor Preparation still carry a single stock Unsplash
// placeholder each (clearly flagged in the title/alt) because no real photo
// of that work exists yet — replace with a real project photo as soon as one
// is available, no other changes needed.
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-carpet-1",
    title: "Herringbone carpet, curved staircase",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-curved-staircase-herringbone.jpg",
    alt: "Herringbone-weave carpet with black border trim fitted on a curved staircase",
    description: "Carpet cut and bordered clean around a curved staircase.",
  },
  {
    id: "gallery-laminate-1",
    title: "Herringbone laminate, hallway",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-herringbone-hallway.jpg",
    alt: "Herringbone-pattern laminate flooring fitted through a hallway",
    description: "A herringbone lay fitted through a hallway, door to door.",
  },
  {
    id: "gallery-vinyl-1",
    title: "Commercial vinyl walkway, betting shop",
    category: "Vinyl Flooring",
    image: "/images/gallery/vinyl-commercial-walkway.jpg",
    alt: "Wood-effect commercial vinyl flooring fitted as a walkway in a betting shop",
    description: "A commercial vinyl walkway fitted for a busy betting shop floor.",
  },
  {
    id: "gallery-carpet-2",
    title: "Carpet runner, black border trim",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-black-border-runner.jpg",
    alt: "Grey carpet runner with black border trim fitted on a staircase",
    description: "A neat runner fit with contrast border trim.",
  },
  {
    id: "gallery-laminate-2",
    title: "Herringbone laminate, room with patio doors",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-herringbone-room-patio.jpg",
    alt: "Herringbone-pattern laminate flooring fitted in a bright room with patio doors",
    description: "Herringbone laminate fitted in a bright, naturally lit room.",
  },
  {
    id: "gallery-vinyl-2",
    title: "Commercial vinyl flooring, betting shop reception",
    category: "Vinyl Flooring",
    image: "/images/gallery/vinyl-commercial-counter.jpg",
    alt: "Wood-effect commercial vinyl flooring fitted at a betting shop reception counter",
    description: "Durable vinyl fitted for a commercial reception area.",
  },
  {
    id: "gallery-carpet-3",
    title: "Carpet stairs and landing",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-charcoal-staircase.jpg",
    alt: "Carpet fitted on a staircase and landing",
    description: "Carpet fitted through a staircase and landing in one run.",
  },
  {
    id: "gallery-laminate-3",
    title: "Light oak laminate, bedroom",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-bright-empty-room.jpg",
    alt: "Light oak laminate flooring fitted in a bedroom",
    description: "Light laminate fitted for a bright, low-maintenance finish.",
  },
  {
    id: "gallery-carpet-4",
    title: "Chevron-pattern carpet, staircase",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-chevron-staircase-straight.jpg",
    alt: "Black and cream chevron-pattern carpet fitted on a straight staircase",
    description: "A bold chevron-pattern carpet fitted stair to stair.",
  },
  {
    id: "gallery-laminate-4",
    title: "Laminate flooring, open-plan room",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-living-room-garden.jpg",
    alt: "Laminate flooring fitted in a bright open-plan room with a garden view",
    description: "Laminate fitted through an open-plan family room.",
  },
  {
    id: "gallery-carpet-5",
    title: "Cream carpet, staircase and landing",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-cream-staircase.jpg",
    alt: "Cream carpet fitted on a staircase and landing with a wood handrail",
    description: "A clean, light carpet fit for a staircase and landing.",
  },
  {
    id: "gallery-laminate-5",
    title: "Laminate flooring, connecting rooms",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-connecting-rooms.jpg",
    alt: "Laminate flooring fitted through two connecting rooms",
    description: "Laminate fitted tight and level, room to room.",
  },
  {
    id: "gallery-carpet-6",
    title: "Cream carpet stairs",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-cream-staircase-run.jpg",
    alt: "Cream carpet fitted on a straight run of stairs",
    description: "Cream carpet fitted tight and even, step to step.",
  },
  {
    id: "gallery-carpet-7",
    title: "Tan carpet, curved staircase",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-curved-staircase-tan.jpg",
    alt: "Tan carpet with black border trim fitted on a curved staircase",
    description: "A curved staircase carpeted with a crisp border trim.",
  },
  {
    id: "gallery-carpet-8",
    title: "Herringbone-weave carpet runner",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-herringbone-runner-tan.jpg",
    alt: "Tan herringbone-weave carpet runner with brown border trim fitted on a staircase",
    description: "A herringbone-weave runner fitted with matching border trim.",
  },
  {
    id: "gallery-carpet-9",
    title: "Carpet staircase, oak handrail",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-oak-handrail-staircase.jpg",
    alt: "Dark grey carpet fitted on a staircase with a varnished oak handrail and white balusters",
    description: "A dark grey carpet fit finished with a varnished oak handrail.",
  },
  {
    id: "gallery-carpet-10",
    title: "Herringbone-weave carpet, hallway to stairs",
    category: "Carpet Flooring",
    image: "/images/gallery/carpet-herringbone-weave-staircase.jpg",
    alt: "Black and cream herringbone-weave carpet fitted through a hallway and down a staircase",
    description: "A herringbone-weave carpet fitted continuously from hallway to stairs.",
  },
  {
    id: "gallery-laminate-6",
    title: "Pale oak laminate, patio room",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-pale-oak-patio-view.jpg",
    alt: "Pale oak-effect laminate flooring fitted in a bright room with patio doors",
    description: "A light, washed-oak laminate fitted for a bright finish.",
  },
  {
    id: "gallery-laminate-7",
    title: "Laminate hallway and staircase",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-hallway-staircase-warm.jpg",
    alt: "Warm-toned laminate flooring fitted through a hallway with a carpeted staircase leading off it",
    description: "Laminate fitted through the hallway, flowing into the staircase carpet.",
  },
  {
    id: "gallery-laminate-8",
    title: "Herringbone laminate, kitchen",
    category: "Laminate Flooring",
    image: "/images/gallery/laminate-herringbone-navy-kitchen.jpg",
    alt: "Herringbone-pattern laminate flooring fitted in a kitchen with navy cabinetry",
    description: "Herringbone laminate fitted around a fitted kitchen.",
  },
  {
    id: "gallery-vinyl-3",
    title: "Commercial vinyl flooring, betting shop floor",
    category: "Vinyl Flooring",
    image: "/images/gallery/vinyl-commercial-betting-shop-floor.jpg",
    alt: "Wood-effect commercial vinyl flooring fitted across a betting shop customer area",
    description: "Commercial vinyl fitted across a busy customer floor area.",
  },
  {
    id: "gallery-timber-1",
    title: "[STOCK PHOTO — replace with real project] Parquet floor, bedroom",
    category: "Timber Flooring",
    image:
      "https://images.unsplash.com/photo-1722650363568-9f250806ec58?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty bedroom with a checkerboard parquet timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Example of the timber flooring look and finish we fit.",
  },
  {
    id: "gallery-prep-1",
    title: "[STOCK PHOTO — replace with real project] Hallway floor, transition detail",
    category: "Floor Preparation",
    image:
      "https://images.unsplash.com/photo-1727872496300-57e476478a54?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty hallway with a light timber floor leading into a bright room, used as a placeholder for a real Philip B Flooring project",
    description: "Subfloors levelled and prepped before a board goes down.",
  },
  {
    id: "gallery-repairs-1",
    title: "[STOCK PHOTO — replace with real project] Entrance hall floor",
    category: "Repairs & Finishing",
    image:
      "https://images.unsplash.com/photo-1722603929404-b29f53884a35?q=80&w=1800&auto=format&fit=crop",
    alt: "Stock photo of an empty entrance hallway with a honey-toned timber floor, used as a placeholder for a real Philip B Flooring project",
    description: "Worn entrance floors repaired and refinished.",
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
    description: "Call, WhatsApp, or email Philip directly.",
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
    answer: "Both. The standard doesn't change between a house and a business.",
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
  "25 Years' Experience",
  "Domestic & Commercial",
  "Fully Insured",
  "Dublin, Meath & Louth",
];

export const heroImage = {
  src: "/images/hero-hallway.jpg",
  alt: "Hallway and staircase fitted with wood-effect laminate flooring by Philip B Flooring",
};

export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  cta: string;
  href: string;
};

// Hero carousel slides. Each image is a real Philip B Flooring job photo at
// the same 3:4 aspect as heroImage, so none of them need to be cropped by
// the carousel's fixed aspect-ratio frame — pick replacements with the same
// 1536x2048 dimensions to keep it that way.
export const heroSlides: HeroSlide[] = [
  {
    id: "services",
    image: heroImage.src,
    alt: heroImage.alt,
    cta: "Explore our flooring services",
    href: "/#services",
  },
  {
    id: "gallery",
    image: "/images/gallery/carpet-chevron-staircase-straight.jpg",
    alt: "Black and cream chevron-pattern carpet fitted on a straight staircase",
    cta: "See more of our finished work",
    href: "/#gallery",
  },
  {
    id: "contact",
    image: "/images/gallery/laminate-living-room-garden.jpg",
    alt: "Laminate flooring fitted in a bright open-plan room with a garden view",
    cta: "Get in touch for a free quote",
    href: "/#contact",
  },
  {
    id: "faq",
    image: "/images/gallery/laminate-pale-oak-patio-view.jpg",
    alt: "Pale oak-effect laminate flooring fitted in a bright room with patio doors",
    cta: "Got questions? Check our FAQ",
    href: "/#faq",
  },
];

export const whyUsImage = {
  src: "/van.jpg",
  alt: "Philip B Flooring's branded work van, showing the phone number, email and service area",
};

export const whyUsPoints = [
  {
    title: "Careful workmanship",
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
    description: "Joins, edges and transitions done right, not rushed.",
  },
  {
    title: "Homes and businesses",
    description: "Comfortable fitting a family home or a commercial unit.",
  },
];
