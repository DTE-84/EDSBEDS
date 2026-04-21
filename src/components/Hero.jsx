import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, Zap, Wind, ArrowRight } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current.children, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );

    tl.fromTo(cardsRef.current.children,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  const features = [
    {
      title: "Anatomical Support",
      desc: "Zoned pressure relief engineered for spinal alignment.",
      icon: <Shield className="text-[var(--accent-blue)]" size={24} />,
      color: "blue"
    },
    {
      title: "Active Thermal Logic",
      desc: "Phase-change material for optimal sleep temperature.",
      icon: <Wind className="text-[var(--accent-red)]" size={24} />,
      color: "red"
    },
    {
      title: "Kinetic Response",
      desc: "Ultra-responsive foam that adapts to every movement.",
      icon: <Zap className="text-[var(--accent-blue)]" size={24} />,
      color: "blue"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-40 pb-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-blue)]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-red)]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container z-10 relative px-6">
        <div ref={textRef} className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-50 border border-gray-100 rounded-full mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[var(--accent-red)] animate-ping" />
            <h2 className="text-[10px] font-black text-[var(--text-main)] tracking-[0.4em] uppercase font-sans">
              2026 RZ ELITE COLLECTION
            </h2>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter mb-8 italic leading-[0.85] text-[var(--text-main)]">
            Sleep, <br />
            <span className="text-[var(--accent-blue)] not-italic">Refined.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-[var(--text-dim)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Where biological precision meets <span className="text-[var(--accent-red)] italic font-bold">unrivaled luxury.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a href="#mattresses" className="btn-primary group">
              Explore Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#scheduling" className="btn-secondary">
              Book Private Trial
            </a>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="group relative p-10 bg-white rounded-[40px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${f.color === 'blue' ? 'bg-[var(--accent-blue)]' : 'bg-[var(--accent-red)]'} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 italic text-[var(--text-main)]">{f.title}</h3>
              <p className="text-[var(--text-dim)] font-medium leading-relaxed font-sans text-sm">
                {f.desc}
              </p>
              
              <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-[var(--accent-blue)] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight size={12} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--text-main)] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
