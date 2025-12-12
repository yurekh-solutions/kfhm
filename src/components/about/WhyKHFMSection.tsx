import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function WhyKHFMSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden py-16 md:py-24">
      {/* Main content */}
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight animate-fade-in">
                Why <span className="text-red-600">KHFM</span>
              </h1>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg">35 year old company with experienced management staff.</p>
                </div>
                
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg">ISO 9001:2008, ISO 14001, ISO 18000 certified integrated facility management company.</p>
                </div>
                
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg">Specific on-site & off-site job training provided by senior management personnel before deputing each staff member to client site at our in house training centre.</p>
                </div>
                
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg">Owns latest machinery for all kinds of job & trained manpower to use them.</p>
                </div>
                
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg">High quality professional service.</p>
                </div>
                
                <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg">No company is better equipped to enhance your image and efficiency.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8" asChild>
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8"
                asChild
              >
                <a href="tel:+919987574333">
                  <Phone className="w-4 h-4 mr-2" />
                  Enquire Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Professional cleaning team image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="relative">
              {/* Main circular image */}
              <div className="w-96 h-96 mx-auto relative">
                <div className="w-full h-full rounded-full border-8 border-blue-900 overflow-hidden bg-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop&crop=center"
                    alt="Professional cleaning team in protective gear"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Virus/bacteria icon */}
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦠</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}