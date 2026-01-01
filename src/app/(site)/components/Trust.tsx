import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Trust() {
  return (
    <Section>
      <Container>

        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-16">

          {/* Left: Text */}
          <div>
            <h2 className="text-[26px] font-semibold text-text-main sm:text-[30px] md:text-[32px]">
              Meisterbetrieb mit Verantwortung
            </h2>

            <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
              Als eingetragener Meisterbetrieb stehen wir für fachgerechte
              Ausführung, transparente Beratung und zuverlässigen Service
              in Regensburg und Umgebung.
            </p>

            <ul className="mt-6 space-y-3 text-[14px] text-text-main sm:text-[15px]">
              <li className="flex items-start gap-3">
                <span className="mt-[2px]">✔</span>
                <span>Meisterbetrieb nach Handwerksordnung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[2px]">✔</span>
                <span>Über 10 Jahre Berufserfahrung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[2px]">✔</span>
                <span>Regional tätig in Regensburg</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[2px]">✔</span>
                <span>Faire Preise & transparente Angebote</span>
              </li>
            </ul>
          </div>

          {/* Right: Trust Card */}
          <div className="rounded-lg border border-border bg-bg-muted p-6 sm:p-7 md:p-8">
            <div className="space-y-5">

              <div>
                <p className="text-[13px] text-text-muted">
                  Erreichbarkeit
                </p>
                <p className="text-[17px] font-semibold text-text-main">
                  ☎ 0176 0000000
                </p>
              </div>

              <div>
                <p className="text-[13px] text-text-muted">
                  Einsatzgebiet
                </p>
                <p className="text-[15px] text-text-main">
                  Regensburg & Umgebung
                </p>
              </div>

              <div>
                <p className="text-[13px] text-text-muted">
                  Bewertung
                </p>
                <p className="text-[15px] text-text-main">
                  ⭐ 4.8 / 5.0 (Google)
                </p>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}
