import Image from "next/image"
import DeryaButton from "@/components/DeryaButton"
import AnimatedHeading from "@/components/AnimatedHeading"

interface Props {
  title: string
  text: string
  image?: string
  center?: boolean
}

/* Unterseiten-Hero: Bild mit dunklem Verlauf oder reiner Blau-Gradient */
export default function DeryaPageHero({ title, text, image, center = false }: Props) {
  return (
    <section className="relative overflow-hidden">
      {image ? (
        <>
          <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-derya-ink/70 via-derya-ink/40 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-derya-hero-from to-derya-hero-to" />
      )}
      <div
        className={`relative mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-20 lg:pb-28 lg:pt-28 ${
          center ? "items-center text-center" : "items-start"
        }`}
      >
        <AnimatedHeading as="h1" className="max-w-2xl text-5xl text-white sm:text-6xl lg:text-7xl lg:leading-[1.02]">
          {title}
        </AnimatedHeading>
        <p className={`mt-6 max-w-xl text-[17px] leading-relaxed text-white/90 ${center ? "mx-auto" : ""}`}>{text}</p>
        <div className="mt-8">
          <DeryaButton href="/contact" variant="light">Termin vereinbaren</DeryaButton>
        </div>
      </div>
    </section>
  )
}
