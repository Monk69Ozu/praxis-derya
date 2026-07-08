import Image from "next/image"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedHeading from "@/components/AnimatedHeading"
import DeryaButton from "@/components/DeryaButton"
import DeryaLeistungenAkkordeon from "@/components/DeryaLeistungenAkkordeon"
import DeryaKontaktKarten from "@/components/DeryaKontaktKarten"
import { praxis } from "@/lib/derya-daten"

const iconCls = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-derya-bg-soft text-derya-primary"

const fakten = [
  {
    titel: "Kassenleistungen & IGeL",
    text: "Hausärztliche Versorgung als Kassenleistung, ergänzt um individuelle Gesundheitsleistungen nach GOÄ.",
    icon: <path d="M9 12h6M12 9v6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    titel: "Hausbesuche",
    text: "Wenn Sie nicht in die Praxis kommen können, besuchen wir Sie zu Hause.",
    icon: <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />,
  },
  {
    titel: "Akademische Lehrpraxis",
    text: "Seit 2019 Lehrpraxis der Universität zu Köln mit ärztlicher Weiterbildungsbefugnis.",
    icon: <path d="m12 3 10 5-10 5L2 8l10-5ZM6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />,
  },
  {
    titel: "Moderne Diagnostik",
    text: "EKG, Ergometrie, Ultraschall, Lungenfunktion und Langzeit-Blutdruckmessung in der Praxis.",
    icon: <path d="M22 12h-4l-3 8-6-16-3 8H2" />,
  },
  {
    titel: "Impfungen & Reisemedizin",
    text: "Alle STIKO-Impfungen sowie reisemedizinische Beratung für Ihren Auslandsaufenthalt.",
    icon: <path d="m18 2 4 4-9.5 9.5-4-4L18 2ZM8 12l-5.5 5.5a2.1 2.1 0 0 0 3 3L11 15" />,
  },
  {
    titel: "Zentral am Chlodwigplatz",
    text: "Karolingerring 18, Kölner Altstadt-Süd – sehr gut mit Bus und Bahn erreichbar.",
    icon: <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero: editorial — Serifen-Headline mit Kursiv-Akzent, Bogen-Bild, Praxis-Infoleiste */}
      <section className="relative overflow-hidden bg-gradient-to-b from-derya-bg-soft to-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-end gap-12 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-20">
            <div className="pb-4 lg:pb-14">
              <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.18em] text-derya-primary">
                <span className="h-px w-10 bg-derya-primary" aria-hidden="true" />
                Allgemeinmedizin in Köln
              </p>
              <AnimatedHeading as="h1" className="mt-6 max-w-xl text-[44px] leading-[1.12] sm:text-[56px] lg:text-[62px]">
                Ihre Hausarztpraxis am Chlodwigplatz
              </AnimatedHeading>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed">
                Dr. med. Gulnara Derya und ihr Team betreuen Sie und Ihre Familie – persönlich, gründlich und auf
                dem neuesten Stand der Medizin.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <DeryaButton href="/contact">Termin vereinbaren</DeryaButton>
                <Link
                  href="/services"
                  className="group flex items-center gap-2 text-[15px] font-semibold text-derya-ink transition-colors hover:text-derya-primary"
                >
                  Unsere Leistungen
                  <span className="h-px w-6 bg-current transition-all group-hover:w-9" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-10 text-[14px] text-derya-dim">
                Kassen- und Privatpatienten · Akademische Lehrpraxis der Universität zu Köln
              </p>
            </div>
            <div className="relative pt-6 lg:pt-0">
              <div className="relative h-[440px] overflow-hidden rounded-t-[240px] rounded-b-xl lg:h-[540px]">
                <Image
                  src="/images/derya-hero-neu.png"
                  alt="Ärztin im Gespräch mit einer Patientin in der Praxis Derya"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Praxis-Infoleiste */}
          <div className="relative z-10 -mt-px grid grid-cols-1 divide-y divide-black/5 rounded-xl border border-black/5 bg-white shadow-[0_8px_28px_rgba(26,34,51,0.06)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:-mt-12">
            <div className="px-7 py-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-derya-dim">Sprechzeiten</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-derya-ink">
                Mo – Fr: 9:00 – 12:00 Uhr<br />Mo, Di, Do: 15:00 – 18:00 Uhr
              </p>
            </div>
            <div className="px-7 py-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-derya-dim">Termin &amp; Kontakt</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-derya-ink">
                <a href={praxis.telefonHref} className="font-semibold hover:text-derya-primary">{praxis.telefon}</a>
                <br />
                <a href={`mailto:${praxis.email}`} className="hover:text-derya-primary">{praxis.email}</a>
              </p>
            </div>
            <div className="px-7 py-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-derya-dim">Adresse</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-derya-ink">
                Karolingerring 18<br />50678 Köln, direkt am Chlodwigplatz
              </p>
            </div>
          </div>
        </div>
        <div className="pb-16 lg:pb-20" />
      </section>

      {/* Praxis auf einen Blick: Fakten statt Werbeversprechen */}
      <section className="bg-white py-24">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-4xl sm:text-[44px] sm:leading-[1.2]">Ihre Praxis auf einen Blick</h2>
          <p className="text-[15.5px] leading-relaxed">
            Wir sind Ihre hausärztliche Anlaufstelle in der Kölner Altstadt-Süd – von der Vorsorge über die
            Diagnostik bis zur Behandlung akuter und chronischer Erkrankungen.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection className="relative min-h-[420px] overflow-hidden rounded-2xl">
            <Image
              src="/images/derya-familienmedizin.png"
              alt="Ärztin untersucht ein Kind in der Praxis"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fakten.map((f, i) => (
              <AnimatedSection key={f.titel} delay={(i % 2) * 0.06} className="rounded-xl bg-derya-card p-6">
                <span className={iconCls} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-[16.5px] font-semibold text-derya-ink">{f.titel}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed">{f.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Leistungen */}
      <section className="bg-derya-bg-light py-24">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="text-4xl sm:text-[44px]">Unsere Leistungen</h2>
          <p className="text-[15.5px] leading-relaxed">
            Wir bieten das gesamte Spektrum der hausärztlichen Versorgung – von der Prävention über die Diagnostik
            bis zur Therapie. Einen vollständigen Überblick finden Sie auf der Leistungsseite.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15} className="mx-auto mt-14 max-w-6xl px-6">
          <DeryaLeistungenAkkordeon />
        </AnimatedSection>
      </section>

      {/* Ihre Ärztin: ruhiges Zitat-Band ohne Bild-Doppelung */}
      <section className="bg-white py-24">
        <AnimatedSection className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-derya-bg-soft p-10 lg:p-14">
            <p className="text-[13.5px] font-bold uppercase tracking-wider text-derya-primary">Ihre Ärztin</p>
            <blockquote className="mt-5 max-w-3xl text-[22px] font-medium leading-relaxed text-derya-ink sm:text-[26px]">
              „Mit langjähriger Erfahrung und Leidenschaft für die Medizin bieten mein Team und ich Ihnen eine
              umfassende, einfühlsame Versorgung – von der Vorsorge bis zur individuellen Beratung. Wir sind für Sie
              da.“
            </blockquote>
            <p className="mt-6 text-[15px] font-semibold text-derya-ink">Dr. med. Gulnara Derya</p>
            <p className="text-[13.5px] text-derya-dim">Fachärztin für Allgemeinmedizin</p>
            <div className="mt-8">
              <DeryaButton href="/about">Praxis &amp; Team kennenlernen</DeryaButton>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Sprechzeiten + Notfall */}
      <section className="bg-derya-bg-light py-24">
        <AnimatedSection className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl sm:text-[44px]">Sprechzeiten &amp; Notfall</h2>
        </AnimatedSection>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-6 lg:grid-cols-3">
          <AnimatedSection className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
            <h3 className="text-[20px] font-semibold text-derya-ink">Sprechzeiten</h3>
            <dl className="mt-5 space-y-3 text-[14.5px]">
              <div className="flex justify-between border-b border-black/5 pb-3">
                <dt className="font-semibold text-derya-ink">Mo – Fr</dt>
                <dd>9:00 – 12:00 Uhr</dd>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-3">
                <dt className="font-semibold text-derya-ink">Mo, Di, Do</dt>
                <dd>15:00 – 18:00 Uhr</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold text-derya-ink">und nach Vereinbarung</dt>
                <dd />
              </div>
            </dl>
            <p className="mt-5 text-[13.5px] leading-relaxed text-derya-dim">
              Offene-, Termin- und Online-Sprechstunde – Details unter{" "}
              <Link href="/info#sprechstunde" className="font-semibold text-derya-primary hover:underline">Patienteninfo</Link>.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
            <h3 className="text-[20px] font-semibold text-derya-ink">Ärztlicher Bereitschaftsdienst</h3>
            <p className="mt-5 text-[14.5px] leading-relaxed">
              Außerhalb unserer Sprechzeiten erreichen Sie den ärztlichen Bereitschaftsdienst bundesweit und
              kostenlos unter:
            </p>
            <p className="mt-4 text-[28px] font-semibold text-derya-primary">116 117</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-derya-dim">
              Weitere wichtige Rufnummern finden Sie unter{" "}
              <Link href="/info#notdienst" className="font-semibold text-derya-primary hover:underline">Notdienst</Link>.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.16} className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
            <h3 className="text-[20px] font-semibold text-derya-ink">Im Notfall</h3>
            <p className="mt-5 text-[14.5px] leading-relaxed">
              Bei lebensbedrohlichen Notfällen – etwa Herzinfarkt, Schlaganfall oder schweren Unfällen – alarmieren
              Sie sofort den Rettungsdienst:
            </p>
            <p className="mt-4 text-[28px] font-semibold text-derya-primary">112</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-derya-dim">
              Giftnotruf Bonn (rund um die Uhr): 0228 / 19 240
            </p>
          </AnimatedSection>
        </div>
      </section>

      <DeryaKontaktKarten />

      {/* Eine ruhige Terminleiste */}
      <section className="bg-white px-6 pb-24">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-derya-bg-soft lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Image
              src="/images/derya-empfang.png"
              alt="Empfangsbereich der Praxis Derya"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 p-10 lg:p-14">
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Wir sind für Sie da.</h2>
            <p className="max-w-md text-[15px] leading-relaxed">
              Vereinbaren Sie Ihren Termin telefonisch unter{" "}
              <a href={praxis.telefonHref} className="font-semibold text-derya-ink hover:text-derya-primary">{praxis.telefon}</a>{" "}
              oder über unser Kontaktformular. Sie finden uns am Karolingerring 18, direkt am Chlodwigplatz.
            </p>
            <DeryaButton href="/contact">Termin vereinbaren</DeryaButton>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
