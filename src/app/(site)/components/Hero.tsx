import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Text */}
          <div>
            <h1 className="text-[32px] font-semibold leading-tight text-text-main sm:text-[38px] md:text-[44px]">
              Elektroinstallationen in Regensburg
            </h1>

            <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-text-muted sm:text-[17px] md:text-[18px]">
              Zuverlässiger Meisterbetrieb für Elektroinstallationen,
              Reparaturen und moderne Smart-Home-Lösungen.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#kontakt"
                className="inline-flex h-[48px] w-full items-center justify-center rounded-md bg-primary px-6 text-[14px] font-semibold text-bg-main sm:w-auto"
              >
                Angebot anfragen
              </a>

              <span className="text-[14px] text-text-muted">
                ⭐ 4.8 Google Bewertung
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-text-muted">
              <span>🕒 24h Service</span>
              <span>✔ Zertifiziert</span>
              <span>📍 Regensburg</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[220px] w-full rounded-xl bg-bg-muted p-2 sm:h-[280px] md:h-[360px]">
            <div className="h-full w-full overflow-hidden rounded-lg border border-border bg-bg-main">
              <img
                src="/electrician.png"
                alt="Elektroinstallation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
