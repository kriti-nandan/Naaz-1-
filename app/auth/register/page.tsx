import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
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

      {/* Right Side - Register Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-dark-green">Naaz</h1>
            </Link>
          </div>

          <h2 className="font-serif text-3xl text-dark-green mb-2">Create an account</h2>
          <p className="text-dark-green/70 mb-8">
            Join Naaz to enjoy exclusive benefits and a personalized shopping experience
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-dark-green/80 text-sm">First Name</label>
                <Input
                  id="first-name"
                  placeholder="Enter your first name"
                  required
                  className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-dark-green/80 text-sm">Last Name</label>
                <Input
                  id="last-name"
                  placeholder="Enter your last name"
                  required
                  className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-dark-green/80 text-sm">Email Address</label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-dark-green/80 text-sm">Password</label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Create a password"
                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
              />
              <p className="text-dark-green/60 text-xs">
                Password must be at least 8 characters long with a number and a special character
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                required
                className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-dark-green mt-1"
              />
              <label htmlFor="terms" className="text-sm text-dark-green/70 leading-tight">
                I agree to the{" "}
                <Link href="/terms" className="text-rose-gold hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-rose-gold hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <Button type="submit" className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-xl w-full">
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
