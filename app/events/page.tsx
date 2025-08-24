import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Calendar, Clock, Users, Filter, Ticket } from "lucide-react"
import Link from "next/link"

// Extended mock event data
const eventListings = [
  {
    id: 1,
    title: "Tech Meetup 2024",
    organizer: "Tech Community",
    location: "Austin, TX",
    venue: "Austin Convention Center",
    date: "March 15, 2024",
    time: "6:00 PM",
    endTime: "9:00 PM",
    attendees: 45,
    maxAttendees: 100,
    price: "Free",
    category: "Technology",
    description: "Join us for an evening of networking and learning about the latest in tech...",
    tags: ["Networking", "Tech", "Startups", "Innovation"],
    featured: true,
    ticketsAvailable: 55,
    eventType: "In-person",
  },
  {
    id: 2,
    title: "Art Gallery Opening",
    organizer: "Modern Art Gallery",
    location: "Chicago, IL",
    venue: "Modern Art Gallery",
    date: "March 20, 2024",
    time: "7:00 PM",
    endTime: "10:00 PM",
    attendees: 120,
    maxAttendees: 150,
    price: "$25",
    category: "Arts & Culture",
    description: "Experience contemporary art from emerging local artists...",
    tags: ["Art", "Culture", "Exhibition", "Local Artists"],
    featured: false,
    ticketsAvailable: 30,
    eventType: "In-person",
  },
  {
    id: 3,
    title: "Digital Marketing Workshop",
    organizer: "Marketing Pros",
    location: "Online",
    venue: "Zoom",
    date: "March 18, 2024",
    time: "2:00 PM",
    endTime: "5:00 PM",
    attendees: 85,
    maxAttendees: 200,
    price: "$49",
    category: "Business",
    description: "Learn the latest digital marketing strategies and tools...",
    tags: ["Marketing", "Digital", "Workshop", "Online"],
    featured: true,
    ticketsAvailable: 115,
    eventType: "Virtual",
  },
  {
    id: 4,
    title: "Food & Wine Festival",
    organizer: "Culinary Events",
    location: "San Francisco, CA",
    venue: "Golden Gate Park",
    date: "March 22, 2024",
    time: "12:00 PM",
    endTime: "8:00 PM",
    attendees: 250,
    maxAttendees: 500,
    price: "$75",
    category: "Food & Drink",
    description: "Taste the best local cuisine and wines from the Bay Area...",
    tags: ["Food", "Wine", "Festival", "Local"],
    featured: true,
    ticketsAvailable: 250,
    eventType: "In-person",
  },
  {
    id: 5,
    title: "Yoga in the Park",
    organizer: "Wellness Community",
    location: "Denver, CO",
    venue: "City Park",
    date: "March 16, 2024",
    time: "8:00 AM",
    endTime: "9:30 AM",
    attendees: 30,
    maxAttendees: 50,
    price: "$15",
    category: "Health & Wellness",
    description: "Start your day with a peaceful yoga session in nature...",
    tags: ["Yoga", "Wellness", "Outdoor", "Morning"],
    featured: false,
    ticketsAvailable: 20,
    eventType: "In-person",
  },
  {
    id: 6,
    title: "Startup Pitch Competition",
    organizer: "Entrepreneur Hub",
    location: "New York, NY",
    venue: "Innovation Center",
    date: "March 25, 2024",
    time: "6:30 PM",
    endTime: "9:30 PM",
    attendees: 150,
    maxAttendees: 200,
    price: "$30",
    category: "Business",
    description: "Watch innovative startups pitch their ideas to investors...",
    tags: ["Startups", "Pitch", "Investment", "Innovation"],
    featured: false,
    ticketsAvailable: 50,
    eventType: "In-person",
  },
]

export default function EventsPage() {
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
              <Calendar className="h-4 w-4" />
              Create Event
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Event Listings</h2>
          </div>
          <p className="text-lg text-muted-foreground font-serif">
            Discover exciting events happening in your area and online
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
              <Input placeholder="Search events by title, organizer, or category..." className="pl-10" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="arts-culture">Arts & Culture</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="food-drink">Food & Drink</SelectItem>
                  <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="in-person">In-person</SelectItem>
                  <SelectItem value="virtual">Virtual</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
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

      {/* Event Listings */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Showing {eventListings.length} events</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date: Soonest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {eventListings.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Link href={`/events/${event.id}`}>
                            <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                              {event.title}
                            </CardTitle>
                          </Link>
                          {event.featured && (
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base font-medium">by {event.organizer}</CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary">{event.category}</Badge>
                        <Badge
                          variant="outline"
                          className={
                            event.eventType === "Virtual"
                              ? "text-blue-700 border-blue-200"
                              : "text-green-700 border-green-200"
                          }
                        >
                          {event.eventType}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time} - {event.endTime}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees}/{event.maxAttendees} attending
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {event.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{event.tags.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-lg text-foreground">{event.price}</span>
                    <span className="text-sm text-muted-foreground">{event.ticketsAvailable} tickets left</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/events/${event.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Button className="gap-2">
                      <Ticket className="h-4 w-4" />
                      {event.price === "Free" ? "RSVP" : "Get Tickets"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </main>
    </div>
  )
}
