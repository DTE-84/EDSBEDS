import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ProductDetail from './components/ProductDetail';
import MattressQuiz from './components/MattressQuiz';
import ReviewTicker from './components/ReviewTicker';
import AppointmentScheduler from './components/AppointmentScheduler';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [view, setView] = useState('landing'); // landing, mattresses, bases, bedding, frames, reviews, scheduling, detail, quiz

  const navigateToDetail = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setView('detail'), 100);
  };

  const renderContent = () => {
    switch (view) {
      case 'landing':
        return (
          <div className="animate-in fade-in duration-1000">
            <Hero />
            
            {/* 5-STAR SPECIALS SECTION */}
            <section className="section-padding bg-white relative overflow-hidden">
              <div className="container">
                <div className="text-center mb-20">
                   <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 italic">Exclusive <span className="text-[var(--accent-blue)] not-italic">Offers.</span></h2>
                   <div className="w-24 h-1 bg-[var(--accent-red)] mx-auto rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                   {/* High-Fidelity Card 1 */}
                   <div className="card-upscale group relative overflow-hidden bg-white border border-gray-50">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-red)]/5 rounded-bl-full group-hover:scale-125 transition-transform duration-1000" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-red)] mb-6 block font-sans">Seasonal Event</span>
                        <h3 className="text-5xl font-black mb-6 italic tracking-tighter leading-none">Spring <br/><span className="text-[var(--accent-red)]">Specials.</span></h3>
                        <p className="text-xl text-[var(--text-dim)] mb-12 font-medium leading-relaxed">Save up to 30% on select premium bases and mattresses. Experience the legacy of comfort.</p>
                        <button 
                          onClick={() => setView('scheduling')} 
                          className="btn-secondary"
                        >
                          Book Private Trial
                        </button>
                      </div>
                   </div>
                   
                   {/* High-Fidelity Card 2 */}
                   <div className="card-upscale group relative overflow-hidden bg-white border border-gray-100">
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--accent-blue)]/5 rounded-tr-full group-hover:scale-125 transition-transform duration-1000" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-blue)] mb-6 block font-sans">Worldwide Access</span>
                        <h3 className="text-5xl font-black mb-6 italic tracking-tighter leading-none">Global <br/><span className="text-[var(--accent-blue)]">Delivery.</span></h3>
                        <p className="text-xl text-[var(--text-dim)] mb-12 font-medium leading-relaxed">Precision-packed sleep solutions delivered directly to your doorstep, anywhere in the world.</p>
                        <button 
                          onClick={() => setView('mattresses')} 
                          className="btn-primary"
                        >
                          View Inventory
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            </section>
            
            {/* Elegant Divider */}
            <div className="bg-gray-50/30 py-24">
               <div className="container text-center">
                  <p className="text-[12px] font-black text-[var(--text-dim)] uppercase tracking-[0.6em] font-sans opacity-40">Precision Sleep Logic // National Expansion 2026</p>
               </div>
            </div>

            <ReviewTicker />
          </div>
        );
      case 'mattresses':
        return (
          <div className="pt-32">
            <ProductShowcase 
              onSelectProduct={navigateToDetail} 
              onStartQuiz={() => setView('quiz')} 
            />
          </div>
        );
      case 'quiz':
        return <MattressQuiz onBack={() => setView('mattresses')} onViewProduct={navigateToDetail} />;
      case 'detail':
        return <ProductDetail onBack={() => setView('mattresses')} />;
      case 'reviews':
        return (
          <div className="pt-32">
            <ReviewTicker />
          </div>
        );
      case 'scheduling':
        return (
          <div className="pt-32">
            <AppointmentScheduler />
          </div>
        );
      case 'bases':
      case 'bedding':
      case 'frames':
        return (
          <div className="section-padding text-center animate-in fade-in slide-in-from-bottom duration-700">
            <div className="container">
              <h2 className="text-7xl font-black tracking-tighter mb-8 italic uppercase">Coming <span className="text-[var(--accent-blue)] not-italic underline decoration-[var(--accent-red)]">Soon.</span></h2>
              <p className="text-2xl text-[var(--text-dim)] font-medium max-w-3xl mx-auto leading-relaxed">We're curating the highest quality {view.replace('s', '')} collection to complete your sleep ecosystem. Check back soon for the official launch.</p>
              <button onClick={() => setView('landing')} className="mt-16 btn-primary">Back to Showcase</button>
            </div>
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <main className="min-h-screen selection:bg-[var(--accent-red)] selection:text-white bg-white">
      {view !== 'quiz' && <Navigation currentView={view} setView={setView} />}
      
      {renderContent()}
      
      {view !== 'quiz' && <Footer />}
    </main>
  );
}

export default App;
