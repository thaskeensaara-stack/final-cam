import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { FeaturedBrands } from '../components/FeaturedBrands';
import { Search, Sparkles, ArrowRight } from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  onEnquire: (product: Product) => void;
  selectedBrandFilter?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  onEnquire,
  selectedBrandFilter = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [activeBrandFilter, setActiveBrandFilter] = useState<string>(selectedBrandFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: string[] = [
    'All',
    'Cameras',
    'Lenses',
    'Photography Accessories',
    'Lighting',
    'Audio',
    'Video Production',
    'Drones',
    'Studio Equipment',
  ];

  // Map of subcategories per main category
  const subCategoryMap: Record<string, string[]> = {
    Cameras: ['All', 'Mirrorless', 'DSLR', 'Cinema', 'Compact', 'Action', 'Instant', 'Camcorders'],
    Lenses: ['All', 'Prime', 'Zoom', 'Wide Angle', 'Telephoto', 'Macro', 'Portrait', 'Cine'],
    'Photography Accessories': ['All', 'Camera Bags', 'Memory Cards', 'Batteries', 'Chargers', 'Camera Straps', 'Filters', 'Cleaning Kits', 'Remote Shutters', 'Camera Cages', 'Lens Hoods'],
    Lighting: ['All', 'LED Lights', 'Studio Flash', 'Speedlights', 'Softboxes', 'Reflectors', 'Light Stands', 'Ring Lights', 'Continuous Lights'],
    Audio: ['All', 'Wireless Microphones', 'Shotgun Microphones', 'Lavalier Microphones', 'Audio Recorders', 'Headphones', 'Accessories'],
    'Video Production': ['All', 'Gimbals', 'Tripods', 'Sliders', 'External Monitors', 'Teleprompters', 'Follow Focus', 'Camera Rigs'],
    Drones: ['All', 'Professional Drones', 'Batteries & Power', 'Drone Accessories', 'Propellers', 'Carry Cases'],
    'Studio Equipment': ['All', 'Backgrounds', 'Green Screens', 'Backdrop Stands', 'Product Tables', 'Ceiling Mount Systems'],
  };

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category check
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      // Subcategory check
      if (selectedSubCategory !== 'All' && p.subCategory !== selectedSubCategory) {
        return false;
      }
      // Brand filter check
      if (
        activeBrandFilter &&
        !p.brand.toLowerCase().includes(activeBrandFilter.toLowerCase()) &&
        !p.name.toLowerCase().includes(activeBrandFilter.toLowerCase())
      ) {
        return false;
      }
      // Search query check
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchBrand = p.brand.toLowerCase().includes(query);
        const matchCat = p.category.toLowerCase().includes(query);
        const matchSub = p.subCategory.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        if (!matchName && !matchBrand && !matchCat && !matchSub && !matchDesc) {
          return false;
        }
      }
      return true;
    });
  }, [products, selectedCategory, selectedSubCategory, activeBrandFilter, searchQuery]);

  const handleBrandSelectFromGrid = (brandName: string) => {
    if (activeBrandFilter === brandName) {
      setActiveBrandFilter('');
    } else {
      setActiveBrandFilter(brandName);
    }
    const el = document.getElementById('catalog-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Equipment Catalogue</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Instruments of Optical Precision
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Explore our complete inventory of authentic cameras, prime lenses, lighting, audio gear, and drones. All backed by official GST invoices & warranty in Gandhi Nagar, Bangalore.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by product name, model (e.g. Z9, R1, Alpha 1, Mavic 3 Pro, Godox)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Active Brand Filter Tag */}
            {activeBrandFilter && (
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-2 rounded-xl text-xs font-semibold text-blue-700">
                <span>Brand: {activeBrandFilter}</span>
                <button
                  onClick={() => setActiveBrandFilter('')}
                  className="hover:bg-blue-100/50 px-1 rounded text-blue-700"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Main Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-t border-slate-100 pt-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubCategory('All');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide shrink-0 transition-all ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Subcategory Filter Pills */}
          {selectedCategory !== 'All' && subCategoryMap[selectedCategory] && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase text-slate-400 shrink-0 mr-1">
                Subcategory:
              </span>
              {subCategoryMap[selectedCategory].map((subCat) => {
                const isActive = selectedSubCategory === subCat;
                return (
                  <button
                    key={subCat}
                    onClick={() => setSelectedSubCategory(subCat)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium shrink-0 transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {subCat}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Product Catalog Grid */}
        <div id="catalog-grid" className="space-y-6">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>
              Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> equipment items
            </span>
            {(selectedCategory !== 'All' || activeBrandFilter !== '' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedSubCategory('All');
                  setActiveBrandFilter('');
                  setSearchQuery('');
                }}
                className="text-blue-600 font-semibold hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200/80 space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full mx-auto flex items-center justify-center font-bold text-xl">
                !
              </div>
              <h3 className="font-bold text-slate-900 text-lg">No Exact Match Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We have over 500+ items available offline at our Gandhi Nagar store in Bangalore. Contact our sales desk directly for custom requests!
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedSubCategory('All');
                  setActiveBrandFilter('');
                  setSearchQuery('');
                }}
                className="bg-slate-950 text-white text-xs font-semibold px-5 py-2.5 rounded-lg inline-block mt-2 hover:bg-slate-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onEnquire(item)}
                  className="bg-white rounded-xl border border-gray-100 p-3.5 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Image Container */}
                  <div>
                    <div className="aspect-square bg-slate-50 rounded-lg overflow-hidden mb-3 border border-gray-100 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80';
                        }}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-slate-950/90 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        {item.brand}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span className="text-blue-600">{item.subCategory}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm mt-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specs Tags */}
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {item.keySpecs.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      GST Invoice
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEnquire(item);
                      }}
                      className="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Brands Grid (34 Brands) */}
        <FeaturedBrands onSelectBrand={handleBrandSelectFromGrid} />
      </div>
    </div>
  );
};
