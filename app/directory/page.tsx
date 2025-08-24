import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Phone, Clock, Filter, Building } from "lucide-react"
import Link from "next/link"

// Extended mock directory data
const directoryListings = [
  {
    id: 1,
    name: "Blue Mountain Coffee",
    category: "Restaurant",
    subcategory: "Coffee Shop",
    location: "Seattle, WA",
    address: "123 Pine St, Seattle, WA 98101",
    rating: 4.8,
    reviewCount: 234,
    phone: "(555) 123-4567",
    hours: "6 AM - 8 PM",
    website: "bluemountaincoffee.com",
    description: "Artisanal coffee roasted daily with locally sourced pastries and light meals...",
    tags: ["Coffee", "Breakfast", "WiFi", "Pet Friendly"],
    verified: true,
    priceRange: "$$",
    established: "2018",
    features: ["Outdoor Seating", "Free WiFi", "Takeout", "Delivery"],
  },
  {
    id: 2,
    name: "Downtown Fitness Center",
    category: "Health & Fitness",
    subcategory: "Gym",
    location: "Miami, FL",
    address: "456 Ocean Dr, Miami, FL 33139",
    rating: 4.6,
    reviewCount: 189,
    phone: "(555) 987-6543",
    hours: "5 AM - 11 PM",
    website: "downtownfitness.com",
    description: "State-of-the-art fitness facility with personal training and group classes...",
    tags: ["Gym", "Personal Training", "Classes", "Pool"],
    verified: true,
    priceRange: "$$$",
    established: "2015",
    features: ["Swimming Pool", "Personal Training", "Group Classes", "Sauna"],
  },
  {
    id: 3,
    name: "Tech Repair Solutions",
    category: "Technology",
    subcategory: "Repair Service",
    location: "Austin, TX",
    address: "789 Tech Blvd, Austin, TX 78701",
    rating: 4.9,
    reviewCount: 156,
    phone: "(555) 456-7890",
    hours: "9 AM - 7 PM",
    website: "techrepairsolutions.com",
    description: "Expert repair services for smartphones, laptops, and electronic devices...",
    tags: ["Phone Repair", "Laptop Repair", "Fast Service", "Warranty"],
    verified: true,
    priceRange: "$$",
    established: "2020",
    features: ["Same Day Service", "Warranty", "Free Diagnostics", "Pickup/Delivery"],
  },
  {
    id: 4,
    name: "Green Thumb Nursery",
    category: "Home & Garden",
    subcategory: "Garden Center",
    location: "Portland, OR",
    address: "321 Garden Way, Portland, OR 97201",
    rating: 4.7,
    reviewCount: 98,
    phone: "(555) 234-5678",
    hours: "8 AM - 6 PM",
    website: "greenthumb.com",
    description: "Your local source for plants, gardening supplies, and landscaping advice...",
    tags: ["Plants", "Gardening", "Landscaping", "Organic"],
    verified: false,
    priceRange: "$$",
    established: "2012",
    features: ["Plant Care Advice", "Delivery Service", "Landscaping", "Organic Options"],
  },
  {
    id: 5,
    name: "Bella Vista Restaurant",
    category: "Restaurant",
    subcategory: "Italian",
    location: "New York, NY",
    address: "567 Broadway, New York, NY 10012",
    rating: 4.5,
    reviewCount: 312,
    phone: "(555) 345-6789",
    hours: "11 AM - 10 PM",
    website: "bellavistanyc.com",
    description: "Authentic Italian cuisine in the heart of Manhattan with fresh ingredients...",
    tags: ["Italian", "Fine Dining", "Wine", "Romantic"],
    verified: true,
    priceRange: "$$$",
    established: "2010",
    features: ["Outdoor Dining", "Wine Selection", "Private Events", "Reservations"],
  },
  {
    id: 6,
    name: "Quick Clean Laundromat",
    category: "Services",
    subcategory: "Laundry",
    location: "Chicago, IL",
    address: "890 Main St, Chicago, IL 60601",
    rating: 4.3,
    reviewCount: 67,
    phone: "(555) 567-8901",
    hours: "6 AM - 10 PM",
    website: "quickclean.com",
    description: "Modern laundromat with high-efficiency machines and wash-and-fold service...",
    tags: ["Laundry", "Wash & Fold", "24/7", "Clean"],
    verified: true,
    priceRange: "$",
    established: "2019",
    features: ["Wash & Fold", "Large Capacity", "Card Payment", "Free WiFi"],
  },
]

export default function DirectoryPage() {
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
              <Building className="h-4 w-4" />
              Add Business
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Business Directory</h2>
          </div>
          <p className="text-lg text-muted-foreground font-serif">
            Discover local businesses and services in your area
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
              <Input placeholder="Search businesses by name, category, or location..." className="pl-10" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="health-fitness">Health & Fitness</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="home-garden">Home & Garden</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="$">$ - Budget</SelectItem>
                  <SelectItem value="$$">$$ - Moderate</SelectItem>
                  <SelectItem value="$$$">$$$ - Expensive</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4+">4+ Stars</SelectItem>
                  <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                  <SelectItem value="verified">Verified Only</SelectItem>
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

      {/* Directory Listings */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Showing {directoryListings.length} businesses</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="distance">Nearest First</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="newest">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {directoryListings.map((business) => (
            <Card key={business.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Link href={`/directory/${business.id}`}>
                            <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                              {business.name}
                            </CardTitle>
                          </Link>
                          {business.verified && (
                            <Badge variant="outline" className="text-green-700 border-green-200 text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base font-medium">
                          {business.subcategory} • {business.category}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{business.rating}</span>
                          <span className="text-muted-foreground text-sm">({business.reviewCount})</span>
                        </div>
                        <Badge variant="secondary">{business.priceRange}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {business.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    {business.phone}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {business.hours}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">Est. {business.established}</div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{business.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {business.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {business.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{business.tags.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {business.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs text-muted-foreground">
                        • {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/directory/${business.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Button>Contact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Businesses
          </Button>
        </div>
      </main>
    </div>
  )
}
