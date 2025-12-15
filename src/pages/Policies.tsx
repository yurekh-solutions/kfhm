import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { FileText, AlertCircle, CreditCard, Clock, CheckCircle2, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <Layout>
      <PageBanner 
        title="Policies" 
        subtitle="Refund & Cancellation Policies"
        backgroundImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 min-h-screen">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Policies</h2>
            <p className="text-lg text-gray-600">Transparent and customer-friendly policies for peace of mind</p>
          </div>

          {/* Refund Policy */}
          <div className="mb-12 rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/70 border-2 border-white/80 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:bg-white/80 transition-all">
                  <CreditCard className="w-7 h-7 text-red-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Refund Policy</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Refund will be issued only if the client has cancelled a cleaning visit within the allowed 
                    time (<strong>24 hours</strong>) prior to the start of the cleaning session and a payment has been already 
                    taken by KHFM Hospitality & Facility Management Services Ltd.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Refund will be issued if a cleaning operative does not attend a cleaning visit, payment 
                    for which has been already collected by KHFM Hospitality & Facility Management Services Ltd.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds will only be issued after KHFM Hospitality & Facility Management Services Ltd 
                    have been allowed to rectify any problems or complaints.
                  </p>
                </div>

                <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-red-600 to-red-700 border-2 border-white/40 p-6 mt-8 shadow-lg">
                  <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Refund Details
                  </h4>
                  <ul className="space-y-3 text-white/90 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white/70"></span>
                      <strong>Refund Mode:</strong> Online Transfer (NET BANKING, RTGS, NEFT)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white/70"></span>
                      <strong>Refund Duration:</strong> 5 – 7 working days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-12 rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/70 border-2 border-white/80 flex items-center justify-center shadow-lg flex-shrink-0 hover:bg-white/80 transition-all">
                  <AlertCircle className="w-7 h-7 text-red-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cancellation Policy</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  In the event Client needs to cancel a scheduled cleaning appointment, <strong>forty-eight (48) 
                  hours' notice</strong> to KHFM Hospitality & Facility Management Services Ltd is required. 
                  Notice may be given by Email, SMS (text) or Phone.
                </p>

                <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200/50 p-6 shadow-md">
                  <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2 text-lg">
                    <AlertCircle className="w-5 h-5" />
                    Important Notice
                  </h4>
                  <ul className="space-y-3 text-sm text-red-900">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                      <span>Should Client fail to give forty-eight (48) hours' notice on more than one (1) occasion, 
                      Client must pay <strong>50%</strong> for the cancelled cleaning first offence and <strong>100%</strong> of 
                      the fee for cancelled cleanings thereafter.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                      <span>Cancelling more than three (3) consecutive cleanings or more than seven (7) total 
                      scheduled cleanings, without prior approval, will be deemed a material breach and allow 
                      KHFM to cancel the contract and/or pricing agreement or to seek legal remedies.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-4 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-red-100/60 to-red-50/60 border-2 border-white/80 p-6 shadow-md">
                  <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    In the event that KHFM Hospitality & Facility Management Services Ltd needs to cancel a 
                    scheduled cleaning appointment, <strong>24 hours' notice</strong> will be given to client.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="mb-12 rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/70 border-2 border-white/80 flex items-center justify-center shadow-lg flex-shrink-0 hover:bg-white/80 transition-all">
                  <FileText className="w-7 h-7 text-red-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  By booking any service with KHFM Cleaning Solutions, you agree to the following terms:
                </p>

                <div className="grid gap-4">
                  <div className="flex items-start gap-4 rounded-2xl backdrop-blur-xl bg-white/60 border-2 border-white/80 p-5 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">1</div>
                    <p className="text-gray-700 leading-relaxed pt-1">All services are subject to availability and confirmation.</p>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl backdrop-blur-xl bg-white/60 border-2 border-white/80 p-5 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">2</div>
                    <p className="text-gray-700 leading-relaxed pt-1">Prices may vary based on the actual condition of the premises upon inspection.</p>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl backdrop-blur-xl bg-white/60 border-2 border-white/80 p-5 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">3</div>
                    <p className="text-gray-700 leading-relaxed pt-1">Client must ensure safe access to the premises for our cleaning team.</p>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl backdrop-blur-xl bg-white/60 border-2 border-white/80 p-5 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">4</div>
                    <p className="text-gray-700 leading-relaxed pt-1">KHFM is not liable for any pre-existing damage to property.</p>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl backdrop-blur-xl bg-white/60 border-2 border-white/80 p-5 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">5</div>
                    <p className="text-gray-700 leading-relaxed pt-1">All cleaning products used are eco-friendly and safe for household use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-600 to-red-700 border-2 border-white/40 shadow-2xl p-8 md:p-12 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-white/0 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Questions About Our Policies?</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact our support team for any clarifications regarding our policies.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
