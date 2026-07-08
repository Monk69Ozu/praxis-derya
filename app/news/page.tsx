import type { Metadata } from "next"
import Image from "next/image"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedHeading from "@/components/AnimatedHeading"
import DeryaCtaBanner from "@/components/DeryaCtaBanner"

export const metadata: Metadata = {
  title: "Aktuelles – Praxis Derya, Köln",
  description:
    "Neuigkeiten aus der Praxis Derya in Köln: aktuelle Stellenangebote, Ausbildungsmöglichkeiten und Informationen zur Praxisvertretung.",
}

const stellen = [
  {
    titel: "Famulaturstelle für Medizin-Studenten",
    text: "Wir sind „Akademische Lehrpraxis der Universität zu Köln“ und bieten Medizinstudenten in höheren Semestern die Möglichkeit, bei uns die Famulatur durchzuführen.",
    bild: "/images/derya-job-1.webp",
  },
  {
    titel: "Ausbildung zur/zum Medizinischen Fachangestellten (MFA)",
    text: "Wir tragen zum Nachwuchs in der Medizin bei und bieten motivierten und interessierten Bewerbern einen Ausbildungsplatz im Beruf Medizinische/r Fachangestellte/r.",
    bild: "/images/derya-job-2.webp",
  },
  {
    titel: "Arzt/Ärztin in Weiterbildung (Weiterbildungsassistent/in)",
    text: "Wir bieten in Kooperation mit der Ärztekammer und der KVNO die Möglichkeit zur ärztlichen Weiterbildung. Eine 24-monatige Weiterbildungsbefugnis ist vorhanden.",
    bild: "/images/derya-job-3.jpg",
  },
  {
    titel: "Medizinische Fachangestellte",
    text: "Von Zeit zu Zeit haben wir nach Bedarf eine Voll- oder Teilzeitstelle zu besetzen. Sprechen Sie uns gerne an.",
    bild: "/images/derya-job-4.webp",
  },
]

export default function News() {
  return (
    <>
      {/* Hero: reiner Gradient, zentriert */}
      <section className="relative overflow-hidden bg-gradient-to-br from-derya-hero-from to-derya-hero-to">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-16 text-center lg:pt-24">
          <AnimatedHeading as="h1" className="text-5xl text-white sm:text-6xl">Neuigkeiten &amp; Informationen</AnimatedHeading>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/90">
            Bleiben Sie informiert über Stellenangebote, wichtige Rufnummern und Vertretungen in unserer Praxis.
          </p>
        </div>
      </section>

      {/* Stellenangebote */}
      <section id="stellenangebote" className="bg-derya-bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl sm:text-[40px]">Stellenangebote</h2>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-derya-dim">
              Entdecken Sie aktuelle Stellenangebote und Ausbildungsmöglichkeiten – werden Sie Teil unseres
              engagierten Teams!
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stellen.map((s, i) => (
              <AnimatedSection key={s.titel} delay={(i % 3) * 0.08} className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
                <div className="relative h-52">
                  <Image src={s.bild} alt={s.titel} fill sizes="(min-width: 1024px) 370px, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-semibold leading-snug text-derya-ink">{s.titel}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed">{s.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.1} className="mt-8 rounded-xl bg-white px-7 py-6 text-[14.5px] leading-relaxed shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
            Interessiert? Senden Sie Ihre Bewerbung an{" "}
            <a href="mailto:info@praxis-derya.de" className="font-semibold text-derya-primary hover:underline">info@praxis-derya.de</a>{" "}
            oder rufen Sie uns an unter{" "}
            <a href="tel:+49221313533" className="font-semibold text-derya-primary hover:underline">0221 31 35 33</a>.
          </AnimatedSection>
        </div>
      </section>

      <DeryaCtaBanner />

      {/* Praxisvertretung */}
      <section id="vertretung" className="bg-derya-bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl sm:text-[40px]">Praxisvertretung</h2>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-derya-dim">
              Auch während Urlaub oder Krankheit sorgen wir für Ihre medizinische Betreuung durch kompetente
              Vertretungspraxen.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10 space-y-4">
            <div className="rounded-xl bg-white px-7 py-6 text-[14.5px] leading-relaxed shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              Während Urlaub, Krankheit oder der Teilnahme an ärztlichen Fortbildungen lassen wir uns in der Umgebung
              durch eine oder mehrere Hausarztpraxen vertreten, damit die medizinische Versorgung unserer Patienten
              gewährleistet ist.
            </div>
            <div className="rounded-xl bg-white px-7 py-6 text-[14.5px] leading-relaxed shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              Außerhalb der Praxisöffnungszeiten können Sie sich an die nächste Notfallpraxis wenden. Die aktuelle
              Vertretungspraxis erfahren Sie über unsere Anrufbeantworter-Ansage oder den Aushang an der Praxistür.
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
