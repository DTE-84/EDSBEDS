import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ReviewTicker from './components/ReviewTicker';
import AppointmentScheduler from './components/AppointmentScheduler';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <div className="py-20 bg-black flex justify-center">
        <div className="w-[1px] h-32 bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </div>
      <ReviewTicker />
      <AppointmentScheduler />
      <Footer />
    </main>
  );
}

export default App;
