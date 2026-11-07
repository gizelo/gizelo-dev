import type { MetadataRoute } from "next";
import { caseStudies } from "@/constants";
import { absoluteUrl, caseStudyOgImage, caseStudyPath, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), images: [absoluteUrl(site.ogImage)] },
    ...caseStudies.map(({ slug }) => ({
      url: absoluteUrl(caseStudyPath(slug)),
      images: [absoluteUrl(caseStudyOgImage(slug))],
    })),
  ];
}
