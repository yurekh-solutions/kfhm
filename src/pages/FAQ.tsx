import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I have Housemaid. Do I still need your service?",
    answer: "Daily cleaning by your Maid does not include those critical areas due to lack of knowledge/expertise. Not attending these areas for months may lead to breeding of bacteria causing different diseases. Our trained KHFM Cleaning Solution experts use latest cleaning equipment, Eco-Friendly chemicals & Techniques to clean your critical areas.",
  },
  {
    question: "How to book your service? How much time does it take?",
    answer: "You can book our services through WhatsApp, phone call, or email. Once booked, our team will arrive at your scheduled time. The duration depends on the service and area size - typically 2-6 hours for most residential services.",
  },
  {
    question: "Can I opt for Annual Contract with Monthly services?",
    answer: "Yes, we can offer you Annual Package with monthly services for House Cleaning, Pest Control Service, and more. This helps you maintain a clean and pest-free environment throughout the year.",
  },
  {
    question: "Is your team verified & trusted?",
    answer: "Yes, all our staff members undergo thorough background verification before joining. They are trained professionals with years of experience in their respective fields.",
  },
  {
    question: "How can I Gift your Service?",
    answer: "You can gift our cleaning services to your loved ones. Simply contact us with the recipient's details and preferred service, and we'll arrange everything. Gift vouchers are also available.",
  },
  {
    question: "Is there any Rewards for referrals?",
    answer: "Yes! We have a referral program where you can earn rewards when you refer our services to friends and family. Contact us for more details on current referral offers.",
  },
  {
    question: "Can you customize your service on the basis of our requirement?",
    answer: "Absolutely! We understand that every space is unique. Our team can customize cleaning packages based on your specific requirements, schedule, and budget.",
  },
  {
    question: "Is your service safe for Sr. Citizens, Small children, kids, pets, etc?",
    answer: "Yes, we use eco-friendly and non-toxic cleaning products that are safe for senior citizens, children, and pets. Our products are carefully selected to ensure they are effective yet gentle.",
  },
  {
    question: "Which cities do you provide your services?",
    answer: "We currently provide our services across Mumbai and surrounding areas including Thane, Navi Mumbai, and other regions. We are expanding our service areas continuously.",
  },
  {
    question: "How much time does it take to clean a flat?",
    answer: "The time depends on the size and condition of the flat. Generally, a 1BHK takes 3-4 hours, 2BHK takes 4-5 hours, and 3BHK takes 5-6 hours for deep cleaning. Regular cleaning may take less time.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <PageBanner title="FAQ" subtitle="Frequently Asked Questions" />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">FAQ</span>
              <p className="text-muted-foreground mt-6">
                FAQs provide quick answers to common questions. They are structured for easy navigation, 
                allowing users to browse, search, and find solutions instantly. If more help is needed, 
                contact us options are available.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 border card-shadow"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default FAQ;
