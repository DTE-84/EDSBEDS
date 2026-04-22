import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart, CheckCircle2, ChevronRight, Minus, Plus } from "lucide-react";

const PRODUCTS = [
  {
    id: "rz-cool-flex-pro",
    name: "RZ Cool Flex Pro",
    tagline: "The Future of Hybrid Sleep",
    description: "Experience the peak of sleep engineering. Our 11\" premium memory foam mattress combines high-density support with advanced cooling gel-infused technology. Precision-built to inherit your body shape and eliminate pressure points.",
    basePrice: 1299.0,
    sizes: [
      { label: "Twin XL", price: 1299.0 },
      { label: "Queen", price: 1699.0 },
      { label: "King", price: 1999.0 },
    ],
    features: [
      "11-Inch High-Density Memory Foam",
      "Cooling Gel-Infused Technology",
      "Pressure-Relieving Support",
      "100-Night Risk-Free Trial",
      "Lifetime Limited Warranty"
    ]
  }
];

export default function Products() {
  const [selectedSize, setSelectedSize] = useState(PRODUCTS[0].sizes[1]); // Default to Queen
  const [quantity, setQuantity] = useState(1);

  const handleQtyChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${PRODUCTS[0].name} (${selectedSize.label}) to your cart.`);
  };

  return (
    <>
      <Navigation />

      <main className="bg-background">
        <section className="py-12 md:py-20">
          <div className="container-max">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Product Visual */}
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-secondary rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="relative z-10 text-center">
                    <span className="text-8xl font-black text-primary/10 select-none">RZ</span>
                    <p className="mt-4 font-bold text-foreground/40 uppercase tracking-widest text-xs">Premium Hybrid Visual</p>
                  </div>
                </div>
                
                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-4">
                  {PRODUCTS[0].features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/70 bg-card p-3 rounded-xl border border-border">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                      Featured Mattress
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {PRODUCTS[0].name}
                  </h1>
                  <p className="text-xl font-medium text-primary italic mb-6">
                    {PRODUCTS[0].tagline}
                  </p>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {PRODUCTS[0].description}
                  </p>
                </div>

                <div className="h-px bg-border w-full" />

                {/* Configuration */}
                <div className="space-y-6">
                  {/* Size Selector Dropdown */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                      Select Size
                    </label>
                    <div className="relative group">
                      <select 
                        value={selectedSize.label}
                        onChange={(e) => {
                          const size = PRODUCTS[0].sizes.find(s => s.label === e.target.value);
                          if (size) setSelectedSize(size);
                        }}
                        className="w-full bg-card border-2 border-border p-4 rounded-xl outline-none appearance-none cursor-pointer text-sm font-bold transition-all hover:border-accent focus:ring-2 focus:ring-accent/20 pr-10"
                      >
                        {PRODUCTS[0].sizes.map((size) => (
                          <option key={size.label} value={size.label}>
                            {size.label} — ${size.price.toLocaleString()}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40 group-hover:text-accent transition-colors">
                        <ChevronRight className="w-5 h-5 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 items-end">
                    {/* Quantity */}
                    <div className="space-y-3 w-full sm:w-auto">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                        Quantity
                      </label>
                      <div className="flex items-center bg-card rounded-xl border border-border h-14 w-full sm:w-36 overflow-hidden">
                        <button 
                          onClick={() => handleQtyChange(-1)}
                          className="flex-1 h-full flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-bold">{quantity}</span>
                        <button 
                          onClick={() => handleQtyChange(1)}
                          className="flex-1 h-full flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex-1 w-full space-y-4">
                      <div className="flex items-baseline justify-between sm:justify-end gap-2">
                        <span className="text-sm font-medium text-foreground/40">Price:</span>
                        <span className="text-3xl font-bold text-foreground">
                          ${(selectedSize.price * quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <button 
                        onClick={handleAddToCart}
                        className="w-full btn-accent py-4 flex items-center justify-center gap-3 text-sm font-bold shadow-xl shadow-accent/20"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 p-6 rounded-2xl border border-border">
                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Preferred Shipping Logistics
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    Complimentary white-glove delivery available. Our logistics team ensures your RZ Cool Flex Pro arrives with precision-timed delivery and professional setup.
                  </p>
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
