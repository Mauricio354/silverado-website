import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative bg-slate-mid py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/sunroom3flyer.jpg" alt="" fill className="object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-slate-mid/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-ice font-heading font-medium tracking-[0.2em] uppercase text-xs mb-3">
          Get Started
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          Where Plans<br />Become Projects
        </h2>
        <p className="text-white/40 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Ready to transform your outdoor space? Reach out today for a free
          quote. Quality craftsmanship you can count on.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <a
            href="tel:5874374655"
            className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-light text-white px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-forest/40 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 587-437-4655
          </a>
          <a
            href="sms:5874374655"
            className="inline-flex items-center gap-2.5 glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Text Us
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61585092451302"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", icon2: "M15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "Location", line1: "Serving Silverado &", line2: "SW Calgary" },
            { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "Phone", line1: "Call or Text", line2: "587-437-4655", isLink: true },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Hours", line1: "Mon–Sat: 7AM–7PM", line2: "Sun: By Appointment" },
          ].map((card) => (
            <div key={card.title} className="glass rounded-xl p-5">
              <div className="w-9 h-9 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-4 h-4 text-forest-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  {card.icon2 && <path strokeLinecap="round" strokeLinejoin="round" d={card.icon2} />}
                </svg>
              </div>
              <h3 className="font-heading text-sm font-bold text-white mb-1">{card.title}</h3>
              <p className="text-white/35 text-xs">
                {card.line1}<br />
                {card.isLink ? (
                  <a href="tel:5874374655" className="text-ice hover:text-ice-light transition-colors">{card.line2}</a>
                ) : card.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
