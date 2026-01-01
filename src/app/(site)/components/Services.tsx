import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section muted>
      {/* Anchor for navbar */}
      <div id="leistungen">
        <Container>

          {/* Section header */}
          <div className="mb-10 max-w-[640px] sm:mb-12 md:mb-14">
            <h2 className="text-[26px] font-semibold text-text-main sm:text-[30px] md:text-[32px]">
              Unsere Leistungen
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
              Zuverlässige Elektroarbeiten für Privat- und Geschäftskunden
              in Regensburg und Umgebung.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">

            {/* Card 1 */}
            <div className="group rounded-lg border border-border bg-bg-main p-6 sm:p-7 md:p-8 transition hover:border-primary/40">
              <div className="mb-4 text-[22px] sm:text-[24px]">🔌</div>
              <h3 className="text-[17px] font-semibold text-text-main">
                Elektroinstallation
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                Fachgerechte Planung und Installation moderner
                Elektroanlagen für Neubauten und Sanierungen.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-lg border border-border bg-bg-main p-6 sm:p-7 md:p-8 transition hover:border-primary/40">
              <div className="mb-4 text-[22px] sm:text-[24px]">🛠</div>
              <h3 className="text-[17px] font-semibold text-text-main">
                Reparaturen & Wartung
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                Schnelle Fehlerdiagnose, Reparaturen und regelmäßige
                Wartung Ihrer elektrischen Anlagen.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-lg border border-border bg-bg-main p-6 sm:p-7 md:p-8 transition hover:border-primary/40">
              <div className="mb-4 text-[22px] sm:text-[24px]">🏠</div>
              <h3 className="text-[17px] font-semibold text-text-main">
                Smart Home Lösungen
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                Intelligente Steuerung von Licht, Heizung und Sicherheit
                für mehr Komfort und Effizienz.
              </p>
            </div>

          </div>
        </Container>
      </div>
    </Section>
  );
}
