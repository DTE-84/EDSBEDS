import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Adjustable Bases', href: '#bases' },
    { name: 'Mattresses', href: '#mattresses' },
    { name: 'Bedding', href: '#bedding' },
    { name: 'Bed Frames', href: '#frames' }
  ];

  const secondaryLinks = [
    { name: 'Reviews', href: '#reviews' },
    { name: 'Scheduling', href: '#scheduling' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-[var(--accent-blue)]">
            EDSBEDS
          </span>
        </div>

        {/* Desktop Navigation - Hidden on mobile, visible on LG and up */}
        <div className="hidden lg:flex items-center gap-8">
          {[...categories, ...secondaryLinks].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-wider hover:text-[var(--accent-blue)] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Search size={18} className="cursor-pointer hover:text-[var(--accent-blue)] transition-colors" />
          <ShoppingCart size={18} className="cursor-pointer hover:text-[var(--accent-red)] transition-colors" />
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Solid White Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-8 pt-24 gap-6">
          <button 
            className="absolute top-6 right-6 p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {[...categories, ...secondaryLinks].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-2xl font-semibold text-[var(--text-main)] hover:text-[var(--accent-blue)] transition-all border-b border-gray-100 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
