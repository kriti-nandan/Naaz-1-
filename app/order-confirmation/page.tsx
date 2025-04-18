"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function OrderConfirmation() {
  return (
    <main className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-mint/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-dark-green" />
          </div>
          
          <h1 className="text-4xl font-serif text-dark-green">Order Confirmed!</h1>
          
          <p className="text-lg text-dark-green/80 max-w-lg mx-auto">
            Thank you for shopping with Naaz. Your order has been confirmed and will be shipped soon. 
            We'll send you an email with tracking details once your order is dispatched.
          </p>

          <div className="pt-8 space-y-4">
            <Link href="/shop" className="block">
              <Button 
                className="w-full h-12 bg-dark-green text-cream hover:bg-dark-green/90 transition-all duration-300"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 