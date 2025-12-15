import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 px-2">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Professional cleaning and pest control services for homes, offices, and commercial spaces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 sm:px-10 py-4 sm:py-6 text-sm sm:text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
