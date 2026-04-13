"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Lawn & Snow", href: "#lawn-snow" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/30 py-2"
          : "bg-gradient-to-b from-charcoal/80 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <Image
            src="/images/Silveradodecklogo.png"
            alt="Silverado"
            width={180}
            height={50}
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-snow/70 hover:text-snow text-[13px] font-medium tracking-widest uppercase transition-colors duration-300 font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5874374655"
            className="ml-3 bg-forest hover:bg-forest-light text-white px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-forest/30"
          >
            587-437-4655
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-snow transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-snow transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-snow transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-charcoal/98 backdrop-blur-lg transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-snow text-2xl font-heading font-semibold tracking-wide hover:text-forest-light transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5874374655"
            className="mt-4 bg-forest hover:bg-forest-light text-white px-8 py-3 rounded-full text-lg font-semibold tracking-wider transition-all duration-300"
          >
            587-437-4655
          </a>
        </nav>
      </div>
    </header>
  );
}
