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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
...
            </div>

            {/* Quiz Banner */}
            <div className="relative rounded-[3rem] overflow-hidden bg-primary p-8 md:p-16 text-white text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                  <Sparkles className="w-3 h-3" />
                  Free 60-Second Profile
                </div>
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-tight">
                    Not Sure Which <br className="hidden md:block"/> Mattress is Right?
                </h2>
                <p className="text-lg opacity-80 max-w-xl font-medium">
                    Take our precision sleep matching quiz and discover the exact technology engineered for your body and habits.
                </p>
                <div className="pt-4">
                    <Link
                        to="/quiz"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-white text-primary font-black uppercase tracking-widest rounded-xl hover:bg-white/90 transition-all group"
                    >
                        Start Sleep Quiz <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
              <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                 <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 flex items-center justify-center p-8 bg-white/5 backdrop-blur-sm shadow-2xl animate-pulse">
                    <Zap className="w-24 h-24 md:w-32 md:h-32 text-white" />
                 </div>
              </div>
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
