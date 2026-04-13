import Image from "next/image";
import { TreelineDivider } from "./MountainDivider";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      <Image
        src="/images/sunroom.jpg"
        alt="Custom sunroom built by Silverado"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="w-10 h-px bg-forest-light" />
            <p className="text-forest-light font-body font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
              Custom Decks &amp; Beautiful Sunrooms
            </p>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] mb-6 animate-fade-up animate-delay-1">
            <span className="text-snow">Where Plans</span>
            <br />
            <span className="text-snow">Become </span>
            <span className="text-forest-light">Projects</span>
          </h1>
          <p className="text-snow/60 font-body text-lg md:text-xl max-w-lg mb-10 leading-relaxed animate-fade-up animate-delay-2">
            Premium outdoor living spaces built with expert craftsmanship.
            Serving Silverado &amp; SW Calgary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-forest hover:bg-forest-light text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-forest/40 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center border border-snow/25 hover:border-snow/50 hover:bg-snow/5 text-snow px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in animate-delay-4">
        <span className="text-snow/30 text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-snow/30 to-transparent" />
      </div>

      <TreelineDivider fillColor="#fafcfe" bgColor="transparent" />
    </section>
  );
}
