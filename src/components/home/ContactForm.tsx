import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createInquiryWhatsAppLink } from "@/data/services";
import { toast } from "@/hooks/use-toast";
import { Send, X, CheckCircle, Phone } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, Phone and Message are required.",
        variant: "destructive",
      });
      return;
    }

    const whatsappLink = createInquiryWhatsAppLink(
      formData.name,
      formData.phone,
      formData.email,
      formData.message
    );

    // Show success popup first
    setShowSuccessPopup(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setShowSuccessPopup(false);
    }, 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <span className="section-label text-red-700 font-bold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Get <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Free Consultation</span> Today
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Have questions? Our professional cleaning experts are here to help. Contact us via WhatsApp for instant response.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Left Side - Images */}
          <div className="space-y-6">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=300&fit=crop"
                  alt="Professional Cleaning Team"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Small Image 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=250&h=250&fit=crop"
                  alt="Sanitization Service"
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Small Image 2 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=250&h=250&fit=crop"
                  alt="Window Cleaning"
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100">
                    <Phone className="h-6 w-6 text-[#dc2626]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Quick Call</h3>
                  <p className="text-sm text-gray-600 mb-3">Reach us immediately for urgent inquiries</p>
                  <a href="tel:+919987574333" className="text-[#dc2626] font-bold hover:underline">
                    +91 9987574333
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form with Glass Morphism */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in relative" style={{ animationDelay: "0.2s" }}>
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:ring-red-100 rounded-2xl py-4 text-base hover:border-gray-300 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:ring-red-100 rounded-2xl py-4 text-base hover:border-gray-300 transition-colors"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number *</label>
                <Input
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:ring-red-100 rounded-2xl py-4 text-base hover:border-gray-300 transition-colors"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Service Details *</label>
                <Textarea
                  placeholder="Tell us about your cleaning requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:ring-red-100 rounded-2xl p-4 resize-none hover:border-gray-300 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold py-6 text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Submit 
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">We'll respond within 5 minutes during business hours</p>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4 animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-100 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-red-50 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-[#dc2626]" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-black text-gray-900 text-center mb-2">
              Request Sent Successfully!
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Thank you for reaching out. Our team will respond to your inquiry via WhatsApp shortly. Opening WhatsApp now...
            </p>

            {/* Loading Animation */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>

            {/* Button */}
            <Button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all duration-300"
            >
              Got It
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
