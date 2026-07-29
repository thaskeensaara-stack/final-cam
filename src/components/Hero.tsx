import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onPageChange: (page: string) => void;
  onShopByBrandClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPageChange, onShopByBrandClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50/50 to-gray-50 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Official Content */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>MP Photo Guide • Premier Imaging Hub</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-950 tracking-tight">
              Professional Photography <br className="hidden sm:inline" />
              Starts Here
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-700">
              India's Trusted Destination for Cameras, Lenses & Professional Imaging Equipment
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
              At MP Photo Guide, we bring together the world's leading photography and videography brands under one roof. Whether you're a professional filmmaker or an enthusiast, we provide genuine products, expert guidance, and exceptional service to help you capture every moment with confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-2 items-center">
              <button
                onClick={() => onPageChange('products')}
                className="bg-slate-950 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm active:scale-95 flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>

              <button
                onClick={() => {
                  if (onShopByBrandClick) {
                    onShopByBrandClick();
                  } else {
                    onPageChange('products');
                  }
                }}
                className="border border-slate-200 bg-white px-6 py-3 rounded-md text-sm font-semibold text-slate-900 hover:bg-gray-50 transition-all shadow-2xs active:scale-95"
              >
                Shop by Brand
              </button>

              <button
                onClick={() => onPageChange('contact')}
                className="text-slate-900 hover:text-blue-600 font-semibold text-sm tracking-wide px-3 py-3 flex items-center gap-1.5 transition-colors group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600" />
              </button>
            </div>

            {/* Location Tagline */}
            <div className="pt-4 mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 border-t border-slate-200/80">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Gandhi Nagar, Bangalore | Delivering Across India</span>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">100% Genuine</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">Brand Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">Pan-India Freight</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual with Soft Glow */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
                alt="Professional Mirrorless Camera and Cinema Equipment Setup"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-[380px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                    Gandhi Nagar, Bangalore
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Official Retail Partner for 30+ Global Brands
                  </p>
                </div>
                <div className="bg-slate-950 text-white px-3 py-1.5 rounded-md text-xs font-semibold shrink-0">
                  Bangalore Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
