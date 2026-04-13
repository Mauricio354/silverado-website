import Image from "next/image";
import { MountainDivider } from "./MountainDivider";

const pricingPlans = [
  {
    name: "Bronze",
    price: "$40",
    period: "per visit",
    description: "1 Cut Per Month",
    features: ["Single lawn cut", "Edge trimming", "Clipping cleanup"],
  },
  {
    name: "Silver",
    price: "$75",
    period: "per visit",
    description: "2 Cuts Per Month",
    features: ["Bi-weekly lawn cuts", "Edge trimming", "Clipping cleanup", "Weed trimming"],
    popular: true,
  },
  {
    name: "Gold",
    price: "$140",
    period: "per visit",
    description: "4 Cuts Per Month",
    features: ["Weekly lawn cuts", "Full edge trimming", "Clipping cleanup", "Weed trimming", "Priority scheduling"],
  },
];

export function LawnSnow() {
  return (
    <section id="lawn-snow" className="relative bg-charcoal pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--color-ice)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--color-forest)_0%,_transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <Image
              src="/images/silverado-lawn-snow-logo.jpg"
              alt="Silverado Lawn & Snow"
              width={160}
              height={160}
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-ice-dark" />
            <p className="text-ice-dark font-body font-semibold tracking-[0.25em] uppercase text-xs">Our Second Division</p>
            <div className="w-8 h-px bg-ice-dark" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snow">
            Lawn &amp; Snow Services
          </h2>
          <p className="mt-4 text-snow/40 text-base max-w-2xl mx-auto leading-relaxed font-body">
            Keep your property looking its best year-round. From seasonal lawn care
            packages to reliable snow removal after every snowfall.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Snow Removal */}
          <div className="relative group rounded-2xl overflow-hidden">
            <div className="relative h-[420px]">
              <Image src="/images/silveradosnow.jpg" alt="Silverado residential snow removal" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Snow Removal</h3>
              <ul className="space-y-2 mb-5">
                {["Driveways, walkways & sidewalks", "Reliable service after every snowfall", "Seasonal & per-visit options", "Serving Silverado & SW Calgary"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-snow/70 font-body text-sm">
                    <svg className="w-3.5 h-3.5 text-ice flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:5874374655" className="inline-flex items-center gap-2 bg-ice text-forest-dark px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:shadow-lg">
                Book Snow Removal
              </a>
            </div>
          </div>

          {/* Lawn Care Pricing */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-snow mb-1">Seasonal Lawn Care</h3>
            <p className="text-snow/40 font-body text-sm mb-6">
              Now booking Spring &amp; Summer 2026. Limited seasonal spots available.
            </p>
            <div className="space-y-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-5 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-forest bg-forest/10"
                      : "border border-snow/8 bg-charcoal-light hover:border-snow/15"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2.5 right-5 bg-forest text-white text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full font-body">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-snow">{plan.name} Package</h4>
                      <p className="text-snow/35 font-body text-xs mt-0.5">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-2xl font-bold text-forest-light">{plan.price}</span>
                      <span className="text-snow/35 font-body text-xs block">{plan.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-snow/25 font-body text-xs mt-5 text-center tracking-wide">
              Free Estimates &bull; Limited Seasonal Spots
            </p>
          </div>
        </div>
      </div>

      <MountainDivider fillColor="#fafcfe" bgColor="#1a1a1a" />
    </section>
  );
}
