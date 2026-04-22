import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, Zap, Star, Sparkles, Box, ShieldCheck, Ruler } from 'lucide-react';

import mattressImg from '../assets/mattress_hero.png';
import baseImg from '../assets/base_luxury.png';
import beddingImg from '../assets/bedding_luxury.png';
import frameImg from '../assets/frame_luxury.png';

const ProductShowcase = ({ type, onSelectProduct, onStartQuiz }) => {
  const [selectedSize, setSelectedSize] = useState('Queen');

  const contentMap = {
    mattresses: {
      title: 'RZ Cool Choice',
      subtitle: '14" Elite Hybrid',
      desc: 'Experience the peak of sleep engineering. 14-inches of high-density cooling memory foam precision-built for your body.',
      price: 1699.00,
      image: mattressImg,
      badge: 'Most Popular',
      sizes: ['Twin XL', 'Queen', 'King']
    },
    bases: {
      title: 'Smart Base Pro',
      subtitle: 'Kinetic Foundation',
      desc: 'Zero-gravity positioning with integrated under-bed lighting and silent dual-motor adjustment.',
      price: 1299.00,
      image: baseImg,
      badge: 'New Arrival',
      sizes: ['Twin XL', 'Queen', 'King']
    },
    bedding: {
      title: 'Silk-Touch Set',
      subtitle: '800TC Egyptian Cotton',
      desc: 'Breathable, ultra-soft luxury bedding designed to regulate temperature throughout the night.',
      price: 299.00,
      image: beddingImg,
      badge: 'Premium Quality',
      sizes: ['Queen', 'King', 'Cal King']
    },
    frames: {
      title: 'Walnut Float',
      subtitle: 'Minimalist Frame',
      desc: 'Hand-crafted dark walnut wood with a floating aesthetic and structural integrity that lasts a lifetime.',
      price: 2499.00,
      image: frameImg,
      badge: 'Designer Choice',
      sizes: ['Queen', 'King', 'Cal King']
    }
  };

  const activeContent = contentMap[type] || contentMap.mattresses;

  const priceAdjust = {
    'Twin XL': -300,
    'Queen': 0,
    'King': 300,
    'Cal King': 400
  };

  const finalPrice = activeContent.price + (priceAdjust[selectedSize] || 0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [type]);

  return (
    <section id={type} className="py-32 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        
        {type === 'mattresses' && (
          <div className="max-w-5xl mx-auto mb-20">
             <div className="bg-gradient-to-r from-[var(--accent-blue)] to-[#005bb5] p-10 md:p-16 rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-1000" />
                <div className="space-y-6 relative z-10 text-center md:text-left">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                      <Sparkles size={14} className="text-white" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sleep Algorithm v2.0</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold tracking-tighter italic">Precision Matching.</h2>
                   <p className="text-xl opacity-90 max-w-md font-medium leading-relaxed">Take our 60-second behavioral quiz to find your exact RZ sleep profile.</p>
                </div>
                <button 
                  onClick={onStartQuiz}
                  className="bg-white text-[var(--accent-blue)] px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-2xl relative z-10 shrink-0"
                >
                  Start Quiz
                </button>
             </div>
          </div>
        )}

        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--accent-blue)]/5 rounded-full mb-2">
            <ShieldCheck size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[10px] font-black text-[var(--accent-blue)] tracking-[0.4em] uppercase">Verified Premium</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter italic text-[var(--text-main)]">
            The {type.charAt(0).toUpperCase() + type.slice(1)} <span className="text-[var(--accent-blue)] not-italic">Suite.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[60px] p-10 md:p-20 shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group">
            
            <div 
              className="lg:w-1/2 w-full aspect-square bg-[#F8F9FA] rounded-[48px] flex items-center justify-center overflow-hidden relative shadow-inner group-hover:shadow-2xl transition-all duration-700"
            >
               <img 
                 src={activeContent.image} 
                 alt={activeContent.title}
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               
               <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3">
                 <div className="w-2 h-2 bg-[var(--accent-red)] rounded-full animate-ping" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{activeContent.badge}</span>
               </div>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-[var(--accent-blue)] gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-[0.3em]">Tier-1 Certification</span>
              </div>

              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-[var(--text-main)] leading-none italic">
                {activeContent.title} <br />
                <span className="text-[var(--accent-blue)] not-italic text-4xl">{activeContent.subtitle}</span>
              </h3>
              
              <p className="text-lg text-[var(--text-dim)] mb-12 font-medium leading-relaxed max-w-md">
                {activeContent.desc}
              </p>
              
              <div className="text-6xl font-bold mb-12 text-[var(--text-main)] tracking-tighter flex items-baseline gap-2">
                <span className="text-2xl text-[var(--accent-red)] font-black italic">$</span>
                {finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>

              <div className="w-full space-y-10 mb-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">Configuration</label>
                    <span className="text-[10px] font-black text-[var(--accent-blue)] uppercase tracking-[0.3em] flex items-center gap-2">
                      <Ruler size={14} /> Guide
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {activeContent.sizes.map((size) => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all duration-300 ${selectedSize === size ? 'border-[var(--accent-blue)] bg-[var(--accent-blue)]/5 text-[var(--accent-blue)] shadow-lg' : 'border-gray-50 bg-gray-50 text-[var(--text-dim)] hover:border-gray-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => onSelectProduct()}
                    className="flex-grow btn-primary py-6 rounded-2xl shadow-2xl shadow-[var(--accent-blue)]/30 flex items-center justify-center gap-4 group/btn font-sans text-[11px]"
                  >
                    <ShoppingCart size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                    Configure & Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
