"use client"
import { useEffect } from "react"
import { initLenisWithGSAP } from "@/lib/gsap"

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const cleanup = initLenisWithGSAP()
    return cleanup
  }, [])
  return <>{children}</>
}
