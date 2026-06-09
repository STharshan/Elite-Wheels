import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const TIMER_DURATION = 5000;
    const VISIBLE_COUNT = 3;

    const cards = [
        {
            number: '01',
            title: 'Car Park Ding Removal Service',
            description: 'Smooth out annoying car park dings quickly using precise PDR techniques, restoring your panels to factory finish without paint.',
            media: '/Carparkding.jpeg',
            tags: 'Paintless Dent Repair • Quick Fix • Factory Finish',
            link: '/carpark-ding-removal'
        },
        // {
        //     number: '02',
        //     title: 'Small Dent Removal Service',
        //     description: `Remove small dents from doors, panels, or bumpers efficiently with Paintless Dent Removal, keeping your car's original paint intact.`,
        //     media: '/a2.jpg',
        //     tags: 'Paintless Dent Repair • Precision Repairs • Scratch-Free',
        //     link: '/small-dent-removal'
        // },
        {
            number: '02',
            title: 'Large Dent Removal Service',
            description: 'Restore large dents seamlessly using advanced PDR tools, ensuring your vehicle looks flawless without repainting.',
            media: '/Largeimpact.jpeg',
            tags: 'Paintless Dent Repair • Body Panel Specialists • Factory Finish',
            link: '/large-dent-removal'
        },
        {
            number: '03',
            title: 'Complex Large Dent Repair Service',
            description: 'Handle intricate and deep dents across multiple panels with expert PDR techniques for a smooth, paint-free finish.',
            media: '/Complexdents.jpeg',
            tags: 'Paintless Dent Repair • Expert Panel Work • Complex Dent Specialists',
            link: '/complex-dent-repair'
        },
        {
            number: '04',
            title: 'Crease Dent Repair Service',
            description: `Remove sharp creases and lines from your vehicle's bodywork using advanced PDR, restoring curves to their original shape.`,
            media: '/Creases.jpeg',
            tags: 'Paintless Dent Repair • Crease Specialist • Factory Finish',
            link: '/crease-dent-repair'
        },
        // {
        //     number: '06',
        //     title: 'Bumper Dent Removal Service',
        //     description: 'Fix dents and dings on plastic or metal bumpers without repainting, keeping your car looking like new.',
        //     media: '/a6.jpg',
        //     tags: 'Paintless Dent Repair • Bumper Specialist • Quick & Clean',
        //     link: '/bumper-dent-removal'
        // },
        {
            number: '05',
            title: 'Hail Damage Removal Service',
            description: 'Quickly remove multiple hail dents across the roof, bonnet, and panels using advanced PDR techniques – restoring your vehicle without repainting.',
            media: '/Haildamage.jpeg',
            tags: 'Paintless Restoration • Roof & Bonnet Specialists • Factory Finish Guaranteed',
            link: '/hail-repair'
        },
        {
            number: '06',
            title: 'Wing Repair',
            description: `Specialist restoration of damaged, creased, and deformed wing panels, restoring your vehicle's shape and stance without the need for costly replacements.`,
            media: '/Dingdamage.jpeg',
            tags: 'Wing Panel Repair • Dent & Crease Restoration • Paintless Repair',
            link: '/wing-repair'
        },
        {
            number: '07',
            title: 'Bodyline Repair',
            description: `Specialist restoration of creased and distorted body lines, returning your vehicle's sharp contours and sculpted profile to factory precision.`,
            media: '/Bodyline.jpeg',
            tags: 'Bodyline Restoration • Dent & Crease Repair • Paintless Contour Repair',
            link: '/bodyline'
        }
    ];

    useEffect(() => {
        const checkMobile = () => { setIsMobile(window.innerWidth < 768); };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const visibleCards = useMemo(() => {
        if (isMobile) {
            return [{ ...cards[activeCard], originalIndex: activeCard }];
        }
        const result = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            const index = (activeCard + i) % cards.length;
            result.push({ ...cards[index], originalIndex: index });
        }
        return result;
    }, [activeCard, cards, isMobile]);

    useEffect(() => {
        setProgress(0);
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + (100 / (TIMER_DURATION / 50));
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

    // Media Renderer Function
    const renderMedia = (card, extraClasses = "") => {
        return (
            <img
                src={card.media}
                alt={card.title}
                className={`w-full h-full object-cover ${extraClasses}`}
                loading="lazy"
            />
        );
    };

    return (
        <div id='services' className="w-full min-h-screen scroll-m-15 dark:bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-colors duration-500">

            <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest transition-colors">
                    Our Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm mt-2">
                    Showing {activeCard + 1} of {cards.length}
                </p>
            </div>

            <div className="w-full max-w-[1400px] mb-6 md:mb-0">
                {isMobile ? (
                    <div className="relative">
                        <button onClick={handlePrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-30 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-30 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="relative overflow-hidden rounded-2xl bg-[#7E7E7E] border border-gray-200 dark:border-gray-800 shadow-xl min-h-[550px]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100/20 overflow-hidden z-20">
                                <div className="absolute left-0 top-0 h-full bg-white transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
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
                                <p className="text-gray-100 text-sm leading-relaxed">
                                    {cards[activeCard].description}
                                </p>

                                <div className="w-full h-64 overflow-hidden rounded-xl shadow-inner border border-white/10 shrink-0 bg-white">
                                    {renderMedia(cards[activeCard])}
                                </div>

                                <Link to={cards[activeCard].link} className="w-full bg-white text-black py-3 rounded-lg font-bold text-center hover:bg-gray-200 transition-colors mt-2">
                                    LEARN MORE
                                </Link>

                                <div className="text-[10px] font-bold tracking-widest text-gray-200 uppercase mt-auto">
                                    {cards[activeCard].tags}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4 lg:gap-6 h-[80vh] min-h-[700px] items-stretch">
                        {visibleCards.map((card, displayIndex) => {
                            const isFirst = displayIndex === 0;
                            return (
                                <div
                                    key={card.originalIndex}
                                    onClick={() => handleCardClick(card.originalIndex)}
                                    className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#7E7E7E] border border-gray-200 dark:border-gray-800 ${isFirst ? 'flex-[2.5]' : 'flex-1'} hover:shadow-2xl group`}
                                >
                                    {isFirst && (
                                        <div className="absolute bottom-0 left-0 w-1.5 h-full bg-black/10 overflow-hidden z-20">
                                            <div className="absolute bottom-0 left-0 w-full bg-white transition-all duration-100 ease-linear" style={{ height: `${progress}%` }} />
                                        </div>
                                    )}

                                    <div className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 h-full relative z-10">
                                        <div className="flex flex-col items-start">
                                            <div className={`text-5xl lg:text-6xl font-black transition-all duration-700 ${isFirst ? 'text-white/20 scale-110' : 'text-white/10 scale-90'}`}>
                                                {card.number}
                                            </div>
                                            <h3 className={`text-lg lg:text-2xl font-bold transition-colors duration-500 mt-2 ${isFirst ? 'text-white' : 'text-gray-300'}`}>
                                                {card.title}
                                            </h3>
                                        </div>

                                        <div className={`flex-1 flex flex-col justify-between transition-all duration-700 ${isFirst ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                                            <p className="text-gray-100 text-sm lg:text-base leading-relaxed">
                                                {card.description}
                                            </p>

                                            <div className="w-full h-64 lg:h-80 overflow-hidden rounded-2xl shadow-inner border border-white/10 my-4 bg-white">
                                                {renderMedia(card, "group-hover:scale-105 transition-transform duration-1000")}
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <div className="text-[9px] lg:text-[10px] font-bold tracking-widest max-w-xs text-gray-200 uppercase">
                                                    {card.tags}
                                                </div>

                                                <Link to={card.link} className="bg-white text-black px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                                                    LEARN MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {!isFirst && <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-0" />}
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
                        onClick={() => { setActiveCard(i); setProgress(0); }}
                        className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${activeCard === i ? 'w-8 bg-gray-600 dark:bg-gray-400' : 'w-2 bg-gray-300 dark:bg-gray-800'}`}
                        aria-label={`Go to service ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;