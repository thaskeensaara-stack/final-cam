import React from 'react';
import { Camera, Film, Building2, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  const customerSegments = [
    { name: 'Professional Photographers', icon: Camera, count: '10,000+' },
    { name: 'Filmmakers & Cinematographers', icon: Film, count: '3,500+' },
    { name: 'Commercial Studios', icon: Building2, count: '1,200+' },
    { name: 'Production Houses', icon: Film, count: '850+' },
    { name: 'Educational Institutions', icon: GraduationCap, count: '450+' },
    { name: 'Businesses Across India', icon: Briefcase, count: '5,000+' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D21F3C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Industry Benchmark
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1 tracking-tight">
            Trusted by Creators Across India
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto leading-relaxed">
            "From independent photographers and filmmakers to studios, production houses, educational institutions, and businesses, MP Photo Guide is the preferred partner for professional imaging solutions."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {customerSegments.map((seg) => {
            const IconComp = seg.icon;
            return (
              <div
                key={seg.name}
                className="bg-[#f9f9f9] p-5 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center hover:border-[#D21F3C] transition-all shadow-2xs group"
              >
                <div className="w-10 h-10 rounded-full bg-white text-[#121212] group-hover:bg-[#D21F3C] group-hover:text-white flex items-center justify-center mb-3 shadow-2xs transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <p className="text-base font-extrabold text-gray-900 group-hover:text-[#D21F3C] transition-colors">
                  {seg.count}
                </p>
                <p className="text-xs font-semibold text-gray-700 mt-1 leading-tight">
                  {seg.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-[#D21F3C]" />
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Official Authorized Dealer Network</h4>
              <p className="text-xs text-gray-600">Sony, Canon, Nikon, Fujifilm, Leica, DJI, Godox, RØDE, Peak Design & more</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold text-gray-700">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Tax Invoices</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official Warranty</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Insured Freight</span>
          </div>
        </div>
      </div>
    </section>
  );
};
