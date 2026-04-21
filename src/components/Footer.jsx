import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[var(--bg-secondary)] pt-32 pb-12 border-t border-black/5">
      <div className="container flex flex-col items-center">
        {/* Top: Brand Header */}
        <div className="text-center mb-16">
          <span className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6 block">
            Preferred <span className="font-serif italic normal-case tracking-normal">Mattress</span>
          </span>
          <p className="text-[var(--text-dim)] max-w-2xl mx-auto leading-relaxed uppercase font-bold tracking-[0.2em] text-[10px] mb-10">
            Family-owned, STL-proud. We don't just sell mattresses, we deliver the quality of life our community deserves. Experience the comfort revolution in the heart of St. Louis.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-sm">
                <Phone size={18} fill="currentColor" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">Call Our Team</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-sm">
                <Mail size={18} fill="currentColor" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">Contact Support</span>
            </div>
          </div>
        </div>

        {/* Middle: Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl py-12 border-y border-black/5 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
              <MapPin size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Location</span>
            </div>
            <p className="text-sm font-medium text-[var(--text-dim)] text-center md:text-left">
              3226 Watson Road<br />St. Louis, MO 63139
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
              <Clock size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Showroom Hours</span>
            </div>
            <p className="text-sm font-medium text-[var(--text-dim)] text-center md:text-left">
              Mon - Sat: 10am - 8pm<br />Sun: 12pm - 5pm
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
              <Calendar size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Consultations</span>
            </div>
            <p className="text-sm font-medium text-[var(--text-dim)] text-center md:text-left">
              Private Trials Available<br />By Appointment
            </p>
          </div>
        </div>

        {/* Bottom: Legal & Brand */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] opacity-40">
            © 2026 Preferred Mattress STL. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Terms</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
