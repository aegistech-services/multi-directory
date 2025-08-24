import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MapPin,
  Star,
  Phone,
  Clock,
  Globe,
  Mail,
  ArrowLeft,
  Share,
  Heart,
  Building,
  CheckCircle,
  Calendar,
  DollarSign,
  Camera,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock business data (in a real app, this would come from a database)
const businessData = {
  1: {
    id: 1,
    name: "Blue Mountain Coffee",
    category: "Restaurant",
    subcategory: "Coffee Shop",
    location: "Seattle, WA",
    address: "123 Pine St, Seattle, WA 98101",
    rating: 4.8,
    reviewCount: 234,
    phone: "(555) 123-4567",
    email: "hello@bluemountaincoffee.com",
    website: "bluemountaincoffee.com",
    hours: "6 AM - 8 PM",
    description: `Blue Mountain Coffee is Seattle's premier artisanal coffee roastery, serving the community since 2018. We pride ourselves on sourcing the finest beans from sustainable farms and roasting them daily to perfection.

Our cozy atmosphere makes us the perfect spot for morning coffee, afternoon meetings, or catching up with friends. We also offer a selection of locally sourced pastries, light meals, and specialty drinks.

Whether you're a coffee connoisseur or just looking for a great cup of joe, our experienced baristas are here to craft the perfect drink for you.`,
    tags: ["Coffee", "Breakfast", "WiFi", "Pet Friendly", "Organic", "Local"],
    verified: true,
    priceRange: "$$",
    established: "2018",
    features: ["Outdoor Seating", "Free WiFi", "Takeout", "Delivery", "Pet Friendly", "Parking Available"],
    hours_detailed: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 9:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "7:00 AM - 7:00 PM",
    },
    menu_highlights: [
      "Signature Blue Mountain Blend - $4.50",
      "Artisan Espresso Drinks - $3.50-$5.50",
      "Fresh Pastries & Croissants - $2.50-$4.00",
      "Breakfast Sandwiches - $6.50-$8.50",
      "Specialty Cold Brew - $4.00",
    ],
    photos: [
      "/coffee-shop-interior.png",
      "/artisan-coffee-beans.png",
      "/cozy-seating-area.png",
      "/fresh-pastries-display.png",
    ],
    owner_info: {
      name: "Maria Santos",
      title: "Owner & Head Roaster",
      bio: "Coffee enthusiast with 15 years of experience in the industry",
      since: "2018",
    },
    reviews: [
      {
        id: 1,
        author: "Jennifer Kim",
        rating: 5,
        date: "1 week ago",
        comment: "Best coffee in Seattle! The atmosphere is perfect for working and the staff is incredibly friendly.",
      },
      {
        id: 2,
        author: "David Chen",
        rating: 5,
        date: "2 weeks ago",
        comment: "Amazing coffee and pastries. Love the outdoor seating area. Highly recommend!",
      },
      {
        id: 3,
        author: "Sarah Wilson",
        rating: 4,
        date: "3 weeks ago",
        comment: "Great local coffee shop with excellent WiFi. Perfect for remote work sessions.",
      },
    ],
    social_media: {
      instagram: "@bluemountaincoffee",
      facebook: "Blue Mountain Coffee Seattle",
    },
  },
}

interface BusinessDetailPageProps {
  params: {
    id: string
  }
}

export default function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const business = businessData[Number.parseInt(params.id) as keyof typeof businessData]

  if (!business) {
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
          href="/directory"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{business.name}</CardTitle>
                      {business.verified && (
                        <Badge variant="outline" className="text-green-700 border-green-200 text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-lg font-medium mb-4">
                      {business.subcategory} • {business.category}
                    </CardDescription>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-lg">{business.rating}</span>
                        <span className="text-muted-foreground">({business.reviewCount} reviews)</span>
                      </div>
                      <Badge variant="secondary">{business.priceRange}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {business.address}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {business.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {business.hours}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Est. {business.established}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Business Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {business.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {business.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu/Services */}
            <Card>
              <CardHeader>
                <CardTitle>Menu Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {business.menu_highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {business.photos.map((photo, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`${business.name} photo ${index + 1}`}
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
                <CardTitle>Customer Reviews ({business.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {business.reviews.map((review) => (
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
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{business.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{business.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{business.website}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Button className="flex-1">Call Now</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {Object.entries(business.hours_detailed).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize text-muted-foreground">{day}:</span>
                      <span className="font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">{business.name}</p>
                  <p className="text-sm text-muted-foreground">{business.address}</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Map View</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Owner Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Business Owner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {business.owner_info.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-foreground">{business.owner_info.name}</h4>
                    <p className="text-sm text-muted-foreground">{business.owner_info.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{business.owner_info.bio}</p>
                <div className="text-sm">
                  <p className="text-muted-foreground">
                    Owner since <span className="font-medium">{business.owner_info.since}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features & Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {business.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
