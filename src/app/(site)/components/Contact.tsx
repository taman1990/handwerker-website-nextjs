import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section muted>
      {/* Anchor target for "Angebot anfragen" */}
      <div id="kontakt">
        <Container>

          {/* Section header */}
          <div className="mb-10 max-w-[640px] sm:mb-12 md:mb-14">
            <h2 className="text-[26px] font-semibold text-text-main sm:text-[30px] md:text-[32px]">
              Kontakt aufnehmen
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
              Haben Sie Fragen oder benötigen Sie ein Angebot?
              Kontaktieren Sie uns – wir melden uns zeitnah zurück.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-16">

            {/* Contact Form */}
            <form className="space-y-5 rounded-lg border border-border bg-bg-main p-6 sm:p-7 md:p-8">

              {/* Name */}
              <div>
                <label className="block text-[14px] font-medium text-text-main">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="mt-2 h-[44px] w-full rounded-md border border-border bg-bg-main px-4 text-[14px] text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[14px] font-medium text-text-main">
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="name@email.de"
                  className="mt-2 h-[44px] w-full rounded-md border border-border bg-bg-main px-4 text-[14px] text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[14px] font-medium text-text-main">
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  placeholder="Worum geht es?"
                  className="mt-2 w-full rounded-md border border-border bg-bg-main px-4 py-3 text-[14px] text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="mt-2 h-[48px] w-full rounded-md bg-primary text-[14px] font-semibold text-bg-main transition hover:opacity-90"
              >
                Anfrage senden
              </button>

              <p className="text-[12px] text-text-muted">
                Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                verwendet.
              </p>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="rounded-lg border border-border bg-bg-main p-5 sm:p-6">
                <p className="text-[13px] text-text-muted">Telefon</p>
                <p className="mt-1 text-[17px] font-semibold text-text-main">
                  ☎ 0176 0000000
                </p>
              </div>

              <div className="rounded-lg border border-border bg-bg-main p-5 sm:p-6">
                <p className="text-[13px] text-text-muted">Einsatzgebiet</p>
                <p className="mt-1 text-[15px] text-text-main">
                  Regensburg & Umgebung
                </p>
              </div>

              <div className="rounded-lg border border-border bg-bg-main p-5 sm:p-6">
                <p className="text-[13px] text-text-muted">Öffnungszeiten</p>
                <p className="mt-1 text-[15px] text-text-main">
                  Mo–Fr, 08:00 – 18:00
                </p>
              </div>

              {/* Map placeholder */}
              <div className="h-[220px] rounded-lg border border-border bg-bg-muted flex flex-col items-center justify-center gap-2 text-center">
                <span className="text-[20px]">📍</span>
                <p className="text-[14px] font-medium text-text-main">
                  Regensburg & Umgebung
                </p>
                <p className="text-[13px] text-text-muted">
                  Kartenansicht (Platzhalter)
                </p>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
