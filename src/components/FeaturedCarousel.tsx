import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedCarouselProps {
  products: Product[];
  onEnquire: (product: Product) => void;
  onPageChange: (page: string) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  products,
  onEnquire,
  onPageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We want to show featured products or a curated list
  const featuredList = products.filter((p) => p.featured).slice(0, 8);

  const maxIndex = Math.max(0, featuredList.length - 1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Products</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1 tracking-tight">
              Flagship Cameras & Precision Gear
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Top requested cameras, prime optics, and video production equipment in stock at Bangalore.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-md bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-2xs active:scale-95"
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-md bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-2xs active:scale-95"
              aria-label="Next Products"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-5"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 4 : 2))}%)`,
            }}
          >
            {featuredList.map((item) => (
              <div
                key={item.id}
                onClick={() => onEnquire(item)}
                className="w-[calc(50%-10px)] lg:w-[calc(25%-15px)] shrink-0 bg-white rounded-xl border border-gray-100 p-3 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Product Image */}
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
                    <div className="absolute top-2 left-2 bg-slate-950/90 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {item.brand}
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-snug">
                    {item.description}
                  </p>
                </div>

                {/* Enquiry Action Button */}
                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    {item.category}
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
        </div>

        {/* View All Products CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onPageChange('products')}
            className="inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-slate-800 px-7 py-3 rounded-md text-xs font-semibold uppercase tracking-wider shadow-sm transition-all active:scale-95"
          >
            <span>Explore Entire 200+ Catalogue</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
