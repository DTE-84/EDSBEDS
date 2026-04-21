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
          <div className="animate-in fade-in duration-700">
            <Hero />
            {/* Landing Specials / Info Section */}
            <section className="py-24 bg-white">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-[var(--accent-red)] p-12 text-white relative overflow-hidden group">
                      <div className="relative z-10">
                        <h3 className="text-4xl font-serif mb-4 italic">Spring Specials</h3>
                        <p className="text-lg font-medium mb-8 opacity-95">Save up to 30% on select premium bases and mattresses. Limited time showroom offer.</p>
                        <button onClick={() => setView('scheduling')} className="bg-white text-[var(--accent-red)] px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">Book a Trial</button>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700" />
                   </div>
                   <div className="bg-[var(--accent-blue)] p-12 text-white relative overflow-hidden group">
                      <div className="relative z-10">
                        <h3 className="text-4xl font-serif mb-4 italic">Global Delivery</h3>
                        <p className="text-lg font-medium mb-8 opacity-95">We ship everywhere. Precision-packed sleep solutions delivered directly to your doorstep.</p>
                        <button onClick={() => setView('mattresses')} className="bg-white text-[var(--accent-blue)] px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">View Inventory</button>
                      </div>
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
                   </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'mattresses':
        return (
          <div className="pt-20">
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
          <div className="pt-20">
            <ReviewTicker />
          </div>
        );
      case 'scheduling':
        return (
          <div className="pt-20">
            <AppointmentScheduler />
          </div>
        );
      case 'bases':
      case 'bedding':
      case 'frames':
        return (
          <div className="pt-40 pb-40 text-center animate-in fade-in slide-in-from-bottom duration-500">
            <div className="container">
              <h2 className="text-6xl font-black tracking-tighter mb-6 uppercase">Coming <span className="text-[var(--accent-blue)]">Soon</span></h2>
              <p className="text-xl text-[var(--text-dim)] font-medium max-w-2xl mx-auto">We're curating the highest quality {view.replace('s', '')} collection to complete your sleep ecosystem. Check back soon for the full launch.</p>
              <button onClick={() => setView('landing')} className="mt-12 btn-primary px-10 py-5">Back to Home</button>
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
