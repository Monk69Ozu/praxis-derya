"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"

interface Props { as?: "h1" | "h2" | "h3"; children: string; className?: string }

/* Ruhiges Einblenden der ganzen Überschrift — kein Wort-/Buchstaben-Effekt */
export default function AnimatedHeading({ as: Tag = "h1", children, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.from(el, {
      opacity: 0, y: 24,
      duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    })
  })
  return <Tag ref={ref} className={className}>{children}</Tag>
}
