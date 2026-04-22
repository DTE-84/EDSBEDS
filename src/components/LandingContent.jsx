import React from 'react';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';

const LandingContent = ({ setView }) => {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] mb-6 tracking-tight">
              Why Choose <span className="text-[var(--accent-blue)]">EdsBeds</span>
            </h2>
            <p className="text-lg text-[var(--text-dim)] leading-relaxed">
              We're not just a mattress store. We're your local sleep experts, dedicated to finding your perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-[var(--accent-blue)]" size={32} />,
                title: "Premium Brands",
                desc: "Carefully curated selection of top-quality mattresses and sleep products"
              },
              {
                icon: <Shield className="text-[var(--accent-blue)]" size={32} />,
                title: "100-Night Trial",
                desc: "Risk-free guarantee. Love it or exchange it within 100 nights"
              },
              {
                icon: <Truck className="text-[var(--accent-blue)]" size={32} />,
                title: "White Glove Delivery",
                desc: "Professional setup and old mattress removal included"
              },
              {
                icon: <Star className="text-[var(--accent-blue)]" size={32} />,
                title: "Local Service",
                desc: "Family-owned and operated right here in Quincy, IL"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[var(--bg-secondary)] p-8 rounded-3xl border border-gray-100 hover:border-[var(--accent-blue)]/20 transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-blue)]/10 rounded-full mb-4">
                <Star size={12} className="text-[var(--accent-blue)]" fill="currentColor" />
                <span className="text-xs font-bold text-[var(--accent-blue)] uppercase tracking-widest">
                  Best Sellers
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[var(--text-main)] tracking-tight">
                Featured <span className="text-[var(--accent-blue)]">Collection</span>
              </h2>
            </div>
            <button
              onClick={() => setView('mattresses')}
              className="group flex items-center gap-2 text-sm font-bold text-[var(--text-main)] hover:text-[var(--accent-blue)] transition-colors"
            >
              View All Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "RZ Cool Choice 14\"",
                price: "From $1,299",
                tag: "Most Popular",
                tagColor: "blue"
              },
              {
                name: "RZ Cool Flex Pro 14\"",
                price: "From $1,299",
                tag: "Premium",
                tagColor: "red"
              },
              {
                name: "RZ Cool Plus 12\"",
                price: "From $799",
                tag: "Best Value",
                tagColor: "blue"
              }
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[var(--accent-blue)] transition-all hover:shadow-xl group cursor-pointer"
                onClick={() => setView('mattresses')}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-9xl font-black text-gray-200 group-hover:text-[var(--accent-blue)]/10 transition-colors">
                    RZ
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 ${
                    product.tagColor === 'blue' ? 'bg-[var(--accent-blue)]' : 'bg-[var(--accent-red)]'
                  } text-white text-xs font-bold uppercase tracking-wider rounded-full`}>
                    {product.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-black text-[var(--accent-blue)] mb-4">
                    {product.price}
                  </p>
                  <button className="w-full py-3 border-2 border-gray-200 rounded-full text-sm font-bold text-[var(--text-main)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Special Offers Card */}
            <div className="relative bg-gradient-to-br from-[var(--accent-red)] to-[#D72C21] p-12 rounded-[48px] text-white overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest">Limited Time</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                  Spring Sale
                </h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-md">
                  Save up to 30% on select premium mattresses and adjustable bases.
                </p>
                <button
                  onClick={() => setView('mattresses')}
                  className="bg-white text-[var(--accent-red)] px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl inline-flex items-center gap-2 group/btn"
                >
                  Shop Sale
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Book Appointment Card */}
            <div className="relative bg-gradient-to-br from-[var(--accent-blue)] to-[#0047AB] p-12 rounded-[48px] text-white overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest">White Glove</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                  Private Consultation
                </h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-md">
                  Schedule a one-on-one appointment with our sleep experts.
                </p>
                <button
                  onClick={() => setView('scheduling')}
                  className="bg-white text-[var(--accent-blue)] px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl inline-flex items-center gap-2 group/btn"
                >
                  Book Now
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-[var(--bg-secondary)] border-y border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl font-black text-[var(--accent-blue)] mb-1">10+</div>
              <div className="text-sm text-[var(--text-dim)] font-medium">Years in Business</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300" />
            <div>
              <div className="text-3xl font-black text-[var(--accent-blue)] mb-1">5,000+</div>
              <div className="text-sm text-[var(--text-dim)] font-medium">Happy Customers</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300" />
            <div>
              <div className="text-3xl font-black text-[var(--accent-blue)] mb-1">100%</div>
              <div className="text-sm text-[var(--text-dim)] font-medium">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingContent;
