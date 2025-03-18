
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="relative z-50">
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            gizelo
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 font-medium text-sm tracking-wide hover:text-white transition-colors link-underline"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-white hover:bg-slate-200 text-black rounded-lg px-5"
            onClick={() => window.location.href = "#contact"}
          >
            Get in Touch
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="mt-4 bg-white hover:bg-slate-200 text-black rounded-lg"
            onClick={() => {
              setMobileMenuOpen(false);
              window.location.href = "#contact";
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
