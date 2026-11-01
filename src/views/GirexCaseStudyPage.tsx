import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import clsx from "clsx";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResponsiveImage from "@/components/ResponsiveImage";
import GirexMobileShowcase from "@/components/GirexMobileShowcase";
import { CaseStudy } from "@/types";
import { caseStudies } from "@/constants";

type GirexCaseStudyPageProps = {
  project: CaseStudy;
};

const GirexCaseStudyPage = ({ project }: GirexCaseStudyPageProps) => {
  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const media = project.media;

  if (!media) {
    return null;
  }

  const lastDesktopRowStart = project.owned.length - (project.owned.length % 2 || 2);
  const webStories = media.lead ? [media.lead, ...media.grid] : media.grid;

  return (
    <div className="min-h-screen bg-white text-ink">
      <SiteHeader />
      <main id="main-content">
        <article>
          <header className="site-container py-6 sm:py-8 lg:py-6">
            <Link
              href="/#work"
              className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink/60 hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to selected work
            </Link>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-16">
              <div>
                <h1 className="text-[clamp(3.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-ink">
                  {project.name}
                </h1>
                <p className="mt-3 text-base font-medium text-ink/55">{project.category}</p>
                <p className="mt-4 max-w-3xl text-xl leading-relaxed text-ink/65 sm:text-[1.375rem]">
                  {project.summary}
                </p>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-electric"
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

          <div className="site-container pb-12 sm:pb-16">
            <GirexMobileShowcase images={media.mobile?.slice(0, 3) ?? []} />
            <p className="mt-5 text-center text-sm font-medium text-electric">Native iOS app</p>
          </div>

          <section id="native-app" className="bg-ink py-12 text-white sm:py-16 lg:pb-10 lg:pt-6">
            <div className="site-container grid items-start gap-10 lg:grid-cols-[0.8fr_1fr_1fr] lg:gap-12">
              <div className="max-w-sm lg:pt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                  Native iOS app
                </p>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Core flows on mobile.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/68">
                  Wallet overview and card top-up.
                </p>
              </div>
              {media.mobile?.slice(3).map((image) => (
                <figure key={image.src} className="mx-auto w-full max-w-[360px]">
                  <ResponsiveImage
                    {...image}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 360px, 28vw"
                  />
                  <figcaption className="mt-4 text-center text-sm font-medium text-white/70">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="web-platform" className="border-b border-ink/10 bg-white py-10 sm:py-12">
            <div className="site-container grid items-center gap-8 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
              <div>
                <p className="eyebrow">Web platform</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em]">Desktop interface.</h2>
                <p className="mt-4 leading-relaxed text-ink/65">
                  Web platform for wallet and card management.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {webStories.map((image) => (
                  <figure key={image.src}>
                    <ResponsiveImage
                      {...image}
                      className="h-auto w-full border border-ink/15"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                    />
                    <figcaption className="mt-3 text-sm text-ink/65">{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id="context" className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24">
            <div className="site-container grid items-start gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
              <div>
                <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">The task.</h2>
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
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">What I built.</h2>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/68">
                Within a small engineering team, I built customer and administrative features for
                managing wallets, cards and transactions, and a React Native/Expo iOS app connected
                to the existing backend. I also helped turn the founder’s ideas into a practical
                release plan. The web stack uses React, TypeScript, NestJS and PostgreSQL.
              </p>
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
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                How the solution took shape.
              </h2>
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

          <section className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24">
            <div className="site-container">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">The result.</h2>
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

          <section className="relative overflow-hidden border-t border-ink/10 bg-electric pb-14 pt-24 text-white sm:py-16">
            <Image
              src="/asterisk-color.svg"
              alt=""
              width={180}
              height={180}
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-5 h-16 w-16 sm:right-10 sm:top-8 sm:h-28 sm:w-28 lg:right-[max(2.5rem,calc((100vw-82rem)/2))]"
            />
            <div className="site-container relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div className="relative">
                <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                  Have a project in mind?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
                  Tell me what you need to build or improve.
                </p>
                <Link
                  href="/#contact"
                  className="focus-ring mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-white px-7 py-4 font-semibold text-electric transition-colors hover:bg-white/90 sm:w-auto"
                >
                  Contact me
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid w-full grid-cols-2 gap-3 lg:w-auto">
                <Link
                  href="/#work"
                  className="focus-ring inline-flex min-h-12 items-center justify-center border border-white/55 px-5 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 lg:min-w-40"
                >
                  All work
                </Link>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 border border-white/55 px-5 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 lg:min-w-40"
                  aria-label={`View next case: ${nextProject.name}`}
                >
                  Next case
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
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
