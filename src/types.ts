import type { StaticImageData } from "next/image";

export type ProjectSlug = "girex" | "gimecs" | "house-of-smile" | "chocolatin-labs";

export type ProductRole = "solo" | "lead" | "team";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type Product = {
  id: string;
  name: string;
  kind: string;
  platforms?: string;
  client?: string;
  summary: string;
  detail?: string;
  role?: ProductRole;
  myPart: string;
  image?: ProjectImage;
  phones?: ProjectImage[];
  caseSlug?: ProjectSlug;
  website?: string;
};

type CaseStudyHero =
  | { cover: ProjectImage; phones?: never }
  | { phones: ProjectImage[]; cover?: never };

export type CaseStudy = CaseStudyHero & {
  slug: ProjectSlug;
  name: string;
  kind: string;
  client?: string;
  role: ProductRole;
  roleTitle: string;
  timeline: string;
  stack: string;
  status: string;
  website?: string;
  summary: string;
  detail?: string;
  problem: string;
  myPart: string;
  outcome: string;
  screens: ProjectImage[];
  built: string[];
  scale?: { value: string; label: string }[];
};
