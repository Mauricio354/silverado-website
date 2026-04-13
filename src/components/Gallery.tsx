"use client";

import Image from "next/image";
import { useState } from "react";
import { MountainDivider } from "./MountainDivider";

const galleryItems = [
  { src: "/images/sunroom.jpg", alt: "Custom timber-frame sunroom exterior", category: "Sunrooms" },
  { src: "/images/deck.jpg", alt: "Elevated deck with pergola and iron railings", category: "Decks" },
  { src: "/images/sunroom2.jpg", alt: "Sunroom interior with vaulted ceiling", category: "Sunrooms" },
  { src: "/images/deck2.jpg", alt: "Two-story deck with staircase", category: "Decks" },
  { src: "/images/deck3.jpg", alt: "Ground-level deck with covered pergola", category: "Decks" },
  { src: "/images/sunroom3flyer.jpg", alt: "Silverado sunroom showcase", category: "Sunrooms" },
];

const categories = ["All", "Sunrooms", "Decks"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative bg-snow pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-forest" />
            <p className="text-forest font-body font-semibold tracking-[0.25em] uppercase text-xs">Our Portfolio</p>
            <div className="w-8 h-px bg-forest" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal">Our Gallery</h2>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 font-body ${
                activeCategory === cat
                  ? "bg-forest text-white shadow-md shadow-forest/20"
                  : "bg-transparent text-charcoal/60 border border-charcoal/15 hover:border-forest/40 hover:text-forest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, index) => (
            <button
              key={item.src}
              onClick={() => setLightbox(index)}
              className={`gallery-item relative cursor-pointer group rounded-xl overflow-hidden ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-[350px] md:h-full min-h-[450px]" : "h-[280px]"} w-full`}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/50 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 text-center">
                    <div className="w-11 h-11 border-2 border-white/80 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <p className="text-white font-body text-xs tracking-widest uppercase">{item.category}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-lg flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-snow/60 hover:text-snow transition-colors" aria-label="Close">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={filtered[lightbox].src} alt={filtered[lightbox].alt} fill className="object-contain" />
          </div>
          {lightbox > 0 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }} className="absolute left-4 text-snow/60 hover:text-snow" aria-label="Previous">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          {lightbox < filtered.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }} className="absolute right-4 text-snow/60 hover:text-snow" aria-label="Next">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      )}

      <MountainDivider fillColor="#1a1a1a" bgColor="#fafcfe" />
    </section>
  );
}
