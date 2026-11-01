import Image from "next/image";
import { ArrowDown, ArrowUpRight, Rocket, Store, Wrench } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ResponsiveImage from "@/components/ResponsiveImage";
import SectionLink from "@/components/SectionLink";
import { caseStudies, contributions } from "@/constants";

const projectSteps = [
  {
    title: "Start with a conversation",
    body: "Bring an idea, a link or a problem. I ask questions to understand what your business needs and who it needs to work for.",
  },
  {
    title: "Get a clear plan",
    body: "I outline what to build, what can wait and the time and cost involved, so you can decide before the work starts.",
  },
  {
    title: "See it take shape",
    body: "I share working versions as I build. You can try things out and give feedback before the final details are settled.",
  },
  {
    title: "Go live and take over",
    body: "I check the key journeys, handle the launch and walk you through what you need to manage it. Then I help you plan any next steps.",
  },
];

const services = [
  {
    icon: Rocket,
    title: "Launch an MVP",
    body: "Give your idea a first version people can try. I help you choose what matters for launch and build it without piling on extras.",
  },
  {
    icon: Store,
    title: "Build a website or online store",
    body: "Give customers a clear way to explore your business, browse products and get in touch, with content you can update yourself.",
  },
  {
    icon: Wrench,
    title: "Improve an existing app",
    body: "Add a feature, connect another service or fix a workflow that gets in the way. I work with your current setup and team.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-ink">
      <SiteHeader />
      <main id="main-content">
        <section className="site-container grid items-center gap-12 py-14 sm:gap-20 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-14">
          <div className="relative z-10">
            <p className="eyebrow">Robert Gizelo — Web / Mobile Development</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.5rem,7.2vw,7rem)] font-bold leading-[0.9] tracking-[-0.065em] text-ink">
              Websites and apps for your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Websites, online stores and mobile apps — built around what your business needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SectionLink
                href="/#contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark"
              >
                Contact me
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </SectionLink>
              <SectionLink
                href="/#work"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 border border-ink/25 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
              >
                View my work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
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

        <section id="services" className="border-t border-ink/10 bg-white py-16 sm:py-20">
          <div className="site-container">
            <h2 className="text-4xl font-bold tracking-[-0.045em] text-ink sm:text-5xl">
              Tell me what you need.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              I’ll help you figure out the next step.
            </p>
            <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
              {services.map(({ icon: Icon, title, body }) => (
                <li key={title} className="border-t border-ink/20 pt-6">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-lime">
                    <Icon className="h-8 w-8 text-electric" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-ink">{title}</h3>
                  <p className="mt-4 leading-relaxed text-ink/70">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="section-space border-t border-ink/10 bg-white">
          <div className="site-container">
            <h2 className="mb-12 text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
              Work I’m proud of.
            </h2>

            <ProjectCard project={caseStudies[0]} featured />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {caseStudies.slice(1).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space border-t border-ink/10 bg-white">
          <div className="site-container">
            <h2 className="text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
              Four steps to get it live.
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {projectSteps.map(({ title, body }, index) => (
                <li key={title} className="border-t border-ink/20 pt-6">
                  <span
                    className="text-sm font-semibold tracking-[0.12em] text-electric"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink/70">{body}</p>
                </li>
              ))}
            </ol>
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
              Proud to have been part of.
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

        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
};

export default HomePage;
