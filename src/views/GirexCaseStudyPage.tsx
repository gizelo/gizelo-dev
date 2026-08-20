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
  sizes: string;
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

const ProductFigure = ({ image, sizes }: ProductFigureProps) => (
  <div className="overflow-hidden border border-white/15 bg-black">
    <ResponsiveImage {...image} className="h-auto w-full" sizes={sizes} />
  </div>
);

const GirexCaseStudyPage = ({ project }: GirexCaseStudyPageProps) => {
  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const media = project.media;

  if (!media) {
    return null;
  }

  const lastDesktopRowStart = project.owned.length - (project.owned.length % 2 || 2);
  const webStoryTitles = [
    "A complete P2P deal flow.",
    "Offline exchange, modeled around locations.",
    "A single customer view for trust and funds.",
    "Tools for day-to-day merchant operations.",
    "Operational control across the platform.",
  ];
  const webStoryDescriptions = [
    "The beta connects offers, escrow-backed deals, payment details, clear order states and real-time chat in one continuous journey.",
    ...media.grid.map((image) => image.caption ?? image.alt),
  ];
  const webStories = media.lead ? [media.lead, ...media.grid] : media.grid;
  const mobileStoryTitles = ["Wallets and balances", "P2P marketplace", "Offline exchange map"];
  const mobileStoryDescriptions = [
    "The web dashboard and profile become one simpler home for balances, wallets and account status.",
    "Frequent destinations stay in the tab bar, while Create Offer remains available without dominating the mobile journey.",
    "Exchange discovery becomes a full-screen map with a draggable results panel designed for one-handed use.",
  ];

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
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">My role.</h2>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/68">
                I worked across product definition, team coordination and hands-on delivery—from
                shaping flows and scope to rebuilding the web frontend and creating the mobile app.
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
                Key product decisions.
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

          <section className="relative overflow-hidden border-t border-white/10 bg-ink py-16 text-white sm:py-20 lg:py-24">
            <Image
              src="/asterisk-color.svg"
              alt=""
              width={180}
              height={180}
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-5 h-12 w-12 sm:right-10 sm:top-8 sm:h-28 sm:w-28 lg:right-[max(2.5rem,calc((100vw-82rem)/2))]"
            />
            <div className="site-container relative">
              <div className="max-w-3xl">
                <h2 className="w-fit text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                  Web platform.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-white/68">
                  The web beta grew from a narrow P2P proof of concept into a connected product for
                  customers, merchants and platform operations. I replaced most of the alpha
                  frontend while establishing the architecture, design system and stronger flows
                  needed for release preparation.
                </p>
              </div>

              <div className="mt-12 sm:mt-16">
                {webStories.map((image, index) => (
                  <article
                    key={image.src}
                    className="grid gap-7 border-t border-white/15 py-10 first:pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-14"
                  >
                    <div className={clsx(index % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
                      <h3 className="max-w-lg text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                        {webStoryTitles[index]}
                      </h3>
                      <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/66">
                        {webStoryDescriptions[index]}
                      </p>
                    </div>
                    <div className={clsx(index % 2 === 0 ? "lg:order-1" : "lg:order-2")}>
                      <ProductFigure image={image} sizes="(max-width: 1024px) 100vw, 58vw" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {media.mobile && media.mobile.length > 0 && (
            <section className="relative overflow-hidden border-t border-white/15 bg-ink py-16 text-white sm:py-20 lg:py-24">
              <Image
                src="/asterisk-color.svg"
                alt=""
                width={180}
                height={180}
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-5 h-12 w-12 sm:right-10 sm:top-8 sm:h-28 sm:w-28 lg:right-[max(2.5rem,calc((100vw-82rem)/2))]"
              />
              <div className="site-container relative">
                <div className="max-w-3xl">
                  <h2 className="w-fit text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                    Mobile app.
                  </h2>
                  <p className="mt-6 text-xl leading-relaxed text-white/68">
                    After recommending React Native and internal delivery, I defined the mobile
                    scope, information architecture and interaction patterns, then built a
                    TestFlight beta covering the principal customer flows.
                  </p>
                </div>

                <div className="-mx-5 mt-12 snap-x snap-mandatory overflow-x-auto px-5 pb-4 sm:-mx-10 sm:mt-16 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
                  <div className="grid auto-cols-[minmax(17rem,82vw)] grid-flow-col gap-4 lg:grid-flow-row lg:grid-cols-3 lg:auto-cols-auto lg:gap-5">
                    {media.mobile.map((image, index) => (
                      <article
                        key={image.src}
                        className="flex snap-start flex-col border border-white/15 bg-white/[0.025]"
                      >
                        <div className="min-h-52 p-6 sm:p-7">
                          <h3 className="text-2xl font-bold tracking-[-0.035em]">
                            {mobileStoryTitles[index]}
                          </h3>
                          <p className="mt-4 text-base leading-relaxed text-white/66">
                            {mobileStoryDescriptions[index]}
                          </p>
                        </div>
                        <div className="flex min-h-[32rem] flex-1 items-end justify-center overflow-hidden border-t border-white/15 px-5 pt-6 sm:min-h-[36rem] lg:min-h-[34rem]">
                          <div className="w-full max-w-[240px]">
                            <ProductFigure
                              image={image}
                              sizes="(max-width: 640px) 64vw, (max-width: 1024px) 15rem, 15rem"
                            />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
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
                  Let&apos;s build what&apos;s next.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
                  I work across product definition, UX and engineering to turn complex ideas into
                  working digital products.
                </p>
                <Link
                  href="/#contact"
                  className="focus-ring mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-white px-7 py-4 font-semibold text-electric transition-colors hover:bg-white/90 sm:w-auto"
                >
                  Tell me what you&apos;re building
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
