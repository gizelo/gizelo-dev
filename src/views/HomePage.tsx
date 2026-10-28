import Image from "next/image";
import { ArrowDown, ArrowUpRight, Boxes, Rocket, ScanSearch } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ResponsiveImage from "@/components/ResponsiveImage";
import SectionLink from "@/components/SectionLink";
import { caseStudies, contributions } from "@/constants";

const workModes = [
  {
    icon: ScanSearch,
    title: "Define",
    body: "Scope, requirements, flows and trade-offs.",
  },
  {
    icon: Boxes,
    title: "Build",
    body: "Full-stack web and mobile development.",
  },
  {
    icon: Rocket,
    title: "Ship",
    body: "Coordinated delivery, early releases and iteration.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-ink">
      <SiteHeader />
      <main id="main-content">
        <section className="site-container grid items-center gap-12 py-14 sm:gap-20 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-14">
          <div className="relative z-10">
            <p className="eyebrow">Robert Gizelo · Product Builder</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.8rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.065em] text-ink">
              Turning ideas into working products.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-ink/70 sm:gap-x-3 sm:text-lg">
              <span>Full-stack development</span>
              <span aria-hidden="true">·</span>
              <span>Web &amp; mobile</span>
              <span aria-hidden="true">·</span>
              <span>UX</span>
              <span aria-hidden="true">·</span>
              <span>Delivery</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SectionLink
                href="/#work"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark"
              >
                My work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </SectionLink>
              <SectionLink
                href="/#contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center border border-ink/25 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
              >
                Reach me
              </SectionLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] self-end lg:self-center">
            <div className="relative border-[10px] border-electric bg-white sm:border-[14px]">
              <Image
                src="/robert-gizelo-portrait-final.jpg"
                alt="Robert Gizelo"
                width={539}
                height={539}
                quality={95}
                className="block h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 44vw"
                preload
                fetchPriority="high"
              />
            </div>
            <Image
              src="/asterisk-color.svg"
              alt=""
              width={96}
              height={96}
              aria-hidden="true"
              className="absolute -left-8 -top-8 h-16 w-16 sm:-left-12 sm:-top-12 sm:h-24 sm:w-24"
            />
          </div>
        </section>

        <section id="work" className="section-space border-t border-ink/10 bg-white">
          <div className="site-container">
            <h2 className="mb-12 text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
              Selected work.
            </h2>

            <ProjectCard project={caseStudies[0]} featured />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {caseStudies.slice(1).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section-space relative overflow-hidden border-t border-white/10 bg-ink text-white"
        >
          <Image
            src="/asterisk-color.svg"
            alt=""
            width={120}
            height={120}
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-5 h-16 w-16 sm:right-10 sm:top-8 sm:h-24 sm:w-24 lg:right-[max(2.5rem,calc((100vw-82rem)/2))]"
          />
          <div className="site-container relative">
            <h2 className="text-4xl font-bold tracking-[-0.045em] text-white sm:text-6xl">
              Products I contributed to.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contributions.map((contribution) => (
                <article
                  key={contribution.name}
                  className="group flex min-h-full flex-col overflow-hidden border border-ink/15 bg-white"
                >
                  <div className="aspect-[16/9] overflow-hidden border-b border-ink/10 bg-ink">
                    <ResponsiveImage
                      {...contribution.image}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold tracking-[-0.025em] text-ink">
                        {contribution.name}
                      </h3>
                      {contribution.nda && (
                        <span className="shrink-0 bg-electric px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                          NDA
                        </span>
                      )}
                    </div>
                    <p className="mt-4 text-sm font-medium text-ink">{contribution.role}</p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                      {contribution.description}
                    </p>
                    {contribution.website && (
                      <a
                        href={contribution.website}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-electric"
                      >
                        Visit product
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space border-t border-ink/10 bg-white">
          <div className="site-container">
            <h2 className="text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
              How I work.
            </h2>
            <p className="mt-4 text-sm font-medium text-ink/70">Frankfurt, Germany</p>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              <p className="max-w-3xl text-xl leading-relaxed text-ink/70">
                I design and develop web and mobile applications, independently and as part of a
                team, turning business ideas into working products. I combine 6+ years of software
                engineering experience with technical product management, covering requirements, UX,
                prioritization, implementation and release.
              </p>
              <ul>
                {workModes.map(({ icon: Icon, title, body }) => (
                  <li
                    key={title}
                    className="grid grid-cols-[2.25rem_1fr] items-start gap-3 border-b border-ink/20 py-6 first:pt-0 last:border-b-0 last:pb-0 sm:gap-4"
                  >
                    <Icon className="h-7 w-7 text-electric" strokeWidth={2.25} aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{title}</h3>
                      <p className="mt-2 leading-relaxed text-ink/70">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
};

export default HomePage;
