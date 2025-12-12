import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { WhyKHFMSection } from "@/components/about/WhyKHFMSection";
import { CheckCircle } from "lucide-react";

const services = [
  "Special Cleaning for Offices",
  "Special Cleaning for Residences",
  "Window & Toilet cleaning Services",
  "Pest Control Services",
  "Spring Cleaning Services of Housing Societies, Hotels, Clubs, Mall, etc.",
  "Chair, Sofa, Carpet & Mattress Shampoo cleaning & disinfecting Staff",
];

const About = () => {
  return (
    <Layout>
      <PageBanner title="About Us" />

      <WhyKHFMSection />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop"
                alt="KHFM Cleaning Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <span className="section-label">About Us</span>
              <h2 className="text-3xl font-bold mt-4 mb-6 text-foreground">KHFM Cleaning Solution</h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  KHFM Cleaning Solution is a Division of KHFM Hospitality & Facility Management Services Ltd., 
                  which is one of the Oldest Housekeeping & Cleaning Company established in 1983 in Mumbai.
                </p>
                <p>
                  KHFM Cleaning Solutions is one of premier cleaning services provider in India. We want to 
                  ensure that a lasting impression is made by the quality of your business, and we know that 
                  the first indication of quality is cleanliness. We are committed to providing the most 
                  professional and thorough janitorial services.
                </p>
                <p>
                  KHFM Cleaning Solutions is dedicated to shortening your to-do list, so you can worry about 
                  more important things. Though our specialty is cleaning service, we are capable of performing 
                  all of the following services:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-muted-foreground">
                KHFM Cleaning Solutions provides expert home and commercial cleaners, trained in proper 
                janitorial methods and techniques to satisfactorily maintain the facilities during the 
                scheduled times. Our cleaners understand the importance of maintaining a clean and 
                professional atmosphere. During 32 years, we spread into PAN India with work force of 
                approx. 3500 nos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Banner */}
      <section className="py-8">
        <div className="container">
          <div className="bg-secondary text-secondary-foreground rounded-full py-4 px-8 text-center inline-block">
            <span className="font-semibold">🌿 Always use Eco-Friendly Services & Save our Nature</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
