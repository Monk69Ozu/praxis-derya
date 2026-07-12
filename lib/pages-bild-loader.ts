/* Nur für den GitHub-Pages-Export: hängt den basePath vor alle Bildpfade */
export default function pagesBildLoader({ src }: { src: string }) {
  return `/praxis-derya${src}`
}
