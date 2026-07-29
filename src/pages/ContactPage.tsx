import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Instagram, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Product Enquiry / Quote');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const instagramUrl = "https://www.instagram.com/_onestop_solution__?igsh=MXUzcmlkOWh3OHljZg==";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hi MP Photo Guide Bangalore!\n\nName: ${name || 'Customer'}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\nMessage: ${message || 'I have an enquiry regarding camera equipment.'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D21F3C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact MP Photo Guide Bangalore
          </h1>
          <p className="text-sm text-gray-600">
            Visit our retail store in Gandhi Nagar, Bangalore, or reach out to our sales desk for instant pricing, stock verification, and Pan-India freight dispatch.
          </p>
        </div>

        {/* Main Grid: Form + Business Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
                Send Us a Direct Message
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Fill out the details below for formal quotes, bulk corporate pricing, or equipment availability.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl">Thank You for Reaching Out!</h3>
                <p className="text-xs text-gray-700 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been routed to our Gandhi Nagar Bangalore sales desk. We will respond within 1 business hour.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Instantly on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-5 py-3 rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs font-medium rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs font-medium rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs font-medium rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Enquiry Purpose
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs font-medium rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C] bg-white"
                    >
                      <option>Product Enquiry / Price Quote</option>
                      <option>Camera Body or Lens Purchase</option>
                      <option>Studio & Lighting Setup</option>
                      <option>Bulk Corporate / Institutional Order</option>
                      <option>After-Sales Warranty & Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Requirements / Equipment Models
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify the gear, lens models, or studio equipment you are interested in..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs font-medium rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Sales Desk</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#D21F3C] hover:bg-[#b0172e] text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Business Info & Instagram */}
          <div className="lg:col-span-5 space-y-6">
            {/* Store Information Card */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-lg font-extrabold text-gray-900 border-b border-gray-100 pb-3">
                Business Information
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D21F3C] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-sm">MP Photo Guide</h3>
                    <p className="text-gray-600">Deals in All Types of Cameras & Photographic Goods</p>
                    <p className="font-bold text-gray-900 mt-1">Gandhi Nagar, Bangalore, Karnataka - 560009</p>
                    <span className="inline-block bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px] mt-1">
                      Delivering Across India
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D21F3C] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Direct Sales Call</p>
                    <a href="tel:+919876543210" className="font-extrabold text-gray-900 hover:text-[#D21F3C]">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D21F3C] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Email Queries</p>
                    <a href="mailto:sales@mpphotoguide.com" className="font-extrabold text-gray-900 hover:text-[#D21F3C]">
                      sales@mpphotoguide.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D21F3C] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Official Website</p>
                    <a href="https://www.mpphotoguide.com" target="_blank" rel="noopener noreferrer" className="font-extrabold text-gray-900 hover:text-[#D21F3C]">
                      www.mpphotoguide.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D21F3C] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Store Hours</p>
                    <p className="font-bold text-gray-900">Mon - Sat: 10:00 AM – 8:30 PM</p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Instagram Connect Card */}
            <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white p-7 rounded-3xl shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-wide">Official Instagram Handle</h3>
                  <p className="text-xs text-purple-200">@_onestop_solution__</p>
                </div>
              </div>

              <p className="text-xs text-purple-100 leading-relaxed">
                Follow our official Instagram for daily new stock arrivals, unboxing clips, lens tests, and exclusive store offers in Bangalore!
              </p>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-purple-950 font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Visit Instagram Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Location Section */}
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg">
                Interactive Outlet Map • Gandhi Nagar, Bangalore
              </h3>
              <p className="text-xs text-gray-600">
                Easily locate our physical store for in-person consultations and equipment pick-ups.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#D21F3C]">
              <ShieldCheck className="w-4 h-4" />
              <span>Bangalore Central Outlet</span>
            </div>
          </div>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
            <iframe
              title="MP Photo Guide Gandhi Nagar Bangalore Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.989714881775!2d77.5768!3d12.9724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c90f23f3%3A0xf6398059bf0cf7a3!2sGandhi%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
