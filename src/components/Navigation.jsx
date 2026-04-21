import { Menu, X, ShoppingCart, User, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-widest uppercase">
            Preferred <span className="font-serif italic normal-case tracking-normal">Mattress</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Collections', 'Reviews', 'Scheduling'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-[var(--text-main)]">
            <User size={18} className="hover:text-[var(--accent)] cursor-pointer transition-colors" />
            <ShoppingCart size={18} className="hover:text-[var(--accent)] cursor-pointer transition-colors" />
            <a 
              href="tel:3144528783" 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
              aria-label="Call Us"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Call Us</span>
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-white z-40 md:hidden flex flex-col p-8 pt-24 gap-8">
          {['Collections', 'Reviews', 'Scheduling'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-3xl font-serif italic hover:text-[var(--accent)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-[1px] bg-[var(--accent-soft)] w-full" />
          <div className="flex gap-8">
            <User size={24} />
            <ShoppingCart size={24} />
            <Phone size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
