import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current.children, 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden pt-24">
      {/* Immersive Decorative Background */}
      <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-[var(--accent-blue)]/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-[var(--accent-red)]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div ref={textRef} className="container z-10 relative px-6">
        {/* Modern Dynamic Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white shadow-xl shadow-black/5 border border-gray-50 rounded-full mb-12">
          <div className="flex gap-1">
             <span className="w-1.5 h-1.5 bg-[var(--accent-red)] rounded-full animate-ping" />
             <span className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full animate-pulse" />
          </div>
          <h2 className="text-[9px] font-black text-[var(--text-main)] tracking-[0.4em] uppercase font-sans">
            Global Release: RZ Collection 2026
          </h2>
        </div>
        
        {/* High-Fidelity Hero Headline */}
        <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-12 italic leading-[0.95] text-[var(--text-main)]">
          Sleep, <br />
          <span className="text-[var(--accent-blue)] not-italic">Perfected.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-[var(--text-dim)] mb-16 max-w-2xl mx-auto leading-relaxed italic">
          Engineered for human anatomy. <br className="hidden md:block" />
          The gold standard in <span className="text-[var(--accent-red)] font-black not-italic underline decoration-[var(--accent-red)]/30 underline-offset-8">rest logic.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
          <a href="#mattresses" className="btn-primary">
            Start Your Journey
          </a>
          <a href="#scheduling" className="btn-secondary">
            Private Trial &gt;
          </a>
        </div>
      </div>
      
      {/* Elegant Minimalist Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[8px] font-black uppercase tracking-[0.6em] font-sans">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent-blue)] via-[var(--accent-red)] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
