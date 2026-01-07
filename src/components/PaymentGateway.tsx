import { useState } from "react";
import { CreditCard, Smartphone, Building2, CheckCircle, X, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PaymentGatewayProps {
  amount: number;
  serviceName: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function PaymentGateway({ amount, serviceName, onSuccess, onCancel }: PaymentGatewayProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking" | null>(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    bankName: "",
  });

  const handlePaymentMethodSelect = (method: "card" | "upi" | "netbanking") => {
    setPaymentMethod(method);
    setShowPaymentForm(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setShowPaymentForm(false);
      setShowSuccessPopup(true);
      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      {!showSuccessPopup ? (
        <div className="relative max-w-2xl w-full mx-4 animate-popup">
          <div className="bg-gradient-to-br from-white via-red-50/30 to-white rounded-3xl shadow-2xl overflow-hidden border-2 border-white/80 backdrop-blur-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-white/0"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Secure Payment</h2>
                  <p className="text-white/90 text-sm">Complete your booking for {serviceName}</p>
                </div>
                <button
                  onClick={onCancel}
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Amount Display */}
            <div className="bg-gradient-to-br from-red-50/50 to-white p-6 border-b-2 border-red-100/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1">Total Amount</p>
                  <p className="text-3xl font-bold text-gray-900">₹{amount.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-semibold">100% Secure</span>
                </div>
              </div>
            </div>

            {!showPaymentForm ? (
              /* Payment Method Selection */
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Choose Payment Method</h3>
                <div className="space-y-4">
                  {/* Card Payment */}
                  <button
                    onClick={() => handlePaymentMethodSelect("card")}
                    className="w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border-2 border-white/80 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-102 text-left"
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
                    className="w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border-2 border-white/80 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-102 text-left"
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
                    className="w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border-2 border-white/80 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-102 text-left"
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
            ) : (
              /* Payment Form */
              <form onSubmit={handlePayment} className="p-8">
                <button
                  type="button"
                  onClick={() => setShowPaymentForm(false)}
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
                  Pay ₹{amount.toLocaleString()}
                </Button>
              </form>
            )}
          </div>
        </div>
      ) : (
        /* Success Popup */
        <div className="relative max-w-md w-full mx-4 animate-popup">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-base text-gray-600 font-normal mb-6">
              Your booking has been confirmed. We'll contact you shortly.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 font-normal mb-1">Amount Paid</p>
              <p className="text-2xl font-bold text-gray-900">₹{amount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
