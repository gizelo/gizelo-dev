import { absoluteUrl, caseStudyOgImage, caseStudyPath, site } from "@/lib/site";
import { CaseStudy } from "@/types";

const websiteId = absoluteUrl("/#website");
const personId = absoluteUrl("/#person");

const personRef = { "@type": "Person", "@id": personId, name: site.name, url: absoluteUrl() };

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: absoluteUrl(),
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": absoluteUrl("/#profile"),
      url: absoluteUrl(),
      name: site.title,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      ...personRef,
      jobTitle: site.jobTitle,
      description: site.description,
      image: absoluteUrl(site.portrait),
      sameAs: Object.values(site.social),
      knowsAbout: [
        "Full-stack development",
        "Web development",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "React Native",
        "Electron",
        "LLM integrations",
      ],
    },
  ],
};

export const caseStudySchema = (project: CaseStudy) => {
  const url = absoluteUrl(caseStudyPath(project.slug));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        url,
        name: project.name,
        description: project.summary,
        genre: project.kind,
        keywords: project.stack,
        image: absoluteUrl(caseStudyOgImage(project.slug)),
        inLanguage: "en",
        creator: personRef,
        isPartOf: { "@type": "WebSite", "@id": websiteId, url: absoluteUrl(), name: site.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: project.name, item: url },
        ],
      },
    ],
  };
};
