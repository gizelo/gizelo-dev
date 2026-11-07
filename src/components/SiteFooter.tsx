import Link from "next/link";
import { site } from "@/lib/site";

const SiteFooter = () => (
  <footer className="border-t border-ink/10 bg-white py-8">
    <div className="site-container flex flex-col gap-4 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Robert Gizelo</p>
      <div className="flex gap-5">
        <Link href="/" className="focus-ring hover:text-ink">
          Home
        </Link>
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring hover:text-ink"
        >
          GitHub
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring hover:text-ink"
        >
          LinkedIn
        </a>
        <a
          href={site.social.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring hover:text-ink"
        >
          Telegram
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
