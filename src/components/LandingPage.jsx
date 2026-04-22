import React from 'react';
import Hero from './Hero';
import ReviewTicker from './ReviewTicker';
import ProductShowcase from './ProductShowcase';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      
      {/* FEATURED MATTRESS & QUIZ */}
      <ProductShowcase type="mattresses" />

      {/* 5-STAR SPECIALS SECTION */}

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-20">
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 italic">Exclusive <span className="text-[var(--accent-blue)] not-italic">Offers.</span></h2>
             <div className="w-24 h-1 bg-[var(--accent-red)] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
             {/* High-Fidelity Card 1 */}
             <div className="card-upscale group relative overflow-hidden bg-white border border-gray-50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-red)]/5 rounded-bl-full group-hover:scale-125 transition-transform duration-1000" />
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-red)] mb-6 block font-sans">Seasonal Event</span>
                  <h3 className="text-5xl font-black mb-6 italic tracking-tighter leading-none">Spring <br/><span className="text-[var(--accent-red)]">Specials.</span></h3>
                  <p className="text-xl text-[var(--text-dim)] mb-12 font-medium leading-relaxed">Save up to 30% on select premium bases and mattresses. Experience the legacy of comfort.</p>
                  <button 
                    onClick={() => navigate('/appointment')} 
                    className="btn-secondary"
                  >
                    Book Private Trial
                  </button>
                </div>
             </div>
             
             {/* High-Fidelity Card 2 */}
             <div className="card-upscale group relative overflow-hidden bg-white border border-gray-100">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--accent-blue)]/5 rounded-tr-full group-hover:scale-125 transition-transform duration-1000" />
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-blue)] mb-6 block font-sans">Worldwide Access</span>
                  <h3 className="text-5xl font-black mb-6 italic tracking-tighter leading-none">Global <br/><span className="text-[var(--accent-blue)]">Delivery.</span></h3>
                  <p className="text-xl text-[var(--text-dim)] mb-12 font-medium leading-relaxed">Precision-packed sleep solutions delivered directly to your doorstep, anywhere in the world.</p>
                  <button 
                    onClick={() => navigate('/mattresses')} 
                    className="btn-primary"
                  >
                    View Inventory
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Elegant Divider */}
      <div className="bg-gray-50/30 py-24">
         <div className="container text-center">
            <p className="text-[12px] font-black text-[var(--text-dim)] uppercase tracking-[0.6em] font-sans opacity-40">Precision Sleep Logic // National Expansion 2026</p>
         </div>
      </div>

      <ReviewTicker />
    </div>
  );
};

export default LandingPage;
