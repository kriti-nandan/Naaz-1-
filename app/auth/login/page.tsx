import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
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

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-dark-green/80 text-sm">Email Address</label>
              <Input
                id="email"
                type="email"
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
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-dark-green" />
              <label htmlFor="remember" className="text-sm text-dark-green/70 leading-none">Remember me for 30 days</label>
            </div>

            <Button type="submit" className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-xl w-full">Sign In</Button>

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
              <Link href="/auth/register" className="text-rose-gold hover:underline">Create account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
