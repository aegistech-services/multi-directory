import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, Clock, DollarSign, Filter } from "lucide-react"
import Link from "next/link"

// Extended mock job data
const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago",
    description: "We're looking for a senior frontend developer to join our growing team...",
    requirements: ["React", "TypeScript", "Next.js", "5+ years experience"],
    remote: false,
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    posted: "1 week ago",
    description: "Join our creative team to design beautiful user experiences...",
    requirements: ["Figma", "Adobe Creative Suite", "3+ years experience"],
    remote: true,
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90k - $130k",
    posted: "3 days ago",
    description: "Build scalable web applications from frontend to backend...",
    requirements: ["Node.js", "React", "PostgreSQL", "AWS"],
    remote: false,
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovateCo",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110k - $140k",
    posted: "5 days ago",
    description: "Lead product strategy and work with cross-functional teams...",
    requirements: ["Product Management", "Analytics", "Agile", "5+ years experience"],
    remote: false,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $135k",
    posted: "1 day ago",
    description: "Manage cloud infrastructure and deployment pipelines...",
    requirements: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    remote: true,
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "GrowthAgency",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$50k - $70k",
    posted: "4 days ago",
    description: "Drive marketing campaigns and analyze performance metrics...",
    requirements: ["Digital Marketing", "Google Analytics", "Social Media"],
    remote: false,
  },
]

export default function JobsPage() {
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
              <Briefcase className="h-4 w-4" />
              Post Job
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Job Listings</h2>
          </div>
          <p className="text-lg text-muted-foreground font-serif">
            Discover your next career opportunity from top companies
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
              <Input placeholder="Search jobs by title, company, or skills..." className="pl-10" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="on-site">On-site</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ranges</SelectItem>
                  <SelectItem value="50k-80k">$50k - $80k</SelectItem>
                  <SelectItem value="80k-120k">$80k - $120k</SelectItem>
                  <SelectItem value="120k+">$120k+</SelectItem>
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

      {/* Job Listings */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Showing {jobListings.length} jobs</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="salary-high">Salary: High to Low</SelectItem>
              <SelectItem value="salary-low">Salary: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {jobListings.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
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
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </main>
    </div>
  )
}
