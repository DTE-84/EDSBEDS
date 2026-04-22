import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main>
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="container-max text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              404
            </h1>
            <p className="text-2xl font-semibold text-foreground mb-4">
              Page Not Found
            </p>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <Link to="/" className="btn-primary font-semibold">
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
