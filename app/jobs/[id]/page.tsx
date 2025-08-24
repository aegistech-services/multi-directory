import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, DollarSign, Building, ArrowLeft, Share, Heart } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock job data (in a real app, this would come from a database)
const jobData = {
  1: {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago",
    description: `We're looking for a senior frontend developer to join our growing team and help build the next generation of web applications. You'll work with cutting-edge technologies and collaborate with a talented team of designers and engineers.

As a Senior Frontend Developer, you'll be responsible for developing user-facing features, optimizing applications for maximum speed and scalability, and ensuring the technical feasibility of UI/UX designs.`,
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React and TypeScript",
      "Experience with Next.js and modern build tools",
      "Strong understanding of responsive design principles",
      "Experience with state management libraries (Redux, Zustand)",
      "Knowledge of testing frameworks (Jest, Cypress)",
      "Familiarity with version control systems (Git)",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Develop new user-facing features using React and TypeScript",
      "Build reusable components and front-end libraries",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with design team to implement pixel-perfect UIs",
      "Participate in code reviews and maintain code quality",
      "Mentor junior developers and share knowledge",
      "Stay up-to-date with emerging technologies and best practices",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements and remote options",
      "Professional development budget",
      "Unlimited PTO policy",
      "Modern office with free meals and snacks",
      "Team building events and company retreats",
    ],
    companyInfo: {
      name: "TechCorp",
      size: "200-500 employees",
      industry: "Technology",
      founded: "2015",
      description:
        "TechCorp is a leading technology company focused on building innovative solutions for modern businesses.",
    },
    remote: false,
    applicationDeadline: "March 30, 2024",
  },
}

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobData[Number.parseInt(params.id) as keyof typeof jobData]

  if (!job) {
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
        <Link href="/jobs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="text-lg font-medium mb-4">{job.company}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant={job.type === "Full-time" ? "default" : "secondary"} className="w-fit">
                      {job.type}
                    </Badge>
                    {job.remote && (
                      <Badge variant="outline" className="text-green-700 border-green-200 w-fit">
                        Remote
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {job.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardHeader>
                <CardTitle>Apply for this position</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Save for Later
                </Button>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-1">Application Deadline:</p>
                  <p>{job.applicationDeadline}</p>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  About {job.companyInfo.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{job.companyInfo.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">{job.companyInfo.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company Size:</span>
                    <span className="font-medium">{job.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="font-medium">{job.companyInfo.founded}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/jobs/2" className="block hover:bg-muted/50 p-2 rounded transition-colors">
                    <h4 className="font-medium text-sm">UX Designer</h4>
                    <p className="text-xs text-muted-foreground">Design Studio • Remote</p>
                  </Link>
                  <Link href="/jobs/3" className="block hover:bg-muted/50 p-2 rounded transition-colors">
                    <h4 className="font-medium text-sm">Full Stack Engineer</h4>
                    <p className="text-xs text-muted-foreground">StartupXYZ • Austin, TX</p>
                  </Link>
                </div>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  View All Similar Jobs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
