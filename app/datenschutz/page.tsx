import type { Metadata } from "next"
import DeryaRechtsseite, { RechtsBlock } from "@/components/DeryaRechtsseite"

export const metadata: Metadata = {
  title: "Datenschutz – Praxis Derya, Köln",
  description: "Patienteninformation zum Datenschutz der Praxis Derya, Karolingerring 18, 50678 Köln.",
}

export default function Datenschutz() {
  return (
    <DeryaRechtsseite title="Patienteninformation zum Datenschutz">
      <p>
        Sehr geehrte Patientin, sehr geehrter Patient, der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nach
        der EU-Datenschutz-Grundverordnung (DSGVO) sind wir verpflichtet, Sie darüber zu informieren, zu welchem
        Zweck unsere Praxis Daten erhebt, speichert oder weiterleitet. Der Information können Sie auch entnehmen,
        welche Rechte Sie in puncto Datenschutz haben.
      </p>

      <RechtsBlock titel="1. Verantwortlichkeit für die Datenverarbeitung">
        <p>
          Verantwortlich für die Datenverarbeitung ist: Dr. med. Gulnara Derya<br />
          Praxisname: Praxis Derya<br />
          Adresse: Karolingerring 18, 50678 Köln<br />
          Kontaktdaten: Tel.: 0221 – 31 35 33, Fax: 0221 – 31 53 54, E-Mail: info@praxis-derya.de
        </p>
        <p>
          Ansprechpartnerin für alle datenschutzrechtlichen Anliegen ist die oben genannte Verantwortliche:<br />
          Dr. med. Gulnara Derya<br />
          Anschrift: Karolingerring 18, 50678 Köln<br />
          Kontaktdaten: Tel.: 0221 – 31 35 33, Fax: 0221 – 31 53 54, E-Mail: info@praxis-derya.de
        </p>
        <p>
          Eine gesondert benannte Datenschutzbeauftragte bzw. ein gesondert benannter Datenschutzbeauftragter ist
          für die Praxis derzeit nicht bestellt.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="2. Zweck der Datenverarbeitung">
        <p>
          Die Datenverarbeitung erfolgt aufgrund gesetzlicher Vorgaben, um den Behandlungsvertrag zwischen Ihnen und
          Ihrem Arzt und die damit verbundenen Pflichten zu erfüllen.
        </p>
        <p>
          Hierzu verarbeiten wir Ihre personenbezogenen Daten, insbesondere Ihre Gesundheitsdaten. Dazu zählen
          Anamnesen, Diagnosen, Therapievorschläge und Befunde, die wir oder andere Ärzte erheben. Zu diesen Zwecken
          können uns auch andere Ärzte oder Psychotherapeuten, bei denen Sie in Behandlung sind, Daten zur Verfügung
          stellen (z. B. in Arztbriefen).
        </p>
        <p>
          Die Erhebung von Gesundheitsdaten ist Voraussetzung für Ihre Behandlung. Werden die notwendigen
          Informationen nicht bereitgestellt, kann eine sorgfältige Behandlung nicht erfolgen.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="3. Empfänger Ihrer Daten">
        <p>
          Wir übermitteln Ihre personenbezogenen Daten nur dann an Dritte, wenn dies gesetzlich erlaubt ist oder Sie
          eingewilligt haben.
        </p>
        <p>
          Empfänger Ihrer personenbezogenen Daten können vor allem andere Ärzte / Psychotherapeuten, Kassenärztliche
          Vereinigungen, Krankenkassen, der Medizinische Dienst der Krankenversicherung, Ärztekammern und
          privatärztliche Verrechnungsstellen sein.
        </p>
        <p>
          Die Übermittlung erfolgt überwiegend zum Zwecke der Abrechnung der bei Ihnen erbrachten Leistungen sowie
          zur Klärung von medizinischen und sich aus Ihrem Versicherungsverhältnis ergebenden Fragen. Im Einzelfall
          erfolgt die Übermittlung von Daten an weitere berechtigte Empfänger.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="4. Speicherung Ihrer Daten">
        <p>
          Wir bewahren Ihre personenbezogenen Daten nur solange auf, wie dies für die Durchführung der Behandlung
          erforderlich ist.
        </p>
        <p>
          Aufgrund rechtlicher Vorgaben sind wir dazu verpflichtet, diese Daten mindestens 10 Jahre nach Abschluss
          der Behandlung aufzubewahren. Nach anderen Vorschriften können sich längere Aufbewahrungsfristen ergeben,
          zum Beispiel 30 Jahre bei Röntgenaufzeichnungen gemäß § 85 Strahlenschutzgesetz (StrlSchG).
        </p>
      </RechtsBlock>

      <RechtsBlock titel="5. Ihre Rechte">
        <p>
          Sie haben das Recht, über die Sie betreffenden personenbezogenen Daten Auskunft zu erhalten. Auch können
          Sie die Berichtigung unrichtiger Daten verlangen.
        </p>
        <p>
          Darüber hinaus steht Ihnen unter bestimmten Voraussetzungen das Recht auf Löschung von Daten, das Recht auf
          Einschränkung der Datenverarbeitung sowie das Recht auf Datenübertragbarkeit zu.
        </p>
        <p>
          Die Verarbeitung Ihrer Daten erfolgt auf Basis von gesetzlichen Regelungen. Nur in Ausnahmefällen benötigen
          wir Ihr Einverständnis. In diesen Fällen haben Sie das Recht, die Einwilligung für die zukünftige
          Verarbeitung zu widerrufen.
        </p>
        <p>
          Sie haben ferner das Recht, sich bei der zuständigen Aufsichtsbehörde für den Datenschutz zu beschweren,
          wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
        </p>
        <p>
          Zuständige Aufsichtsbehörde: Landesärztekammer Nordrhein (www.aekno.de)<br />
          Zuständige Kassenärztliche Vereinigung: Kassenärztliche Vereinigung Nordrhein (www.kvno.de)<br />
          Berufsordnung der Bundesärztekammer (BÄK): www.bundesaerztekammer.de<br />
          Die Berufsordnung der zuständigen Aufsichtsbehörde finden Sie auf der Website der Landesärztekammer
          Nordrhein: www.aekno.de/aerzte/berufsordnung<br />
          Das Heilberufsgesetz NRW finden Sie unter: www.aekno.de/aerzte/gesetze-verordnungen/heilberufsgesetz-nrw
        </p>
      </RechtsBlock>

      <RechtsBlock titel="6. Rechtliche Grundlagen">
        <p>
          Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Artikel 9 Absatz 2 lit. h) DSGVO in Verbindung mit
          Paragraf 22 Absatz 1 Nr. 1 lit. b) Bundesdatenschutzgesetz. Sollten Sie Fragen haben, können Sie sich gern
          an uns wenden.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="7. Datenverarbeitung auf dieser Website">
        <p>
          <strong>Server-Logdateien:</strong> Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter automatisch
          technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, Browsertyp).
          Diese Daten sind für die Bereitstellung und Sicherheit der Website technisch erforderlich (Art. 6 Abs. 1
          lit. f DSGVO) und werden nicht mit anderen Datenquellen zusammengeführt.
        </p>
        <p>
          <strong>Kontaktformular:</strong> Unser Kontaktformular überträgt keine Daten an einen Server. Beim
          Absenden öffnet sich Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht an unsere
          Praxis-E-Mail-Adresse. Die Verarbeitung der per E-Mail übermittelten Angaben erfolgt zur Bearbeitung Ihrer
          Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
        <p>
          <strong>Google Maps:</strong> Auf der Kontaktseite binden wir eine Karte des Dienstes Google Maps (Google
          Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein. Die Karte wird erst geladen, nachdem
          Sie aktiv zugestimmt haben (Zwei-Klick-Lösung). Erst mit Ihrer Zustimmung werden Daten (u. a. Ihre
          IP-Adresse) an Google übertragen; dabei kann eine Übermittlung in die USA stattfinden. Rechtsgrundlage ist
          Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); sie kann jederzeit durch Neuladen der Seite widerrufen
          werden. Weitere Informationen: policies.google.com/privacy
        </p>
        <p>
          <strong>Cookies und Tracking:</strong> Diese Website verwendet keine Analyse- oder Marketing-Cookies und
          kein Tracking.
        </p>
      </RechtsBlock>
    </DeryaRechtsseite>
  )
}
