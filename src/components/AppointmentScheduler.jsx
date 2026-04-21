import { Calendar, Users, ShieldCheck } from 'lucide-react';

const AppointmentScheduler = () => {
  return (
    <section id="scheduling" className="py-24 bg-white">
      <div className="container">
        <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-black/5">
          <div className="md:w-1/2 p-12 flex flex-col justify-center border-r border-black/5">
            <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-[0.3em] mb-4">Phase 03 // The Trial</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Book a 1-on-1 <br /><span>Sleep Trial</span>
            </h2>
            <p className="text-sm mb-8 font-medium text-[var(--text-dim)] uppercase tracking-widest leading-loose">
              Skip the crowd. Our team will personally walk you through our collection to find the mattress that fits your life.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Calendar size={18} />, text: "Flexible STL Showroom Hours" },
                { icon: <Users size={18} />, text: "Private Consultation" },
                { icon: <ShieldCheck size={18} />, text: "Comfort Guarantee" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white text-[var(--accent)] flex items-center justify-center transition-all shadow-sm border border-black/5">
                    {item.icon}
                  </div>
                  <span className="font-bold uppercase tracking-widest text-[10px] text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[var(--bg-secondary)] border border-black/5 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[var(--bg-secondary)] border border-black/5 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-[var(--bg-secondary)] border border-black/5 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Time Slot</label>
                  <select className="w-full bg-[var(--bg-secondary)] border border-black/5 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors text-sm">
                    <option>Morning (10am-12pm)</option>
                    <option>Afternoon (12pm-4pm)</option>
                    <option>Evening (4pm-8pm)</option>
                  </select>
                </div>
              </div>
              <button 
                type="button" 
                className="w-full btn-primary"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;
