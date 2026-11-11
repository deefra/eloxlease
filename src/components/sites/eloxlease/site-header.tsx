"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { LEASEVOORSTEL_HREF, navItems, PHONE_HREF, type NavItem } from "./site-data";

function NavLink({ item, current, onClick }: { item: NavItem; current: boolean; onClick?: () => void }) {
  if (!item.href.startsWith("/")) return <a href={item.href}>{item.label}</a>;
  return (
    <Link href={item.href} aria-current={current ? "page" : undefined} onClick={onClick}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.matchMedia("(max-width: 1024px)").matches ? 70 : 100;
      setIsSticky(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className={cn("site-header", isSticky && "is-sticky")}>
        <div className="site-header-bar">
          <div className="container site-header-inner">
            <Link href="/" className="site-logo" aria-label="Site logo">
              <Image
                src="/sites/eloxlease/logo.png"
                alt=""
                width={430}
                height={430}
                preload
              />
            </Link>

            <nav className="main-nav desktop-only" aria-label="Main navigation">
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink item={item} current={item.href === pathname} />
                  </li>
                ))}
              </ul>
            </nav>

            <a href={PHONE_HREF} className="header-phone desktop-only">
              <Image
                src="/sites/eloxlease/repair-phone-call.svg"
                alt=""
                width={32}
                height={32}
              />
              (085)7605170
            </a>

            <Link href={LEASEVOORSTEL_HREF} className="btn btn-color-alt header-cta">
              Ontvang offerte
            </Link>

            <button
              type="button"
              className="burger mobile-only"
              aria-label="Open mobile menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn("drawer-overlay", menuOpen && "is-open")}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="mobile-navigation"
        className={cn("mobile-drawer", menuOpen && "is-open")}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                item={item}
                current={item.href === pathname}
                onClick={() => setMenuOpen(false)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
