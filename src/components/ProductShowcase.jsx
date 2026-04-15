import { ShoppingBag, Star, Zap, ShoppingCart } from 'lucide-react';

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
    features: ["Lumbar Support", "Watson Road Heritage", "Ed's Service Guarantee"],
    badge: "Local Pride",
    color: "#C0C0C0"
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
    <section id="collections" className="py-24 bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Collection</h2>
            <p className="text-[var(--text-dim)] max-w-xl leading-relaxed">
              Each mattress is surgically engineered for the STL spirit. Luxury isn't a option—it's the core. 
            </p>
          </div>
          <a href="#collections" className="text-[var(--accent)] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            View All Models <ShoppingBag size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="glass-morphism p-8 group relative overflow-hidden flex flex-col h-full hover:border-[var(--accent)] transition-colors"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white/5 px-3 py-1 rounded-full text-[10px] uppercase tracking-tighter font-bold border border-white/10">
                {product.badge}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">{product.type}</p>
              </div>

              <div className="mb-8 flex-grow">
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-dim)]">
                      <Zap size={14} className="text-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-sm text-[var(--text-dim)]">$</span>
                  <span className="text-3xl font-bold">{product.price}</span>
                </div>
                
                {/* Square Payment Mock Button */}
                <button className="w-full btn-neon flex items-center justify-center gap-2">
                  <ShoppingCart size={18} /> Buy with Square
                </button>
              </div>

              {/* Decorative hover element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--accent)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
