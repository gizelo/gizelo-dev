import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/types";
import ResponsiveImage from "@/components/ResponsiveImage";

type ProjectCardProps = {
  project: CaseStudy;
  featured?: boolean;
};

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const href = `/work/${project.slug}`;

  if (featured) {
    return (
      <article className="overflow-hidden border border-ink/15 bg-ink text-white">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between gap-12 p-7 sm:p-10 lg:p-12">
            <div>
              <h3 className="text-5xl font-bold tracking-[-0.05em] sm:text-6xl">{project.name}</h3>
              <p className="mt-3 text-lg text-white/60">{project.category}</p>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-white/80">
                {project.summary}
              </p>
            </div>
            <div>
              <Link
                href={href}
                className="focus-ring inline-flex min-h-11 items-center gap-2 font-semibold text-white"
              >
                View case
                <ArrowRight className="h-4 w-4 text-lime" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <Link
            href={href}
            className="focus-ring block min-h-[360px] overflow-hidden bg-black lg:min-h-[620px]"
            aria-label={`View ${project.name} case study`}
          >
            <ResponsiveImage
              {...project.cover}
              className="h-full w-full object-cover object-left-top transition-transform duration-500 hover:scale-[1.015]"
              sizes="(max-width: 1024px) 100vw, 64vw"
              eager
            />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-ink/15 bg-white">
      <Link
        href={href}
        className="focus-ring block aspect-[16/10] overflow-hidden border-b border-ink/10 bg-paper"
        aria-label={`View ${project.name} case study`}
      >
        <ResponsiveImage
          {...project.cover}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-3xl font-bold tracking-[-0.035em] text-ink">{project.name}</h3>
        <p className="mt-2 text-ink/60">{project.category}</p>
        <p className="mt-5 flex-1 leading-relaxed text-ink/70">{project.summary}</p>
        <Link
          href={href}
          className="focus-ring mt-7 inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-electric"
        >
          View case
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
