import type { Metadata } from "next"
import Image from "next/image"
import AnimatedSection from "@/components/AnimatedSection"
import DeryaPageHero from "@/components/DeryaPageHero"

export const metadata: Metadata = {
  title: "Leistungen – Praxis Derya, Allgemeinmedizin in Köln",
  description:
    "Hausärztliche Versorgung, Impfungen, Laboruntersuchungen, IGeL-Leistungen, alternative und ästhetische Medizin – das Leistungsspektrum der Praxis Derya in Köln.",
}

function Badge({ children }: { children: string }) {
  return (
    <div className="flex justify-center">
      <span className="rounded-md bg-derya-bg-soft px-5 py-2 text-[13.5px] font-bold text-derya-primary">{children}</span>
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-[14.5px] leading-relaxed shadow-[0_3px_14px_rgba(22,23,32,0.04)]">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-derya-bg-soft text-derya-primary" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="m2 7.5 3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span>{children}</span>
    </li>
  )
}

const impfungen = [
  "FSME für Zeckenexponierte in Risikogebieten",
  "Meningokokken (bakterielle Hirnhautentzündung) bis 18 Jahre",
  "Hepatitis B bis 18 Jahre und A für chronisch Kranke",
  "Pneumokokken (Lungenentzündung) für alle über 60 Jahre und chronisch Kranke",
  "HPV-Impfung für Mädchen und Jungen von 9–14 Jahren (Nachholimpfung bis 17 Jahre)",
  "Polio (Kinderlähmung) – Auffrischung bis zu 4 Impfungen",
  "Influenza (Virusgrippe) – jährliche Impfung",
  "Tetanus und Diphtherie – Auffrischung alle 10 Jahre",
  "Keuchhusten für alle mit Kontakt zu Neugeborenen",
  "Windpocken für Frauen mit Kinderwunsch",
]

const allgemeineLeistungen = [
  {
    titel: "Prävention",
    punkte: [
      "Gesundheits-Check",
      "Hautkrebsvorsorge ab dem 35. Lebensjahr",
      "Krebsvorsorge bei Männern ab dem 45. Lebensjahr",
      "Impfungen und Impfberatung (gemäß STIKO)",
      "Vorsorgeuntersuchungen bei Kindern & Jugendlichen",
      "Kinder-U2–U10-Untersuchungen",
      "Jugendarbeitsschutzuntersuchungen",
      "Jugendgesundheitsuntersuchungen",
    ],
  },
  {
    titel: "Therapie",
    punkte: [
      "Psychosomatische Grundversorgung",
      "Infusionstherapie",
      "Disease-Management-Programm (DMP):",
      "Diabetes Typ I und II",
      "Asthma",
      "COPD",
      "KHK",
    ],
  },
  {
    titel: "Diagnostik",
    punkte: [
      "Elektrokardiogramm (Ruhe-EKG)",
      "Ergometrie",
      "Geriatrisches Assessment mit Demenztests",
      "Langzeit-Blutdruckmessung",
      "Lungenfunktionsdiagnostik (Spirometrie)",
      "Ultraschall (Sonographie)",
    ],
  },
  {
    titel: "Weiteres",
    punkte: [
      "Hausbesuche",
      "Gerne geben wir Ihnen zu diesen Leistungen detaillierte Patienteninformationen, sodass Sie sich einen umfassenden Eindruck machen können.",
      "Sprechen Sie uns dazu an – wir helfen Ihnen gerne!",
    ],
  },
]

const igel = [
  "Ärztliche Atteste und Gutachten",
  "Blutgruppenbestimmung",
  "Erweiterte Blutuntersuchungen zur Einschätzung des Risikos für Herzinfarkt und Schlaganfall (hs-CRP / LPa / Homocystein)",
  "Wunsch-Laboruntersuchungen, u. a. HIV-Test, PSA-Screening, Bestimmung des Vitamin-Status",
  "PSA (Vorsorgeuntersuchung Prostatakarzinom)",
  "Vitaminsubstitution-Therapie als Injektion oder Infusion",
  "Spezielle Darmkrebsvorsorge im Stuhl (Tumor-M2-PK-Test)",
  "Reisemedizinische Beratung und -Impfungen",
  "Sportmedizinische Untersuchungen (Ergometrie, Lungenfunktionsprüfung etc.)",
  "Tauchtauglichkeitsbescheinigung",
  "Laborchemische Vitaminbestimmungen & Applikation",
  "Versicherungsanfragen",
  "Tauglichkeitsuntersuchungen (Sportbootführerschein, Tauchschein)",
  "Aufbauspritzen (Vitamine B1, B6, B12, Folsäure – stärkt Immunsystem, Nervensystem, Haut und Haare)",
  "LKW-Führerscheinuntersuchung (alle 5 Jahre ärztliche Untersuchung und Gesundheitsbescheinigung)",
  "Patientenverfügung / Vorsorgevollmacht / Betreuungsverfügung (Beratung und gemeinsames Erstellen der Formulare)",
]

const alternativeMedizin = [
  {
    titel: "Ozontherapie",
    text: "Einsatz von „aktivem Sauerstoff“ zur Anregung körpereigener Systeme und Unterstützung von Heilungsprozessen bei vielfältigen Beschwerden wie Migräne, Durchblutungsstörungen und Immunschwäche.",
  },
  {
    titel: "Schröpfen",
    text: "Eine traditionelle Ausleitungstherapie zur Entfernung von Giftstoffen und zur Behandlung von Muskelverspannungen, Rückenschmerzen und Verdauungsbeschwerden.",
  },
  {
    titel: "Blutegeltherapie",
    text: "Eine sanfte Form des Aderlasses, die bei Venenerkrankungen, Gelenkbeschwerden und chronischen Schmerzen angewendet wird.",
  },
  {
    titel: "Eigenbluttherapie",
    text: "Stärkung Ihres Immunsystems durch die Verabreichung Ihres eigenen Blutes zur Bekämpfung von Infektionen, Entzündungen und Allergien.",
  },
]

const aesthetik = [
  { titel: "Faltenbehandlung mit Botox", punkte: ["Glättung von Stirn-, Zornes- und Lachfalten", "Wirkung hält 4–9 Monate an"] },
  { titel: "Faltenunterspritzung mit Hyaluron-Filler", punkte: ["Reduzierung feiner bis tiefer Falten", "Behandlung von Nasolabial-, Mundwinkel- und Zornesfalten"] },
  { titel: "Unterspritzung feiner Falten mittels Mesotherapie", punkte: ["Verfeinert Falten und regeneriert die Haut", "Auffrischung des Gesichts, 6–10 Behandlungen erforderlich"] },
  { titel: "Facelifting mit Faden", punkte: ["Natürliche Straffung des Gesichts ohne OP", "Stabilisierung erschlafften Gewebes", "Geeignet für Gesicht, Hals und Dekolleté"] },
]

export default function Services() {
  return (
    <>
      <DeryaPageHero
        title="Unsere Leistungen"
        text="Von allgemeiner und hausärztlicher Medizin über Vorsorge und Diagnostik bis hin zu individuellen Gesundheitsleistungen – wir bieten Ihnen ein umfassendes Spektrum für Ihre Gesundheit und Ihr Wohlbefinden."
        image="/images/derya-services-hero.webp"
      />

      {/* Impfungen */}
      <section id="impfungen" className="bg-derya-bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Badge>Kassenleistungen</Badge>
          <AnimatedSection className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <h2 className="text-4xl sm:text-[40px]">Impfungen</h2>
            <p className="text-[15px] leading-relaxed">
              Die Ständige Impfkommission (STIKO) empfiehlt in Deutschland verschiedene Schutzimpfungen für
              Erwachsene:
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
              {impfungen.map((i) => (
                <CheckItem key={i}>{i}</CheckItem>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <CheckItem>
                Diese Impfungen sind besonders wichtig, da viele Erwachsene unvollständig geimpft sind oder bestimmte
                Impfstoffe früher nicht verfügbar waren. Zudem nimmt die Immunabwehr mit dem Alter ab, wodurch
                Infektionen schwerwiegender verlaufen können.
              </CheckItem>
              <CheckItem>
                Öffentlich empfohlene Schutzimpfungen werden von den gesetzlichen Krankenkassen übernommen. Zusätzlich
                beraten wir Sie zu Impfungen für Auslandsreisen im Rahmen unserer reisemedizinischen Beratung.
              </CheckItem>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Laboruntersuchungen */}
      <section id="labor" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <h2 className="text-4xl sm:text-[40px]">Labor&shy;untersuchungen</h2>
            <p className="text-[15px] leading-relaxed">
              Je nach Beschwerden des Patienten und Verdachtsdiagnose werden die Blut-, aber auch Stuhlproben täglich
              per Kurier in ein großes Labor geschickt und in kurzer Zeit analysiert.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="space-y-4 rounded-2xl bg-derya-card p-8 text-[14.5px] leading-relaxed">
              <p>
                Als Stoffwechsel werden alle chemischen Vorgänge bezeichnet, die in den Zellen des Körpers stattfinden.
                Die Eingangs- und Endprodukte sowie die Abfallstoffe werden vom Blut durch den Körper transportiert und
                über Urin und Stuhl ausgeschieden.
              </p>
              <p>
                Die Bestimmung der Konzentration verschiedener Stoffe in Blut, Urin und Stuhl gibt daher Aufschluss
                über die chemischen Reaktionen innerhalb der Körperzellen. Auch Bakterien im Blut und die Bestandteile
                des Blutes selbst können Aufschluss über Erkrankungen geben.
              </p>
              <p>
                Allgemeine und ggf. auch spezielle Laboruntersuchungen helfen, die richtige Diagnose zu stellen und den
                Verlauf einer Erkrankung unter der Behandlung zu verfolgen. Die Praxis ist an ein großes Labor
                angeschlossen, in dem alle modernen Laboruntersuchungen durchgeführt werden können.
              </p>
            </div>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
              <Image src="/images/derya-labor.webp" alt="Laborproben zur Analyse" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <CheckItem>Check-up-Ergänzungslabor</CheckItem>
              <CheckItem>PSA-Wert</CheckItem>
              <CheckItem>HIV-Test etc.</CheckItem>
              <CheckItem>Die Laboranforderung erfolgt im Patientengespräch</CheckItem>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Allgemeine Leistungen */}
      <section id="allgemeine-leistungen" className="bg-derya-bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <h2 className="text-4xl sm:text-[40px]">Allgemeine Leistungen</h2>
            <p className="text-[15px] leading-relaxed">
              Wir bieten Ihnen das Spektrum der Allgemeinmedizin und hausärztlichen Versorgung. Nachfolgend eine
              Auswahl unseres Leistungsspektrums:
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {allgemeineLeistungen.map((block, i) => (
              <AnimatedSection key={block.titel} delay={(i % 2) * 0.08} className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
                <h3 className="border-b border-black/5 pb-4 text-[22px] font-semibold text-derya-ink">{block.titel}</h3>
                <ul className="mt-5 space-y-2.5">
                  {block.punkte.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-derya-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IGeL */}
      <section id="igel" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Badge>IGeL-Leistungen</Badge>
          <AnimatedSection className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <h2 className="text-4xl sm:text-[40px]">IGeL-Leistungen</h2>
            <p className="text-[15px] leading-relaxed">
              Manche Beratungen und Behandlungen sind keine Leistungen Ihrer Krankenkasse und müssen deshalb privat
              liquidiert werden. Die Zahlung erfolgt gemäß GOÄ (Gebührenordnung für Ärzte).
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
              {igel.map((i) => (
                <CheckItem key={i}>{i}</CheckItem>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Alternative Medizin */}
      <section id="alternative-medizin" className="bg-derya-bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Badge>Alternative Medizin</Badge>
          <AnimatedSection className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <h2 className="text-4xl sm:text-[40px]">Alternative Medizin</h2>
            <p className="text-[15px] leading-relaxed">
              In unserer Praxis bieten wir eine Reihe bewährter alternativer Behandlungsmethoden an, die die
              Schulmedizin ergänzen und Ihre körpereigenen Heilkräfte aktivieren.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {alternativeMedizin.map((m, i) => (
              <AnimatedSection key={m.titel} delay={(i % 2) * 0.08} className="rounded-2xl bg-white p-8 shadow-[0_6px_24px_rgba(22,23,32,0.05)]">
                <h3 className="text-[20px] font-semibold text-derya-ink">{m.titel}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed">{m.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ästhetische Medizin */}
      <section id="aesthetische-medizin" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Badge>Ästhetische Medizin</Badge>
          <AnimatedSection className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
            <h2 className="text-4xl sm:text-[40px]">Ästhetische Medizin</h2>
            <p className="text-[15px] leading-relaxed">
              Ergänzend zur Allgemeinmedizin bieten wir ausgewählte ästhetische Behandlungen an, die Ihr Wohlbefinden
              steigern. Wir beraten Sie individuell zu den passenden Behandlungsmethoden.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl">
              <Image src="/images/derya-aesthetik-neu.png" alt="Medizinische Hautuntersuchung in der Praxis Derya" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              {aesthetik.map((a) => (
                <div key={a.titel} className="rounded-xl bg-derya-card p-7">
                  <h3 className="text-[18px] font-semibold text-derya-ink">{a.titel}</h3>
                  <ul className="mt-3 space-y-2">
                    {a.punkte.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-derya-primary" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </>
  )
}
