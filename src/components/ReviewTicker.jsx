import React, { useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Ryan T.",
    text: "Awesome experience. Great customer service and no pressure. They even personally delivered our bed!",
    rating: 5,
    tag: "Verified Purchase"
  },
  {
    author: "Jennifer S.",
    text: "Highly recommend. Great customer service and great prices!! The best team I've ever dealt with.",
    rating: 5,
    tag: "Local Review"
  },
  {
    author: "Tyresa W.",
    text: "Amazing customer service. EdsBeds is the only place to go for quality sleep.",
    rating: 5,
    tag: "Highly Recommended"
  }
];

const ReviewTicker = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Shading */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-red)]/5 rounded-full mb-2">
            <Star size={12} className="text-[var(--accent-red)]" />
            <span className="text-[10px] font-bold text-[var(--accent-red)] tracking-widest uppercase">Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Real people. <span className="text-[var(--accent-blue)]">Real comfort.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-start hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              {/* Card Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="var(--accent-blue)" className="text-[var(--accent-blue)]" />)}
              </div>
              
              <p className="text-lg font-medium text-[var(--text-main)] mb-8 leading-relaxed italic">"{review.text}"</p>
              
              <div className="mt-auto pt-6 border-t border-gray-50 w-full flex items-center justify-between">
                <div>
                  <span className="block font-black text-sm tracking-tight">{review.author}</span>
                  <span className="block text-[9px] font-bold text-[var(--accent-blue)] uppercase tracking-widest mt-1">{review.tag}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-all">
                   <Star size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewTicker;
