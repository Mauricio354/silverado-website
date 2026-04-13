"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "James & Linda H.",
    location: "Silverado, Calgary",
    text: "Silverado built us an incredible sunroom that we use all year round. The craftsmanship is top-notch and the whole team was professional from start to finish. Highly recommend!",
    rating: 5,
    project: "Custom Sunroom",
  },
  {
    name: "Mark T.",
    location: "SW Calgary",
    text: "Our new deck with the covered pergola is absolutely stunning. They took our vision and made it even better. The iron railing details are a beautiful touch. Great work!",
    rating: 5,
    project: "Elevated Deck",
  },
  {
    name: "Sarah K.",
    location: "Silverado, Calgary",
    text: "We use Silverado for both our lawn care and snow removal. They're always on time and do a thorough job. Having one company handle everything makes life so much easier.",
    rating: 5,
    project: "Lawn & Snow Services",
  },
  {
    name: "Dave & Melissa R.",
    location: "SW Calgary",
    text: "The vinyl decking they installed is gorgeous and so low-maintenance. We've had it through two Alberta winters and it still looks brand new. Couldn't be happier with the quality.",
    rating: 5,
    project: "Vinyl Deck Build",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-forest-light" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-frost py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-forest font-heading font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Client Reviews
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-dark">
            Testimonials
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-dark/5 p-8 md:p-12">
          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${
                  index === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Stars count={testimonial.rating} />
                <p className="text-lg md:text-xl text-slate-dark/65 leading-relaxed mt-5 mb-6 italic text-center max-w-2xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-heading text-sm font-bold text-slate-dark">{testimonial.name}</p>
                <p className="text-slate-light/50 text-sm">{testimonial.project} — {testimonial.location}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === active ? "bg-forest w-7" : "bg-slate-dark/12 w-1.5 hover:bg-slate-dark/25"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
