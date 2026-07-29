import React from 'react';
import { ShieldCheck, UserCheck, Tag, Truck, Headphones, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Genuine Products',
      description: '100% original equipment sourced directly from authorized brand partners with official GST invoice and brand warranty.',
      highlight: 'Full Manufacturer Warranty'
    },
    {
      icon: UserCheck,
      title: 'Expert Consultation',
      description: 'Personalized advice from experienced camera specialists in Bangalore to help select the perfect setup for your creative needs.',
      highlight: '1-on-1 Gear Guidance'
    },
    {
      icon: Tag,
      title: 'Competitive Pricing',
      description: 'Transparent, competitive market rates on all mirrorless bodies, cinema lenses, and studio accessories.',
      highlight: 'Best B2B & Retail Rates'
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'Secure, fully insured express freight shipping to every city and town across India with live order tracking.',
      highlight: 'Insured Express Freight'
    },
    {
      icon: Headphones,
      title: 'After-Sales Support',
      description: 'Dedicated post-purchase assistance for camera setup, firmware updates, lens calibration, and warranty service coordination.',
      highlight: 'Lifetime Technical Help'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The MP Photo Guide Difference</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            We are committed to delivering authentic imaging equipment backed by unrivaled technical expertise in Gandhi Nagar, Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/60 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-blue-600 flex items-center justify-center mb-4 shadow-2xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                    <span>✓</span> {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
