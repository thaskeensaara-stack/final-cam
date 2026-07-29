import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryModal } from './components/EnquiryModal';
import { PRODUCTS_DATA } from './data/products';
import { Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('');

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleEnquire = (product: Product) => {
    setEnquiryProduct(product);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-['Inter',sans-serif] flex flex-col justify-between selection:bg-[#D21F3C] selection:text-white">
      {/* Top Fixed Header */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            products={PRODUCTS_DATA}
            onPageChange={handlePageChange}
            onEnquire={handleEnquire}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onPageChange={handlePageChange} />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            products={PRODUCTS_DATA}
            onEnquire={handleEnquire}
            selectedBrandFilter={selectedBrandFilter}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Product Enquiry Modal */}
      <EnquiryModal
        product={enquiryProduct}
        onClose={() => setEnquiryProduct(null)}
      />

      {/* Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
