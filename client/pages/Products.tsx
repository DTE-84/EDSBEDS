import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, ArrowRight } from "lucide-react";

const PRODUCT_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F05b324902f4143a8953bb0bca24a511c%2F715ae2d2b0a54e2ba043b183130e55cd?format=webp&width=800&height=1200";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "RZ Cool Choice 14\" Mattress",
      price: 1299,
      rating: 5,
      reviews: 0,
      description: "Perfect for budget-conscious buyers. Medium firmness with cooling gel.",
      featured: true,
    },
    {
      id: 2,
      name: "RZ Premium Rest 16\" Mattress",
      price: 1799,
      rating: 5,
      reviews: 0,
      description: "Luxury comfort with advanced memory foam technology.",
      featured: false,
    },
    {
      id: 3,
      name: "RZ Classic Comfort 12\" Mattress",
      price: 699,
      rating: 5,
      reviews: 0,
      description: "Budget-friendly option without compromising on quality.",
      featured: false,
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-secondary py-12">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Mattress Collection
            </h1>
            <p className="text-lg text-foreground/70">
              Premium mattresses designed for your perfect sleep
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to="/product"
                  className={`group rounded-xl overflow-hidden border-2 transition-all hover:shadow-lg ${
                    product.featured
                      ? "border-primary ring-2 ring-primary/30 lg:col-span-1 lg:row-span-2"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="relative overflow-hidden bg-secondary aspect-square">
                    <img
                      src={PRODUCT_IMAGE}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-xs uppercase">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-accent">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-foreground/60">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 mb-4">
                      {product.description}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-primary">
                        ${product.price.toLocaleString()}
                      </p>
                      <div className="text-primary group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Why Our Mattresses?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Superior Comfort",
                  description: "Engineered foam layers for optimal support and comfort",
                },
                {
                  title: "Advanced Cooling",
                  description: "Gel-infused technology keeps you cool all night long",
                },
                {
                  title: "Durability",
                  description: "Built to last with premium materials and 10+ year warranties",
                },
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-primary">{i + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
