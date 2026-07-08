import type { Metadata } from "next"
import DeryaRechtsseite, { RechtsBlock } from "@/components/DeryaRechtsseite"

export const metadata: Metadata = {
  title: "Impressum – Praxis Derya, Köln",
  description: "Impressum der Praxis Derya, Karolingerring 18, 50678 Köln.",
}

export default function Impressum() {
  return (
    <DeryaRechtsseite title="Impressum">
      <RechtsBlock titel="Angaben zur Praxis">
        <p>
          Gulnara Derya<br />
          Karolingerring 18, 50678 Köln<br />
          Tel: 0221 – 31 35 33<br />
          Fax: 0221 – 31 53 54<br />
          E-Mail: info@praxis-derya.de
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Pflichtangaben nach § 5 DDG">
        <p>
          Nach § 5 des Digitale-Dienste-Gesetzes (DDG) sind wir zu folgenden Angaben verpflichtet:
        </p>
        <p>
          Gulnara Derya – Fachärztin für Allgemeinmedizin. Laut gesetzlicher Berufsbezeichnung ist Frau Derya Ärztin.
          Diese Berufsbezeichnung wurde von der Bundesrepublik Deutschland verliehen.
        </p>
        <p>
          Sie finden die Berufsordnung auf der Homepage der für unsere Praxis zuständigen Landesärztekammer
          Nordrhein, Tersteegen Str. 9, 40474 Düsseldorf unter Arztinfo – Berufsordnung. Die zuständige
          Aufsichtsbehörde unserer Praxis ist die Kassenärztliche Vereinigung Nordrhein.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Für den Inhalt verantwortlich">
        <p>Gulnara Derya (Anschrift siehe oben)</p>
      </RechtsBlock>

      <RechtsBlock titel="Haftungsausschluss">
        <p>
          Die Inhalte dieser Seite sind nach bestem Wissen und Kenntnisstand erstellt worden. Sie dienen
          ausschließlich der generellen Information und ersetzen keine qualifizierte Beratung. Sie stellen keine
          Beratung jeglicher Art dar und sollen auch nicht als solche verwendet werden. Dies gilt insbesondere auch
          für Therapieempfehlungen und Angaben über Arzneimittel und deren Dosierung. Wir übernehmen insbesondere
          keine Haftung für Handlungen, die auf Grundlage des auf dieser Seite enthaltenen Informationsmaterials
          unternommen werden.
        </p>
        <p>
          Wir bemühen uns im Rahmen des Zumutbaren, dass die auf dieser Website enthaltenen Informationen und Daten
          richtig und zutreffend sind. Eine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit
          der zur Verfügung gestellten Informationen und Daten ist jedoch ausgeschlossen. Sämtliche Angaben müssen
          vom jeweiligen Anwender im Einzelfall eigenverantwortlich auf ihre Richtigkeit geprüft werden. Des Weiteren
          können die auf dieser Website veröffentlichten Informationen keinesfalls ein Gespräch mit einem
          Arzt/Facharzt Ihres Vertrauens ersetzen. Dies gilt ebenso für alle anderen Websites, auf die mittels eines
          Hyperlinks verwiesen wird.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Links">
        <p>
          Gulnara Derya ist für den Inhalt solcher Websites, die andere Angebote im Internet darstellen und die
          mittels einer solchen Verbindung erreicht werden, ebenfalls nicht verantwortlich. Wenn Sie diesen
          Verknüpfungen folgen, verlassen Sie unser Angebot. Wir übernehmen weder Verantwortung für die Richtigkeit
          der auf den angesteuerten Websites bereitgestellten Informationen, noch machen wir uns diese Inhalte zu
          Eigen oder teilen in jedem Fall die dort vertretenen Meinungen. Das gilt auch für weiterführende Links.
          Diese Erklärung gilt für alle auf unserer Homepage angelegten Links und für alle Inhalte der Seiten, zu
          denen diese Links führen.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Datenschutz">
        <p>
          Eine Weitergabe übermittelter Daten an Dritte erfolgt nicht, hier gelten allgemeine datenschutzrechtliche
          Grundlagen. Es ist jedoch zu beachten, dass eine absolute Sicherheit bei der Datenübertragung im Internet
          nicht gewährleistet werden kann. Wir bitten dies bei der Übermittlung von Daten zu bedenken und von der
          Übermittlung vertraulicher Daten abzusehen. Wir übernehmen keine Haftung bei Schäden durch den Missbrauch
          vertraulicher Daten durch unbefugte Dritte.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Allgemein">
        <p>
          Der Inhalt der Website der Gulnara Derya ist urheberrechtlich geschützt. Die Vervielfältigung von
          Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial bedarf
          unserer vorherigen Zustimmung. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden
          Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile in ihrem
          Inhalt und ihrer Gültigkeit davon unberührt.
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Bildnachweis">
        <p>
          Gulnara Derya (eigene Aufnahmen) · www.freepik.com · www.lummi.ai · unsplash.com · einzelne
          Illustrationsbilder wurden mit KI-Unterstützung erstellt
        </p>
      </RechtsBlock>

      <RechtsBlock titel="Umsetzung und Gestaltung">
        <p>WebArs – webars.at</p>
      </RechtsBlock>
    </DeryaRechtsseite>
  )
}
