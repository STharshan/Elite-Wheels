import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const TIMER_DURATION = 5000;
  const VISIBLE_COUNT = 3;

  const cards = [
    {
      number: "01",
      title: "Powder Coating",
      description:
        "High-durability powder coating service that restores and enhances alloy wheels with a smooth, factory-quality finish. Available in a wide range of colours, this process provides long-lasting protection against corrosion, chips, and road damage while improving overall appearance.",
      cost: 'Up to 18" - £240 | 19-20" - £280 | 21-22" - £300 | 23-24" - £320',
      media: "/Carparkding.jpeg",
      tags:
        "Powder coating, alloy wheel coating, wheel painting Glasgow, custom wheel colours, wheel refurbishment Glasgow",
      link: "/powder-coating",
    },
    {
      number: "02",
      title: "Diamond Cutting",
      description:
        "Precision diamond cutting service that restores the original machined finish of alloy wheels. Using specialist CNC lathe equipment, we remove surface imperfections and create a sharp, high-gloss finish ideal for premium and performance vehicles.",
      cost: 'Up to 18" - £300 | 19-20" - £340 | 21-22" - £360 | 23-24" - £380',
      media: "/Largeimpact.jpeg",
      tags:
        "Diamond cut wheels Glasgow, CNC wheel cutting, alloy wheel repair, premium wheel refurbishment, wheel restoration Glasgow",
      link: "/diamond-cutting",
    },
    {
      number: "03",
      title: "Wheel Refurbishment",
      description:
        "Complete wheel restoration service designed to bring damaged, faded, or worn alloys back to near-new condition. Includes stripping, repairing, refinishing, and sealing for a flawless finish.",
      cost: "From £220 per set",
      media: "/Complexdents.jpeg",
      tags:
        "wheel refurbishment Glasgow, alloy restoration, full wheel restoration, wheel repair service, refurbished alloys",
      link: "/wheel-refurbishment",
    },
    {
      number: "04",
      title: "Wheel Straightening",
      description:
        "Specialist hydraulic straightening process to correct bent or distorted alloy wheels caused by potholes or impact damage. Restores structural integrity and ensures safe driving performance.",
      cost: "From £60 per wheel",
      media: "/Creases.jpeg",
      tags:
        "wheel straightening Glasgow, bent alloy repair, pothole wheel damage repair, alloy wheel alignment fix",
      link: "/wheel-straightening",
    },
    {
      number: "05",
      title: "Crack Repairs",
      description:
        "Professional welding and repair service for cracked alloy wheels. We assess damage, weld using specialist techniques, and restore strength and safety to factory standards.",
      cost: "From £50 per repair",
      media: "/Haildamage.jpeg",
      tags:
        "alloy wheel crack repair, wheel welding Glasgow, damaged alloy repair, safety wheel repair, rim crack fixing",
      link: "/crack-repairs",
    },
    {
      number: "06",
      title: "Colour Changes",
      description:
        "Custom colour change service allowing you to completely transform the look of your wheels. Choose from gloss, matte, satin, or custom finishes to match your vehicle styling.",
      cost: "From £240 depending on wheel size and finish",
      media: "/Dingdamage.jpeg",
      tags:
        "wheel colour change Glasgow, custom alloy colours, rim painting service, bespoke wheel finish, car styling wheels",
      link: "/colour-changes",
    },
    {
      number: "07",
      title: "Brake Caliper Painting",
      description:
        "High-temperature brake caliper painting service designed to enhance the visual appeal of your braking system while protecting against heat, corrosion, and brake dust.",
      cost: "From £120 per axle",
      media: "/Bodyline.jpeg",
      tags:
        "brake caliper painting Glasgow, caliper colour change, performance brake styling, custom brake calipers, car detailing upgrades",
      link: "/brake-caliper-painting",
    },
    {
      number: "08",
      title: "Kerb Damage Repairs",
      description:
        "Fast and effective repair service for kerbed, scratched, or scuffed alloy wheels. Restores surface finish and blends repairs seamlessly with the original wheel design.",
      cost: "From £40 per wheel",
      media: "/Carparkding.jpeg",
      tags:
        "kerb damage repair Glasgow, alloy scratch repair, rim scuff repair, wheel touch-up service, curb rash fix",
      link: "/kerb-damage-repairs",
    },
    {
      number: "09",
      title: "Custom Wheel Colours",
      description:
        "Fully bespoke wheel finishing service offering unlimited colour options and effects. Ideal for unique builds, show cars, or personal styling preferences.",
      cost: "From £260 depending on finish and complexity",
      media: "/Largeimpact.jpeg",
      tags:
        "custom alloy wheels Glasgow, bespoke wheel colours, unique wheel finishes, car customization Glasgow, premium wheel styling",
      link: "/custom-wheel-colours",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleCards = useMemo(() => {
    if (isMobile) {
      return [{ ...cards[activeCard], originalIndex: activeCard }];
    }

    const result = [];
    for (let i = 0; i < VISIBLE_COUNT; i += 1) {
      const index = (activeCard + i) % cards.length;
      result.push({ ...cards[index], originalIndex: index });
    }
    return result;
  }, [activeCard, cards, isMobile]);

  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (TIMER_DURATION / 50);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    const cardTimer = setTimeout(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, TIMER_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(cardTimer);
    };
  }, [activeCard, cards.length]);

  const handleCardClick = (originalIndex) => {
    if (originalIndex !== activeCard) {
      setActiveCard(originalIndex);
      setProgress(0);
    }
  };

  const handlePrevious = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
    setProgress(0);
  };

  const renderMedia = (card, extraClasses = "") => (
    <img
      src={card.media}
      alt={card.title}
      className={`w-full h-full object-cover ${extraClasses}`}
      loading="lazy"
    />
  );

  return (
    <section
      id="services"
      className="w-full min-h-screen scroll-m-15 bg-[linear-gradient(180deg,#111111_0%,#1a1a1a_100%)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-colors duration-500"
    >
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest transition-colors">
          Our Services
        </h2>
        <p className="text-[var(--muted)] font-medium text-xs sm:text-sm mt-2">
          Showing {activeCard + 1} of {cards.length}
        </p>
      </div>

      <div className="w-full max-w-[1400px] mb-6 md:mb-0">
        {isMobile ? (
          <div className="relative">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-30 bg-black rounded-full p-2 shadow-lg border border-white/10"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-30 bg-black rounded-full p-2 shadow-lg border border-white/10"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-xl min-h-[760px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10 overflow-hidden z-20">
                <div
                  className="absolute left-0 top-0 h-full bg-[var(--gold)] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-4 h-full">
                <div className="flex flex-col items-start">
                  <div className="text-5xl font-black text-white/20">
                    {cards[activeCard].number}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {cards[activeCard].title}
                  </h3>
                </div>

                <div className="space-y-3 overflow-y-auto pr-1 max-h-[260px]">
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {cards[activeCard].description}
                  </p>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)] font-bold mb-2">
                      Service Cost
                    </p>
                    <p className="text-sm text-white leading-relaxed">
                      {cards[activeCard].cost}
                    </p>
                  </div>
                </div>

                <div className="w-full h-72 overflow-hidden rounded-xl shadow-inner border border-white/10 shrink-0 bg-white">
                  {renderMedia(cards[activeCard])}
                </div>

                <Link
                  to={cards[activeCard].link}
                  className="w-full bg-[var(--gold)] text-black py-3 rounded-lg font-bold text-center hover:bg-[var(--gold-deep)] transition-colors mt-2"
                >
                  LEARN MORE
                </Link>

                <div className="text-[10px] font-bold tracking-widest text-[var(--muted)] uppercase mt-auto">
                  {cards[activeCard].tags}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 lg:gap-6 h-[88vh] min-h-[860px] items-stretch">
            {visibleCards.map((card, displayIndex) => {
              const isFirst = displayIndex === 0;

              return (
                <div
                  key={card.originalIndex}
                  onClick={() => handleCardClick(card.originalIndex)}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white/5 border border-white/10 ${
                    isFirst ? "flex-[2.5]" : "flex-1"
                  } hover:shadow-2xl group`}
                >
                  {isFirst && (
                    <div className="absolute bottom-0 left-0 w-1.5 h-full bg-black/10 overflow-hidden z-20">
                      <div
                        className="absolute bottom-0 left-0 w-full bg-[var(--gold)] transition-all duration-100 ease-linear"
                        style={{ height: `${progress}%` }}
                      />
                    </div>
                  )}

                  <div className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 h-full relative z-10">
                    <div className="flex flex-col items-start">
                      <div
                        className={`text-5xl lg:text-6xl font-black transition-all duration-700 ${
                          isFirst ? "text-white/20 scale-110" : "text-white/10 scale-90"
                        }`}
                      >
                        {card.number}
                      </div>
                      <h3
                        className={`text-lg lg:text-2xl font-bold transition-colors duration-500 mt-2 ${
                          isFirst ? "text-white" : "text-[var(--muted)]"
                        }`}
                      >
                        {card.title}
                      </h3>
                    </div>

                    <div
                      className={`flex-1 flex flex-col justify-between transition-all duration-700 ${
                        isFirst ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
                      }`}
                    >
                      <div className="space-y-4 overflow-y-auto pr-1 max-h-[34vh]">
                        <p className="text-[var(--muted)] text-sm lg:text-base leading-relaxed">
                          {card.description}
                        </p>

                        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                          <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)] font-bold mb-2">
                            Service Cost
                          </p>
                          <p className="text-sm lg:text-base text-white leading-relaxed">
                            {card.cost}
                          </p>
                        </div>
                      </div>

                      <div className="w-full h-72 lg:h-[22rem] overflow-hidden rounded-2xl shadow-inner border border-white/10 my-4 bg-white">
                        {renderMedia(card, "group-hover:scale-105 transition-transform duration-1000")}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-[9px] lg:text-[10px] font-bold tracking-widest max-w-xs text-[var(--muted)] uppercase">
                          {card.tags}
                        </div>

                        <Link
                          to={card.link}
                          className="bg-[var(--gold)] text-black px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-[var(--gold-deep)] transition-colors"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                  {!isFirst && (
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-0" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-6 md:mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveCard(i);
              setProgress(0);
            }}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              activeCard === i ? "w-8 bg-[var(--gold)]" : "w-2 bg-white/20"
            }`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
