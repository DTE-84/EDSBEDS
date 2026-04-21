import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[var(--bg-primary)] pt-32 pb-12 border-t border-white/5">
      <div className="container flex flex-col items-center">
        {/* Top: Brand Header */}
        <div className="text-center mb-16">
          <span className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-6 block text-shadow-hard-accent">
            EDS<span className="text-white not-italic">BEDS</span>
          </span>
          <p className="text-[var(--text-dim)] max-w-2xl mx-auto leading-relaxed uppercase font-bold tracking-widest text-[10px] mb-10">
            Family-owned, STL-proud. We don't just sell mattresses, we deliver the quality of life Ed's best friends deserve. Experience the comfort revolution in the heart of St. Louis.
          </p>
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded bg-[var(--accent)] text-black flex items-center justify-center transition-all group-hover:scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Phone size={20} fill="currentColor" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[var(--text-dim)] group-hover:text-white transition-colors">Call Ed Direct</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded bg-[var(--accent)] text-black flex items-center justify-center transition-all group-hover:scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Mail size={20} fill="currentColor" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[var(--text-dim)] group-hover:text-white transition-colors">Secure Uplink</span>
            </div>
          </div>
        </div>

        {/* Middle: 3-Column Horizontal Spread */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24 w-full max-w-6xl border-y border-white/5 py-16">
          {/* Column 1: Physical Address */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-black flex items-center gap-3 text-shadow-hard-accent">
              <div className="w-8 h-[1px] bg-[var(--accent)]" /> Physical
            </h4>
            <div className="flex items-start gap-4 text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest">
              <MapPin size={24} className="text-[var(--accent)] shrink-0" />
              <span>3226 Watson Road, <br />St. Louis, MO 63139</span>
            </div>
          </div>

          {/* Column 2: Service Info */}
          <div className="flex flex-col items-center md:items-start border-white/5 md:border-x px-0 md:px-8">
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-black flex items-center gap-3 text-shadow-hard-accent">
              <div className="w-8 h-[1px] bg-[var(--accent)]" /> Service
            </h4>
            <div className="flex items-start gap-4 text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest">
              <Clock size={24} className="text-[var(--accent)] shrink-0" />
              <span>Personalized Service <br /><span className="text-white">Call for Same-Day Setup</span></span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-white flex items-center gap-3 text-shadow-hard-accent">
              <div className="w-8 h-[1px] bg-[var(--accent)]" /> Quick Links
            </h4>
            <ul className="space-y-4 text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest">
              <li><a href="#collections" className="hover:text-[var(--accent)] transition-colors">// The Collection</a></li>
              <li><a href="#reviews" className="hover:text-[var(--accent)] transition-colors">// Customer Stories</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition-colors">// Warranty Info</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom: Legal */}
        <div className="flex flex-col items-center gap-8 text-[9px] text-[var(--text-dim)] uppercase tracking-[0.3em] font-black opacity-50">
          <p>© 2026 DTE SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
