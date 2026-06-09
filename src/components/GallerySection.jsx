"use client";
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    beforeImageUrl: "/brae-3.jpeg",
    afterImageUrl: "/brae-1.jpeg",
    altText: "1967 Ford Mustang Fastback",
    category: "Complete bare metal respray",
  },
  {
    beforeImageUrl: "/respray-1.jpeg",
    afterImageUrl: "/respray-2.jpeg",
    altText: "1969 Chevrolet Camaro SS",
    category: "Complete outer body respray",
  },
  {
    beforeImageUrl: "/nut-and-bolt -1.jpeg",
    afterImageUrl: "/nut-and-bolt -2.jpeg",
    altText: "1970 Plymouth 'Cuda",
    category: "Full nut and bolt restoration/fiberglass bodykit professionally fitted and blended in/bare metal respray",
  },
  {
    beforeImageUrl: "/fiberglass4-2.jpeg",
    afterImageUrl: "/fiberglass4-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Full fiberglass bodykit professionally fitted and blended in/Full nut and bolt restoration/bare metal respray",
  },
  {
    beforeImageUrl: "/strip5-3.jpeg",
    afterImageUrl: "/strip5-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete strip and colour change inside and out",
  },
  {
    beforeImageUrl: "/out respray6-1.jpeg",
    afterImageUrl: "/out respray6-3.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete inside and out respray",
  },
  {
    beforeImageUrl: "/outside respray7-1.jpeg",
    afterImageUrl: "/outside respray7-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete outside respray",
  },
  {
    beforeImageUrl: "/Full outside respray8-1.jpeg",
    afterImageUrl: "/Full outside respray8-3.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Full outside respray",
  },
  {
    beforeImageUrl: "/out body respray9-1.jpeg",
    afterImageUrl: "/out body respray9-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete inside and out body respray",
  },
  {
    beforeImageUrl: "/respray and colour change-10-3.jpeg",
    afterImageUrl: "/respray and colour change-10-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete inside and out respray and colour change",
  },
  {
    beforeImageUrl: "/ground up restoration11-3.jpeg",
    afterImageUrl: "/ground up restoration11-1.jpeg",
    altText: "1965 Shelby Cobra Replica",
    category: "Complete ground up restoration",
  },
  {
    beforeImageUrl: "/Complete outer body respray12-1.jpeg",
    afterImageUrl: "/Complete outer body respray12-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete outer body respray",
  },
  {
    beforeImageUrl: "/Inside and out respray13-1.jpeg",
    afterImageUrl: "/Inside and out respray13-3.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Inside and out respray",
  },
  {
    beforeImageUrl: "/Bare metal respray14-3.jpeg",
    afterImageUrl: "/Bare metal respray14-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Bare metal respray & full restoration",
  },
  {
    beforeImageUrl: "/Front end touch up and respray15-1.jpeg",
    afterImageUrl: "/Front end touch up and respray15-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Front end touch up and respray",
  },
  {
    beforeImageUrl: "/Small repairs and touch ups16-1.jpeg",
    afterImageUrl: "/Small repairs and touch ups16-3.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Small repairs and touch ups",
  },
  {
    beforeImageUrl: "/Complete inside and outside respray17-2.jpeg",
    afterImageUrl: "/Complete inside and outside respray17-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete inside and outside respray",
  },
  {
    beforeImageUrl: "/Complete outer respray18-1.jpeg",
    afterImageUrl: "/Complete outer respray18-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete outer respray",
  },
  {
    beforeImageUrl: "/Complete inside and out respray in two tone colours19-1.jpeg",
    afterImageUrl: "/Complete inside and out respray in two tone colours19-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete inside and out respray in two tone colours",
  },
  {
    beforeImageUrl: "/Complete outer respray20-2.jpeg",
    afterImageUrl: "/Complete outer respray20-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete outer respray",
  },
  {
    beforeImageUrl: "/Full bare metal respray inside and out21-1.jpeg",
    afterImageUrl: "/Full bare metal respray inside and out21-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Full bare metal respray inside and out",
  },
   {
    beforeImageUrl: "/Small body repairs and full 2 tone outer respray22-1.jpeg",
    afterImageUrl: "/Small body repairs and full 2 tone outer respray22-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Small body repairs and full 2 tone outer respray",
  },
   {
    beforeImageUrl: "/Bare metal respray23-3.jpeg",
    afterImageUrl: "/Bare metal respray23-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Bare metal respray",
  },
   {
    beforeImageUrl: "/Full bare metal respray 24-1.jpeg",
    afterImageUrl: "/Full bare metal respray 24-2.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Full bare metal respray and restoration along with fiberglass bodykit professionally fitted and blended in",
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
    <section className="py-10 sm:py-14 lg:py-16 bg-gray-50  dark:bg-black transition-colors">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Our Work Gallery
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            See the amazing transformations of classic cars through our restoration process
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => openModal(card, index)}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 cursor-pointer transform hover:scale-[1.03]"
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
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full shadow">
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
                  <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded-full shadow">
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
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-6xl max-h-[92vh] overflow-auto shadow-2xl">

              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Our Work Gallery
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {selectedCard.index + 1} / {cardData.length}
                  </span>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                  >
                    <X className="w-5 h-5 text-gray-900 dark:text-white" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
                {/* BEFORE IMAGE */}
                <div className="flex-1">
                  <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">Before</span>
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
                  <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">After</span>
                  <div className="w-full mt-3 rounded-lg overflow-hidden aspect-video">
                    <img
                      src={selectedCard.afterImageUrl}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* CATEGORY TITLE */}
              <div className="text-center p-4 pt-0">
                <span className="inline-block bg-[#8b1a1a] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium break-words max-w-[90%]">
                  {selectedCard.category}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateModal("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-700/70 p-3 rounded-full"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>
              <button
                onClick={() => navigateModal("next")}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-700/70 p-3 rounded-full"
              >
                <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;