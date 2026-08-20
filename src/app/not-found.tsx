import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <SiteHeader />
      <main
        id="main-content"
        className="site-container flex flex-1 flex-col justify-center py-12 sm:py-16"
      >
        <div>
          <div
            className="flex items-center gap-3 text-[clamp(7rem,18vw,13rem)] font-bold leading-[0.72] tracking-[-0.08em] text-ink sm:gap-5"
            aria-hidden="true"
          >
            <span>4</span>
            <Image
              src="/asterisk-color.svg"
              alt=""
              width={160}
              height={160}
              className="h-[0.62em] w-[0.62em] shrink-0"
            />
            <span className="-ml-[0.08em]">4</span>
          </div>
          <h1 className="mt-10 text-5xl font-bold tracking-[-0.05em] sm:text-7xl">
            This page took a wrong turn.
          </h1>
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
