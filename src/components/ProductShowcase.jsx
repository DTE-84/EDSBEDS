import React, { useState } from 'react';
import { ShoppingCart, ChevronRight, Zap, Star, Sparkles, Box, Layers, Layout } from 'lucide-react';

import mattressImg from '../assets/mattress_hero.png';
import baseImg from '../assets/base_luxury.png';
import beddingImg from '../assets/bedding_luxury.png';
import frameImg from '../assets/frame_luxury.png';

const inventory = {
  mattresses: [
    {
      id: 'rz-cool-choice-14',
      name: 'RZ Cool Choice 14"',
      tagline: 'Precision-built for absolute comfort.',
      description: '14-inches of high-density cooling memory foam engineered for human anatomy.',
      price: 1299.00,
      image: mattressImg,
      badge: 'Most Popular',
      icon: <Zap size={14} />
    }
  ],
  bases: [
    {
      id: 'rz-motion-base',
      name: 'RZ Motion Series',
      tagline: 'The peak of ergonomic logic.',
      description: 'Zero-gravity positioning with advanced massage nodes and whisper-quiet motors.',
      price: 899.00,
      image: baseImg,
      badge: 'Bestseller',
      icon: <Layout size={14} />
    },
    {
      id: 'rz-lite-base',
      name: 'RZ Foundation Lite',
      tagline: 'Essential structural integrity.',
      description: 'Fixed-height high-fidelity foundation with integrated wire-management.',
      price: 499.00,
      image: baseImg, // Reusing base image or use a specific one if available
      badge: 'Value',
      icon: <Box size={14} />
    }
  ],
  bedding: [
    {
      id: 'rz-cloud-pillow',
      name: 'Cloud-Logic Pillow',
      tagline: 'Cervical alignment, perfected.',
      description: 'Shredded cooling-gel foam that inherits your head shape for zero-strain sleep.',
      price: 99.00,
      image: beddingImg,
      badge: 'Essential',
      icon: <Layers size={14} />
    }
  ],
  frames: [
    {
      id: 'rz-walnut-frame',
      name: 'Walnut Float Frame',
      tagline: 'Architectural silhouette.',
      description: 'Solid walnut frame with a floating aesthetic and structural precision.',
      price: 1499.00,
      image: frameImg,
      badge: 'Designer Choice',
      icon: <Box size={14} />
    }
  ]
};

const ProductShowcase = ({ category = 'mattresses', onSelectProduct, onStartQuiz }) => {
  const currentItems = inventory[category] || [];

  return (
    <section id={category} className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        
        {category === 'mattresses' && (
          <div className="max-w-5xl mx-auto mb-20 animate-in fade-in">
             <div className="bg-gradient-to-r from-[var(--accent-blue)] to-[#005bb5] p-8 md:p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-1000" />
                <div className="space-y-4 relative z-10 text-center md:text-left">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <Sparkles size={12} className="text-white" />
                      <span className="text-[10px] font-black uppercase tracking-widest font-sans">Sleep Algorithm</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Not sure which bed is right?</h2>
                   <p className="text-lg opacity-90 max-w-md font-medium">Take our 60-second quiz and get matched to your perfect sleep profile.</p>
                </div>
                <button 
                  onClick={onStartQuiz}
                  className="bg-white text-[var(--accent-blue)] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl relative z-10 shrink-0 font-sans"
                >
                  Start Sleep Quiz
                </button>
             </div>
          </div>
        )}

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-blue)]/5 rounded-full mb-2">
            <Zap size={12} className="text-[var(--accent-blue)]" />
            <span className="text-[10px] font-black text-[var(--accent-blue)] tracking-widest uppercase font-sans">Precision Selection</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter capitalize">The <span className="text-[var(--accent-red)]">{category.replace('s', '')}</span> Collection</h2>
          <div className="w-24 h-1 bg-[var(--accent-blue)] mx-auto rounded-full opacity-20" />
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center hover:shadow-[0_40px_120px_rgba(0,77,227,0.1)] transition-all duration-700 group">
              
              {/* Image Placeholder */}
              <div 
                className="lg:w-1/2 w-full aspect-square bg-[var(--bg-secondary)] rounded-[32px] flex items-center justify-center overflow-hidden cursor-pointer relative shadow-inner"
                onClick={() => onSelectProduct(item)}
              >
               <img 
                 src={item.image} 
                 alt={item.name}
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                   <div className="w-2 h-2 bg-[var(--accent-red)] rounded-full animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-main)] font-sans">{item.badge}</span>
                 </div>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[var(--accent-blue)]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-widest font-sans">Premium Rated</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                  {item.name}
                </h3>
                
                <p className="text-base text-[var(--text-dim)] mb-10 font-medium leading-relaxed max-w-md italic">
                  {item.tagline} <span className="text-[var(--text-main)] not-italic">{item.description}</span>
                </p>
                
                <div className="text-5xl font-black mb-10 text-[var(--text-main)] tracking-tighter flex items-baseline gap-1 font-sans">
                  <span className="text-2xl text-[var(--accent-red)] font-black">$</span>
                  {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>

                <button 
                  onClick={() => onSelectProduct(item)}
                  className="w-full lg:w-auto btn-primary py-5 px-12"
                >
                  <ShoppingCart size={18} className="mr-3" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
