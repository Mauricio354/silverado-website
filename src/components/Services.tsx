import Image from "next/image";

const services = [
  {
    title: "Custom Sunrooms",
    description:
      "Beautiful timber-frame sunrooms with glass panels and polycarbonate roofing. Enjoy natural light year-round.",
    image: "/images/sunroom2.jpg",
    features: ["Custom timber framing", "Glass panel walls", "Year-round enjoyment", "Polycarbonate roofing"],
  },
  {
    title: "Custom Decks",
    description:
      "Stunning elevated and ground-level decks with pergolas, iron railings, and premium wood finishing.",
    image: "/images/deck.jpg",
    features: ["Elevated & ground-level", "Pergola options", "Iron railing details", "Vinyl decking available"],
  },
  {
    title: "Outdoor Living",
    description:
      "Complete outdoor living solutions combining decks, sunrooms, and entertainment spaces.",
    image: "/images/deck3.jpg",
    features: ["Entertainment spaces", "Multi-level designs", "Lighting integration", "Complete transformations"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-frost py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-forest font-heading font-medium tracking-[0.2em] uppercase text-xs mb-3">
            What We Build
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-dark">
            Our Services
          </h2>
          <p className="mt-4 text-slate-light/70 text-base max-w-xl mx-auto leading-relaxed">
            From elegant sunrooms to stunning deck builds — all crafted with
            premium materials and expert craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 stagger-children">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-dark/5 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/50 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-heading text-lg font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-slate-light/60 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-dark/70 text-sm">
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

        <div className="mt-12 glass-light rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 border border-forest/10">
          <div>
            <h3 className="font-heading text-xl font-bold text-slate-dark mb-1">
              Ask About Vinyl Decking
            </h3>
            <p className="text-slate-light/60 text-sm">
              Durable, low-maintenance vinyl decking built for all weather conditions.
            </p>
          </div>
          <a
            href="tel:5874374655"
            className="flex-shrink-0 bg-forest hover:bg-forest-light text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-forest/30"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
