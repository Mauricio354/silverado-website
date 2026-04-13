import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative bg-dark-wood pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/sunroom3flyer.jpg" alt="" fill className="object-cover opacity-8" />
        <div className="absolute inset-0 bg-dark-wood/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-ice-dark" />
          <p className="text-ice-dark font-body font-semibold tracking-[0.25em] uppercase text-xs">Get Started</p>
          <div className="w-8 h-px bg-ice-dark" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-snow leading-tight mb-5">
          Where Plans Become Projects
        </h2>
        <p className="text-snow/45 font-body text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Ready to transform your outdoor space? Reach out today for a free
          quote. Quality craftsmanship you can count on.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="tel:5874374655"
            className="inline-flex items-center gap-3 bg-forest hover:bg-forest-light text-white px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-forest/40 hover:-translate-y-0.5 font-body"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 587-437-4655
          </a>
          <a
            href="sms:5874374655"
            className="inline-flex items-center gap-3 border border-snow/20 hover:border-snow/40 hover:bg-snow/5 text-snow px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 font-body"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Text Us
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
              icon2: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
              title: "Location",
              line1: "Serving Silverado &",
              line2: "SW Calgary",
            },
            {
              icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
              title: "Phone",
              line1: "Call or Text",
              line2: "587-437-4655",
              isLink: true,
            },
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Hours",
              line1: "Mon–Sat: 7AM–7PM",
              line2: "Sun: By Appointment",
            },
          ].map((card) => (
            <div key={card.title} className="bg-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-snow/5">
              <div className="w-10 h-10 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-forest-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  {card.icon2 && <path strokeLinecap="round" strokeLinejoin="round" d={card.icon2} />}
                </svg>
              </div>
              <h3 className="font-heading text-sm font-bold text-snow mb-1">{card.title}</h3>
              <p className="text-snow/40 font-body text-xs">
                {card.line1}<br />
                {card.isLink ? (
                  <a href="tel:5874374655" className="text-forest-light hover:text-forest transition-colors">{card.line2}</a>
                ) : (
                  card.line2
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
