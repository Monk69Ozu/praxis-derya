"use client"
import { useState } from "react"
import { praxis } from "@/lib/derya-daten"

const inputCls =
  "w-full rounded-xl border border-black/5 bg-derya-bg-light px-4 py-3 text-[14.5px] text-derya-ink placeholder:text-derya-dim focus:border-derya-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-derya-primary/40"

/* Kontaktformular ohne Server: öffnet das E-Mail-Programm mit vorbefüllter Nachricht an die Praxis */
export default function DeryaKontaktFormular() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-xl bg-derya-bg-soft p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-derya-primary text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12.5 5 5L20 6.5" /></svg>
        </span>
        <h3 className="mt-5 text-[20px] font-semibold text-derya-ink">Ihr E-Mail-Programm wurde geöffnet</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed">
          Bitte senden Sie die vorbereitete E-Mail ab, damit Ihre Anfrage bei uns ankommt. Falls sich kein
          E-Mail-Programm geöffnet hat, schreiben Sie uns direkt an{" "}
          <a href={`mailto:${praxis.email}`} className="font-semibold text-derya-primary hover:underline">{praxis.email}</a>{" "}
          oder rufen Sie uns an: <a href={praxis.telefonHref} className="font-semibold text-derya-primary hover:underline">{praxis.telefon}</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const daten = new FormData(e.currentTarget)
        const zeilen = [
          `Name: ${daten.get("name") || "-"}`,
          `E-Mail: ${daten.get("email") || "-"}`,
          `Telefon: ${daten.get("telefon") || "-"}`,
          `Bevorzugtes Datum: ${daten.get("datum") || "-"}`,
          "",
          `${daten.get("nachricht") || ""}`,
        ]
        const betreff = encodeURIComponent("Terminanfrage über die Website")
        const inhalt = encodeURIComponent(zeilen.join("\n"))
        window.location.href = `mailto:${praxis.email}?subject=${betreff}&body=${inhalt}`
        setSent(true)
      }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold text-derya-ink">Name</label>
        <input id="name" name="name" required placeholder="Ihr Name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-derya-ink">E-Mail</label>
        <input id="email" name="email" type="email" required placeholder="Ihre E-Mail-Adresse" className={inputCls} />
      </div>
      <div>
        <label htmlFor="telefon" className="mb-1.5 block text-[13px] font-semibold text-derya-ink">Telefon</label>
        <input id="telefon" name="telefon" type="tel" placeholder="0221 1234567" className={inputCls} />
      </div>
      <div>
        <label htmlFor="datum" className="mb-1.5 block text-[13px] font-semibold text-derya-ink">Bevorzugtes Datum</label>
        <input id="datum" name="datum" type="date" className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="nachricht" className="mb-1.5 block text-[13px] font-semibold text-derya-ink">Nachricht (optional)</label>
        <textarea id="nachricht" name="nachricht" rows={4} placeholder="Ihre Nachricht an uns" className={inputCls} />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-derya-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-derya-primary-dark sm:col-span-2"
      >
        Anfrage per E-Mail senden
      </button>
      <p className="text-[12.5px] leading-relaxed text-derya-dim sm:col-span-2">
        Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Nachricht an {praxis.email} – es werden
        keine Daten über diese Website übertragen.
      </p>
    </form>
  )
}
