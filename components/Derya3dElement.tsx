import Image from "next/image"

interface Props {
  bild: string
  breite: number
  className?: string
  delay?: number
}

/* Freigestelltes 3D-Element: schwebt sanft, dezenter radialer Glow dahinter.
   Rein dekorativ — für Screenreader unsichtbar. */
export default function Derya3dElement({ bild, breite, className = "", delay = 0 }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true" style={{ width: breite }}>
      <div className="relative">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(29,78,158,0.18) 0%, rgba(29,78,158,0.06) 45%, transparent 70%)" }}
        />
        <div className="derya-schwebt" style={{ animationDelay: `${delay}s` }}>
          <Image
            src={bild}
            alt=""
            width={breite}
            height={breite}
            sizes={`${breite}px`}
            className="h-auto w-full drop-shadow-[0_18px_30px_rgba(22,35,63,0.18)]"
          />
        </div>
      </div>
    </div>
  )
}
