import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              Get in Touch
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:hello@edsbeds.com"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        hello@edsbeds.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-foreground/60">
                        123 Sleep Street<br />
                        Dream City, DC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-8">
                  Send us a Message
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Form submission is a placeholder. Integrate with your backend to process messages."
                    );
                  }}
                >
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      rows={4}
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-accent w-full font-semibold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
