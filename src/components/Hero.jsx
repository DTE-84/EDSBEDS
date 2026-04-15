import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(textRef.current.children, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section id="stl-local" ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="./hero.png" 
          alt="Luxury Mattress STL" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div ref={textRef} className="max-w-3xl relative">
          {/* Decorative Vertical Accent */}
          <div className="absolute -left-8 top-0 bottom-0 w-[4px] bg-[var(--accent)] hidden md:block shadow-[4px_0px_15px_var(--accent-soft)]" />
          
          <h2 className="uppercase tracking-[0.5em] font-black text-[10px] mb-6 text-white flex items-center gap-4 text-shadow-hard">
            Preferred Mattress <span className="text-[var(--accent)]">//</span> 3226 Watson Road
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-shadow-hard">
            <span className="text-[var(--accent)] not-italic">The STL</span> <br />
            <span className="text-white">Bed Guy.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium mb-12 max-w-xl text-[var(--text-dim)] leading-relaxed text-shadow-hard">
            Ed Schultz brings personalized, no-pressure sleep science to South St. Louis. Experience the <span className="text-white font-bold">Watson Business District</span> standard of comfort.
          </p>

          <div className="flex flex-wrap gap-8 items-center pt-4">
            <a href="#collections" className="relative px-10 py-5 bg-[var(--accent)] text-black font-black uppercase tracking-widest text-sm text-center min-w-[240px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-b-4 border-l-4 border-black/20 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200">
              Shop The Selection
            </a>
            <a href="#scheduling" className="relative px-10 py-5 bg-black/40 backdrop-blur-md border-b-4 border-l-4 border-[var(--accent)] text-white font-black uppercase tracking-widest text-sm text-center min-w-[240px] hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center">
              Book a Trial
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
