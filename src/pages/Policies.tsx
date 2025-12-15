import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { FileText, AlertCircle, CreditCard, Clock } from "lucide-react";

const Policies = () => {
  return (
    <Layout>
      <PageBanner 
        title="Policies" 
        subtitle="Refund & Cancellation Policies"
        backgroundImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop"
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-4xl">
          {/* Refund Policy */}
          <div className="mb-12 glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-lg animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Refund Policy</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Refund will be issued only if the client has cancelled a cleaning visit within the allowed 
                  time (24 hours) prior to the start of the cleaning session and a payment has been already 
                  taken by KHFM Hospitality & Facility Management Services Ltd.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Refund will be issued if a cleaning operative does not attend a cleaning visit, payment 
                  for which has been already collected by KHFM Hospitality & Facility Management Services Ltd.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Refunds will only be issued after KHFM Hospitality & Facility Management Services Ltd 
                  have been allowed to rectify any problems or complaints.
                </p>
              </div>

              <div className="glass-effect-dark text-white rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-2">Refund Details:</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Refund Mode:</strong> Online Transfer (NET BANKING, RTGS, NEFT)</li>
                  <li><strong>Refund Duration:</strong> 5 – 7 working days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-12 glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Cancellation Policy</h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                In the event Client needs to cancel a scheduled cleaning appointment, <strong>forty-eight (48) 
                hours' notice</strong> to KHFM Hospitality & Facility Management Services Ltd is required. 
                Notice may be given by Email, SMS (text) or Phone.
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold text-destructive mb-2">Important Notice:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Should Client fail to give forty-eight (48) hours' notice on more than one (1) occasion, 
                    Client must pay <strong>50%</strong> for the cancelled cleaning first offence and <strong>100%</strong> of 
                    the fee for cancelled cleanings thereafter.</li>
                  <li>• Cancelling more than three (3) consecutive cleanings or more than seven (7) total 
                    scheduled cleanings, without prior approval, will be deemed a material breach and allow 
                    KHFM to cancel the contract and/or pricing agreement or to seek legal remedies.</li>
                </ul>
              </div>

              <div className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  In the event that KHFM Hospitality & Facility Management Services Ltd needs to cancel a 
                  scheduled cleaning appointment, <strong>24 hours' notice</strong> will be given to client.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="mb-12 glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Terms of Service</h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                By booking any service with KHFM Cleaning Solutions, you agree to the following terms:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0">1</span>
                  <span>All services are subject to availability and confirmation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0">2</span>
                  <span>Prices may vary based on the actual condition of the premises upon inspection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0">3</span>
                  <span>Client must ensure safe access to the premises for our cleaning team.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0">4</span>
                  <span>KHFM is not liable for any pre-existing damage to property.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0">5</span>
                  <span>All cleaning products used are eco-friendly and safe for household use.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Eco Banner */}
         
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
