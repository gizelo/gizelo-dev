import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "./animations/FadeIn";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 py-3 bg-black z-50",
        scrolled ? "border-b border-white/10" : ""
      )}
    >
      <FadeIn direction="down" delay={800}>
        <div className="container flex items-center justify-between">
          <a href="#home" className="relative">
            <img
              src="/gizelo-logo-full.svg"
              alt="Logo"
              className="h-8 md:h-12"
            />
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
              onClick={() => (window.location.href = "#contact")}
            >
              Get in Touch
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </FadeIn>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container h-full flex flex-col">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="relative">
              <img
                src="/gizelo-logo-full.svg"
                alt="Logo"
                className="h-8 md:h-12"
              />
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 flex flex-col pt-10 space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 font-medium text-2xl tracking-wide hover:text-white transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-white hover:bg-slate-200 text-black rounded-lg px-8 py-6 text-lg mx-auto"
              onClick={() => {
                window.location.href = "#contact";
                setIsMobileMenuOpen(false);
              }}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
