import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/types";
import ResponsiveImage from "@/components/ResponsiveImage";

type ProjectCardProps = {
  project: CaseStudy;
  featured?: boolean;
};

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const href = `/work/${project.slug}`;
  const supportingImages = project.media
    ? [project.media.lead, ...project.media.grid].filter(
        (image): image is NonNullable<typeof image> => Boolean(image),
      )
    : (project.gallery ?? []).filter((image) => !image.portrait);
  const previewImages = [project.cover, ...supportingImages].slice(0, 3);

  const preview = (
    <Link
      href={href}
      className={`focus-ring group/preview grid overflow-hidden ${
        featured ? "gap-2 bg-black p-2" : "gap-1.5 border-b border-ink/10 bg-white p-1.5"
      }`}
      aria-label={`View ${project.name} case study`}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <ResponsiveImage
          {...previewImages[0]}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.015]"
          sizes={featured ? "(max-width: 1024px) 100vw, 64vw" : "(max-width: 1024px) 100vw, 50vw"}
          eager={featured}
        />
      </div>
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
        {previewImages.slice(1).map((image) => (
          <div key={image.src} className="aspect-[16/9] overflow-hidden">
            <ResponsiveImage
              {...image}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.015]"
              sizes={featured ? "(max-width: 1024px) 50vw, 32vw" : "(max-width: 1024px) 50vw, 25vw"}
            />
          </div>
        ))}
      </div>
    </Link>
  );

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
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href={href}
                className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 bg-white px-6 py-3 font-semibold text-ink transition-colors hover:bg-white/90 sm:w-auto"
              >
                View case
                <ArrowRight className="h-4 w-4 text-electric" aria-hidden="true" />
              </Link>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 font-semibold text-white/78 transition-colors hover:text-white sm:justify-start"
                  aria-label={`Visit ${project.name} product (opens in a new tab)`}
                >
                  Visit product
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          {preview}
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-ink/15 bg-white">
      {preview}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-3xl font-bold tracking-[-0.035em] text-ink">{project.name}</h3>
        <p className="mt-2 text-ink/60">{project.category}</p>
        <p className="mt-5 flex-1 leading-relaxed text-ink/70">{project.summary}</p>
        <div className="mt-7 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-5">
          <Link
            href={href}
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 bg-electric px-6 py-3 font-semibold text-white transition-colors hover:bg-electric-dark sm:w-auto"
          >
            View case
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 font-semibold text-ink/62 transition-colors hover:text-electric sm:justify-start"
              aria-label={`Visit ${project.name} product (opens in a new tab)`}
            >
              Visit product
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
