"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    // Here you would typically handle the login logic
    router.push("/")
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

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-dark-green">Naaz</h1>
            </Link>
          </div>

          <h2 className="font-serif text-3xl text-dark-green mb-2">Welcome back</h2>
          <p className="text-dark-green/70 mb-8">Please enter your details to sign in</p>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-dark-green/80 text-sm">Password</label>
                <Link href="/auth/forgot-password" className="text-rose-gold text-sm hover:underline">Forgot password?</Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-gold focus:ring-gold border-gold/50 rounded"
              />
              <label htmlFor="rememberMe" className="text-sm text-dark-green/70 leading-none">Remember me for 30 days</label>
            </div>

            <Button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-xl w-full"
            >
              Sign In
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
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-rose-gold hover:underline">Create account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
} 