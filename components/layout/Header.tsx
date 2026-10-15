"use client";

import { useEffect, useRef, useState } from "react";
import { header, nav } from "@/content/es";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("inicio");
      const barHeight = barRef.current?.offsetHeight ?? 0;
      const limit = (hero?.offsetHeight ?? window.innerHeight) - barHeight;
      setScrolled(window.scrollY > limit);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      ref={barRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-250 ease-in-out",
        solid
          ? "border-line bg-white/94 text-heading"
          : "border-transparent bg-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-6 md:px-8 lg:px-10">
        <a
          href={header.home}
          onClick={() => setOpen(false)}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          <Logo className={cn("transition-[filter] duration-250", solid && "brightness-0")} />
        </a>

        <nav aria-label={header.menuLabel} className="hidden items-center gap-8 nav:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base leading-body underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
          className="min-h-11 min-w-11 rounded border border-navy bg-white px-3 text-sm font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy nav:hidden"
        >
          {open ? header.menuClose : header.menuOpen}
        </button>
      </div>

      <div
        id="menu-movil"
        inert={!open}
        className={cn(
          "grid bg-white transition-[grid-template-rows,opacity] duration-500 ease-brand nav:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-line px-6 md:px-8">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-paper">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base leading-body text-heading focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
