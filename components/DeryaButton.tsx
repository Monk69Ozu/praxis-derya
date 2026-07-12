import Link from "next/link"

interface Props {
  href?: string
  children: string
  variant?: "primary" | "light" | "dark"
  className?: string
}

/* Schlichter Pill-Button mit ruhigem Farb-Hover; externe Ziele (z. B. Doctolib) öffnen im neuen Tab */
export default function DeryaButton({ href = "/contact", children, variant = "primary", className = "" }: Props) {
  const palette =
    variant === "primary"
      ? "bg-derya-primary text-white hover:bg-derya-primary-dark"
      : variant === "light"
        ? "bg-white text-derya-ink hover:bg-derya-bg-soft"
        : "bg-derya-ink text-white hover:bg-black"

  const cls = `inline-flex items-center justify-center whitespace-nowrap rounded-lg px-7 py-3.5 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-derya-primary/50 ${palette} ${className}`

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}
