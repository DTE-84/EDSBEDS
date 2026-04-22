import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Minus, Plus, ShoppingCart, Truck, ShieldCheck, X, ZoomIn, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('Queen');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="container">
        {/* Breadcrumb */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-blue)] mb-12 transition-all group font-sans"
        >
          <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform text-[var(--accent-red)]" />
          Back to Inventory
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6 h-fit lg:sticky lg:top-32">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-20 md:w-24 aspect-square rounded-[20px] overflow-hidden border-2 transition-all ${activeImage === i ? 'border-[var(--accent-blue)] scale-105 shadow-xl shadow-[var(--accent-blue)]/10' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            <div className="flex-grow relative group cursor-zoom-in" onClick={() => setIsZoomed(true)}>
              <div className="rounded-[40px] overflow-hidden bg-gray-50 aspect-[4/3] relative shadow-2xl border border-gray-100 group-hover:shadow-[var(--accent-blue)]/5 transition-all duration-700">
                <img 
                  src={images[activeImage]} 
                  alt="RZ Cool Choice 14" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 right-8 p-4 bg-white/90 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all shadow-2xl scale-90 group-hover:scale-100">
                  <ZoomIn size={24} className="text-[var(--accent-blue)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex text-[var(--accent-blue)] bg-[var(--accent-blue)]/5 px-3 py-1 rounded-full border border-[var(--accent-blue)]/10">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="mr-0.5 last:mr-0" />)}
                </div>
                <span className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-[0.2em] font-sans">Professional Grade</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] italic">
                RZ Cool Choice <br/>
                <span className="text-[var(--accent-blue)] not-italic underline decoration-[var(--accent-red)] decoration-4 underline-offset-[12px]">14" Profile</span>
              </h1>
              
              <div className="text-5xl font-black text-[var(--text-main)] tracking-tighter font-sans flex items-baseline gap-1">
                <span className="text-2xl text-[var(--accent-red)]">$</span>
                {prices[selectedSize].toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>

            {/* Selection Engine */}
            <div className="space-y-10">
              {/* Custom Dropdown Box */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-blue)] ml-1 font-sans">Configure Size</label>
                <div className="relative group">
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-white border-2 border-gray-100 p-6 rounded-[24px] outline-none appearance-none cursor-pointer text-lg font-black tracking-tight font-sans transition-all hover:border-[var(--accent-blue)] focus:ring-4 focus:ring-[var(--accent-blue)]/5 shadow-sm group-hover:shadow-md"
                  >
                    {Object.keys(prices).map(size => (
                      <option key={size} value={size}>{size} — ${prices[size].toLocaleString()}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--accent-blue)] group-hover:text-[var(--accent-red)] transition-colors">
                    <ChevronDown size={24} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Quantity & Action */}
              <div className="flex flex-col sm:flex-row gap-6 items-end">
                <div className="space-y-4 w-full sm:w-fit">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] ml-1 font-sans text-center block sm:text-left">Quantity</label>
                  <div className="flex items-center bg-gray-50 rounded-[24px] border-2 border-gray-50 h-[72px] shadow-inner">
                    <button onClick={() => handleQty('minus')} className="px-8 hover:text-[var(--accent-red)] transition-all h-full"><Minus size={20} strokeWidth={3} /></button>
                    <input type="number" readOnly value={quantity} className="w-16 text-center bg-transparent text-xl font-black font-sans" />
                    <button onClick={() => handleQty('plus')} className="px-8 hover:text-[var(--accent-blue)] transition-all h-full"><Plus size={20} strokeWidth={3} /></button>
                  </div>
                </div>
                
                <button className="flex-grow btn-primary h-[72px] rounded-[24px] shadow-2xl shadow-[var(--accent-blue)]/30 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all font-sans text-sm tracking-widest font-black uppercase overflow-hidden group/btn relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center gap-5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[var(--accent-blue)] group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Trial Policy</p>
                   <p className="text-xs font-bold">100-Night Guarantee</p>
                </div>
              </div>
              <div className="bg-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center gap-5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[var(--accent-red)] group-hover:scale-110 transition-transform">
                  <Truck size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Shipping</p>
                   <p className="text-xs font-bold">Free Global Delivery</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Immersive Zoom Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-6 cursor-zoom-out animate-in fade-in duration-500 backdrop-blur-2xl"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-12 right-12 text-white/50 hover:text-white hover:scale-125 transition-all p-4">
            <X size={48} strokeWidth={1.5} />
          </button>
          <img 
            src={images[activeImage]} 
            alt="Zoomed View" 
            className="max-w-full max-h-full object-contain rounded-[40px] shadow-[0_0_120px_rgba(0,113,227,0.15)] scale-95 animate-in zoom-in-95 duration-700" 
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
