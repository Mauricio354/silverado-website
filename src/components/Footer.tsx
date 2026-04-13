import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-snow/5">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Image src="/images/Silveradodecklogo.png" alt="Silverado" width={140} height={40} className="h-9 w-auto mb-3" />
            <p className="text-snow/30 font-body text-xs leading-relaxed">
              Reliable &bull; Local &bull; Quality Craftsmanship You Can Count On.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold text-snow tracking-widest uppercase mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Lawn & Snow", href: "#lawn-snow" },
                { label: "FAQs", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-snow/30 hover:text-forest-light text-xs font-body transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold text-snow tracking-widest uppercase mb-3">Our Services</h4>
            <ul className="space-y-1.5">
              {["Custom Sunrooms", "Custom Decks", "Vinyl Decking", "Lawn Care", "Snow Removal"].map((service) => (
                <li key={service} className="text-snow/30 text-xs font-body">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-snow/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-snow/20 text-[11px] font-body">&copy; {new Date().getFullYear()} Silverado. All rights reserved.</p>
          <p className="text-snow/20 text-[11px] font-body">
            Serving Silverado &amp; SW Calgary &bull;{" "}
            <a href="tel:5874374655" className="hover:text-forest-light transition-colors">587-437-4655</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
