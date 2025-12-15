import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export function WhyKHFMSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const reasons = [
    "35 year old company with experienced management staff.",
    "ISO 9001:2008, ISO 14001, ISO 18000 certified integrated facility management company.",
    "Specific on-site & off-site job training provided by senior management personnel before deputing each staff member to client site at our in house training centre.",
    "Owns latest machinery for all kinds of job & trained manpower to use them.",
    "High quality professional service.",
    "No company is better equipped to enhance your image and efficiency."
  ];

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden py-20 md:py-24">
      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Interactive Accordion */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl  md:text-6xl font-semibold  font-[600px] text-gray-900 leading-tight animate-fade-in">
                Why <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">KHFM</span>
              </h1>
              <p className="text-xl  text-gray-700 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: "0.05s" }}>Click on any reason to explore what makes us different</p>
            </div>

            {/* Interactive Accordion */}
            <div className="space-y-3">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className={`group relative overflow-hidden rounded-2xl backdrop-blur-2xl border-2 border-white/80 p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 animate-fade-in ${
                    expandedIndex === idx
                      ? 'bg-gradient-to-br from-red-600 to-red-700 shadow-2xl'
                      : 'bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${0.05 * idx}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    expandedIndex === idx ? 'from-transparent to-transparent' : 'from-red-500/10 to-red-400/5'
                  }`}></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 font-bold text-sm transition-all ${
                      expandedIndex === idx
                        ? 'bg-white text-red-600 shadow-lg'
                        : 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold leading-relaxed transition-colors ${
                        expandedIndex === idx ? 'text-white' : 'text-gray-900'
                      }`}>
                        {reason}
                      </p>
                      {expandedIndex === idx && (
                        <div className="mt-4 pt-4 border-t-2 border-white/30 animate-fade-in">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                            <p className="text-white/90 font-medium">This is one of our key strengths that sets us apart in the industry.</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <ArrowRight className={`flex-shrink-0 w-5 h-5 transition-all duration-300 ${
                      expandedIndex === idx
                        ? 'rotate-90 text-white'
                        : 'text-gray-600 group-hover:text-red-600'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

           <div
  className="flex flex-col sm:flex-row gap-4 animate-fade-in"
  style={{ animationDelay: "0.4s" }}
>
  <Button
    size="lg"
    className="w-full sm:w-auto
      bg-gradient-to-r from-red-600 to-red-700
      hover:from-red-700 hover:to-red-800
      text-white font-semibold px-8 rounded-full
      transform hover:scale-105 transition-all shadow-lg"
    asChild
  >
    <Link to="/services" className="flex items-center justify-center w-full">
      View Our Services
      <ArrowRight className="w-5 h-5 ml-2" />
    </Link>
  </Button>

  <Button
    size="lg"
    className="w-full sm:w-auto
      border-2 border-red-600 text-red-600
      bg-white/50 backdrop-blur-sm
      hover:bg-red-600 hover:text-white
      font-semibold px-8 rounded-full
      transform hover:scale-105 transition-all shadow-lg"
    asChild
  >
    <a
      href="tel:+919987574333"
      className="flex items-center justify-center w-full"
    >
      <Phone className="w-4 h-4 mr-2" />
      Enquire Now
    </a>
  </Button>
</div>

          </div>

          {/* Right content - Premium Image Card with Stats */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <div className="space-y-6">
              {/* Main Image Card */}
              <div className="relative group">
                {/* Floating background card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-red-100/40 to-red-50/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main image card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 backdrop-blur-sm bg-white/30">
                  <div className="w-full h-72 relative">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=500&fit=crop"
                      alt="Professional cleaning team"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Info badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 via-red-600/80 to-transparent p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-bold text-lg mb-2">Professional Excellence</p>
                    <p className="text-sm text-white/90">Dedicated to delivering exceptional cleaning services</p>
                  </div>
                </div>
              </div>

              {/* Premium Benefits Section */}
              <div className="space-y-4">
                {/* Benefit Card 1 */}
                <div className="group relative overflow-hidden rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-red-600 to-red-700 border-2 border-white/40 p-6 shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-white/30 border-2 border-white/40 flex items-center justify-center flex-shrink-0 group-hover:bg-white/40 transition-all shadow-lg">
                        <span className="text-3xl">🛡️</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">Safety First</h3>
                        <p className="text-white/90 text-sm leading-relaxed">Advanced sanitization protocols ensuring 99.9% germ elimination</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefit Card 2 */}
                <div className="group relative overflow-hidden rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-red-600 to-red-700 border-2 border-white/40 p-6 shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: "0.55s" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-white/30 border-2 border-white/40 flex items-center justify-center flex-shrink-0 group-hover:bg-white/40 transition-all shadow-lg">
                        <span className="text-3xl ">💚</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">Eco-Conscious</h3>
                        <p className="text-white/90 text-sm leading-relaxed">100% biodegradable products for a sustainable future</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefit Card 3 */}
                <div className="group relative overflow-hidden rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-red-600 to-red-700 border-2 border-white/40 p-6 shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-white/30 border-2 border-white/40 flex items-center justify-center flex-shrink-0 group-hover:bg-white/40 transition-all shadow-lg">
                        <span className="text-3xl">⭐</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">Expert Team</h3>
                        <p className="text-white/90 text-sm leading-relaxed">Certified professionals with specialized training</p>
                      </div>
                    </div>
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