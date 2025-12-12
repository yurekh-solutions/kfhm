import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Star, Quote, ArrowLeft } from "lucide-react";
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
      <PageBanner title="Service Details" />

      <section className="py-12">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          {/* Service Description */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8">
            <p className="text-sm text-foreground">
              Is your flat ready for new tenants or your personal move-in? Whether you're moving in or out, 
              KHFM Cleaning Solutions provides a comprehensive deep cleaning service for empty flats. 
              Our professional cleaning services ensure that every corner of your home is spotless, hygienic, and fresh.
            </p>
          </div>

          {/* Booking Card */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl overflow-hidden card-shadow">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {/* House Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">House Type</label>
                    <Select value={houseType} onValueChange={setHouseType}>
                      <SelectTrigger className="bg-muted/50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-card">
                        {houseTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Enter Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-muted/50",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "dd - MM - yyyy") : "dd - mm - yyyy"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slot */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2">Choose Time</label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger className="bg-muted/50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-card">
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-center justify-between mb-6 p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Price</p>
                    <p className="text-2xl font-bold text-primary">₹{finalPrice.toLocaleString()}</p>
                  </div>
                  <Button size="lg" onClick={handleBookNow} className="px-8">
                    Book via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="bg-muted/50 p-1">
              <TabsTrigger value="description">Product Description</TabsTrigger>
              <TabsTrigger value="info">Additional Information</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none text-muted-foreground">
                <p>
                  <strong>Toilet Steam Cleaning</strong> – Disinfecting and Steam Cleaning of Bathrooms and Toilets.
                </p>
                <p>
                  <strong>Kitchen Steam Cleaning</strong> – Wipe and disinfect all exterior appliances electrical fixtures. 
                  Clean basin, kitchen platform and closets from outside.
                </p>
                <p>
                  <strong>Furniture Cleaning</strong> – Dry dusting of furniture around the house.
                </p>
                <p>
                  <strong>Walls & Ceiling</strong> – Cobweb removal, dusting of walls, dusting of lighting fixtures and fans.
                </p>
                <p>
                  <strong>Floor Cleaning</strong> – Wet and dry mopping of complete premises.
                </p>
                <p>
                  <strong>Window Cleaning</strong> – Cleaning all glass panes and windows that are safe to access.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="info" className="mt-6">
              <div className="text-muted-foreground">
                <p><strong>Service Duration:</strong> 4-6 hours depending on house size</p>
                <p><strong>Team Size:</strong> 2-3 trained professionals</p>
                <p><strong>Equipment:</strong> All equipment provided by KHFM</p>
                <p><strong>Products Used:</strong> Eco-friendly, non-toxic cleaning agents</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <p className="text-muted-foreground">Customer reviews coming soon...</p>
            </TabsContent>
          </Tabs>

          {/* Testimonials */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">See what our happy customers have to say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-card rounded-xl p-6 card-shadow">
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-sm">{testimonial.name}</span>
                  </div>
                  <p className="text-primary text-xs font-medium mb-2">{testimonial.location}</p>
                  <p className="text-muted-foreground text-sm mb-3">{testimonial.review}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eco Banner */}
          <div className="text-center">
            <div className="bg-secondary text-secondary-foreground rounded-full py-4 px-8 inline-block">
              <span className="font-semibold">🌿 Always use Eco-Friendly Services & Save our Nature</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
