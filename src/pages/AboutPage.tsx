import React from 'react';
import { MapPin, ShieldCheck, Award, Users, Target, Compass, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D21F3C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            About MP Photo Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Empowering Creativity Through World-Class Imaging Solutions
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            MP Photo Guide is a premier destination for professional cameras, lenses, lighting systems, drones, audio equipment, and photography accessories.
          </p>
        </div>

        {/* Section 1: Company Story (Image Left, Text Right) */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=80"
                alt="MP Photo Guide Store & Equipment Showcase"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#121212] text-white p-5 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-2xl font-black text-[#D21F3C]">34+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Official Brand Partners</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D21F3C] uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Our Heritage & Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Our Company Story
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              With years of industry experience and a commitment to authenticity, we serve photographers, videographers, studios, production houses, educational institutions, and businesses across India.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our focus is not just on selling equipment—we help creators choose the right tools for every project. Operating out of our landmark retail outlet in Gandhi Nagar, Bangalore, we provide genuine products, expert guidance, and exceptional service to help you capture every moment with confidence.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-gray-900">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Authorized Retailer</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pan-India Freight</span>
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision (Alternating: Text Left, Image Right) */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D21F3C] uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Purpose & Future</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Mission & Vision
            </h2>

            <div className="space-y-4">
              <div className="bg-[#f9f9f9] p-5 rounded-2xl border border-gray-200">
                <h3 className="font-extrabold text-gray-900 text-base flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#D21F3C]" />
                  Our Mission
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  To empower creators across India with 100% genuine cameras, lenses, and production equipment while offering transparent advice, competitive rates, and reliable technical support.
                </p>
              </div>

              <div className="bg-[#f9f9f9] p-5 rounded-2xl border border-gray-200">
                <h3 className="font-extrabold text-gray-900 text-base flex items-center gap-2 mb-2">
                  <Compass className="w-4 h-4 text-[#D21F3C]" />
                  Our Vision
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  To be India's most dependable and respected imaging equipment ecosystem, setting the national benchmark for authenticity, customer trust, and specialized technical guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1000&q=80"
                alt="Precision Lenses and Camera Technology"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Industry Experience & Pillars */}
        <div className="bg-[#121212] text-white rounded-3xl p-8 lg:p-12 shadow-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D21F3C]">
              Why Creators Trust Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Decades of Combined Industry Expertise
            </h2>
            <p className="text-xs text-gray-400">
              Our team consists of active photographers, cinematographers, and studio lighting engineers who understand gear in real-world shooting conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-extrabold text-[#D21F3C]">100%</p>
              <p className="text-xs font-bold text-gray-300 mt-1 uppercase">Authentic Hardware</p>
              <p className="text-[11px] text-gray-400 mt-2">Direct from official national distributors</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-extrabold text-[#D21F3C]">Bangalore</p>
              <p className="text-xs font-bold text-gray-300 mt-1 uppercase">Gandhi Nagar Outlet</p>
              <p className="text-[11px] text-gray-400 mt-2">Physical store for hands-on equipment testing</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-extrabold text-[#D21F3C]">PAN India</p>
              <p className="text-xs font-bold text-gray-300 mt-1 uppercase">Insured Shipping</p>
              <p className="text-[11px] text-gray-400 mt-2">Fast express door delivery to all states</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-3xl font-extrabold text-[#D21F3C]">Full GST</p>
              <p className="text-xs font-bold text-gray-300 mt-1 uppercase">Tax Compliance</p>
              <p className="text-[11px] text-gray-400 mt-2">Eligible for input tax credit on corporate purchases</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-gray-900">
            Ready to Build or Upgrade Your Camera Kit?
          </h3>
          <p className="text-xs text-gray-600 max-w-xl mx-auto">
            Visit our Gandhi Nagar store in Bangalore or speak with our sales desk today for custom quotations and stock availability.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-[#D21F3C] hover:bg-[#b0172e] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
