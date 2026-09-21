"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const basePath = import.meta.env.VITE_BASE_PATH ?? "";
const links = [
  { href: "#flavour", text: "What we make" },
  { href: "#process", text: "Our approach" },
  { href: "#about", text: "The studio" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header className="site-header shell" ref={header}>
      <a
        className="brand"
        href="#top"
        aria-label="Noodle Dragon Studio — home"
        onClick={() => setOpen(false)}
      >
        <Image
          src={`${basePath}/brand/logo-horizontal-apps-games.png`}
          alt=""
          width={2172}
          height={724}
          className="brand-logo"
          priority
        />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.text}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#contact">
        Let’s talk <span aria-hidden="true">↗</span>
      </a>
      <button
        className="menu-toggle"
        ref={toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        className="mobile-menu"
        id="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((link, i) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <span>0{i + 1}</span>
            {link.text}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          <span>04</span>Let’s talk<span aria-hidden="true">↗</span>
        </a>
        <p>macOS apps · Mobile apps · Mobile games</p>
      </nav>
    </header>
  );
}
