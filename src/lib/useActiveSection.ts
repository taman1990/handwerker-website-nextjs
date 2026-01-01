"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= scrollPosition) {
          setActive(id);
          break;
        }
      }
    };

    handler(); // run once on mount
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);

  return active;
}
