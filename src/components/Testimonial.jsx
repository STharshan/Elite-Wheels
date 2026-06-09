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
      "I had Dent Monkey out (Nicky) to do a small dent on my rear arch. He's got all the latest equipment to make the repair faultless. A truly amazing gent and suberb quailty of work. Will defo recommend to others, and use again as and when needed. 10/10.",
  },
  {
    name: "James InEngland1",
    review:
      "Absolutely brilliant genuine service from Dent Monkey! I had recently bought a cult car, the only issue was the amount of dings and dents present in the bodywork that had accumulated over the years.",
  },
  {
    name: "Ray Smitham",
    review:
      "I highly recommend Nicky at Dent Monkey for the excellent job he did on my Mazda 6 tailgate. Also for his prompt and reliable service & great communication.",
  },
  {
    name: "Oscar Monk",
    review:
      "Really good experience with Nicky and his ability to repair a bad dent on my Golf GTI. Great communication, a fair price, quality workmanship and a nice bloke too! Thanks again",
  },
  {
    name: "Katie Beeston",
    review:
      "Fantastic service from Nicky. He fixed my car quickly and at a great price. I needed the job doing quickly and he was super helpful and accommodating. I wouldn't hesitate to recommend him to friends and family. Thanks Nicky!",
  },
  {
    name: "TigerTigerPantherFox",
    review:
      "Nicky at Dent Monkey came to remove two dents on my Audi A3 and the results are phenomenal. I would highly recommend him to friends and family. My father had a couple supermarket dents removed on his car which is why I contacted him to come & remove the dents on my car. Excellent results!!",
  },
  {
    name: "Raheem Zameer",
    review:
      "Nicky was very friendly and helpful and got a dent out of my Mercedes. He came to the car and was all done within 20 minutes of arrival. Couldn't recommend anyone better!",
  },
  {
    name: "Real Perspectives",
    review:
      "Dented the door of my wife's brand new car, thank God for Dent Monkey who saved my life. Superb Job, excellent communication and fast and friendly service. Genuinely outstanding.",
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
    <section id="testimonial" className="w-full py-10 dark:bg-black transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mb-16">

          {/* Google Logo + Review Badge — stacked, centered */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <img
              src="/review.png"
              alt="review"
              className="h-15 w-auto object-contain mb-3" // Explicit height
            />

            {/* Stars + review count badge */}
            <div className="inline-flex items-center gap-3 justify-center bg-[#7E7E7E]/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
              <span className="text-black dark:text-white text-xs font-bold tracking-widest uppercase">
                5/5 (650+ Reviews)
              </span>
            </div>
          </div>

          <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest transition-colors mb-4">
            Customer Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base max-w-2xl mx-auto">
            Real feedback from local Nottingham drivers who've experienced the Dent Monkey difference.
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
                    className="bg-[#7E7E7E] p-8 rounded-3xl border border-white/10 shadow-xl flex-1 flex flex-col justify-between transition-all duration-300"
                  >
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, j) => (
                          <FaStar key={j} className="text-yellow-400 text-lg" />
                        ))}
                      </div>

                      {/* Review Body */}
                      <p className="text-[15px] lg:text-[16px] text-gray-100 leading-relaxed italic mb-8">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Reviewer Name */}
                    <div className="mt-auto border-t border-white/10 pt-6">
                      <p className="font-bold text-white text-[16px] uppercase tracking-wider">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-bold mt-1">Verified Customer</p>
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
                  ${i === current ? "w-10 h-1.5 bg-[#7E7E7E] dark:bg-white" : "w-2 h-1.5 bg-gray-300 dark:bg-gray-800"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}