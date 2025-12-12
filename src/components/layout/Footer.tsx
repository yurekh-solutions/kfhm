import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";

const pageLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "Policies", path: "/policies" },
];

export function Footer() {
  return (
    <footer className="bg-red-600 text-white relative overflow-hidden"
    style={{
        backgroundImage: "url('/src/assets/img/banner.jpg')", // <-- your image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Banner Background Image */}
  <div className="absolute inset-0 bg-red-600/80"></div>


      {/* Main footer content */}
      <div className="container relative py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 relative z-10">
          {/* Logo with White Rounded Background */}
          <div>
            <div className="mb-6">
              <div className="bg-white rounded-2xl p-4 w-fit">
                <img 
                  src="/src/assets/img/logo.png" 
                  alt="KHFM Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed font-normal">
              KHFM Cleaning Solution is a Division of KHFM Hospitality & Facility Management Services Ltd., 
              one of the Oldest Housekeeping & Cleaning Company established in 1983 in Mumbai.
            </p>
          </div>

          {/* Pages/Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Pages</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-yellow-300 transition-colors text-sm font-normal hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us & Working Hours Combined */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Contact us</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                <span className="font-normal">01, Nirma Plaza, Makhwana Road, Marol Naka, Andheri (East), Mumbai-400059</span>
              </li>
              <li className="font-normal">
                <span className="font-bold">Call Us:</span> +91 9987574333 . 8655663022
              </li>
              <li className="font-normal">
                <span className="font-bold">Email:</span> enq@khfm.in
              </li>
              <li className="font-normal">
                <span className="font-bold">Mon till Sat:</span> 9:00 AM till 6:00 PM
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-bold text-xl mb-4 text-white">Working Hours</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 flex-shrink-0 text-white" />
                  <span className="font-normal">Sunday: Closed</span>
                </li>
                <li className="font-normal">Mon - Sat: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-normal text-white/90">Copyright © 2025 All rights reserved | KHFM Cleaning Solution</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-bold text-white inline-block mr-2">Powered by</p>
              <a href="https://www.yurekh.com" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-yellow-300 hover:text-yellow-400 transition-colors inline-block">
                YurekhSolutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
