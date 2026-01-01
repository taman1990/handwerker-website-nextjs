"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { useActiveSection } from "@/lib/useActiveSection";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useActiveSection([
    "leistungen",
    "ueber-uns",
    "kontakt",
  ]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    `block w-full px-5 py-4 text-[15px] transition ${
      active === id
        ? "text-text-main font-medium border-l-2 border-primary bg-bg-muted"
        : "text-text-muted hover:text-text-main"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-main">
      <Container>

        {/* Top bar */}
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            scrolled ? "py-2" : "py-3 md:py-4"
          }`}
        >

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 text-text-main"
            onClick={() => setOpen(false)}
          >
            <div
              className={`flex items-center justify-center rounded-md bg-primary text-bg-main font-semibold transition-all duration-200 ${
                scrolled
                  ? "h-7 w-7 text-[12px]"
                  : "h-8 w-8 text-[13px]"
              }`}
            >
              EM
            </div>

            <span
              className={`font-semibold leading-none transition-all duration-200 ${
                scrolled
                  ? "text-[14px]"
                  : "text-[15px] sm:text-[16px]"
              }`}
            >
              Elektro Müller
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[14px]">
            <a
              href="#leistungen"
              className={`${linkClass("leistungen")
                .replace("block w-full px-5 py-4", "")} px-[3px]`}
            >
              Leistungen
            </a>

            <a
              href="#ueber-uns"
              className={`${linkClass("ueber-uns")
                .replace("block w-full px-5 py-4", "")} px-[3px]`}
            >
              Über uns
            </a>

            <a
              href="#kontakt"
              className={`${linkClass("kontakt")
                .replace("block w-full px-5 py-4", "")} px-[3px]`}
            >
              Kontakt
            </a>

          </nav>

          {/* Phone (desktop only) */}
          <a
            href="tel:01760000000"
            className="hidden md:block text-[14px] font-semibold text-primary"
          >
            ☎ 0176 0000000
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-md text-text-main focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="17" y2="17" />
                  <line x1="17" y1="5" x2="5" y2="17" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

        </div>

        {/* Mobile nav panel */}
        {open && (
          <div className="md:hidden border-t border-border bg-bg-main">
            <nav className="flex flex-col py-2">
              <a
                href="#leistungen"
                onClick={() => setOpen(false)}
                className={linkClass("leistungen")}
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                onClick={() => setOpen(false)}
                className={linkClass("ueber-uns")}
              >
                Über uns
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className={linkClass("kontakt")}
              >
                Kontakt
              </a>

              {/* Mobile phone */}
              <a
                href="tel:01760000000"
                className="mt-2 px-5 py-4 text-[15px] font-semibold text-primary"
              >
                ☎ 0176 0000000
              </a>
            </nav>
          </div>
        )}

      </Container>
    </header>
  );
}
