"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const collectionItems = [
  {
    title: "Summer Elegance",
    description: "Lightweight cord sets for warm days",
    img: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "Evening Soirée",
    description: "Sophisticated ensembles for special occasions",
    img: "https://picsum.photos/400/300?random=2",
  },
  {
    title: "Casual Luxury",
    description: "Effortless style for everyday moments",
    img: "https://picsum.photos/400/300?random=3",
  },
  {
    title: "Monochrome Muse",
    description: "Black and white essentials",
    img: "https://picsum.photos/400/300?random=4",
  },
  {
    title: "Boho Chic",
    description: "Free-spirited styles and flowing silhouettes",
    img: "https://picsum.photos/400/300?random=5",
  },
  {
    title: "Modern Classics",
    description: "Timeless pieces with a twist",
    img: "https://picsum.photos/400/300?random=6",
  },
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 16,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 16 },
      },
      "(min-width: 769px) and (max-width: 1023px)": {
        slides: { perView: 2, spacing: 16 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.abs);
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    
    const interval = setInterval(() => {
      // Move to the next 3 slides
      if (instanceRef.current) {
        const currentIdx = instanceRef.current.track.details.abs;
        const nextIdx = currentIdx + 3;
        instanceRef.current.moveToIdx(nextIdx, true);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [instanceRef]);

  const moveToPrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const moveToNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider py-4">
          {collectionItems.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide overflow-hidden border-none bg-cream shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  <span className="text-rose-gold flex items-center text-sm font-medium">
                    View Collection <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 hover:bg-white text-dark-green shadow-md pointer-events-auto"
          onClick={moveToPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 hover:bg-white text-dark-green shadow-md pointer-events-auto"
          onClick={moveToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default AutoSlider;
