import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Robert Gizelo — Technical Product Manager",
  description:
    "Robert Gizelo is a Technical Product Manager shaping requirements, UX, priorities and cross-functional delivery for web and mobile products, backed by software engineering experience.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Gizelo",
  url: "https://www.gizelo.dev",
  jobTitle: "Technical Product Manager",
  sameAs: ["https://www.linkedin.com/in/gizelo/", "https://t.me/gizelo"],
  knowsAbout: [
    "Product management",
    "Product design",
    "Software engineering",
    "SaaS",
    "Fintech",
    "Crypto products",
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
