import AnimatedHeading from "@/components/AnimatedHeading"

interface Props {
  title: string
  children: React.ReactNode
}

/* Layout für Impressum / Datenschutz */
export default function DeryaRechtsseite({ title, children }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-derya-hero-from to-derya-hero-to">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-16 text-center lg:pt-20">
          <AnimatedHeading as="h1" className="text-4xl text-white sm:text-5xl">{title}</AnimatedHeading>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="prose-derya mx-auto max-w-3xl space-y-6 px-6 text-[15px] leading-relaxed">{children}</div>
      </section>
    </>
  )
}

export function RechtsBlock({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-[22px] font-semibold text-derya-ink">{titel}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
