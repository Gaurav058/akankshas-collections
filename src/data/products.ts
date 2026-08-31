export interface Product {
  id: string;
  name: string;
  category: 'kurtas' | 'stitched-suits' | 'unstitched-suits' | 'partywear' | 'formal-wear' | 'bridal-wear' | 'jewellery' | 'bangles';
  categoryLabel: string;
  occasion: 'everyday' | 'office' | 'festive' | 'party' | 'wedding' | 'bridal';
  occasionLabel: string;
  regionalInfluence?: 'punjabi' | 'rajasthani' | 'himachali';
  regionalLabel?: string;
  style: string;
  color: string;
  priceDisplay?: string;
  availability: 'In Stock at Store' | 'Available for Customization' | 'Limited Stock';
  fabric?: string;
  description: string;
  details: string[];
  images: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "punjabi-silk-suit-01",
    name: "Embroidered Royal Silk Punjabi Suit Set",
    category: "stitched-suits",
    categoryLabel: "Stitched Suits",
    occasion: "festive",
    occasionLabel: "Festive & Wedding",
    regionalInfluence: "punjabi",
    regionalLabel: "Punjabi Edit",
    style: "Punjabi Silhouette",
    color: "Emerald Green & Gold",
    availability: "In Stock at Store",
    fabric: "Art Silk with Zari & Gota Work",
    description: "Inspired by celebration and traditional Punjabi grace, this emerald silk suit features intricate neck zari work and a hand-detailed dupatta.",
    details: [
      "Heavy embroidered shirt with delicate sleeve cuffs",
      "Matching tailored salwar with traditional pleating",
      "Organza dupatta featuring rich border trimming",
      "Available for in-store trial at Satya Complex"
    ],
    images: [
      "/assets/punjabi-suit-collection.png",
      "/assets/akankshas-collections-interior.png"
    ],
    featured: true
  },
  {
    id: "kundan-jewellery-set-01",
    name: "Royal Heritage Kundan Choker & Earring Set",
    category: "jewellery",
    categoryLabel: "Artificial Jewellery",
    occasion: "wedding",
    occasionLabel: "Wedding Guest & Festive",
    regionalInfluence: "rajasthani",
    regionalLabel: "Rajasthani Influence",
    style: "Statement Choker",
    color: "Antique Gold & Pearl",
    availability: "In Stock at Store",
    fabric: "High-Grade Antique Plated Metal & Faux Kundan",
    description: "An elegant antique gold choker set crafted with faux Kundan stones and delicate pearl cluster drops for wedding celebrations.",
    details: [
      "Choker necklace with adjustable back cord",
      "Matching chandelier drop earrings",
      "Lightweight finish designed for comfort during long events",
      "Part of our curated jewellery counter in Hamirpur"
    ],
    images: [
      "/assets/jewellery-collection-showcase.png"
    ],
    featured: true
  },
  {
    id: "unstitched-partywear-suit-02",
    name: "Chanderi Floral Embroidered Unstitched Suit",
    category: "unstitched-suits",
    categoryLabel: "Unstitched Suits",
    occasion: "party",
    occasionLabel: "Party & Festive",
    regionalInfluence: "rajasthani",
    regionalLabel: "Rajasthani Edit",
    style: "Straight Cut Unstitched Fabric",
    color: "Warm Beige & Antique Metallic",
    availability: "In Stock at Store",
    fabric: "Fine Chanderi Cotton Silk",
    description: "Premium unstitched fabric ensemble featuring subtle neckline thread embroidery and a contrast woven dupatta for custom tailoring.",
    details: [
      "Top fabric: 2.5 Meters embroidered Chanderi silk",
      "Bottom fabric: 2.5 Meters soft Shantoon",
      "Dupatta: 2.25 Meters woven Jacquard dupatta",
      "Custom stitching advice available at our store"
    ],
    images: [
      "/assets/akankshas-collections-interior.png",
      "/assets/punjabi-suit-collection.png"
    ],
    featured: true
  },
  {
    id: "himachali-inspired-jacket-suit-03",
    name: "Himachali Motif Tailored Coat Suit Set",
    category: "formal-wear",
    categoryLabel: "Formal Wear",
    occasion: "office",
    occasionLabel: "Office & Ceremonial Formal",
    regionalInfluence: "himachali",
    regionalLabel: "Himachali Edit",
    style: "Modern Indo-Western Formal",
    color: "Deep Charcoal & Cream",
    availability: "In Stock at Store",
    fabric: "Premium Wool Blend & Cotton Silk",
    description: "A refined formal ensemble combining crisp tailored trousers with a gracefully structured woven motif jacket inspired by Himachali textile art.",
    details: [
      "Structured jacket collar with subtle border weaving",
      "Comfortable straight-leg formal trousers",
      "Ideal for formal gatherings, office functions, and cultural events",
      "Designed for effortless poise and warmth"
    ],
    images: [
      "/assets/akankshas-collections-interior.png"
    ],
    featured: true
  },
  {
    id: "everyday-cotton-kurta-04",
    name: "Minimalist Pastel Straight Cotton Kurti",
    category: "kurtas",
    categoryLabel: "Kurtas & Kurtis",
    occasion: "everyday",
    occasionLabel: "Everyday Elegance",
    style: "Straight Fit Kurti",
    color: "Dusty Rose & Gold Accent",
    availability: "In Stock at Store",
    fabric: "100% Breathable Slub Cotton",
    description: "An effortless daily wear kurta featuring clean line stitch detail, soft mandarin collar, and lightweight fabric ideal for Hamirpur summers.",
    details: [
      "Mandarin collar with subtle gold button placket",
      "3/4th sleeves with fold-up cuff design",
      "Easy wash and maintain cotton fabric",
      "Multiple sizes available in store"
    ],
    images: [
      "/assets/akankshas-collections-interior.png"
    ],
    featured: false
  },
  {
    id: "bridal-velvet-dupatta-suit-05",
    name: "Crimson Royal Bridal Suit with Velvet Dupatta",
    category: "bridal-wear",
    categoryLabel: "Bridal Wear",
    occasion: "bridal",
    occasionLabel: "Bridal Edit",
    regionalInfluence: "punjabi",
    regionalLabel: "Punjabi Bridal Grace",
    style: "Heavy Anarkali Suit",
    color: "Crimson Red & Antique Gold",
    availability: "Available for Customization",
    fabric: "Pure Silk & Micro Velvet",
    description: "A grand bridal suit ensemble with deep crimson silk flair, zardozi chest detailing, and a plush heavy velvet dupatta.",
    details: [
      "Intricate hand-embroidery on sleeve and neckline",
      "Scalloped border velvet dupatta with golden tassel corners",
      "Ideal for Anand Karaj, Roka, and Sangeet ceremonies",
      "Visit Satya Complex store for personal bridal consultation"
    ],
    images: [
      "/assets/punjabi-suit-collection.png",
      "/assets/jewellery-collection-showcase.png"
    ],
    featured: true
  },
  {
    id: "maroon-velvet-bangles-set-06",
    name: "Traditional Maroon Velvet & Metal Bangle Stack",
    category: "bangles",
    categoryLabel: "Bangles & Accessories",
    occasion: "festive",
    occasionLabel: "Festive & Wedding",
    regionalInfluence: "rajasthani",
    regionalLabel: "Rajasthani Craft",
    style: "Bangle Set",
    color: "Deep Maroon & Antique Brass",
    availability: "In Stock at Store",
    fabric: "Velvet Coating & Metal Base",
    description: "A classic stack of soft velvet bangles accented with glittering metallic kada pairs, ideal for festive celebrations and wedding wear.",
    details: [
      "Includes 24 velvet bangles + 4 decorative kadas",
      "Available in standard wrist sizes (2.4, 2.6, 2.8)",
      "Protective smooth interior rim",
      "Complements ethnic suit and sari outfits"
    ],
    images: [
      "/assets/jewellery-collection-showcase.png"
    ],
    featured: false
  },
  {
    id: "partywear-georgette-sharara-07",
    name: "Sequin Embroidered Georgette Sharara Suit",
    category: "partywear",
    categoryLabel: "Partywear",
    occasion: "party",
    occasionLabel: "Party Nights & Receptions",
    regionalInfluence: "punjabi",
    regionalLabel: "Punjabi Festive",
    style: "Sharara Suit",
    color: "Midnight Blue & Silver Zari",
    availability: "In Stock at Store",
    fabric: "Faux Georgette with Micro Sequins",
    description: "A glamorous evening Sharara ensemble with shimmering sequin spray, flared layered bottom, and a matching sheer dupatta.",
    details: [
      "Short kurti top with dense neckline work",
      "Multi-tiered flared sharara with elastic waistband",
      "Soft net dupatta with sequin border",
      "Lightweight movement for evening dance events"
    ],
    images: [
      "/assets/punjabi-suit-collection.png"
    ],
    featured: true
  }
];

export const productCategories = [
  { id: "kurtas", name: "Kurtas & Kurtis", count: "12+ Styles", desc: "Daily comfort & contemporary silhouettes" },
  { id: "stitched-suits", name: "Stitched Suits", count: "20+ Ready Fits", desc: "Punjabi, straight cut, and sharara ready suits" },
  { id: "unstitched-suits", name: "Unstitched Suits", count: "30+ Fabrics", desc: "Premium suit dress material for custom tailoring" },
  { id: "partywear", name: "Partywear", count: "15+ Festive Designs", desc: "Sequin, georgette, and evening wear suits" },
  { id: "formal-wear", name: "Formal & Office Wear", count: "10+ Elegant Fits", desc: "Sophisticated workwear kurtis & jacket suits" },
  { id: "bridal-wear", name: "Bridal Wear", count: "Curated Collection", desc: "Bridal suits, heavy dupattas & ceremony edits" },
  { id: "jewellery", name: "Artificial Jewellery", count: "50+ Pieces", desc: "Kundan, antique gold, choker sets & earrings" },
  { id: "bangles", name: "Bangles", count: "25+ Colors & Stacks", desc: "Velvet bangles, metallic kadas & bridal choora" }
];
