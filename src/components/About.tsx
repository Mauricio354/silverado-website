"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MountainDivider } from "./MountainDivider";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-forest-light">
      {count}
      {suffix}
    </div>
  );
}

const stats = [
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 4.8, suffix: "", label: "Customer Rating", isDecimal: true },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

export function About() {
  return (
    <section id="about" className="relative bg-charcoal pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="relative">
            <div className="relative h-[400px] md:h-[480px] rounded-2xl overflow-hidden">
              <Image src="/images/deck2.jpg" alt="Silverado custom deck" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-forest rounded-xl p-5 md:p-6 shadow-2xl shadow-forest/30">
              <p className="font-heading text-3xl font-bold text-white">15+</p>
              <p className="text-white/70 font-body text-xs tracking-wide uppercase mt-0.5">Years of Excellence</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-forest-light" />
              <p className="text-forest-light font-body font-semibold tracking-[0.25em] uppercase text-xs">
                About Silverado
              </p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-snow leading-tight mb-6">
              Reliable. Local. Quality Craftsmanship You Can Count On.
            </h2>
            <p className="text-snow/50 text-base leading-relaxed mb-5 font-body">
              Based in SW Calgary, Silverado has been transforming backyards into
              stunning outdoor living spaces for over 15 years. From custom
              sunrooms to elevated decks with pergolas, every project is built
              with premium materials and meticulous attention to detail.
            </p>
            <p className="text-snow/50 text-base leading-relaxed mb-8 font-body">
              We also keep your property looking its best year-round with our
              lawn care and snow removal services. One call handles it all —
              that&apos;s the Silverado difference.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-forest/30 group"
            >
              Start Your Project
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-charcoal-light rounded-xl p-6 border border-snow/5">
              {stat.isDecimal ? (
                <div className="font-heading text-4xl md:text-5xl font-bold text-forest-light">{stat.value}</div>
              ) : (
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              )}
              <p className="text-snow/40 font-body text-xs tracking-wider uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <MountainDivider fillColor="#fafcfe" bgColor="#1a1a1a" />
    </section>
  );
}
