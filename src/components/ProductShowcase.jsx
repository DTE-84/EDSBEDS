import React, { useState } from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

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
    <section id="mattresses" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Mattress Collection</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card flex flex-col md:flex-row gap-12 items-center">
            {/* Product Image Placeholder */}
            <div 
              className="md:w-1/2 w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer group relative"
              onClick={onSelectProduct}
            >
               <div className="text-gray-300 text-6xl font-bold group-hover:scale-110 transition-transform duration-500">RZ</div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-red)] mb-4">
                Featured Product
              </span>
              <h3 className="text-3xl font-bold mb-2 cursor-pointer hover:text-[var(--accent-blue)] transition-colors" onClick={onSelectProduct}>
                RZ Cool Flex Pro
              </h3>
              <p className="text-sm text-[var(--text-dim)] mb-6 font-medium">14" Memory Foam Premium Mattress</p>
              
              <div className="text-4xl font-bold mb-8 text-[var(--accent-blue)]">
                ${priceMap[selectedSize].toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>

              {/* Selection Box */}
              <div className="w-full space-y-6 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Select Size</label>
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-[var(--bg-secondary)] border-none p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm font-medium"
                  >
                    <option value="Twin XL">Twin XL ($1,299.00)</option>
                    <option value="Queen">Queen ($1,699.00)</option>
                    <option value="King">King ($1,999.00)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">Quantity</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="number" 
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-24 bg-[var(--bg-secondary)] border-none p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm font-medium"
                    />
                    <button 
                      onClick={handleAddToCart}
                      className="flex-grow btn-primary flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-black/5 w-full mb-8" />

              <ul className="space-y-3">
                <li className="text-sm font-medium text-[var(--text-main)] flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--accent-blue)]" />
                  14-Inch High-Density Memory Foam
                </li>
                <li className="text-sm font-medium text-[var(--text-main)] flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--accent-blue)]" />
                  Cooling Gel-Infused Technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
