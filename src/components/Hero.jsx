import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage from '../assets/hero_bed.png';
import { Star, Shield, MapPin, Truck, Landmark } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);
  const ribbonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current.children, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    tl.fromTo(ribbonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Mattress" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay for text legibility */}
      </div>

      <div ref={textRef} className="container z-10 relative text-white py-20">
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-6 opacity-80">
          Precision Engineered in St. Louis
        </p>
        
        <h1 className="text-6xl md:text-[7.5rem] font-serif mb-12 text-white drop-shadow-xl italic leading-[1.1]">
          Designed for <span className="not-italic">Dreaming</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <button className="btn-primary">
            Shop Now
          </button>
        </div>
      </div>

      {/* Info Ribbon - Bottom Overlay */}
      <div 
        ref={ribbonRef}
        className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md py-6 border-t border-gray-100 z-20"
      >
        <div className="container flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          <div className="flex items-center gap-3 group px-4">
            <Star size={18} className="text-[var(--accent-blue)]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)]">1K+ 5 Star Reviews</span>
          </div>
          <div className="flex items-center gap-3 group px-4">
            <Shield size={18} className="text-[var(--accent-blue)]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)]">Premium Warranties</span>
          </div>
          <div className="flex items-center gap-3 group px-4">
            <MapPin size={18} className="text-[var(--accent-blue)]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)]">In Over 20K Retail Stores</span>
          </div>
          <div className="flex items-center gap-3 group px-4">
            <Landmark size={18} className="text-[var(--accent-blue)]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)]">Financing Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
