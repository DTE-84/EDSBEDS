import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function Products() {
  return (
    <>
      <Navigation />

      <main>
        <section className="section-padding">
          <div className="container-max">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Products Coming Soon
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We're building out our product catalog. Continue prompting to add more
                detailed content, product listings, and features to this section. For now,
                explore our{" "}
                <Link to="/" className="text-accent font-semibold hover:underline">
                  featured collections
                </Link>{" "}
                on the homepage.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
