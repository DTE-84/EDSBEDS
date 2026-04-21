import React, { useState } from 'react';
import { ShoppingCart, ChevronRight, Zap } from 'lucide-react';

const ProductShowcase = ({ onSelectProduct }) => {
  const [selectedSize, setSelectedSize] = useState('Queen');
  const [quantity, setQuantity] = useState(1);

  const priceMap = {
    'Twin XL': 1299.00,
    'Queen': 1699.00,
    'King': 1999.00
  };

  const handleAddToCart = () => {
    if (onSelectProduct) {
      onSelectProduct();
    } else {
      alert(`Added ${quantity} x RZ Cool Flex Pro (${selectedSize}) to cart.`);
    }
  };

  return (
    <section id="mattresses" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Shading */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-blue)]/5 rounded-full mb-2">
            <Zap size={12} className="text-[var(--accent-blue)]" />
            <span className="text-[10px] font-bold text-[var(--accent-blue)] tracking-widest uppercase">Expert Curation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The Mattress <span className="text-[var(--accent-red)]">Collection</span></h2>
          <div className="w-24 h-1 bg-[var(--accent-blue)] mx-auto rounded-full opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center hover:shadow-[0_40px_120px_rgba(0,77,227,0.1)] transition-all duration-700 group">
            
            {/* Product Image Placeholder */}
            <div 
              className="lg:w-1/2 w-full aspect-square bg-[var(--bg-secondary)] rounded-[32px] flex items-center justify-center overflow-hidden cursor-pointer relative shadow-inner"
              onClick={onSelectProduct}
            >
               <div className="text-gray-200 text-9xl font-black group-hover:scale-110 group-hover:text-[var(--accent-blue)]/10 transition-all duration-1000 italic select-none">RZ</div>
               <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               
               {/* Floating Badge */}
               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                 <div className="w-2 h-2 bg-[var(--accent-red)] rounded-full animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)]">Most Popular</span>
               </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[var(--accent-blue)]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-widest">Premium Rated</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 cursor-pointer hover:text-[var(--accent-blue)] transition-colors duration-300" onClick={onSelectProduct}>
                RZ Cool Choice <span className="text-[var(--accent-blue)]">14"</span>
              </h3>
              
              <p className="text-base text-[var(--text-dim)] mb-10 font-medium leading-relaxed max-w-md">
                Experience the peak of sleep engineering. <span className="text-[var(--text-main)]">14-inches of high-density cooling memory foam</span> precision-built for your body.
              </p>
              
              <div className="text-5xl font-bold mb-10 text-[var(--text-main)] tracking-tighter flex items-baseline gap-1">
                <span className="text-2xl text-[var(--accent-red)] font-black">$</span>
                {priceMap[selectedSize].toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>

              {/* Selection Box */}
              <div className="w-full space-y-8 mb-10">
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Select Your Size</label>
                    <span className="text-[10px] font-bold text-[var(--accent-blue)] uppercase tracking-widest">Free Shipping</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.keys(priceMap).map((size) => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-4 rounded-2xl text-[10px] font-bold uppercase tracking-wider border-2 transition-all ${selectedSize === size ? 'border-[var(--accent-blue)] bg-[var(--accent-blue)]/5 text-[var(--accent-blue)] shadow-md' : 'border-gray-50 bg-gray-50 text-[var(--text-dim)] hover:border-gray-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-grow btn-primary py-5 rounded-2xl shadow-xl shadow-[var(--accent-blue)]/20 flex items-center justify-center gap-3 group/btn"
                  >
                    <ShoppingCart size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                    View Details
                  </button>
                </div>
              </div>

              <div className="h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent w-full mb-8" />

              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-blue)]/5 flex items-center justify-center text-[var(--accent-blue)]">
                    <Zap size={14} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Cooling Gel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-red)]/5 flex items-center justify-center text-[var(--accent-red)]">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Elite Support</span>
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
