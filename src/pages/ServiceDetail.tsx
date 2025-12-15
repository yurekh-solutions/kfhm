import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Star, Quote, ArrowLeft, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { services, WHATSAPP_NUMBER } from "@/data/services";
import { toast } from "@/hooks/use-toast";

const houseTypes = [
  { value: "1rk", label: "1RK", priceMultiplier: 1 },
  { value: "1bhk", label: "1 BHK", priceMultiplier: 1.2 },
  { value: "2bhk", label: "2 BHK", priceMultiplier: 1.5 },
  { value: "3bhk", label: "3 BHK", priceMultiplier: 1.8 },
  { value: "4bhk", label: "4 BHK", priceMultiplier: 2.2 },
  { value: "villa", label: "Villa/Bungalow", priceMultiplier: 3 },
];

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

const testimonials = [
  {
    name: "Austin",
    location: "3BHK Shiv Sai Paradise Thane (West)",
    review: "I booked the services of KHFM for cleaning of my entire house, people who came were quite professional & well trained.",
    rating: 5,
  },
  {
    name: "Sulaksha Shetty",
    location: "3BHK Oberoi Splendor Jogeshwari (East)",
    review: "KHFM did a fantastic job & phenomenal hard work & gave me a spic & span house.",
    rating: 5,
  },
  {
    name: "Richa Mediratta",
    location: "2BHK Dreams Complex Bhandup (West)",
    review: "I like the services provided by KHFM, I would say they are worth spending your money.",
    rating: 5,
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id) || services[0];

  const [houseType, setHouseType] = useState("");
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");

  const selectedHouseType = houseTypes.find((h) => h.value === houseType);
  const finalPrice = selectedHouseType
    ? Math.round(service.price * selectedHouseType.priceMultiplier)
    : service.price;

  const handleBookNow = () => {
    if (!houseType) {
      toast({ title: "Please select house type", variant: "destructive" });
      return;
    }
    if (!date) {
      toast({ title: "Please select a date", variant: "destructive" });
      return;
    }
    if (!timeSlot) {
      toast({ title: "Please select a time slot", variant: "destructive" });
      return;
    }

    const message = encodeURIComponent(
      `Hi, I want to book:\n\n` +
      `Service: ${service.name}\n` +
      `House Type: ${selectedHouseType?.label}\n` +
      `Date: ${format(date, "dd-MM-yyyy")}\n` +
      `Time: ${timeSlot}\n` +
      `Price: ₹${finalPrice.toLocaleString()}\n\n` +
      `Please confirm my booking.`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <PageBanner 
        title="Service Details"
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>

          {/* Service Header Card */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 md:p-12 mb-8 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Service Image */}
              <div className="rounded-2xl overflow-hidden h-96 shadow-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Service Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.name}
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full w-fit px-6 py-3 mb-6">
                  <p className="text-white font-bold text-2xl">₹{service.price.toLocaleString()}</p>
                </div>
                <p className="text-gray-700 font-medium">
                  Professional cleaning service with guaranteed quality and eco-friendly products.
                </p>
              </div>
            </div>
          </div>

          {/* Booking and Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Booking Form Card */}
            <div className="md:col-span-2 rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Service</h2>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {/* House Type */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">House Type</label>
                    <select 
                      value={houseType} 
                      onChange={(e) => setHouseType(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white/60 border-2 border-white/80 backdrop-blur-sm text-gray-900 font-medium focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select house type</option>
                      {houseTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="w-full px-4 py-3 rounded-2xl bg-white/60 border-2 border-white/80 backdrop-blur-sm text-gray-900 font-medium focus:outline-none focus:border-red-600 transition-colors text-left flex items-center gap-2 hover:bg-white/80">
                          <CalendarIcon className="w-5 h-5 text-red-600" />
                          {date ? format(date, "dd MMM, yyyy") : "Pick a date"}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white/95 backdrop-blur-xl border-2 border-white/80" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slot */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-900 mb-3">Choose Time Slot</label>
                    <select 
                      value={timeSlot} 
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white/60 border-2 border-white/80 backdrop-blur-sm text-gray-900 font-medium focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price Display */}
                <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-6 mb-6">
                  <p className="text-white/80 text-sm font-medium mb-2">Total Price</p>
                  <p className="text-white font-bold text-3xl mb-4">₹{finalPrice.toLocaleString()}</p>
                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105"
                  >
                    Book via WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Professional Team</p>
                      <p className="text-sm text-gray-600">2-3 trained experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Eco-Friendly</p>
                      <p className="text-sm text-gray-600">Safe chemicals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Equipment Included</p>
                      <p className="text-sm text-gray-600">All tools provided</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Quality Guaranteed</p>
                      <p className="text-sm text-gray-600">100% satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Description Tabs */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 md:p-12 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
            
            <div className="relative z-10">
              <Tabs defaultValue="description">
                <TabsList className="bg-white/60 backdrop-blur-sm border-2 border-white/80 p-2 mb-8 rounded-2xl w-full justify-start flex-wrap">
                  <TabsTrigger value="description" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white rounded-lg">Service Details</TabsTrigger>
                  <TabsTrigger value="info" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white rounded-lg">Information</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white rounded-lg">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="space-y-4">
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p><strong className="text-gray-900">Toilet Steam Cleaning</strong> – Disinfecting and Steam Cleaning of Bathrooms and Toilets.</p>
                    <p><strong className="text-gray-900">Kitchen Steam Cleaning</strong> – Wipe and disinfect all exterior appliances electrical fixtures. Clean basin, kitchen platform and closets from outside.</p>
                    <p><strong className="text-gray-900">Furniture Cleaning</strong> – Dry dusting of furniture around the house.</p>
                    <p><strong className="text-gray-900">Walls & Ceiling</strong> – Cobweb removal, dusting of walls, dusting of lighting fixtures and fans.</p>
                    <p><strong className="text-gray-900">Floor Cleaning</strong> – Wet and dry mopping of complete premises.</p>
                    <p><strong className="text-gray-900">Window Cleaning</strong> – Cleaning all glass panes and windows that are safe to access.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="info" className="space-y-3 text-gray-700">
                  <p><strong className="text-gray-900">Service Duration:</strong> 4-6 hours depending on house size</p>
                  <p><strong className="text-gray-900">Team Size:</strong> 2-3 trained professionals</p>
                  <p><strong className="text-gray-900">Equipment:</strong> All equipment provided by KHFM</p>
                  <p><strong className="text-gray-900">Products Used:</strong> Eco-friendly, non-toxic cleaning agents</p>
                </TabsContent>
                
                <TabsContent value="reviews">                  <p className="text-gray-700">Customer reviews coming soon...</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">See what our happy customers have to say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div key={testimonial.name} className="group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 p-8 animate-fade-in" style={{ animationDelay: `${0.3 + idx * 0.05}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <Quote className="w-8 h-8 text-red-600/30 mb-4" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-red-600 font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.review}"</p>
                    
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-r from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-12 text-center animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Service?</h3>
              <p className="text-lg text-gray-700 mb-6 font-medium">Fill in your details above and confirm your booking via WhatsApp, or contact our team for more information.</p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
