import Image from "next/image"
import AnimatedSection from "@/components/AnimatedSection"
import DeryaButton from "@/components/DeryaButton"
import { praxis } from "@/lib/derya-daten"

/* Ruhige Terminleiste mit Praxisfoto (statt Abstrakt-Kunst-Banner) */
export default function DeryaCtaBanner() {
  return (
    <section className="bg-white px-6 py-16">
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
          <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Vereinbaren Sie Ihren Termin</h2>
          <p className="max-w-md text-[15px] leading-relaxed">
            Bequem online über Doctolib oder telefonisch unter{" "}
            <a href={praxis.telefonHref} className="font-semibold text-derya-ink hover:text-derya-primary">{praxis.telefon}</a>{" "}
            – wir sind für Sie und Ihre Familie da.
          </p>
          <DeryaButton href={praxis.doctolib}>Termin online buchen</DeryaButton>
        </div>
      </AnimatedSection>
    </section>
  )
}
