import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HorizontalSlider from "@/components/ui/HorizontalSlider"


export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-dark-green/10 z-10" />
        <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Elegant woman in luxury cord set"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-dark-green mb-4 md:mb-6 max-w-4xl">
            Timeless Elegance for the Modern Woman
          </h1>
          <p className="text-dark-green/80 text-base sm:text-lg md:text-xl max-w-2xl mb-6 md:mb-8 font-light">
            Discover our exquisite collection of luxury cord sets designed for sophistication and comfort
          </p>
          <Link href="/shop">
            <Button className="bg-gold hover:bg-gold/90 text-dark-green font-medium px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-xl md:rounded-2xl">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-20 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-dark-green mb-3 md:mb-4">Featured Collections</h2>
            <div className="w-16 md:w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <HorizontalSlider />
        </div>
      </section>

      

      {/* Brand Story Preview */}
      <section className="py-16 md:py-20 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-dark-green mb-4 md:mb-6">The Naaz Story</h2>
              <p className="text-dark-green/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Founded with a passion for timeless elegance, Naaz represents the perfect harmony between traditional
                craftsmanship and contemporary design. Our luxury cord sets are meticulously crafted using only the
                finest materials, ensuring both comfort and sophistication.
              </p>
              <p className="text-dark-green/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Each piece in our collection tells a story of dedication to quality and attention to detail, embodying
                our commitment to creating fashion that transcends seasons and trends.
              </p>
              <Link href="/about">
                <Button className="bg-transparent hover:bg-gold/10 text-dark-green border border-gold rounded-xl md:rounded-2xl text-sm md:text-base">
                  Read Our Story
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=800&width=640" alt="Naaz atelier" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-32 md:w-48 h-32 md:h-48 bg-cream rounded-xl md:rounded-2xl shadow-md hidden lg:block"></div>
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-24 md:w-32 h-24 md:h-32 bg-gold/20 rounded-xl md:rounded-2xl shadow-sm hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
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
