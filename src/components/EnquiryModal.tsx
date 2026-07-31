import React, { useState } from 'react';
import { Product } from '../types';
import { X, Send, PhoneCall, CheckCircle, MessageSquare, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  product: Product | null;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [message, setMessage] = useState(`Hi MP Photo Guide team, I would like to check availability, pricing, and warranty details for ${product.name}.`);
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppEnquiry = () => {
    const defaultText = `Hi MP Photo Guide! I am interested in inquiring about:\n\n*Product:* ${product.name}\n*Brand:* ${product.brand}\n*Price:* ${product.priceTag || 'Quote Request'}\n\n*Name:* ${customerName || 'Customer'}\n*Phone:* ${customerPhone || 'Not provided'}\n*Note:* ${message}`;
    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-950 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h3 className="font-bold text-lg tracking-wide">Product Enquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* Selected Product Summary Card */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80';
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain p-1 rounded-lg bg-white border border-slate-200 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                  {product.brand}
                </span>
                <span className="text-xs text-slate-500">{product.category}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">{product.name}</h4>
              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{product.description}</p>
              {product.priceTag && (
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  Est. Price: <span className="text-blue-600">{product.priceTag}</span>
                </p>
              )}
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-gray-900 text-xl">Enquiry Received!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you <span className="font-bold text-gray-900">{customerName || 'there'}</span>. Our product specialist at Gandhi Nagar, Bangalore will get in touch with you shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Also Connect on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm px-6 py-3 rounded-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Instant WhatsApp Action */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    Instant WhatsApp Quote
                  </h5>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Connect directly with our Bangalore sales desk for real-time stock availability & best pricing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
                <span className="relative bg-white px-3 text-xs text-gray-400 uppercase font-semibold">
                  Or Submit Form Below
                </span>
              </div>

              {/* Form Submission */}
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Specific Requirement / Questions
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Gandhi Nagar Bangalore Outlet • Guaranteed Response</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-blue-400" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
