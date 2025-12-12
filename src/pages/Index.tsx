import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactForm } from "@/components/home/ContactForm";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactForm />
    </Layout>
  );
};

export default Index;
