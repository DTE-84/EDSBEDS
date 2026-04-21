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
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 mb-20 text-center">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-main)] mb-8 font-sans">Collections</h4>
            <ul className="space-y-4 text-[10px] text-[var(--text-dim)] font-bold uppercase tracking-[0.1em] font-sans">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[var(--accent-blue)] transition-colors duration-300">Mattresses</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[var(--accent-blue)] transition-colors duration-300">Adjustable Bases</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[var(--accent-blue)] transition-colors duration-300">Bedding</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[var(--accent-blue)] transition-colors duration-300">Bed Frames</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-main)] mb-8 font-sans">Support</h4>
            <ul className="space-y-4 text-[10px] text-[var(--text-dim)] font-bold uppercase tracking-[0.1em] font-sans">
              <li><button className="hover:text-[var(--accent-red)] transition-colors duration-300">Contact Us</button></li>
              <li><button className="hover:text-[var(--accent-red)] transition-colors duration-300">Trial Policy</button></li>
              <li><button className="hover:text-[var(--accent-red)] transition-colors duration-300">Shipping Info</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-main)] mb-8 font-sans">Company</h4>
            <ul className="space-y-4 text-[10px] text-[var(--text-dim)] font-bold uppercase tracking-[0.1em] font-sans">
              <li><button className="hover:text-[var(--accent-blue)] transition-colors duration-300">About Our Story</button></li>
              <li><button className="hover:text-[var(--accent-blue)] transition-colors duration-300">Privacy Policy</button></li>
              <li><button className="hover:text-[var(--accent-blue)] transition-colors duration-300">Terms of Service</button></li>
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
