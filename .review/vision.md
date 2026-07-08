# Design-Vision — Praxis Derya (Arzt-Version)

## Auftrag
1:1-Nachbau der bestehenden Framer-Website https://praxis-derya.framer.website als Next.js-Projekt,
inhaltlich komplett auf einen Allgemeinmediziner angepasst (Homepage-Fokus: Allgemeinmedizin statt Ästhetik).
Design-Sprache des Originals beibehalten: modern, freundlich, medizinisch-vertrauenswürdig.

## Referenz
Original-Screenshots liegen in `.copy/original-*.png`. Design-System in `.copy/BLUEPRINT.md`.

## Design-System (bindend)
- Font: Urbanist (Google), Headings weight 600, ls -0.02em
- Farben: Primär #255BF9; Hero-Gradient #4F73D7→#7B97E8; Footer-Gradient #819FF6→#2E5CE4;
  BG hell #F0F5F6/#ECF1FB; Karten #F4F6F9; Text #161720 / #393941
- Pill-Buttons mit Buchstaben-Stagger-Hover ("Jetzt Termin buchen")
- Karten mit großen Radien (24–28px), weiche Schatten
- Navigation: fixierte Pill-Navbar am UNTEREN Bildschirmrand (Markenzeichen) + Top-Links über Hero
- Sektions-Rhythmus: weiß / hellblau-grau wechselnd, ein blaues Statement-Band auf der Homepage
- Animationen: GSAP ScrollTrigger Fade/Slide-Reveals (once:true), SplitText auf Hero-H1,
  Lenis Smooth Scroll, Testimonial-Marquee (CSS)

## Inhalts-Regeln
- Homepage: NUR Allgemeinmedizin/hausärztliche Sprache, keine "Schönheitsreise"/Ästhetik-Claims
- /services: volles Spektrum inkl. Ästhetische Medizin als letzte Sektion (echtes Angebot)
- Kontaktdaten exakt: Karolingerring 18, 50678 Köln · 0221 31 35 33 · info@praxis-derya.de
- Footer-CTA: "Ihre Gesundheit in besten Händen – Praxis Derya"
- Keine Emojis. Deutsch, Sie-Form, seriös-warm.

## Effekt-Budget
GSAP SplitText (Hero-H1) + ScrollTrigger-Reveals + Lenis Smooth Scroll + CSS-Marquee (Testimonials)
+ Akkordeon (Leistungen Homepage) + Button-Letter-Stagger. NICHT mehr.
