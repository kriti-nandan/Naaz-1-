"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, CreditCard, Phone, Check, Truck, CreditCard as PaymentIcon, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type ShippingDetails = {
  fullName: string
  email: string
  phone: string
  address: string
  pincode: string
  city: string
  state: string
}

type PaymentMethod = "card" | "phonepe" | "razorpay"

type CardDetails = {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  cvv: string
}

const steps = [
  { id: 1, label: "Shipping", icon: Truck },
  { id: 2, label: "Review", icon: Check },
  { id: 3, label: "Payment", icon: PaymentIcon }
]

export default function Checkout() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [showCardForm, setShowCardForm] = useState(false)
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  })
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card")

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.values(shippingDetails).some(value => !value)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      })
      return
    }
    setStep(2)
  }

  const handleAddressConfirm = () => {
    setStep(3)
  }

  const handlePaymentMethodSelect = (value: PaymentMethod) => {
    setPaymentMethod(value)
    setShowCardForm(value === "card")
  }

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.values(cardDetails).some(value => !value)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all card details",
      })
      return
    }
    handlePayment()
  }

  const handlePayment = () => {
    toast({
      title: "Order Confirmed!",
      description: "Thank you for shopping with Naaz. Your order has been confirmed.",
    })
    router.push("/order-confirmation")
  }

  return (
    <main className="min-h-screen flex flex-col bg-ivory">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-dark-green text-center mb-12">Checkout</h1>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div className="relative">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step >= s.id 
                        ? "bg-dark-green text-white" 
                        : "bg-cream border-2 border-dark-green/20 text-dark-green/40"
                    }`}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium ${
                    step >= s.id ? "text-dark-green" : "text-dark-green/40"
                  }`}>
                    {s.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-24 h-0.5 mx-2 ${
                    step > s.id ? "bg-dark-green" : "bg-dark-green/20"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-serif text-dark-green mb-8">Shipping Details</h2>
              
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="fullName" className="text-base font-medium text-dark-green/80">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={shippingDetails.fullName}
                      onChange={(e) => setShippingDetails(prev => ({ ...prev, fullName: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-dark-green/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingDetails.email}
                      onChange={(e) => setShippingDetails(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-dark-green/80">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={shippingDetails.phone}
                      onChange={(e) => setShippingDetails(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-base font-medium text-dark-green/80">
                      Complete Address
                    </Label>
                    <Input
                      id="address"
                      value={shippingDetails.address}
                      onChange={(e) => setShippingDetails(prev => ({ ...prev, address: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pincode" className="text-base font-medium text-dark-green/80">
                        Pincode
                      </Label>
                      <Input
                        id="pincode"
                        value={shippingDetails.pincode}
                        onChange={(e) => setShippingDetails(prev => ({ ...prev, pincode: e.target.value }))}
                        className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                        placeholder="Enter pincode"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-base font-medium text-dark-green/80">
                        City
                      </Label>
                      <Input
                        id="city"
                        value={shippingDetails.city}
                        onChange={(e) => setShippingDetails(prev => ({ ...prev, city: e.target.value }))}
                        className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                        placeholder="Enter city"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="state" className="text-base font-medium text-dark-green/80">
                      State
                    </Label>
                    <Input
                      id="state"
                      value={shippingDetails.state}
                      onChange={(e) => setShippingDetails(prev => ({ ...prev, state: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="Enter state"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 mt-8 bg-dark-green text-cream hover:bg-dark-green/90 transition-all duration-300"
                >
                  Continue to Review
                </Button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-serif text-dark-green mb-8">Review Your Details</h2>
              
              <div className="bg-cream/30 p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-dark-green/60">Full Name</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-green/60">Email</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-green/60">Phone</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-green/60">Address</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-green/60">Pincode</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.pincode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-green/60">City</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-green/60">State</p>
                    <p className="text-base font-medium text-dark-green">{shippingDetails.state}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1 h-12 border-dark-green text-dark-green hover:bg-dark-green hover:text-cream transition-all duration-300"
                >
                  Edit Details
                </Button>
                <Button 
                  onClick={handleAddressConfirm}
                  className="flex-1 h-12 bg-dark-green text-cream hover:bg-dark-green/90 transition-all duration-300"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-serif text-dark-green mb-8">Select Payment Method</h2>
              
              <RadioGroup 
                value={paymentMethod} 
                onValueChange={handlePaymentMethodSelect}
                className="space-y-4"
              >
                <div className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  paymentMethod === "card" ? "bg-cream/30 border-gold" : "border hover:bg-cream/10"
                }`}>
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer">
                    <CreditCard className="h-5 w-5 text-dark-green" />
                    <div>
                      <p className="font-medium text-dark-green">Card Payment</p>
                      <p className="text-sm text-dark-green/60">Pay securely with your credit/debit card</p>
                    </div>
                  </Label>
                </div>

                <div className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  paymentMethod === "phonepe" ? "bg-cream/30 border-gold" : "border hover:bg-cream/10"
                }`}>
                  <RadioGroupItem value="phonepe" id="phonepe" />
                  <Label htmlFor="phonepe" className="flex items-center gap-3 cursor-pointer">
                    <Phone className="h-5 w-5 text-dark-green" />
                    <div>
                      <p className="font-medium text-dark-green">PhonePe</p>
                      <p className="text-sm text-dark-green/60">Pay using PhonePe UPI</p>
                    </div>
                  </Label>
                </div>

                <div className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  paymentMethod === "razorpay" ? "bg-cream/30 border-gold" : "border hover:bg-cream/10"
                }`}>
                  <RadioGroupItem value="razorpay" id="razorpay" />
                  <Label htmlFor="razorpay" className="flex items-center gap-3 cursor-pointer">
                    <ArrowRight className="h-5 w-5 text-dark-green" />
                    <div>
                      <p className="font-medium text-dark-green">Razorpay</p>
                      <p className="text-sm text-dark-green/60">Pay using multiple payment options</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {showCardForm ? (
                <form onSubmit={handleCardSubmit} className="mt-8 space-y-5">
                  <div>
                    <Label htmlFor="cardNumber" className="text-base font-medium text-dark-green/80">
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={(e) => setCardDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cardHolder" className="text-base font-medium text-dark-green/80">
                      Card Holder Name
                    </Label>
                    <Input
                      id="cardHolder"
                      value={cardDetails.cardHolder}
                      onChange={(e) => setCardDetails(prev => ({ ...prev, cardHolder: e.target.value }))}
                      className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                      placeholder="Enter card holder name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate" className="text-base font-medium text-dark-green/80">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={(e) => setCardDetails(prev => ({ ...prev, expiryDate: e.target.value }))}
                        className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-base font-medium text-dark-green/80">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        type="password"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value }))}
                        className="mt-2 h-12 px-4 border-gold/30 focus:border-gold focus:ring-gold/30 rounded-lg"
                        placeholder="123"
                        maxLength={3}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 mt-8 bg-dark-green text-cream hover:bg-dark-green/90 transition-all duration-300"
                  >
                    Pay Now
                  </Button>
                </form>
              ) : (
                <Button 
                  onClick={handlePayment}
                  className="w-full h-12 mt-8 bg-dark-green text-cream hover:bg-dark-green/90 transition-all duration-300"
                >
                  Proceed to Pay
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
