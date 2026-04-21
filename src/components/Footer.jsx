import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-24 border-t border-black/5">
      <div className="container flex flex-col items-center">
        {/* Brand - Centered Above */}
        <div className="mb-12">
          <span className="text-2xl font-bold tracking-tight text-[var(--accent-blue)]">
            EDSBEDS
          </span>
        </div>

        {/* Links Row - Centered below Brand */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16 text-center">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)] mb-6">Mattresses</h4>
            <ul className="space-y-3 text-xs text-[var(--text-dim)] font-medium">
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Cloud Hybrid</a></li>
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Classic Firm</a></li>
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Soul Plush</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)] mb-6">Support</h4>
            <ul className="space-y-3 text-xs text-[var(--text-dim)] font-medium">
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Trial Policy</a></li>
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)] mb-6">Company</h4>
            <ul className="space-y-3 text-xs text-[var(--text-dim)] font-medium">
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-6 pt-12 border-t border-black/5 w-full max-w-2xl">
          <div className="text-[11px] font-medium text-[var(--text-dim)]">
            © 2026 EdsBeds. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[11px] font-medium text-[var(--text-dim)]">
            <span>Customer Support: (314) 452-8783</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
