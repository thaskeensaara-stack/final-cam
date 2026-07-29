import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onOpenQuickSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-sm border-b border-gray-200 py-3.5'
          : 'border-b border-gray-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - Top Left with location tagline */}
        <div className="flex flex-col">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none group"
            aria-label="MP Photo Guide Home"
          >
            <Logo size="md" />
          </button>
          <span className="text-[9px] uppercase tracking-tighter mt-1 text-slate-400 font-semibold hidden sm:inline-block">
            Gandhi Nagar, Bangalore | Delivering Across India
          </span>
        </div>

        {/* Navigation Menu - Aligned to Top-Right */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Contact CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white px-5 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95 ml-2"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Get Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => handleNavClick('contact')}
            className="p-2 text-slate-700 hover:text-blue-600"
            title="Contact Us"
          >
            <Phone className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-xl px-6 py-6 transition-all animate-in slide-in-from-top-2 z-50">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left py-3 px-4 rounded-lg font-semibold text-base transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold text-sm tracking-wide uppercase shadow-md"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Contact Outlet Bangalore</span>
              </button>
              <p className="text-center text-xs text-slate-500 mt-1">
                Gandhi Nagar, Bangalore • PAN India Delivery
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
