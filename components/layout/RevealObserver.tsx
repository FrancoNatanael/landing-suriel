"use client";

import { useEffect } from "react";

/** Revela con una entrada suave cada elemento `.reveal` al aparecer en pantalla. */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            // Escalona los elementos que aparecen juntos (por ejemplo, una fila de tarjetas)
            el.style.transitionDelay = `${i * 0.15}s`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    root.setAttribute("data-reveal-ready", "");
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.removeAttribute("data-reveal-ready");
    };
  }, []);

  return null;
}
