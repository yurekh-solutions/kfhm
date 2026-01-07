import { ArrowRight, Phone } from "lucide-react";
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
  { image: slide1, title: "Professional House Cleaning" },
  { image: slide2, title: "Office & Workplace Cleaning" },
  { image: slide3, title: "Deep Sanitization Services" },
  { image: slide4, title: "Eco-Friendly Green Cleaning" },
  { image: slide5, title: "Window & Exterior Cleaning" },
  { image: slide6, title: "Carpet & Upholstery Care" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden
      h-[70vh] sm:h-[75vh] lg:h-[85vh]
      pt-12 sm:pt-16 pb-16 sm:pb-20
      bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/75 to-black/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-md
            text-red-300 px-4 py-2 rounded-full text-xs sm:text-sm
            font-semibold mb-3 sm:mb-5 border border-red-500/30">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Professional Cleaning Excellence
          </div>

          {/* Heading */}
          <h1 className="text-white leading-tight mb-3 sm:mb-5">
            Cleaning Services
            <span className="bg-gradient-to-r from-orange-600 to-red-800 bg-clip-text text-transparent">
              {" "}Perfected
            </span>
          </h1>

          {/* Text */}
          <p className="text-base sm:text-lg text-white/90
            mb-6 sm:mb-8 leading-relaxed font-normal">
            Transform your space with professional cleaning services backed by 35+ years of expertise.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              className="bg-[#dc2626] hover:bg-red-700 text-white font-semibold
              px-8 py-4 rounded-full w-full sm:w-auto text-base"
              asChild
            >
              <Link to="/services" className="flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              className="border-2 border-white text-white bg-white/10
              hover:bg-white/20 backdrop-blur-md font-semibold
              px-8 py-4 rounded-full w-full sm:w-auto text-base"
              asChild
            >
              <a href="tel:+919987574333" className="flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2
        z-20 flex gap-2 bg-black/40 backdrop-blur-md
        px-4 py-2 rounded-full border border-white/20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "bg-red-600 w-8 h-3 rounded-full"
                : "bg-white/40 w-3 h-3 rounded-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
