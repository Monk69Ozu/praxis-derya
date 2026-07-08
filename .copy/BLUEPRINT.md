# Blueprint — Praxis Derya (Arzt-Version, Fokus Allgemeinmedizin)

## Original
- URL: https://praxis-derya.framer.website (Framer)
- Realer Kunde: Dr. med. Gulnara Derya, Fachärztin für Allgemeinmedizin, Karolingerring 18, 50678 Köln
- Seiten: / , /about , /services , /info , /contact , /news , /datenschutz , /impressum

## DESIGN-SYSTEM (extrahiert)
- Primärblau (CTA-Band, Buttons): #255BF9
- Hero-Gradient: ca. #4F73D7 → #5D7EDC → heller nach rechts (blau, weich)
- Footer-Gradient: #819FF6 (oben) → #2E5CE4 (unten)
- BG hell: #F0F5F6 / #ECF1FB (Sektionen), Karten: #FFFFFF bzw. #F4F6F9
- Text dunkel: #161720 (Headings), Body: #393941, gedimmt: #3B3B3B
- Font: Urbanist (Google Font), Headings weight 600
- H1: 72px/72px, ls -2px, weiß im Hero
- H2: 48px/57.6px, ls -1px, #161720
- H3: 36px/50.4px, ls -1px
- Body: 16px/27.2px, weight ~500-600
- Buttons: Pill (voll rund), blau #255BF9 mit weißem Text; sekundär weiß mit dunklem Text; Buchstaben-Stagger-Animation auf Hover ("Jetzt Termin buchen")
- Karten: große Radien (~16-24px), weiche Schatten, helle Flächen
- Layout: Container ~1200px, große Section-Paddings (~100px+)
- Navigation: pill-förmige schwebende Navbar, UNTEN fixiert (sticky bottom!), Logo links, Dropdowns, Such-Icon, blauer CTA-Button
- Animations-Charakter: sanfte Fade/Slide-ins beim Scrollen, Marquee bei Testimonials

## SEITEN + SEKTIONEN
- **/** Hero (Gradient, Portrait-Foto rechts, Avatare + "Tausende zufriedene Patienten") → Warum-Sektion (2-Spalten + 3 Karten mit Foto-Mitte) → Leistungen (Akkordeon/Karten-Grid) → blaues Statement-Band → "So funktioniert es" 3 Schritte → Testimonials-Marquee → Standort & Kontakt (4 Karten) → CTA-Banner (dunkelblaues Bild) 
- **/about** Hero (Bild) → Praxis auf einen Blick (4 Karten) → Ärztin-Banner (dunkel, CTA) → Team-Grid (6 Karten) → Testimonials → Standort & Kontakt → Lehrpraxis-Sektion
- **/services** Hero (Bild) → Kassenleistungen: Impfungen (Liste 2-spaltig) → Laboruntersuchungen (Text + Bild) → Allgemeine Leistungen (4 Karten: Prävention/Therapie/Diagnostik/Weiteres) → IGeL (2-spaltig) → Alternative Medizin (4 Karten) → Ästhetische Medizin (Bild + Liste) → CTA
- **/info** Hero (Bild) → Sprechstunde → Notdienst (116117, 112, Giftnotruf, Apotheken) → PDF-Downloads (3) → Nützliche Links (Grid)
- **/contact** Hero (nur Gradient) → Onlinesprechstunde-Karte → Kontaktformular (Bild links, Felder rechts) → Google Maps → Infokarten (Adresse/Telefon/Öffnungszeiten/E-Mail/Fax)
- **/news** Hero (Gradient) → Stellenangebote (4 Karten mit Bild) → CTA-Banner → Praxisvertretung
- **/datenschutz**, **/impressum**: Textseiten

## ARZT-ANPASSUNG (Auftrag: komplett für Arzt, Homepage-Fokus Allgemeinmedizin)
1. Homepage: ALLE Ästhetik-Formulierungen raus:
   - "Ihre Experten für ästhetische Behandlungen" → "Ihre hausärztliche Facharztpraxis in Köln"
   - "fortschrittliche ästhetische Medizin" → "moderne Allgemeinmedizin und hausärztliche Versorgung"
   - "Maßgeschneiderte Lösungen zur natürlichen Schönheitspflege" → Gesundheits-Fokus
   - Statement-Band: "Von Allgemeinmedizin bis Ästhetik" → "Von Vorsorge bis Therapie – Ihre Hausarztpraxis..."
   - Pre-Footer-CTA "Starten Sie Ihre Schönheitsreise" → "Ihre Gesundheit in besten Händen – Praxis Derya" (alle Seiten)
   - "So funktioniert es – Ihr Weg zur perfekten Behandlung" → "…Ihr Weg zu uns" / Behandlungsablauf
   - "Kundenbewertungen" → "Patientenstimmen"
   - Leistungs-Akkordeon Homepage: Allgemeinmedizin, Vorsorge & Diagnostik, Impfungen, Familienmedizin, Hausbesuche (statt Ästhetik-Punkte)
2. /services: Struktur behalten (Impfungen, Labor, Allgemeine Leistungen, IGeL, Alternative Medizin, Ästhetische Medizin als letzter Punkt bleibt — echtes Angebot)
3. Original-Bugs fixen: "Guy Hawkins"-Platzhalter entfernen; kaputtes Zitat 'Diagnostik & Vorsorge" (Diagnostics...' bereinigen; "Reusemefizinische" → "reisemedizinische"; Rollen-Mismatch Testimonials (Felix Wagner/Lehrerin → Lehrer)
4. Footer/Meta: "Made by WebArs" bleibt; Titel: "Praxis Derya – Hausarztpraxis für Allgemeinmedizin in Köln"

## STACK
Next.js (App Router) + TypeScript + Tailwind v4, Urbanist via next/font/google, GSAP + Lenis (P0-System), CSS-Vars mit Kundennamen (--derya-*), kein generator-Tag.

## ASSETS
public/images/ (39 Dateien, von framerusercontent geladen):
- Hero Home: 3OmXiKRFYWrYCupKAduRMqi4WNg.webp (Ärztin-Portrait, freigestellt)
- Logo: zZUtGvAhjKx4KCSEiePT3tdvWc.svg (Praxis DERYA Logo), Footer-Logo: 5plvpqbKpsfgp1zuPcUCL4Vj5k.png
- Warum-Karte Mitte: Q9ZYUsxFzqyvO2ihguxu2r0cHY.jpg (Arzt+Kind) / buPUhtj1Ptg9TzyLz4UxnvTE.png
- Leistungen-Fotos: egtf5tN4GCDQDculKdtMsa5izfc.webp, mBWyLw0BkKo12u0rRCoSlVvM4T0.webp, KNTRcRTn0cqQpYQeGuc6AArLFg.webp, dH8ceFItZvUfZIUDGfmHeN1w.webp
- CTA-Banner dunkel: O27uWn7jnzTmm3ROo15sF0q9s.png (abstrakt blau)
- About Hero: j4BlgV6v2cZnJliHBSa9kfrjV5I.webp; Team-Avatare: knmWdeZlrjaP2megzfoMwyo5K5s.svg (Gulnara), YnpeSTEeP28dW4WNsNNWHgwrNgc.svg (Osman), ZheeAh92hbNuQsGMCEYoiDvAYjQ.svg + OOwLTf2LyjGNVBOy7BdoiZJDFY.svg (Platzhalter)
- Services Hero: xM4BUCLd9FDuMDgyzjBe1W3kM.webp; Labor: UcsVuIU4dNnw1RdVNR4stX8aLUw.webp; Ästhetik: dgconFWgx0ajkyn3xNlrI0ImiU.webp
- Info Hero: pZuqwz8Q7BhmB5CQIVOwS0K6u2g.webp
- News: RhZiRsPZ4mi6FvNg2GfNw2YxRPA.webp, ZsDFE9UGx1f28bWnfdgGqTZMds.webp, mCXcUq64qgwTpAMhsksWyN2KWHc.jpg, xwIWmGTyP76yCtJCqGxLKMBno8.webp
- Kontakt: UJMRHaLUP5xO3NgUYkjZySkNjxc.jpg (Ärztin), miRfcaZtccMOKZwxnToItIrJU.svg
- Icons: restliche SVGs (Telefon/Uhr/Mail/Pin etc.)
- Maps-Embed: https://maps.google.com/maps?q=Dr.%20med.%20Gulnara%20Derya%2C%20Allgemeinmediziner&z=15&output=embed

## KONTAKTDATEN (aus Original)
Tel +49 0221 31 35 33 · Fax +49 0221 31 53 54 · info@praxis-derya.de · Karolingerring 18, 50678 Köln
Öffnungszeiten: Mo–Fr 9:00–12:00, Mo/Di/Do 15:00–18:00
