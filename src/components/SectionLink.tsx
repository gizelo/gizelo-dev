"use client";

import { ComponentProps, MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionLinkProps = ComponentProps<typeof Link>;

const SectionLink = ({ href, onClick, ...props }: SectionLinkProps) => {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      pathname !== "/" ||
      typeof href !== "string" ||
      !href.startsWith("/#")
    ) {
      return;
    }

    const targetId = href.slice(2);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const nextHash = `#${targetId}`;
    const updateHistory = window.location.hash === nextHash ? "replaceState" : "pushState";
    window.history[updateHistory](null, "", nextHash);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
};

export default SectionLink;
