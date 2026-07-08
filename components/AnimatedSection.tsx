"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"

interface Props { children: React.ReactNode; className?: string; delay?: number; id?: string }

export default function AnimatedSection({ children, className, delay = 0, id }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true } }
    )
  }, { scope: ref })
  return <div ref={ref} className={className} id={id}>{children}</div>
}
