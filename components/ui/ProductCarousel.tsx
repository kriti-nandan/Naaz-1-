'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    title: "Summer Elegance",
    desc: "Lightweight cord sets for warm days",
  },
  {
    title: "Evening Soirée",
    desc: "Sophisticated ensembles for special occasions",
  },
  {
    title: "Casual Luxury",
    desc: "Effortless style for everyday moments",
  },
  {
    title: "Festive Charm",
    desc: "Perfect blends for celebrations",
  },
  {
    title: "Office Chic",
    desc: "Refined elegance for workdays",
  },
  {
    title: "Weekend Glow",
    desc: "Cozy looks for relaxing days",
  },
]

export default function ProductCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    },
  })

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!slider.current) return

    const sliderInstance = slider.current

    timerRef.current = setInterval(() => {
      sliderInstance.next()
    }, 3000) // Slide every 3 seconds

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [slider])

  return (
    <div className="px-4 md:px-12 relative">
      <h2 className="text-3xl font-serif text-center mb-8 text-forest">
        Featured Collections
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
          onClick={() => slider.current?.prev()}
        >
          <ChevronLeft className="w-5 h-5 text-forest" />
        </button>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {products.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-muted/30 p-6 rounded-2xl shadow-md text-center flex flex-col justify-between"
            >
              <div className="h-40 flex items-center justify-center bg-muted rounded-lg mb-4">
                <span className="text-sm text-muted-foreground">Image</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-serif text-forest">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
                <a
                  href="#"
                  className="text-pink-600 hover:underline text-sm mt-2 inline-block"
                >
                  View Collection →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
          onClick={() => slider.current?.next()}
        >
          <ChevronRight className="w-5 h-5 text-forest" />
        </button>
      </div>
    </div>
  )
}
