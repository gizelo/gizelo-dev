import { ArrowDown, ArrowRight, ArrowUpRight, Boxes, Rocket, ScanSearch } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ResponsiveImage from "@/components/ResponsiveImage";
import { caseStudies, contributions } from "@/constants";
import { handleInternalLink } from "@/lib/navigation";
import { usePageMeta } from "@/hooks/use-page-meta";

const workModes = [
  {
    icon: ScanSearch,
    title: "Define",
    body: "Turn rough ideas into clear scope, flows and trade-offs.",
  },
  {
    icon: Boxes,
    title: "Build",
    body: "Design and engineer web and mobile products end-to-end.",
  },
  {
    icon: Rocket,
    title: "Ship",
    body: "Coordinate delivery, remove blockers and prepare the release.",
  },
];

const HomePage = () => {
  usePageMeta({
    title: "Robert Gizelo — Product Builder",
    description:
      "From idea to prod. Product design, engineering and delivery across web, mobile, SaaS, fintech and crypto.",
  });

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="site-container grid items-center gap-12 py-14 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div className="relative z-10">
            <p className="eyebrow">Robert Gizelo · Product Builder</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.8rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.065em] text-ink">
              From idea to prod.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-ink/70 sm:gap-x-3 sm:text-lg">
              <span className="inline-flex h-7 w-7 items-center justify-center bg-forest p-1.5">
                <img
                  src="/asterisk-color.svg"
                  alt=""
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
              <a
                href="/#work"
                onClick={(event) => handleInternalLink(event, "/#work")}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark"
              >
                My work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/#contact"
                onClick={(event) => handleInternalLink(event, "/#contact")}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 border border-ink/25 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
              >
                Reach me
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] self-end lg:self-center">
            <div className="relative border-[10px] border-electric bg-[#ede9e3] sm:border-[14px]">
              <img
                src="/me1.jpeg"
                alt="Robert Gizelo"
                className="block h-auto w-full"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <img
              src="/asterisk-color.svg"
              alt=""
              aria-hidden="true"
              className="absolute -left-5 -top-7 h-16 w-16 bg-forest p-2 sm:-left-8 sm:-top-10 sm:h-24 sm:w-24 sm:p-3"
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
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold tracking-[-0.025em] text-ink">
                        {contribution.name}
                      </h3>
                      {contribution.nda && (
                        <span className="shrink-0 bg-forest px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-lime">
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

        <section id="about" className="section-space border-t border-ink/10 bg-forest text-white">
          <div className="site-container grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center bg-lime p-2.5">
                <img
                  src="/asterisk-color.svg"
                  alt=""
                  className="h-full w-full brightness-0"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                How I work
              </p>
              <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-6xl">
                I turn ambiguity into something people can use.
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-xl leading-relaxed text-white/78">
                I&apos;ve spent 6+ years building SaaS, fintech and crypto products—as an engineer,
                a Technical PM and an independent builder. I work across the parts that usually get
                separated: shaping the product, designing the flow and building the software.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {workModes.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="border-t border-white/25 pt-5">
                    <Icon className="h-6 w-6 text-lime" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">{body}</p>
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
