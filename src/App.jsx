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
      <div className="py-20 bg-white flex justify-center">
        <div className="w-[1px] h-32 bg-[var(--accent-soft)]" />
      </div>
      <ReviewTicker />
      <AppointmentScheduler />
      <Footer />
    </main>
  );
}

export default App;
