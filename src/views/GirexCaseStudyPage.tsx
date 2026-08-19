import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import clsx from "clsx";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { CaseStudy, ProjectImage } from "@/types";
import { caseStudies } from "@/constants";

type GirexCaseStudyPageProps = {
  project: CaseStudy;
};

type ProductFigureProps = {
  image: ProjectImage;
  compact?: boolean;
};

type HeroCollageProps = {
  cover: ProjectImage;
  supporting: [ProjectImage, ProjectImage];
};

const HeroCollage = ({ cover, supporting }: HeroCollageProps) => (
  <div className="grid gap-3 lg:grid-cols-[2.05fr_1fr] lg:gap-4">
    <div className="overflow-hidden border border-ink/15 bg-ink">
      <ResponsiveImage
        {...cover}
        className="aspect-[1.44/1] h-auto w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 68vw"
        eager
      />
    </div>
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
      {supporting.map((image) => (
        <div key={image.src} className="overflow-hidden border border-ink/15 bg-ink">
          <ResponsiveImage
            {...image}
            className="aspect-[1.44/1] h-auto w-full object-cover"
            sizes="(max-width: 1024px) 50vw, 32vw"
          />
        </div>
      ))}
    </div>
  </div>
);

const ProductFigure = ({ image, compact = false }: ProductFigureProps) => (
  <figure>
    <a
      href={image.src}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open full-size image: ${image.alt}`}
      className="block overflow-hidden border border-white/15 bg-black outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
    >
      <ResponsiveImage
        {...image}
        className="h-auto w-full"
        sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1320px) 100vw, 1320px"}
      />
    </a>
    <figcaption className="mt-4 flex items-start justify-between gap-4 text-sm leading-relaxed text-white/68">
      <span>{image.caption ?? image.alt}</span>
      <a
        href={image.src}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 shrink-0 items-center font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
      >
        Open full size
      </a>
    </figcaption>
  </figure>
);

const GirexCaseStudyPage = ({ project }: GirexCaseStudyPageProps) => {
  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const media = project.media;

  if (!media) {
    return null;
  }

  const lastDesktopRowStart = project.owned.length - (project.owned.length % 2 || 2);

  return (
    <div className="min-h-screen bg-white text-ink">
      <SiteHeader />
      <main id="main-content">
        <article>
          <header className="site-container py-8 sm:py-10 lg:py-12">
            <Link
              href="/#work"
              className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink/60 hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to selected work
            </Link>

            <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-16">
              <div>
                <h1 className="text-[clamp(3.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-ink">
                  {project.name}
                </h1>
                <p className="mt-3 text-base font-medium text-ink/55">{project.category}</p>
                <p className="mt-5 max-w-3xl text-xl leading-relaxed text-ink/65 sm:text-[1.375rem]">
                  {project.summary}
                </p>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-electric"
                  >
                    Visit product
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>

              <dl>
                {[
                  ["Role", project.role],
                  ["Scope", project.scope],
                  ["Stage", project.stage],
                  ["Timeline", project.timeline],
                ].map(([term, description], index) => (
                  <div
                    key={term}
                    className={clsx(
                      "grid grid-cols-[5.5rem_1fr] gap-5 py-4 sm:grid-cols-[6.5rem_1fr]",
                      index < 3 && "border-b border-ink/15",
                    )}
                  >
                    <dt className="text-sm font-medium text-ink/55">{term}</dt>
                    <dd className="text-sm font-medium leading-relaxed text-ink">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          <div className="site-container pb-16 sm:pb-20">
            <HeroCollage
              cover={project.cover}
              supporting={[media.lead ?? media.grid[0], media.grid[0]]}
            />
          </div>

          <section id="context" className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24">
            <div className="site-container grid items-start gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
              <div>
                <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Context.</h2>
                <p className="mt-8 max-w-sm text-base font-semibold leading-relaxed text-ink/62">
                  {project.ownershipLabel}
                </p>
              </div>
              <div className="space-y-5">
                {project.context.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-4xl text-xl leading-relaxed tracking-[-0.015em] text-ink/76"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section
            id="what-i-did"
            className="border-t border-white/10 bg-ink py-16 text-white sm:py-20 lg:py-24"
          >
            <div className="site-container">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">What I did.</h2>
              <ul className="mt-10 grid md:grid-cols-2">
                {project.owned.map((item, index) => (
                  <li
                    key={item}
                    className={clsx(
                      "grid grid-cols-[1.5rem_1fr] items-start gap-4 py-6 text-lg leading-relaxed text-white/72",
                      index < project.owned.length - 1 && "border-b border-white/15",
                      index >= lastDesktopRowStart && "md:border-b-0",
                      index % 2 === 0 ? "md:border-r md:border-white/15 md:pr-10" : "md:pl-10",
                    )}
                  >
                    <Image
                      src="/asterisk-color.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="key-decisions"
            className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24"
          >
            <div className="site-container grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Key decisions.</h2>
              <div>
                {project.decisions.map((decision, index) => (
                  <article
                    key={decision.title}
                    className={clsx(
                      "grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[5.5rem_1fr] sm:gap-6",
                      index > 0 && "border-t border-ink/15",
                    )}
                  >
                    <span
                      className="text-4xl font-bold leading-none tracking-[-0.05em] text-electric sm:text-5xl"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.03em] text-ink">
                        {decision.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/67">
                        {decision.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-ink/10 bg-ink py-16 text-white sm:py-20 lg:py-24">
            <div className="site-container">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Product.</h2>
              {media.lead && (
                <div className="mt-10">
                  <ProductFigure image={media.lead} />
                </div>
              )}
              <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
                {media.grid.map((image) => (
                  <ProductFigure key={image.src} image={image} compact />
                ))}
              </div>
            </div>
          </section>

          {media.mobile && media.mobile.length > 0 && (
            <section className="border-t border-white/12 bg-ink py-16 text-white sm:py-20 lg:py-24">
              <div className="site-container">
                <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Mobile app.</h2>
                <ul className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
                  {media.mobile.map((image) => (
                    <li
                      key={image.src}
                      className="w-[82vw] max-w-[330px] shrink-0 snap-start sm:w-auto sm:max-w-none"
                    >
                      <ProductFigure image={image} compact />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24">
            <div className="site-container">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Outcome.</h2>
              <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em]">Delivered</h3>
                  <ul className="mt-7 space-y-4">
                    {project.delivered.map((item) => (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/72">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-ink/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <h3 className="text-2xl font-bold tracking-[-0.03em]">Current state</h3>
                  <p className="mt-6 text-xl leading-relaxed tracking-[-0.015em] text-ink/76">
                    {project.outcome}
                  </p>
                  {project.reflection && (
                    <div className="mt-10 border-l-4 border-lime bg-white p-6">
                      <h3 className="text-lg font-bold tracking-[-0.02em]">What I learned</h3>
                      <p className="mt-3 leading-relaxed text-ink/68">{project.reflection}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-ink/10 bg-electric py-14 text-white sm:py-16">
            <div className="site-container">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                    Let&apos;s build what&apos;s next.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
                    I work across product definition, UX and engineering to turn complex ideas into
                    working digital products.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="focus-ring inline-flex min-h-14 w-full items-center justify-center gap-3 bg-white px-7 py-4 font-semibold text-electric transition-colors hover:bg-white/90 lg:w-auto"
                >
                  Tell me what you&apos;re building
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-12 border-t border-white/25 pt-8 sm:mt-14 sm:pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/68">
                  Next case
                </p>
                <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                  <Link
                    href={`/work/${nextProject.slug}`}
                    className="focus-ring group inline-flex min-h-12 items-center gap-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl"
                  >
                    {nextProject.name}
                    <ArrowRight
                      className="h-6 w-6 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/#work"
                    className="focus-ring inline-flex min-h-11 items-center font-semibold text-white/72 hover:text-white"
                  >
                    All work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default GirexCaseStudyPage;
