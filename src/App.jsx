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

import FeaturedPreview from './components/FeaturedPreview';

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
          <div className="animate-in fade-in duration-700 w-full flex flex-col items-center">
            <Hero />
            
            <FeaturedPreview setView={setView} />

            {/* Campaign Section */}
            <section className="py-32 bg-white w-full">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                   {/* Card 1 */}
                   <div className="bg-[var(--accent-red)] p-16 rounded-[60px] text-white relative overflow-hidden group w-full shadow-2xl shadow-[var(--accent-red)]/20">
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-[1px] bg-white opacity-50" />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em]">Limited Time</span>
                        </div>
                        <h3 className="text-5xl font-bold mb-6 italic tracking-tighter leading-none">Spring <br /> Specials</h3>
                        <p className="text-xl font-medium mb-12 opacity-90 leading-relaxed max-w-sm">Save up to 30% on select premium bases and mattresses. Experience the RZ standard.</p>
                        <button 
                          onClick={() => setView('scheduling')} 
                          className="bg-white text-[var(--accent-red)] px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-2xl font-sans"
                        >
                          Book Private Trial
                        </button>
                      </div>
                      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/5 rounded-full blur-3xl" />
                   </div>
                   
                   {/* Card 2 */}
                   <div className="bg-[var(--accent-blue)] p-16 rounded-[60px] text-white relative overflow-hidden group w-full shadow-2xl shadow-[var(--accent-blue)]/20">
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-[1px] bg-white opacity-50" />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em]">White Glove</span>
                        </div>
                        <h3 className="text-5xl font-bold mb-6 italic tracking-tighter leading-none">Concierge <br /> Delivery</h3>
                        <p className="text-xl font-medium mb-12 opacity-90 leading-relaxed max-w-sm">Precision-packed sleep solutions delivered and installed with surgical care.</p>
                        <button 
                          onClick={() => setView('mattresses')} 
                          className="bg-white text-[var(--accent-blue)] px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-2xl font-sans"
                        >
                          View Collection
                        </button>
                      </div>
                      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute -top-20 -left-20 w-60 h-60 bg-black/5 rounded-full blur-3xl" />
                   </div>
                </div>
              </div>
            </section>
            
            <div className="py-20 bg-[#F8F9FA] w-full border-t border-gray-100">
               <div className="container text-center">
                  <p className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-[0.8em] font-sans opacity-50">High-Fidelity Rest // Established 2026</p>
               </div>
            </div>
          </div>
        );
      case 'mattresses':
        return (
          <div className="pt-20 w-full">
            <ProductShowcase 
              onSelectProduct={navigateToDetail} 
              onStartQuiz={() => setView('quiz')} 
            />
          </div>
        );
      case 'quiz':
        return (
          <div className="w-full">
            <MattressQuiz onBack={() => setView('mattresses')} onViewProduct={navigateToDetail} />
          </div>
        );
      case 'detail':
        return (
          <div className="w-full">
            <ProductDetail onBack={() => setView('mattresses')} />
          </div>
        );
      case 'reviews':
        return (
          <div className="pt-20 w-full">
            <ReviewTicker />
          </div>
        );
      case 'scheduling':
        return (
          <div className="pt-20 w-full">
            <AppointmentScheduler />
          </div>
        );
      case 'bases':
      case 'bedding':
      case 'frames':
        return (
          <div className="pt-40 pb-40 text-center animate-in fade-in slide-in-from-bottom duration-500 w-full">
            <div className="container">
              <h2 className="text-6xl font-black tracking-tighter mb-6 uppercase">Coming <span className="text-[var(--accent-blue)]">Soon</span></h2>
              <p className="text-xl text-[var(--text-dim)] font-medium max-w-2xl mx-auto leading-relaxed">We're curating the highest quality {view.replace('s', '')} collection to complete your sleep ecosystem. Check back soon for the full launch.</p>
              <button onClick={() => setView('landing')} className="mt-12 btn-primary">Back to Home</button>
            </div>
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <main className="min-h-screen selection:bg-[var(--accent-red)] selection:text-white bg-white flex flex-col items-center">
      {view !== 'quiz' && <Navigation currentView={view} setView={setView} />}
      
      <div className="flex-grow w-full flex flex-col items-center">
        {renderContent()}
      </div>
      
      {view !== 'quiz' && <Footer />}
    </main>
  );
}

export default App;
