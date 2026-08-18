import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResponsiveImage from "@/components/ResponsiveImage";
import GirexCaseStudyPage from "@/views/GirexCaseStudyPage";
import { CaseStudy } from "@/types";
import { caseStudies } from "@/constants";

type CaseStudyPageProps = {
  project: CaseStudy;
};

const CaseStudyPage = ({ project }: CaseStudyPageProps) => {
  if (project.slug === "girex") {
    return <GirexCaseStudyPage project={project} />;
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  const standardImages = (project.gallery ?? []).filter((image) => !image.portrait);
  const mobileImages = (project.gallery ?? []).filter((image) => image.portrait);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main id="main-content">
        <article>
          <header className="site-container py-14 sm:py-20 lg:py-24">
            <Link
              href="/#work"
              className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink/60 hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to selected work
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="eyebrow">{project.category}</p>
                <h1 className="mt-6 text-[clamp(4rem,9vw,8rem)] font-bold leading-[0.88] tracking-[-0.065em] text-ink">
                  {project.name}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink/65 sm:text-2xl">
                  {project.summary}
                </p>
              </div>
              <dl className="grid border-l border-t border-ink/15 sm:grid-cols-2">
                {[
                  ["Role", project.role],
                  ["Scope", project.scope],
                  ["Stage", project.stage],
                  ["Timeline", project.timeline],
                ].map(([term, description]) => (
                  <div key={term} className="border-b border-r border-ink/15 bg-white p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">
                      {term}
                    </dt>
                    <dd className="mt-3 text-sm font-medium leading-relaxed text-ink">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-electric"
              >
                Visit live product
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </header>

          <div className="site-container pb-6 sm:pb-12">
            <div className="overflow-hidden border border-ink/15 bg-ink">
              <ResponsiveImage
                {...project.cover}
                className="aspect-[16/10] w-full object-cover object-top sm:aspect-[16/9]"
                sizes="(max-width: 1320px) 100vw, 1320px"
                eager
              />
            </div>
          </div>

          <section className="section-space bg-white">
            <div className="site-container grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
              <div>
                <p className="eyebrow">Context</p>
                <p className="mt-5 max-w-xs text-sm font-semibold leading-relaxed text-ink/65">
                  {project.ownershipLabel}
                </p>
              </div>
              <div className="space-y-6">
                {project.context.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-4xl text-xl leading-relaxed tracking-[-0.015em] text-ink/76 sm:text-2xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="section-space border-t border-ink/10 bg-paper">
            <div className="site-container">
              <p className="eyebrow">What I owned</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
                My contribution to the product.
              </h2>
              <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3">
                {project.owned.map((item, index) => (
                  <div
                    key={item}
                    className="min-h-48 border-b border-r border-ink/15 bg-white p-6 sm:p-8"
                  >
                    <span className="text-xs font-semibold text-electric">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-8 leading-relaxed text-ink/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-space border-t border-ink/10 bg-white">
            <div className="site-container">
              <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
                <div>
                  <p className="eyebrow">Key decisions</p>
                  <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-ink sm:text-5xl">
                    Decisions that shaped the product.
                  </h2>
                </div>
                <div className="border-t border-ink/15">
                  {project.decisions.map((decision, index) => (
                    <article
                      key={decision.title}
                      className="grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[4rem_1fr] sm:py-10"
                    >
                      <span className="text-sm font-semibold text-electric">
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
            </div>
          </section>

          {standardImages.length > 0 && (
            <section className="section-space border-t border-ink/10 bg-ink text-white">
              <div className="site-container space-y-8">
                <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                      Delivered product
                    </p>
                    <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
                      Real interfaces, not mockups.
                    </h2>
                  </div>
                  <p className="max-w-md text-lg leading-relaxed text-white/58">
                    Selected screens from the actual product and its current public or beta state.
                  </p>
                </div>
                {standardImages.map((image) => (
                  <figure key={image.src}>
                    <div className="overflow-hidden border border-white/15 bg-black">
                      <ResponsiveImage
                        {...image}
                        className="h-auto w-full"
                        sizes="(max-width: 1320px) 100vw, 1320px"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {mobileImages.length > 0 && (
            <section className="section-space border-t border-white/10 bg-ink text-white">
              <div className="site-container">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                  Native mobile product
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
                  The web product, redesigned for mobile behavior.
                </h2>
                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                  {mobileImages.map((image) => (
                    <div
                      key={image.src}
                      className="mx-auto w-full max-w-[390px] overflow-hidden border border-white/15 bg-black"
                    >
                      <ResponsiveImage
                        {...image}
                        className="h-auto w-full"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="section-space border-t border-ink/10 bg-paper">
            <div className="site-container grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow">Product delivered</p>
                <ul className="mt-8 space-y-4">
                  {project.delivered.map((item) => (
                    <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/72">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-ink/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="eyebrow">Current stage / outcome</p>
                <p className="mt-6 text-2xl leading-relaxed tracking-[-0.02em] text-ink/78">
                  {project.outcome}
                </p>
                {project.reflection && (
                  <div className="mt-10 border-l-4 border-lime bg-white p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/65">
                      What I learned
                    </p>
                    <p className="mt-3 leading-relaxed text-ink/68">{project.reflection}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="border-t border-ink/10 bg-electric py-16 text-white sm:py-20">
            <div className="site-container flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  Next case
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
                  {nextProject.name}
                </h2>
              </div>
              <Link
                href={`/work/${nextProject.slug}`}
                className="focus-ring inline-flex min-h-12 w-fit items-center gap-3 border border-white/40 px-6 py-3 font-semibold text-white hover:border-white"
              >
                View next case
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default CaseStudyPage;
