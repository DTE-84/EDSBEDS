import { Star, MapPin } from 'lucide-react';

const reviews = [
  {
    author: "Victoria L. Schultz",
    location: "St. Louis, MO",
    text: "My bed from Ed has been the best mattress I’ve ever bought. It’s sturdy, comfortable, and I’ve slept better than ever on it! Ed will make sure you get exactly what you want.",
    rating: 5
  },
  {
    author: "Ryan Turinsky",
    location: "St. Louis, MO",
    text: "Awesome experience. Ed provided great customer service and no pressure. He even personally delivered our bed on a Sunday!",
    rating: 5
  },
  {
    author: "Jennifer Shinkle",
    location: "St. Louis, MO",
    text: "Highly recommend. Great customer service and great prices!! Ed is the best in town.",
    rating: 5
  },
  {
    author: "Tyresa Williams",
    location: "St. Louis, MO",
    text: "He is so great! Amazing customer service. If you're in STL, Ed's Beds is the only place to go.",
    rating: 5
  }
];

const ReviewTicker = () => {
  return (
    <section id="reviews" className="py-24 bg-black overflow-hidden relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What STL is Saying</h2>
          <div className="flex justify-center gap-1 text-[var(--accent)]">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="mt-4 text-[var(--text-dim)] uppercase tracking-widest text-sm font-bold">
            Over 200+ 5-Star Google Reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="glass-morphism p-8 flex flex-col gap-6">
              <p className="text-lg italic text-[var(--text-dim)] leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--silver)] flex items-center justify-center font-bold text-black">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.author}</h4>
                  <p className="text-xs text-[var(--text-dim)] flex items-center gap-1">
                    <MapPin size={10} /> {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-[var(--text-dim)] hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.2em] border-b border-white/20 pb-1">
            Read all Reviews on Google
          </button>
        </div>
      </div>

      {/* Decorative Neon Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--accent)]/5 rounded-full pointer-events-none" />
    </section>
  );
};

export default ReviewTicker;
