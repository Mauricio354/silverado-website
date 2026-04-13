import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Image src="/images/silverado-logo-transparent.png" alt="Silverado" width={140} height={40} className="h-9 w-auto mb-3" />
            <p className="text-white/25 text-xs leading-relaxed">
              Reliable &bull; Local &bull; Quality Craftsmanship You Can Count On.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Lawn & Snow", href: "#lawn-snow" },
                { label: "FAQs", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/25 hover:text-forest-light text-xs transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase mb-3">Our Services</h4>
            <ul className="space-y-1.5">
              {["Custom Sunrooms", "Custom Decks", "Vinyl Decking", "Lawn Care", "Snow Removal"].map((s) => (
                <li key={s} className="text-white/25 text-xs">{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-[11px]">&copy; {new Date().getFullYear()} Silverado. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61585092451302"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-forest-light transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <p className="text-white/15 text-[11px]">
              Serving Silverado &amp; SW Calgary &bull;{" "}
              <a href="tel:5874374655" className="hover:text-forest-light transition-colors">587-437-4655</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
