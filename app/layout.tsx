import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google"
import { WishlistProvider } from "@/app/providers/wishlist-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naaz - Elegant Fashion",
  description: "Discover elegant fashion pieces for every occasion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-ivory font-sans antialiased",
          playfair.variable,
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                {children}
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
