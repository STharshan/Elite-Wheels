import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTools,
  FaClock,
} from "react-icons/fa";
import "aos/dist/aos.css";

export default function HeroSection() {


  return (
    <section
      id="home"
      className="relative min-h-screen py-30 bg-black text-white flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-engine.jpg"
          alt="Elite Wheels Glasgow workshop background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">

          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide uppercase"
          >
            Premium Alloy Wheel Refurbishment in{" "}
            <span className="text-[var(--gold)]">Glasgow</span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl sm:text-2xl text-[var(--muted)] uppercase tracking-wide"
          >
            Powder Coating • Diamond Cutting • Kerb Repairs • Custom Finishes
          </p>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[var(--muted)] max-w-2xl mx-auto leading-relaxed"
          >
            Restore your wheels to a factory-fresh finish with Elite Wheels Glasgow. From premium powder coating and precision diamond cutting to crack repairs and full wheel refurbishments, we deliver high-quality craftsmanship with fast turnaround times and exceptional attention to detail.
          </p>

          {/* Service Area Badge */}
          
          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <div
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-deep)] px-8 py-3 rounded-md text-lg font-semibold tracking-wide text-black transition"
            >
              Get a Free Quote
            </div>

           
          </div>

          {/* Feature Strip */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-[var(--surface)] border border-white/10 rounded-lg p-6">
              <FaTools className="text-[var(--gold)] text-3xl mb-2 mx-auto" />
              <p className="uppercase tracking-wide font-semibold">
                Premium Finishes
              </p>
              <p className="text-sm text-[var(--muted)]">
                Factory-quality results
              </p>
            </div>

            <div className="bg-[var(--surface)] border border-white/10 rounded-lg p-6">
              <FaClock className="text-[var(--gold)] text-3xl mb-2 mx-auto" />
              <p className="uppercase tracking-wide font-semibold">
                Fast Turnaround
              </p>
              <p className="text-sm text-[var(--muted)]">
                Same-day options available
              </p>
            </div>

            <div className="bg-[var(--surface)] border border-white/10 rounded-lg p-6">
              <FaMapMarkerAlt className="text-[var(--gold)] text-3xl mb-2 mx-auto" />
              <p className="uppercase tracking-wide font-semibold">
                Glasgow Specialists
              </p>
              <p className="text-sm text-[var(--muted)]">
                Trusted local experts
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
