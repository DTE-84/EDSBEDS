import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
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
    { name: 'Bed Frames', id: 'frames' },
    { name: 'Furniture', id: 'furniture' },
    { name: 'Sleep Essentials', id: 'essentials' }
  ];

  const handleNav = (viewId) => {
    setView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'landing' ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Logo Left */}
        <div className="flex items-center cursor-pointer group" onClick={() => handleNav('landing')}>
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-black tracking-tighter text-[var(--accent-blue)] italic">
              EDS<span className="text-[var(--text-main)] not-italic">BEDS</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--accent-red)] uppercase">
              Premium Sleep STL
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-6">
          {categories.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNav(item.id)}
              className={`nav-link hover:text-[var(--accent-red)] transition-colors ${currentView === item.id ? 'text-[var(--accent-red)]' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Icons Right */}
        <div className="flex items-center gap-5">
          <Search size={20} className="cursor-pointer hover:text-[var(--accent-red)] transition-all" />
          <User size={20} className="hidden md:block cursor-pointer hover:text-[var(--accent-red)] transition-all" />
          <div className="relative group cursor-pointer" onClick={() => handleNav('checkout')}>
            <ShoppingCart size={20} className="hover:text-[var(--accent-red)] transition-all" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[var(--accent-red)] text-white text-[7px] font-black rounded-full flex items-center justify-center shadow-sm">0</span>
          </div>
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-10 pt-28 animate-in fade-in slide-in-from-right duration-500">
          <button 
            className="absolute top-8 right-8 p-3 rounded-full bg-gray-50 text-[var(--text-main)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col gap-4">
            {categories.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNav(item.id)}
                className="text-4xl font-semibold text-left text-[var(--accent-blue)] py-4 border-b border-gray-50 flex justify-between items-center"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
