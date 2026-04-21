import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-24 border-t border-black/5">
      <div className="container flex flex-col items-center">
        {/* Brand - Centered Above */}
        <div className="mb-12">
          <span className="text-2xl font-black tracking-tighter text-[var(--accent-blue)]">
            EDS<span className="text-[var(--text-main)]">BEDS</span>
          </span>
        </div>

        {/* Links Row - Centered below Brand */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16 text-center">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)] mb-6 font-sans">Collections</h4>
            <ul className="space-y-3 text-xs text-[var(--text-dim)] font-medium">
              <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-[var(--accent-blue)] transition-colors">Mattresses</button></li>
              <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-[var(--accent-blue)] transition-colors">Adjustable Bases</button></li>
              <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-[var(--accent-blue)] transition-colors">Bedding</button></li>
              <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-[var(--accent-blue)] transition-colors">Bed Frames</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)] mb-6 font-sans">Support</h4>
            <ul className="space-y-3 text-xs text-[var(--text-dim)] font-medium">
              <li><button className="hover:text-[var(--accent-blue)] transition-colors">Contact Us</button></li>
              <li><button className="hover:text-[var(--accent-blue)] transition-colors">Trial Policy</button></li>
              <li><button className="hover:text-[var(--accent-blue)] transition-colors">Shipping</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)] mb-6 font-sans">Company</h4>
            <ul className="space-y-3 text-xs text-[var(--text-dim)] font-medium">
              <li><button className="hover:text-[var(--accent-blue)] transition-colors">About Us</button></li>
              <li><button className="hover:text-[var(--accent-blue)] transition-colors">Privacy</button></li>
              <li><button className="hover:text-[var(--accent-blue)] transition-colors">Terms</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-6 pt-12 border-t border-black/5 w-full max-w-2xl">
          <div className="text-[11px] font-medium text-[var(--text-dim)] font-sans">
            © 2026 DTE-Solutions. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[11px] font-medium text-[var(--text-dim)] font-sans">
            <span>Customer Support: (314) 452-8783</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
