import { ArrowRight, Phone, Droplets, Sparkles, Wind, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import slide1 from "@/assets/img/signin-image.png";
import slide2 from "@/assets/img/slider/banner3.jpg";
import slide3 from "@/assets/img/service/special_cleaning.png";
import slide4 from "@/assets/img/service/mattress_cleaning.png";
import slide5 from "@/assets/img/service/home_deep_cleaning.png";
import slide6 from "@/assets/img/service/window_cleaning.png";
const heroSlides = [
  {
    image: slide1,
    title: "Professional House Cleaning",
    description: "Sparkling Clean Homes",
  },
  {
    image: slide2,
    title: "Office & Workplace Cleaning",
    description: "Commercial Excellence",
  },
  {
    image: slide3,
    title: "Deep Sanitization Services",
    description: "Complete Disinfection",
  },
  {
    image: slide4,
    title: "Eco-Friendly Green Cleaning",
    description: "Sustainable Solutions",
  },
  {
    image: slide5,
    title: "Window & Exterior Cleaning",
    description: "Crystal Clear Shine",
  },
  {
    image: slide6,
    title: "Carpet & Upholstery Care",
    description: "Fresh & Clean Fabrics",
  },
];

const animationStyle = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = animationStyle;
    if (!document.head.querySelector('style[data-hero-animation]')) {
      style.setAttribute('data-hero-animation', 'true');
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-48 overflow-visible bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Dynamic Background - Changes with carousel */}
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Banner Image Section */}
     

      {/* Content Container */}
      <div className="container max-w-7xl mx-auto relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md text-red-300 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-red-500/30">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
            Professional Cleaning Excellence
          </div>
          
          <h1 className="text-5xl md:text-5xl font-black text-white mt-4 font-black leading-tight text-white mb-6">
            {/* <span className="block">Cleaning Services</span> */}
            {/* <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Perfected</span> */}
             Cleaning Services<span className="bg-gradient-to-r from-orange-600 to-red-800 bg-clip-text text-transparent"> Perfected</span> 
          </h1>
          
          <p className="text-xl md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Transform your space with professional cleaning services backed by 35+ years of expertise.
          </p>
        </div>

        {/* Glass Morphism Cards Grid */}
     

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-[#dc2626] hover:bg-red-700 text-white font-bold px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full" asChild>
            <Link to="/services" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-md font-bold px-12 py-6 text-lg transition-all duration-300 rounded-full" asChild>
            <a href="tel:+919987574333" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3 backdrop-blur-md bg-black/30 px-6 py-3 rounded-full border border-white/20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "bg-red-600 w-10 h-3 rounded-full"
                : "bg-white/40 hover:bg-white/60 w-3 h-3 rounded-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
