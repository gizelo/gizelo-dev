import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { handleInternalLink } from "@/lib/navigation";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta({
    title: "Page not found — Robert Gizelo",
    description: "The requested page could not be found.",
  });

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="site-container flex flex-1 flex-col justify-center py-20">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 max-w-4xl text-6xl font-bold tracking-[-0.055em] sm:text-8xl">
          This page isn&apos;t here.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
          The link may be outdated, or the page may have moved as the portfolio evolved.
        </p>
        <a
          href="/"
          onClick={(event) => handleInternalLink(event, "/")}
          className="focus-ring mt-9 inline-flex min-h-12 w-fit items-center gap-2 bg-electric px-6 py-3 font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </a>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
