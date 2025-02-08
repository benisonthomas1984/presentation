"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Set initial background
    canvas.style.backgroundColor = "#1E1E1E"

    // Function to resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.fillStyle = "#1E1E1E"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Initial setup
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars = "01"
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(0)
    const glowIntensities: number[] = Array(columns).fill(0)

    // Function to create glow effect
    const setGlowEffect = (intensity: number) => {
      ctx.shadowBlur = intensity
      ctx.shadowColor = "#00FFFF"
    }

    const draw = () => {
      // Semi-transparent background to create fade effect
      ctx.fillStyle = "rgba(30, 30, 30, 0.95)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set base character style
      ctx.font = `bold ${fontSize}px monospace`
      ctx.textAlign = "center"

      // Draw characters
      drops.forEach((drop, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize + fontSize / 2
        const y = drop * fontSize

        // Randomly update glow intensity
        if (Math.random() < 0.05) {
          glowIntensities[i] = Math.random() * 20
        }
        // Gradually reduce glow intensity
        glowIntensities[i] *= 0.95

        // Set glow effect
        setGlowEffect(glowIntensities[i])

        // Vary the opacity and add extra brightness for glowing characters
        const baseOpacity = Math.random() * 0.35
        const glowBoost = glowIntensities[i] / 20 // Normalize to 0-1
        ctx.fillStyle = `rgba(0, 255, 255, ${baseOpacity + glowBoost * 0.65})`

        // Draw the character
        ctx.fillText(char, x, y)

        // Reset drop or move it down
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
          glowIntensities[i] = Math.random() < 0.1 ? 15 : 0 // Chance for new drops to start glowing
        } else {
          drops[i]++
        }
      })

      // Reset shadow after drawing
      ctx.shadowBlur = 0
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 0,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  )
}

export default MatrixRain

