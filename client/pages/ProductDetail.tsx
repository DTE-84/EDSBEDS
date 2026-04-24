import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Minus,
  Plus,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PRODUCT_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F05b324902f4143a8953bb0bca24a511c%2F715ae2d2b0a54e2ba043b183130e55cd?format=webp&width=800&height=1200";

interface SizeOption {
  size: string;
  price: number;
}

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState<string>("Twin XL");
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Size and pricing data
  const sizes: SizeOption[] = [
    { size: "Twin XL", price: 699 },
    { size: "Full", price: 799 },
    { size: "Queen", price: 1299 },
    { size: "King", price: 1499 },
    { size: "Cal King", price: 1499 },
  ];

  // Mock product images - in real app, these would be different images
  const productImages = [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE];

  const currentPrice = sizes.find((s) => s.size === selectedSize)?.price || 1299;

  const handleQuantityChange = (change: number) => {
    const newQty = quantity + change;
    if (newQty > 0) setQuantity(newQty);
  };

  const handleImageNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSelectedImageIndex((prev) =>
        prev === 0 ? productImages.length - 1 : prev - 1
      );
    } else {
      setSelectedImageIndex((prev) =>
        prev === productImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <>
      <Navigation />

      <main>
        <section className="section-padding">
          <div className="container-max">
            {/* Breadcrumb */}
            <Link
              to="/mattresses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity mb-12"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Mattresses
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left: Thumbnail Gallery */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="space-y-3">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? "border-primary shadow-lg"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Center: Main Image with Zoom */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative">
                  {/* Main Image */}
                  <div
                    className="aspect-square rounded-xl overflow-hidden bg-secondary cursor-zoom-in relative group"
                    onClick={() => setIsZoomed(true)}
                  >
                    <img
                      src={productImages[selectedImageIndex]}
                      alt="RZ Cool Choice 14 Mattress"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />

                    {/* Zoom Indicator */}
                    <div className="absolute bottom-4 right-4 bg-foreground/90 text-primary-foreground p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => handleImageNavigation("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleImageNavigation("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-foreground/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImageIndex + 1} / {productImages.length}
                  </div>
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="lg:col-span-2 order-3">
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">
                        (0 Reviews)
                      </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      RZ Cool Choice 14" Mattress
                    </h1>
                    <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                      Mattress
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <p className="text-4xl font-bold text-primary">
                      ${currentPrice.toLocaleString()}
                    </p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Free Shipping! Get it between Saturday, April 25 – Tuesday, April 28
                    </p>
                  </div>

                  {/* Size Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-4">
                      Size
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground font-semibold appearance-none cursor-pointer hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {sizes.map((option) => (
                          <option key={option.size} value={option.size}>
                            {option.size} — ${option.price.toLocaleString()}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/60 pointer-events-none rotate-90" />
                    </div>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-foreground">
                      Quantity
                    </label>
                    <div className="flex gap-4">
                      <div className="flex items-center border-2 border-border rounded-lg bg-card">
                        <button
                          onClick={() => handleQuantityChange(-1)}
                          className="p-3 hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-5 h-5 text-foreground/60" />
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          readOnly
                          className="w-16 text-center bg-transparent font-bold text-lg"
                        />
                        <button
                          onClick={() => handleQuantityChange(1)}
                          className="p-3 hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-5 h-5 text-foreground/60" />
                        </button>
                      </div>
                    </div>

                    <button className="w-full btn-primary font-bold py-4 text-lg rounded-lg hover:opacity-90 transition-opacity">
                      Add to Cart
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    {[
                      {
                        icon: Shield,
                        title: "100% Satisfaction",
                        desc: "Money-back guarantee",
                      },
                      {
                        icon: Truck,
                        title: "Free Shipping",
                        desc: "On all orders",
                      },
                      {
                        icon: RotateCcw,
                        title: "Easy Returns",
                        desc: "Within 100 nights",
                      },
                    ].map((feature, i) => {
                      const Icon = feature.icon;
                      return (
                        <div key={i} className="flex gap-3">
                          <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">
                              {feature.title}
                            </p>
                            <p className="text-xs text-foreground/60">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* HSA/FSA Info */}
                  <div className="bg-secondary p-4 rounded-lg text-sm">
                    <p className="text-foreground/70">
                      💳 HSA/FSA eligible - Save an average of 30%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="mt-20 pt-12 border-t border-border">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  About This Mattress
                </h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    The RZ Cool Choice 14" Mattress is engineered for premium comfort
                    with advanced cooling technology and superior support. Perfect for
                    side, back, and combination sleepers who value temperature
                    regulation and pressure relief.
                  </p>
                  <p>
                    <strong className="text-foreground">Key Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>14-inch profile with premium foam layers</li>
                    <li>Advanced gel-infused cooling technology</li>
                    <li>Pressure-relieving memory foam</li>
                    <li>Breathable luxury cover</li>
                    <li>Edge support system</li>
                    <li>Hypoallergenic materials</li>
                    <li>10-year warranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2"
          >
            <ChevronLeft className="w-8 h-8 rotate-45" />
          </button>
          <img
            src={productImages[selectedImageIndex]}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}
