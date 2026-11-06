import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Robert Gizelo — Full-Stack Developer",
  description:
    "I build web, mobile and desktop apps end to end with React, Next.js, TypeScript and Node.js. See the products I’ve built, solo, as lead developer and in teams.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Gizelo",
  url: "https://www.gizelo.dev",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/gizelo/",
    "https://github.com/gizelo",
    "https://t.me/gizelo",
  ],
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
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <HomePage />
    </>
  );
}
