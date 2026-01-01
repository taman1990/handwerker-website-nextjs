import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-muted py-8 sm:py-10 md:py-12">
      <Container>

        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-4">

          {/* Brand / Business */}
          <div>
            <p className="text-[14px] font-semibold text-text-main">
              Elektro Müller
            </p>
            <p className="mt-1 text-[13px] text-text-muted">
              Meisterbetrieb für Elektroinstallationen
            </p>
            <p className="mt-1 text-[13px] text-text-muted">
              Regensburg & Umgebung
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="mb-2 text-[13px] font-semibold text-text-main">
              Leistungen
            </p>
            <ul className="space-y-1.5 text-[13px] text-text-muted">
              <li>Elektroinstallation</li>
              <li>Reparaturen & Wartung</li>
              <li>Smart Home Lösungen</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-2 text-[13px] font-semibold text-text-main">
              Kontakt
            </p>
            <ul className="space-y-1.5 text-[13px] text-text-muted">
              <li>☎ 0176 0000000</li>
              <li>kontakt@elektro-mueller.de</li>
              <li>Mo–Fr, 08:00 – 18:00</li>
            </ul>
          </div>

          {/* Legal & Project */}
          <div>
            <p className="mb-2 text-[13px] font-semibold text-text-main">
              Rechtliches
            </p>
            <ul className="space-y-1.5 text-[13px] text-text-muted">
              <li>
                <Link
                  href="/impressum"
                  className="inline-block py-1 hover:text-text-main"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="inline-block py-1 hover:text-text-main"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/taman1990/handwerker-website-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 hover:text-text-main"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 sm:my-8 border-t border-border" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 text-center text-[12px] text-text-muted md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Elektro Müller. Alle Rechte vorbehalten.
          </p>

          <p>
            Portfolio-Projekt · Nicht kommerziell
          </p>

        </div>

      </Container>
    </footer>
  );
}
