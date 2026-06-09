import React from "react";

export default function AboutSection() {

  return (
    <section
      className="relative py-24 bg-[linear-gradient(180deg,#111111_0%,#1a1a1a_100%)] overflow-hidden"
      id="about"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* TITLE */}
        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
            About{" "}
            <span style={{ color: "var(--gold)" }}>
              Elite Wheels Glasgow
            </span>
          </h2>

          <div
            className="w-24 h-[3px] mt-4"
            style={{ backgroundColor: "var(--gold)" }}
          />

          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
            We are a trusted wheel refurbishment and repair specialist
            delivering professional workmanship, honest advice, and reliable
            results. From refinishing to smart repairs, we keep your wheels
            looking sharp, premium, and road ready.
          </p>
        </div>

        {/* CONTENT GRID - Swapped order: Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          {/* LEFT – IMAGE (FIXED WIDTH) */}
          <div
            className="relative w-full max-w-[520px] mx-auto lg:mx-0 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* IMAGE */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/pexels-photo-17045319-2880w.webp"
                alt="MOT inspection"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* FLOATING STAT – LEFT */}
            <div className="absolute bottom-6 left-6 bg-black/80 border border-white/10 rounded-md p-5 shadow-xl z-20">
              <p className="text-2xl font-bold text-white">
                10+ Years
              </p>
              <p className="text-xs text-[var(--muted)]">
                Industry Experience
              </p>
            </div>

            {/* FLOATING STAT – RIGHT */}
            <div className="absolute top-6 right-6 bg-black/80 border border-white/10 rounded-md p-5 shadow-xl z-20">
              <p className="text-2xl font-bold text-white">
                1000+
              </p>
              <p className="text-xs text-[var(--muted)]">
                Vehicles Tested
              </p>
            </div>
          </div>

          {/* RIGHT – FEATURES */}
          <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
            {[
              {
                title: "Premium Wheel Finishes",
                desc: "Gloss black, gold accents, and custom refinishing tailored to your style.",
              },
              {
                title: "Precision Repairs",
                desc: "Curb rash, scuffs, and cosmetic damage restored with care and detail.",
              },
              {
                title: "Customer-First Service",
                desc: "Clear communication, honest advice, and fast turnaround.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-md bg-white/5 border border-white/10 hover:border-[var(--gold)] transition"
              >
                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
