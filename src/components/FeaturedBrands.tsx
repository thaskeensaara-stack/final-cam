import React, { useState } from 'react';
import { BRANDS_DATA } from '../data/brands';
import { Search, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FeaturedBrandsProps {
  onSelectBrand?: (brandName: string) => void;
}

export const FeaturedBrands: React.FC<FeaturedBrandsProps> = ({ onSelectBrand }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = BRANDS_DATA.filter(
    (b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white border-b border-gray-200" id="brands-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D21F3C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Official Dealer Network
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
              Featured Global Brands
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Authorized retailer for 34 world-class imaging, audio, lighting, and gear brands in Bangalore.
            </p>
          </div>

          {/* Quick Search for Brands */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Filter brand (e.g. Sony, Godox)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-medium bg-[#f9f9f9] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D21F3C]/20 focus:border-[#D21F3C]"
            />
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              className="bg-[#f9f9f9] hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-[#D21F3C] hover:shadow-md transition-all duration-200 text-left group flex flex-col justify-between h-28"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-black tracking-tighter text-gray-900 group-hover:text-[#D21F3C] transition-colors">
                    {brand.logoText}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D21F3C] transition-colors" />
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider truncate">
                  {brand.name}
                </p>
              </div>

              <span className="text-[9px] bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded font-medium truncate self-start group-hover:bg-red-50 group-hover:text-[#D21F3C] group-hover:border-red-200 transition-colors">
                {brand.category}
              </span>
            </button>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className="text-center py-10 text-xs text-gray-500">
            No brand found matching "{searchTerm}". Please clear your search term.
          </div>
        )}

        <div className="mt-8 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#D21F3C]" />
          <span>All products carry official manufacturer tax invoices & GST billings across India.</span>
        </div>
      </div>
    </section>
  );
};
