import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Users,
  Star,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowLeft,
  Share,
  Heart,
  MessageCircle,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock service data (in a real app, this would come from a database)
const serviceData = {
  1: {
    id: 1,
    title: "Professional Photography",
    provider: "Sarah Johnson",
    location: "New York, NY",
    category: "Photography",
    rating: 4.9,
    reviewCount: 127,
    price: "Starting at $200",
    priceType: "session",
    description: `I'm a professional photographer with over 8 years of experience capturing life's most precious moments. I specialize in wedding photography, portraits, and corporate events.

My approach combines artistic vision with technical expertise to create stunning images that tell your unique story. I use state-of-the-art equipment and editing techniques to ensure every photo meets the highest standards.`,
    services: [
      "Wedding Photography - Starting at $1,200",
      "Portrait Sessions - $200-400",
      "Corporate Events - $150/hour",
      "Product Photography - $300/session",
      "Real Estate Photography - $250/property",
    ],
    portfolio: [
      "/elegant-outdoor-wedding.png",
      "/portrait-photography.png",
      "/corporate-event-networking.png",
      "/product-photography-still-life.png",
    ],
    tags: ["Wedding", "Portrait", "Event", "Commercial", "Digital Editing", "Studio"],
    verified: true,
    responseTime: "Within 2 hours",
    completedJobs: 150,
    memberSince: "2019",
    languages: ["English", "Spanish"],
    availability: "Available 7 days a week",
    reviews: [
      {
        id: 1,
        author: "Emily Chen",
        rating: 5,
        date: "2 weeks ago",
        comment: "Sarah did an amazing job with our wedding photos. She captured every special moment perfectly!",
      },
      {
        id: 2,
        author: "Michael Rodriguez",
        rating: 5,
        date: "1 month ago",
        comment: "Professional, creative, and delivered exactly what we wanted. Highly recommend!",
      },
    ],
  },
}

interface ServiceDetailPageProps {
  params: {
    id: string
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = serviceData[Number.parseInt(params.id) as keyof typeof serviceData]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-foreground">ListBoard</h1>
              <Badge variant="secondary" className="text-xs">
                Beta
              </Badge>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Heart className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/professional-photographer.png" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardDescription className="text-lg font-medium">{service.provider}</CardDescription>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{service.rating}</span>
                            <span className="text-muted-foreground text-sm">({service.reviewCount} reviews)</span>
                          </div>
                          {service.verified && (
                            <Badge variant="outline" className="text-green-700 border-green-200 text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {service.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        {service.price}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {service.responseTime}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {service.category}
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Service Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {service.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services & Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Services & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.services.map((serviceItem, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{serviceItem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {service.portfolio.map((image, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Portfolio item ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({service.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{review.author}</span>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Provider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full gap-2" size="lg">
                  <MessageCircle className="h-4 w-4" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Phone className="h-4 w-4" />
                  Request Quote
                </Button>
                <Separator />
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium">{service.availability}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Provider Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Provider Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member Since:</span>
                    <span className="font-medium">{service.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jobs Completed:</span>
                    <span className="font-medium">{service.completedJobs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages:</span>
                    <span className="font-medium">{service.languages.join(", ")}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Similar Services */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/services/2" className="block hover:bg-muted/50 p-2 rounded transition-colors">
                    <h4 className="font-medium text-sm">Home Cleaning Service</h4>
                    <p className="text-xs text-muted-foreground">CleanPro • Los Angeles, CA</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">4.7 (89 reviews)</span>
                    </div>
                  </Link>
                  <Link href="/services/3" className="block hover:bg-muted/50 p-2 rounded transition-colors">
                    <h4 className="font-medium text-sm">Web Development</h4>
                    <p className="text-xs text-muted-foreground">TechSolutions • Remote</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">4.8 (64 reviews)</span>
                    </div>
                  </Link>
                </div>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  View All Similar Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
