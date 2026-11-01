import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import clsx from "clsx";
import ResponsiveImage from "@/components/ResponsiveImage";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { caseStudies } from "@/constants";
import { CaseStudy, ProjectImage } from "@/types";

type StandardCaseStudyPageProps = {
  project: CaseStudy;
};

type StandardCaseSlug = "house-of-smile" | "chocolatin-labs";

type CasePresentation = {
  roleIntro: string;
  productTitle: string;
  productIntro: string;
  storyTitles: [string, string, string];
  storyDescriptions: [string, string, string];
};

const presentations: Record<StandardCaseSlug, CasePresentation> = {
  "house-of-smile": {
    roleIntro:
      "I proposed the redesign, defined the site structure and content, and built the responsive website through launch.",
    productTitle: "The website.",
    productIntro:
      "The finished experience turns a previously outdated presence into a clear patient journey: understand the practice, evaluate its services and move to booking without unnecessary friction.",
    storyTitles: [
      "A clearer first impression.",
      "Services patients can understand.",
      "Trust built from real people.",
    ],
    storyDescriptions: [
      "The homepage leads with the practice, its people and an immediate booking path instead of asking visitors to decode generic clinic information.",
      "Treatment categories and practical explanations make the clinic's offer easier to understand before a patient commits to a first appointment.",
      "The team, languages and physical practice become concrete trust signals, helping prospective patients know who will care for them.",
    ],
  },
  "chocolatin-labs": {
    roleIntro:
      "Working from the designer’s visual direction, I built the website and the tools for the client to manage dogs, litters, translations and enquiries. The system uses Next.js, Payload CMS and MongoDB.",
    productTitle: "Website & CMS.",
    productIntro:
      "The public website and its content system were designed as one product. Visitors get a polished breeder experience while the client controls every dog, litter, puppy, translation and article behind it.",
    storyTitles: [
      "A business-led homepage.",
      "A catalogue built on relationships.",
      "Puppy journeys that stay current.",
    ],
    storyDescriptions: [
      "The homepage introduces the breeder through its dogs and values, then directs prospective owners into the catalogue and enquiry journey.",
      "Dogs, parents, pedigrees and availability are connected content rather than duplicated pages, keeping the public catalogue consistent as it grows.",
      "Litters and puppies can be published, translated and updated from the CMS, with availability and enquiry paths staying current without developer support.",
    ],
  },
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
        className="aspect-[1.44/1] h-auto w-full object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 68vw"
        eager
      />
    </div>
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
      {supporting.map((image) => (
        <div key={image.src} className="overflow-hidden border border-ink/15 bg-ink">
          <ResponsiveImage
            {...image}
            className="aspect-[1.44/1] h-auto w-full object-cover object-top"
            sizes="(max-width: 1024px) 50vw, 32vw"
          />
        </div>
      ))}
    </div>
  </div>
);

const ProductFigure = ({ image }: { image: ProjectImage }) => (
  <div className="overflow-hidden border border-white/15 bg-black">
    <ResponsiveImage {...image} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 58vw" />
  </div>
);

const StandardCaseStudyPage = ({ project }: StandardCaseStudyPageProps) => {
  const presentation = presentations[project.slug as StandardCaseSlug];
  const gallery = project.gallery ?? [];
  const productImages = [project.cover, ...gallery].slice(0, 3);
  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const lastDesktopRowStart = project.owned.length - (project.owned.length % 2 || 2);

  if (!presentation || gallery.length < 2 || productImages.length < 3) {
    return null;
  }

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
                    Visit live product
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
            <HeroCollage cover={project.cover} supporting={[gallery[0], gallery[1]]} />
          </div>

          <section className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24">
            <div className="site-container grid items-start gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">The task.</h2>
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

          <section className="border-t border-white/10 bg-ink py-16 text-white sm:py-20 lg:py-24">
            <div className="site-container">
              <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl">What I built.</h2>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/68">
                {presentation.roleIntro}
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

          <section className="border-t border-ink/10 bg-white py-16 sm:py-20 lg:py-24">
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
                  {presentation.productTitle}
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-white/68">
                  {presentation.productIntro}
                </p>
              </div>

              <div className="mt-12 sm:mt-16">
                {productImages.map((image, index) => (
                  <article
                    key={`${image.src}-${index}`}
                    className="grid gap-7 border-t border-white/15 py-10 first:pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:py-14"
                  >
                    <div className={clsx(index % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
                      <h3 className="max-w-lg text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                        {presentation.storyTitles[index]}
                      </h3>
                      <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/66">
                        {presentation.storyDescriptions[index]}
                      </p>
                    </div>
                    <div className={clsx(index % 2 === 0 ? "lg:order-1" : "lg:order-2")}>
                      <ProductFigure image={image} />
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
              <div>
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

export default StandardCaseStudyPage;
