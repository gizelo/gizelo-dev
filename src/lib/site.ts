export const site = {
  url: "https://www.gizelo.dev",
  name: "Robert Gizelo",
  jobTitle: "Full-Stack Developer",
  title: "Robert Gizelo — Full-Stack Developer",
  description:
    "I build web, mobile and desktop apps end to end with React, Next.js, TypeScript and Node.js. See the products I’ve built, solo, as lead developer and in teams.",
  ogImage: "/og-image.png",
  portrait: "/robert-gizelo-portrait-final.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/gizelo/",
    github: "https://github.com/gizelo",
    telegram: "https://t.me/gizelo",
  },
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export const caseStudyPath = (slug: string) => `/work/${slug}`;

export const caseStudyOgImage = (slug: string) => `${caseStudyPath(slug)}/og.png`;
