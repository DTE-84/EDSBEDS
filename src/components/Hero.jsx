import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Star, Award, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(contentRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const stats = [
    { icon: <Star size={20} />, label: "5-Star Rated", value: "Local Favorite" },
    { icon: <Award size={20} />, label: "Premium Quality", value: "Since 2026" },
    { icon: <Clock size={20} />, label: "100-Night Trial", value: "Risk Free" }
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--accent-blue)] via-[#0047AB] to-[#003380]"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div ref={contentRef} className="text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <Star size={14} className="text-white" fill="white" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Quincy's Premier Sleep Store
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]">
            Sleep Better.
            <br />
            <span className="italic font-serif">Live Better.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Discover premium mattresses, adjustable bases, and sleep solutions designed for your perfect night's rest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#mattresses"
              className="group inline-flex items-center gap-3 bg-white text-[var(--accent-blue)] px-8 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-2xl hover:scale-105"
            >
              Shop Mattresses
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#scheduling"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Book a Visit
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white/80 mb-1">{stat.label}</div>
                    <div className="text-lg font-black text-white">{stat.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Badge */}
          <div className="mt-12 inline-flex items-center gap-2 text-white/60">
            <MapPin size={16} />
            <span className="text-sm font-medium">Proudly serving Quincy, IL and surrounding areas</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
