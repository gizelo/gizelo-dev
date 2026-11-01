import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Robert Gizelo — Websites & Apps for Business",
  description:
    "Websites, online stores and mobile apps built around your business. Robert Gizelo helps you launch an idea or improve what you already have.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Gizelo",
  url: "https://www.gizelo.dev",
  jobTitle: "Full-Stack Developer",
  sameAs: ["https://www.linkedin.com/in/gizelo/", "https://t.me/gizelo"],
  knowsAbout: [
    "Full-stack development",
    "Web development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React Native",
    "Content management systems",
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
