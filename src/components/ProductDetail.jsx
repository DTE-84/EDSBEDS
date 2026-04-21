import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Minus, Plus, ShoppingCart, Truck, ShieldCheck, CreditCard, X, ZoomIn } from 'lucide-react';

const ProductDetail = ({ onBack }) => {
  const [selectedSize, setSelectedSize] = useState('Queen');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync with user's specific pricing
  const prices = {
    'Twin XL': 1299.00,
    'Full': 1499.00,
    'Queen': 1699.00,
    'King': 1999.00,
    'Cal King': 1999.00
  };

  const images = [
    "https://via.placeholder.com/800x600?text=RZ+Cool+Choice+Main",
    "https://via.placeholder.com/800x600?text=Cooling+Gel+Layer",
    "https://via.placeholder.com/800x600?text=14+Inch+Profile",
    "https://via.placeholder.com/800x600?text=Edge+Support+System",
    "https://via.placeholder.com/800x600?text=Premium+Cover"
  ];

  const handleQty = (dir) => {
    if (dir === 'plus') setQuantity(q => q + 1);
    if (dir === 'minus' && quantity > 1) setQuantity(q => q - 1);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="container">
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-blue)] mb-12 transition-colors group"
        >
          <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Collections
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 h-fit lg:sticky lg:top-32">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-20 md:w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all shadow-sm ${activeImage === i ? 'border-[var(--accent-red)] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            <div className="flex-grow relative group cursor-zoom-in" onClick={() => setIsZoomed(true)}>
              <div className="rounded-[32px] overflow-hidden bg-gray-50 aspect-[4/3] relative shadow-2xl border border-gray-100">
                <img 
                  src={images[activeImage]} 
                  alt="RZ Cool Choice 14" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 right-8 p-4 bg-white/90 backdrop-blur rounded-2xl opacity-0 group-hover:opacity-100 transition-all shadow-xl scale-90 group-hover:scale-100">
                  <ZoomIn size={24} className="text-[var(--text-main)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex text-[var(--accent-blue)]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">0 Reviews</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">RZ Cool Choice <br/><span className="text-[var(--accent-blue)]">14" Mattress</span></h1>
              
              <div className="flex flex-wrap gap-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-red)] bg-[var(--accent-red)]/5 px-3 py-1.5 rounded-lg border border-[var(--accent-red)]/10">
                  Premium Memory Foam
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-blue)] bg-[var(--accent-blue)]/5 px-3 py-1.5 rounded-lg border border-[var(--accent-blue)]/10">
                  HSA/FSA Eligible
                </div>
              </div>

              <div className="text-5xl font-bold text-[var(--text-main)] tracking-tighter">
                ${prices[selectedSize].toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>

            {/* Shipping Box */}
            <div className="border border-gray-100 rounded-[24px] p-6 bg-white shadow-xl shadow-black/[0.02] relative overflow-hidden group hover:border-[var(--accent-red)]/20 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-red)]/5 rounded-bl-full transition-all group-hover:scale-110" />
              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-red)]/10 flex items-center justify-center text-[var(--accent-red)]">
                  <Truck size={20} />
                </div>
                <strong className="text-sm font-bold uppercase tracking-widest">Free Global Shipping</strong>
              </div>
              <p className="text-sm text-[var(--text-dim)] font-medium relative z-10 leading-relaxed">
                Estimated arrival: <span className="font-bold text-[var(--accent-blue)]">Saturday, April 25 - Tuesday, April 28</span>
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] ml-1">Select Size</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.keys(prices).map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-4 px-2 rounded-2xl text-[11px] font-bold uppercase tracking-wider border-2 transition-all ${selectedSize === size ? 'border-[var(--accent-blue)] bg-[var(--accent-blue)]/5 text-[var(--accent-blue)] shadow-md' : 'border-gray-50 bg-gray-50 text-[var(--text-dim)] hover:border-gray-200 hover:bg-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="space-y-3 w-full md:w-fit">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] ml-1">Quantity</label>
                  <div className="flex items-center border-2 border-gray-50 rounded-2xl overflow-hidden bg-gray-50 h-[64px]">
                    <button onClick={() => handleQty('minus')} className="px-6 hover:bg-white hover:text-[var(--accent-red)] transition-all h-full"><Minus size={18} /></button>
                    <input type="number" readOnly value={quantity} className="w-16 text-center bg-transparent text-lg font-bold" />
                    <button onClick={() => handleQty('plus')} className="px-6 hover:bg-white hover:text-[var(--accent-blue)] transition-all h-full"><Plus size={18} /></button>
                  </div>
                </div>
                
                <button className="flex-grow btn-primary py-4 h-[64px] rounded-2xl shadow-xl shadow-[var(--accent-blue)]/20 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
              
              <div className="text-center p-5 bg-gray-50/50 rounded-2xl text-xs font-bold text-[var(--text-dim)] uppercase tracking-widest border border-dashed border-gray-200">
                Coming Soon Online
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] p-8 rounded-[32px] border border-gray-100 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-blue)]/5 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="text-3xl font-black text-[var(--accent-blue)] relative z-10 italic">snap</div>
              <div className="flex-grow text-sm font-semibold text-[var(--text-dim)] leading-relaxed relative z-10">
                Lease for as low as $58.70/week. <br/>
                <span className="text-[var(--text-main)]">No credit needed. Instant decisions.</span>
              </div>
              <a href="#" className="btn-primary px-8 py-3 rounded-xl text-xs relative z-10 shadow-lg shadow-[var(--accent-blue)]/10">Apply Now</a>
            </div>

          </div>
        </div>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-300 backdrop-blur-xl"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-8 right-8 text-white hover:scale-125 transition-transform p-4">
            <X size={40} />
          </button>
          <img 
            src={images[activeImage]} 
            alt="Zoomed View" 
            className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_0_100px_rgba(255,255,255,0.1)]" 
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
