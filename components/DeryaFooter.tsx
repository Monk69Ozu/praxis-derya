import Link from "next/link"
import Image from "next/image"
import { navigation, praxis } from "@/lib/derya-daten"

/* Ruhiger, dunkler Praxis-Footer mit Kontaktdaten und Sprechzeiten */
export default function DeryaFooter() {
  return (
    <footer className="bg-[#16244f] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Praxis + Kontakt */}
        <div>
          <span className="inline-block rounded-xl bg-white px-3 py-2">
            <Image src="/images/derya-logo.svg" alt="Praxis Derya — Allgemeinmedizinische Facharztpraxis" width={298} height={47} className="h-9 w-auto" />
          </span>
          <address className="mt-5 space-y-1.5 text-[14px] font-medium not-italic leading-relaxed text-white/85">
            <p>{praxis.adresse}</p>
            <p>
              Telefon:{" "}
              <a href={praxis.telefonHref} className="hover:text-white hover:underline">{praxis.telefon}</a>
            </p>
            <p>Fax: {praxis.fax}</p>
            <p>
              <a href={`mailto:${praxis.email}`} className="hover:text-white hover:underline">{praxis.email}</a>
            </p>
          </address>
        </div>

        {/* Sprechzeiten */}
        <div>
          <p className="text-[15px] font-bold">Sprechzeiten</p>
          <dl className="mt-5 space-y-2 text-[14px] text-white/85">
            <div className="flex justify-between gap-4">
              <dt>Mo – Fr</dt>
              <dd>9:00 – 12:00 Uhr</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Mo, Di, Do</dt>
              <dd>15:00 – 18:00 Uhr</dd>
            </div>
            <p className="pt-1 text-[13px] text-white/60">und nach Vereinbarung</p>
          </dl>
          <p className="mt-5 text-[13px] leading-relaxed text-white/60">
            Außerhalb der Sprechzeiten:<br />Bereitschaftsdienst 116 117 · Notruf 112
          </p>
        </div>

        {/* Seiten */}
        <div>
          <p className="text-[15px] font-bold">Praxis</p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 transition-colors hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Leistungen */}
        <div>
          <p className="text-[15px] font-bold">Leistungen</p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            {navigation[1].items.map((sub) => (
              <li key={sub.label}>
                <Link href={sub.href} className="text-white/85 transition-colors hover:text-white hover:underline">
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom-Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Praxis Derya</span>
          <div className="flex items-center gap-4">
            <span>Made by WebArs</span>
            <span aria-hidden="true">|</span>
            <Link href="/datenschutz" className="hover:text-white hover:underline">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-white hover:underline">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
