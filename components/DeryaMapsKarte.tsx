"use client"
import { useState } from "react"
import Link from "next/link"

/* Zwei-Klick-Lösung: Google Maps lädt erst nach ausdrücklicher Zustimmung (DSGVO) */
export default function DeryaMapsKarte({ src }: { src: string }) {
  const [zugestimmt, setZugestimmt] = useState(false)

  if (zugestimmt) {
    return (
      <iframe
        src={src}
        title="Lage der Praxis Derya auf Google Maps"
        className="h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div className="flex h-[420px] w-full flex-col items-center justify-center gap-4 bg-derya-bg-soft px-8 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-derya-primary" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </span>
      <p className="max-w-md text-[14.5px] leading-relaxed text-derya-body">
        Hier befindet sich eine Karte von Google Maps. Beim Laden werden Daten (u. a. Ihre IP-Adresse) an Google
        übertragen. Details finden Sie in unserer{" "}
        <Link href="/datenschutz" className="font-semibold text-derya-primary hover:underline">Datenschutzerklärung</Link>.
      </p>
      <button
        onClick={() => setZugestimmt(true)}
        className="rounded-lg bg-derya-primary px-7 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-derya-primary-dark"
      >
        Karte laden
      </button>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Karolingerring+18%2C+50678+K%C3%B6ln"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] font-semibold text-derya-dim underline-offset-4 hover:text-derya-primary hover:underline"
      >
        Oder direkt in Google Maps öffnen
      </a>
    </div>
  )
}
