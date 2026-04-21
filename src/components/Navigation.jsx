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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <span className="text-xl font-black tracking-tighter text-[var(--accent-blue)] group-hover:text-[var(--accent-red)] transition-colors duration-500">
            EDS<span className="text-[var(--text-main)]">BEDS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {[...categories, ...secondaryLinks].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-widest hover:text-[var(--accent-blue)] transition-all hover:scale-105 active:scale-95"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Search size={18} className="cursor-pointer hover:text-[var(--accent-blue)] transition-all hover:scale-110" />
          <div className="relative group">
            <ShoppingCart size={18} className="cursor-pointer hover:text-[var(--accent-red)] transition-all hover:scale-110" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--accent-red)] text-white text-[8px] font-black rounded-full flex items-center justify-center animate-bounce shadow-md">0</span>
          </div>
          <button className="lg:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] lg:hidden flex flex-col p-8 pt-24 gap-6 animate-in fade-in slide-in-from-right duration-500">
          <button 
            className="absolute top-6 right-6 p-4 rounded-full bg-gray-50 text-[var(--text-main)] hover:bg-white hover:text-[var(--accent-red)] transition-all shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col gap-2">
            {[...categories, ...secondaryLinks].map((item, i) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-3xl font-black text-[var(--text-main)] hover:text-[var(--accent-blue)] transition-all py-4 border-b border-gray-50 flex justify-between items-center group"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Menu size={16} className="rotate-[-45deg]" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12 space-y-4">
             <div className="p-6 bg-[var(--bg-secondary)] rounded-3xl border border-gray-100">
                <p className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-widest mb-2">Need Help?</p>
                <p className="text-lg font-black text-[var(--accent-blue)]">(314) 452-8783</p>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
