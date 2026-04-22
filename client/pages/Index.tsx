import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Truck, Lock, RotateCcw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/shibainu.png" 
              alt="Comfortable Mattress" 
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text legibility */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container-max relative z-10">
            <div className="flex flex-col items-center text-center text-white">
              {/* Badge */}
              <div className="inline-block px-4 py-2 mb-12 bg-accent/20 backdrop-blur-md rounded-full border border-accent/30">
                <span className="text-xs font-semibold text-white">
                  Premium Sleep Solutions
                </span>
              </div>

              {/* Main title and subheadline removed as they are embedded in the Luna background image */}

              {/* Centered Trust badges - Positioned under the image text */}
              <div className="grid grid-cols-3 gap-12 text-sm text-white/90 max-w-2xl">
                <div>
                  <p className="font-bold text-xl">100%</p>
                  <p className="text-white/70 text-xs uppercase tracking-widest">Money Back</p>
                </div>
                <div>
                  <p className="font-bold text-xl">10+</p>
                  <p className="text-white/70 text-xs uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="font-bold text-xl">5K+</p>
                  <p className="text-white/70 text-xs uppercase tracking-widest">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose EDSBEDS?
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                We're committed to providing you with the highest quality mattresses and exceptional customer service.
              </p>
            </div>

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

        {/* Featured Products Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Featured Collections
                </h2>
                <p className="text-foreground/60 mt-2">
                  Handpicked for superior comfort
                </p>
              </div>
              <Link
                to="/mattresses"
                className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Classic Comfort",
                  price: "$699",
                  description: "Perfect for budget-conscious buyers",
                  features: ["Medium Firmness", "Hypoallergenic", "10-Year Warranty"],
                },
                {
                  name: "Premium Rest",
                  price: "$1,299",
                  description: "Premium luxury at a fair price",
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
                      ? "ring-2 ring-accent shadow-lg scale-105"
                      : "border border-border hover:border-primary/20"
                  } ${
                    product.featured ? "bg-card" : "bg-background"
                  }`}
                >
                  {product.featured && (
                    <div className="bg-accent text-accent-foreground text-xs font-bold py-2 px-4 text-center">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
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
                      to="/mattresses"
                      className={`w-full block text-center font-semibold py-3 rounded-lg transition-all ${
                        product.featured
                          ? "btn-accent"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/mattresses"
              className="block sm:hidden mt-8 btn-accent text-center font-semibold"
            >
              View All Products
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container-max relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Sleep Better?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have transformed their sleep with EDSBEDS mattresses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mattresses"
                className="btn-primary bg-primary-foreground text-primary hover:opacity-90 font-semibold"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-background">
          <div className="container-max max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-foreground/60 mb-8">
              Subscribe to receive sleep tips, new product launches, and exclusive offers.
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
                className="btn-primary font-semibold px-8"
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
