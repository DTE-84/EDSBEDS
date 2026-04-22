import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const navigateToDetail = (item) => {
    // If it's the RZ Cool Choice, go to detail
    if (item.id === 'rz-cool-choice-14') {
        window.location.href='/EDSBEDS/product/rz-cool-choice-14';
    } else {
        alert("Detailed specs for this model are being finalized. Please contact support for availability.");
    }
  };

  return (
    <main className="min-h-screen selection:bg-[var(--accent-red)] selection:text-white bg-white">
      {location.pathname !== '/quiz' && <Navigation />}
      
      <div className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <div className="animate-in fade-in duration-1000">
              <Hero />
              
              {/* UPSCALE SPECIALS */}
              <section className="section-padding bg-white relative overflow-hidden">
                <div className="container">
                  <div className="text-center mb-20">
                     <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 italic">Exclusive <span className="text-[var(--accent-blue)] not-italic">Offers.</span></h2>
                     <div className="w-24 h-1 bg-[var(--accent-red)] mx-auto rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                     <div className="card-upscale group relative overflow-hidden bg-white border border-gray-50">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-red)]/5 rounded-bl-full group-hover:scale-125 transition-transform duration-1000" />
                        <div className="relative z-10">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-red)] mb-6 block font-sans">Seasonal Event</span>
                          <h3 className="text-5xl font-black mb-6 italic tracking-tighter leading-none">Spring <br/><span className="text-[var(--accent-red)]">Specials.</span></h3>
                          <p className="text-xl text-[var(--text-dim)] mb-12 font-medium leading-relaxed font-serif">Save up to 30% on select premium bases and mattresses.</p>
                          <a href="/EDSBEDS/appointment" className="btn-secondary">Book Private Trial</a>
                        </div>
                     </div>
                     
                     <div className="card-upscale group relative overflow-hidden bg-white border border-gray-100">
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--accent-blue)]/5 rounded-tr-full group-hover:scale-125 transition-transform duration-1000" />
                        <div className="relative z-10">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-blue)] mb-6 block font-sans">Worldwide Access</span>
                          <h3 className="text-5xl font-black mb-6 italic tracking-tighter leading-none">Global <br/><span className="text-[var(--accent-blue)]">Delivery.</span></h3>
                          <p className="text-xl text-[var(--text-dim)] mb-12 font-medium leading-relaxed font-serif">Precision-packed sleep solutions delivered directly to your doorstep.</p>
                          <a href="/EDSBEDS/mattresses" className="btn-primary">View Inventory</a>
                        </div>
                     </div>
                  </div>
                </div>
              </section>
              
              <ReviewTicker />
            </div>
          } />

          <Route path="/mattresses" element={
            <div className="pt-20">
              <ProductShowcase category="mattresses" onSelectProduct={navigateToDetail} onStartQuiz={() => window.location.href='/EDSBEDS/quiz'} />
            </div>
          } />

          <Route path="/bases" element={<div className="pt-20"><ProductShowcase category="bases" onSelectProduct={navigateToDetail} /></div>} />
          <Route path="/bedding" element={<div className="pt-20"><ProductShowcase category="bedding" onSelectProduct={navigateToDetail} /></div>} />
          <Route path="/frames" element={<div className="pt-20"><ProductShowcase category="frames" onSelectProduct={navigateToDetail} /></div>} />
          <Route path="/quiz" element={<MattressQuiz onBack={() => window.location.href='/EDSBEDS/mattresses'} onViewProduct={() => window.location.href='/EDSBEDS/product/rz-cool-choice-14'} />} />
          <Route path="/product/:id" element={<ProductDetail onBack={() => window.location.href='/EDSBEDS/mattresses'} />} />
          <Route path="/appointment" element={<div className="pt-20"><AppointmentScheduler /></div>} />
          <Route path="/reviews" element={<div className="pt-20"><ReviewTicker /></div>} />
        </Routes>
      </div>
      
      {location.pathname !== '/quiz' && <Footer />}
    </main>
  );
}

export default App;
