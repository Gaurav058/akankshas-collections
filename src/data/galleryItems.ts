export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'ethnic-wear' | 'jewellery' | 'bridal' | 'partywear' | 'formal-wear' | 'accessories';
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-01",
    title: "Storefront & Exterior Branding",
    category: "store",
    categoryLabel: "Boutique Store",
    image: "/assets/akankshas-collections-storefront.png",
    description: "The main gold serif signboard identity of Akanksha's Collections at Satya Complex, Hamirpur.",
    tags: ["Storefront", "Branding", "Hamirpur Boutique"]
  },
  {
    id: "g-02",
    title: "Boutique Interior & Collection Racks",
    category: "store",
    categoryLabel: "Boutique Store",
    image: "/assets/akankshas-collections-interior.png",
    description: "Luxurious warm interior atmosphere featuring neat displays of ethnic suits, kurtas, and jewellery counter.",
    tags: ["Store Interior", "Shopping Experience", "Satya Complex"]
  },
  {
    id: "g-03",
    title: "Royal Kundan Choker & Earring Collection",
    category: "jewellery",
    categoryLabel: "Artificial Jewellery",
    image: "/assets/jewellery-collection-showcase.png",
    description: "Antique gold finished Kundan choker with pearl clusters and matching drop earrings.",
    tags: ["Kundan Set", "Bridal Accessories", "Necklaces"]
  },
  {
    id: "g-04",
    title: "Embroidered Punjabi Silk Suit Ensemble",
    category: "ethnic-wear",
    categoryLabel: "Ethnic Wear",
    image: "/assets/punjabi-suit-collection.png",
    description: "Rich emerald silk Punjabi suit with intricate neck zari embroidery and graceful dupatta.",
    tags: ["Punjabi Suit", "Festive Wear", "Zari Embroidery"]
  },
  {
    id: "g-05",
    title: "Curated Dress Material & Fabrics",
    category: "formal-wear",
    categoryLabel: "Formal & Custom",
    image: "/assets/akankshas-collections-interior.png",
    description: "Premium unstitched Chanderi and cotton-silk suit materials available for custom tailoring.",
    tags: ["Unstitched Fabrics", "Tailoring", "Formal Wear"]
  },
  {
    id: "g-06",
    title: "Bridal Ceremony Suit & Velvet Accessories",
    category: "bridal",
    categoryLabel: "Bridal Edit",
    image: "/assets/punjabi-suit-collection.png",
    description: "Crimson royal bridal suit with velvet dupatta, designed for Anand Karaj and wedding functions.",
    tags: ["Bridal Suit", "Wedding Guest", "Velvet Dupatta"]
  }
];
