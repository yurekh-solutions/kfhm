export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}
import bathroom from "@/assets/img/service/quick_home_cleaning.png";

export const services: Service[] = [
  {
    id: "1",
    name: "Home Deep Cleaning",
    category: "Residential",
    description: "Empty Flat - 2 Personnel (4 hrs)",
    price: 5000,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
  },
  {
    id: "2",
    name: "Home Deep Cleaning",
    category: "Residential",
    description: "Furnished Flat - Complete cleaning",
    price: 5500,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    name: "Office Deep Cleaning",
    category: "Commercial",
    description: "Professional office cleaning",
    price: 3500,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
  },
 {
  id: "4",
  name: "General Disinfection",
  category: "Disinfection",
  description: "Complete sanitization service",
  price: 708,
  image: bathroom

},

  {
    id: "5",
    name: "Termite Control",
    category: "Pest Control",
    description: "Professional termite treatment",
    price: 826,
    // ✔ Correct termite control image
    image: "https://images.unsplash.com/photo-1612960891902-b525d250aa89?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    name: "Rodent (Rat) Control",
    category: "Pest Control",
    description: "Effective rat control solution",
    price: 708,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&h=300&fit=crop"
  },
  {
    id: "7",
    name: "Bed Bugs Treatment",
    category: "Pest Control",
    description: "Complete bed bug elimination",
    price: 708,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"
  },
  {
    id: "8",
    name: "Carpet Cleaning",
    category: "Specialized",
    description: "Deep carpet cleaning service",
    price: 700,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: "9",
    name: "Chair Cleaning",
    category: "Specialized",
    description: "Per chair cleaning",
    price: 150,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
  },
  {
    id: "10",
    name: "Kitchen Cleaning",
    category: "Specialized",
    description: "Complete kitchen deep clean",
    price: 3000,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
  },
  {
    id: "11",
    name: "Mattress Cleaning",
    category: "Specialized",
    description: "Sanitized mattress cleaning",
    price: 850,
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400&h=300&fit=crop"
  },
  {
    id: "12",
    name: "Sofa Cleaning",
    category: "Specialized",
    description: "Per seat sofa cleaning",
    price: 350,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop"
  },
  {
    id: "13",
    name: "Bathroom Cleaning",
    category: "Specialized",
    description: "Deep bathroom sanitization",
    price: 1250,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop"
  },
  {
    id: "14",
    name: "Window Cleaning",
    category: "Specialized",
    description: "Crystal clear window service",
    price: 1000,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop"
  },
  {
    id: "15",
    name: "Sanitization",
    category: "Disinfection",
    description: "Complete area sanitization",
    price: 1200,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop"
  }
];


export const WHATSAPP_NUMBER = "919136242706";

export const createWhatsAppLink = (service: Service) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in booking ${service.name} service (₹${service.price}). Please provide more details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const createInquiryWhatsAppLink = (name: string, phone: string, email: string, message: string) => {
  const text = encodeURIComponent(
    `New Inquiry from Website:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
