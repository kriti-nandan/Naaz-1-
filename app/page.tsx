"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HorizontalSlider from "@/components/ui/HorizontalSlider"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col bg-ivory overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] max-h-[800px]">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-green/5 to-dark-green/20 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Elegant woman in luxury cord set"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-dark-green mb-4 sm:mb-6 max-w-4xl">
            Timeless Elegance for the Modern Woman
          </h1>
          <p className="text-dark-green/80 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 font-light px-4">
            Discover our exquisite collection of luxury cord sets designed for sophistication and comfort
          </p>
          <Link href="/shop">
            <Button className="bg-gold hover:bg-gold/90 text-dark-green font-medium px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-dark-green mb-4">
              Featured Collections
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="relative -mx-4 sm:mx-0">
            <HorizontalSlider />
          </div>
        </div>
      </section>

      {/* The Naaz Story Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="relative">
              <div className="relative mx-auto max-w-[600px]">
                {/* TV Frame */}
                <div className="relative bg-dark-green rounded-[20px] p-4 shadow-2xl">
                  {/* TV Screen */}
                  <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-black">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      src="/videos/Video Naaz.mp4"
                      loop
                      muted
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    />
                    {/* Play Button Overlay */}
                    {!isPlaying && (
                      <button
                        onClick={toggleVideo}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      >
                        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-dark-green" />
                        </div>
                      </button>
                    )}
                  </div>
                  {/* TV Controls */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-rose-gold"></div>
                    <div className="w-4 h-4 rounded-full bg-rose-gold"></div>
                  </div>
                </div>
                {/* TV Stand */}
                <div className="mt-4 flex justify-center">
                  <div className="w-40 h-6 bg-dark-green rounded-b-lg"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-green">
                The Naaz Story
              </h2>
              <p className="text-dark-green/80 text-lg leading-relaxed">
                At Naaz, our journey began with a simple yet powerful idea: to create clothing that not only looks beautiful but feels like a warm embrace from a dear friend. Our brand is rooted in the belief that fashion should be an expression of joy, comfort, and connection.
              </p>
              <p className="text-dark-green/80 text-lg leading-relaxed">
                Every piece we create is crafted with love, attention to detail, and a deep understanding of what makes you feel confident and beautiful. We believe in sustainable practices and ethical manufacturing, ensuring that our passion for fashion doesn't compromise our commitment to the planet.
              </p>
              <p className="text-dark-green/80 text-lg leading-relaxed">
                Join us on this journey of style, sustainability, and sisterhood. Because at Naaz, we're not just creating clothes; we're creating memories, building connections, and celebrating the beauty of being uniquely you.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-dark-green border border-dark-green/20 hover:border-dark-green px-6 py-3 rounded-full transition-all duration-300 group hover:bg-dark-green/5"
              >
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const featuredCollections = [
  {
    id: 1,
    name: "Summer Elegance",
    description: "Lightweight cord sets for warm days",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 2,
    name: "Evening Soirée",
    description: "Sophisticated ensembles for special occasions",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 3,
    name: "Casual Luxury",
    description: "Effortless style for everyday moments",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 4,
    name: "Monochrome Muse",
    description: "Black and white essentials",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 5,
    name: "Boho Chic",
    description: "Free-spirited styles and flowing silhouettes",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 6,
    name: "Modern Classics",
    description: "Timeless pieces with a twist",
    image: "/placeholder.svg?height=600&width=450",
  },
]

const newArrivals = [
  {
    id: 1,
    name: "Emerald Silk Cord Set",
    price: 249.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 2,
    name: "Golden Hour Ensemble",
    price: 299.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 3,
    name: "Jade Velvet Collection",
    price: 279.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 4,
    name: "Olive Elegance Set",
    price: 259.99,
    image: "/placeholder.svg?height=500&width=500",
  },
]
