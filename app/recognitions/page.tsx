"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Lightbulb, Star, Zap, ArrowLeft } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"

const timelineData = [
  {
    year: 2017,
    title: "Best Innovative Product Award",
    description: "Received from Ministry of Science & Technology",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "Top 10 Startups",
    description: "Selected by Endeavor Argentina",
    icon: <Star className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "Microsoft's Accelerator Program",
    description: "Selected to join the prestigious program",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "ARCH Grants Pre-selection",
    description: "Pre-selected for US Company Formation",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    year: 2018,
    title: "TechCrunch Disrupt Competition",
    description: "Selected to participate in the competition",
    icon: <Award className="w-8 h-8" />,
  },
  {
    year: 2019,
    title: "Collision Tech Startup Conference",
    description: "Featured at the prestigious tech conference",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    year: 2020,
    title: "TechCrunch Disrupt Competition",
    description: "Selected again for the competition",
    icon: <Award className="w-8 h-8" />,
  },
  {
    year: 2020,
    title: "Collision Tech Startup Conference",
    description: "Featured again at the tech conference",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    year: 2024,
    title: "Kevin O'Leary's Endorsement",
    description: "\"Effective, OnSpot, and 1st Mover's advantage\" - On Shoppias' AI automation initiatives",
    icon: <Star className="w-8 h-8" />,
  },
]

const TimelineItem = ({ item, index }) => {
  const controls = useAnimation()
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={itemRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center justify-center order-1 bg-blue-500 shadow-xl w-12 h-12 rounded-full">
        <div className="text-white">{item.icon}</div>
      </div>
      <Card className="order-1 w-5/12 px-6 py-4 hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-0">
          <h3 className="mb-3 font-bold text-blue-500 text-2xl">{item.year}</h3>
          <h4 className="mb-2 font-semibold text-gray-800 text-xl">{item.title}</h4>
          <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function RecognitionTimeline() {
  const [selectedYear, setSelectedYear] = useState(null)
  const years = [...new Set(timelineData.map((item) => item.year))]

  const filteredData = selectedYear ? timelineData.filter((item) => item.year === selectedYear) : timelineData

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <Link
        href="/associations"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Associations</span>
      </Link>

      <h1 className="text-5xl font-bold mb-12 text-center text-blue-600">
        Leading Through Excellence: Our Recognition Saga
      </h1>

      <div className="mb-12 flex justify-center space-x-2 overflow-x-auto">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year === selectedYear ? null : year)}
            className={`px-6 py-3 rounded-full text-lg font-semibold ${
              year === selectedYear ? "bg-blue-500 text-white" : "bg-white text-blue-500 hover:bg-blue-100"
            } transition-colors duration-300`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-blue-500 h-full border left-1/2"></div>

        {filteredData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Additional Achievements</h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg">
          <li>Featured in BuzzFeed for BlackDoctor.org implementation</li>
          <li>Recognized in American Health Organization Journal for COVID platform</li>
          <li>Press recognition for Schneider Electric's $1M annual savings achievement</li>
        </ul>
      </div>
    </div>
  )
}

