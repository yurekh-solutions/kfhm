import { Button } from "@/components/ui/button";
import { Service, createWhatsAppLink } from "@/data/services";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-red-100/50 hover:border-red-300/80">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/10 to-orange-100/10"></div>
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute top-5 right-5">
          <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ₹{service.price.toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="p-7">
        <h3 className="font-black text-2xl text-gray-900 mb-3 group-hover:text-red-700 transition-all">
          {service.name}
        </h3>
        <p className="text-gray-700 text-sm mb-6 line-clamp-2 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-red-200/50">
          <span className="text-xs text-red-700 font-bold uppercase tracking-wide">Starting from</span>
          <Button 
            size="sm" 
            className="bg-[#dc2626] hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" 
            asChild
          >
            <Link to={`/services/${service.id}`}>
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
