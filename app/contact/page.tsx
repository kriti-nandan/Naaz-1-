import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Contact Header */}
      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-dark-green mb-4">Contact Us</h1>
          <p className="text-dark-green/70 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, need styling advice, or want to
            collaborate, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <h2 className="font-serif text-2xl text-dark-green mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-dark-green/80 text-sm">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-dark-green/80 text-sm">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-dark-green/80 text-sm">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-dark-green/80 text-sm">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px] border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                  />
                </div>

                <Button className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-xl w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl text-dark-green mb-6">Get in Touch</h2>
                <p className="text-dark-green/70 mb-8">
                  We aim to respond to all inquiries within 24 hours during business days. For immediate assistance,
                  please call our customer service line.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-dark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-green">Email Us</h3>
                      <p className="text-dark-green/70">info@naazfashion.com</p>
                      <p className="text-dark-green/70">support@naazfashion.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-dark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-green">Call Us</h3>
                      <p className="text-dark-green/70">+1 (800) 123-4567</p>
                      <p className="text-dark-green/70">Mon-Fri: 9am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-dark-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-green">Visit Us</h3>
                      <p className="text-dark-green/70">123 Fashion Avenue</p>
                      <p className="text-dark-green/70">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-dark-green/5 rounded-2xl">
                <h3 className="font-serif text-xl text-dark-green mb-4">Wholesale Inquiries</h3>
                <p className="text-dark-green/70 mb-4">
                  Interested in carrying Naaz in your boutique? Please contact our wholesale department for information
                  on becoming a stockist.
                </p>
                <p className="text-rose-gold">wholesale@naazfashion.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
