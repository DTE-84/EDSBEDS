import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Mattresses", href: "/mattresses" },
    { label: "Foundations", href: "/foundations" },
    { label: "Accessories", href: "/accessories" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            EDSBEDS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/cart" className="relative text-foreground/70 hover:text-primary transition-colors p-2">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/contact"
              className="btn-accent text-xs font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-border shadow-lg">
            <div className="container-max py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between py-4 border-t border-border">
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Cart (0)
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-accent text-xs font-semibold px-4 py-2 rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
