import { Link } from "react-router-dom";
import { CheckCircle2, Truck, Lock, RotateCcw, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section - Image Focused */}
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Image */}
          <img
  src={`${import.meta.env.BASE_URL}shibainu.png`}
  // This resolves to: /EDSBEDS/shibainu.png ✓
  alt="Designed for Dreaming - Premium Mattress"
  className="absolute inset-0 w-full h-full object-cover"
/>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Designed for <span className="text-primary italic">Dreaming</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto drop-shadow-md">
                Experience the peak of sleep technology with our premium patriotic collection.
              </p>

              <div className="pt-8">
                <Link
                  to="/mattresses"
                  className="inline-block px-12 py-5 bg-primary hover:bg-primary/90 text-white font-black text-xl rounded-xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest"
                >
                  Shop the Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-white py-12 md:py-16 border-b border-border">
          <div className="container-max">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-black text-foreground uppercase tracking-widest">
                  1K+ 5-Star Reviews
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-black text-foreground uppercase tracking-widest">
                  Premium Warranties
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-black text-foreground uppercase tracking-widest">
                  Free Shipping
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <RotateCcw className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-black text-foreground uppercase tracking-widest">
                  100 Night Trial
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-black text-foreground uppercase tracking-widest">
                  US Manufactured
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured Collections
              </h2>
              <p className="text-foreground/60">
                Handpicked for superior comfort and quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Classic Comfort",
                  price: "$699",
                  description: "Perfect entry-level mattress",
                  features: ["Medium Firmness", "Hypoallergenic", "10-Year Warranty"],
                },
                {
                  name: "Premium Rest",
                  price: "$1,299",
                  description: "Premium luxury at fair price",
                  features: ["Plush Support", "Memory Foam", "20-Year Warranty"],
                  featured: true,
                },
                {
                  name: "Deluxe Sleep",
                  price: "$1,899",
                  description: "The ultimate sleep experience",
                  features: ["Luxury Materials", "Advanced Cooling", "Lifetime Warranty"],
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden transition-all ${
                    product.featured
                      ? "ring-2 ring-primary shadow-lg scale-105"
                      : "border border-border hover:border-primary/20"
                  } ${product.featured ? "bg-card" : "bg-background"}`}
                >
                  {product.featured && (
                    <div className="bg-primary text-white text-xs font-bold py-2 px-4 text-center">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-4">
                      {product.price}
                    </p>
                    <p className="text-sm text-foreground/60 mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-foreground/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/product"
                      className={`w-full block text-center font-bold py-3 rounded-lg transition-all ${
                        product.featured
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Why Choose EDSBEDS?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lock,
                  title: "100% Satisfaction",
                  description: "Try risk-free with our money-back guarantee",
                },
                {
                  icon: Truck,
                  title: "Free Shipping",
                  description: "Complimentary delivery on all orders",
                },
                {
                  icon: RotateCcw,
                  title: "Easy Returns",
                  description: "Hassle-free returns within 100 nights",
                },
                {
                  icon: CheckCircle2,
                  title: "Expert Support",
                  description: "Dedicated customer service team",
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="p-8 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container-max relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Sleep Better?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have transformed their
              sleep with EDSBEDS mattresses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mattresses"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-background">
          <div className="container-max max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-foreground/60 mb-8">
              Subscribe to receive sleep tips, new product launches, and
              exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-foreground/50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
