import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Robert Gizelo — Product Builder",
  description:
    "Robert Gizelo is a Product Builder working across product definition, UX and engineering to turn complex ideas into working digital products.",
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Gizelo",
  url: "https://www.gizelo.dev",
  jobTitle: "Product Builder",
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
