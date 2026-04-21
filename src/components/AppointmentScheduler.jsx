import { Calendar, Users, ShieldCheck } from 'lucide-react';

const AppointmentScheduler = () => {
  return (
    <section id="scheduling" className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-red)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience it in person.</h2>
            <div className="w-20 h-1 bg-[var(--accent-red)] mx-auto rounded-full" />
            <p className="text-lg text-[var(--text-dim)] font-medium">Book a private consultation at our premium showroom.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Info Cards Side */}
            <div className="lg:w-2/5 grid grid-cols-1 gap-4">
              {[
                { 
                  icon: <Calendar size={24} />, 
                  title: "Flexible Scheduling", 
                  text: "Find a time that works for you, including evenings.",
                  color: "var(--accent-blue)"
                },
                { 
                  icon: <Users size={24} />, 
                  title: "Expert Consultation", 
                  text: "Personalized guidance to find your perfect match.",
                  color: "var(--accent-red)"
                },
                { 
                  icon: <ShieldCheck size={24} />, 
                  title: "Comfort Guarantee", 
                  text: "Try our mattresses in a no-pressure environment.",
                  color: "var(--accent-blue)"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[var(--accent-blue)]/20 transition-all hover:-translate-y-1 group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center transition-colors group-hover:bg-white shadow-sm" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-[var(--text-dim)] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent-red)]/10 to-transparent rounded-bl-full" />
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-[var(--bg-secondary)] border-2 border-transparent p-4 rounded-xl outline-none focus:border-[var(--accent-blue)] focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-[var(--bg-secondary)] border-2 border-transparent p-4 rounded-xl outline-none focus:border-[var(--accent-blue)] focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] ml-1">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-[var(--bg-secondary)] border-2 border-transparent p-4 rounded-xl outline-none focus:border-[var(--accent-blue)] focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] ml-1">Time Slot</label>
                    <select className="w-full bg-[var(--bg-secondary)] border-2 border-transparent p-4 rounded-xl outline-none focus:border-[var(--accent-blue)] focus:bg-white transition-all text-sm font-medium appearance-none cursor-pointer">
                      <option>Morning (10am - 12pm)</option>
                      <option>Afternoon (12pm - 4pm)</option>
                      <option>Evening (4pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="w-full btn-primary py-5 rounded-2xl shadow-lg shadow-[var(--accent-blue)]/20 flex items-center justify-center gap-3 group"
                >
                  <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  Confirm Appointment
                </button>
                
                <p className="text-center text-[10px] text-[var(--text-dim)] font-medium">
                  We'll contact you within 24 hours to confirm your private trial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;
