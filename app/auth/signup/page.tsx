"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignupPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Here you would typically handle the signup logic
    router.push("/auth/login")
  }

  return (
    <div className="min-h-screen bg-ivory flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 bg-dark-green/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=720"
          alt="Elegant fashion"
          fill
          className="object-cover"
        />
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-white">Naaz</h1>
          </Link>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-dark-green">Naaz</h1>
            </Link>
          </div>

          <h2 className="font-serif text-3xl text-dark-green mb-2">Create an account</h2>
          <p className="text-dark-green/70 mb-8">Join our community of fashion enthusiasts</p>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-dark-green/80 text-sm">Full Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                placeholder="Enter your full name"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-dark-green/80 text-sm">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-dark-green/80 text-sm">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                placeholder="Create a password"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-dark-green/80 text-sm">Confirm Password</label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
                placeholder="Confirm your password"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <Button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-xl w-full"
            >
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gold/20" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-ivory px-2 text-dark-green/60">Or continue with</span>
              </div>
            </div>

            <p className="text-center text-dark-green/70 text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-rose-gold hover:underline">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
} 