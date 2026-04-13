import Image from "next/image";
import { MountainDivider } from "./MountainDivider";

const services = [
  {
    title: "Custom Sunrooms",
    description:
      "Beautiful timber-frame sunrooms with glass panels and polycarbonate roofing. Enjoy natural light year-round in a space built with precision and care.",
    image: "/images/sunroom2.jpg",
    features: ["Custom timber framing", "Glass panel walls", "Year-round enjoyment", "Polycarbonate roofing"],
  },
  {
    title: "Custom Decks",
    description:
      "Stunning elevated and ground-level decks with pergolas, iron railings, and premium wood finishing. Built to last through Alberta's seasons.",
    image: "/images/deck.jpg",
    features: ["Elevated & ground-level", "Pergola options", "Iron railing details", "Vinyl decking available"],
  },
  {
    title: "Outdoor Living",
    description:
      "Complete outdoor living solutions combining decks, sunrooms, and entertainment spaces. Transform your backyard into the perfect oasis.",
    image: "/images/deck3.jpg",
    features: ["Entertainment spaces", "Multi-level designs", "Lighting integration", "Complete transformations"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-snow pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-forest" />
            <p className="text-forest font-body font-semibold tracking-[0.25em] uppercase text-xs">
              What We Build
            </p>
            <div className="w-8 h-px bg-forest" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal">
            Our Services
          </h2>
          <p className="mt-5 text-warm-gray text-base max-w-2xl mx-auto leading-relaxed font-body">
            We specialize in custom outdoor living solutions — from elegant
            sunrooms to stunning deck builds, all crafted with premium materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-heading text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-warm-gray leading-relaxed mb-4 font-body text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-charcoal/80 font-body text-sm">
                      <svg className="w-4 h-4 text-forest flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-forest rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-1">
              Ask About Vinyl Decking
            </h3>
            <p className="text-white/60 font-body">
              Durable, low-maintenance vinyl decking built for all weather conditions.
            </p>
          </div>
          <a
            href="tel:5874374655"
            className="flex-shrink-0 bg-white hover:bg-ice text-forest px-7 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-lg"
          >
            Call Now
          </a>
        </div>
      </div>

      <MountainDivider fillColor="#1a1a1a" bgColor="#fafcfe" />
    </section>
  );
}
