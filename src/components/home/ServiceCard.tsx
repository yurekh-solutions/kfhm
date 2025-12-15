import { Button } from "@/components/ui/button";
import { Service, createWhatsAppLink } from "@/data/services";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative h-full animate-fade-in">
      {/* Glass morphism card with enhanced effects */}
      <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-white/40 hover:border-red-400/60 hover:-translate-y-3 flex flex-col">
        
        {/* Glassmorphism reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
        
        {/* Hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl sm:rounded-3xl"></div>

        {/* Image Container - Responsive */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-orange-100/20"></div>
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Price Badge - Responsive positioning */}
          <div className="absolute top-3 sm:top-5 right-3 sm:right-5">
            <span className="bg-gradient-to-r from-[#fee5e5] to-[#fde4e4] text-grey px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
              ₹{service.price.toLocaleString()}
            </span>
          </div>
        </div>
        
        {/* Content Section - Responsive */}
        <div className="p-4 sm:p-6 md:p-7 flex-1 flex flex-col relative z-10">
          <h3 className="font-black text-lg sm:text-xl md:text-2xl text-blue-700 mb-2 sm:mb-3 group-hover:text-red-700 transition-all line-clamp-2">
            {service.name}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 line-clamp-2 leading-relaxed flex-1">
            {service.description}
          </p>
          
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-red-200/50 gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-red-700 hidden sm:inline">Starting from</span>
            <span className="text-xs font-bold uppercase tracking-wide text-red-700 sm:hidden">Book</span>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm" 
              asChild
            >
              <Link to={`/services/${service.id}`}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
