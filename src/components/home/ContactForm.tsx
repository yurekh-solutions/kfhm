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

  const handleSubmit = (e) => {
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

    setShowSuccessPopup(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setShowSuccessPopup(false);
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white
      py-12 sm:py-16 md:py-20">

      {/* Background blobs */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-red-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto relative px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-md
            text-red-400 px-4 py-2 rounded-full text-xs sm:text-sm font-bold
            border border-red-500/30 mb-3">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Get In Touch
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
            Get{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Free Consultation
            </span>{" "}
            Today
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Have questions? Our cleaning experts are here to help via WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=300&fit=crop"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>

              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=250&h=250&fit=crop"
                className="w-full h-32 object-cover rounded-2xl shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=250&h=250&fit=crop"
                className="w-full h-32 object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Call Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 border border-gray-200 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-red-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#dc2626]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Quick Call</h3>
                  <p className="text-xs text-gray-600">
                    <a href="tel:+919987574333" className="text-[#dc2626] font-bold">
                      +91 9987574333
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 sm:p-8
            border border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                placeholder="Phone *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Textarea
                rows={3}
                placeholder="Service details *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button
                type="submit"
                className="w-full bg-[#dc2626] hover:bg-red-700
                text-white font-bold py-4 rounded-xl flex items-center
                justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Response within 5 minutes (business hours)
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <CheckCircle className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
            <h3 className="text-lg font-black text-center mb-2">
              Request Sent!
            </h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Redirecting to WhatsApp...
            </p>
            <Button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-[#dc2626] hover:bg-red-700">
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
