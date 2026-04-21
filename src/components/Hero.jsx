import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current.children, 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section id="hero" className="relative h-[85vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[var(--accent-blue)]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[var(--accent-red)]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div ref={textRef} className="container z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-red)]/5 rounded-full mb-6">
          <span className="w-2 h-2 bg-[var(--accent-red)] rounded-full animate-ping" />
          <h2 className="text-[10px] font-bold text-[var(--accent-red)] tracking-widest uppercase font-sans">
            New Arrival: RZ Cool Choice
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">
          Sleep, <span className="text-[var(--accent-blue)] not-italic">Perfected.</span>
        </h1>
        
        <p className="text-lg md:text-xl font-medium text-[var(--text-dim)] mb-12 max-w-2xl mx-auto leading-relaxed">
          Engineered with precision. Designed for absolute comfort. <br className="hidden md:block" />
          The future of rest is here.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a href="#mattresses" className="btn-primary px-10 py-5 rounded-2xl shadow-xl shadow-[var(--accent-blue)]/20 hover:scale-105 transition-transform font-sans">
            Shop The Collection
          </a>
          <a href="#scheduling" className="btn-secondary px-10 py-5 rounded-2xl border-2 border-gray-100 hover:border-[var(--accent-blue)]/30 transition-all font-sans">
            Book a Trial &gt;
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-bold uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--text-main)] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
