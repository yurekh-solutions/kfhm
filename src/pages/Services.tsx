import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ServiceCard } from "@/components/home/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Layout>
      <PageBanner title="Our Services" subtitle="Professional cleaning solutions for every need" />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Services;
