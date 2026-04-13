import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-dark overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/sunroom-hero-sharp.jpg"
          alt="Custom sunroom built by Silverado"
          width={1920}
          height={1080}
          className="w-full max-w-5xl h-auto object-contain"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/90 via-slate-dark/65 to-slate-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-transparent to-slate-dark/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5 animate-fade-up">
            <div className="w-10 h-px bg-forest-light" />
            <p className="text-forest-light font-heading font-medium tracking-[0.2em] uppercase text-xs">
              Custom Decks &amp; Beautiful Sunrooms
            </p>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up animate-delay-1">
            <span className="text-white">Where Plans</span>
            <br />
            <span className="text-white">Become </span>
            <span className="text-ice">Projects</span>
          </h1>
          <p className="text-white/50 text-lg max-w-lg mb-10 leading-relaxed animate-fade-up animate-delay-2">
            Premium outdoor living spaces built with expert craftsmanship.
            Serving Silverado &amp; SW Calgary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-delay-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-forest hover:bg-forest-light text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-forest/40 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center glass hover:bg-white/10 text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in animate-delay-4">
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
