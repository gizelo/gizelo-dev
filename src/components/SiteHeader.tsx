import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { handleInternalLink } from "@/lib/navigation";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="site-container flex h-20 items-center justify-between">
        <a
          href="/"
          onClick={(event) => handleInternalLink(event, "/")}
          className="focus-ring inline-flex items-center"
          aria-label="Robert Gizelo, home"
        >
          <img
            src="/gizelo-logo-full.svg"
            alt=""
            className="h-9 w-auto brightness-0"
            aria-hidden="true"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleInternalLink(event, link.href)}
              className="focus-ring text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(event) => handleInternalLink(event, "/#contact")}
            className="focus-ring inline-flex min-h-11 items-center gap-2 bg-electric px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-dark"
          >
            Reach me
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 top-20 z-40 min-h-[calc(100vh-5rem)] border-t border-ink/10 bg-paper px-8 py-10 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => {
                handleInternalLink(event, link.href);
                setOpen(false);
              }}
              className="focus-ring border-b border-ink/10 py-5 text-3xl font-semibold text-ink"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
