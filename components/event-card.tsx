import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Users, Ticket } from "lucide-react"
import Link from "next/link"

interface EventCardProps {
  event: {
    id: number
    title: string
    organizer: string
    location: string
    date: string
    time: string
    endTime: string
    attendees: number
    maxAttendees: number
    price: string
    category: string
    description: string
    tags: string[]
    featured: boolean
    ticketsAvailable: number
    eventType: string
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
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
                    event.eventType === "Virtual" ? "text-blue-700 border-blue-200" : "text-green-700 border-green-200"
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
  )
}
