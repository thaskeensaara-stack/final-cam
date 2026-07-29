import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { ArrowRight, Camera, Disc, Package, Video, Sun, Mic, Send, Users, Layers, Building } from 'lucide-react';

interface ServicesSectionProps {
  onPageChange: (page: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onPageChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return Camera;
      case 'Disc': return Disc;
      case 'Package': return Package;
      case 'Video': return Video;
      case 'Sun': return Sun;
      case 'Mic': return Mic;
      case 'Send': return Send;
      case 'Users': return Users;
      case 'Layers': return Layers;
      case 'Building': return Building;
      default: return Camera;
    }
  };

  return (
    <section className="py-20 bg-[#f9f9f9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D21F3C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
              End-to-End Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">
              From individual camera sales to complete corporate studio installations across India.
            </p>
          </div>
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#252525] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Request Custom Service</span>
            <ArrowRight className="w-4 h-4 text-[#D21F3C]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES_DATA.map((srv, idx) => {
            const IconComp = getIcon(srv.iconName);
            return (
              <div
                key={srv.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs hover:border-[#D21F3C] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 text-[#121212] group-hover:bg-red-50 group-hover:text-[#D21F3C] flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-[#D21F3C]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-2 group-hover:text-[#D21F3C] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <button
                    onClick={() => onPageChange('contact')}
                    className="text-[11px] font-bold text-gray-800 group-hover:text-[#D21F3C] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
