import React from 'react';

const products = [
  {
    id: 1,
    name: "The Gateway Cloud",
    type: "Premium Hybrid",
    price: "1,299",
    features: ["Cooling Gel", "Same-Day Delivery", "Personalized Setup"],
    badge: "Bestseller",
    color: "var(--accent)"
  },
  {
    id: 2,
    name: "The Arch Firm",
    type: "Classic Innerspring",
    price: "999",
    features: ["Lumbar Support", "STL Heritage", "Preferred Service Guarantee"],
    badge: "Local Favorite",
    color: "#4A4A4A"
  },
  {
    id: 3,
    name: "STL Soul",
    type: "Plush Memory Foam",
    price: "1,499",
    features: ["Zero-G Feel", "Sunday Delivery Available", "No-Pressure Consult"],
    badge: "Luxury",
    color: "var(--accent)"
  }
];

const ProductShowcase = () => {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent)] mb-4 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif">Curated Comfort</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-morphism rounded-3xl p-8 flex flex-col h-full hover:border-[var(--accent)] transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] mb-1 block">{product.type}</span>
                  <h3 className="text-2xl font-serif">{product.name}</h3>
                </div>
                <span className="bg-[var(--accent-soft)] text-[var(--accent)] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{product.badge}</span>
              </div>
              
              <div className="text-4xl font-bold mb-8 text-[var(--text-main)]">
                <span className="text-lg font-medium align-top mr-1">$</span>
                {product.price}
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-dim)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-40" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-secondary w-full group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
