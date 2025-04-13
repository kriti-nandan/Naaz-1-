import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* About Header */}
      <section className="relative">
        <div className="absolute inset-0 bg-dark-green/20 z-10" />
        <div className="relative h-[50vh] w-full">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Naaz atelier"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our Story</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-dark-green mb-6">The Essence of Naaz</h2>
            <p className="text-dark-green/80 leading-relaxed">
              Founded in 2018, Naaz was born from a vision to create timeless, elegant clothing that celebrates the
              modern woman. Our name, derived from the word meaning 'pride' in several languages, embodies our
              philosophy: to design pieces that inspire confidence and grace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="font-serif text-2xl text-dark-green mb-4">Our Philosophy</h3>
              <p className="text-dark-green/80 mb-4 leading-relaxed">
                At Naaz, we believe that true luxury lies in the perfect balance of comfort, quality, and timeless
                design. Each piece in our collection is meticulously crafted to ensure exceptional fit and longevity.
              </p>
              <p className="text-dark-green/80 leading-relaxed">
                We are committed to creating fashion that transcends trends, allowing women to build a wardrobe of
                pieces they will cherish for years to come.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Naaz philosophy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-2xl shadow-sm -z-10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Naaz craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-cream rounded-2xl shadow-sm -z-10"></div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-2xl text-dark-green mb-4">Craftsmanship</h3>
              <p className="text-dark-green/80 mb-4 leading-relaxed">
                Our luxury cord sets are created by skilled artisans who bring decades of experience to their craft. We
                source only the finest materials, ensuring that each garment not only looks beautiful but feels
                exquisite against the skin.
              </p>
              <p className="text-dark-green/80 leading-relaxed">
                From initial design to final stitch, every step in our process is guided by an unwavering commitment to
                excellence and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl text-dark-green mb-4">Sustainability</h3>
              <p className="text-dark-green/80 mb-4 leading-relaxed">
                We believe that luxury and responsibility go hand in hand. That's why we are committed to ethical
                production practices and sustainable sourcing.
              </p>
              <p className="text-dark-green/80 leading-relaxed">
                By creating timeless pieces that are designed to last, we encourage a more mindful approach to fashion
                consumption. Our packaging is fully recyclable, and we continuously work to reduce our environmental
                footprint.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Naaz sustainability"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-2xl shadow-sm -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-cream/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-dark-green mb-4">The Team Behind Naaz</h2>
            <p className="text-dark-green/80 max-w-2xl mx-auto">
              Meet the passionate individuals who bring the Naaz vision to life through their creativity, expertise, and
              dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="absolute -inset-1 rounded-full border-2 border-gold/30 -z-10"></div>
                </div>
                <h3 className="font-serif text-xl text-dark-green mb-1">{member.name}</h3>
                <p className="text-rose-gold font-medium mb-3">{member.role}</p>
                <p className="text-dark-green/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const team = [
  {
    id: 1,
    name: "Sophia Laurent",
    role: "Founder & Creative Director",
    bio: "With over 15 years in luxury fashion, Sophia brings her vision of timeless elegance to every Naaz collection.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Olivia Chen",
    role: "Head of Design",
    bio: "Olivia's innovative approach to traditional techniques creates the perfect balance of classic and contemporary.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Isabella Moretti",
    role: "Production Manager",
    bio: "Isabella ensures that every Naaz piece meets our exacting standards of quality and craftsmanship.",
    image: "/placeholder.svg?height=400&width=400",
  },
]
