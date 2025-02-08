"use client"

import { motion, useAnimation } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Smartphone,
  Brain,
  Lightbulb,
  Network,
  Users,
  Globe,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { AnimatedNumber } from "./components/animated-number"
import { useEffect } from "react"
import Link from "next/link"

export default function InnovationShowcaseDark() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    })
  }, [controls])

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-4 sm:p-6 md:p-8 overflow-hidden"
      animate={controls}
      style={{
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl relative"
      >
        <Sparkles className="absolute top-0 left-0 text-blue-300 opacity-50 w-12 h-12" />
        <Sparkles className="absolute bottom-0 right-0 text-purple-300 opacity-50 w-12 h-12" />

        <div className="flex justify-between items-center mb-8">
          <Link
            href="/founders"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Founders</span>
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
          Current Power of Innovation: Our Team
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 relative group"
        >
          <Card className="bg-gray-800/80 backdrop-blur-sm border-blue-500 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-blue-300 flex items-center">
                <Lightbulb className="mr-2" /> AI-Augmented Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-6xl sm:text-7xl font-bold text-purple-300 flex items-center">
                <AnimatedNumber value={12} />
                <span className="text-2xl ml-2">Elite Developers</span>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-lg sm:text-xl font-semibold text-blue-300">Unprecedented Efficiency</div>
                <div className="text-sm text-gray-400 max-w-xs">Delivering enterprise solutions faster and smarter</div>
              </div>
            </CardContent>
          </Card>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gray-800/80 backdrop-blur-sm border-blue-500 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-300 text-xl sm:text-2xl">
                  <Code2 className="mr-2" /> Core Technical Arsenal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { icon: Code2, text: "Full-Stack Development: Node.js, PHP experts" },
                    { icon: Smartphone, text: "Mobile Mastery: Native Android/iOS, React Native, Flutter" },
                    { icon: Brain, text: "AI/ML Powerhouse: Data Scientists, ML Engineers" },
                    { icon: Lightbulb, text: "Innovation Team: AI Full-Stack Developers" },
                    { icon: Network, text: "Infrastructure: Network Administration experts" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center text-gray-300 group"
                    >
                      <item.icon className="mr-2 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      <span className="group-hover:text-blue-200 transition-colors duration-300">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gray-800/80 backdrop-blur-sm border-purple-500 h-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-300 text-xl sm:text-2xl">
                  <Users className="mr-2" /> Strategic Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { icon: Globe, text: "Two development agencies in India" },
                    { icon: Globe, text: "One specialized agency in Philippines" },
                    { icon: Lightbulb, text: "Focus on project-specific scaling" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center text-gray-300 group"
                    >
                      <item.icon className="mr-2 h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                      <span className="group-hover:text-purple-200 transition-colors duration-300">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative group"
        >
          <Card className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm border-none overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-white flex items-center">
                <Sparkles className="mr-2" /> Our Unique Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p className="mb-4 text-lg leading-relaxed">
                We've harnessed AI to transform a traditional 22-person operation into a more agile, efficient 12-person
                powerhouse delivering the same enterprise-grade solutions in less time.
              </p>
              <p className="text-lg leading-relaxed font-semibold text-blue-300">
                This isn't just about team size - it's about maximizing human creativity with AI efficiency.
              </p>
            </CardContent>
          </Card>
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300"></div>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link href="/solutions" className="inline-block">
            <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-cyan-300 border border-cyan-300 shadow-md transition-all duration-300 ease-out hover:text-black">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-black">
                Next
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

