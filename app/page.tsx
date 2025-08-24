import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Briefcase, Users, Plus } from "lucide-react"
import Link from "next/link"

// Mock data for different listing types
const mockListings = {
  jobs: [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "1 week ago",
    },
  ],
  services: [
    {
      id: 1,
      title: "Professional Photography",
      provider: "Sarah Johnson",
      location: "New York, NY",
      category: "Photography",
      rating: 4.9,
      price: "Starting at $200",
    },
    {
      id: 2,
      title: "Home Cleaning Service",
      provider: "CleanPro",
      location: "Los Angeles, CA",
      category: "Cleaning",
      rating: 4.7,
      price: "$50/hour",
    },
  ],
  events: [
    {
      id: 1,
      title: "Tech Meetup 2024",
      organizer: "Tech Community",
      location: "Austin, TX",
      date: "March 15, 2024",
      time: "6:00 PM",
      attendees: 45,
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      organizer: "Modern Art Gallery",
      location: "Chicago, IL",
      date: "March 20, 2024",
      time: "7:00 PM",
      attendees: 120,
    },
  ],
  directory: [
    {
      id: 1,
      name: "Blue Mountain Coffee",
      category: "Restaurant",
      location: "Seattle, WA",
      rating: 4.8,
      phone: "(555) 123-4567",
      hours: "6 AM - 8 PM",
    },
    {
      id: 2,
      name: "Downtown Fitness Center",
      category: "Gym",
      location: "Miami, FL",
      rating: 4.6,
      phone: "(555) 987-6543",
      hours: "5 AM - 11 PM",
    },
  ],
}

const categoryIcons = {
  jobs: Briefcase,
  services: Users,
  events: Calendar,
  directory: MapPin,
}

const categoryColors = {
  jobs: "bg-blue-50 text-blue-700 border-blue-200",
  services: "bg-green-50 text-green-700 border-green-200",
  events: "bg-purple-50 text-purple-700 border-purple-200",
  directory: "bg-orange-50 text-orange-700 border-orange-200",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-foreground">ListBoard</h1>
              <Badge variant="secondary" className="text-xs">
                Beta
              </Badge>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Post Listing
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Discover Everything You Need</h2>
          <p className="text-xl text-muted-foreground mb-8 font-serif">
            Find jobs, services, events, and local businesses all in one minimalist platform
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search for jobs, services, events, or businesses..." className="pl-10 py-3 text-base" />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(categoryIcons).map(([category, Icon]) => (
              <Link key={category} href={`/${category}`}>
                <Button
                  variant="outline"
                  className={`gap-2 capitalize ${categoryColors[category as keyof typeof categoryColors]}`}
                >
                  <Icon className="h-4 w-4" />
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Job Listings */}
          {mockListings.jobs.map((job) => (
            <Card key={`job-${job.id}`} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge className={categoryColors.jobs}>
                    <Briefcase className="h-3 w-3 mr-1" />
                    Job
                  </Badge>
                  <span className="text-xs text-muted-foreground">{job.posted}</span>
                </div>
                <Link href={`/jobs/${job.id}`}>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {job.title}
                  </CardTitle>
                </Link>
                <CardDescription className="font-medium">{job.company}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{job.type}</span>
                    <span className="font-medium text-foreground">{job.salary}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Service Listings */}
          {mockListings.services.map((service) => (
            <Card key={`service-${service.id}`} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge className={categoryColors.services}>
                    <Users className="h-3 w-3 mr-1" />
                    Service
                  </Badge>
                  <div className="flex items-center text-xs">
                    <span className="text-yellow-500 mr-1">★</span>
                    {service.rating}
                  </div>
                </div>
                <Link href={`/services/${service.id}`}>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {service.title}
                  </CardTitle>
                </Link>
                <CardDescription className="font-medium">{service.provider}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {service.location}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{service.category}</span>
                    <span className="font-medium text-foreground">{service.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Event Listings */}
          {mockListings.events.map((event) => (
            <Card key={`event-${event.id}`} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge className={categoryColors.events}>
                    <Calendar className="h-3 w-3 mr-1" />
                    Event
                  </Badge>
                  <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                </div>
                <Link href={`/events/${event.id}`}>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {event.title}
                  </CardTitle>
                </Link>
                <CardDescription className="font-medium">{event.organizer}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {event.location}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{event.date}</span>
                    <span className="font-medium text-foreground">{event.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Directory Listings */}
          {mockListings.directory.map((business) => (
            <Card key={`directory-${business.id}`} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge className={categoryColors.directory}>
                    <MapPin className="h-3 w-3 mr-1" />
                    Directory
                  </Badge>
                  <div className="flex items-center text-xs">
                    <span className="text-yellow-500 mr-1">★</span>
                    {business.rating}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{business.name}</CardTitle>
                <CardDescription className="font-medium">{business.category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {business.location}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{business.phone}</span>
                    <span className="font-medium text-foreground">{business.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Listings
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground font-serif">
            ListBoard - Your minimalist platform for discovering opportunities
          </p>
        </div>
      </footer>
    </div>
  )
}
