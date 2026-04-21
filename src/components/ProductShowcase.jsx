import React from 'react';

const products = [
  {
    id: 1,
    name: "Cloud Hybrid",
    type: "The flagship experience.",
    price: "1,299",
    features: ["Advanced Cooling", "Adaptive Support", "100-Night Trial"],
    badge: "Most Popular",
    color: "var(--accent-blue)"
  },
  {
    id: 2,
    name: "Classic Firm",
    type: "Essential comfort.",
    price: "999",
    features: ["Responsive Coils", "Eco-Friendly Foam", "Edge Support"],
    badge: "New",
    color: "var(--accent-red)"
  },
  {
    id: 3,
    name: "Soul Plush",
    type: "Luxury reimagined.",
    price: "1,499",
    features: ["Handcrafted Detail", "Zero-G Technology", "Luxury Cover"],
    badge: "Elite",
    color: "#000000"
  }
];

const ProductShowcase = () => {
  return (
    <section id="mattresses" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Which bed is right for you?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card flex flex-col items-center text-center">
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${product.badge === 'New' ? 'text-[var(--accent-red)]' : 'text-[var(--accent-blue)]'}`}>
                {product.badge}
              </span>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-[var(--text-dim)] mb-6">{product.type}</p>
              
              <div className="text-3xl font-bold mb-8">
                From ${product.price}
              </div>

              <div className="flex flex-col gap-3 mb-12">
                <a href="#" className="btn-primary">Buy</a>
                <a href="#" className="btn-secondary">Learn more &gt;</a>
              </div>

              <div className="h-[1px] bg-black/5 w-full mb-8" />

              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm font-medium text-[var(--text-main)]">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
