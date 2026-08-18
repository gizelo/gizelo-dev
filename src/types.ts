export type ProjectSlug = "girex" | "house-of-smile" | "chocolatin-labs";

export type ProjectImage = {
  src: string;
  srcSmall?: string;
  alt: string;
  caption?: string;
  portrait?: boolean;
};

export type ProjectMedia = {
  theme: "dark" | "light";
  lead?: ProjectImage;
  grid: ProjectImage[];
  mobile?: ProjectImage[];
};

export type ProjectDecision = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: ProjectSlug;
  name: string;
  category: string;
  summary: string;
  role: string;
  scope: string;
  stage: string;
  timeline: string;
  website?: string;
  ownershipLabel: string;
  context: string[];
  owned: string[];
  decisions: ProjectDecision[];
  delivered: string[];
  outcome: string;
  reflection?: string;
  cover: ProjectImage;
  gallery?: ProjectImage[];
  media?: ProjectMedia;
};

export type Contribution = {
  name: string;
  description: string;
  image: ProjectImage;
  website?: string;
  nda?: boolean;
};
