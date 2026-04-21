import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(textRef.current.children, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <section id="local-mattress" ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-[#F2F2F2]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="./hero.png" 
          alt="Clean Bedroom" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div ref={textRef} className="max-w-3xl">
          <h2 className="uppercase tracking-[0.4em] font-bold text-[10px] mb-6 text-[var(--accent)]">
            Preferred Mattress // 3226 Watson Road
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Designed for <br />
            <span className="italic">Dreaming</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium mb-12 max-w-xl text-[var(--text-dim)] leading-relaxed">
            Personalized, no-pressure sleep science in South St. Louis. Experience the <span className="text-[var(--text-main)] font-bold">Preferred</span> standard of comfort.
          </p>

          <div className="flex flex-wrap gap-6 items-center pt-4">
            <a href="#collections" className="btn-primary">
              Shop The Selection
            </a>
            <a href="#scheduling" className="btn-secondary">
              Book a Trial
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-[var(--accent)]" />
      </div>
    </section>
  );
};

export default Hero;
