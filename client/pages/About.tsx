import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function About() {
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
                About Restful
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Our story is just beginning. This page is a placeholder waiting for your
                unique brand story. Tell us more about your mattress store, and we'll
                create a compelling about page that connects with your customers.
              </p>
              <div className="bg-secondary p-8 rounded-xl border border-border">
                <p className="text-foreground/60 text-sm">
                  Continue prompting with your brand story, mission, values, and history
                  to fill in this section with rich, meaningful content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
