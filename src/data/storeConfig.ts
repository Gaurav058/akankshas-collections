export interface StoreConfig {
  brandName: string;
  tagline: string;
  subtagline: string;
  address: {
    shop: string;
    building: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    email: string;
  };
  openingHours: Array<{
    day: string;
    hours: string;
    isOpen: boolean;
  }>;
  announcement: {
    enabled: boolean;
    text: string;
    linkText?: string;
    linkUrl?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    googleBusiness?: string;
  };
}

export const storeConfig: StoreConfig = {
  brandName: "Akanksha's Collections",
  tagline: "Wear Your Confidence | Style That Speaks You",
  subtagline: "Women's Fashion, Ethnic Elegance & Jewellery Boutique in Hamirpur",
  address: {
    shop: "Shop No. 101",
    building: "Satya Complex",
    landmark: "Near Nadaun Chowk",
    city: "Hamirpur",
    state: "Himachal Pradesh",
    pincode: "177001",
    country: "India",
    fullAddress: "Shop No. 101, Satya Complex, Near Nadaun Chowk, Hamirpur, Himachal Pradesh – 177001"
  },
  contact: {
    phone: "+919816647320",
    phoneDisplay: "+91 9816647320",
    whatsapp: "919816647320",
    email: "akankshaguleria4@gmail.com"
  },
  openingHours: [
    { day: "Monday", hours: "10:00 AM – 7:30 PM", isOpen: true },
    { day: "Tuesday", hours: "10:00 AM – 7:30 PM", isOpen: true },
    { day: "Wednesday", hours: "10:00 AM – 7:30 PM", isOpen: true },
    { day: "Thursday", hours: "10:00 AM – 7:30 PM", isOpen: true },
    { day: "Friday", hours: "10:00 AM – 7:30 PM", isOpen: true },
    { day: "Saturday", hours: "10:00 AM – 7:30 PM", isOpen: true },
    { day: "Sunday", hours: "11:00 AM – 5:00 PM (By Appointment / Festive)", isOpen: true }
  ],
  announcement: {
    enabled: true,
    text: "Discover Festive & Wedding Wear Collections • Visit Satya Complex, Near Nadaun Chowk, Hamirpur",
    linkText: "Get Directions",
    linkUrl: "/visit-us"
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleBusiness: "https://maps.google.com/?q=Satya+Complex+Nadaun+Chowk+Hamirpur+Himachal+Pradesh"
  }
};
