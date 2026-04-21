import React from 'react';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import mattressHero from '../assets/mattress_hero.png';
import baseLuxury from '../assets/base_luxury.png';

const FeaturedPreview = ({ setView }) => {
  const products = [
    {
      id: 'mattress-elite',
      name: 'RZ Elite Hybrid',
      tag: 'FLAGSHIP',
      price: 'From $1,699',
      image: mattressHero,
      features: ['Cooling Logic', 'Pressure Relief', 'Motion Isolation'],
      color: 'blue'
    },
    {
      id: 'base-pro',
      name: 'Smart Base Pro',
      tag: 'NEW RELEASE',
      price: 'From $1,299',
      image: baseLuxury,
      features: ['Anti-Snore', 'Zero Gravity', 'LED Underlight'],
      color: 'red'
    }
  ];

  return (
    <section className="py-32 bg-[#F8F9FA] w-full">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-blue)]/10 rounded-full mb-6">
              <Star size={12} className="text-[var(--accent-blue)]" fill="currentColor" />
              <span className="text-[10px] font-black text-[var(--accent-blue)] tracking-[0.3em] uppercase font-sans">Featured Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic text-[var(--text-main)]">
              Engineered <br /> for <span className="text-[var(--accent-blue)] not-italic">Excellence.</span>
            </h2>
          </div>
          <button 
            onClick={() => setView('mattresses')}
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--text-main)] hover:text-[var(--accent-blue)] transition-all"
          >
            View All Inventory <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((p) => (
            <div 
              key={p.id}
              className="group relative bg-white rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                   <div className={`px-4 py-2 ${p.color === 'blue' ? 'bg-[var(--accent-blue)]' : 'bg-[var(--accent-red)]'} text-white text-[10px] font-black tracking-[0.2em] rounded-full shadow-lg uppercase`}>
                      {p.tag}
                   </div>
                </div>
              </div>

              <div className="p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-bold italic tracking-tighter mb-2 text-[var(--text-main)]">{p.name}</h3>
                    <p className="text-[var(--accent-blue)] font-bold text-xl tracking-tighter">{p.price}</p>
                  </div>
                  <div className="flex gap-1 text-[var(--accent-blue)]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  {p.features.map(f => (
                    <span key={f} className="px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-wider border border-gray-100">
                      {f}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setView('mattresses')}
                  className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${p.color === 'blue' ? 'bg-[var(--accent-blue)] text-white hover:bg-[var(--accent-blue)]/90' : 'bg-[var(--accent-red)] text-white hover:bg-[var(--accent-red)]/90'} shadow-xl shadow-black/5`}
                >
                  Configure Yours <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPreview;
