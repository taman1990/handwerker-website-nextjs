import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section>
      {/* Anchor for navbar */}
      <div id="ueber-uns">
        <Container>

          {/* Section header */}
          <div className="mb-10 max-w-[640px] sm:mb-12 md:mb-14">
            <h2 className="text-[26px] font-semibold text-text-main sm:text-[30px] md:text-[32px]">
              Über uns
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
              Vertrauen entsteht durch Erfahrung, Zuverlässigkeit
              und ehrliche Arbeit. Das sagen unsere Kunden.
            </p>
          </div>

          {/* Main testimonial */}
          <div className="mx-auto max-w-[760px] rounded-lg border border-border bg-bg-muted p-6 sm:p-8 md:p-10">
            <p className="text-[16px] leading-relaxed text-text-main sm:text-[17px] md:text-[18px]">
              „Sehr zuverlässiger Service. Schneller Termin,
              saubere Arbeit und faire Preise. Klare Empfehlung.“
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 sm:mt-8 sm:pt-6">
              <div>
                <p className="text-[14px] font-semibold text-text-main">
                  Markus B.
                </p>
                <p className="text-[13px] text-text-muted">
                  Regensburg
                </p>
              </div>

              <div className="text-[13px] text-text-muted">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>

          {/* Secondary testimonials */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:mt-14 md:grid-cols-3">

            <div className="rounded-lg border border-border bg-bg-main p-5 sm:p-6">
              <p className="text-[14px] leading-relaxed text-text-main">
                „Pünktlich, freundlich und kompetent.“
              </p>
              <p className="mt-3 text-[13px] text-text-muted">
                – Sabine K.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-bg-main p-5 sm:p-6">
              <p className="text-[14px] leading-relaxed text-text-main">
                „Problem schnell erkannt und sauber gelöst.“
              </p>
              <p className="mt-3 text-[13px] text-text-muted">
                – Thomas R.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-bg-main p-5 sm:p-6">
              <p className="text-[14px] leading-relaxed text-text-main">
                „Sehr gute Beratung, gerne wieder.“
              </p>
              <p className="mt-3 text-[13px] text-text-muted">
                – Andrea L.
              </p>
            </div>

          </div>

        </Container>
      </div>
    </Section>
  );
}
