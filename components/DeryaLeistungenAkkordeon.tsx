"use client"
import { useState } from "react"
import Image from "next/image"

const leistungen = [
  {
    titel: "Diagnostik & Vorsorge",
    text: "Durch präzise diagnostische Verfahren und umfassende Vorsorgeuntersuchungen legen wir den Grundstein für Ihre langfristige Gesundheit. Wir nutzen modernste Techniken wie EKG, Ultraschall und Lungenfunktionstests, um Erkrankungen frühzeitig zu erkennen.",
    bild: "/images/derya-leistung-3.webp",
  },
  {
    titel: "Impfungen",
    text: "Impfungen sind ein essenzieller Baustein Ihrer Gesundheitsvorsorge. Wir bieten eine umfassende Palette an empfohlenen Schutzimpfungen für alle Altersgruppen – von Standardimpfungen bis hin zu speziellen Präventionsmaßnahmen für Sie und Ihre Familie.",
    bild: "/images/derya-hero-praxis.png",
  },
  {
    titel: "Familienmedizin & Hausbesuche",
    text: "Als Hausarztpraxis betreuen wir die ganze Familie – von Vorsorgeuntersuchungen bei Kindern und Jugendlichen bis zur geriatrischen Versorgung. Wenn Sie nicht zu uns kommen können, kommen wir im Rahmen von Hausbesuchen zu Ihnen.",
    bild: "/images/derya-leistung-4.webp",
  },
  {
    titel: "IGeL-Leistungen",
    text: "Wir bieten Ihnen ein umfassendes Spektrum zusätzlicher Gesundheitsleistungen für Ihre persönliche Vorsorge, erweiterte Diagnostik und spezielle Bedarfe – von der Herz-Kreislauf-Risikobewertung bis zu Eignungsuntersuchungen und Vitalisierungstherapien.",
    bild: "/images/derya-labor.webp",
  },
  {
    titel: "Alternative Medizin",
    text: "Bewährte alternative Behandlungsmethoden wie Schröpfen, Eigenblut- und Ozontherapie ergänzen bei uns die Schulmedizin und aktivieren Ihre körpereigenen Heilkräfte – etwa bei Verspannungen, Durchblutungsstörungen und Immunschwäche.",
    bild: "/images/derya-hautuntersuchung.png",
  },
]

/* Aufklappbare Leistungsliste mit wechselndem Bild */
export default function DeryaLeistungenAkkordeon() {
  const [active, setActive] = useState(0)

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
      <div className="relative hidden h-[480px] overflow-hidden rounded-2xl lg:block">
        {leistungen.map((l, i) => (
          <Image
            key={l.titel}
            src={l.bild}
            alt={l.titel}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {leistungen.map((l, i) => (
          <div key={l.titel} className={`rounded-xl transition-colors ${i === active ? "bg-white shadow-[0_6px_24px_rgba(22,23,32,0.06)]" : "bg-derya-card"}`}>
            <button
              onClick={() => setActive(i)}
              className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-derya-primary/50 rounded-xl"
              aria-expanded={i === active}
              aria-controls={`leistung-panel-${i}`}
            >
              <span className="text-[18px] font-semibold text-derya-ink">{l.titel}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-transform ${
                  i === active ? "rotate-45 bg-derya-primary" : "bg-derya-ink/80"
                }`}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div id={`leistung-panel-${i}`} className={`grid transition-all duration-300 ${i === active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-derya-body">{l.text}</p>
                <div className="relative mx-6 mb-6 h-48 overflow-hidden rounded-2xl lg:hidden">
                  <Image src={l.bild} alt={l.titel} fill sizes="100vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
