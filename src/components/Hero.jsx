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
    <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero.png" 
          alt="Luxury Mattress STL" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div ref={textRef} className="max-w-2xl">
          <h2 className="text-[var(--accent)] uppercase tracking-widest font-bold mb-4">
            Preferred Mattress // 3226 Watson Road
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9]">
            The STL <br />
            <span className="text-[var(--accent)]">Bed Guy.</span>
          </h1>
          <p className="text-xl text-[var(--text-dim)] mb-8 max-w-lg">
            Ed Schultz brings personalized, no-pressure sleep science to South St. Louis. Experience the Watson Business District standard of comfort.
          </p>
          <div className="flex gap-4">
            <button className="btn-neon">
              Shop The Selection
            </button>
            <button className="px-8 py-3 glass-morphism rounded-sm font-bold hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
              Book a Trial
            </button>
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
