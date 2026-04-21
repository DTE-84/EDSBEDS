import { Calendar, Users, ShieldCheck } from 'lucide-react';

const AppointmentScheduler = () => {
  return (
    <section id="scheduling" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience it in person.</h2>
            <p className="text-lg text-[var(--text-dim)] font-medium">Book a private consultation at our premium showroom.</p>
          </div>
          
          <div className="card flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Calendar size={20} className="text-[var(--accent-blue)]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Scheduling</h4>
                  <p className="text-sm text-[var(--text-dim)]">Find a time that works for you, including evenings.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Users size={20} className="text-[var(--accent-red)]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Consultation</h4>
                  <p className="text-sm text-[var(--text-dim)]">Personalized guidance to find your perfect match.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ShieldCheck size={20} className="text-[var(--accent-blue)]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comfort Guarantee</h4>
                  <p className="text-sm text-[var(--text-dim)]">Try our mattresses in a no-pressure environment.</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-[var(--bg-secondary)] border-none p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[var(--bg-secondary)] border-none p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="w-full bg-[var(--bg-secondary)] border-none p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm"
                  />
                  <select className="w-full bg-[var(--bg-secondary)] border-none p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-all text-sm">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  className="w-full btn-primary py-4 mt-4"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;
