"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import SectionLink from "@/components/SectionLink";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headerBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const backgroundElements = [
      headerBarRef.current,
      document.querySelector<HTMLElement>("main"),
      document.querySelector<HTMLElement>("footer"),
    ].filter((element): element is HTMLElement => element !== null);

    if (open && !dialog.open) {
      backgroundElements.forEach((element) => {
        element.inert = true;
      });
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      backgroundElements.forEach((element) => {
        element.inert = false;
      });
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      backgroundElements.forEach((element) => {
        element.inert = false;
      });
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div ref={headerBarRef} className="site-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="focus-ring inline-flex items-center"
          aria-label="Robert Gizelo, home"
        >
          <Image
            src="/gizelo-logo-full.svg"
            alt=""
            width={112}
            height={36}
            className="h-10 w-auto brightness-0"
            aria-hidden="true"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <SectionLink
              key={link.name}
              href={link.href}
              className="focus-ring text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.name}
            </SectionLink>
          ))}
          <SectionLink
            href="/#contact"
            className="focus-ring inline-flex min-h-11 items-center bg-electric px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-dark"
          >
            Contact me
          </SectionLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-white p-0 text-ink backdrop:bg-transparent lg:hidden"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="site-container flex h-20 items-center justify-between border-b border-ink/10">
          <Image
            src="/gizelo-logo-full.svg"
            alt=""
            width={112}
            height={36}
            className="h-10 w-auto brightness-0"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center text-ink"
            aria-label="Close navigation"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav className="site-container flex flex-col py-10" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <SectionLink
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring border-b border-ink/10 py-5 text-3xl font-semibold text-ink"
            >
              {link.name}
            </SectionLink>
          ))}
        </nav>
      </dialog>
    </header>
  );
};

export default SiteHeader;
