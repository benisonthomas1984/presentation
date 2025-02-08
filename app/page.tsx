"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MatrixRain from "./components/MatrixRain"
import { ArrowRight } from "lucide-react"
import { ScrollToTop } from "./components/ScrollToTop"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      {isMounted && <MatrixRain />}
      <main className="relative flex min-h-screen flex-col items-center justify-start px-4 pt-[10vh] sm:pt-[15vh] text-white">
        <div className="text-center space-y-6 animate-fade-in relative z-10">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 mx-auto mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shoppias%20White%20copy-BWlHSQPCNBBvAJb5Z5WxtpPT0dD5uk.png"
              alt="Shoppias Labs Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Shoppias Labs</h1>
          <p className="text-base sm:text-lg md:text-xl font-light italic max-w-2xl mx-auto">
            The Future is Not Written, <span className="font-medium animate-glow text-[#00FFFF]">We Code It</span>.
          </p>
          <div className="mt-8">
            <Link href="/intro" passHref>
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
      </main>
    </div>
  )
}

