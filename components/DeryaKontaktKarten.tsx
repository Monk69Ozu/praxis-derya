import AnimatedSection from "@/components/AnimatedSection"
import { praxis } from "@/lib/derya-daten"

const iconCls = "flex h-11 w-11 items-center justify-center rounded-full bg-derya-bg-soft text-derya-primary"

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}

/* Standort & Kontakt: 4 Info-Karten */
export default function DeryaKontaktKarten() {
  return (
    <section className="bg-white py-24">
      <AnimatedSection className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl sm:text-[44px]">Standort &amp; Kontakt</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.15} className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-derya-card p-7">
          <span className={iconCls}><IconPhone /></span>
          <h3 className="mt-5 text-[17px] font-semibold text-derya-ink">Telefon &amp; Fax</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed">
            <a href={praxis.telefonHref} className="block hover:text-derya-primary">{praxis.telefon}</a>
            <span className="block text-derya-dim">Fax: {praxis.fax}</span>
          </p>
        </div>
        <div className="rounded-xl bg-derya-card p-7">
          <span className={iconCls}><IconClock /></span>
          <h3 className="mt-5 text-[17px] font-semibold text-derya-ink">Öffnungszeiten</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed">
            {praxis.oeffnungszeiten.map((z) => (
              <span key={z} className="block">{z}</span>
            ))}
          </p>
        </div>
        <div className="rounded-xl bg-derya-card p-7">
          <span className={iconCls}><IconMail /></span>
          <h3 className="mt-5 text-[17px] font-semibold text-derya-ink">E-Mail</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed">
            <a href={`mailto:${praxis.email}`} className="hover:text-derya-primary">{praxis.email}</a>
          </p>
        </div>
        <div className="rounded-xl bg-derya-card p-7">
          <span className={iconCls}><IconPin /></span>
          <h3 className="mt-5 text-[17px] font-semibold text-derya-ink">Adresse</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed">{praxis.adresse}</p>
        </div>
      </AnimatedSection>
    </section>
  )
}
