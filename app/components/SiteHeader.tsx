"use client";

import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const phone = "+916360644158";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Bar & Lounge", href: "/bar-lounge" },
  { label: "Banquets", href: "/banquets" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const home = window.location.pathname === "/";
    setIsHome(home);

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass =
    isHome && !scrolled
      ? "site-header home-header"
      : "site-header inner-header";

  return (
    <header className={headerClass}>
      <a className="brand" href="/" aria-label="Hotel Shiva Inn home">
        <Image
          src="/logodark.png"
          alt="Hotel Shiva Inn"
          width={96}
          height={68}
          priority
        />
      </a>

      <nav
        className={menuOpen ? "nav nav-open" : "nav"}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="icon-link"
          href={`tel:${phone}`}
          aria-label="Call Hotel Shiva Inn"
        >
          <Phone size={18} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
