import type { Metadata } from "next"
import Image from "next/image"
import AnimatedSection from "@/components/AnimatedSection"
import DeryaPageHero from "@/components/DeryaPageHero"
import DeryaButton from "@/components/DeryaButton"
import DeryaKontaktKarten from "@/components/DeryaKontaktKarten"

export const metadata: Metadata = {
  title: "Über uns – Praxis Derya, Hausarztpraxis in Köln",
  description:
    "Lernen Sie die Praxis Derya kennen: moderne Räumlichkeiten in der Kölner Altstadt-Süd, ein erfahrenes Team und eine patientenzentrierte Philosophie.",
}

const praxisKarten = [
  {
    titel: "Vorstellung der Praxis",
    text: "Unsere Praxis liegt zentral in der Kölner Altstadt-Süd am Karolingerring 18, 50678, in unmittelbarer Nähe zum Chlodwigplatz. Dank einer umfassenden Renovierung nach der Übernahme im Jahr 2018 bieten wir moderne und einladende Räumlichkeiten, in denen sich unsere Patientinnen und Patienten wohlfühlen.",
  },
  {
    titel: "Philosophie und Leitbild",
    text: "Unsere Praxis steht für eine ganzheitliche, patientenzentrierte Medizin. Wir legen großen Wert auf eine vertrauensvolle Arzt-Patienten-Beziehung, moderne Behandlungsmethoden und eine persönliche Betreuung, die sich an den individuellen Bedürfnissen orientiert.",
  },
  {
    titel: "Praxisräume & Ausstattung",
    text: "Unsere modernisierten Praxisräume bieten eine angenehme Atmosphäre und sind mit neuester medizinischer Technik ausgestattet. Wir haben unsere Räumlichkeiten so gestaltet, dass Sie sich vom ersten Moment an gut aufgehoben fühlen.",
  },
  {
    titel: "Anfahrt & Lage",
    text: "Unsere Praxis ist leicht mit öffentlichen Verkehrsmitteln erreichbar. Der Chlodwigplatz bietet eine optimale Anbindung an Bus- und Bahnlinien. Falls Sie mit dem Auto anreisen, stehen Ihnen in der Umgebung verschiedene Parkmöglichkeiten zur Verfügung.",
  },
]

const team = [
  { name: "Frau Dr. med. Gulnara Derya", rolle: "Fachärztin für Allgemeinmedizin", bild: "/images/derya-team-gulnara.png" },
  { name: "Ärztliche Weiterbildung", rolle: "Arzt/Ärztin in Weiterbildung", bild: "/images/derya-team-platzhalter-m.png" },
  { name: "Herr Osman Derya", rolle: "Dipl.-Ing. / Praxismanager", bild: "/images/derya-team-osman.png" },
  { name: "Unser MFA-Team", rolle: "Anmeldung · Labor · Abrechnung", bild: "/images/derya-team-platzhalter-w.png" },
  { name: "Unsere Auszubildenden", rolle: "Ausbildung zur/zum MFA", bild: "/images/derya-team-platzhalter-w.png" },
]

export default function About() {
  return (
    <>
      <DeryaPageHero
        title="Über uns"
        text="Erfahren Sie mehr über unsere Praxis, unser engagiertes Team und unsere Philosophie, die eine patientenzentrierte und moderne Medizin in den Mittelpunkt stellt."
        image="/images/derya-about-hero.webp"
      />

      {/* Praxis auf einen Blick */}
      <section id="praxis" className="bg-white py-24">
        <AnimatedSection className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl sm:text-[44px] sm:leading-[1.25]">
            Ihre Gesundheit im Mittelpunkt – <span className="text-derya-primary">Unsere Praxis auf einen Blick</span>
          </h2>
        </AnimatedSection>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-2">
          {praxisKarten.map((k, i) => (
            <AnimatedSection key={k.titel} delay={i * 0.08} className="flex min-h-[260px] flex-col justify-between rounded-2xl bg-derya-card p-8">
              <h3 className="text-[20px] font-semibold text-derya-ink">{k.titel}</h3>
              <p className="mt-8 text-[14.5px] leading-relaxed">{k.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Ärztin-Vorstellung */}
      <section id="aerztin" className="bg-white px-6 pb-24">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 overflow-hidden rounded-2xl bg-gradient-to-br from-derya-primary to-derya-primary-dark p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-14">
          <div className="relative h-72 overflow-hidden rounded-xl bg-white/10 lg:h-80">
            <Image
              src="/images/derya-team-gulnara.png"
              alt="Dr. med. Gulnara Derya"
              fill
              sizes="(min-width: 1024px) 340px, 100vw"
              className="object-contain object-bottom pt-4"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Dr. med. Gulnara Derya</h2>
            <p className="mt-1 text-[15px] font-semibold text-white/80">Fachärztin für Allgemeinmedizin</p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/90">
              „Mit langjähriger Erfahrung und Leidenschaft für die Medizin bieten mein Team und ich Ihnen eine
              umfassende, einfühlsame Versorgung – von der Vorsorge über Hautkrebs-Screenings bis hin zur
              individuellen Beratung für Ihre Gesundheit. Wir sind für Sie da.“
            </p>
            <div className="mt-8">
              <DeryaButton href="/contact" variant="light">Termin vereinbaren</DeryaButton>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Team */}
      <section id="team" className="bg-derya-bg-light py-24">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="text-4xl sm:text-[44px] sm:leading-[1.2]">Unser Team – Ihre Gesundheit in guten Händen</h2>
          <p className="text-[15.5px] leading-relaxed">
            Lernen Sie unser engagiertes und erfahrenes Team kennen, das täglich mit Fachwissen, Einfühlungsvermögen
            und Teamgeist für Ihre Gesundheit sorgt und Ihnen eine umfassende, individuelle sowie professionelle
            medizinische Betreuung bietet.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <AnimatedSection key={`${m.name}-${i}`} delay={(i % 3) * 0.08} className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
              <div className="relative h-64 bg-gradient-to-b from-derya-bg-soft to-[#dde6f2]">
                <Image src={m.bild} alt={m.name} fill sizes="(min-width: 1024px) 370px, 100vw" className="object-contain object-bottom pt-6" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[17px] font-semibold text-derya-ink">{m.name}</h3>
                <p className="mt-1 text-[13.5px] text-derya-dim">{m.rolle}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <DeryaKontaktKarten />

      {/* Lehrpraxis */}
      <section id="lehrpraxis" className="bg-derya-bg-light py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-[44px] sm:leading-[1.2]">Akademische Lehrpraxis – Zukunft gestalten</h2>
            <p className="mt-6 text-[15px] leading-relaxed">
              Unsere Praxis ist seit 2019 als akademische Lehrpraxis der Universität zu Köln akkreditiert.
              Medizinstudenten haben bei uns die Möglichkeit, wertvolle praktische Erfahrungen im Rahmen ihres
              Studiums zu sammeln – sei es im Praktischen Jahr (PJ) oder durch weitere Ausbildungselemente wie
              Blockpraktika.
            </p>
          </AnimatedSection>
          <div className="flex flex-col gap-5">
            <AnimatedSection className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
              <h3 className="text-[20px] font-semibold text-derya-ink">Unsere Ziele als Lehrpraxis</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed">
                Wir möchten angehende Medizinerinnen und Mediziner praxisnah ausbilden und sie für das Fach
                Allgemeinmedizin begeistern. Dabei legen wir großen Wert auf eine fundierte, patientennahe Lehre und
                moderne Ausbildungsmethoden.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
              <h3 className="text-[20px] font-semibold text-derya-ink">Aus- und Weiterbildung in unserer Praxis</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed">
                <strong>Medizinische Fachangestellte (MFA):</strong> Wir bieten jährlich Ausbildungsplätze mit einem
                Start am 1. September an. Ein Schnuppertag für interessierte Schülerinnen und Schüler ist möglich.
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed">
                <strong>Ärztliche Weiterbildung:</strong> Unsere Praxis verfügt über eine 24-monatige
                Weiterbildungsbefugnis für Allgemeinmedizin. Wir begleiten Ärztinnen und Ärzte auf ihrem Weg zum
                Facharzttitel.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.16} className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
              <h3 className="text-[20px] font-semibold text-derya-ink">Für Studierende</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed">
                Informationen zu den Lehrpraxen der Universität zu Köln, zu Fördermöglichkeiten für Medizinstudierende
                mit Interesse an der Allgemeinmedizin und zum Anforderungskatalog für akademische Lehrpraxen erhalten
                Sie beim{" "}
                <a
                  href="https://allgemeinmedizin.uk-koeln.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-derya-primary hover:underline"
                >
                  Institut für Allgemeinmedizin der Uniklinik Köln
                </a>{" "}
                – oder sprechen Sie uns direkt an.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
