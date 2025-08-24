import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Langkawi Directory - Your Gateway to Langkawi",
  description: "Discover businesses, jobs, services, and events in Langkawi. Connect with the local community and find everything the island has to offer.",
  keywords: "Langkawi, business directory, jobs, services, events, Malaysia, tourism",
  authors: [{ name: "Langkawi Directory Team" }],
  creator: "Langkawi Directory",
  publisher: "Langkawi Directory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://langkawi-directory.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Langkawi Directory - Your Gateway to Langkawi",
    description: "Discover businesses, jobs, services, and events in Langkawi. Connect with the local community and find everything the island has to offer.",
    url: 'https://langkawi-directory.com',
    siteName: 'Langkawi Directory',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Langkawi Directory - Your Gateway to Langkawi",
    description: "Discover businesses, jobs, services, and events in Langkawi. Connect with the local community and find everything the island has to offer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
