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
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">What <span className="text-[var(--accent)]">STL</span> is Saying</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#FFD700" className="text-[#FFD700]" />)}
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
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative px-10 py-5 bg-[var(--accent)] text-black font-black uppercase tracking-widest text-sm text-center min-w-[280px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-b-4 border-l-4 border-black/20 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 inline-flex items-center justify-center gap-3"
          >
            Read all Reviews on Google
          </a>
        </div>
      </div>

      {/* Decorative Neon Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--accent)]/5 rounded-full pointer-events-none" />
    </section>
  );
};

export default ReviewTicker;
