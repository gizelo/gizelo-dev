import Link from "next/link";

const SiteFooter = () => (
  <footer className="border-t border-ink/10 bg-paper py-8">
    <div className="site-container flex flex-col gap-4 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Robert Gizelo</p>
      <div className="flex gap-5">
        <Link href="/" className="focus-ring hover:text-ink">
          Home
        </Link>
        <a
          href="https://www.linkedin.com/in/gizelo/"
          target="_blank"
          rel="noreferrer"
          className="focus-ring hover:text-ink"
        >
          LinkedIn
        </a>
        <a
          href="https://t.me/gizelo"
          target="_blank"
          rel="noreferrer"
          className="focus-ring hover:text-ink"
        >
          Telegram
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
