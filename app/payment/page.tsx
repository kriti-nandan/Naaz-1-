"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface UserDetails {
  name: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
}

export default function PaymentPage() {
  const router = useRouter()
  const { cartItems } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "phonepe">("razorpay")
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)

  useEffect(() => {
    // Get user details from localStorage
    const savedDetails = localStorage.getItem("userDetails")
    if (savedDetails) {
      setUserDetails(JSON.parse(savedDetails))
    }
  }, [])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal + shipping

  const handlePayment = () => {
    // Here you would integrate with the actual payment gateway
    // For now, we'll just show an alert
    alert(`Processing payment with ${paymentMethod}`)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-serif text-dark-green mb-6">Payment</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-dark-green">Select Payment Method</h2>
            
            <RadioGroup
              value={paymentMethod}
              onValueChange={(value: "razorpay" | "phonepe") => setPaymentMethod(value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <RadioGroupItem value="razorpay" id="razorpay" />
                <Label htmlFor="razorpay" className="flex items-center gap-4 cursor-pointer">
                  <Image
                    src="/images/razorpay-logo.png"
                    alt="Razorpay"
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                  <span className="text-dark-green">Pay with Razorpay</span>
                </Label>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <RadioGroupItem value="phonepe" id="phonepe" />
                <Label htmlFor="phonepe" className="flex items-center gap-4 cursor-pointer">
                  <Image
                    src="/images/phonepe-logo.png"
                    alt="PhonePe"
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                  <span className="text-dark-green">Pay with PhonePe</span>
                </Label>
              </div>
            </RadioGroup>

            <Button
              onClick={handlePayment}
              className="w-full bg-dark-green text-cream hover:bg-dark-green/90"
            >
              Pay ₹{total.toLocaleString()}
            </Button>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-medium text-dark-green mb-4">Order Summary</h2>
            
            {/* Delivery Address */}
            {userDetails && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-medium text-dark-green mb-2">Delivery Address</h3>
                <div className="space-y-1 text-dark-green/70">
                  <p>{userDetails.name}</p>
                  <p>{userDetails.phone}</p>
                  <p>{userDetails.address}</p>
                  <p>{userDetails.city}, {userDetails.state} - {userDetails.pincode}</p>
                </div>
              </div>
            )}

            {/* Items and Total */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <div>
                    <p className="font-medium text-dark-green">{item.name}</p>
                    <p className="text-sm text-dark-green/70">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-dark-green">₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
              
              <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-dark-green/70">Subtotal</span>
                  <span className="font-medium text-dark-green">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-green/70">Shipping</span>
                  <span className="font-medium text-dark-green">₹{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-medium">
                  <span className="text-dark-green">Total</span>
                  <span className="text-dark-green">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 