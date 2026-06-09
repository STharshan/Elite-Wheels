import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "BartekS",
    review:
      "Fast, efficient, friendly. Nicky does the job with a smile. Loads of nasty dents on my car Nicky sorted them no problem at all. Could not recommend him more! If you need any dents removing he's the man to contact!",
  },
  {
    name: "gareth noon",
    review:
      "I had Elite Wheels Glasgow out to do a small repair on my rear arch. The finish was faultless and the workmanship was excellent. I would definitely recommend them and use them again.",
  },
  {
    name: "James InEngland1",
    review:
      "Absolutely brilliant genuine service from Elite Wheels Glasgow! I had recently bought a car and the wheels needed serious attention. The results were better than I expected.",
  },
  {
    name: "Ray Smitham",
    review:
      "I highly recommend Elite Wheels Glasgow for the excellent job they did on my vehicle. Prompt, reliable service and great communication throughout.",
  },
  {
    name: "Oscar Monk",
    review:
      "Really good experience with the team and their ability to restore a damaged wheel on my Golf GTI. Great communication, a fair price, and quality workmanship.",
  },
  {
    name: "Katie Beeston",
    review:
      "Fantastic service from Elite Wheels Glasgow. They completed the work quickly at a great price and were super helpful and accommodating throughout.",
  },
  {
    name: "TigerTigerPantherFox",
    review:
      "Elite Wheels Glasgow came out to sort two issues on my Audi A3 and the results are phenomenal. I would highly recommend them to friends and family.",
  },
  {
    name: "Raheem Zameer",
    review:
      "The team was very friendly and helpful and got my Mercedes wheel looking great again. They were quick, efficient, and easy to deal with.",
  },
  {
    name: "Real Perspectives",
    review:
      "I had an issue with my wife’s car and Elite Wheels Glasgow saved the day. Superb job, excellent communication, and fast, friendly service.",
  },
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = chunkArray(testimonials, isMobile ? 1 : 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <section id="testimonial" className="w-full py-10 bg-[linear-gradient(180deg,#111111_0%,#1a1a1a_100%)] transition-colors duration-500" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mb-16" data-aos="fade-up">

          {/* Google Logo + Review Badge — stacked, centered */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <img
              src="/review.png"
              alt="review"
              className="h-15 w-auto object-contain mb-3" // Explicit height
            />

            {/* Stars + review count badge */}
            <div className="inline-flex items-center gap-3 justify-center bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                5/5 (650+ Reviews)
              </span>
            </div>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest transition-colors mb-4">
            Customer Stories
          </h2>
          <p className="text-[var(--muted)] font-medium text-sm sm:text-base max-w-2xl mx-auto">
            Real feedback from local Glasgow drivers who've experienced the Elite Wheels Glasgow difference.
          </p>
        </div>

        {/* Carousel Container */}
        <div {...handlers} className="relative overflow-hidden px-2">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, idx) => (
              <div key={idx} className="shrink-0 w-full flex flex-col md:flex-row gap-6 lg:gap-8">
                {group.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl flex-1 flex flex-col justify-between transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={i * 120}
                >
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, j) => (
                          <FaStar key={j} className="text-[var(--gold)] text-lg" />
                        ))}
                      </div>

                      {/* Review Body */}
                      <p className="text-[15px] lg:text-[16px] text-white leading-relaxed italic mb-8">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Reviewer Name */}
                    <div className="mt-auto border-t border-white/10 pt-6">
                      <p className="font-bold text-white text-[16px] uppercase tracking-wider">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.2em] font-bold mt-1">Verified Customer</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full 
                  ${i === current ? "w-10 h-1.5 bg-[var(--gold)]" : "w-2 h-1.5 bg-white/20"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
