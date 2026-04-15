import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[var(--bg-primary)] pt-24 pb-12 border-t border-white/5">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-16 mb-16 text-center">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center">
            <span className="text-3xl font-bold tracking-tighter neon-glow mb-8 block" style={{ color: 'var(--accent)' }}>
              EDS<span className="text-white">BEDS</span>
            </span>
            <p className="text-[var(--text-dim)] max-w-sm mb-12 leading-relaxed">
              Family-owned, STL-proud. We don't just sell mattresses, we deliver the quality of life Ed's best friends deserve. Experience the comfort revolution in the heart of St. Louis.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-black flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                <Phone size={18} fill="currentColor" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-black flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
                <Mail size={18} fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[var(--accent)]">The Showroom</h4>
            <ul className="space-y-4 text-[var(--text-dim)] text-sm flex flex-col items-center">
              <li className="flex flex-col items-center gap-2">
                <MapPin size={24} className="text-[var(--accent)]" fill="var(--accent-soft)" />
                <span>3226 Watson Road,<br />St. Louis, MO 63139</span>
              </li>
              <li className="flex flex-col items-center gap-2">
                <Clock size={24} className="text-[var(--accent)]" fill="var(--accent-soft)" />
                <span>Personalized Service<br />Call for Same-Day Setup</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[var(--accent)]">Quick Links</h4>
            <ul className="space-y-4 text-[var(--text-dim)] text-sm uppercase tracking-tighter flex flex-col items-center">
              <li><a href="#collections" className="hover:text-[var(--accent)] transition-colors">The Collection</a></li>
              <li><a href="#reviews" className="hover:text-[var(--accent)] transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Sleep Trials</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Warranty Info</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-dim)] uppercase tracking-widest">
          <p>© 2026 EdsBeds STL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
