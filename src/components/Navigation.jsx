import { Menu, X, ShoppingCart, Search, ChevronRight } from 'lucide-react';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled || currentView !== 'landing' ? 'bg-white/95 backdrop-blur-2xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-b border-gray-100' : 'bg-transparent py-10'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Dynamic Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => handleNav('landing')}>
          <div className="relative">
            <span className="text-3xl font-black tracking-tighter italic flex items-center">
              <span className="text-[var(--accent-blue)] group-hover:text-[var(--accent-red)] transition-colors duration-500">EDS</span>
              <span className="text-[var(--text-main)] transition-transform duration-500 group-hover:translate-x-1">BEDS</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-8 h-[3px] bg-[var(--accent-red)] rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-[var(--accent-blue)]" />
          </div>
        </div>

        {/* High-Fidelity Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {[...categories, ...secondaryLinks].map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNav(item.id)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative group overflow-hidden font-sans ${currentView === item.id ? 'text-white' : 'text-[var(--text-main)] hover:text-[var(--accent-blue)]'}`}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Animated Background Pill for Active State */}
              <div className={`absolute inset-0 bg-[var(--accent-blue)] transition-transform duration-500 rounded-full ${currentView === item.id ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-[90%] opacity-10'}`} />
              
              {/* Subtle Dot Indicator */}
              {currentView === item.id && (
                <div className="absolute top-1 right-3 w-1 h-1 bg-[var(--accent-red)] rounded-full animate-pulse z-20" />
              )}
            </button>
          ))}
        </div>

        {/* Modern Action Suite */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 bg-gray-50/50 p-1.5 rounded-full border border-gray-100">
             <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:shadow-md transition-all cursor-pointer text-[var(--text-dim)] hover:text-[var(--accent-blue)]">
                <Search size={18} strokeWidth={2.5} />
             </div>
             <div className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:shadow-md transition-all cursor-pointer text-[var(--text-dim)] hover:text-[var(--accent-red)]">
                <ShoppingCart size={18} strokeWidth={2.5} />
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[var(--accent-red)] text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">0</span>
             </div>
          </div>
          
          <button 
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--bg-secondary)] hover:bg-white hover:shadow-xl transition-all border border-gray-100" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="flex flex-col gap-1 items-end group">
               <div className="w-6 h-0.5 bg-[var(--accent-blue)] rounded-full group-hover:w-4 transition-all" />
               <div className="w-4 h-0.5 bg-[var(--accent-red)] rounded-full group-hover:w-6 transition-all" />
            </div>
          </button>
        </div>
      </div>

      {/* Cinematic Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] lg:hidden flex flex-col animate-in fade-in slide-in-from-right duration-700 overflow-hidden">
          {/* Background Branding Elements */}
          <div className="absolute top-[20%] right-[-10%] text-[20rem] font-black text-gray-50 italic select-none pointer-events-none tracking-tighter opacity-40">EDS</div>
          
          <div className="container flex flex-col h-full relative z-10 pt-32 pb-12">
            <button 
              className="absolute top-8 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-2xl border border-gray-50 text-[var(--text-main)] hover:text-[var(--accent-red)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={28} strokeWidth={2.5} />
            </button>
            
            <div className="flex flex-col gap-2">
              {[...categories, ...secondaryLinks].map((item, i) => (
                <button 
                  key={item.id} 
                  onClick={() => handleNav(item.id)}
                  className="text-4xl md:text-6xl font-black text-left text-[var(--text-main)] hover:text-[var(--accent-blue)] transition-all py-4 flex items-center gap-6 group font-serif italic"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="text-[var(--accent-red)] opacity-20 group-hover:opacity-100 transition-opacity font-sans not-italic text-sm tracking-[0.5em]">0{i+1}</span>
                  {item.name}
                  <ChevronRight size={40} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all text-[var(--accent-blue)] ml-auto" />
                </button>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-gray-100">
               <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col justify-center">
                  <p className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-[0.3em] mb-2 font-sans">Direct Assistance</p>
                  <p className="text-3xl font-black text-[var(--accent-blue)] font-sans tracking-tighter italic leading-none">(314) 452-8783</p>
               </div>
               <div className="hidden md:flex items-center justify-center p-8 bg-[var(--accent-red)] rounded-[32px] text-white shadow-xl shadow-[var(--accent-red)]/20 italic font-bold">
                  Premium Sleep Algorithm Ready.
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
