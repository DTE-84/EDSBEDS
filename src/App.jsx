import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ProductDetail from './components/ProductDetail';
import ReviewTicker from './components/ReviewTicker';
import AppointmentScheduler from './components/AppointmentScheduler';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'detail'

  const navigateToDetail = () => {
    // Smooth transition to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setView('detail'), 100);
  };

  const navigateToLanding = () => {
    setView('landing');
  };

  return (
    <main className="min-h-screen selection:bg-[var(--accent-red)] selection:text-white">
      <Navigation />
      
      {view === 'landing' ? (
        <div className="animate-in fade-in duration-700">
          <Hero />
          <div className="bg-gradient-to-b from-white via-[var(--bg-secondary)] to-white">
            <ProductShowcase onSelectProduct={navigateToDetail} />
          </div>
          <ReviewTicker />
          <div className="py-20 bg-white">
             <div className="container">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent w-full" />
             </div>
          </div>
          <AppointmentScheduler />
        </div>
      ) : (
        <ProductDetail onBack={navigateToLanding} />
      )}
      
      <Footer />
    </main>
  );
}

export default App;
