"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] py-6 flex justify-between items-center backdrop-blur-xl border-b border-accent/10 transition-all duration-300 ${
        isScrolled ? "bg-primary/95" : "bg-primary/80"
      }`}
    >
      <Link href="/" className="text-3xl font-extrabold gradient-text tracking-tight">
        talytale
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-text-secondary font-medium hover:text-text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-bright after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="hidden md:inline-block px-7 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all"
      >
        Get Started
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-text-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-accent/10 md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary font-medium hover:text-text-primary transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-block px-7 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-bright transition-all mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
