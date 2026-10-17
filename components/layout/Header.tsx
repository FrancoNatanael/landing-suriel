"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { ChannelIcon } from "@/components/ui/ChannelIcon";
import { contact } from "@/content/contact";
import { header, hero, nav } from "@/content/es";
import type { NavItem } from "@/content/v2";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type HeaderProps = {
  /** Links de la barra de escritorio. */
  items?: readonly NavItem[];
  /** Links del menú móvil (suma "Inicio"). Por defecto, los mismos de la barra. */
  mobileItems?: readonly NavItem[];
};

/** LinkedIn se oculta entre el ancho donde aparece el menú completo y el ancho donde hay lugar para el ícono. */
const LINKEDIN_VISIBILITY = "nav:max-lg:hidden";

export function Header({ items = nav, mobileItems = items }: HeaderProps) {
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      ref={barRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-250 ease-in-out",
        open
          ? "border-white/15 bg-navy-night text-white"
          : solid
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
          <Logo
            className={cn(
              "transition-[filter] duration-250",
              solid && !open ? "brightness-0" : "brightness-0 invert",
            )}
          />
        </a>

        <div className="flex items-center gap-2 nav:gap-5 xl:gap-8">
          <nav
            aria-label={header.menuLabel}
            className="hidden items-center gap-5 nav:flex xl:gap-8"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm leading-body whitespace-nowrap underline-offset-4 xl:text-base hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={header.linkedinLabel}
            className={cn("flex size-11 items-center justify-center text-current transition-opacity duration-300 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current", LINKEDIN_VISIBILITY)}
          >
            <ChannelIcon name="linkedin" className="size-6" />
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? header.menuClose : header.menuOpen}
            className="flex size-12 items-center justify-center text-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current nav:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-8"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-18 bottom-0 flex flex-col justify-between overflow-y-auto bg-navy-night text-white transition-[opacity,transform] duration-500 ease-brand nav:hidden",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        )}
      >
        <ul className="border-t border-white/15 px-6 md:px-8">
          {mobileItems.map((item) => (
            <li key={item.href} className="border-b border-white/15">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-5 text-xl leading-body text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-8 pt-6 md:px-8">
          <ButtonLink
            href={hero.primaryCta.href}
            variant="light"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            {hero.primaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
