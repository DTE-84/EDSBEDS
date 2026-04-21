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
    'Queen': 1699.00,
    'King': 1999.00,
    'Cal King': 1999.00,
    'Full': 1499.00
  };

  const images = [
    "https://via.placeholder.com/800x600?text=RZ+Cool+Flex+Pro+Main",
    "https://via.placeholder.com/800x600?text=Layer+Details",
    "https://via.placeholder.com/800x600?text=Cooling+Technology",
    "https://via.placeholder.com/800x600?text=Edge+Support",
    "https://via.placeholder.com/800x600?text=Customer+Setup"
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
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-blue)] mb-12 transition-colors"
        >
          <ChevronRight size={14} className="rotate-180" />
          Back to Collections
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="flex gap-4 md:gap-6 h-fit sticky top-32">
            <div className="flex flex-col gap-4">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 md:w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? 'border-[var(--accent-red)]' : 'border-gray-100 opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            <div className="flex-grow relative group cursor-zoom-in" onClick={() => setIsZoomed(true)}>
              <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] relative">
                <img 
                  src={images[activeImage]} 
                  alt="RZ Cool Flex Pro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 right-6 p-3 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn size={20} className="text-[var(--text-main)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex text-gray-200">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-xs font-medium text-[var(--text-dim)]">(0 Reviews)</span>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight">RZ Cool Choice 14" Mattress</h1>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] bg-gray-100 px-3 py-1 rounded-full w-fit">
                Premium Memory Foam
              </div>

              <div className="text-4xl font-bold text-[var(--accent-red)]">
                ${prices[selectedSize].toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>

            {/* Shipping Box */}
            <div className="border-2 border-[var(--accent-red)] rounded-xl p-6 bg-[var(--accent-red)]/5">
              <div className="flex items-center gap-3 mb-2">
                <Truck size={18} className="text-[var(--accent-red)]" />
                <strong className="text-sm font-bold uppercase tracking-wide">Free Global Shipping</strong>
              </div>
              <p className="text-sm text-[var(--text-main)]">
                Estimated arrival: <span className="font-bold text-[var(--accent-blue)]">Saturday, April 25 - Tuesday, April 28</span>
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Select Size</label>
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-[var(--bg-secondary)] border-none p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm font-semibold appearance-none cursor-pointer"
                >
                  <option value="Twin XL">Twin XL ($1,299.00)</option>
                  <option value="Full">Full ($1,499.00)</option>
                  <option value="Queen">Queen ($1,699.00)</option>
                  <option value="King">King ($1,999.00)</option>
                  <option value="Cal King">Cal King ($1,999.00)</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="space-y-2 w-full md:w-fit">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Quantity</label>
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-[var(--bg-secondary)]">
                    <button onClick={() => handleQty('minus')} className="p-4 hover:bg-gray-100 transition-colors"><Minus size={18} /></button>
                    <input type="number" readOnly value={quantity} className="w-16 text-center bg-transparent text-sm font-bold" />
                    <button onClick={() => handleQty('plus')} className="p-4 hover:bg-gray-100 transition-colors"><Plus size={18} /></button>
                  </div>
                </div>
                
                <button className="flex-grow btn-primary py-4 h-[58px] flex items-center justify-center gap-3">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl text-xs font-semibold text-[var(--text-dim)] uppercase tracking-widest">
                Coming Soon Online
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
                <ShieldCheck size={20} className="text-[var(--accent-blue)]" />
                <span className="text-xs font-bold uppercase tracking-tight">HSA/FSA Eligible</span>
              </div>
              <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
                <CreditCard size={20} className="text-[var(--accent-blue)]" />
                <span className="text-xs font-bold uppercase tracking-tight">Snap Finance</span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-dim)] leading-relaxed">
              💡 <span className="font-bold text-[var(--text-main)]">HSA/FSA eligible:</span> Save an average of 30% when purchasing with health savings. <a href="#" className="text-[var(--accent-blue)] hover:underline">Learn more</a>
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl flex items-center gap-4">
              <div className="text-2xl font-black text-[var(--accent-blue)]">snap</div>
              <div className="flex-grow text-xs font-medium">
                Lease for as low as $58.70/week. No credit needed.
              </div>
              <a href="#" className="text-xs font-bold text-[var(--accent-blue)] hover:underline">Apply Now</a>
            </div>

          </div>
        </div>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-8 right-8 text-white hover:scale-110 transition-transform">
            <X size={32} />
          </button>
          <img 
            src={images[activeImage]} 
            alt="Zoomed View" 
            className="max-w-full max-h-full object-contain rounded-lg" 
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
