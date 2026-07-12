"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { navigation, praxis } from "@/lib/derya-daten"
import DeryaButton from "@/components/DeryaButton"

/* Klassischer Praxis-Header: oben, weiß, sticky — Logo, Menü, Telefonnummer, Termin-Button */
export default function DeryaNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Praxis Derya – Startseite">
          <Image src="/images/derya-logo.svg" alt="Praxis Derya – Allgemeinmedizinische Facharztpraxis" width={178} height={43} className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors ${
                  pathname === item.href ? "text-derya-primary" : "text-derya-ink hover:text-derya-primary"
                }`}
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-0.5 opacity-60" aria-hidden="true">
                  <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="min-w-52 rounded-2xl border border-black/5 bg-white p-2 shadow-[0_16px_48px_rgba(22,23,32,0.14)]">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block rounded-xl px-3.5 py-2 text-[14px] font-medium text-derya-body transition-colors hover:bg-derya-bg-soft hover:text-derya-primary"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={praxis.telefonHref} className="flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-derya-ink transition-colors hover:text-derya-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" />
            </svg>
            {praxis.telefon}
          </a>
          <DeryaButton href={praxis.doctolib}>Termin online buchen</DeryaButton>
        </div>

        {/* Mobile: Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-derya-primary text-white lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3l12 12M15 3 3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 14" fill="none"><path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>

      {/* Mobile-Menü */}
      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-black/5 bg-white px-6 pb-6 pt-2 lg:hidden">
          {navigation.map((item) => (
            <div key={item.href} className="border-b border-black/5 py-2 last:border-none">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-1 py-1.5 text-[16px] font-semibold text-derya-ink"
              >
                {item.label}
              </Link>
              <div className="flex flex-col">
                {item.items.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setOpen(false)}
                    className="px-1 py-1.5 pl-4 text-[14px] text-derya-body"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a href={praxis.telefonHref} className="text-center text-[15px] font-semibold text-derya-ink">
              Telefon: {praxis.telefon}
            </a>
            <DeryaButton href={praxis.doctolib} className="w-full">Termin online buchen</DeryaButton>
          </div>
        </div>
      )}
    </header>
  )
}
