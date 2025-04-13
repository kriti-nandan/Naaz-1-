"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"

const featuredItems = [
  {
    id: 1,
    title: "Real-Time Threat Detection",
    description: "Live alerts for instant response.",
    image: "/images/safety1.jpg",
  },
  {
    id: 2,
    title: "AI Surveillance",
    description: "Monitor gender distribution and behavior.",
    image: "/images/safety2.jpg",
  },
  {
    id: 3,
    title: "Authority Integration",
    description: "Send location and footage to police instantly.",
    image: "/images/safety3.jpg",
  },
  {
    id: 4,
    title: "Gesture Recognition",
    description: "SOS signals through predefined gestures.",
    image: "/images/safety4.jpg",
  },
  {
    id: 5,
    title: "Safety Heatmaps",
    description: "Detect unsafe zones using alert history.",
    image: "/images/safety5.jpg",
  },
  {
    id: 6,
    title: "Lone Woman Detection",
    description: "Special alert system during night hours.",
    image: "/images/safety6.jpg",
  },
]

export default function FeaturedCarousel() {
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: false })

  return (
    <div className="relative w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Solutions</h2>
      <Carousel
        opts={{ align: "start", slidesToScroll: 3, loop: true }}
        plugins={[autoplayPlugin]}
      >
        <CarouselContent>
          {featuredItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white mx-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
