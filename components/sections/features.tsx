"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  Shield,
  Zap,
  Globe,
  Heart,
  Search,
  Bookmark,
  MessageCircle,
  TrendingUp
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Building2,
      title: "Business Directory",
      description: "Discover local businesses, restaurants, hotels, and services in Langkawi. Get detailed information, photos, and contact details.",
      badge: "Popular",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Find the perfect job or hire talented professionals. Post job openings and browse through qualified candidates.",
      badge: "New",
      color: "green"
    },
    {
      icon: Users,
      title: "Service Marketplace",
      description: "Connect with freelancers and service providers. From photography to tour guides, find exactly what you need.",
      badge: "Featured",
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Events & Activities",
      description: "Stay updated with local events, festivals, and activities. Never miss out on what's happening in Langkawi.",
      badge: "Hot",
      color: "orange"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Advanced search and filtering options to find exactly what you're looking for quickly and efficiently.",
      badge: "AI-Powered",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All businesses and services are verified to ensure quality and reliability for our users.",
      badge: "Trusted",
      color: "emerald"
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Quick access to information and instant connections"
    },
    {
      icon: Globe,
      title: "Local Focus",
      description: "Dedicated to Langkawi's unique community and culture"
    },
    {
      icon: Heart,
      title: "User-Friendly",
      description: "Simple and intuitive interface for everyone"
    },
    {
      icon: TrendingUp,
      title: "Growing Network",
      description: "Expanding community of businesses and users"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
            ✨ Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl lg:text-5xl">
            Everything You Need in One Place
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Langkawi Directory brings together businesses, jobs, services, and events 
            in one comprehensive platform designed for the local community.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs px-2 py-1 bg-${feature.color}-100 text-${feature.color}-700 border-${feature.color}-200`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built for the Langkawi Community
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed with local businesses and residents in mind, 
              providing tools and features that make sense for our unique island community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already discovering, connecting, and growing 
              their businesses through Langkawi Directory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Browse Directory
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
                List Your Business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
