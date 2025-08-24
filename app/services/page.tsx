import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Users, Star, DollarSign, Filter } from "lucide-react"
import Link from "next/link"

// Extended mock service data
const serviceListings = [
  {
    id: 1,
    title: "Professional Photography",
    provider: "Sarah Johnson",
    location: "New York, NY",
    category: "Photography",
    rating: 4.9,
    reviewCount: 127,
    price: "Starting at $200",
    priceType: "session",
    description: "Capture your special moments with professional photography services...",
    tags: ["Wedding", "Portrait", "Event", "Commercial"],
    verified: true,
    responseTime: "Within 2 hours",
    completedJobs: 150,
  },
  {
    id: 2,
    title: "Home Cleaning Service",
    provider: "CleanPro",
    location: "Los Angeles, CA",
    category: "Cleaning",
    rating: 4.7,
    reviewCount: 89,
    price: "$50/hour",
    priceType: "hourly",
    description: "Professional home cleaning services for busy professionals...",
    tags: ["Deep Cleaning", "Regular Cleaning", "Move-in/out"],
    verified: true,
    responseTime: "Within 4 hours",
    completedJobs: 200,
  },
  {
    id: 3,
    title: "Web Development",
    provider: "TechSolutions",
    location: "Remote",
    category: "Technology",
    rating: 4.8,
    reviewCount: 64,
    price: "$75/hour",
    priceType: "hourly",
    description: "Custom web development and design services for businesses...",
    tags: ["React", "Next.js", "E-commerce", "Mobile-friendly"],
    verified: true,
    responseTime: "Within 1 hour",
    completedJobs: 85,
  },
  {
    id: 4,
    title: "Personal Training",
    provider: "Mike Fitness",
    location: "Chicago, IL",
    category: "Fitness",
    rating: 4.9,
    reviewCount: 156,
    price: "$80/session",
    priceType: "session",
    description: "Personalized fitness training to help you reach your goals...",
    tags: ["Weight Loss", "Strength Training", "Nutrition", "Cardio"],
    verified: true,
    responseTime: "Within 3 hours",
    completedJobs: 300,
  },
  {
    id: 5,
    title: "Graphic Design",
    provider: "Creative Studio",
    location: "Austin, TX",
    category: "Design",
    rating: 4.6,
    reviewCount: 92,
    price: "$45/hour",
    priceType: "hourly",
    description: "Professional graphic design for branding and marketing materials...",
    tags: ["Logo Design", "Branding", "Print Design", "Digital"],
    verified: false,
    responseTime: "Within 6 hours",
    completedJobs: 120,
  },
  {
    id: 6,
    title: "Tutoring Services",
    provider: "EduHelp",
    location: "Boston, MA",
    category: "Education",
    rating: 4.8,
    reviewCount: 73,
    price: "$40/hour",
    priceType: "hourly",
    description: "Expert tutoring in math, science, and test preparation...",
    tags: ["Math", "Science", "SAT Prep", "College Prep"],
    verified: true,
    responseTime: "Within 2 hours",
    completedJobs: 180,
  },
]

export default function ServicesPage() {
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
            <Button className="gap-2">
              <Users className="h-4 w-4" />
              Offer Service
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Service Listings</h2>
          </div>
          <p className="text-lg text-muted-foreground font-serif">
            Find trusted professionals for all your service needs
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search services by category, provider, or skills..." className="pl-10" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="local">Local Only</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Under $50</SelectItem>
                  <SelectItem value="mid">$50 - $100</SelectItem>
                  <SelectItem value="premium">$100+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Listings */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Showing {serviceListings.length} services</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {serviceListings.map((service) => (
            <Card key={service.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-1">
                        <Link href={`/services/${service.id}`}>
                          <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                            {service.title}
                          </CardTitle>
                        </Link>
                        <div className="flex items-center gap-2 mt-1">
                          <CardDescription className="text-base font-medium">{service.provider}</CardDescription>
                          {service.verified && (
                            <Badge variant="outline" className="text-green-700 border-green-200 text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary">{service.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-muted-foreground text-sm">({service.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {service.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {service.price}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    Response: {service.responseTime}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    {service.completedJobs} jobs completed
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {service.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{service.tags.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <Link href={`/services/${service.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Button>Contact Provider</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Services
          </Button>
        </div>
      </main>
    </div>
  )
}
