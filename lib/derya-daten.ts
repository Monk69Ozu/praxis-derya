export const praxis = {
  name: "Praxis Derya",
  aerztin: "Dr. med. Gulnara Derya",
  fach: "Fachärztin für Allgemeinmedizin",
  adresse: "Karolingerring 18, 50678 Köln",
  telefon: "0221 31 35 33",
  telefonHref: "tel:+49221313533",
  fax: "0221 31 53 54",
  email: "info@praxis-derya.de",
  oeffnungszeiten: ["Mo–Fr: 9:00 – 12:00", "Mo, Di, Do: 15:00 – 18:00"],
  mapsEmbed: "https://maps.google.com/maps?q=Dr.%20med.%20Gulnara%20Derya%2C%20Allgemeinmediziner&z=15&output=embed",
}

export const navigation = [
  {
    label: "Über uns", href: "/about",
    items: [
      { label: "Praxis", href: "/about#praxis" },
      { label: "Ärztin", href: "/about#aerztin" },
      { label: "Team", href: "/about#team" },
      { label: "Lehrpraxis", href: "/about#lehrpraxis" },
    ],
  },
  {
    label: "Leistungen", href: "/services",
    items: [
      { label: "Allgemeine Leistungen", href: "/services#allgemeine-leistungen" },
      { label: "Impfungen", href: "/services#impfungen" },
      { label: "Laboruntersuchungen", href: "/services#labor" },
      { label: "IGeL-Leistungen", href: "/services#igel" },
      { label: "Alternative Medizin", href: "/services#alternative-medizin" },
      { label: "Ästhetische Medizin", href: "/services#aesthetische-medizin" },
    ],
  },
  {
    label: "Patienteninfo", href: "/info",
    items: [
      { label: "Sprechstunde", href: "/info#sprechstunde" },
      { label: "Notdienst", href: "/info#notdienst" },
      { label: "Download", href: "/info#download" },
      { label: "Nützliche Links", href: "/info#links" },
    ],
  },
  {
    label: "Kontakt", href: "/contact",
    items: [
      { label: "Onlinesprechstunde", href: "/contact#onlinesprechstunde" },
      { label: "Kontaktformular", href: "/contact#kontaktformular" },
      { label: "Lage/Anfahrt", href: "/contact#anfahrt" },
    ],
  },
  {
    label: "Aktuelles", href: "/news",
    items: [
      { label: "Stellenangebote", href: "/news#stellenangebote" },
      { label: "Wichtige Rufnummern", href: "/info#notdienst" },
      { label: "Vertretung", href: "/news#vertretung" },
    ],
  },
]

