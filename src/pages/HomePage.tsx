import { ArrowDown, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { caseStudies, contributions } from "@/constants";
import { handleInternalLink } from "@/lib/navigation";
import { usePageMeta } from "@/hooks/use-page-meta";

const HomePage = () => {
  usePageMeta({
    title: "Robert Gizelo — Product Builder",
    description:
      "I build digital products from early ideas to working software across web, mobile, SaaS, fintech and crypto.",
  });

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="site-container grid items-center gap-12 py-14 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div className="relative z-10">
            <p className="eyebrow">Robert Gizelo · Product Builder</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.9rem,7vw,7rem)] font-bold leading-[0.91] tracking-[-0.06em] text-ink">
              I build digital products from early ideas to working software.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65 sm:text-xl">
              Product thinking, UX and engineering for web, mobile and complex systems.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#work"
                onClick={(event) => handleInternalLink(event, "/#work")}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark"
              >
                View my work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/#contact"
                onClick={(event) => handleInternalLink(event, "/#contact")}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 border border-ink/25 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
              >
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink/65">
              <img src="/asterisk-color.svg" alt="" className="h-5 w-5" aria-hidden="true" />
              <span>6+ years</span>
              <span aria-hidden="true">·</span>
              <span>SaaS</span>
              <span aria-hidden="true">·</span>
              <span>Fintech</span>
              <span aria-hidden="true">·</span>
              <span>Crypto</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] self-end lg:self-center">
            <div className="relative overflow-hidden border-[10px] border-electric bg-[#ede9e3] sm:border-[14px]">
              <img
                src="/me1.jpeg"
                alt="Robert Gizelo"
                className="aspect-[5/4] w-full object-cover object-[15%_42%] sm:aspect-[16/10] lg:aspect-[4/5]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <img
              src="/asterisk-color.svg"
              alt=""
              aria-hidden="true"
              className="absolute -left-5 -top-7 h-16 w-16 sm:-left-8 sm:-top-10 sm:h-24 sm:w-24"
            />
          </div>
        </section>

        <section id="work" className="section-space border-t border-ink/10 bg-white">
          <div className="site-container">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-ink sm:text-6xl">
                  Products I shaped and built.
                </h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-ink/60">
                Selected products across crypto, healthcare and consumer services.
              </p>
            </div>

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
            <p className="eyebrow">Selected product teams I contributed to</p>
            <div className="mt-10 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
              {contributions.map((contribution) => (
                <article
                  key={contribution.name}
                  className="border-b border-r border-ink/15 bg-white p-6 sm:min-h-52 sm:p-8"
                >
                  <h3 className="text-xl font-bold tracking-[-0.025em] text-ink">
                    {contribution.name}
                    {contribution.name.includes("Web3") && (
                      <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-ink/65">
                        NDA
                      </span>
                    )}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/60">
                    {contribution.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space border-t border-ink/10 bg-forest text-white">
          <div className="site-container grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                About Robert
              </p>
              <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-6xl">
                I bring product thinking, clear UX and solid engineering together.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white/72">
              <p>
                I enjoy turning complex, loosely defined problems into useful products. I can work
                with a founder on the shape of an idea, with a product team on delivery, or own the
                full path from definition to launch.
              </p>
              <p>
                My engineering background lets me reason about feasibility and risk without losing
                the user or business problem. The result is less handoff, clearer decisions and
                products that are built to last.
              </p>
              <div className="grid gap-5 pt-4 sm:grid-cols-2">
                {[
                  ["Independent & hands-on", "I work directly with founders, clients and teams."],
                  ["End-to-end ownership", "From ambiguity and scope to working software."],
                  ["Clarity over complexity", "I cut through noise and make trade-offs explicit."],
                  ["Long-term thinking", "I care about usability, maintenance and real value."],
                ].map(([title, body]) => (
                  <div key={title} className="border-t border-white/20 pt-4">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
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
