import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/home/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Here",
    value: "admin@khfm.co.in",
    link: "mailto:admin@khfm.co.in",
  },
  {
    icon: MapPin,
    title: "Visit Here",
    value: "01, Nirma Plaza, Makhwana Road, Marol Naka, Andheri (East), Mumbai-400059",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Call Here",
    value: "+91 9987574333",
    link: "tel:+919987574333",
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageBanner title="Contact Us" subtitle="We're here to help you" />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="section-label">Contact Us</span>
            <p className="text-muted-foreground mt-6">
              At KHFM Cleaning Solutions, we are committed to providing you with the best cleaning 
              services while maintaining the highest standards of customer satisfaction. If you have 
              any questions, need assistance, or want to book a cleaning service, feel free to reach 
              out to us. Our team is always ready to help you with your cleaning needs.
            </p>
            <p className="text-muted-foreground mt-4">
              We believe in providing eco-friendly services, because your home, office, or commercial 
              space deserves cleaning solutions that are both effective and safe for the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                className="bg-card rounded-xl p-6 text-center card-shadow hover:border-primary border border-transparent transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Eco Banner */}
      <section className="py-8">
        <div className="container text-center">
          <div className="bg-secondary text-secondary-foreground rounded-full py-4 px-8 inline-block">
            <span className="font-semibold">🌿 Always use Eco-Friendly Services & Save our Nature</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
