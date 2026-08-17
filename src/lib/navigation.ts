import type { MouseEvent } from "react";

export const navigate = (href: string) => {
  if (href.startsWith("http")) {
    window.location.assign(href);
    return;
  }

  const [pathname, hash] = href.split("#");
  const nextPath = pathname || window.location.pathname;
  window.history.pushState({}, "", `${nextPath}${hash ? `#${hash}` : ""}`);
  window.dispatchEvent(new PopStateEvent("popstate"));

  if (nextPath === window.location.pathname && hash) {
    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }
};

export const handleInternalLink = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  navigate(href);
};
