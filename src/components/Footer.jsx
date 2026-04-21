import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-black/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-[var(--accent-blue)] mb-6 block">
              EDSBEDS
            </span>
            <p className="text-sm text-[var(--text-dim)] font-medium leading-relaxed">
              Premium sleep solutions for everyone. Precision comfort meet minimalist design.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Mattresses</h4>
            <ul className="space-y-4 text-sm text-[var(--text-dim)] font-medium">
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Cloud Hybrid</a></li>
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Classic Firm</a></li>
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Soul Plush</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-[var(--text-dim)] font-medium">
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Trial Policy</a></li>
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[var(--text-dim)] font-medium">
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[var(--text-main)] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-black/5">
          <div className="text-[12px] font-medium text-[var(--text-dim)]">
            © 2026 EdsBeds. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[12px] font-medium text-[var(--text-dim)]">
            <span>Global Shipping Available</span>
            <span>Customer Support: (314) 452-8783</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
