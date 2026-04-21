import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Ryan T.",
    text: "Awesome experience. Great customer service and no pressure. They even personally delivered our bed!",
    rating: 5
  },
  {
    author: "Jennifer S.",
    text: "Highly recommend. Great customer service and great prices!! The best team I've ever dealt with.",
    rating: 5
  },
  {
    author: "Tyresa W.",
    text: "Amazing customer service. EdsBeds is the only place to go for quality sleep.",
    rating: 5
  }
];

const ReviewTicker = () => {
  return (
    <section id="reviews" className="py-24 bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Real people. Real comfort.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-[28px] shadow-sm flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="var(--accent-blue)" className="text-[var(--accent-blue)]" />)}
              </div>
              <p className="text-lg font-medium text-[var(--text-main)] mb-8 leading-relaxed">"{review.text}"</p>
              <span className="font-semibold text-sm">{review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewTicker;
