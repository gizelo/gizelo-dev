import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code,
  MonitorSmartphone,
  ScanText,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
import ProjectCta from "@/components/ProjectCta";
import SectionLink from "@/components/SectionLink";
import { featuredProductCount, products, skills } from "@/constants";

const whatIDo = [
  {
    icon: Code,
    title: "Web apps and MVPs",
    body: "From the first version to release, with the backend and database behind it.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile and desktop apps",
    body: "iOS apps in React Native and Expo. Offline desktop apps in Electron that talk to real hardware.",
  },
  {
    icon: ScanText,
    title: "AI integrations",
    body: "I use an LLM to read PDFs and CVs and fill in the form, so people only check and save.",
  },
  {
    icon: Wrench,
    title: "Improving existing apps",
    body: "New features, fixes and cleanup in an existing codebase, alongside your team or as extra hands for a studio.",
  },
];

const howIWork = [
  {
    title: "Understand the problem",
    body: "Whether it’s a ticket or an idea, I start by asking who it’s for and what has to work.",
  },
  {
    title: "Agree on a plan",
    body: "What to build first, what can wait and how long it takes. Written down, so everyone can check it.",
  },
  {
    title: "Build in small steps",
    body: "Working versions early and often, so feedback comes in while changes are still cheap.",
  },
  {
    title: "Release and hand over",
    body: "I take it to production and make sure the team or the owner can run it without me.",
  },
];

const sectionTitle = "text-4xl font-bold leading-none tracking-[-0.045em] md:text-5xl lg:text-6xl";

const HomePage = () => {
  const [flagship, ...primary] = products.slice(0, featuredProductCount);
  const secondary = products.slice(featuredProductCount);

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-ink">
      <SiteHeader />
      <main id="main-content">
        <section className="site-container grid items-center gap-12 pb-12 pt-12 sm:gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-16 lg:pt-16">
          <div className="relative z-10">
            <p className="eyebrow">Robert Gizelo — Full-Stack Developer</p>
            <h1 className="mt-6 text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.06em] text-ink">
              I build apps
              <br />
              end to end.
            </h1>
            <p className="mt-8 font-display text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
              Web · Mobile · Desktop
            </p>
            <ul
              role="list"
              aria-label="Main skills"
              className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-ink/70"
            >
              {skills.map((skill, index) => (
                <li key={skill} className="flex items-center gap-3">
                  {skill}
                  {index < skills.length - 1 && (
                    <span aria-hidden="true" className="text-ink/30">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-3 text-[15px] font-medium">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime shadow-[0_0_0_3px_rgba(179,247,83,0.35)]"
              />
              Open to new roles, projects and collaborations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SectionLink
                href="/#contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </SectionLink>
              <SectionLink
                href="/#work"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 border border-ink/25 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
              >
                See my work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </SectionLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] px-5 sm:max-w-[420px] lg:max-w-[460px]">
            <div className="border-[10px] border-electric bg-white sm:border-[12px]">
              <Image
                src="/robert-gizelo-portrait-final.jpg"
                alt="Robert Gizelo"
                width={539}
                height={539}
                quality={95}
                className="block h-auto w-full"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 420px"
                preload
                fetchPriority="high"
              />
            </div>
            <Image
              src="/asterisk-color.svg"
              alt=""
              width={72}
              height={72}
              aria-hidden="true"
              className="absolute -left-3 -top-7 h-14 w-14 sm:-left-4 sm:-top-9 sm:h-[72px] sm:w-[72px]"
            />
          </div>
        </section>

        <section id="work" className="pb-16 pt-12 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
          <div className="site-container">
            <h2 className={sectionTitle}>Products I’ve built.</h2>

            <div className="mt-10 lg:mt-14">
              <ProductCard product={flagship} variant="flagship" />
            </div>
            <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-x-10">
              {primary.map((product) => (
                <ProductCard key={product.id} product={product} variant="primary" />
              ))}
            </div>

            <h3 className="mt-20 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
              More products
            </h3>
            <ul
              role="list"
              className="mt-4 divide-y divide-ink/10 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:divide-y-0 lg:grid-cols-3"
            >
              {secondary.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} variant="secondary" />
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/gizelo"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-electric hover:text-electric-dark sm:mt-12"
            >
              More on GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>

        <ProjectCta />

        <section id="what-i-do" className="py-16 md:py-24 lg:py-28">
          <div className="site-container">
            <h2 className={sectionTitle}>What I do.</h2>
            <ul
              role="list"
              className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-10"
            >
              {whatIDo.map(({ icon: Icon, title, body }) => (
                <li key={title}>
                  <span
                    aria-hidden="true"
                    className="mb-6 flex h-14 w-14 items-center justify-center bg-electric text-white"
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="how-i-work"
          className="relative overflow-hidden bg-ink py-16 text-white md:py-24 lg:py-28"
        >
          <Image
            src="/asterisk-color.svg"
            alt=""
            width={124}
            height={124}
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-8 h-14 w-14 sm:right-8 sm:top-10 sm:h-24 sm:w-24 lg:right-[max(2.5rem,calc((100vw-82.5rem)/2+2.5rem))] lg:h-[124px] lg:w-[124px]"
          />
          <div className="site-container relative">
            <h2 className={sectionTitle}>How I work.</h2>
            <ol role="list" className="mt-12 grid pl-2 lg:mt-20 lg:grid-cols-4 lg:pl-0">
              {howIWork.map(({ title, body }, index) => (
                <li
                  key={title}
                  className="relative border-l-2 border-white/20 pb-10 pl-9 before:absolute before:-left-[9px] before:top-1.5 before:h-4 before:w-4 before:bg-electric before:shadow-[0_0_0_4px_#141613] before:content-[''] last:pb-0 last:before:bg-lime lg:border-l-0 lg:border-t-2 lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-11 lg:before:-top-[9px] lg:before:left-0"
                >
                  <span
                    aria-hidden="true"
                    className="block font-display text-5xl font-bold leading-none tracking-[-0.05em] text-white/35 lg:text-7xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/75">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 lg:py-28">
          <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className={sectionTitle}>About me.</h2>
            <div className="max-w-2xl text-xl leading-relaxed tracking-[-0.01em] sm:text-2xl">
              <p>
                I’ve been building software for over six years. What I enjoy most is owning a
                product end to end: understanding the problem, choosing the stack and getting it
                released.
              </p>
              <p className="mt-5 text-ink/70">
                I’ve done that with founders, product teams and small businesses.
              </p>
              <SectionLink
                href="/#contact"
                className="focus-ring mt-6 inline-flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.02em] text-electric hover:text-electric-dark sm:text-[1.75rem]"
              >
                Now it’s time for your product.
                <ArrowRight className="h-6 w-6 shrink-0" aria-hidden="true" />
              </SectionLink>
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
