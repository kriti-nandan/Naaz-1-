"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CheckoutFormProps {
  product: {
    id: number
    name: string
    category: string
    price: number
    description: string
    colors: string[]
    sizes: string[]
    sizeChart: {
      size: string
      chest: string
      waist: string
      hips: string
    }[]
  }
  selectedColor: string
  selectedSize: string
  onClose: () => void
}

export function CheckoutForm({ product, selectedColor, selectedSize, onClose }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card">("upi")

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-ivory border-gold/30">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-serif text-2xl text-dark-green">Checkout</h2>
            <button onClick={onClose} className="text-dark-green/70 hover:text-dark-green">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Order Summary */}
            <div className="border-b border-gold/30 pb-4">
              <h3 className="font-serif text-lg text-dark-green mb-2">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <p className="text-dark-green/70">{product.name}</p>
                <p className="text-dark-green/70">Color: {selectedColor}</p>
                <p className="text-dark-green/70">Size: {selectedSize}</p>
                <p className="text-dark-green font-medium">Total: ${product.price}</p>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-dark-green">Delivery Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" placeholder="Enter your pincode" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input id="address" placeholder="Enter your complete delivery address" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-dark-green">Payment Method</h3>
              <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "upi" | "card")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi">UPI Payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Card Payment</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Buy Now Button */}
            <Button className="w-full bg-dark-green text-ivory hover:bg-dark-green/90">
              Buy Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 