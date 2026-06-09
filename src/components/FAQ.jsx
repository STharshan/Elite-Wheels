import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does wheel refurbishment take?",
    a: "Most wheel refurbishment jobs are completed within a few hours to a day, depending on the wheel condition and finish.",
  },
  {
    q: "Can kerb rash be repaired?",
    a: "Yes. Kerb rash and light scuffs can usually be repaired and refinished for a clean factory-style result.",
  },
  {
    q: "Do you offer custom finishes?",
    a: "Yes. We can help with gloss black, gold accent, and other premium finish options.",
  },
  {
    q: "Can you match my current wheel colour?",
    a: "Yes. We can work to match existing finishes or create a fresh look that suits your vehicle.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[linear-gradient(180deg,#111111_0%,#1a1a1a_100%)] py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">

        {/* LEFT */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <span className="block text-[var(--gold)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* RIGHT */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden transition border border-white/10"
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="font-semibold text-white text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>

                  <span
                    className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 border-[var(--gold)] text-[var(--gold)]"
                        : "border-white/20 text-[var(--muted)]"
                    }`}
                  >
                    <Plus size={16} className="sm:hidden" />
                    <Plus size={18} className="hidden sm:block" />
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-4 sm:px-6 pb-4 sm:pb-5 text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
