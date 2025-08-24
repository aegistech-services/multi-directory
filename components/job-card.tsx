import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

interface JobCardProps {
  job: {
    id: number
    title: string
    company: string
    location: string
    type: string
    salary: string
    posted: string
    description: string
    requirements: string[]
    remote: boolean
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-2">
              <div className="flex-1">
                <Link href={`/jobs/${job.id}`}>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {job.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-base font-medium mt-1">{job.company}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>{job.type}</Badge>
                {job.remote && (
                  <Badge variant="outline" className="text-green-700 border-green-200">
                    Remote
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-4 w-4 mr-2" />
            {job.salary}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {job.posted}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.slice(0, 4).map((req, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {req}
            </Badge>
          ))}
          {job.requirements.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{job.requirements.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex justify-between items-center">
          <Link href={`/jobs/${job.id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
          <Button>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}
