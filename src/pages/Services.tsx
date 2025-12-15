import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ServiceCard } from "@/components/home/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <PageBanner 
        title="Our Services" 
        subtitle="Professional cleaning solutions for every need"
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 min-h-screen">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            {/* <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-1">
                <div className="bg-white/95 rounded-full px-8 py-3 shadow-xl">
                  <span className="text-sm font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Premium Solutions</span>
                </div>
              </div>
            </div> */}
             <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md text-red-400 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-red-500/30">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
       Premium Solutions
        
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Professional Services</span></h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive cleaning solutions tailored to meet your home's unique needs with professional excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/services/${service.id}`)}
              >
                {/* Reddish overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5"></div>
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden border-b-2 border-white/40">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-blue-700 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full px-4 py-2">
                      <p className="text-white font-bold">₹{service.price.toLocaleString()}</p>
                    </div>
                    
                    {/* View Details Button */}
                    <button className="relative inline-flex items-center gap-2 text-red-600 font-bold overflow-hidden group/btn">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-right rounded"></div>
                      <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">View</span>
                      <ArrowRight className="relative z-10 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-12 md:p-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to Transform Your Space?</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Book your professional cleaning service today and experience the KHFM difference. Our expert team is ready to make your home spotless.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex-shrink-0" onClick={() => navigate('/contact')}>
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
