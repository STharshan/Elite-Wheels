import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    beforeImageUrl: "/g1.jpg",
    afterImageUrl: "/g2.jpg",
    altText: "Classic car restoration set 1",
  },
  {
    beforeImageUrl: "/g3.jpg",
    afterImageUrl: "/g4.jpg",
    altText: "Classic car restoration set 2",
  },
  {
    beforeImageUrl: "/g5.jpg",
    afterImageUrl: "/g6.jpg",
    altText: "Classic car restoration set 3",
  },
  {
    beforeImageUrl: "/g7.jpg",
    afterImageUrl: "/g8.jpg",
    altText: "Classic car restoration set 4",
  },
  {
    beforeImageUrl: "/g9.jpg",
    afterImageUrl: "/g10.jpg",
    altText: "Classic car restoration set 5",
  },
  {
    beforeImageUrl: "/g11.jpg",
    afterImageUrl: "/g12.jpg",
    altText: "Classic car restoration set 6",
  },
  {
    beforeImageUrl: "/g13.jpg",
    afterImageUrl: "/g14.jpg",
    altText: "Classic car restoration set 7",
  },
  {
    beforeImageUrl: "/g15.jpg",
    afterImageUrl: "/g16.jpg",
    altText: "Classic car restoration set 8",
  },
  {
    beforeImageUrl: "/g18.jpg",
    afterImageUrl: "/g17.jpg",
    altText: "Classic car restoration set 9",
  },
  {
    beforeImageUrl: "/g19.jpg",
    afterImageUrl: "/g20.jpg",
    altText: "Classic car restoration set 10",
  },
];



const WorkGallery = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && setSelectedCard(null);

    if (selectedCard) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const openModal = (card, index) => setSelectedCard({ ...card, index });

  const navigateModal = (direction) => {
    if (!selectedCard) return;
    let newIndex =
      direction === "next"
        ? (selectedCard.index + 1) % cardData.length
        : (selectedCard.index - 1 + cardData.length) % cardData.length;

    setSelectedCard({ ...cardData[newIndex], index: newIndex });
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[linear-gradient(180deg,var(--bg)_0%,var(--surface)_100%)] transition-colors" data-aos="fade-up">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="section-heading">
            Our Work <span className="text-[#E53E3E]">Gallery</span>
          </h2>
          <p className="mt-2 text-[var(--muted)] text-sm sm:text-base max-w-xl mx-auto">
            See the amazing transformations of classic cars through our restoration process
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => openModal(card, index)}
              className="group bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-white/10 cursor-pointer transform hover:scale-[1.03]"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <div className="flex flex-col sm:flex-row relative">
                {/* BEFORE IMAGE */}
                <div className="w-full sm:w-1/2 aspect-square relative overflow-hidden">
                  <img
                    src={card.beforeImageUrl}
                    alt={`Before - ${card.altText}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[var(--gold)] text-black px-2 py-1 text-xs rounded-full shadow">
                    Before
                  </span>
                </div>

                {/* AFTER IMAGE */}
                <div className="w-full sm:w-1/2 aspect-square relative overflow-hidden">
                  <img
                    src={card.afterImageUrl}
                    alt={`After - ${card.altText}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-[var(--gold)] text-black px-2 py-1 text-xs rounded-full shadow">
                    After
                  </span>
                </div>

                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/60"></div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4">
            <div className="relative bg-black rounded-2xl w-full max-w-6xl max-h-[92vh] overflow-auto shadow-2xl border border-white/10" data-aos="zoom-in">

              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">
                  Our Work Gallery
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-[var(--muted)]">
                    {selectedCard.index + 1} / {cardData.length}
                  </span>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
                {/* BEFORE IMAGE */}
                <div className="flex-1">
                  <span className="bg-[var(--gold)] text-black px-3 py-1 rounded text-sm">Before</span>
                  <div className="w-full mt-3 rounded-lg overflow-hidden aspect-video">
                    <img
                      src={selectedCard.beforeImageUrl}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* AFTER IMAGE */}
                <div className="flex-1">
                  <span className="bg-[var(--gold)] text-black px-3 py-1 rounded text-sm">After</span>
                  <div className="w-full mt-3 rounded-lg overflow-hidden aspect-video">
                    <img
                      src={selectedCard.afterImageUrl}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>


              {/* Navigation Arrows */}
              <button
                onClick={() => navigateModal("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full border border-white/10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateModal("next")}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full border border-white/10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;
