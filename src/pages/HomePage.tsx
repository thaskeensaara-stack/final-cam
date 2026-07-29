import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { TrustedBy } from '../components/TrustedBy';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { Product } from '../types';

interface HomePageProps {
  products: Product[];
  onPageChange: (page: string) => void;
  onEnquire: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onPageChange,
  onEnquire,
}) => {
  const scrollToBrands = () => {
    onPageChange('products');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* 1. Hero Section */}
      <Hero onPageChange={onPageChange} onShopByBrandClick={scrollToBrands} />

      {/* 2. Why Choose Us */}
      <WhyChooseUs />

      {/* 3. Services */}
      <ServicesSection onPageChange={onPageChange} />

      {/* 4. Trusted by Customers */}
      <TrustedBy />

      {/* 5. Featured Products Carousel (Only 1 carousel, no duplicate static grid) */}
      <FeaturedCarousel
        products={products}
        onEnquire={onEnquire}
        onPageChange={onPageChange}
      />
    </div>
  );
};
