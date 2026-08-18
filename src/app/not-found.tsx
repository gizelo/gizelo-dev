import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <SiteHeader />
      <main id="main-content" className="site-container flex flex-1 items-center py-24">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-7xl">
            Page not found.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
            The page may have moved, or the address may be incorrect.
          </p>
          <Link
            href="/"
            className="focus-ring mt-8 inline-flex min-h-12 items-center bg-electric px-6 py-3 font-semibold text-white hover:bg-electric-dark"
          >
            Back home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
