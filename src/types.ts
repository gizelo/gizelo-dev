export type ProjectSlug = "girex" | "gimecs" | "house-of-smile" | "chocolatin-labs";

export type ProductRole = "solo" | "lead" | "team";

export type ProjectImage = {
  src: string;
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

export type CaseStudy = {
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
  cover: ProjectImage;
  phones?: ProjectImage[];
  screens: ProjectImage[];
  built: string[];
  scale?: { value: string; label: string }[];
};
