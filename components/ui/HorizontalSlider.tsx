"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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

const HorizontalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Calculate how many slides to show based on screen size
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, slidesToShow]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    // Move by the number of slides to show
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow;
      // If we've reached the end, loop back to the beginning
      return nextIndex >= collectionItems.length ? 0 : nextIndex;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    // Move by the number of slides to show
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - slidesToShow;
      // If we've gone before the beginning, loop to the end
      return nextIndex < 0 
        ? Math.max(0, collectionItems.length - slidesToShow) 
        : nextIndex;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    
    if (isLeftSwipe) {
      handleNext();
    } else {
      handlePrev();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Calculate the visible slides
  const visibleSlides = [];
  for (let i = 0; i < slidesToShow; i++) {
    const slideIndex = (currentIndex + i) % collectionItems.length;
    visibleSlides.push(collectionItems[slideIndex]);
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Slider */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {collectionItems.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
          >
            <div className="overflow-hidden border-none bg-cream shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl h-full">
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
                    View Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 hover:bg-white text-dark-green shadow-md pointer-events-auto"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 hover:bg-white text-dark-green shadow-md pointer-events-auto"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(collectionItems.length / slidesToShow) }).map((_, index) => {
          const isActive = Math.floor(currentIndex / slidesToShow) === index;
          return (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                isActive 
                  ? "bg-gold w-6" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index * slidesToShow);
                setTimeout(() => {
                  setIsTransitioning(false);
                }, 500);
              }}
              aria-label={`Go to slide group ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalSlider; 