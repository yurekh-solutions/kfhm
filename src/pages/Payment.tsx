import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CreditCard, Smartphone, Building2, CheckCircle, Shield, Lock, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WHATSAPP_NUMBER } from "@/data/services";
import { format } from "date-fns";

interface PaymentData {
  serviceName: string;
  amount: number;
  houseType: string;
  date: string;
  timeSlot: string;
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData = location.state as PaymentData;

  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking" | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    bankName: "",
  });

  // Redirect if no payment data
  useEffect(() => {
    if (!paymentData) {
      navigate("/services");
    }
  }, [paymentData, navigate]);

  if (!paymentData) {
    return null;
  }

  const handlePaymentMethodSelect = (method: "card" | "upi" | "netbanking") => {
    setPaymentMethod(method);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      setShowSuccessPopup(true);
      
      // Send booking confirmation to WhatsApp after 2 seconds
      setTimeout(() => {
        const message = encodeURIComponent(
          `Hi, I have completed payment for:\n\n` +
          `Service: ${paymentData.serviceName}\n` +
          `House Type: ${paymentData.houseType}\n` +
          `Date: ${paymentData.date}\n` +
          `Time: ${paymentData.timeSlot}\n` +
          `Amount Paid: ₹${paymentData.amount.toLocaleString()}\n` +
          `Payment Method: ${paymentMethod === "card" ? "Card" : paymentMethod === "upi" ? "UPI" : "Net Banking"}\n\n` +
          `Please confirm my booking.`
        );

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
        
        // Redirect to home after WhatsApp opens
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }, 2000);
    }, 1500);
  };

  return (
    <Layout>
      <PageBanner 
        title="Secure Payment" 
        subtitle="Complete your booking securely"
        backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 min-h-screen">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Service Details
          </button>

          {!showSuccessPopup ? (
            <>
              {/* Booking Summary */}
              <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 mb-8 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-normal">Service</p>
                      <p className="text-base font-semibold text-gray-900">{paymentData.serviceName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-normal">House Type</p>
                      <p className="text-base font-semibold text-gray-900">{paymentData.houseType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-normal">Date</p>
                      <p className="text-base font-semibold text-gray-900">{paymentData.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-normal">Time Slot</p>
                      <p className="text-base font-semibold text-gray-900">{paymentData.timeSlot}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t-2 border-white/40 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-normal">Total Amount</p>
                      <p className="text-3xl font-bold text-gray-900">₹{paymentData.amount.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm font-semibold">100% Secure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              {!paymentMethod && (
                <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Payment Method</h2>
                    <div className="space-y-4">
                      {/* Card Payment */}
                      <button
                        onClick={() => handlePaymentMethodSelect("card")}
                        className="w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-102 text-left"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">Credit / Debit Card</h4>
                            <p className="text-sm text-gray-600 font-normal">Pay using Visa, Mastercard, Rupay</p>
                          </div>
                          <div className="text-red-600 transform group-hover:translate-x-1 transition-transform">→</div>
                        </div>
                      </button>

                      {/* UPI Payment */}
                      <button
                        onClick={() => handlePaymentMethodSelect("upi")}
                        className="w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-102 text-left"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">UPI Payment</h4>
                            <p className="text-sm text-gray-600 font-normal">GPay, PhonePe, Paytm & more</p>
                          </div>
                          <div className="text-red-600 transform group-hover:translate-x-1 transition-transform">→</div>
                        </div>
                      </button>

                      {/* Net Banking */}
                      <button
                        onClick={() => handlePaymentMethodSelect("netbanking")}
                        className="w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/80 border-2 border-white/80 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-102 text-left"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">Net Banking</h4>
                            <p className="text-sm text-gray-600 font-normal">All major banks supported</p>
                          </div>
                          <div className="text-red-600 transform group-hover:translate-x-1 transition-transform">→</div>
                        </div>
                      </button>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 bg-blue-50/50 rounded-xl p-4 border border-blue-200/50">
                      <Lock className="w-4 h-4 text-blue-600" />
                      <span className="font-normal">Your payment information is encrypted and secure</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Form */}
              {paymentMethod && (
                <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>
                  <form onSubmit={handlePayment} className="relative z-10">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod(null)}
                      className="text-red-600 hover:text-red-700 font-semibold text-sm mb-6 flex items-center gap-1"
                    >
                      ← Change Payment Method
                    </button>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Card Number</label>
                          <Input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                            required
                            className="text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Cardholder Name</label>
                          <Input
                            type="text"
                            placeholder="John Doe"
                            value={formData.cardName}
                            onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                            required
                            className="text-base"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Expiry Date</label>
                            <Input
                              type="text"
                              placeholder="MM/YY"
                              maxLength={5}
                              value={formData.expiryDate}
                              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                              required
                              className="text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">CVV</label>
                            <Input
                              type="password"
                              placeholder="123"
                              maxLength={3}
                              value={formData.cvv}
                              onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                              required
                              className="text-base"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">UPI ID</label>
                        <Input
                          type="text"
                          placeholder="yourname@upi"
                          value={formData.upiId}
                          onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                          required
                          className="text-base"
                        />
                      </div>
                    )}

                    {paymentMethod === "netbanking" && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Select Bank</label>
                        <select
                          value={formData.bankName}
                          onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-900 font-normal focus:outline-none focus:border-red-600 transition-colors text-base"
                        >
                          <option value="">Choose your bank</option>
                          <option value="SBI">State Bank of India</option>
                          <option value="HDFC">HDFC Bank</option>
                          <option value="ICICI">ICICI Bank</option>
                          <option value="Axis">Axis Bank</option>
                          <option value="Kotak">Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 rounded-xl mt-6 text-base"
                    >
                      Pay ₹{paymentData.amount.toLocaleString()}
                    </Button>
                  </form>
                </div>
              )}
            </>
          ) : (
            /* Success Popup */
            <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-white border-2 border-white/80 shadow-2xl p-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-gray-900 leading-tight mb-3">Payment Successful!</h2>
              <p className="text-base text-gray-600 font-normal mb-6">
                Your booking has been confirmed. Redirecting to WhatsApp for confirmation...
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-600 font-normal mb-1">Amount Paid</p>
                <p className="text-3xl font-bold text-gray-900">₹{paymentData.amount.toLocaleString()}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Opening WhatsApp...</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
