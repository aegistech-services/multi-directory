import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowLeft,
  Share,
  Heart,
  Ticket,
  Building,
  Globe,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock event data (in a real app, this would come from a database)
const eventData = {
  1: {
    id: 1,
    title: "Tech Meetup 2024",
    organizer: "Tech Community",
    location: "Austin, TX",
    venue: "Austin Convention Center",
    address: "500 E Cesar Chavez St, Austin, TX 78701",
    date: "March 15, 2024",
    time: "6:00 PM",
    endTime: "9:00 PM",
    attendees: 45,
    maxAttendees: 100,
    price: "Free",
    category: "Technology",
    description: `Join us for an evening of networking and learning about the latest in technology trends. This meetup brings together developers, entrepreneurs, and tech enthusiasts from across Austin.

We'll have presentations from industry leaders, networking opportunities, and discussions about emerging technologies like AI, blockchain, and web development.

Whether you're a seasoned professional or just starting your tech journey, this event offers valuable insights and connections that can help advance your career.`,
    agenda: [
      { time: "6:00 PM", activity: "Registration & Welcome Drinks" },
      { time: "6:30 PM", activity: "Opening Remarks" },
      { time: "6:45 PM", activity: "Keynote: The Future of AI" },
      { time: "7:30 PM", activity: "Panel Discussion: Startup Ecosystem" },
      { time: "8:15 PM", activity: "Networking & Refreshments" },
      { time: "9:00 PM", activity: "Event Wrap-up" },
    ],
    speakers: [
      {
        name: "Sarah Chen",
        title: "AI Research Director",
        company: "TechCorp",
        bio: "Leading AI researcher with 10+ years experience",
      },
      {
        name: "Mike Rodriguez",
        title: "Startup Founder",
        company: "InnovateLab",
        bio: "Serial entrepreneur and startup mentor",
      },
    ],
    tags: ["Networking", "Tech", "Startups", "Innovation", "AI", "Career"],
    featured: true,
    ticketsAvailable: 55,
    eventType: "In-person",
    organizer_info: {
      name: "Tech Community",
      description: "Austin's premier technology community organizing events since 2018",
      website: "techcommunity.austin",
      email: "hello@techcommunity.austin",
      phone: "(512) 555-0123",
      events_hosted: 24,
    },
    requirements: ["Bring your business cards", "Laptop optional", "Professional attire recommended"],
    amenities: ["Free WiFi", "Parking Available", "Food & Drinks", "Networking Lounge"],
  },
}

interface EventDetailPageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = eventData[Number.parseInt(params.id) as keyof typeof eventData]

  if (!event) {
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
          href="/events"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      {event.featured && (
                        <Badge variant="default" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-lg font-medium mb-4">
                      Organized by {event.organizer}
                    </CardDescription>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {event.time} - {event.endTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.venue}, {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {event.attendees}/{event.maxAttendees} attending
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {event.category}
                    </Badge>
                    <Badge variant="outline" className="text-green-700 border-green-200 w-fit">
                      {event.eventType}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Event Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {event.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
                      <div className="w-20 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {item.time}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex gap-4 p-4 border rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{speaker.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {speaker.title} at {speaker.company}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements & Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Card */}
            <Card>
              <CardHeader>
                <CardTitle>Get Your Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">{event.price}</div>
                  <p className="text-sm text-muted-foreground">{event.ticketsAvailable} tickets remaining</p>
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Ticket className="h-4 w-4" />
                  {event.price === "Free" ? "RSVP Now" : "Get Tickets"}
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Calendar
                </Button>
                <Separator />
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Event Type:</span>
                    <span className="font-medium">{event.eventType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">3 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Event Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">{event.venue}</p>
                  <p className="text-sm text-muted-foreground">{event.address}</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Map View</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Organizer Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Event Organizer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">{event.organizer_info.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{event.organizer_info.description}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{event.organizer_info.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{event.organizer_info.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{event.organizer_info.phone}</span>
                  </div>
                </div>
                <Separator />
                <div className="text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium">{event.organizer_info.events_hosted}</span> events hosted
                  </p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Event Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
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
