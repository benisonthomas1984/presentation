"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mark%20Ruffalo.jpg-OSb79pQeeIB6HGjhmNBNSQZMzlCKNd.jpeg",
    name: "Mark Ruffalo",
    alt: "Person at Tribeca Film Festival",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bernie%20Sanders.jpg-MgSWk2rINGlxG89VmR6eYjQWPTvaUP.jpeg",
    name: "Bernie Sanders",
    alt: "Person at speaking engagement",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bill%20Clinton.jpg-x7kzv7j5W6AAEkRETZE95qxVQsj7TZ.jpeg",
    name: "Bill Clinton",
    alt: "Person at Clinton Global Initiative",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reggie%20Ware.jpg-ADaHGPygabc5cQIyyASmLVUQHPAns7.jpeg",
    name: "Reggie Ware",
    alt: "Two people in front of floral wall",
  },
]

export default function SpecialAssociations() {
  return (
    <div className="min-h-screen bg-charcoal text-gray-200 p-4 bg-[url('/placeholder.svg?height=32&width=32')] bg-repeat">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <h1 className="text-5xl font-extrabold text-center mb-8 py-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
          Special Associations
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
          {/* Video Section */}
          <Card className="overflow-hidden bg-gray-800 shadow-glow">
            <CardContent className="p-2 h-full relative">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/cFWAHmQJnnM?si=nG6jktU4EjsV97R0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </CardContent>
          </Card>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden bg-gray-800 shadow-glow">
                <CardContent className="p-2 h-full relative">
                  <div className="relative h-full w-full">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center">
                      {image.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/recognitions" className="inline-block">
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

