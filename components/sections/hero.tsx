"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Building2, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  ArrowRight,
  Search,
  Filter
} from "lucide-react"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const categories = [
    { id: "all", label: "All", icon: Search, count: "1000+" },
    { id: "business", label: "Businesses", icon: Building2, count: "500+" },
    { id: "jobs", label: "Jobs", icon: Briefcase, count: "200+" },
    { id: "services", label: "Services", icon: Users, count: "300+" },
    { id: "events", label: "Events", icon: Calendar, count: "50+" },
  ]

  const stats = [
    { label: "Businesses Listed", value: "500+", icon: Building2 },
    { label: "Jobs Posted", value: "200+", icon: Briefcase },
    { label: "Services Offered", value: "300+", icon: Users },
    { label: "Happy Users", value: "10K+", icon: Star },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
              🏝️ Discover Langkawi's Best
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Langkawi
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              Find the best businesses, job opportunities, services, and events in Langkawi. 
              Connect with local professionals and discover everything this beautiful island has to offer.
            </p>
          </div>

          {/* Search Section */}
          <Card className="mx-auto max-w-2xl border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search businesses, jobs, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-white px-10 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <Button size="lg" className="px-8">
                  Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild className="px-8 py-3">
            <Link href="/directory">
              Browse Directory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="px-8 py-3">
            <Link href="/signup">
              List Your Business
              <Building2 className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by businesses across Langkawi</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
