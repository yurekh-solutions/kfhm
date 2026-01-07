import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Austin",
    location: "3BHK Shiv Sai Paradise Thane (West)",
    review:
      "I booked the services of KHFM for cleaning of my entire house, people who came were quite professional & well trained.",
    rating: 5,
  },
  {
    name: "Sulaksha Shetty",
    location: "3BHK Oberoi Splendor Jogeshwari (East)",
    review:
      "KHFM did a fantastic job & phenomenal hard work & gave me a spic & span house.",
    rating: 5,
  },
  {
    name: "Richa Mediratta",
    location: "2BHK Dreams Complex Bhandup (West)",
    review:
      "I like the services provided by KHFM, I would say they are worth spending your money.",
    rating: 3,
  },
  {
    name: "Priya Sharma",
    location: "4BHK Lodha Seascape Mahalaxmi",
    review:
      "Outstanding cleaning quality! The team is punctual, professional, and attention to detail is impeccable. Highly recommended!",
    rating: 4,
  },
  {
    name: "Rajesh Kumar",
    location: "3BHK Marvel Vega Thane",
    review:
      "Excellent service at affordable prices. KHFM is our trusted partner for maintaining a spotless home environment.",
    rating: 4,
  },
  {
    name: "Anjali Gupta",
    location: "2BHK Godrej Nature's Nest Sohna",
    review:
      "KHFM provides exceptional service with eco-friendly products. Very satisfied with their professional approach and results.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background blur (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600/15 text-red-500 px-5 py-2 rounded-full text-xs font-semibold border border-red-500/30">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Testimonials
          </div>

          <h2 className="leading-tight text-gray-900">
            See our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h2>
        </div>

        {/* GRID – Works for ALL screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-200/15 to-orange-200/15 rounded-3xl blur-xl group-hover:from-red-200/30 group-hover:to-orange-200/30"></div>

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-gray-200 group-hover:border-red-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-red-200/40 h-full flex flex-col">
                <Quote className="w-8 h-8 text-red-300/60 mb-4" />

                {/* User */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900">
                    {testimonial.name}
                  </h4>
                </div>

                <p className="text-red-700/80 text-xs font-medium mb-3 line-clamp-1">
                  {testimonial.location}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed italic mb-5 flex-1 font-normal">
                  “{testimonial.review}”
                </p>

                <div className="flex gap-1 pt-4 border-t border-red-200/50">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
