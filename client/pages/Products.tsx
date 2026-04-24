import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ShoppingCart, ChevronRight, Minus, Plus, Truck, ShieldCheck, CreditCard, X, ZoomIn, ChevronDown, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'rz-cool-flex-pro',
    name: 'RZ Cool Flex Pro',
    tagline: 'The Future of Hybrid Sleep',
    description: 'Experience the peak of sleep engineering. Our 11" premium memory foam mattress combines high-density support with advanced cooling gel-infused technology. Precision-built to inherit your body shape and eliminate pressure points.',
    sizes: [
      { label: 'Twin XL', price: 1299.00 },
      { label: 'Queen', price: 1699.00 },
      { label: 'King', price: 1999.00 },
    ],
    features: [
      '11-Inch High-Density Memory Foam',
      'Cooling Gel-Infused Technology',
      'Pressure-Relieving Support',
      '100-Night Risk-Free Trial',
      'Lifetime Limited Warranty'
    ]
  }
];

const ProductShowcase = ({ onSelectProduct, onStartQuiz }) => {
  const [selectedSize, setSelectedSize] = useState(PRODUCTS[0].sizes[1]); // Default to Queen
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleQtyChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (onSelectProduct) {
      onSelectProduct();
    } else {
      // Fallback for when onSelectProduct is not provided, though ideally it always is.
      alert(`Added ${quantity} x ${PRODUCTS[0].name} (${selectedSize.label}) to your cart.`);
    }
  };

  return (
    <section id="mattresses" className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Quiz Prompt Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-in fade-in duration-700">
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
            <div key={item.id} className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center hover:shadow-[0_40px_110px_rgba(0,77,227,0.1)] transition-all duration-700 group">
              
              {/* Product Visual */}
              <div 
                className="lg:w-1/2 w-full aspect-square bg-[var(--bg-secondary)] rounded-[32px] flex items-center justify-center overflow-hidden cursor-pointer relative shadow-inner"
                onClick={() => onSelectProduct(item)}
              >
                 <div className="text-gray-200 text-9xl font-black group-hover:scale-110 group-hover:text-[var(--accent-blue)]/10 transition-all duration-1000 italic select-none">RZ</div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                   <div className="w-2 h-2 bg-[var(--accent-red)] rounded-full animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-main)] font-sans">{item.badge}</span>
                 </div>
              </div>

              {/* Product Details */}
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

                {/* Size Selector Dropdown */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-blue)] ml-1 font-sans">Configure Size</label>
                  <div className="relative group">
                    <select 
                      value={selectedSize.label}
                      onChange={(e) => {
                        const size = item.sizes.find(s => s.label === e.target.value);
                        if (size) setSelectedSize(size);
                      }}
                      className="w-full bg-card border-2 border-gray-100 p-5 rounded-[24px] outline-none appearance-none cursor-pointer text-lg font-black tracking-tight font-sans transition-all hover:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/5 shadow-sm group-hover:shadow-md"
                    >
                      {item.sizes.map((size) => (
                        <option key={size.label} value={size.label}>
                          {size.label} — ${size.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--accent-blue)] group-hover:text-[var(--accent-red)] transition-colors">
                      <ChevronDown size={24} strokeWidth={3} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-end">
                  {/* Quantity */}
                  <div className="space-y-3 w-full sm:w-auto">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-blue)] ml-1 font-sans text-center block sm:text-left">Quantity</label>
                    <div className="flex items-center bg-card rounded-[24px] border-2 border-gray-100 h-[72px] overflow-hidden shadow-inner">
                      <button onClick={() => handleQtyChange(-1)} className="flex-1 h-full flex items-center justify-center hover:bg-secondary transition-colors"><Minus size={20} strokeWidth={3} /></button>
                      <input type="number" readOnly value={quantity} className="w-16 text-center bg-transparent text-xl font-black font-sans [-moz-appearance:_textfield]" />
                      <button onClick={() => handleQtyChange(1)} className="flex-1 h-full flex items-center justify-center hover:bg-secondary transition-colors"><Plus size={20} strokeWidth={3} /></button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="flex-grow btn-primary py-4 h-[72px] rounded-[24px] shadow-2xl shadow-[var(--accent-blue)]/20 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-transform font-sans text-sm tracking-widest font-black uppercase overflow-hidden group/btn relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs / Details could go here */}
      </main>

      <Footer />
    </>
  );
}
