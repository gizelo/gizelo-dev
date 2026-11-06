import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResponsiveImage from "@/components/ResponsiveImage";
import GirexMobileShowcase from "@/components/GirexMobileShowcase";
import ProjectCta from "@/components/ProjectCta";
import RoleLabel from "@/components/RoleLabel";
import { caseStudies } from "@/constants";
import { CaseStudy } from "@/types";

type CaseStudyPageProps = {
  project: CaseStudy;
};

const CaseStudyPage = ({ project }: CaseStudyPageProps) => {
  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const facts = [
    ["Role", project.roleTitle],
    ["Timeline", project.timeline],
    ["Stack", project.stack],
    ["Status", project.status],
  ];
  const inShort = [
    ["The problem", project.problem],
    ["My part", project.myPart],
    ["Where it is now", project.outcome],
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-ink">
      <SiteHeader />
      <main id="main-content">
        <article>
          <header className="site-container pt-6 sm:pt-8">
            <Link
              href="/#work"
              className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink/65 hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to work
            </Link>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
              <div>
                <RoleLabel role={project.role} />
                <h1 className="mt-5 text-[clamp(2.75rem,6vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.055em]">
                  {project.name}
                </h1>
                <p className="mt-3 font-medium text-ink/60">
                  {[project.kind, project.client && `for ${project.client}`]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink/75 sm:text-[1.375rem]">
                  {project.summary}
                </p>
                {project.detail && (
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink/60">{project.detail}</p>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-electric hover:text-electric-dark"
                  >
                    Visit the live site
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
              <dl className="grid grid-cols-[max-content_1fr] gap-x-6">
                {facts.map(([label, value], index) => (
                  <div key={label} className="contents">
                    <dt
                      className={`py-3 text-sm text-ink/60 ${index > 0 ? "border-t border-ink/15" : ""}`}
                    >
                      {label}
                    </dt>
                    <dd
                      className={`m-0 py-3 text-[15px] font-medium ${index > 0 ? "border-t border-ink/15" : ""}`}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="mt-10 bg-ink/[0.04] lg:mt-14">
              {project.phones ? (
                <GirexMobileShowcase images={project.phones} />
              ) : (
                <ResponsiveImage
                  {...project.cover}
                  className="h-auto w-full"
                  sizes="(max-width: 1320px) 100vw, 1240px"
                  eager
                />
              )}
              {project.cover.caption && !project.phones && (
                <figcaption className="bg-white pt-3 text-sm text-ink/60">
                  {project.cover.caption}
                </figcaption>
              )}
            </figure>
          </header>

          <section className="py-16 md:py-24">
            <div className="site-container">
              <h2 className="text-3xl font-bold leading-none tracking-[-0.045em] md:text-5xl">
                In short.
              </h2>
              <dl className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
                {inShort.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                      {label}
                    </dt>
                    <dd className="m-0 mt-3 text-lg leading-relaxed text-ink/80">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="bg-ink py-16 text-white md:py-24">
            <div className="site-container">
              <h2 className="text-3xl font-bold leading-none tracking-[-0.045em] md:text-5xl">
                The screens.
              </h2>
              <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
                {project.screens.map((screen, index) => {
                  const wide = index === 0 && project.screens.length % 2 === 1;

                  return (
                    <figure key={screen.src} className={wide ? "md:col-span-2" : undefined}>
                      <ResponsiveImage
                        {...screen}
                        className="h-auto w-full"
                        sizes={
                          wide
                            ? "(max-width: 1320px) 100vw, 1240px"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                      />
                      {screen.caption && (
                        <figcaption className="mt-3 text-sm text-white/70">
                          {screen.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <h2 className="text-3xl font-bold leading-none tracking-[-0.045em] md:text-5xl">
                What I built.
              </h2>
              <ul role="list" className="max-w-[65ch] divide-y divide-ink/15">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-4 py-4 text-lg leading-relaxed first:pt-0">
                    <Check className="mt-1.5 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {project.scale && (
              <div className="site-container mt-12 lg:mt-16">
                <h3 className="sr-only">Scale</h3>
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-6 bg-ink/[0.04] p-6 sm:p-8 lg:grid-cols-4"
                >
                  {project.scale.map(({ value, label }) => (
                    <li key={label}>
                      <span className="block font-display text-4xl font-bold tracking-[-0.04em]">
                        {value}
                      </span>
                      <span className="text-[15px] text-ink/70">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </article>

        <ProjectCta
          next={{ href: `/work/${nextProject.slug}`, label: `Next: ${nextProject.name}` }}
        />
      </main>
      <SiteFooter />
    </div>
  );
};

export default CaseStudyPage;
