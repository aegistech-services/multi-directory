"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, MessageCircle, Mail, Phone, Building2, Users } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Langkawi Directory?",
          answer: "Langkawi Directory is a comprehensive platform that connects local businesses, job seekers, service providers, and residents in Langkawi. It serves as a one-stop destination for discovering everything the island has to offer."
        },
        {
          question: "Is Langkawi Directory free to use?",
          answer: "Yes, browsing and basic features are completely free. We offer premium plans for businesses who want enhanced visibility and additional features."
        },
        {
          question: "How do I get started?",
          answer: "Simply create an account, choose your role (business owner, freelancer, job seeker, or general user), and start exploring or listing your services."
        }
      ]
    },
    {
      category: "Business Owners",
      questions: [
        {
          question: "How can I list my business?",
          answer: "Sign up as a business owner, complete your profile with business details, upload photos, and choose a subscription plan that fits your needs."
        },
        {
          question: "What subscription plans are available?",
          answer: "We offer Basic ($29.99/month), Premium ($59.99/month), and Enterprise ($99.99/month) plans with varying features and listing limits."
        },
        {
          question: "Can I manage multiple business locations?",
          answer: "Yes, depending on your subscription plan, you can manage multiple locations and listings from a single dashboard."
        }
      ]
    },
    {
      category: "Job Seekers & Freelancers",
      questions: [
        {
          question: "How do I find jobs or freelance opportunities?",
          answer: "Browse the jobs section, use filters to find relevant opportunities, and apply directly through the platform. You can also set up job alerts."
        },
        {
          question: "Can I offer my services as a freelancer?",
          answer: "Absolutely! Create a freelancer profile, list your services, set your rates, and connect with potential clients in Langkawi."
        },
        {
          question: "How do I get paid for my services?",
          answer: "We provide secure payment processing through Stripe. Payments are held in escrow and released upon service completion."
        }
      ]
    },
    {
      category: "Users & Visitors",
      questions: [
        {
          question: "How do I contact businesses or service providers?",
          answer: "Use the inquiry form on any listing to send a message directly to the business owner or service provider."
        },
        {
          question: "Can I save my favorite listings?",
          answer: "Yes! Create an account and use the bookmark feature to save businesses, jobs, and services you're interested in."
        },
        {
          question: "How do I report inappropriate content?",
          answer: "Use the report button on any listing or contact our support team directly. We take content moderation seriously."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What browsers are supported?",
          answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, use the latest versions."
        },
        {
          question: "Is there a mobile app?",
          answer: "Our website is fully responsive and works great on mobile devices. We're working on native mobile apps for iOS and Android."
        },
        {
          question: "How do I reset my password?",
          answer: "Use the 'Forgot Password' link on the login page. We'll send you an email with instructions to reset your password."
        }
      ]
    }
  ]

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: true
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: true
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours",
      action: "Call Now",
      available: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
            ❓ Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl lg:text-5xl">
            Got Questions? We've Got Answers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about using Langkawi Directory. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <AccordionItem value={`category-${categoryIndex}`} className="border-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-sm">
                          {category.category}
                        </Badge>
                        <span className="text-lg font-semibold text-gray-900">
                          {category.category} Questions
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <div key={faqIndex} className="border-l-4 border-blue-200 pl-4">
                            <h4 className="font-medium text-gray-900 mb-2">
                              {faq.question}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </CardContent>
              </Card>
            ))}
          </Accordion>
        </div>

        {/* Support Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-600">
              Our support team is here to help you get the most out of Langkawi Directory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <option.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <Button 
                    variant={option.available ? "default" : "outline"} 
                    size="sm"
                    disabled={!option.available}
                    className="w-full"
                  >
                    {option.action}
                  </Button>
                  {!option.available && (
                    <p className="text-xs text-gray-500 mt-2">Coming Soon</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Support Info */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Business Support
                </h4>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Are you a business owner looking to get started? Our business development team 
                can help you set up your listing and maximize your visibility on the platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="px-6">
                  <Users className="h-4 w-4 mr-2" />
                  Business Consultation
                </Button>
                <Button className="px-6">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Get Started Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
