import Image from "next/image";

const pricingPlans = [
  {
    name: "Bronze",
    price: "$40",
    period: "per visit",
    description: "1 Cut Per Month",
  },
  {
    name: "Silver",
    price: "$75",
    period: "per visit",
    description: "2 Cuts Per Month",
    popular: true,
  },
  {
    name: "Gold",
    price: "$140",
    period: "per visit",
    description: "4 Cuts Per Month",
  },
];

export function LawnSnow() {
  return (
    <section id="lawn-snow" className="relative bg-slate-dark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--color-ice)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--color-forest)_0%,_transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <Image
              src="/images/silverado-lawn-snow-logo.jpg"
              alt="Silverado Lawn & Snow"
              width={140}
              height={140}
              className="rounded-2xl shadow-xl shadow-black/30"
            />
          </div>
          <p className="text-ice-dark font-heading font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Our Second Division
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Lawn &amp; Snow Services
          </h2>
          <p className="mt-4 text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            Keep your property looking its best year-round. Seasonal lawn care
            and reliable snow removal after every snowfall.
          </p>
        </div>

        {/* Lawn Care — Photo + Pricing side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Lawn Care Promo Photo */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            <Image
              src="/images/lawncarepricing.jpg"
              alt="Silverado seasonal lawn care packages"
              fill
              className="object-cover"
            />
          </div>

          {/* Lawn Care Pricing Cards */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold text-white mb-1">Seasonal Lawn Care</h3>
            <p className="text-white/35 text-sm mb-6">
              Now booking Spring &amp; Summer 2026. Limited spots available.
            </p>
            <div className="space-y-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-5 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-forest bg-forest/10"
                      : "glass hover:bg-white/8"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2.5 right-5 bg-forest text-white text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading text-base font-bold text-white">{plan.name} Package</h4>
                      <p className="text-white/30 text-xs mt-0.5">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-2xl font-bold text-ice">{plan.price}</span>
                      <span className="text-white/30 text-xs block">{plan.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-xs mt-5 text-center tracking-wide">
              Free Estimates &bull; Limited Seasonal Spots
            </p>
          </div>
        </div>

        {/* Snow Removal — Photo + Info side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Snow Promo Photo */}
          <div className="relative rounded-2xl overflow-hidden h-[450px] lg:h-auto lg:min-h-[420px] order-2 lg:order-1">
            <Image
              src="/images/silveradosnow.jpg"
              alt="Silverado residential snow removal services"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Snow Removal Info */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h3 className="font-heading text-2xl font-bold text-white mb-3">Snow Removal</h3>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              Reliable residential snow removal for Silverado &amp; SW Calgary.
              We show up after every snowfall — no need to call.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Driveways, walkways & sidewalks",
                "Reliable service after every snowfall",
                "Seasonal & per-visit options",
                "Serving Silverado & SW Calgary",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-white/55 text-sm">
                  <svg className="w-4 h-4 text-ice flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <a
                href="tel:5874374655"
                className="inline-flex items-center gap-2 bg-ice hover:bg-white text-slate-dark px-7 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg"
              >
                Book Snow Removal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
