import React from 'react';
import { Logo } from './Logo';
import { Instagram, MapPin, Phone, Mail, Globe, ArrowUpRight, ShieldCheck, Truck, Clock } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handleNav = (id: string) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramUrl = "https://www.instagram.com/_onestop_solution__?igsh=MXUzcmlkOWh3OHljZg==";

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Authorized Brands Strip (Matching Theme HTML) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 mb-8 border-b border-gray-200/80">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 shrink-0">
              Authorized Dealer
            </span>
            <div className="flex flex-wrap gap-6 items-center opacity-60 grayscale">
              <span className="text-xs font-black italic tracking-tighter">SONY</span>
              <span className="text-xs font-black tracking-tighter uppercase">Canon</span>
              <span className="text-xs font-black tracking-tighter">Nikon</span>
              <span className="text-xs font-black tracking-tighter uppercase">DJI</span>
              <span className="text-xs font-black tracking-tighter uppercase">Leica</span>
              <span className="text-xs font-black tracking-tighter uppercase">GODOX</span>
            </div>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-pink-600 transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>@_onestop_solution__</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Top Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 mb-10 border-b border-gray-200">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-2xs border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">100% Genuine Gear</h4>
              <p className="text-xs text-slate-500">Official GST invoice & brand warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-2xs border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Pan-India Freight</h4>
              <p className="text-xs text-slate-500">Fast insured shipping across all states</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-2xs border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Bangalore Retail Store</h4>
              <p className="text-xs text-slate-500">Gandhi Nagar • Hands-on testing & sales</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
          {/* Col 1: Logo & About */}
          <div className="flex flex-col gap-3">
            <Logo size="md" />
            <p className="text-xs text-slate-500 leading-relaxed mt-1">
              India’s trusted destination for professional mirrorless camera bodies, cinema lenses, lighting, video gear, and studio equipment.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About Us & Legacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Products Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlet Info */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
              Outlet Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">MP Photo Guide</p>
                  <p className="text-slate-500">Gandhi Nagar, Bangalore - 560009</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-600 font-medium">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="mailto:sales@mpphotoguide.com" className="hover:text-blue-600">
                  sales@mpphotoguide.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Delivery */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
              Pan-India Coverage
            </h4>
            <p className="text-xs text-slate-500 mb-2.5">
              Distributing genuine imaging equipment across Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Kolkata & nationwide.
            </p>
            <span className="inline-block bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded text-[10px]">
              PAN India Delivery Available
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} MP PHOTO GUIDE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Gandhi Nagar, Bangalore Outlet</span>
            <span>•</span>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              @_onestop_solution__
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
