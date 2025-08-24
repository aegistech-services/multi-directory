import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Star } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    provider: string
    location: string
    category: string
    rating: number
    reviewCount: number
    price: string
    description: string
    tags: string[]
    verified: boolean
    responseTime: string
    completedJobs: number
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
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
          <div className="flex items-center text-muted-foreground text-sm">Response: {service.responseTime}</div>
          <div className="flex items-center text-muted-foreground text-sm">{service.completedJobs} jobs completed</div>
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
  )
}
