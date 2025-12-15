// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Phone, Mail, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About us", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Blog", path: "/blog" },
//   { name: "Contact us", path: "/contact" },
//   { name: "FAQ", path: "/faq" },
//   { name: "Policies", path: "/policies" },
// ];

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       {/* Top bar */}
//       <div className="bg-red-600 text-white py-2 text-sm">
//         <div className="container flex flex-wrap items-center justify-between gap-2">
//           <p className="hidden md:block font-medium text-xs lg:text-sm">
//             An ISO 9001:2008, ISO 14001:2004 & OHSAS 18001:2007 Certified Organization
//           </p>
//           <div className="flex items-center gap-4 ml-auto">
//             <a href="tel:+919987574333" className="flex items-center gap-1 hover:opacity-80 transition">
//               <Phone className="w-4 h-4" />
//               <span>9987574333</span>
//             </a>
//             <a href="mailto:admin@khfm.co.in" className="flex items-center gap-1 hover:opacity-80 transition">
//               <Mail className="w-4 h-4" />
//               <span className="hidden sm:inline">admin@khfm.co.in</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main nav */}
//       <nav className="bg-background border-b shadow-sm">
//         <div className="container flex items-center justify-between py-4">
//           <Link to="/" className="flex items-center">
//             <img 
//               src="/src/assets/img/logo.png" 
//               alt="KHFM" 
//               className="h-12 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop nav */}
//           <div className="hidden lg:flex items-center gap-5">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors hover:text-primary ${
//                   location.pathname === link.path ? "text-primary" : "text-foreground"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white" asChild>
//               <Link to="/contact">
//                 Enquire Now
//               </Link>
//             </Button>

//             {/* Mobile menu button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile nav */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t bg-background animate-fade-in">
//             <div className="container py-4 space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
//                     location.pathname === link.path
//                       ? "bg-accent text-primary"
//                       : "hover:bg-muted"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "Policies", path: "/policies" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* TOP BAR */}
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-white">
            <a href="#" className="hover:opacity-80"><Facebook size={16} /></a>
            <a href="#" className="hover:opacity-80"><Twitter size={16} /></a>
            <a href="#" className="hover:opacity-80"><Youtube size={16} /></a>
            <a href="#" className="hover:opacity-80"><Linkedin size={16} /></a>
          </div>

          {/* ISO TEXT */}
          <p className="hidden lg:block font-medium ml-80 text-xs">
            An ISO 9001:2008, ISO 14001:2004 & OHSAS 18001:2007 Certified Organization
          </p>

          {/* CONTACT SECTION */}
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+919987574333" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="w-4 h-4" />
              <span>9987574333</span>
            </a>
            <a href="mailto:admin@khfm.co.in" className="flex items-center gap-1 hover:opacity-80">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">admin@khfm.co.in</span>
            </a>
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-background border-b shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">

          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="KHFM" className="h-12 md:h-14 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold  gap-10 transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link to="/contact">Enquire Now</Link>
            </Button>

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background animate-fade-in">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-accent text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
