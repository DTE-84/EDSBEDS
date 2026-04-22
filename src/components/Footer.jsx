import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-gray-200">
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="text-2xl font-black tracking-tighter text-[var(--text-main)]">EDS</span>
              <span className="text-2xl font-black tracking-tighter text-[var(--accent-blue)]">BEDS</span>
            </div>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-6">
              Quincy's premier destination for quality mattresses, adjustable bases, and sleep solutions. Family-owned and dedicated to your best night's sleep.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent-blue)] hover:border-[var(--accent-blue)] transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent-red)] hover:border-[var(--accent-red)] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-main)] mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Mattresses', 'Adjustable Bases', 'Bedding', 'Bed Frames'].map((item) => (
                <li key={item}>
                  <button className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-blue)] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-main)] mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                'Sleep Quiz',
                '100-Night Trial',
                'Delivery Info',
                'Financing Options',
                'Contact Us'
              ].map((item) => (
                <li key={item}>
                  <button className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-blue)] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-main)] mb-6">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--accent-blue)] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-[var(--text-dim)] leading-relaxed">
                  123 Broadway Street<br />
                  Quincy, IL 62301
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[var(--accent-blue)] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:3144528783"
                  className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-blue)] transition-colors"
                >
                  (314) 452-8783
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[var(--accent-blue)] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@edsbeds.com"
                  className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-blue)] transition-colors"
                >
                  info@edsbeds.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[var(--accent-blue)] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-[var(--text-dim)] leading-relaxed">
                  Mon-Sat: 10am - 8pm<br />
                  Sunday: 12pm - 6pm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-dim)]">
              © {currentYear} EdsBeds. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-blue)] transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-blue)] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
