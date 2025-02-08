"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight, Activity, Vote, Zap, Heart, ShoppingCart, Car, ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatedHero } from "./components/AnimatedHero"
import Link from "next/link"

const projects = [
  {
    title: "Healthcare Revolution",
    subtitle: "COVID-19 Analysis Platform (2020)",
    icon: <Activity className="w-10 h-10 text-blue-500" />,
    highlights: [
      "Completed in 3 months vs. industry standard 12 months",
      "Partnered with American & European health organizations",
      "Featured in American Health Organizational Journal",
      "Real-time patient analysis and tracking system",
      "Deployed across multiple clinical laboratories",
    ],
    color: "bg-blue-50",
    category: "healthcare",
  },
  {
    title: "Political Tech Innovation",
    subtitle: "Proxy Vote Platform",
    icon: <Vote className="w-10 h-10 text-green-500" />,
    highlights: [
      "Commissioned by Bernie Sanders, Mark Ruffalo, and Matthew Cooke",
      "Handled millions of anonymous votes securely",
      "Advanced ID verification system",
      "Real-time data classification by state",
      "Set new standards for digital voting security",
    ],
    color: "bg-green-50",
    category: "politics",
  },
  {
    title: "Enterprise Transformation",
    subtitle: "Schneider Electric Automation",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    highlights: [
      "Saved $1 million annually in operational costs",
      "Complete paperless transformation",
      "WHO-compliant document management",
      "Featured in international press releases",
      "Industry benchmark for digital transformation",
    ],
    color: "bg-yellow-50",
    category: "enterprise",
  },
  {
    title: "Digital Health Leadership",
    subtitle: "BlackDoctor.org Platform",
    icon: <Heart className="w-10 h-10 text-red-500" />,
    highlights: [
      "America's largest health blog (4M+ visitors)",
      "AI-powered content management system",
      "Automated content optimization",
      "Pre-AI natural language processing",
      "Featured in BuzzFeed",
    ],
    color: "bg-red-50",
    category: "healthcare",
  },
  {
    title: "E-commerce Excellence",
    subtitle: "Centrogar Digital Transformation",
    icon: <ShoppingCart className="w-10 h-10 text-purple-500" />,
    highlights: [
      "Argentina's largest retailer",
      "Seamless integration of traditional and online systems",
      "AI-powered chatbot implementation",
      "Real-time inventory management",
      "Zero downtime deployment",
    ],
    color: "bg-purple-50",
    category: "e-commerce",
  },
  {
    title: "Transportation Innovation",
    subtitle: "Primera Clase Platform",
    icon: <Car className="w-10 h-10 text-indigo-500" />,
    highlights: [
      "Manages 3000+ daily trips",
      "Full automation of dispatch operations",
      "Real-time fleet management",
      "AI-powered route optimization",
      "Competitive advantage against Uber",
    ],
    color: "bg-indigo-50",
    category: "transportation",
  },
]

const categories = ["all", "healthcare", "politics", "enterprise", "e-commerce", "transportation"]

export default function SignatureProjects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-100">
      <AnimatedHero />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/global-reach"
            className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Global Reach</span>
          </Link>
        </div>
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${project.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    {project.icon}
                    <Badge variant="secondary" className="text-xs">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl mb-8">Let's create your success story together.</p>
          <Button size="lg">Schedule a Consultation</Button>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/associations" className="inline-block">
            <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-cyan-600 border border-cyan-600 shadow-md transition-all duration-300 ease-out hover:text-white">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-white">
                Next
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

