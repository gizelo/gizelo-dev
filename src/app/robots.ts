import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://gizelo.dev/sitemap.xml",
    host: "https://gizelo.dev",
  };
}
