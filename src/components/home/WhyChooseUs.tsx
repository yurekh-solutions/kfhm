import { Shield, Users, Leaf, Clock, Award, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import bathroom from "@/assets/img/service/quick_home_cleaning.png";
import clean1 from "@/assets/img/blog/blog-2.jpg"
import clean2 from "@/assets/img/blog/blog-4.jpg";
import clean3 from "@/assets/img/blog/blog-1.jpg";
import clean4 from "@/assets/img/blog/blog-3.jpg";
import chooseImage from "@/assets/img/choose-1.jpg";

const features = [
  { 
    icon: Shield, 
    title: "ISO Certified", 
    description: "ISO 9001:2008, ISO 14001:2004 & OHSAS 18001:2007 certified organization"
  },
  { 
    icon: Users, 
    title: "Trained Professionals", 
    description: "Experienced and trained cleaning staff with proper equipment"
  },
  { 
    icon: Leaf, 
    title: "Eco-Friendly Products", 
    description: "Safe and environmentally friendly cleaning solutions"
  },
  { 
    icon: Clock, 
    title: "24/7 Support", 
    description: "Round-the-clock customer support and emergency services"
  },
];

export function WhyChooseUs() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative px-4 md:px-6">
        {/* Streamlined Features Section - No Cards */}
       

        {/* Reason Why You Choose Us Section - Fully Responsive */}
  <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-16">
  {/* LEFT RED BOX */}
  <div className="bg-[#e61e44] p-6 md:p-10 text-white rounded-l-2xl md:rounded-l-3xl rounded-r-none flex flex-col justify-center">

    {/* Tag */}
   <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-4 w-[200px] text-center">
  <span className="text-white font-semibold text-sm">Our Choose</span>
</div>


    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      Reason Why You <span className="text-yellow-300">Choose Us</span>
    </h2>

    {/* ITEMS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {[
        "Experienced Staff",
        "Natural Products",
        "Fast Services",
        "Best Equipment",
      ].map((title, idx) => (
        <div key={idx} className="flex items-center gap-3">
          
          {/* Yellow Icon Box */}
          <div className="bg-yellow-400 p-1.5 rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Text */}
          <h4 className="font-medium text-lg">{title}</h4>
        </div>
      ))}

    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="rounded-r-2xl md:rounded-r-3xl rounded-l-none overflow-hidden">
    <img
      src={chooseImage}
      alt="Cleaning Products"
      className="w-full h-full object-cover"
      style={{ height: "300px" }}
    />
  </div>
</div>


 <div className="mb-12 md:mb-20 animate-fade-in">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12">
            {/* Left: Text Content - Responsive */}
            <div className="flex-1 space-y-6 md:space-y-8 flex flex-col">
              <div>
                <div className="inline-block mb-4">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-1">
                    <div className="bg-white/95 rounded-full px-6 py-2 shadow-xl">
                      <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Why Choose Us</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-2 md:mt-4 leading-tight">
                  Proven Excellence in <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Cleaning Services</span>
                </h2>
              </div>
              
              {/* Features List - Responsive */}
              <div className="space-y-5 md:space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-3 md:gap-4 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-orange-200 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <feature.icon className="w-6 md:w-7 h-6 md:h-7 text-red-600 group-hover:text-orange-700" />
                      </div>
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1 pt-1 md:pt-2 group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="font-black text-base md:text-lg text-gray-900 group-hover:text-red-700 transition-colors">{feature.title}</h3>
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed mt-0.5 md:mt-1 group-hover:text-gray-900 transition-colors">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: 2x2 Image Grid - Fully Responsive */}
            <div className="flex-1 flex items-stretch w-full">
              <div className="w-full grid grid-cols-2 gap-2 md:gap-4 auto-rows-max">
  {[
    {
      url: clean1,
      alt: "Professional cleaning service"
    },
    {
      url: clean2,
      alt: "Cleaning supplies and products"
    },
    {
      url: clean3,
      alt: "Office cleaning services"
    },
    {
      url: clean4,
      alt: "Cleaning team professional"
    }
  ].map((image, idx) => (
    <div
      key={idx}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${0.5 + idx * 0.1}s`, height: "240px" }}
    >
      {/* Image container - Responsive */}
      <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-2xl lg:rounded-3xl border border-2 md:border-2 border-white/40 bg-gray-100">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Icon badge - Responsive */}
        <div className="absolute top-2 right-2 w-8 md:w-10 h-8 md:h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md md:shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
          <svg
            className="w-4 md:w-5 h-4 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
    </div>
  ))}
              </div>
            </div>

          </div>
        </div>
        {/* 35+ Years Banner */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-center text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {/* Animated background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 text-xl md:text-2xl lg:text-3xl">
              <Award className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10" />
              <span className="font-black">35+ Years</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
              Trusted by Thousands of <span className="text-yellow-100">Happy Customers</span>
            </h3>
            <p className="text-base md:text-lg opacity-95 max-w-2xl mx-auto leading-relaxed px-2">
              Since 1983, we've been providing exceptional cleaning and facility management services across Mumbai with unwavering commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 md:gap-2 text-base md:text-lg font-bold pt-2 md:pt-4 px-2">
              <CheckCircle className="w-5 md:w-6 h-5 md:h-6" />
              <span>ISO Certified & 100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
