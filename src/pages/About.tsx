import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { WhyKHFMSection } from "@/components/about/WhyKHFMSection";
import { CheckCircle, Target, Lightbulb, Users, Award, Globe } from "lucide-react";
import slide1 from "@/assets/img/signin-image.png";

const services = [
  "Special Cleaning for Offices",
  "Special Cleaning for Residences",
  "Window & Toilet cleaning Services",
  "Pest Control Services",
  "Spring Cleaning Services of Housing Societies, Hotels, Clubs, Mall, etc.",
  "Chair, Sofa, Carpet & Mattress Shampoo cleaning & disinfecting Staff",
];

const About = () => {
  return (
    <Layout>
      <PageBanner 
        title="About Us" 
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop"
      />

      <WhyKHFMSection />

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Section 1 */}
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-full">
                <img
                  src={slide1}
                  alt="Professional Cleaning Team"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content Section 1 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-1">
                  <div className="bg-white/95 rounded-full px-6 py-2 shadow-xl">
                    <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Our Story</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                KHFM <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Cleaning Solution</span>
              </h1>

              <div className="space-y-4 mb-8">
                <div className="rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    KHFM Cleaning Solution is a Division of KHFM Hospitality & Facility Management Services Ltd., which is one of the Oldest Housekeeping & Cleaning Company established in <span className="font-bold text-red-600">1983</span> in Mumbai.
                  </p>
                </div>
                
                <div className="rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    KHFM Cleaning Solutions is one of <span className="font-bold text-red-600">premier cleaning services provider in India</span>. We want to ensure that a lasting impression is made by the quality of your business, and we know that the first indication of quality is cleanliness.
                  </p>
                </div>
                
                <div className="rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    We are <span className="font-bold text-red-600">committed to providing</span> the most professional and thorough janitorial services with trained professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Services</span></h2>
            <p className="text-xl text-gray-700 font-medium mb-8">Comprehensive cleaning solutions for every need</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={service} className="group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 p-6 animate-fade-in" style={{ animationDelay: `${0.05 * idx}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-900 font-bold leading-relaxed">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Section 2 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=500&fit=crop"
                  alt="Eco-Friendly Cleaning Services"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content Section 2 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-full p-1">
                  <div className="bg-white/95 rounded-full px-6 py-2 shadow-xl">
                    <span className="text-xs font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Sustainability</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Our <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Commitment</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-green-50/40 to-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    We are <span className="font-bold text-green-600">committed to environmental sustainability</span> and eco-friendly practices in all our cleaning operations and facility management services.
                  </p>
                </div>
                
                <div className="rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-green-50/40 to-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Using <span className="font-bold text-green-600">non-toxic and biodegradable products</span>, we ensure that our cleaning services are safe for families, pets, and the environment while maintaining the highest standards of hygiene.
                  </p>
                </div>
                
                <div className="rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-green-50/40 to-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Our <span className="font-bold text-green-600">green initiatives</span> extend beyond cleaning to include waste management, water conservation, and supporting sustainable practices across our entire organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">40+</p>
                  <p className="text-gray-700 font-medium">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">3500+</p>
                  <p className="text-gray-700 font-medium">Trained Staff</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">Pan India</p>
                  <p className="text-gray-700 font-medium">Service Presence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed font-medium text-center">
                  To be the most trusted and preferred cleaning service provider across India, recognized for our commitment to excellence, sustainability, and customer satisfaction in every interaction.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-12 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed font-medium text-center">
                  KHFM Cleaning Solutions is dedicated to delivering exceptional cleaning and facility management services with integrity, innovation, and a deep commitment to environmental sustainability and customer delight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Banner */}
      <section className="py-8">
        <div className="container text-center">
          <div className="glass-effect-dark text-grey rounded-full py-4 px-8 text-center inline-block animate-fade-in">
            <span className="font-semibold text-lg">🌿 Always use Eco-Friendly Services & Save our Nature</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
