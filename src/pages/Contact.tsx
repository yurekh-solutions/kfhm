import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/home/ContactForm";
import { Mail, MapPin, Phone, Clock, Zap, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Here",
    value: "admin@khfm.co.in",
    link: "mailto:admin@khfm.co.in",
    color: "from-blue-400 to-blue-600",
    bgColor: "from-blue-500/20 to-blue-400/20",
  },
  {
    icon: MapPin,
    title: "Visit Here",
    value: "01, Nirma Plaza, Makhwana Road, Marol Naka, Andheri (East), Mumbai-400059",
    link: "https://maps.google.com",
    color: "from-purple-400 to-purple-600",
    bgColor: "from-purple-500/20 to-purple-400/20",
  },
  {
    icon: Phone,
    title: "Call Here",
    value: "+91 9987574333",
    link: "tel:+919987574333",
    color: "from-red-400 to-red-600",
    bgColor: "from-red-500/20 to-red-400/20",
  },
];

const benefits = [
  { icon: Clock, text: "24/7 Support Available" },
  { icon: Zap, text: "Quick Response Time" },
  { icon: Shield, text: "100% Secure & Trusted" },
];

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <Layout>
      <PageBanner 
        title="Contact Us" 
        subtitle="We're here to help you"
        backgroundImage="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1200&h=600&fit=crop"
      />

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-red-25 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Main Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-1">
                <div className="bg-white/95 rounded-full px-8 py-3 shadow-xl">
                  <span className="text-sm font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Get in Touch</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Let's Connect & 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Help You</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Have questions about our premium cleaning services? We're here to provide expert assistance and ensure your complete satisfaction.
            </p>
          </div>

          {/* Benefits Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/60 border-2 border-white/80 p-8 hover:shadow-2xl hover:border-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in shadow-xl" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Reddish gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-500/0 group-hover:from-red-500/15 group-hover:to-red-400/10 transition-all duration-300"></div>
                
                {/* Shimmer/shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon container with glow */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <span className="font-bold text-gray-900 text-base leading-relaxed">{benefit.text}</span>
                  
                  {/* Bottom accent bar */}
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="py-20 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reach Out <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">To Us</span></h2>

            <p className="text-lg text-gray-600 font-medium">Multiple ways to connect with our expert team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => (
              <a
                key={info.title}
                href={info.link}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 border-white/80 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in bg-white/70"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Gradient background - reddish overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 to-red-400/10"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-2xl text-gray-900 mb-3">{info.title}</h3>
                    
                    {/* Value */}
                    <p className="text-gray-700 font-medium text-sm leading-relaxed break-all">{info.value}</p>
                    
                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-red-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Connect</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
         <section className="py-20 bg-gradient-to-br from-white via-red-50/30 to-white">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        <div className="container max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Latest <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Creations</span> </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              A visual collection of our most recent works - each space transformed with intention, expertise, and premium cleaning excellence.
            </p>
          </div>

       {/* Image Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  
  {/* Card 1 */}
  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <img
      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop"
      alt="Deep Cleaning"
      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-1">Deep Cleaning</h3>
      <p className="text-sm text-white/90">
        Comprehensive cleaning for spotless & hygienic spaces.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop"
      alt="Office Sanitization"
      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-1">Office Sanitization</h3>
      <p className="text-sm text-white/90">
        Professional sanitization for healthy workplaces.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <img
      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
      alt="Pest Control"
      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-1">Pest Control</h3>
      <p className="text-sm text-white/90">
        Safe & eco-friendly pest management solutions.
      </p>
    </div>
  </div>

</div>


          {/* CTA Button */}
          <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              View All Services
            </button>
          </div>
        </div>
              <ContactForm />

      </section>
      </section>
      
      </section>

      {/* Contact Info Cards */}
      

      {/* Our Latest Creations Section */}
     

    </Layout>
  );
};

export default Contact;
