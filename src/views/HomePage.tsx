import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Boxes, Rocket, ScanSearch } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ResponsiveImage from "@/components/ResponsiveImage";
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
    body: "Web and mobile UX, architecture and implementation.",
  },
  {
    icon: Rocket,
    title: "Ship",
    body: "Coordination, release preparation and iteration.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main id="main-content">
        <section className="site-container grid items-center gap-12 py-14 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div className="relative z-10">
            <p className="eyebrow">Robert Gizelo · Product Builder</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.8rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.065em] text-ink">
              Turning ideas into working products.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-ink/70 sm:gap-x-3 sm:text-lg">
              <span className="inline-flex h-7 w-7 items-center justify-center">
                <Image
                  src="/asterisk-color.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-full w-full"
                  aria-hidden="true"
                />
              </span>
              <span>6+ years</span>
              <span aria-hidden="true">·</span>
              <span>SaaS</span>
              <span aria-hidden="true">·</span>
              <span>Fintech</span>
              <span aria-hidden="true">·</span>
              <span>Crypto</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#work"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark"
              >
                My work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/#contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center border border-ink/25 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
              >
                Reach me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] self-end lg:self-center">
            <div className="relative border-[10px] border-electric bg-[#ede9e3] sm:border-[14px]">
              <Image
                src="/me1.jpeg"
                alt="Robert Gizelo"
                width={640}
                height={640}
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
              className="absolute -left-5 -top-7 h-16 w-16 sm:-left-8 sm:-top-10 sm:h-24 sm:w-24"
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

        <section id="experience" className="section-space border-t border-ink/10 bg-paper">
          <div className="site-container">
            <h2 className="text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
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
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">
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
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <p className="max-w-2xl text-xl leading-relaxed text-ink/72">
                I&apos;ve spent 6+ years building SaaS, fintech and crypto products as an engineer,
                Technical Product Manager and independent builder. My work spans product definition,
                web and mobile UX, engineering, team coordination and release preparation.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {workModes.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="border-t border-ink/20 pt-6">
                    <Icon className="h-6 w-6 text-lime" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
                  </div>
                ))}
              </div>
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
