import type { Metadata } from "next"
import AnimatedSection from "@/components/AnimatedSection"
import DeryaPageHero from "@/components/DeryaPageHero"
import DeryaButton from "@/components/DeryaButton"
import Derya3dElement from "@/components/Derya3dElement"
import { praxis } from "@/lib/derya-daten"

export const metadata: Metadata = {
  title: "Patienteninfo – Praxis Derya, Köln",
  description:
    "Sprechstundenzeiten, ärztlicher Notdienst (116 117), Patientenformulare über Doctolib und nützliche Links für Patienten der Praxis Derya in Köln.",
}

const links = [
  { label: "Bundesärztekammer", href: "https://www.bundesaerztekammer.de" },
  { label: "Ärztekammer Nordrhein", href: "https://www.aekno.de" },
  { label: "Kassenärztliche Vereinigung", href: "https://www.kvno.de" },
  { label: "Uniklinik Köln", href: "https://www.uk-koeln.de" },
  { label: "Robert Koch Institut", href: "https://www.rki.de" },
  { label: "Centrum Reisemedizin", href: "https://www.crm.de" },
  { label: "Infomaterialien zu diversen gesundheitlichen Themen", href: "https://www.patienten-information.de" },
  { label: "Die Notdienstapotheke in Ihrer Nähe", href: "https://www.aponet.de/apotheke/notdienstsuche" },
  { label: "Notdienstpraxen in Ihrer Nähe finden (116117)", href: "https://www.116117.de/de/notdienst.php" },
]

function InfoCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl bg-derya-card px-7 py-6 text-[14.5px] leading-relaxed">{children}</div>
}

export default function Info() {
  return (
    <>
      <DeryaPageHero
        title="Patienteninfo"
        text="Erfahren Sie alles über unsere Sprechstunden, den medizinischen Notdienst und hilfreiche Links für Ihre Gesundheit."
        image="/images/derya-info-hero.webp"
      />

      {/* Sprechstunde */}
      <section id="sprechstunde" className="bg-white py-20">
        <div className="relative mx-auto max-w-6xl px-6">
          <Derya3dElement bild="/images/3d/derya-3d-herz.png" breite={120} className="absolute bottom-4 right-12 z-10 hidden lg:block" delay={0.8} />
          <AnimatedSection className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl sm:text-[40px]">Sprechstunde</h2>
            <p className="text-[13.5px] text-derya-dim">Individuelle Beratung &amp; Behandlung für Ihre Gesundheit</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10 space-y-4">
            <InfoCard>
              Wir bieten Offene-, Termin- und Online-Sprechstunden an. Ihren Termin buchen Sie am einfachsten online
              über{" "}
              <a href={praxis.doctolib} target="_blank" rel="noopener noreferrer" className="font-semibold text-derya-primary hover:underline">
                Doctolib
              </a>{" "}
              oder telefonisch unter 0221 31 35 33.
            </InfoCard>
            <InfoCard>Es ist zu erwähnen, dass die offene Sprechstunde eventuell mit längeren Wartezeiten verbunden ist.</InfoCard>
            <InfoCard>
              <strong>Wir haben folgende Sprechstundenzeiten für unsere Patienten:</strong>
              {praxis.oeffnungszeiten.map((z) => (
                <span key={z.tage} className="mt-2 block">{z.tage}: {z.zeiten}</span>
              ))}
              <span className="block">und nach Vereinbarung</span>
            </InfoCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Notdienst */}
      <section id="notdienst" className="bg-derya-bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl sm:text-[40px]">Notdienst</h2>
            <p className="text-[13.5px] text-derya-dim">Schnelle Hilfe im Notfall – Wichtige Telefonnummern auf einen Blick</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10 space-y-4">
            <div className="rounded-xl bg-white px-7 py-6 shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              <h3 className="text-[17px] font-semibold text-derya-ink">Ärztlicher Notfalldienst: bundeseinheitliche Rufnummer</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed">
                (Mo./Di./Do. ab 19 Uhr – Mi./Fr. ab 14 Uhr – Sa./So. ab 7 Uhr)<br />
                Wer nachts oder am Wochenende dringend einen (Haus-)Arzt braucht, merkt sich nur die Telefonnummer
                116 117 (ohne Vorwahl). Die einheitliche Nummer gilt bundesweit, funktioniert ohne Vorwahl und der
                Anruf ist für Patienten kostenlos.
              </p>
              <p className="mt-3 text-[15px] font-bold text-derya-primary">Telefonnummer 116 117 (ohne Vorwahl)</p>
            </div>
            <div className="rounded-xl bg-white px-7 py-6 shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              <h3 className="text-[17px] font-semibold text-derya-ink">Notrufnummer für Notarzt, Rettungsdienst und Feuerwehr</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed">
                Der Bereitschaftsdienst ist nicht zu verwechseln mit dem Rettungsdienst, der in lebensbedrohlichen
                Fällen Hilfe leistet. Bei Notfällen wie Herzinfarkt, Schlaganfall und Unfällen alarmieren Sie den
                Rettungsdienst unter der Notrufnummer 112.
              </p>
              <p className="mt-3 text-[15px] font-bold text-derya-primary">Telefonnummer 112 (ohne Vorwahl)</p>
            </div>
            <div className="rounded-xl bg-white px-7 py-6 shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              <h3 className="text-[17px] font-semibold text-derya-ink">Giftnotrufzentralen (Giftnotruf)</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed">
                Die Giftnotruf- oder Giftinformationszentralen sind für akute Vergiftungsfälle 24 Stunden erreichbar.
                Die nächste Giftnotrufzentrale liegt in Bonn und ist rund um die Uhr zu erreichen unter der
                Telefonnummer 0228 / 19 240.
              </p>
            </div>
            <div className="rounded-xl bg-white px-7 py-6 shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              <h3 className="text-[17px] font-semibold text-derya-ink">Apothekennotdienst: www.ApoNet.de/Notdienst</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed">
                Tipp: Auch Tages- und Wochenzeitungen aus Ihrer Region bieten die kompletten Apotheken-Notdienste für
                den Erscheinungstag oder die ganze Woche an.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Patientenformulare — werden über Doctolib bereitgestellt */}
      <section id="formulare" className="bg-derya-bg-soft py-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl sm:text-[40px]">Patientenformulare</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10">
            <div className="rounded-xl bg-white px-7 py-10 text-center shadow-[0_4px_18px_rgba(22,23,32,0.04)]">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-derya-bg-soft text-derya-primary" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" /><path d="M14 2v6h6" /><path d="m9 15 2 2 4-4" />
                </svg>
              </span>
              <h3 className="mt-4 text-[19px] font-semibold text-derya-ink">Bequem digital über Doctolib</h3>
              <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed">
                Patientenaufnahme, Anamnese- und Einwilligungsbögen erhalten Sie direkt im Rahmen Ihrer
                Online-Terminbuchung über Doctolib – oder jederzeit persönlich an unserer Anmeldung.
              </p>
              <div className="mt-6 flex justify-center">
                <DeryaButton href={praxis.doctolib}>Termin online buchen</DeryaButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nützliche Links */}
      <section id="links" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl sm:text-[40px]">Einige nützliche Links</h2>
            <p className="text-[13.5px] text-derya-dim">Wichtige Informationen und hilfreiche Webseiten auf einen Blick</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-derya-card px-6 py-5 text-[15px] font-semibold text-derya-ink transition-colors hover:bg-derya-bg-soft hover:text-derya-primary focus-visible:ring-2 focus-visible:ring-derya-primary/50"
              >
                {l.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-derya-primary" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
