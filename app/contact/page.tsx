import type { Metadata } from "next"
import Image from "next/image"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedHeading from "@/components/AnimatedHeading"
import DeryaButton from "@/components/DeryaButton"
import DeryaKontaktFormular from "@/components/DeryaKontaktFormular"
import DeryaMapsKarte from "@/components/DeryaMapsKarte"
import { praxis } from "@/lib/derya-daten"

export const metadata: Metadata = {
  title: "Kontakt – Praxis Derya, Köln",
  description:
    "Kontaktieren Sie die Praxis Derya in Köln: Kontaktformular, Onlinesprechstunde, Telefon 0221 31 35 33, Karolingerring 18, 50678 Köln.",
}

export default function Contact() {
  return (
    <>
      {/* Hero: reiner Gradient, zentriert */}
      <section className="relative overflow-hidden bg-gradient-to-br from-derya-hero-from to-derya-hero-to">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-16 text-center lg:pt-24">
          <AnimatedHeading as="h1" className="text-5xl text-white sm:text-6xl">Kontakt</AnimatedHeading>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/90">
            Nehmen Sie unkompliziert Kontakt mit uns auf – per Formular, Telefon oder persönlich in unserer Praxis.
          </p>
        </div>
      </section>

      {/* Onlinesprechstunde */}
      <section id="onlinesprechstunde" className="bg-derya-bg-light py-20">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-[40px] sm:leading-[1.2]">Onlinesprechstunde – Medizinische Beratung von überall</h2>
            <p className="mt-5 text-[15px] leading-relaxed">
              Nutzen Sie unsere digitale Sprechstunde für eine schnelle und unkomplizierte ärztliche Beratung – bequem
              von Zuhause oder unterwegs.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 rounded-2xl bg-white p-10 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
            <h3 className="text-[20px] font-semibold text-derya-ink">Ihre Arztsprechstunde online</h3>
            <p className="text-[14.5px] leading-relaxed">
              Vereinbaren Sie einen Termin für die Onlinesprechstunde – wir beraten Sie per Video, sicher und
              persönlich.
            </p>
            <DeryaButton href="/contact#kontaktformular">Termin für Onlinesprechstunde</DeryaButton>
          </div>
        </AnimatedSection>
      </section>

      {/* Kontaktformular */}
      <section id="kontaktformular" className="bg-white py-20">
        <AnimatedSection className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-2xl bg-derya-bg-soft p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-xl">
            <Image
              src="/images/derya-empfang.png"
              alt="Empfangsbereich der Praxis Derya"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-derya-ink/85 to-transparent p-6 pt-14">
              <span className="rounded-md bg-white px-4 py-1.5 text-[12.5px] font-bold text-derya-ink">
                Kontaktieren Sie uns ganz einfach
              </span>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/95">
                Haben Sie Fragen oder möchten einen Termin vereinbaren? Nutzen Sie unser Kontaktformular – wir melden
                uns schnellstmöglich bei Ihnen!
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 sm:p-8">
            <DeryaKontaktFormular />
          </div>
        </AnimatedSection>
      </section>

      {/* Karte + Anfahrt */}
      <section id="anfahrt" className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="overflow-hidden rounded-2xl shadow-[0_6px_24px_rgba(22,23,32,0.06)]">
            <DeryaMapsKarte src={praxis.mapsEmbed} />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-5 rounded-xl bg-derya-card px-7 py-6">
            <h2 className="text-[20px] font-semibold text-derya-ink">{praxis.adresse}</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed">
              Unsere Praxis befindet sich zentral gelegen in der Kölner Altstadt-Süd am Karolingerring 18, am
              Chlodwigplatz. Sie ist mit ÖPNV sehr gut zu erreichen.
            </p>
          </AnimatedSection>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <AnimatedSection className="rounded-xl bg-derya-card px-7 py-6">
              <h3 className="text-[16px] font-semibold text-derya-ink">Telefon</h3>
              <a href={praxis.telefonHref} className="mt-1 block text-[14.5px] hover:text-derya-primary">{praxis.telefon}</a>
            </AnimatedSection>
            <AnimatedSection delay={0.05} className="rounded-xl bg-derya-card px-7 py-6">
              <h3 className="text-[16px] font-semibold text-derya-ink">Öffnungszeiten</h3>
              <p className="mt-1 text-[14.5px]">
                {praxis.oeffnungszeiten.map((z) => (
                  <span key={z} className="block">{z}</span>
                ))}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl bg-derya-card px-7 py-6">
              <h3 className="text-[16px] font-semibold text-derya-ink">E-Mail</h3>
              <a href={`mailto:${praxis.email}`} className="mt-1 block text-[14.5px] hover:text-derya-primary">{praxis.email}</a>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="rounded-xl bg-derya-card px-7 py-6">
              <h3 className="text-[16px] font-semibold text-derya-ink">Fax</h3>
              <p className="mt-1 text-[14.5px]">{praxis.fax}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
