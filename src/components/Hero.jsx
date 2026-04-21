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
    <section id="hero" className="relative h-[80vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
      <div ref={textRef} className="container z-10">
        <h2 className="text-sm font-semibold text-[var(--accent-red)] mb-4 tracking-tight uppercase">
          Innovation in Sleep
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          The ultimate sleep. <br />
          <span className="text-[var(--text-dim)]">Built for comfort.</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-[var(--text-dim)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Engineered for every body. Precision comfort meets minimalist design. <br className="hidden md:block" />
          Experience the future of rest.
        </p>
        <div className="flex justify-center gap-6 items-center">
          <a href="#mattresses" className="btn-primary">
            Buy Now
          </a>
          <a href="#scheduling" className="btn-secondary">
            Book a Trial &gt;
          </a>
        </div>
      </div>
      
      {/* Visual Element (Minimalist CSS Gradient or Shape) */}
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
    </section>
  );
};

export default Hero;
