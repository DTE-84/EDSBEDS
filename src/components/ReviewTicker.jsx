import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Ryan Turinsky",
    location: "St. Louis, MO",
    text: "Awesome experience. Great customer service and no pressure. They even personally delivered our bed on a Sunday!",
    rating: 5
  },
  {
    author: "Jennifer Shinkle",
    location: "St. Louis, MO",
    text: "Highly recommend. Great customer service and great prices!! The best team in town.",
    rating: 5
  },
  {
    author: "Tyresa Williams",
    location: "St. Louis, MO",
    text: "Amazing customer service. If you're in STL, Preferred Mattress is the only place to go.",
    rating: 5
  }
];

const ReviewTicker = () => {
  return (
    <section id="reviews" className="py-24 bg-[var(--bg-secondary)] overflow-hidden relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent)] mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">What STL is Saying</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--accent)" className="text-[var(--accent)]" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="var(--accent)" className="text-[var(--accent)]" />)}
              </div>
              <p className="text-[var(--text-main)] italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <span className="block font-bold text-sm uppercase tracking-widest">{review.author}</span>
                <span className="block text-[10px] text-[var(--text-dim)] uppercase tracking-[0.2em]">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[var(--text-dim)] uppercase tracking-[0.3em] text-[10px] font-bold">
            Over 200+ 5-Star Reviews // Verified Comfort
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewTicker;
