import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-40 pb-24 animate-in fade-in duration-1000">
      <div className="container">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--accent-blue)]/5 rounded-full mb-2">
            <MessageSquare size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[10px] font-black text-[var(--accent-blue)] tracking-[0.4em] uppercase">Connect With Us</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter italic text-[var(--text-main)]">
            Visit Our <span className="text-[var(--accent-blue)] not-italic">Showroom.</span>
          </h1>
          <p className="text-2xl text-[var(--text-dim)] font-medium max-w-2xl mx-auto leading-relaxed">
            Experience the Rize Home legacy in person. Our sleep specialists are ready to guide you to your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info & Map Placeholder */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-[var(--bg-secondary)] rounded-[40px] border border-gray-100 space-y-4">
                <MapPin className="text-[var(--accent-blue)]" size={32} />
                <h3 className="text-xl font-bold italic tracking-tighter">Location</h3>
                <p className="text-[var(--text-dim)] font-medium leading-relaxed">
                  123 Broadway Street<br />
                  Quincy, IL 62301
                </p>
              </div>
              <div className="p-10 bg-[var(--bg-secondary)] rounded-[40px] border border-gray-100 space-y-4">
                <Phone className="text-[var(--accent-blue)]" size={32} />
                <h3 className="text-xl font-bold italic tracking-tighter">Phone</h3>
                <p className="text-[var(--text-dim)] font-medium leading-relaxed">
                  Sales: (314) 452-8783<br />
                  Support: (314) 452-8700
                </p>
              </div>
              <div className="p-10 bg-[var(--bg-secondary)] rounded-[40px] border border-gray-100 space-y-4">
                <Mail className="text-[var(--accent-blue)]" size={32} />
                <h3 className="text-xl font-bold italic tracking-tighter">Email</h3>
                <p className="text-[var(--text-dim)] font-medium leading-relaxed">
                  info@edsbeds.com<br />
                  concierge@edsbeds.com
                </p>
              </div>
              <div className="p-10 bg-[var(--bg-secondary)] rounded-[40px] border border-gray-100 space-y-4">
                <Clock className="text-[var(--accent-blue)]" size={32} />
                <h3 className="text-xl font-bold italic tracking-tighter">Hours</h3>
                <p className="text-[var(--text-dim)] font-medium leading-relaxed">
                  Mon-Sat: 10am - 8pm<br />
                  Sunday: 12pm - 6pm
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 shadow-inner flex items-center justify-center group relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue)]/5 to-transparent" />
               <div className="text-center space-y-4 relative z-10">
                  <MapPin size={48} className="mx-auto text-[var(--accent-blue)]/20 group-hover:scale-110 transition-transform duration-500" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-dim)]">Interactive Map Coming Soon</p>
               </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-10 md:p-16 rounded-[60px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-gray-100">
            <h2 className="text-4xl font-bold mb-10 italic tracking-tighter text-[var(--text-main)]">Send a <span className="text-[var(--accent-blue)] not-italic">Message.</span></h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] ml-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 p-6 rounded-[24px] outline-none focus:ring-4 focus:ring-[var(--accent-blue)]/5 border-2 border-transparent focus:border-[var(--accent-blue)] transition-all font-medium" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] ml-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 p-6 rounded-[24px] outline-none focus:ring-4 focus:ring-[var(--accent-blue)]/5 border-2 border-transparent focus:border-[var(--accent-blue)] transition-all font-medium" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] ml-2">Subject</label>
                <select className="w-full bg-gray-50 p-6 rounded-[24px] outline-none focus:ring-4 focus:ring-[var(--accent-blue)]/5 border-2 border-transparent focus:border-[var(--accent-blue)] transition-all font-medium appearance-none">
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Delivery Status</option>
                  <option>Warranty Claim</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] ml-2">Your Message</label>
                <textarea rows={5} className="w-full bg-gray-50 p-6 rounded-[24px] outline-none focus:ring-4 focus:ring-[var(--accent-blue)]/5 border-2 border-transparent focus:border-[var(--accent-blue)] transition-all font-medium resize-none" placeholder="How can we help you sleep better?"></textarea>
              </div>

              <button className="w-full btn-primary py-7 rounded-[24px] shadow-2xl shadow-[var(--accent-blue)]/30 flex items-center justify-center gap-4 group">
                <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
