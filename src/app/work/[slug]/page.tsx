import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/views/CaseStudyPage";
import { caseStudies, getCaseStudy } from "@/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return {};
  }

  const canonical = `/work/${project.slug}`;

  return {
    title: `${project.name}: ${project.kind}`,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: `${project.name} — Robert Gizelo`,
      description: project.summary,
      url: canonical,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Robert Gizelo`,
      description: project.summary,
      images: [project.cover.src],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `https://www.gizelo.dev/work/${project.slug}`,
    genre: project.kind,
    creator: {
      "@type": "Person",
      name: "Robert Gizelo",
      url: "https://www.gizelo.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <CaseStudyPage project={project} />
    </>
  );
}
