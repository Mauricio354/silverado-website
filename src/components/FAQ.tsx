"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Silverado community and surrounding areas in SW Calgary. For larger deck and sunroom projects, we're happy to discuss projects throughout the Calgary area.",
  },
  {
    question: "How long does a custom deck or sunroom build take?",
    answer: "A typical deck build takes 1–3 weeks depending on size and complexity. Custom sunrooms generally take 3–6 weeks from start to finish. We'll provide a detailed timeline during your free consultation.",
  },
  {
    question: "Do you offer vinyl decking?",
    answer: "Yes! We offer durable vinyl decking options that are low-maintenance and built to withstand Alberta's harsh weather conditions. Ask us about available colors and styles.",
  },
  {
    question: "What's included in your lawn care packages?",
    answer: "Our packages include lawn cutting, edge trimming, and clipping cleanup. The Bronze package is 1 cut/month ($40), Silver is 2 cuts/month ($75), and Gold is weekly cuts ($140) with priority scheduling.",
  },
  {
    question: "How does your snow removal service work?",
    answer: "We offer both seasonal contracts and per-visit snow removal for driveways, walkways, and sidewalks. We provide reliable service after every snowfall — you don't need to call us, we'll be there.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Absolutely! We offer free, no-obligation estimates for all our services. Call or text us at 587-437-4655 and we'll schedule a convenient time to discuss your project.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Silverado is fully licensed and insured. We carry comprehensive liability insurance for all projects and services, giving you complete peace of mind.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/6 last:border-b-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group">
        <h3 className="font-heading text-sm md:text-base font-semibold text-white group-hover:text-ice transition-colors duration-300 pr-6">
          {question}
        </h3>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-forest rotate-45" : "bg-white/8 group-hover:bg-white/12"
        }`}>
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-white/40 text-sm leading-relaxed pr-10">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-slate-dark py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-ice-dark font-heading font-medium tracking-[0.2em] uppercase text-xs mb-3">
            Common Questions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            FAQs
          </h2>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
