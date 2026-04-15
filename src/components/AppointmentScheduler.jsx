import { Calendar, Users, Camera, ShieldCheck } from 'lucide-react';

const AppointmentScheduler = () => {
  return (
    <section id="scheduling" className="py-24 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="container">
        <div className="glass-morphism rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 bg-[var(--accent)] text-black flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Book a 1-on-1 Sleep Trial</h2>
            <p className="text-lg mb-8 font-medium opacity-80">
              Skip the crowd. Ed will personally walk you through our collection to find the mattress that fits your life. No pressure, just comfort.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Calendar size={20} />, text: "Flexible STL Showroom Hours" },
                { icon: <Users size={20} />, text: "Private Consultation with Ed" },
                { icon: <ShieldCheck size={20} />, text: "COVID-Safe Environment" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-bold uppercase tracking-widest text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Time Slot</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-[var(--accent)] outline-none transition-colors">
                    <option>Morning (10am-12pm)</option>
                    <option>Afternoon (12pm-4pm)</option>
                    <option>Evening (4pm-8pm)</option>
                  </select>
                </div>
              </div>
              <button 
                type="button" 
                className="w-full bg-white text-black font-bold py-4 rounded-sm hover:bg-[var(--accent)] transition-colors uppercase tracking-[0.2em]"
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
