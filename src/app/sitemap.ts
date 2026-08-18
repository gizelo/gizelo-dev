import type { MetadataRoute } from "next";
import { caseStudies } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...caseStudies.map(({ slug }) => `/work/${slug}`)];

  return routes.map((route) => ({
    url: `https://gizelo.dev${route}`,
    changeFrequency: "monthly",
    priority: route ? 0.8 : 1,
  }));
}
