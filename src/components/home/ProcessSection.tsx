import { Smartphone, CalendarCheck, Sparkles, Home } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Book Online",
    description: "Book & pay online. We'll match you with a trusted, experienced house cleaner.",
  },
  {
    icon: CalendarCheck,
    title: "Easy online scheduling",
    description: "Choose your preferred date and time that works best for you.",
  },
  {
    icon: Sparkles,
    title: "Cleaning with care",
    description: "Our trained professionals clean your space with attention to detail.",
  },
  {
    icon: Home,
    title: "Enjoy cleanliness",
    description: "Relax and enjoy your spotless, fresh, and hygienic space.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative px-4">
        <div className="mb-16 space-y-4 animate-fade-in text-center">
          <div className="inline-block mb-4">
              {/* <div className="bg-white/95 rounded-full px-6 py-2 shadow-xl">
                <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Our Process</span>
              </div> */}
                   <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md text-red-400 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
          Our Process
        
            </div>
          </div>
        <h2 className="leading-tight text-gray-900">
            Get Amazing Cleaning In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">Simple, transparent, and hassle-free process to get your space cleaned</p>
        </div>

        {/* Desktop Layout with connecting line */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connecting line */}
            <div className="absolute top-32 left-12 right-12 h-1 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-full z-0"></div>

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-xl border-4 border-white z-10 animate-fade-in group-hover:scale-110 transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-white font-black text-2xl">{index + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border-2 border-white/40 shadow-2xl hover:shadow-3xl hover:shadow-red-200/50 transition-all duration-300 hover:-translate-y-3 group h-full pt-28 relative overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Hover background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-orange-200 transition-all duration-300 shadow-md">
                      <step.icon className="w-12 h-12 text-red-600 group-hover:text-orange-700 transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 group-hover:text-red-700 transition-colors">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors font-normal">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number badge */}
                <div className="absolute -top-6 left-6 w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg border-4 border-white z-10">
                  <span className="text-white font-black text-xl">{index + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 text-left border-2 border-white/40 shadow-xl hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-300 hover:-translate-y-3 h-full pt-16 relative overflow-hidden">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Hover background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-orange-200 transition-all duration-300 shadow-md">
                      <step.icon className="w-10 h-10 text-red-600 group-hover:text-orange-700 transition-colors" />
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-red-700 transition-colors">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors font-normal">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
