import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Adjustable Bases', id: 'bases' },
    { name: 'Mattresses', id: 'mattresses' },
    { name: 'Bedding', id: 'bedding' },
    { name: 'Bed Frames', id: 'frames' }
  ];

  const secondaryLinks = [
    { name: 'Reviews', id: 'reviews' },
    { name: 'Scheduling', id: 'scheduling' }
  ];

  const handleNav = (viewId) => {
    setView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'landing' ? 'glass-morphism py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => handleNav('landing')}>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-[var(--accent-blue)] italic">
              EDS<span className="text-[var(--text-main)] not-italic">BEDS</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-[var(--accent-red)] uppercase font-sans">
              Precision Sleep Logic
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on Mobile (<1024px) */}
        <div className="hidden lg:flex items-center gap-8">
          {[...categories, ...secondaryLinks].map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNav(item.id)}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 font-sans ${currentView === item.id ? 'text-[var(--accent-blue)] border-b-2 border-[var(--accent-blue)]' : 'text-[var(--text-main)] hover:text-[var(--accent-blue)]'}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Search size={18} className="cursor-pointer hover:text-[var(--accent-blue)] transition-all hover:scale-110 hidden sm:block" />
          <div className="relative group cursor-pointer">
            <ShoppingCart size={18} className="hover:text-[var(--accent-red)] transition-all hover:scale-110" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--accent-red)] text-white text-[8px] font-black rounded-full flex items-center justify-center animate-bounce shadow-md font-sans">0</span>
          </div>
          
          {/* Hamburger Menu Button - ONLY VISIBLE ON MOBILE/TABLET (<1024px) */}
          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Solid Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] lg:hidden flex flex-col p-8 pt-24 gap-6 animate-in fade-in slide-in-from-right duration-500">
          <button 
            className="absolute top-6 right-6 p-4 rounded-full bg-gray-50 text-[var(--text-main)] hover:bg-white hover:text-[var(--accent-red)] transition-all shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col gap-2">
            {[...categories, ...secondaryLinks].map((item, i) => (
              <button 
                key={item.id} 
                onClick={() => handleNav(item.id)}
                className="text-3xl font-black text-left text-[var(--text-main)] hover:text-[var(--accent-blue)] transition-all py-4 border-b border-gray-50 flex justify-between items-center group font-serif"
              >
                {item.name}
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Menu size={16} className="rotate-[-45deg]" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-auto pb-12 space-y-4 text-center">
             <div className="p-6 bg-[var(--bg-secondary)] rounded-3xl border border-gray-100 font-sans">
                <p className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-widest mb-2">Customer Support</p>
                <p className="text-lg font-black text-[var(--accent-blue)]">(314) 452-8783</p>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
