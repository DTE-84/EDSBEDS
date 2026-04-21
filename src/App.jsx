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

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {view === 'landing' ? (
        <div className="animate-in fade-in duration-500">
          <Hero />
          <ProductShowcase onSelectProduct={() => setView('detail')} />
          <ReviewTicker />
          <AppointmentScheduler />
        </div>
      ) : (
        <ProductDetail onBack={() => setView('landing')} />
      )}
      
      <Footer />
    </main>
  );
}

export default App;
