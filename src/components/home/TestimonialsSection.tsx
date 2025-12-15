import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Austin",
    location: "3BHK Shiv Sai Paradise Thane (West)",
    review: "I booked the services of KHFM for cleaning of my entire house, people who came were quite professional & well trained.",
    rating: 5,
  },
  {
    name: "Sulaksha Shetty",
    location: "3BHK Oberoi Splendor Jogeshwari (East)",
    review: "KHFM did a fantastic job & phenomenal hard work & gave me a spic & span house.",
    rating: 5,
  },
  {
    name: "Richa Mediratta",
    location: "2BHK Dreams Complex Bhandup (West)",
    review: "I like the services provided by KHFM, I would say they are worth spending your money.",
    rating: 3,
  },
  {
    name: "Priya Sharma",
    location: "4BHK Lodha Seascape Mahalaxmi",
    review: "Outstanding cleaning quality! The team is punctual, professional, and attention to detail is impeccable. Highly recommended!",
    rating: 4,
  },
  {
    name: "Rajesh Kumar",
    location: "3BHK Marvel Vega Thane",
    review: "Excellent service at affordable prices. KHFM is our trusted partner for maintaining a spotless home environment.",
    rating: 4,
  },
  {
    name: "Anjali Gupta",
    location: "2BHK Godrej Nature's Nest Sohna",
    review: "KHFM provides exceptional service with eco-friendly products. Very satisfied with their professional approach and results.",
    rating: 5,
  },
];

const testimonialAnimation = `
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes marqueeReverse {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .marquee-forward {
    animation: marquee 40s linear infinite;
  }
  
  .marquee-reverse {
    animation: marqueeReverse 40s linear infinite;
  }
  
  .marquee-container:hover .marquee-forward,
  .marquee-container:hover .marquee-reverse {
    animation-play-state: paused;
  }
`;

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animation styles */}
      <style>{testimonialAnimation}</style>
      
      {/* Background decorative elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16 space-y-3 md:space-y-4 animate-fade-in text-center">
          <span className="section-label text-red-700 font-bold text-xs md:text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mt-2 md:mt-4 leading-tight">
            See what our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">happy customers</span> have to say
          </h2>
        </div>

        {/* Desktop Grid View - 6 Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={`grid-${testimonial.name}`}
              className="group relative animate-fade-in hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Blur background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-200/15 to-orange-200/15 rounded-2xl md:rounded-3xl blur-xl group-hover:from-red-200/30 group-hover:to-orange-200/30 transition-all duration-300"></div>
              
              {/* Glass card with grey to red border on hover */}
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-gray-200 group-hover:border-red-500 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-red-200/40 h-full flex flex-col hover:-translate-y-2">
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  <Quote className="w-8 md:w-12 h-8 md:h-12 text-red-300/50 mb-3 md:mb-6 group-hover:text-red-300/80 transition-colors" />
                  
                  {/* User info */}
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-black text-sm md:text-lg group-hover:scale-110 transition-transform flex-shrink-0 shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm md:text-base text-gray-900 group-hover:text-red-700 transition-colors">{testimonial.name}</h4>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <p className="text-red-700/80 text-xs md:text-sm font-medium mb-3 md:mb-4 group-hover:text-red-700 transition-colors line-clamp-1">{testimonial.location}</p>
                  
                  {/* Review */}
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 group-hover:text-gray-900 transition-colors italic flex-1 line-clamp-3 md:line-clamp-none">&quot; {testimonial.review} &quot;</p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 md:gap-2 pt-3 md:pt-4 border-t border-red-200/50 group-hover:border-red-300 transition-colors">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-orange-400 text-orange-400 group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Marquee - All 6 cards duplicate for continuous scroll */}
        <div className="md:hidden mb-12 animate-fade-in">
          <div className="marquee-container relative overflow-hidden py-4">
            <div className="marquee-forward flex gap-4 w-max">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`marquee-${index}`}
                  className="group relative flex-shrink-0 w-80 sm:w-96 animate-fade-in"
                >
                  {/* Blur background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-200/15 to-orange-200/15 rounded-2xl blur-xl group-hover:from-red-200/30 group-hover:to-orange-200/30 transition-all duration-300"></div>
                  
                  {/* Glass card with grey to red border on hover */}
                  <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-6 border-2 border-gray-300 group-hover:border-red-500 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-red-200/40 h-full flex flex-col hover:-translate-y-1">
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col flex-1">
                      <Quote className="w-8 h-8 text-red-300/50 mb-3 group-hover:text-red-300/80 transition-colors" />
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform flex-shrink-0 shadow-md">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-gray-900 group-hover:text-red-700 transition-colors truncate">{testimonial.name}</h4>
                        </div>
                      </div>
                      
                      <p className="text-red-700/80 text-xs font-medium mb-3 group-hover:text-red-700 transition-colors line-clamp-1">{testimonial.location}</p>
                      <p className="text-gray-700 text-xs leading-relaxed mb-4 group-hover:text-gray-900 transition-colors italic flex-1 line-clamp-2">&quot; {testimonial.review} &quot;</p>
                      
                      <div className="flex gap-1 pt-3 border-t border-red-200/50 group-hover:border-red-300 transition-colors">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400 group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}