import React from 'react';
import { Star } from 'lucide-react'; // Ensure you have this import

const ReviewTicker = () => {
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

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full mb-2">
            <Star size={12} className="text-red-500" />
            <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Real people. <span className="text-blue-600">Real comfort.</span>
          </h2>
        </div>

        {/* items-stretch ensures all cards reach the same height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="flex flex-col bg-white p-10 rounded-[32px] shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star key={starIdx} size={14} className="text-blue-600 fill-current" />
                ))}
              </div>
              
              <p className="text-lg font-medium text-slate-700 mb-8 leading-relaxed italic">
                "{review.text}"
              </p>
              
              {/* mt-auto: This pushes the bottom section to the baseline of the tallest card */}
              <div className="mt-auto pt-6 border-t border-gray-100 w-full flex items-center justify-between">
                <div>
                  <span className="block font-black text-sm text-slate-900 tracking-tight">{review.author}</span>
                  <span className="block text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-1">
                    {review.tag}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
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
