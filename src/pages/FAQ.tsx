import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Zap, CheckCircle, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "I have Housemaid. Do I still need your service?",
    answer: "Daily cleaning by your Maid does not include those critical areas due to lack of knowledge/expertise. Not attending these areas for months may lead to breeding of bacteria causing different diseases. Our trained KHFM Cleaning Solution experts use latest cleaning equipment, Eco-Friendly chemicals & Techniques to clean your critical areas.",
  },
  {
    question: "How to book your service? How much time does it take?",
    answer: "You can book our services through WhatsApp, phone call, or email. Once booked, our team will arrive at your scheduled time. The duration depends on the service and area size - typically 2-6 hours for most residential services.",
  },
  {
    question: "Can I opt for Annual Contract with Monthly services?",
    answer: "Yes, we can offer you Annual Package with monthly services for House Cleaning, Pest Control Service, and more. This helps you maintain a clean and pest-free environment throughout the year.",
  },
  {
    question: "Is your team verified & trusted?",
    answer: "Yes, all our staff members undergo thorough background verification before joining. They are trained professionals with years of experience in their respective fields.",
  },
  {
    question: "How can I Gift your Service?",
    answer: "You can gift our cleaning services to your loved ones. Simply contact us with the recipient's details and preferred service, and we'll arrange everything. Gift vouchers are also available.",
  },
  {
    question: "Is there any Rewards for referrals?",
    answer: "Yes! We have a referral program where you can earn rewards when you refer our services to friends and family. Contact us for more details on current referral offers.",
  },
  {
    question: "Can you customize your service on the basis of our requirement?",
    answer: "Absolutely! We understand that every space is unique. Our team can customize cleaning packages based on your specific requirements, schedule, and budget.",
  },
  {
    question: "Is your service safe for Sr. Citizens, Small children, kids, pets, etc?",
    answer: "Yes, we use eco-friendly and non-toxic cleaning products that are safe for senior citizens, children, and pets. Our products are carefully selected to ensure they are effective yet gentle.",
  },
  {
    question: "Which cities do you provide your services?",
    answer: "We currently provide our services across Mumbai and surrounding areas including Thane, Navi Mumbai, and other regions. We are expanding our service areas continuously.",
  },
  {
    question: "How much time does it take to clean a flat?",
    answer: "The time depends on the size and condition of the flat. Generally, a 1BHK takes 3-4 hours, 2BHK takes 4-5 hours, and 3BHK takes 5-6 hours for deep cleaning. Regular cleaning may take less time.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppPopup(true);
    setTimeout(() => {
      window.open('https://wa.me/8655663022', '_blank');
    }, 800);
  };

  return (
    <Layout>
      <PageBanner 
        title="FAQ" 
        subtitle="Frequently Asked Questions"
        backgroundImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 min-h-screen">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-1">
                <div className="bg-white rounded-full px-8 py-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Have Questions?</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Get instant answers to the most common questions about our premium cleaning services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="cursor-pointer transition-all duration-500 transform hover:scale-102 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => toggleExpand(index)}
              >
                <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-r from-white/50 to-red-50/50 border-2 border-white/70 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center min-w-max">
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                            <span className="text-lg">Q{index + 1}</span>
                          </span>
                        </div>
                        {/* Question */}
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg font-bold text-gray-900 leading-relaxed">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      {/* Toggle Icon */}
                      <div className={`text-2xl text-red-500 font-bold transition-transform duration-300 flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </div>

                    {/* Answer - Hidden by default, shown on click */}
                    {expandedIndex === index && (
                      <div className="mt-6 pt-6 border-t-2 border-white/40 animate-fade-in">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed text-base font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-red-400/20 border-2 border-white/70 shadow-xl p-10 group">
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
                <p className="text-gray-700 mb-8">Can't find your answer? Our support team is here to help!</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl active:scale-95 relative overflow-hidden group"
                >
                  {/* Shimmer effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                  
                  {/* Premium icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 rounded-lg blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-white/20 rounded-lg p-2 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <MessageCircle className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <span className="relative z-10">Contact on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Popup Modal */}
          {showWhatsAppPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
                onClick={() => setShowWhatsAppPopup(false)}
              ></div>
              
              {/* Popup */}
              <div className="relative animate-popup z-50 max-w-sm mx-4">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/80 backdrop-blur-xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowWhatsAppPopup(false)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all z-10 transform hover:scale-110"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Content */}
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                        
                        {/* Middle glow */}
                        <div className="absolute inset-2 bg-white/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        
                        {/* Icon container with glass effect */}
                        <div className="relative bg-gradient-to-br from-white via-white/90 to-white/80 rounded-full p-5 shadow-2xl transform animate-bounce-slow border-2 border-white/50 backdrop-blur-md">
                          <div className="relative">
                            <MessageCircle className="w-12 h-12 text-green-600 drop-shadow-lg" />
                            {/* Inner shine effect */}
                            <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full opacity-60"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Connect on WhatsApp</h3>
                    <p className="text-white/90 mb-6">Chat with us directly for instant support!</p>
                    
                    <div className="bg-white/20 rounded-2xl p-4 mb-6 border border-white/40 backdrop-blur-sm">
                      <p className="text-white font-bold text-lg">+91 8655663022</p>
                      <p className="text-white/80 text-sm mt-1">Available 24/7</p>
                    </div>
                    
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-white text-green-600 font-bold py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Open WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
