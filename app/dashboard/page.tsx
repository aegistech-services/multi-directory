"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Briefcase, 
  Users, 
  Calendar, 
  MessageSquare, 
  Bookmark, 
  Settings,
  Plus,
  Eye,
  TrendingUp,
  Star
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [userRole, setUserRole] = React.useState("businessOwner")
  const [isLoading, setIsLoading] = React.useState(false)

  // Mock dashboard data
  const dashboardData = {
    businessOwner: {
      stats: [
        { label: "Business Listings", value: "3", icon: Building2, color: "text-blue-600" },
        { label: "Total Views", value: "1,247", icon: Eye, color: "text-green-600" },
        { label: "Inquiries", value: "12", icon: MessageSquare, color: "text-purple-600" },
        { label: "Rating", value: "4.8", icon: Star, color: "text-yellow-600" },
      ],
      recentActivity: [
        { type: "inquiry", message: "New inquiry from John Doe", time: "2 hours ago" },
        { type: "view", message: "Your listing was viewed 15 times today", time: "1 day ago" },
        { type: "rating", message: "New 5-star review received", time: "2 days ago" },
      ],
      quickActions: [
        { label: "Add New Listing", href: "/dashboard/listings/new", icon: Plus },
        { label: "View Analytics", href: "/dashboard/analytics", icon: TrendingUp },
        { label: "Manage Inquiries", href: "/dashboard/inquiries", icon: MessageSquare },
      ]
    },
    freelancer: {
      stats: [
        { label: "Service Listings", value: "5", icon: Users, color: "text-purple-600" },
        { label: "Total Views", value: "892", icon: Eye, color: "text-green-600" },
        { label: "Inquiries", value: "8", icon: MessageSquare, color: "text-purple-600" },
        { label: "Rating", value: "4.9", icon: Star, color: "text-yellow-600" },
      ],
      recentActivity: [
        { type: "inquiry", message: "New service inquiry from Sarah", time: "1 hour ago" },
        { type: "view", message: "Your photography service was viewed 8 times", time: "3 hours ago" },
        { type: "rating", message: "New 5-star review for tour guide service", time: "1 day ago" },
      ],
      quickActions: [
        { label: "Add New Service", href: "/dashboard/services/new", icon: Plus },
        { label: "View Bookings", href: "/dashboard/bookings", icon: Calendar },
        { label: "Manage Profile", href: "/dashboard/profile", icon: Settings },
      ]
    },
    admin: {
      stats: [
        { label: "Total Users", value: "1,247", icon: Users, color: "text-blue-600" },
        { label: "Business Listings", value: "156", icon: Building2, color: "text-green-600" },
        { label: "Pending Approvals", value: "23", icon: MessageSquare, color: "text-orange-600" },
        { label: "System Status", value: "Healthy", icon: TrendingUp, color: "text-green-600" },
      ],
      recentActivity: [
        { type: "user", message: "New business owner registration", time: "30 minutes ago" },
        { type: "listing", message: "New business listing submitted for approval", time: "1 hour ago" },
        { type: "system", message: "Daily backup completed successfully", time: "2 hours ago" },
      ],
      quickActions: [
        { label: "User Management", href: "/admin/users", icon: Users },
        { label: "Content Moderation", href: "/admin/moderation", icon: Settings },
        { label: "System Analytics", href: "/admin/analytics", icon: TrendingUp },
      ]
    }
  }

  const currentData = dashboardData[userRole as keyof typeof dashboardData]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your account.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentData.stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentData.quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={action.href}>
                    <action.icon className="h-4 w-4 mr-2" />
                    {action.label}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Latest updates and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Performance</span>
              </CardTitle>
              <CardDescription>
                This month's overview
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Profile Views</span>
                  <span className="text-sm font-medium text-gray-900">+12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Inquiries</span>
                  <span className="text-sm font-medium text-gray-900">+8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Response Rate</span>
                  <span className="text-sm font-medium text-gray-900">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Role Switcher (for demo purposes) */}
        <div className="mt-8 text-center">
          <Card className="border-0 shadow-lg max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Switch Role (Demo)</h3>
              <div className="flex space-x-2 justify-center">
                <Button
                  variant={userRole === "businessOwner" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserRole("businessOwner")}
                >
                  Business Owner
                </Button>
                <Button
                  variant={userRole === "freelancer" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserRole("freelancer")}
                >
                  Freelancer
                </Button>
                <Button
                  variant={userRole === "admin" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserRole("admin")}
                >
                  Admin
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
