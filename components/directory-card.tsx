import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Phone, Clock } from "lucide-react"
import Link from "next/link"

interface DirectoryCardProps {
  business: {
    id: number
    name: string
    category: string
    subcategory: string
    location: string
    rating: number
    reviewCount: number
    phone: string
    hours: string
    description: string
    tags: string[]
    verified: boolean
    priceRange: string
    established: string
    features: string[]
  }
}

export function DirectoryCard({ business }: DirectoryCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
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
  )
}
