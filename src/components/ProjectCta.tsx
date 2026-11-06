import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLink from "@/components/SectionLink";

type ProjectCtaProps = {
  next?: { href: string; label: string };
};

const ProjectCta = ({ next }: ProjectCtaProps) => (
  <section className="relative overflow-hidden bg-electric py-14 text-white sm:py-20">
    <Image
      src="/asterisk-color.svg"
      alt=""
      width={96}
      height={96}
      aria-hidden="true"
      className="pointer-events-none absolute right-5 top-5 h-14 w-14 sm:right-10 sm:top-8 sm:h-20 sm:w-20 lg:right-[max(2.5rem,calc((100vw-82rem)/2))]"
    />
    <div className="site-container relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <h2 className="max-w-[16ch] pr-16 text-4xl font-bold leading-none tracking-[-0.045em] sm:text-5xl lg:pr-0 lg:text-6xl">
        Got a project in mind? Let’s make it real.
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <SectionLink
          href="/#contact"
          className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 font-semibold text-electric transition-colors hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-electric"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </SectionLink>
        {next && (
          <Link
            href={next.href}
            className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 border border-white/50 px-7 font-semibold text-white transition-colors hover:border-white focus-visible:ring-white focus-visible:ring-offset-electric"
          >
            {next.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default ProjectCta;
