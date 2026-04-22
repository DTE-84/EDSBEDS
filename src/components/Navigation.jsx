import { Menu, X, ShoppingCart, Search, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Mattresses', path: '/mattresses' },
    { name: 'Adjustable Bases', path: '/bases' },
    { name: 'Bedding', path: '/bedding' },
    { name: 'Bed Frames', path: '/frames' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled || !isLanding ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-10'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Upscale Branding */}
        <Link to="/" className="flex items-center group relative leading-none">
          <span className="text-3xl font-black tracking-tighter italic flex items-center transition-colors duration-500">
            <span className={`${isScrolled || !isLanding ? 'text-[var(--accent-blue)]' : 'text-white'} group-hover:text-[var(--accent-red)]`}>EDS</span>
            <span className={`${isScrolled || !isLanding ? 'text-[var(--text-main)]' : 'text-white/90'} group-hover:text-[var(--accent-blue)] transition-colors duration-700`}>BEDS</span>
          </span>
          <div className={`absolute -bottom-1 left-0 w-full h-[1px] transition-all duration-500 ${isScrolled || !isLanding ? 'bg-black/5 group-hover:bg-[var(--accent-red)]' : 'bg-white/20 group-hover:bg-white'}`} />
        </Link>

        {/* State-of-the-Art Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {categories.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => `px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 relative group overflow-hidden font-sans ${isActive ? 'text-white' : (isScrolled || !isLanding ? 'text-[var(--text-main)] hover:text-[var(--accent-blue)]' : 'text-white/90 hover:text-white')}`}
            >
              <span className="relative z-10">{item.name}</span>
              <div className={`absolute inset-0 bg-[var(--blue-gradient)] transition-all duration-500 rounded-full ${location.pathname === item.path ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-10'}`} />
            </NavLink>
          ))}
        </div>

        {/* Action Suite */}
        <div className="flex items-center gap-6">
          <div className={`hidden sm:flex items-center gap-4 pr-6 ${isScrolled || !isLanding ? 'border-r border-gray-100' : 'border-r border-white/10'}`}>
             <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-xl ${isScrolled || !isLanding ? 'text-[var(--text-dim)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-blue)]' : 'text-white hover:bg-white/10'}`}>
                <Search size={18} strokeWidth={2.5} />
             </div>
             <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-xl ${isScrolled || !isLanding ? 'text-[var(--text-dim)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-red)]' : 'text-white hover:bg-white/10'}`}>
                <ShoppingCart size={18} strokeWidth={2.5} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent-red)] text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">0</span>
             </div>
          </div>
          
          <button 
            className={`lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-2xl border shadow-xl transition-all ${isScrolled || !isLanding ? 'bg-white border-gray-100' : 'bg-white/10 border-white/10 text-white'}`} 
            onClick={() => setMobileMenuOpen(true)}
          >
             <div className={`w-6 h-0.5 rounded-full ${isScrolled || !isLanding ? 'bg-[var(--accent-blue)]' : 'bg-white'}`} />
             <div className={`w-4 h-0.5 rounded-full ${isScrolled || !isLanding ? 'bg-[var(--accent-red)]' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] lg:hidden flex flex-col animate-in fade-in slide-in-from-right duration-700">
          <div className="container flex flex-col h-full pt-32 pb-12 relative z-10">
            <button 
              className="absolute top-8 right-6 w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-[var(--text-main)] hover:text-[var(--accent-red)] transition-all shadow-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={2.5} />
            </button>
            
            <div className="flex flex-col gap-0">
              {categories.map((item, i) => (
                <NavLink 
                  key={item.path} 
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `text-4xl md:text-6xl font-black text-left transition-all py-6 border-b border-gray-100 flex items-center justify-between group font-serif italic ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-main)] hover:text-[var(--accent-blue)]'}`}
                >
                  {item.name}
                  <ChevronRight size={40} className={`opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all text-[var(--accent-red)]`} />
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-gray-100">
               <p className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-[0.4em] mb-2 font-sans text-center md:text-left">Precision Support</p>
               <p className="text-4xl font-black text-[var(--accent-blue)] font-sans tracking-tighter leading-none italic text-center md:text-left">(314) 452-8783</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none italic select-none">
             <span className="text-[40vw] font-black">EDS</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
