"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Award, Globe, Clock, GraduationCap, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollToTop } from "../components/ScrollToTop"

const founders = [
  {
    name: "Benison Thomas",
    title: "CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HS.jpg-TU3Av5j4ilGllfniMSrZ3ZGiBHSeTI.jpeg",
    bio: (
      <>
        A visionary technologist and <span className="font-bold text-[#FFF078]">Harvard-certified AI strategist</span>,
        Benison Thomas has pioneered enterprise solutions that revolutionized industries across 16 countries. His
        innovative approach to technology integration has earned global recognition and transformed how businesses
        operate in the digital age.
      </>
    ),
    achievements: [
      {
        icon: Globe,
        text: "Led $2M government infrastructure project in West Africa, completing implementation across 10 countries",
      },
      { icon: Award, text: "Developed automation systems for Schneider Electric, generating $1M annual savings" },
      {
        icon: Clock,
        text: "Engineered COVID analysis platform in 3 months (compared to industry standard of 12 months)",
      },
      { icon: GraduationCap, text: "Executive certification in AI from Harvard Business School and MIT" },
    ],
  },
  {
    name: "Vijay Kumar Gupta",
    title: "COO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VJ.jpg-4rU6hP5DIgvdIuci9Kwuh7Rchl2eT0.jpeg",
    bio: "A strategic operations leader with deep expertise in enterprise scaling, Vijay Kumar Gupta transforms business visions into market-ready solutions. His operational excellence has been instrumental in establishing Shoppias as a trusted technology partner for global industry leaders.",
    achievements: [
      { icon: Globe, text: "Architected operational frameworks for 500+ enterprise implementations" },
      { icon: Award, text: "Spearheaded company's expansion across 34 countries" },
      { icon: Clock, text: "Optimized delivery processes reducing project timelines by 60%" },
      { icon: GraduationCap, text: "Masters in Business Administration with focus on global operations" },
    ],
  },
]

export default function EnhancedFoundersShowcase() {
  const [activeFounder, setActiveFounder] = useState(0)

  return (
    <div className="bg-gray-900 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <ScrollToTop />
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">Meet Our Founders</h1>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shoppias%20White%20copy-x8MTZUpKdTMed9fLI3wCMOmV5Jonnp.png"
            alt="Shoppias Logo"
            width={200}
            height={50}
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="flex justify-between items-center mb-8">
          <Link
            href="/intro"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Intro</span>
          </Link>
        </div>

        <Tabs value={activeFounder.toString()} onValueChange={(value) => setActiveFounder(Number.parseInt(value))}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {founders.map((founder, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="text-lg py-2 text-gray-400 data-[state=active]:text-[#00FFFF] data-[state=active]:bg-gray-800"
              >
                {founder.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {founders.map((founder, index) => (
              <TabsContent key={index} value={index.toString()}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="md:w-1/3">
                          <div className="relative group">
                            <Image
                              src={founder.image || "/placeholder.svg"}
                              alt={founder.name}
                              width={400}
                              height={400}
                              className="rounded-lg transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-[#00FFFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                          </div>
                          <h2 className="text-3xl font-bold mt-4 text-[#00FFFF]">{founder.name}</h2>
                          <p className="text-xl text-gray-400">{founder.title}</p>
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-lg mb-6 leading-relaxed text-gray-300">
                            {typeof founder.bio === "string" ? founder.bio : founder.bio}
                          </p>
                          <h3 className="font-semibold text-xl mb-4 text-white">Key Achievements:</h3>
                          <ul className="space-y-4">
                            {founder.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <achievement.icon className="w-6 h-6 mr-3 text-[#00FFFF] flex-shrink-0 mt-1" />
                                <span className="text-gray-300">{achievement.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        <div className="mt-12 flex justify-center">
          <Link href="/team" passHref>
            <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-cyan-300 border border-cyan-300 shadow-md transition-all duration-300 ease-out hover:text-black">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-black">
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

