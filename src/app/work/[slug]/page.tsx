import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/views/CaseStudyPage";
import JsonLd from "@/components/JsonLd";
import { caseStudies, getCaseStudy } from "@/constants";
import { caseStudyOgImage, caseStudyPath, site } from "@/lib/site";
import { caseStudySchema } from "@/lib/structured-data";

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

  const url = caseStudyPath(project.slug);
  const title = `${project.name} — ${site.name}`;
  const image = {
    url: caseStudyOgImage(project.slug),
    alt: `${project.name} case study by ${site.name}`,
  };

  return {
    title: `${project.name}: ${project.kind}`,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: site.name,
      title,
      description: project.summary,
      url,
      images: [{ ...image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={caseStudySchema(project)} />
      <CaseStudyPage project={project} />
    </>
  );
}
