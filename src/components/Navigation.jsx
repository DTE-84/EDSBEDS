import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism' : 'py-6'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter neon-glow" style={{ color: 'var(--accent)' }}>
            EDS<span className="text-white">BEDS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Collections', 'STL Local', 'Reviews', 'Scheduling'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <User size={20} className="hover:text-[var(--accent)] cursor-pointer" />
            <div className="relative">
              <ShoppingCart size={20} className="hover:text-[var(--accent)] cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-black/95 z-40 md:hidden flex flex-col p-8 gap-6 animate-in slide-in-from-right">
          {['Collections', 'STL Local', 'Reviews', 'Scheduling', 'Cart', 'Account'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-2xl font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
